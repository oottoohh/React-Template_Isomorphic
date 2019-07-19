import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';
// import Auth0 from './helpers/auth0';
const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: `${process.env.PUBLIC_URL}/signin`,
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={asyncComponent(() => import('./containers/Page/signin'))}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/signin`}
        component={asyncComponent(() => import('./containers/Page/signin'))}
      />
      <RestrictedRoute
        path={`${process.env.PUBLIC_URL}/dashboard`}
        component={App}
        isLoggedIn={isLoggedIn}
      />
    </div>
  </ConnectedRouter>
);

export default connect(state => ({
  isLoggedIn: state.Auth.idToken !== null,
}))(PublicRoutes);
