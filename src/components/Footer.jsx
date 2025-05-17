import React from "react";

const Footer = () => {
  return (
    <footer className="bg-choco text-white text-center py-6 px-4 text-sm">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} BloomBakery. Crafted with love by Tracey Buentello.
      </p>
      <div className="space-x-4">
        <a
          href="https://tleanne.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose transition"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/tleanne1/bloombakery-client"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose transition"
        >
          GitHub
        </a>
        <a
          href="mailto:hello@bloombakery.com"
          className="hover:text-rose transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
