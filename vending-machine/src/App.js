import React, { Component } from "react";
import "./App.css";
import Snack from "./Snack";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<VendingMachine />}
          />
          <Route
            path="/soda"
            element={<Soda />}
          />
          <Route
            path="/snack"
            element={<Snack />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
