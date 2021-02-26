import GlobalStyles from './styles/GlobalStyles';
import React from 'react';
import Login from './pages/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
            <Switch>
                <Route  path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    <GlobalStyles />
  </>
  );
}

export default App;

