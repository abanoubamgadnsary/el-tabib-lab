import { useTranslation } from "react-i18next";
import "./navbar.css";

const lngs = {
  en: { nativeName: "En" },
  ar: { nativeName: "Ar" },
};

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="nav">
      <div className="logo-container ">
        <a className="logo" href="">
          <img src="./photos/EL TABIB LOGO PNG.png" alt="" />
        </a>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <div
        className="list"
        style={
          i18n.resolvedLanguage === "en"
            ? { direction: "ltr" }
            : { direction: "rtl" }
        }
      >
        <ul>
          <li>
            <a href="#main">{t("navbar.main")}</a>
          </li>
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#service">{t("navbar.service")}</a>
          </li>
          <li>
            <a href="#contact">{t("navbar.contact")}</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button className="log-in">{t("navbar.log-in")}</button>
        <button>{t("navbar.sign-up")}</button>
      </div>
    </nav>
  );
}

export default Navbar;
