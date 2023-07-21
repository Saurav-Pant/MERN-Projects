import React from "react";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center border-t-2 border-blue-300 py-4">
      <p className="text-gray-500 text-xl hover:text-blue-400 transition-colors ">
        Made with ❤️ by Saurav Pant
      </p>
      <div className="flex ml-4 text-2xl">
        <div className="text-gray-500 hover:text-blue-500  duration-300 delay-100 mx-2 hover:-translate-y-1 transform transition-transform ease-out">
          <Link
            to="https://twitter.com/Saurav_Pant_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </Link>
        </div>
        <div className="text-gray-500 hover:text-blue-500  duration-300 delay-100 mx-2 hover:-translate-y-1 transform transition-transform ease-out">
          <Link
            to="https://www.linkedin.com/in/saurav-pant-790065239"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
