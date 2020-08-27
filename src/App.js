import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseData from "../src/CourseData/CourseData";
import { useState } from "react";
import Course from "./Components/Course/Course";

function App() {
  let [course, setCourse] = useState(CourseData);
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
            <Course courseDetails={singleCourse}></Course>
          ))}
        </div>
        <div className="cart-container col-md-3 shadow">
          <h1>cart</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
