import { useTranslation } from "react-i18next";
import "./navbar.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// import Switch from "../SideBar/ToggleButton/Switch";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
const lngs = {
  ar: { nativeName: "Ar" },
  en: { nativeName: "En" },
};

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  function handleExpand() {
    setIsExpanded((prev) => !prev);
  }

  // const memoizedSwitch = useMemo(() => <Switch />, []);

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

      <button
        onClick={handleExpand}
        className="toggle-button"
        role="dialoge"
        aria-expanded={isExpanded}
      >
        <IconContext.Provider
          value={{
            style: { width: "2rem", height: "2rem", cursor: "pointer" },
            color: "#13253e",
          }}
        >
          <motion.div
            key={isExpanded ? "close" : "menu"}
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <IoCloseSharp /> : <IoMdMenu />}
          </motion.div>
        </IconContext.Provider>
      </button>
      <div
        className={`list-menu ${isExpanded ? "expanded" : ""}`}
        aria-hidden={isExpanded}
      >
        <ul
          style={
            (i18n.resolvedLanguage === "en"
              ? { direction: "ltr" }
              : { direction: "rtl" },
            i18n.resolvedLanguage === "en"
              ? { fontFamily: "Geist Mono" }
              : { fontFamily: "Cairo" })
          }
        >
          <li>
            <Link to="/el-tabib-lab">{t("navbar.main")}</Link>
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
          <li>
            <Link to={"packages"}>{t("navbar.packages")}</Link>
          </li>
        </ul>
      </div>
      {/* <div className="btn">
        <button className="log-in">{t("navbar.log-in")}</button>
        <button>{t("navbar.sign-up")}</button>
      </div> */}

      <div className="shortcuts">
        <a
          target="blank"
          href="https://www.facebook.com/profile.php?id=100088403545170&name=xhp_nt_"
        >
          <span className="icon-facebook-square "></span>
        </a>
        <a
          target="blank"
          href="https://api.whatsapp.com/send?phone=201116573311"
        >
          <span className="icon-phone-square "></span>
        </a>
      </div>
      {/* Overlay to close the menu when clicking outside */}
      {isExpanded && <div className="overlay" onClick={handleExpand}></div>}
    </nav>
  );
}

export default Navbar;
