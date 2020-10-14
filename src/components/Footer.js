import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-container">
          <div className="container">
            <div className="footer-container-signup">
              <h2>Sign up to this blog</h2>{" "}
              <p>
                Coming up with viable businesses ideas can be hard. Download
                your FREE copy of my e-book "101 Business You Can Start With
                Very Little Money" and discover unique ideas that you can start
                your entrepreneurship journey with today!
              </p>
              <form className="container">
                <input type="name" placeholder="Enter name" />
                <input type="email" placeholder="Enter email" />
                <button>Sign Up</button>
              </form>
            </div>

            <div
              className="footer-container-social"
              style={{ color: "#3B5998" }}
            >
              <div className="icons">
                <i
                  style={{ color: "#3B5998" }}
                  class="fab fa-facebook-square fa-3x"
                ></i>
                <i
                  style={{ color: "#00ACED" }}
                  class="fab fa-twitter-square fa-3x"
                ></i>
                <i
                  style={{ color: "#007BB6" }}
                  class="fab fa-linkedin fa-3x"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
