import GlobalStyles from './styles/GlobalStyles';
import React from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import EditInfo from './pages/EditInfo'
import Character from './pages/Character'
import Comic from './pages/Comic'
import ForgotPassword from './pages/forgot-password'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                <Route path="/sign-up" component={SignUp} />
                <ProtectedRoute path="/edit-info" component={EditInfo} />
                <ProtectedRoute path="/character/:id" component={Character} />
                <ProtectedRoute path="/comic/:id" component={Comic} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <ProtectedRoute path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    <GlobalStyles />
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
  </>
  );
}

export default App;

