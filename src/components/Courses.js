import React from "react";

function Courses() {
  return (
    <div className="container py-5" id="courses">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center pb-5">
          <h2>Our Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, expedita laudantium. Suscipit commodi et non?
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="course card p-2" style={{ width: "20rem" }}>
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt fa-3x py-2 courses-icon"></i>
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="course card p-2" style={{ width: "20rem" }}>
            <div className="card-body text-center">
              <i className="fas fa-laptop-code fa-3x py-2 courses-icon"></i>
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="course card p-2" style={{ width: "20rem" }}>
            <div className="card-body text-center">
              <i className="fas fa-cogs fa-3x py-2 courses-icon"></i>
              <h5 className="card-title">Machine Learning</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
