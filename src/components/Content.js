import React from "react";

function Content() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column content">
            <h1 className="display-5 pb-2">
              SenTech: Your Move To Make It Happen.
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              libero itaque sapiente facilis nemo perferendis.
            </p>
            <form className="form-row py-4">
              <div className="form-group col-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-danger">
                  GET STARTED
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img src={require("../images/3255469.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
