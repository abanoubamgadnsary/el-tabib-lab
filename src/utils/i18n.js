import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "./locales/en/en.json";
import arLang from "./locales/ar/ar.json";

// The translations
const resources = {
  ar: {
    translation: arLang,
  },
  en: {
    translation: enLang,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "ar",
    resources,
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng",
      lookupCookie: "i18nextLng",
      cookieMinutes: 10,
      cookieDomain: "myDomain",
      htmlTag: document.documentElement,
      // Set `ar` as the default language
      checkWhitelist: true,
      checkForSimilarInWhitelist: true,
    },
    // Language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // You can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // If you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    whitelist: ["ar", "en"], // Only allow these languages
  });

export default i18n;
