import React from "react";

const Footer = () => {
  return (
    <div className="text-muted text-center font-sm footer">
      <p className="small">
        {"made by "}
        <a href="https://github.com/MikhailKarpov87/" target="_blank" rel="noopener noreferrer">
          Mihanik87
        </a>
      </p>
      <p className="small">
        <a
          href="https://github.com/MikhailKarpov87/instagram-randomizer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
