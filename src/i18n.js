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
                navBar: {
                    home: "Home",
                    projects: "Projects",
                    about: "About",
                },
                footer: {
                    reachMe:"Feel free to reach out to me by email:",
                    messageMe: "Or message me on",
                    copryright: "2024 © DESIGNED AND DEVELOPED BY REI SIKK",
                    linkedIn: "LinkedIn"
                },

                heroSection: {
                    line1: "Learning full-stack",
                    part1: "Ever",
                    part2: "curious",
                    part3: ", always",
                    part4: " learning",
                    im: "I'm",
                    reiSikk: " Rei Sikk",
                    aboutMe: "About me",
                },
                information: {
                    information: "Information", 
                    techStack: "Tech Stack",
                    education: "Education",
                    kea: "Københavns Erhvervsakademi - AP graduate in Multimedia Design",
                    cphBusiness: "Copenhagen Business Academy - Web Development PBA student graduating in January 2025",
                    programmesInUse: "Programmes in use",
                },
                viewProjects: "View my projects",
                projectsPage: {
                    projectsHeading: "Projects",
                    subheader: "UI / UX / Web Development",
                    labelPersonal: "Personal project",
                    labelSchool: "School project",
                    liveDemo: "Live project",
                    projectEha: "Landing page for Eha",
                    ehaDescription: "Development of a landing page for a client operating in the health & wellness sector. Utilizing my front-end skills, I transformed a Figma design into a polished and responsive website aimed at offering users insight into the concept while providing the opportunity to sign up for a wishlist. Collaborating closely with a digital designer, I ensured clarity on micro interactions, design elements, and overall website behavior and functionality. Using my technical skills and collaborative approach I delivered a professional and engaging online experience in a short time frame.",
                    projectTravelDest: "Travel Destinations",

                    travelDestDescription: "The goal of the assignment was to get experience building a full-stack application by using NodeJs/Express, MongoDb and building a frontend with javascript. The result is a domain about travel destinations - a log of your previous visited vacations. The backend is an API built on Node.js, Express, Mongoose and MongoDB which sends data to the frontend using JSON. On the website users are able to add travel destinations to their list and they can create an account and sign in, in order to update or delete their previous entries.",

                    comwellDescription: "This was a project to reproduce a website created by the web bureau Dwarf for Comwell hotels. Our assignment was to implement two of the features: the ability to create an user and sign in, create a booking for a hotel room. The solution is a full-stack application with a standalone React/NextJS frontend app, integrating with the backend exposing REST API endpoints written in NestJS, and the database using MongoDB.",

                    projectHogwarts: "Hogwarts admin site",
                    hogwartsDescription: 'This project was all about JavaScript where looks were not of the most importance. The task was to create an admin page for Hogwarts where it is possible to search, filter, sort and add students to certain lists. An extra feature we had to implement was a "hacking" feature - meaning when you type "hacked" on the keyboard while on the site some interesting things will follow... This was an individual project where the aim was to get a good understanding of JavaScript array methods and solidify the core knowledge about JavaScript.',

                    projectCphStays: "Website for CPHStays",
                    cphStaysDescription: "A 4th semester final exam project in collaboration with CPHStays, which is a newly established branch of ManageMyAir, a rental property management company in Copenhagen. The proposed solution, done in collaboration with a fellow student, is a website which is connected to WordPress CMS, where the user can see available apartments, read about specific apartments and send a booking request for a desired apartment.",

                    projectFoofest: "Festival companion app",
                    foofestDescription: "This was an an exam assignment for the 3rd semester Frontend Design elective and the task was to create a booking site and a companion app for a fictional festival. This website is meant to act as a companion app for people with a ticket. On the website the user can keep up with the schedule of the festival, add live shows to a favourites list and find more information on the practicalities of the festival."
                }
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
                projectsPage: {
                    projectsHeading: "Projektid",
                    subheader: "UI / UX / Veebiarendus",
                    labelPersonal: "Isiklik projekt",
                    labelSchool: "Kooli projekt",
                    liveDemo: "Live demo",
                    projectEha: "Maandumisleht ettevõttele Eha",
                    ehaDescription: "Klient töötab turismi ja heaolu valdkonnas ning minu eesmärk oli luua talle maandumisleht. Kasutades oma front-end alaseid oskusi, muutsin Figma disaini eestetiliselt puhtaks ja responsiivseks veebisaidiks, mille eesmärk on pakkuda kasutajatele ülevaadet ettevõtte pakutavast kontseptsioonist ning võimalust registreeruda e-maili uudiskirja. Töötasin tihedas koostöös disaineriga, tagamaks selgust mikrointeraktsioonide, disainielementide ja üldise veebisaidi käitumise ning funktsionaalsuse osas. Kasutades oma tehnilisi oskusi, suutsin ette nähtud lühikese aja jooksul luua professionaalse ja kaasahaarava veebikogemuse.",
                    projectTravelDest: "Travel Destinations",

                    travelDestDescription: "Ülesande eesmärk oli saada kogemusi fullstack-rakenduse loomisel, kasutades Node.js-i / Node.js raamistiku Express, MongoDB-d ning ehitades frontend’i JavaScripti, HTML-i ja CSS-ga. Tulemus on domeen reisisihtkohtadest - eelnevate puhkuste logiraamat. Tagakülg on API, mis on loodud Node.js-i, Expressi, Mongoose'i ja MongoDB abil ning saadab andmeid frontend’ile kasutadesJSON-i. Veebisaidil saavad kasutajad lisada oma reisisihtkohti nimekirja ning luua konto ja sisse logida, et värskendada või kustutada oma eelnevaid sissekandeid.",

                    projectComwell: "Comwell hotellid",
                    comwellDescription: "Projekt, mille eesmärk oli reprodutseerida veebileht, mille lõi Taani veebiagentuur Dwarf Comwell hotelliketi  jaoks. Meie ülesandeks oli rakendada kaks funktsiooni: kasutaja loomise ja sisselogimise võimalus ning hotellitoa broneerimise funktsioon. Lahendus on fullstack rakendus, millel on eraldiseisev React’i ja Next.js-ga loodud frontend, mis integreerub backendiga, kasutades REST API endpointe, mis on kirjutatud NestJS-i kasutades, ja kasutab andmebaasina MongoDB-d.",

                    projectHogwarts: "Hogwarts'i admin leht",
                    hogwartsDescription: 'This project was all about JavaScript where looks were not of the most importance. The task was to create an admin page for Hogwarts where it is possible to search, filter, sort and add students to certain lists. An extra feature we had to implement was a "hacking" feature - meaning when you type "hacked" on the keyboard while on the site some interesting things will follow... This was an individual project where the aim was to get a good understanding of JavaScript array methods and solidify the core knowledge about JavaScript.',

                    projectCphStays: "Website for CPHStays",
                    cphStaysDescription: "A 4th semester final exam project in collaboration with CPHStays, which is a newly established branch of ManageMyAir, a rental property management company in Copenhagen. The proposed solution, done in collaboration with a fellow student, is a website which is connected to WordPress CMS, where the user can see available apartments, read about specific apartments and send a booking request for a desired apartment.",

                    projectFoofest: "Festival companion app",
                    foofestDescription: "This was an an exam assignment for the 3rd semester Frontend Design elective and the task was to create a booking site and a companion app for a fictional festival. This website is meant to act as a companion app for people with a ticket. On the website the user can keep up with the schedule of the festival, add live shows to a favourites list and find more information on the practicalities of the festival."
                }
            }
        }
    }
});