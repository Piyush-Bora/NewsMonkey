import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <>
      <Router>
        <Navbar mode="false" />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" category="general" />}
          />
          <Route
            exact
            path="/home"
            element={<News key="general" category="general" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" category="health" />}
          />
          <Route
            exact
            path="/tech"
            element={<News key="technology" category="technology" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" category="science" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
