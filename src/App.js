import GlobalStyles from './styles/GlobalStyles';
import React from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import ResetPassword from './pages/reset-password'
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import {isAuthenticated, logout} from './services/auth'

export const ProtectedRoute = ({ component: Component, path,...rest}) => {
  return (
      <Route
          {...rest}
          render={props => {
              if (isAuthenticated()) {
                  return <Component {...props} />;
              } else {
                  return (
                      <Redirect to={{ pathname: "/login", state: {
                          prevLocation: path,
                          error: "You need to login first!",
                        },}}/>
                  );
              }
          }}
      />
  );
};


function App() {
  return (
    <>
     <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={ResetPassword} />
                <ProtectedRoute path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    <GlobalStyles />
  </>
  );
}

export default App;

