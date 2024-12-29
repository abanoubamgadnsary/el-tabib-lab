import "./contactUs.css";
// import Lottie from "lottie-react";
// import contact from "../../public/animation/Animation - 1732563904820.json";
import ContactSVG from "../../public/animation/contact-us-animate.svg";
function ContactUs() {
  return (
    <section className="contact-us" id="contact">
      <div className="svg">
        <img src={ContactSVG} alt="SVG" />
      </div>

      {/*       

      <div className="svg ">
        <Lottie
          style={{
            backgroundColor: "#183645",
            borderRadius: "10px",
          }}
          animationData={contact}
        />
      </div> */}
      <div className="co-details ">
        <span className="icon-map-marker">
          <p>.فرع البحر: ش المؤسسة للنظارات خلف سلم المحطة</p>
        </span>
        <span className="icon-map-marker ">
          <p>.فرع الزهراء: بجوار البنك الاهلي فرع الفتح</p>
        </span>
        <span className="icon-phone-square ">
          <p>01116573311</p>
        </span>
        <span className="icon-facebook-square">
          <a href="https://www.facebook.com/profile.php?id=100088403545170&name=xhp_nt_">
            Eltabib Lab
          </a>
        </span>
      </div>
    </section>
  );
}

export default ContactUs;
