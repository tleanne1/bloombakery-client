import React from "react";
import aboutImg from "../assets/about-bakery.jpg"; // Add an image of cupcakes or bakery owner

const About = () => {
  return (
    <section id="about" className="bg-blush py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={aboutImg}
            alt="About BloomBakery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-choco mb-4">
            Baked with Love & Imagination
          </h2>
          <p className="text-choco text-base leading-relaxed mb-4">
            BloomBakery is a homegrown cupcakery inspired by color, creativity,
            and community. Each treat is made from scratch using local
            ingredients and a whole lot of love.
          </p>
          <p className="text-choco text-base leading-relaxed">
            Whether you're celebrating something sweet or just treating yourself,
            our cupcakes are designed to bring joy — one bite at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;