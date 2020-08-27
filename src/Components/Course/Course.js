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
      <div className="course-container shadow p-3 mx-5 d-flex">
        <img src={img} alt="" />
        <div className="course-details ml-5 text-left">
          <h4 className="text-primary">{title}</h4>
          <p>
            <small>Instructor: {instructor}</small>
          </p>
          <p>
            <small>
              Rating:
              <span className="text-warning font-weight-bold">
                {" "}
                {rating}
              </span>{" "}
            </small>
          </p>
          <p>
            <small>Duration: {duration} hours</small>
          </p>
          <p>
            <small>Students Enrolled: {student}</small>
          </p>
          <br />
          <h6 className="text-success">Price: ${price}</h6>
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
