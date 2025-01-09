import { useTranslation } from "react-i18next";
import Navbar from "./components/1-NavBar/Navbar";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import ContactUs from "./components/Contact Us/ContactUs";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import VideoAds from "./components/videoAds/VideoAds";

function App() {
  const { t, i18n } = useTranslation();
  const missionLines = t("main.mission").split("\n");
  const visionLines = t("main.vision").split("\n");
  const missionTitleLines = t("main.our mission").split("\n");

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
      <Footer />
    </div>
  );
}

export default App;
