import "./navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-container ">
        <a className="logo" href="">
          <img src="./src/EL TABIB LOGO PNG.png" alt="" />
        </a>
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="#main">Main</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#service">Our Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
