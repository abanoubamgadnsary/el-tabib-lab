import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};

function Links() {
  const { t, i18n } = useTranslation();

  <motion.div variants={variants}>
    <ul
      className="links"
      style={
        (i18n.resolvedLanguage === "en"
          ? { direction: "ltr" }
          : { direction: "rtl" },
        i18n.resolvedLanguage === "en"
          ? { fontFamily: "Geist Mono" }
          : { fontFamily: "Cairo" })
      }
    >
      <motion.li variants={itemVariants}>
        <Link to="/">{t("navbar.main")}</Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#about">{t("navbar.about")}</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#service">{t("navbar.service")}</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#contact">{t("navbar.contact")}</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link to={"packages"}>{t("navbar.packages")}</Link>
      </motion.li>
    </ul>
  </motion.div>;
}

export default Links;
