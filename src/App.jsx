import { useTranslation } from "react-i18next";
import Navbar from "./1-NavBar/Navbar";
import Hero from "./2-Hero/Hero";
import Main from "./3-Main/Main";
import ContactUs from "./Contact Us/ContactUs";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import VideoAds from "./videoAds/VideoAds";

function App() {
  const { t, i18n } = useTranslation();
  const missionLines = t("main.mission").split("\n");
  const visionLines = t("main.vision").split("\n");
  const missionTitleLines = t("main.our mission").split("\n");
  console.log(missionTitleLines);

  return (
    <div className={i18n.resolvedLanguage === "en" ? "font-en" : "font-ar"}>
      <VideoAds />
      <Navbar />
      <Hero />
      <hr />

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
          <h1 key={index}>{line}</h1>
        ))}
        direction={"right"}
        content={missionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      />

      <Services />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
