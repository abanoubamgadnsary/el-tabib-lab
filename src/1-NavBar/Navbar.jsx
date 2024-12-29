import { useTranslation } from "react-i18next";
import "./navbar.css";

const lngs = {
  ar: { nativeName: "Ar" },
  en: { nativeName: "En" },
};

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <nav className="nav">
      <div className="logo-container ">
        <a className="logo" href="">
          <img src="./photos/EL TABIB LOGO PNG.png" alt="Logo" />
        </a>
      </div>
      <select
        name="language"
        id="language-select"
        className="select"
        onChange={changeLanguage}
        defaultValue={i18n.resolvedLanguage}
      >
        {Object.keys(lngs).map((lng) => (
          <option
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            value={lng}
          >
            {lngs[lng].nativeName}
          </option>
        ))}
      </select>

      <div className="list">
        <ul
          style={
            i18n.resolvedLanguage === "en"
              ? { direction: "ltr" }
              : { direction: "rtl" }
          }
        >
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
