import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";



const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
    </main>
  );
};

export default App;
