import React from "react";
import cupcake1 from "../assets/cupcake1.jpg";
import cupcake2 from "../assets/cupcake2.jpg";
import cupcake3 from "../assets/cupcake3.jpg";
import cupcake4 from "../assets/cupcake4.jpg";


const cupcakes = [
  {
    name: "Lavender Lemon",
    desc: "Floral lavender cake with lemon buttercream swirl.",
    image: cupcake1, // ← no quotes here
  },
  {
    name: "Strawberry Bliss",
    desc: "Vanilla sponge filled with strawberry compote & cream cheese frosting.",
    image: cupcake2,
  },
  {
    name: "Choco-Cherry",
    desc: "Rich chocolate cake with cherry glaze and fudge drizzle.",
    image: cupcake3,
  },
  {
    name: "Peach Cream Dream",
    desc: "Peach-infused cake with whipped vanilla frosting.",
    image: cupcake4,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="bg-cream py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-choco mb-3">
          Cupcake Menu
        </h2>
        <p className="text-choco text-base max-w-xl mx-auto">
          Small batch, handcrafted cupcakes — made to delight and surprise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cupcakes.map((cupcake, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden text-left"
          >
            <img
              src={cupcake.image}
              alt={cupcake.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-choco text-lg mb-1">
                {cupcake.name}
              </h3>
              <p className="text-sm text-choco/80">{cupcake.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
