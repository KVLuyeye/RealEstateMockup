import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div id="footer-container">
      <div id="logo-container">
        <img src="" alt="LOGO" />
        <p>
          <i> *SLOGAN* </i>
        </p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          {" "}
          <Link to="/contact">Contact</Link>
        </p>
      </div>
      <div>
        <h4>Services</h4>
        <p>About Us</p>
        <p>Blogs & Article</p>
        <p>Terms and Conditions</p>
      </div>
      <div>
        {" "}
        <h4>Contact</h4>
        <p>
          Address: Rue du Roi 27, <br />
          Génève, Suisse
        </p>
        <p>Email: imaginaryemali@realestate.com</p>
      </div>
    </div>
  );
};

export default Footer;
