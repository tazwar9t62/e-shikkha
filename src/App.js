import React from "react";
import "./App.css";
import CourseData from "../src/CourseData/CourseData";
import { useState } from "react";
import Course from "./Components/Course/Course";
import Cart from "./Components/Cart/Cart";

function App() {
  let [course, setCourse] = useState(CourseData);
  let [cart, setCart] = useState([]);
  let handleButton = (pdt) => {
    let newCart = [...cart, pdt];
    setCart(newCart);
  };
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
          {course.map((singleCourse) => (
            <Course
              courseDetails={singleCourse}
              handleButton={handleButton}
              key={singleCourse.id}
            ></Course>
          ))}
        </div>
        <div className="cart-container col-md-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
