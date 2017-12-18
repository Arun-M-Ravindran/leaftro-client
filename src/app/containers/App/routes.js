import React from 'react';
// import Assessment from 'material-ui/svg-icons/action/assessment';
import Assessment from 'material-ui-icons/Assessment';
// import GridOn from 'material-ui/svg-icons/image/grid-on';
import GridOn from 'material-ui-icons/GridOn';
// import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import PermIdentity from 'material-ui-icons/PermIdentity';
// import Web from 'material-ui/svg-icons/av/web';
import Web from 'material-ui-icons/Web';


const navBarRoutes = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Accounts', icon: <Web/>, link: '/accounts' },
    { text: 'Table Page', icon: <GridOn/>, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
};

const routePaths = {
  LOGIN: '/login',
  SIGN_UP: '/signUp',
  ACCOUNTS_LIST: '/accounts'
}

const noAuthRoutes = [routePaths.SIGN_UP];

export {
  navBarRoutes,
  routePaths,
  noAuthRoutes
};
