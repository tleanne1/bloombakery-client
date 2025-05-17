import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import OrderForm from "./sections/OrderForm";



const App = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <OrderForm />
      <Footer />
    </main>
  );
};

export default App;
