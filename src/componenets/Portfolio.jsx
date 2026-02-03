import React from "react";
import PerfumeBliss from "../assets/perfumebliss.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <div className="portfolio-card">
          <img src={PerfumeBliss} alt="" />
          <h1>Perfume Bliss</h1>
          <p>Website Design & Development</p>
          <p>
            A mobile-friendly website designed to streamline online orders via
            Whatsapp.
          </p>
          <p>
            <h6>Tech:</h6>React, HTML, CSS, JavaScript
          </p>
          <a
            href="https://franklin-tech07.github.io/perfumebliss/"
            target="_Blank"
          >
            <button>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
