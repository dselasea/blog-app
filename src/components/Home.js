import React from "react";
import selase from "../images/selase.png";
import Blog from "./Blog";

function Home() {
  return (
    <div className="App">
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
    </div>
  );
}

export default Home;
