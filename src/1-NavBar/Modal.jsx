import { useTranslation } from "react-i18next";
import "./modal.css";

const Modal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <ul
          style={
            i18n.resolvedLanguage === "en"
              ? { direction: "ltr" }
              : { direction: "rtl" }
          }
        >
          <li>
            <a href="#main" onClick={onClose}>
              {t("navbar.main")}
            </a>
          </li>
          <li>
            <a href="#about" onClick={onClose}>
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#service" onClick={onClose}>
              {t("navbar.service")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onClose}>
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
