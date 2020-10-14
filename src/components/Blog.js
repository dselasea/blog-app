import React from "react";

function Blog() {
  return (
    <div className="container py-5" id="courses" style={{ height: "80vh" }}>
      <div className="row">
        <div className="col my-4">
          <h1 className="text-center">Blog</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Post Title</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                laboriosam. Dicta expedita corporis animi vero voluptate
                voluptatibus possimus, veniam magni quis!
              </p>
              <a href="#" className="btn btn-danger">
                Read More &rarr;
              </a>
            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2020
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Post Title</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                laboriosam. Dicta expedita corporis animi vero voluptate
                voluptatibus possimus, veniam magni quis!
              </p>
              <a href="#" className="btn btn-danger">
                Read More &rarr;
              </a>
            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2020
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Post Title</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                laboriosam. Dicta expedita corporis animi vero voluptate
                voluptatibus possimus, veniam magni quis!
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#" className="btn btn-danger">
                  Read More &rarr;
                </a>

                <div className="d-flex align-items-center justify-content-center">
                  <i class="far fa-thumbs-down"></i>
                  <span className="p-2">0</span>
                  <i class="far fa-thumbs-up"></i>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
