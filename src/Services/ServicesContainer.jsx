import { useTranslation } from "react-i18next";
import "./servicesContainer.css";

function ServicesContainer({ image }) {
  const { t } = useTranslation();
  return (
    <div className="servicesContainer">
      <img src={image} alt="" />
      <div className="text">
        <h1>{t("our services.service name")}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          excepturi
        </p>
      </div>
    </div>
  );
}

export default ServicesContainer;
