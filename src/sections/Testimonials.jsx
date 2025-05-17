import React from "react";

const testimonials = [
  {
    quote:
      "The lavender lemon cupcakes were a hit at my bridal shower. Everyone was asking where they were from!",
    name: "Samantha J.",
  },
  {
    quote:
      "Absolutely the most beautiful (and delicious) cupcakes I’ve ever had. You can taste the love in every bite.",
    name: "Melanie R.",
  },
  {
    quote:
      "BloomBakery made our baby shower so special. The strawberry bliss cupcakes were unforgettable!",
    name: "Rachel & Leo",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-blush py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-choco mb-3">
          Customer Love
        </h2>
        <p className="text-choco text-base max-w-xl mx-auto">
          A few sweet words from our favorite people.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm border border-choco/10"
          >
            <p className="text-sm text-choco/90 italic mb-4">"{t.quote}"</p>
            <h4 className="text-sm font-semibold text-choco">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
