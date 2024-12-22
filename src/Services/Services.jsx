import { useTranslation } from "react-i18next";
import "./services.css";
import Swiper from "./Swiper";

function Services() {
  const { t } = useTranslation();
  return (
    <section className="services">
      <h1 id="service">{t("our services.our services")}</h1>
      <Swiper />
    </section>
  );
}

export default Services;
