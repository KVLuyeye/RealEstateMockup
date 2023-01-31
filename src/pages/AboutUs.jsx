import { useRef } from "react";
import { StatsCard } from "../assets/StatsCard";
import Footer from "../components/Footer/Footer";
import HeadNav from "../components/Header/HeadNav";
import AboutUsImage from "/src/assets/pics/AboutUsImage1.jpg";

const AboutUsImageStyles = {
  backgroundImage: `url(${AboutUsImage})`,
  backgroundPosition: "center",
  backgroundSize: " cover",
  backgroundRepeat: "no-repeat",
};

const container1 = "container1";

export const AboutUs = () => {
  return (
    <>
      {" "}
      <HeadNav btnName="Sign Up" />
      <div className={container1}>
        <div style={AboutUsImageStyles} className="image"></div>
        <div>
          <h1>About Us</h1>
          <p>
            we provide quality service to build relationships with clients and
            more importantly, maintain those relationship by communicating
            effectively. From experience in real estate, costumer service and
            fincance, we adopt hard-working, costumer centric culture.{" "}
          </p>
        </div>
      </div>
      <StatsCard />
      <div className={container1}>
        <div className="image"></div>
        <div>
          <h1>Our Vision</h1>
          <p>
            {" "}
            Our reliable real estate professionals deliver remarkable real
            estate services in the twin cities of islamabad to perfectly assist
            gap between a buyer and seller. We provide quality service to build
            relationships with clients and more importantly maintain those
            relationship.
          </p>
        </div>
      </div>
      <div className={container1}>
        <div>
          <h1>How did it all start?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            itaque voluptatum exercitationem omnis qui ad tenetur assumenda a.
            Porro commodi autem explicabo expedita tempora dolor possimus quae
            itaque deleniti placeat?
          </p>
        </div>

        <div className="image"></div>
      </div>
      <div className={container1}>
        <div className="image"></div>

        <div>
          {" "}
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo in est
            fugit ea saepe eius dignissimos. Vero corrupti provident suscipit.
            Illo maiores suscipit neque pariatur consequatur impedit corporis
            vero voluptatibus?
          </p>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};
