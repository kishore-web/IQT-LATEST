import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

const About = () => <div></div>;
const FullStackCourse = () => <div></div>;
const Placements = () => <div></div>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/full-stack-course" element={<FullStackCourse />} />
        <Route path="/placements" element={<Placements />} />
      </Routes>

      <MainSection />
      <Footer />
    </Router>
  );
};

export default App;
