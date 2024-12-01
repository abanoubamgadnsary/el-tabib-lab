import Navbar from "./1-NavBar/Navbar";
import Hero from "./2-Hero/Hero";
import Main from "./3-Main/Main";
import ContactUs from "./Contact Us/ContactUs";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr />

      <Main
        img={"/public/photos/analysis-2030261_1280.jpg"}
        header={"Our Vision"}
        direction={"left"}
      />
      <Main
        img={"/public/photos/teachers-5499190_1280.jpg"}
        header={"Our Mission"}
        direction={"right"}
      />

      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
