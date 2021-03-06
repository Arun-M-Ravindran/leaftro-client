import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import invariant from 'invariant';
import conformsTo from 'lodash/conformsTo';

import checkStore from './checkStore';
import { DAEMON, RESTART_ON_REMOUNT, ONCE_TILL_UNMOUNT } from './constants';


const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = key => invariant(
  isString(key) && !isEmpty(key),
  '(app/utils..) injectSaga: Expected key to be a non empty string.'
);

const checkDescriptor = descriptor => {
  const shape = {
    saga: isFunction,
    mode: mode => isString(mode) && allowedModes.includes(mode)
  }

  invariant(
    conformsTo(descriptor, shape),
    '(app/utils..) injectSaga: Expected a valid saga descriptor'
  );
};

export function injectSagaFactory(store, isValid) {
  return function injectSaga(key, descriptor = {}, args) {
    if (!isValid) checkStore(store);

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || RESTART_ON_REMOUNT
    }
    const { saga, mode } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSaga, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSaga[key];
      // enable hot reloading of daemon & once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (!hasSaga || (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)) {
      store.injectedSaga[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args)
      };
    }
  };
}

export function ejectSagaFactory(store, isValid) {
  return function ejectSaga(key) {
    if (!isValid) checkStore(store);

    checkKey(key);

    if (Reflect.has(store.injectedSaga, key)) {
      const descriptor = store.injectedSaga[key];
      if (descriptor.mode !== DAEMON) {
        descriptor.task.cancel();
        // clean up in production. For development we need `descriptor.saga` for reloading.
        if (process.env.NODE_ENV === 'production') {
          // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`.
          store.injectedSaga[key] = 'done';
        }
      }
    }
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true)
  };
}
