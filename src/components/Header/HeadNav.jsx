import { Link } from "react-router-dom";
import "./header.scss";

export const HeadNav = (props) => {
  return (
    <nav id="head-nav">
      <Link to="/">
        {" "}
        <img src="" alt="LOGO" />
      </Link>
      <br />
      <Link to="/invest">Invest</Link>
      <Link to="/funds">Raise Funds</Link>
      <Link to="/aboutUs"> About Us </Link>
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/login">
        {" "}
        <button id="logInBtn"> Log In </button>
      </Link>
      <button> {props.btnName}</button>
    </nav>
  );
};

export default HeadNav;
