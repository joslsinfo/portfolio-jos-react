import React from "react";
import "./Home.css";
import cv from "../../../assets/docs/cv-jos.pdf";
import programming from "../../../assets/img-programming.png";
import {
  burgerImages,
  refugeMimineImages,
  karateKidImages,
  josCoworkingImages,
} from "../../../components/data/projectData.js";

import Carousel from "../../../components/carousel/Carousel.jsx";
import ProjectSection from "../../../components/en/projectSection/ProjectSection.jsx";

const Home = () => {
  return (
    <div className="container home">
      <h1>Welcome to my portfolio</h1>

      <p className="presentation">
        Hello, I am Jean Oldor Saintus, a junior front-end web developer
      </p>
      <p>
        I am very passionate about web development, dynamic, and motivated to
        work independently or in a team to develop web applications. <br />
        I worked as a technical agent at a lighting company.
        <br />
        I completed a front-end web development program at Cégep de
        Trois-Rivières.
        <br />I would like to focus on this field to contribute to the
        development of this new technology and gain more experience in a domain
        I truly enjoy. <br />
        I continuously train myself to stay updated with the latest web
        technology advancements and find solutions to web development problems
        to apply the best technical solutions to my projects. <br />
        It is a pleasure for me to code and solve problems.
      </p>

      <a
        className="nav-link cv"
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
      >
        View my resume
      </a>
      <div className="presentation-image">
        <img src={programming} alt="Programming" />
      </div>

      <section className="row mb-3">
        <ProjectSection />
      </section>
      <section className="title-projects">
        <div className="container">
          <h2>Project views</h2>
          <div className="row mb-3">
            <Carousel title="BURGER SHOP" images={burgerImages} />
            <Carousel title="REFUGE MIMINE" images={refugeMimineImages} />
            <Carousel title="THE KARATE KID" images={karateKidImages} />
            <Carousel title="JOS COWORKING" images={josCoworkingImages} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
