import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18En } from "./en";
import { i18Tr } from "./tr";
import { i18Ar } from "./ar";

const resources = {
  en: {
    translation: i18En
  },
  tr: {
    translation: i18Tr
  },
  ar: {
    translation: i18Ar
  }
};


let currentlang = localStorage.getItem("lang") || "en"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: currentlang, 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;