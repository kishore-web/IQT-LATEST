import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">IQT Academy</h2>
        </div>
        <div className="mb-4">
          <p className="text-lg"># Bangalore - 560004</p>
          <p className="text-lg"> (+91) XXXXXXXXXX</p>
        </div>
        <div className="mb-4 flex justify-center">
          <a
            href="https://www.facebook.com/IQTacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com/IQTacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/IQTacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/IQTacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <p className="text-sm">
            © Copyright 2022, IQT Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
