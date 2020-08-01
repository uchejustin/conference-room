import React, { Component } from 'react';
import Details from "./components/Details";
import Booking from "./components/Booking";
import Edit from "./components/Edit";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Details/>
        <Booking/>
        <Edit/>
      </div>
    );
  }
}

export default App;
