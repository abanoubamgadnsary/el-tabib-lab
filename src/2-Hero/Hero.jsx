import { useTranslation } from "react-i18next";
import "./hero.css";

function Hero() {
  function exploerButton() {
    const el = document.getElementById("about");
    el.scrollIntoView();
  }

  const { t, i18n } = useTranslation();
  const heroDescLines = t("hero.description").split("\n");

  return (
    <section className="hero" id="main">
      <div
        className="text"
        style={{ direction: i18n.resolvedLanguage === "en" ? "ltr" : "rtl" }}
      >
        <h1>{t("hero.title")}</h1>
        <p>
          {heroDescLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </p>
        <button onClick={exploerButton}> {t("hero.explore")} </button>
      </div>
    </section>
  );
}

export default Hero;
