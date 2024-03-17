
import arrowRight from "../media/arrow-right.svg";
import linkedinLogo from "../media/linkedin.svg";
import githublogo from "../media/github.svg";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



function HomePage({activePage, handleClick}) {
    const {t} = useTranslation();
    const {line1, line2, part1, part2, part3, part4, im, reiSikk, aboutMe } = t("heroSection");
    const {information, techStack, programmesInUse, education, kea, cphBusiness} = t("information");
  return (
    <>
    <header>
        <div className="hero-wrapper">
            <div className="hero-text">
                <h1><span>{line1}</span>.</h1>
                <h1>{part1} <span>{part2}</span>{part3}<span>{part4}</span>.</h1>
            </div>
        </div>
    </header>
    <main>
            <div className="hero-info">
                <div className="info-left">
                   <h4>{im}<span>{reiSikk}</span></h4>
                </div>
                <div className="info-right">
                    <Link to="about" className="h4-style" id="About me" onClick={handleClick}>{aboutMe} <span><img src={arrowRight} className="big-arrow" width={48} height={48} alt="arrow pointing right linking to about me page" /></span></Link>
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
                <h5 className="h2-style">{information}</h5>
                <div className="info-section-upper">
                    <div className="info-section-upper-left">
                        <h5 className="h4-style">{techStack}</h5>
                        <p>JavaScript, React, Next.js, NestJS, MongoDB, CSS, HTML, Sass, Git, Docker, React Native</p>
                    </div>
                    <div className="info-section-upper-right">
                        <h5 className="h4-style">{education}</h5>
                        <p>{kea}</p>
                        <p>{cphBusiness}</p>
                    </div>
                </div>
                <div className="info-section-lower">
                    <h5 className="h4-style">{programmesInUse}</h5>
                    <p>Figma, Visual Studio Code, Adobe Cloud</p>
                </div>
            </section>
    </main>
    <div className="cta">
        <Link to="projects" className="view-projects" id="Projects" onClick={handleClick}>{t("viewProjects")}</Link>     
    </div>

    </>
  )
}

export default HomePage