import React from "react";
import heroImg from "../assets/hero-cupcake.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-rose/60 z-0 backdrop-blur-sm" />
      <div className="relative z-10 text-center text-choco max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          BloomBakery
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Whimsical cupcakes, artisan-crafted with love and pastel dreams.
        </p>
        <a
          href="#menu"
          className="inline-block bg-choco text-white px-6 py-3 rounded-full font-semibold hover:bg-blush transition"
        >
          View Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
