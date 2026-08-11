import React from "react";

import mock07 from "../assets/images/mock07.jpg";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.jpg";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">

        
        <div className="project">
          <a
            href="https://play.google.com/store/apps/details?id=com.atk.mediwise&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" height="320px" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.atk.mediwise&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Dentist Rx Guide</h2>
          </a>
          <p>
            This application provides reliable medication information for both medical professionals and non-medical users. It offers detailed information about generic medicines, available brands, their alternatives, and other relevant medication details.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" height="320px" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Beverages Line Controller</h2>
          </a>
          <p>
            This Line Controller provides an interface for the production line and communicates with the external Production Management System (PMS). It monitors real-time production data and synchronizes production information with the PMS.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" height="320px" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Research Mind</h2>
          </a>
          <p>
            A multi-agent research system that searches and scrapes web data, generates a structured response through a Writer Agent, and evaluates it with a Critic Agent for quality and accuracy.
          </p>
        </div>
        
        <div className="project">
          <a href="https://trendaura.pk/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://trendaura.pk/" target="_blank" rel="noreferrer">
            <h2>TrendAura.pk</h2>
          </a>
          <p>
            Created a Django-based eCommerce platform with product listings,
            cart system, secure checkout, and order management features
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
