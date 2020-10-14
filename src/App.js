import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/About";
import Login from "./components/Login";
import BlogPosts from "./components/BlogPosts";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <BlogPosts />
        </Route>
        <Route exact path="/adminselase">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
