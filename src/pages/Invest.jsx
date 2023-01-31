import Footer from "../components/Footer/Footer";
import HeadNav from "../components/Header/HeadNav";
import InviteCard from "../assets/InviteCard";
import InvestProp1 from "../assets/pics/InvestProperty1.jpg";
import InvestProp2 from "../assets/pics/InvestProperty2.jpg";
import InvestProp3 from "../assets/pics/InvestProperty3.jpg";
import InvestProp4 from "../assets/pics/InvestProperty4.jpg";
import InvestProp5 from "../assets/pics/InvestProperty5.jpg";
import InvestProp6 from "../assets/pics/InvestProperty6.jpg";

const pTagStyles = {
  color: "gray",
  textAlign: "center",
};

export const Invest = () => {
  return (
    <>
      <HeadNav btnName="Contact us" />
      <h1>Our properties </h1>

      <div
        className="container2"
        style={{
          gridTemplateRows: "20rem 20rem",
          marginBottom: "2em",
          rowGap: "3em",
          columnGap: "3em",
          justifyItems: "center",
        }}
      >
        <div
          className="display-card"
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${InvestProp1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              flex: 3,
            }}
          ></div>
          <h4>Cape Town, SA</h4>
          <span style={pTagStyles}> Residential</span>
          <span>
            {" "}
            <b>CHF 4'900'000</b>
          </span>
        </div>

        <div
          className="display-card"
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${InvestProp2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          ></div>
          <h4> Johannesburg, SA</h4>
          <span style={pTagStyles}>Residential</span>
          <span>
            {" "}
            <b>CHF 5'200'000</b>
          </span>
        </div>
        <div
          className="display-card"
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${InvestProp3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          ></div>
          <h4>Accra, Ghana</h4>

          <span style={pTagStyles}>Residential</span>

          <span>
            {" "}
            <b>CHF 2'500'000</b>{" "}
          </span>
        </div>

        <div
          className="display-card"
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${InvestProp4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              flex: 3,
            }}
          ></div>
          <h4>Lagos, Nigeria</h4>
          <span style={pTagStyles}> Residential</span>
          <span>
            {" "}
            <b>CHF 4'900'000</b>
          </span>
        </div>

        <div
          className="display-card"
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${InvestProp5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              flex: 3,
            }}
          ></div>
          <h4>Abidjan, Ivory Coast</h4>
          <span style={pTagStyles}> Residential</span>
          <span>
            {" "}
            <b>CHF 4'900'000</b>
          </span>
        </div>

        <div
          className="display-card"
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${InvestProp6})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              flex: 3,
            }}
          ></div>
          <h4>Kampala, Uganda</h4>
          <span style={pTagStyles}> Residential</span>
          <span>
            {" "}
            <b>CHF 4'900'000</b>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export const DisplayCard = () => {
  return (
    <div className="display-card">
      <div
        style={{
          backgroundImage: `url(${InvestProp1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          flex: 3,
        }}
      ></div>
      <h4>Cape Town, SA</h4>
      <span style={pTagStyles}> Residential</span>
      <span>
        {" "}
        <b>CHF 4'900'000</b>
      </span>
    </div>
  );
};
