import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Question from './views/question';
import Home from './views/home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/question" component={Question}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
