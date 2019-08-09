import React, { Component } from 'react';
import Head from "./components/Head";
import "./components/style.css"
// import List from "./components/List";

import Conone from "./components/Conone";
import Routers from "./route/index"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
      {/* <List></List> */}
        {/* <Head></Head> */}
       <Routers></Routers>
     
      </>
    );
  }
}

export default App;