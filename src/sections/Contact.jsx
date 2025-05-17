import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-rose text-choco py-20 px-6 md:px-20 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Let's Bake Something Beautiful
        </h2>
        <p className="text-base md:text-lg mb-6">
          Custom orders, celebrations, or sweet treats just because — we’d love to hear from you!
        </p>
        <p className="text-sm font-medium mb-2">
          📍 Serving Dallas, TX and surrounding areas
        </p>
        <p className="text-sm font-medium mb-2">
          ✉️ hello@bloombakery.com
        </p>
        <a
          href="mailto:hello@bloombakery.com"
          className="inline-block mt-6 px-6 py-3 bg-choco text-white rounded-full hover:bg-blush transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
