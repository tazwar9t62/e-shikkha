import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header bg-dark py-4">
        <a className="" href="home">
          Home
        </a>
        <a href="profile">Profile</a>
        <a href="contact">Contact</a>
      </div>
      <div className="d-flex">
        <div className="course-container col-md-9 shadow">
          <h1>courses</h1>
        </div>
        <div className="cart-container col-md-3 shadow">
          <h1>cart</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
