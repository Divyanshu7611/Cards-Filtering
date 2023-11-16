import React from "react";
import "./Navbar.css"; // Import a separate CSS file for styling (create a Navbar.css file)

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-gradient-to-r from-black to-navy-900 py-4 shadow-md">
        <h1 className="logo text-3xl font-extrabold text-center text-white animate__animated animate__fadeInUp">
          SkillHub
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
