import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="d-flex justify-content-center mb-3">
          <a className="text-white fs-4 mx-2" href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a className="text-white fs-4 mx-2" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p className="mb-0">Made by <span className="font-weight-bold">Ali</span></p>
        <p className="mb-0">© {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
