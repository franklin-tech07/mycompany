import React from "react";
import Logo from "../assets/Logo2.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import "../App.css";

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="card1">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="info">
            <div className="H-heading">
              <h1>ElFrak Tech</h1>
              <h1>Digital Agency</h1>
            </div>
            <p>Simple websites and modern branding for growing businesses</p>
            <p>
              We help small businesses, vendors, and local brands build a
              professional online presence with clean websites, modern logos,
              and simple graphics —without high costs or complicated processes.
            </p>
            <a href="https://wa.link/osgozs" target="_blank">
              <button>Contact Us</button>
            </a>
          </div>
        </div>
        <div className="card2">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#howitworks">How It Works</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#calltoaction">Contact</a>
          </nav>
        </div>
        <a
          href="https://wa.link/osgozs"
          target="_blank"
          className="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
        <div className="scroll-arrow" onClick={scrollDown}>
          <FaChevronDown />
          <FaChevronDown />
        </div>
      </section>
    </>
  );
};

export default Home;
