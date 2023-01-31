import { Link } from "react-router-dom";

export const AboutUsCard = () => {
  return (
    <div id="aboutUs-container">
      <div id="aboutUs-image-container"></div>
      <div id="aboutUs-message">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          inventore numquam placeat beatae consequuntur quas distinctio{" "}
        </p>

        <Link to="/aboutUs">
          {" "}
          <button> Learn More </button>
        </Link>
      </div>
    </div>
  );
};
