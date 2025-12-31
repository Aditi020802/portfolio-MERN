import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Portfolio Components */
import Navbar from "./components/Navbar";
import CanvasBG from "./components/CanvasBG";
import Footer from "./sections/Footer";

/* Sections */
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


export default function App() {
  return (
    <>
      <CanvasBG />
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
