import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./components/Courses";
import Partners from "./components/Partners";
import Content from "./components/Content";
import Learn from "./components/Learn";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Content />
        <Learn />
        <Courses />
        <Partners />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
