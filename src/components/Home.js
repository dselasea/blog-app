import React from "react";
import selase from "../images/selase.png";
import Blog from "./Blog";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <nav>
          <a href="#">Daniel Selase</a>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="container head">
        <div className="header-heading">
          <h1>Daniel Selase Software Engineer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            commodi dolorum omnis quisquam asperiores voluptatibus, tempore
            inventore fugit! Quis sed doloremque dolore eos commodi. Voluptas
            eveniet quibusdam nobis maxime expedita.
          </p>
        </div>
        <div className="header-photo">
          <img src={selase} />
        </div>
      </header>

      <div className="content-article">
        <article className="container">
          <h2>Unique insights derived from unique experiences</h2>
          <p>
            My entrepreneurship journey started 8 years ago as a quest to solve
            some of the world’s biggest challenges through technology. In the
            time period, I have passed through the fires and have come out
            refined; building a solid foundation of what it takes to identify
            problems, develop feasible solutions and turn those solutions into
            strong, viable businesses with my work being validated through
            world-class recognition from prestigious international bodies.
            Through this platform, you will have the unique opportunity to tap
            into my wealth of knowledge to help you on your journey to becoming
            a successful entrepreneur.
          </p>
        </article>
      </div>
      <Blog />
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
    </div>
  );
}

export default Home;
