import "./contactUs.css";
import ContactSVG from "../../../public/animation/contact-us-animate.svg";
import { useTranslation } from "react-i18next";
function ContactUs() {
  const { t } = useTranslation();
  return (
    <section className="contact-us" id="contact">
      <div className="svg">
        <img src={ContactSVG} alt="SVG" />
      </div>

      <div className="co-details ">
        <span className="icon-map-marker">
          <p>سوهاج فرع اول: البحر ش المؤسسة للنظارات خلف سلم المحطة</p>
        </span>
        <span className="icon-map-marker ">
          <p>سوهاج فرع ثاني: الزهراء بجوار البنك الاهلي فرع الفتح</p>
        </span>
        <span className="icon-map-marker ">
          <a
            target="blank"
            href="https://maps.app.goo.gl/PFdzUTeK3tu51zzT6?g_st=iw"
          >
            {t("contact-us.location")}
          </a>
        </span>
        <span className="icon-phone-square ">
          <a href="tel:01116573311">01116573311</a>
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
