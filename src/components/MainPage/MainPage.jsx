import { useTranslation } from "react-i18next";
import Hero from "../2-Hero/Hero";
import Main from "../3-Main/Main";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import ContactUs from "../Contact Us/ContactUs";

function MainPage() {
  const { t, i18n } = useTranslation();
  const missionLines = t("main.mission").split("\n");
  const visionLines = t("main.vision").split("\n");
  const missionTitleLines = t("main.our mission").split("\n");

  return (
    <div className={i18n.resolvedLanguage === "en" ? "font-en" : "font-ar"}>
      <div>
        <Hero />
        <Main
          img={"./photos/analysis-2030261_1280.jpg"}
          header={t("main.our vision")}
          direction={"left"}
          content={visionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        />
        <Main
          img={"./photos/teachers-5499190_1280.jpg"}
          header={missionTitleLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          direction={"right"}
          content={missionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        />

        <Services />
        <Testimonial />
        <ContactUs />
      </div>
    </div>
  );
}

export default MainPage;
