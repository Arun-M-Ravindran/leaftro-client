import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from 'theme-default';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { navBarRoutes, routePaths, noAuthRoutes } from './routes';
import Header from 'components/Header';
import LeftDrawer from 'components/LeftDrawer';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import browserHistory from 'browserHistory';

import Login from 'containers/Login';
import Accounts from 'containers/Accounts';
import SignUp from 'containers/SignUp';
import { makeSelectUser, makeSelectIsChecking, makeSelectIsAuthenticated } from './selectors';
import saga from './sagas';
import reducer from './reducers';
import { authValidate, authenticated } from './actions';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true,
      isAuthenticated: false,
      userId: null,
      userData: {}
    };
  }

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      if (noAuthRoutes.includes(this.props.history.location.pathname)) {
        console.log(this.props.history)
      } else {
        this.props.authValidate();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {

    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '65px 20px 20px 5px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      },
      page: {
        margin: '15px 20px 20px 15px'
      }
    };

    const showHeader = () => {
      if (this.props.isAuthenticated) {
        return (
          <div>
            <Header
              styles={styles.header}
              handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
            />

            <LeftDrawer navDrawerOpen={navDrawerOpen}
              menus={navBarRoutes.menus}
              username="User Admin"
            />
          </div>
        );
      }
    }

    return (

      <div>
        {showHeader()}
        <div style={ this.props.isAuthenticated ? styles.container : styles.page }>
          <Switch>
            <Route exact path={routePaths.LOGIN}
              render={ () => <Login onLogin={this.props.authenticated} /> }
            />
            <Route exact path={routePaths.SIGN_UP} component={SignUp} />
            <Route path={routePaths.ACCOUNTS_LIST} component={Accounts} />
          </Switch>
        </div>
      </div>

    );
  }
}

App.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUser(),
  isChecking: makeSelectIsChecking(),
  isAuthenticated: makeSelectIsAuthenticated()
});

const mapDispatchToProps = dispatch => {
  return {
    authValidate: () => dispatch(authValidate()),
    authenticated: () => dispatch(authenticated()),
    dispatch
  };
};


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);




    // return (
    //   <MuiThemeProvider muiTheme={ThemeDefault}>
    //     <div>
    //       <Header styles={styles.header}
    //               handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

    //         <LeftDrawer navDrawerOpen={navDrawerOpen}
    //                     menus={navBarRoutes.menus}
    //                     username="User Admin"/>

    //         <div style={styles.container}>
    //           <Switch>
    //             <Route path="/accounts" component={Accounts} />
    //           </Switch>
    //         </div>
    //     </div>
    //   </MuiThemeProvider>
    // );

    // <Route exact path="/login" component={Login} />
