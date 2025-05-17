import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import cupcakeBg from "../assets/order-bg.jpg"; // Replace with your image path

const OrderForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // 🔁 Replace with your actual EmailJS service ID
        "your_template_id",     // 🔁 Replace with your EmailJS template ID
        form.current,
        "your_public_key"       // 🔁 Replace with your EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 4000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="order"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-20"
      style={{ backgroundImage: `url(${cupcakeBg})` }}
    >
      <div className="absolute inset-0 bg-rose/70 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10 text-choco">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Place an Order
          </h2>
          <p className="text-base">
            Fill out the form below to start a custom cupcake order. We'll be in touch soon!
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-md max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded border border-choco/20"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded border border-choco/20"
          />
          <input
            type="text"
            name="flavor"
            placeholder="Preferred Flavors (Optional)"
            className="w-full p-3 rounded border border-choco/20"
          />
          <textarea
            name="message"
            required
            placeholder="Your message, date, or occasion..."
            rows="4"
            className="w-full p-3 rounded border border-choco/20"
          />
          <button
            type="submit"
            className="bg-choco text-white px-6 py-3 rounded-full hover:bg-blush hover:text-choco transition"
          >
            Send Order Request
          </button>

          {submitted && (
            <p className="text-green-700 text-sm pt-2 font-medium">
              ✅ Order submitted! We'll respond shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default OrderForm;

