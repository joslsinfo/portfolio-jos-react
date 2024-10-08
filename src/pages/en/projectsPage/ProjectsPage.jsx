import React from "react";
import "./ProjectsPage.css";
import ProjectSection from "../../../components/en/projectSection/ProjectSection.jsx";
import Carousel from "../../../components/carousel/Carousel.jsx";
import {
  burgerImages,
  refugeMimineImages,
  karateKidImages,
  josCoworkingImages,
} from "../../../components/data/projectData.js";

const ProjectsPage = () => {
  return (
    <div className="container">
      <ProjectSection />
      <h1 className="project-title">Projects</h1>
      <div className="row mb-3">
        <Carousel title="BURGER SHOP" images={burgerImages} />
        <Carousel title="REFUGE MIMINE" images={refugeMimineImages} />
        <Carousel title="THE KARATE KID" images={karateKidImages} />
        <Carousel title="JOS COWORKING" images={josCoworkingImages} />
      </div>
    </div>
  );
};

export default ProjectsPage;
