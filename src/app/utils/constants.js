export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const BASE_URL = 'https://registry-django.herokuapp.com/api/'
// export const BASE_URL = 'http://127.0.0.1:8000/api/'
export const TOKEN = window.localStorage.getItem('phoenix_token');
