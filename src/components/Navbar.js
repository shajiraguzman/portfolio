import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl">
            Shajira Guzman
          </a>
        </a>
        <nav className="md:mr-auto md:ml-6 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#history" className="ml-3 mr-8 hover:text-white text-xl">
            About Me
          </a>
          <a href="#projects" className="mr-8 hover:text-white text-xl">
            Projects
          </a>
          <a href="#skills" className="mr-8 hover:text-white text-xl">
            Skills
          </a>
        </nav>
            <a
            href="https://www.linkedin.com/in/shajiraguzman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-xl"
            >
            Contact Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
      </div>
    </header>
  );
}