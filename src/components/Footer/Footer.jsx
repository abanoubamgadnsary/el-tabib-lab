import "./footer.css";

function Footer() {
  const year = new Date();
  const updatedYear = year.getFullYear();

  return (
    <div className="footer">
      <img src="./photos/EL TABIB LOGO PNG.png" alt="" />
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
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=201116573311"
          >
            <p>0111657331</p>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
