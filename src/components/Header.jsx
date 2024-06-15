import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    document.body.style.overflow = "hidden"; // Prevent scrolling when login is open
  };

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    document.body.style.overflow = "hidden"; // Prevent scrolling when signup is open
  };

  const handleClose = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link
            to="/"
            className="text-2xl font-bold text-primary flex items-center"
          >
            <img
              src="/path-to-your-logo.png"
              alt="IQT Academy Logo"
              className="h-8 mr-2"
            />{" "}
            {/* Adjust path as needed */}
            {/* <span>IQT Academy</span> */}
          </Link>
          <nav>
            <ul className="flex items-center space-x-6">
              <li className="hover:text-secondary transition-colors duration-300">
                <Link to="/free-courses">Free Courses</Link>
              </li>
              <li className="hover:text-secondary transition-colors duration-300">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-secondary transition-colors duration-300">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-secondary transition-colors duration-300">
                <Link to="/full-stack-course">Full Stack Course</Link>
              </li>
              <li className="hover:text-secondary transition-colors duration-300">
                <Link to="/placements">Placements</Link>
              </li>
              <li className="hover:text-secondary transition-colors duration-300">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-secondary transition-colors duration-300">
                <button
                  onClick={handleLoginClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Login
        isOpen={isLoginOpen}
        onClose={handleClose}
        onSignUpClick={handleSignUpClick}
      />
      <SignUp
        isOpen={isSignUpOpen}
        onClose={handleClose}
        onLoginClick={handleLoginClick}
      />
    </>
  );
};

export default Header;
