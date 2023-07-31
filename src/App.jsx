import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" category="general" />} />
          <Route
            path="/business"
            element={<News key="business" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          />
          <Route
            path="/health"
            element={<News key="health" category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" category="technology" />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
