import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";


const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default App;
