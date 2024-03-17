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