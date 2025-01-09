import { useTranslation } from "react-i18next";
import "./main.css";

function Main({ img, header, direction, content }) {
  const { i18n } = useTranslation();
  return (
    <section className="main" id="about">
      <div className={direction}>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div
          className="text-co"
          style={{
            direction: i18n.resolvedLanguage === "en" ? "ltr" : "rtl",
            fontFamily: i18n.resolvedLanguage === "en" ? "Geist Mono" : "Cairo",
          }}
        >
          <h1> {header}</h1>
          <div>{content}</div>
        </div>
      </div>
    </section>
  );
}

export default Main;
