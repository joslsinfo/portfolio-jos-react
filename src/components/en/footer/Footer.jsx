import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="colonne">
        <h3>JavaScript project</h3>
        <p>Development of an application for currency conversion</p>
        <p>
          <a
            href="https://gitlab.com/josaintus/projetfinalsaintus-jean-oldorgr1041.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the content of this project
          </a>
        </p>
        <p>
          <a
            href="https://joslsinfo.github.io/projet-final-tech-prog-web-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit this site to explore this project
          </a>
        </p>
      </div>
      <div className="colonne">
        <h3>React project</h3>
        <p>
          Creation of an application using the React library to fetch
          information about Star Wars via the API
        </p>
        <p>
          <a
            href="https://github.com/joslsinfo/projet2-react-swapi-app.git/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the content of this project
          </a>
        </p>
        <p>
          <a
            href="https://joslsinfo.github.io/projet2-react-swapi-app/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit this application created in React
          </a>
        </p>
      </div>
      <div className="colonne">
        <h3>Project in PHP and MySQL</h3>
        <p>
          Development of a web infrastructure project on manipulating the MySQL
          database using PHP
        </p>
        <p>
          <a
            href="https://github.com/joslsinfo/projet-final-infrastructure-web-Saintus-Jean-Oldor-GR1041.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access the content of this project
          </a>
        </p>
        <p>
          <a
            href="https://josaintus.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit this website to view this project
          </a>
        </p>
      </div>
      <div className="colonne" id="contacts">
        <h3>My contact information</h3>
        <p>
          <i className="fa-solid fa-location-dot"></i> Orlando,FL, USA
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:josaintus@gmail.com"> josaintus@gmail.com</a>
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:joslsinfo2022@gmail.com"> joslsinfo2022@gmail.com</a>
        </p>
        <p>
          <i className="fa-solid fa-globe"></i>
          <a
            href="https://www.josaintus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.josaintus.com
          </a>
        </p>
      </div>
      <div className="colonne" id="contacts">
        <h3>My social media</h3>
        <p>
          <a
            href="https://www.facebook.com/Jean Saintus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i> facebook / jeansaintus
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/jean-oldor-saintus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
            linkedin.com/in/jean-oldor-saintus
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i> instagram
          </a>
        </p>
        <p>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i> twitter / @josaintus2011
          </a>
        </p>
        <p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i> youtube
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
