import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const CallToAction = () => {
  return (
    <>
      <section id="calltoaction">
        <div>
          <h1>Ready to look more professional online?</h1>
          <p>
            Let’s build something simple, clean, and effective for your
            business.
          </p>
          <a href="https://wa.link/osgozs" target="_blank">
            <button>Contact Us</button>
          </a>
        </div>
      </section>
      <div className="CTAcontact">
        <div className="ACTAcontact">
          <a href="https://wa.link/osgozs" target="_blank">
            <FaWhatsapp className="icons1" />
          </a>
          <a
            href="https://www.instagram.com/elfrak.tech?utm_source=qr&igsh"
            target="_blank"
          >
            <FaInstagram className="icons2" />
          </a>
          <a href="https://tiktok.com/@elfrak.tech" target="_blank">
            <FaTiktok className="icons3" />
          </a>
        </div>
        <div className="links">
          <p>Socials @elfrak.tech </p>
        </div>
      </div>
      <footer>
        <p>ElFrak Tech Digital Websites & Branding </p>
        <p>📍 Serving local businesses</p>
        <p>📞 WhatsApp Available</p>
      </footer>
    </>
  );
};

export default CallToAction;
