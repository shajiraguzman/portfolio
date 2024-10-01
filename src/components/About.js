import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <div className="container mx-auto flex px-10 py-ç md:flex-row flex-col items-center bg-gray-900">
        <div className="w-full lg:w-1/2">
                <img
                    style={{ width: '100%', height: 'auto' }}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./me.svg"
                />
            </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="lg:text-5xl title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Shajira.
            <br className="lg:text-5xl hidden lg:inline-block" />I love to build and create.
          </h1>
          <p className="mb-8 leading-relaxed">

          </p>
          <div className="flex justify-center">
            <a
              href="#history"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
              Get To Know Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 hover:text-white rounded text-lg">
              See My Work
            </a>
          </div>
        </div>






      </div>
    </section>
  );
}
