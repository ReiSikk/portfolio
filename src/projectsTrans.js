import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallBacklng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {

                projectsHeader: "Projects",
                    subheader: "UI / UX / Web Development",
                    labelPersonal: "Personal project",
                    labelSchool: "School project",
                    liveDemo: "Live project",
                    projectEha: "Landing page for Eha",
                    ehaDescription: "Development of a landing page for a client operating in the health & wellness sector. Utilizing my front-end skills, I transformed a Figma design into a polished and responsive website aimed at offering users insight into the concept while providing the opportunity to sign up for a wishlist. Collaborating closely with a digital designer, I ensured clarity on micro interactions, design elements, and overall website behavior and functionality. Using my technical skills and collaborative approach I delivered a professional and engaging online experience in a short time frame.",
                    projectTravelDest: "Travel Destinations",

                    travelDestDescription: "The goal of the assignment was to get experience building a full-stack application by using NodeJs/Express, MongoDb and building a frontend with javascript. The result is a domain about travel destinations - a log of your previous visited vacations. The backend is an API built on Node.js, Express, Mongoose and MongoDB which sends data to the frontend using JSON. On the website users are able to add travel destinations to their list and they can create an account and sign in, in order to update or delete their previous entries.",

                    comwellDescription: "This was a project to reproduce a website created by the web bureau Dwarf for Comwell hotels. Our assignment was to implement two of the features: the ability to create an user and sign in, create a booking for a hotel room. The solution is a full-stack application with a standalone React/NextJS frontend app, integrating with the backend exposing REST API endpoints written in NestJS, and the database using MongoDB",

                    projectHogwarts: "Hogwarts admin site",
                    hogwartsDescription: 'This project was all about JavaScript where looks were not of the most importance. The task was to create an admin page for Hogwarts where it is possible to search, filter, sort and add students to certain lists. An extra feature we had to implement was a "hacking" feature - meaning when you type "hacked" on the keyboard while on the site some interesting things will follow... This was an individual project where the aim was to get a good understanding of JavaScript array methods and solidify the core knowledge about JavaScript.',

                    projectCphStays: "Website for CPHStays",
                    cphStaysDescription: "A 4th semester final exam project in collaboration with CPHStays, which is a newly established branch of ManageMyAir, a rental property management company in Copenhagen. The proposed solution, done in collaboration with a fellow student, is a website which is connected to WordPress CMS, where the user can see available apartments, read about specific apartments and send a booking request for a desired apartment.",

                    projectFoofest: "Festival companion app",
                    foofestDescription: "This was an an exam assignment for the 3rd semester Frontend Design elective and the task was to create a booking site and a companion app for a fictional festival. This website is meant to act as a companion app for people with a ticket. On the website the user can keep up with the schedule of the festival, add live shows to a favourites list and find more information on the practicalities of the festival."

            }
        },
        ee: {
            translation: {
                navBar: {
                    home: "Kodu",
                    projects: "Projektid",
                    about: "Minust",
                },
                footer: {
                    reachMe:"Võta minuga ühendust e-maili teel:",
                    messageMe: "Või kirjuta mulle",
                    copryright: "2024 © DISAINER JA ARENDAJA - REI SIKK",
                    linkedIn: "LinkedIn-s"
                },
                heroSection: {
                    line1: "Õpin full-stack arendust",
                    part1: "Lõputult",
                    part2: "uudishimulik",
                    part3: ", alati",
                    part4: " õppimas",
                    im: "Ma olen",
                    reiSikk: " Rei Sikk",
                    aboutMe: "Minust",
                },
                information: {
                    information: "Informatsioon", 
                    techStack: "Minu stack",
                    education: "Haridus",
                    programmesInUse: "Kasutusel olevad programmid",
                    kea: "KEA (Copenhagen School of Design and Technology) - lõpetanud AP (120ECTS) kraadi multimeedia disaini erialal",
                    cphBusiness: "Copenhagen Business Academy - veebiarenduse bakalaureuseõppe tudeng, lõpetan jaanuaris 2025",
                },
                viewProjects: "Vaata minu projekte",
            }
        }
    }
});