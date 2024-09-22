import React from "react";
import "./ProjectSection.css";

const ProjectSection = () => {
  return (
    <section className="projects-section" id="mes-projets">
      <h1>Discover my completed projects below</h1>
      <div className="projects">
        <div className="project home">
          <h4>Multi-page responsive website for a BURGER SHOP</h4>
          <p className="description">
            Creation of a multi-page responsive website using HTML and CSS
            <br />
            <a
              href="https://github.com/joslsinfo/TP3-Saintus-Jean-Oldor.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the project content
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/TP3-Saintus-Jean-Oldor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this project online
            </a>
          </p>
          <p className="dates">&copy; 2021 - 2022</p>
        </div>
        <div className="project home">
          <h4>
            Multi-page responsive website for REFUGE MIMINE using HTML, SASS,
            and BEM, utilizing Git workflows in a team
          </h4>
          <p className="description">
            Multi-page responsive website for REFUGE MIMINE using HTML, SASS,
            and BEM, utilizing Git workflows in a team
            <br />
            <a
              href="https://github.com/joslsinfo/tp1-integration-web-2.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the project content
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/tp1-integration-web-2/"
              target="_blank"
              rel="noopen            er noreferrer"
            >
              View this web project online
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>JavaScript project on currency conversions</h4>
          <p className="description">
            Development of a website in JavaScript for currency conversions.
            <br />
            <a
              href="https://github.com/joslsinfo/projet-final-tech-prog-web-1.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the project content
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/projet-final-tech-prog-web-1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this project online
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>
            Responsive website on a{" "}
            <span className="oeuvre">cinematic work</span>
          </h4>
          <p className="description">
            Creation of a responsive website using HTML, SASS, and Bootstrap
            about a cinematic work (THE KARATE KID)
            <br />
            <a
              href="https://github.com/joslsinfo/TP2-Saintus-Jean-Oldor.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the project content
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/TP2-Saintus-Jean-Oldor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore this project online
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>Multi-page responsive website for COWORKING</h4>
          <p className="description">
            Development of a responsive website and PWA with service worker and
            manifest using HTML, SASS, BEM, Bootstrap, and JavaScript
            <br />
            <a
              href="https://github.com/joslsinfo/tp3-projetfinal-Saintus-Jean-Oldor.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the project content
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/tp3-projetfinal-Saintus-Jean-Oldor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this project online
            </a>
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
        <div className="project home">
          <h4>React project on the Star Wars API</h4>
          <p className="description">
            Creation of an application using React and React Router to fetch
            information about Star Wars, also utilizing Formik, Redux, and
            Firebase
            <br />
            <a
              href="https://github.com/joslsinfo/projet2-react-swapi-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the project content
            </a>
            <br />
            <a
              href="https://joslsinfo.github.io/projet2-react-swapi-app/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this application created in React
            </a>
            <br />
          </p>
          <p className="dates">&copy; 2022</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
