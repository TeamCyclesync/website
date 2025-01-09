import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent py-8 text-white">
      <div className="container mx-auto px-4 flex flex-row  md:flex-row justify-between items-start">
        <div className="flex flex-col items-start md:items-start mb-4 md:mb-0">
          <img
            alt="Logo"
            src="./assets/logo.png"
            className="w-16 h-16 mb-4 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-16 lg:h-16"
          />
          <p className="text-sm">© 2024 CycleSync</p>
          <div className="mt-2">
            <h2 className="text-lg font-bold">LEGAL</h2>
            <ul className="text-sm">
              <li>
          <a className="hover:underline" href="#">
            Privacy &amp; Policy
          </a>
              </li>
              <li>
          <a className="hover:underline" href="#">
            Terms &amp; Conditions
          </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-lg font-bold mb-2">Contact Form</h2>
          <form className="flex flex-col space-y-2 w-4/5 max-w-xs">
            <input
              className="px-2 py-1 rounded border border-white bg-purple-500 text-white placeholder-white"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="px-2 py-1 rounded border border-white bg-purple-500 text-white placeholder-white"
              placeholder="Message"
            ></textarea>
            <button
              className="px-4 py-2 w-1/2 h-1/4 bg-white text-purple-500 rounded hover:bg-gray-200"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a className="text-xl hover:text-gray-400" href="#">
              <FaInstagram />
            </a>
            <a className="text-xl hover:text-gray-400" href="#">
              <FaLinkedin />
            </a>
            <a className="text-xl hover:text-gray-400" href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;