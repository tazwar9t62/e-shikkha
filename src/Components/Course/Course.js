import React from "react";

const Course = (props) => {
  //   console.log(props.courseDetails);
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
    <div className="">
      <div className="course-container shadow p-3 m-3 d-flex">
        <img src={img} alt="" />
        <div className="course-details ml-3">
          <h4 className="text-primary">{title}</h4>
          <p>
            <small>Instructor: {instructor}</small>
          </p>
          <p>
            <small>Rating: {rating}</small>
          </p>
          <p>
            <small>Duration: {duration} hours</small>
          </p>
          <p>
            <small>Students Enrolled: {student}</small>
          </p>
          <br />
          <h6>Price: ${price}</h6>
          <button
            className="btn btn-primary rounded"
            onClick={() => props.handleButton(props.courseDetails)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
