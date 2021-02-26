import GlobalStyles from './styles/GlobalStyles';
import React from 'react';
import Login from './pages/Login'
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

function PrivateComponent(){
  return(
    <>
    <h1>I'm Private</h1>
    <Link to="/login">
    <button onClick={() => logout()} style={{width:'40px', height:'40px', background:'blue'}}>Logout</button>
    </Link>
    </>
  )
}

function App() {
  return (
    <>
     <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/protect-route" component={PrivateComponent} />
            </Switch>
        </BrowserRouter>
    <GlobalStyles />
  </>
  );
}

export default App;

