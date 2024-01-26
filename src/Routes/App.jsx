import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProjectsPage from "../Pages/ProjectsPage";
import "../sass/style.scss";


function App() {


  return (
    <>
    <NavBar />
    <div className="layout-wrapper">
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/projects" element={ <ProjectsPage /> } />
      </Routes>
          </div>
         <Footer />
         </>

  )
}

export default App
