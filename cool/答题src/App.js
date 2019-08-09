import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Question from './pages/Question';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/question" component={Question}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
