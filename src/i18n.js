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
                viewProjects: "Vaata minu projekte",
            }
        }
    }
});