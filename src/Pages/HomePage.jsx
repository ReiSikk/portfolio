
import arrowRight from "../media/arrow-right.svg";
import linkedinLogo from "../media/linkedin.svg";
import githublogo from "../media/github.svg";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";



function HomePage({activePage, handleClick}) {    
  return (
    <>
    <header>
        <div className="hero-wrapper">
            <div className="hero-text">
                {/* <h1>Aspiring <span>front-end developer</span> with a passion for UI design and web design.</h1> */}
                {/* <h1>Aspiring developer currently learning <span>full-stack</span> with a deeper interest in front-end and web design.</h1> */}
                <h1><span>Learning full-stack</span>.</h1>
                <h1>Ever <span>curious</span>, always<span> learning</span>.</h1>
            </div>
        </div>
    </header>
    <main>
            <div className="hero-info">
                <div className="info-left">
                   <h4>I'm <span>Rei Sikk</span></h4>
                </div>
                <div className="info-right">
                    <Link to="about" className="h4-style" id="About me" onClick={handleClick}>About me <span><img src={arrowRight} className="big-arrow" width={48} height={48} alt="arrow pointing right linking to about me page" /></span></Link>
                    <div className="info-right-bottom">
                    <ul className="hero-socials">
                    <li className="linkedin-btn">
                        <a target='_blank'
            rel='noopener noreferrer' href="https://www.linkedin.com/in/rei-sikk-a642b9218/" className="link">
                <img src={linkedinLogo} alt="LinkedIn logo" />
            </a>
                    </li>
                    <li className="linkedin-btn">
                        <a target='_blank' className="link"
            rel='noopener noreferrer' href="https://github.com/ReiSikk">
                <img src={githublogo} alt="Github logo" />
            </a>
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
            <section className="information-section">
                <h5 className="h2-style">Information</h5>
                <div className="info-section-upper">
                    <div className="info-section-upper-left">
                        <h5 className="h4-style">Tech Stack</h5>
                        <p>JavaScript, React, Next.js, NestJS, MongoDB, CSS, HTML, Sass, Git, Docker, React Native</p>
                    </div>
                    <div className="info-section-upper-right">
                        <h5 className="h4-style">Education</h5>
                        <p>Københavns Erhvervsakademi - AP graduate in Multimedia Design</p>
                        <p>Copenhagen Business Academy - Web Development PBA student graduating in January 2025</p>
                    </div>
                </div>
                <div className="info-section-lower">
                    <h5 className="h4-style">Programmes in use</h5>
                    <p>Figma, Visual Studio Code, Adobe Cloud</p>
                </div>
            </section>
    </main>
    <div className="cta">
        <Link to="projects" className="view-projects" id="Projects" onClick={handleClick}>View my projects</Link>     
    </div>

    </>
  )
}

export default HomePage