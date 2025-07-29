import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
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
          <p className="text-sm font-poppins">© 2025 CycleSync</p>
          <div className="mt-2 space-y-1">
            <h2 className="text-lg font-anton tracking-widest underline underline-offset-4">LEGAL</h2>
            <ul className="text-sm space-y- ">
              <li>
                <Link className="hover:underline font-poppins" href="/privacy-policy">
                  Privacy &amp; Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end md:items-end">
          <h2 className="text-lg mb-2 font-poppins underline underline-offset-4">Contact Form</h2>
          <form className="flex flex-col space-y-2 md:w-11/12 w-3/4 max-w-xs ml-auto">
            <input
              className="px-2 py-1 rounded border border-white bg-transparent text-white placeholder-white"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="px-2 py-1 rounded border border-white bg-transparent text-white placeholder-white"
              placeholder="Message"
            ></textarea>
            <button
              className="ml-auto font-poppins px-4 py-1 w-1/2 h-1/4 bg-gray-50 text-purple-500 rounded hover:bg-gray-200"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a className="text-xl hover:text-gray-400" href="https://www.instagram.com/cyclesync.in">
              <FaInstagram />
            </a>
            <a className="text-xl hover:text-gray-400" href="https://www.linkedin.com/company/cyclesync101/">
              <FaLinkedin />
            </a>
            <a className="text-xl hover:text-gray-400" href="https://github.com/TeamCyclesync">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-3xl md:text-6xl tracking-extra-widest hover:tracking-widest transition-all duration-300 ease-in-out font-cat">
          CYCLESYNC
        </h1>
      </div>
    </footer>
  );
};

export default Footer;