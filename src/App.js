import React from "react";
import About from "./components/About";
import History from "./components/History";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="text-gray-400 bg-white body-font">
      <Navbar />
      <About />
      <History />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}