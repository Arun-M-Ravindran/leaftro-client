import 'babel-polyfill';
import 'eventsource-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from 'theme-default';

import '!!style-loader!css-loader!font-awesome/css/font-awesome.css';
import '!!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!!style-loader!css-loader!assets/css/stylesheets.css';
import '!!file-loader!image-webpack-loader!assets/favicon/favicon.ico';

import App from 'containers/App';
import configureStore from './configureStore';
import history from 'browserHistory';


const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

render(
  <MuiThemeProvider muiTheme={ThemeDefault}>
    <Provider store={store} >
      <Router history={history} >
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  MOUNT_NODE
);
