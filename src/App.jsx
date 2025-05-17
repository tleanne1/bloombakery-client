import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";



const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Menu />
    </main>
  );
};

export default App;
