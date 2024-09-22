import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderEn from "./components/en/header/Header.jsx";
import HeaderFr from "./components/fr/header/Header.jsx";
// import Home from "./pages/home/Home.jsx";
import HomeEn from "./pages/en/home/Home.jsx";
import HomeFr from "./pages/fr/home/Home.jsx";
import AboutPageEn from "./pages/en/aboutPage/AboutPage.jsx";
import AboutPageFr from "./pages/fr/aboutPage/AboutPage.jsx";
import ProjectsPageEn from "./pages/en/projectsPage/ProjectsPage.jsx";
import ProjectsPageFr from "./pages/fr/projectsPage/ProjectsPage.jsx";
import ContactPageEn from "./pages/en/contactPage/ContactPage.jsx";
import ContactPageFr from "./pages/fr/contactPage/ContactPage.jsx";
import FooterEn from "./components/en/footer/Footer.jsx";
import FooterFr from "./components/fr/footer/Footer.jsx";
import "./index.css";
import LanguageSelector from "./components/languageSelector/LanguageSelector.jsx";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <BrowserRouter basename="portfolio-jos-react">
        {/* <BrowserRouter> */}

        {/* {language === "fr" ? <HeaderFr /> : <HeaderEn />} */}

        <div>
          {/* <LanguageSelector language={language} setLanguage={setLanguage} />
          {language === "fr" ? <HeaderFr /> : <HeaderEn />} */}
          <Routes>
            <Route
              path="/"
              element={language === "fr" ? <HomeFr /> : <HomeEn />}
            />
            <Route
              path="/about"
              element={language === "fr" ? <AboutPageFr /> : <AboutPageEn />}
            />
            <Route
              path="/projects"
              element={
                language === "fr" ? <ProjectsPageFr /> : <ProjectsPageEn />
              }
            />
            <Route
              path="/contact"
              element={
                language === "fr" ? <ContactPageFr /> : <ContactPageEn />
              }
            />
          </Routes>
        </div>
        {language === "fr" ? <FooterFr /> : <FooterEn />}
        <LanguageSelector language={language} setLanguage={setLanguage} />
        {language === "fr" ? <HeaderFr /> : <HeaderEn />}
      </BrowserRouter>
    </div>
  );
};

export default App;
