import "./footer.css";

function Footer() {
  const year = new Date();
  const updatedYear = year.getFullYear();
  return (
    <div className="footer ">
      <img src="public/photos/Eltabib Lab cover page.png" alt="" />
      <p className="copy-right">
        Copyright &copy;{updatedYear}.El-TABEB|LAB.All Rights Reserved{" "}
      </p>
      <div className="shortcuts">
        <span className="icon-facebook-square ">
          <a href="https://www.facebook.com/profile.php?id=100088403545170&name=xhp_nt_">
            Eltabib Lab
          </a>
        </span>
        <span className="icon-phone-square ">
          <p>0111657331</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
