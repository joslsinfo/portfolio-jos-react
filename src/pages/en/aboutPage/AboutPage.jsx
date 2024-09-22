import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="container about-page home">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <p>
          Hello and welcome to my portfolio! My name is
          <strong> Jean Oldor Saintus </strong>, and I am a
          <strong> passionate junior web developer</strong>. <br />
          Since I started in web development, I have acquired a solid
          understanding of both front-end and back-end technologies.
        </p>
        <p>
          My academic journey has allowed me to develop skills in:
          <ul>
            <li>
              Front-end development with React, Angular, Vue.js, HTML, CSS,
              Bootstrap, and JavaScript
            </li>
            <li>Creating intuitive and responsive user interfaces</li>
            <li>Integrating APIs and third-party services</li>
            <li>Back-end development with Node.js, PHP, and Express</li>
            <li>Database management with MySQL and MongoDB</li>
          </ul>
        </p>
        <p>
          During my studies, I worked on several academic and personal projects
          where I applied my technical skills and collaborated with other
          developers. These experiences taught me the importance of
          communication, teamwork, and project management.
        </p>
        <p>
          I am constantly seeking new opportunities to learn and grow. I am
          particularly interested in projects that allow me to work with modern
          technologies and take on new challenges.
        </p>
        <p>
          If you have any professional opportunities, project ideas, or if you'd
          just like to chat, feel free to contact me. I'd be happy to respond
          and discuss how we could collaborate together.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
