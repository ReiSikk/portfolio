import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProjectsPage from "../Pages/ProjectsPage";
import { useState } from "react";
import "../sass/style.scss";


function App() {

  const [activePage, setActivePage] = useState("Home");

  function handleClick(e) {
    if(e.target.innerHTML !== "") {
      setActivePage(e.target.innerHTML);
    } else if(e.target.title !== "") {
      setActivePage(e.target.title);
    }  
    if(e.target.id === "About me") {
      setActivePage("About");
    }
  }

  return (
    <>
    <NavBar activePage={activePage} handleClick={handleClick} />
    <div className="layout-wrapper">
      <Routes>
          <Route path="/" element={ <HomePage activePage={activePage} handleClick={handleClick} /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/projects" element={ <ProjectsPage /> } />
      </Routes>
          </div>
         <Footer />
         </>

  )
}

export default App
