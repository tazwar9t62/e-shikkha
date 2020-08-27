import React from "react";

const Course = (props) => {
  console.log(props.courseDetails);
  let {
    title,
    img,
    instructor,
    rating,
    duration,
    student,
    price,
  } = props.courseDetails;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default Course;
