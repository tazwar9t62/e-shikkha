import React from "react";
import "./App.css";
import CourseData from "../src/CourseData/CourseData";
import { useState } from "react";
import Course from "./Components/Course/Course";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";

function App() {
  let [course, setCourse] = useState(CourseData); //For courses
  let [cart, setCart] = useState([]);
  //function to handle enroll button
  let handleButton = (pdt) => {
    let newCart = [...cart, pdt];
    setCart(newCart);
  };
  return (
    <div className="App">
      <Header></Header>
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
