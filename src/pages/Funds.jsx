import HeadNav from "../components/Header/HeadNav";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Header/Hero";
import StatsCard from "../assets/StatsCard";
import { DisplayCard } from "./Invest";
import InviteCard from "../assets/InviteCard";
import "../index.css";

export const Funds = () => {
  const containerStyles = {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "50em",
    columnGap: "0",
    paddingTop: "4em",
    paddingBottom: "4em",
  };

  return (
    <>
      {" "}
      <HeadNav btnName="Sign Up" />
      <Hero
        btnName="Raise Funds"
        header="Financing solutions for Real Estate professionals"
        height="25rem"
      />
      <section className="container1" style={containerStyles}>
        <div
          style={{
            width: "100%",
            height: "inherit",
            display: "grid",
            gridTemplateColumns: "40em 20em",
            gridTemplateRows: "4em 10em 10em 10em",
            alignItems: "center",
            rowGap: "1em",
            columnGap: "1em",
            justifyItems: "center",
          }}
        >
          {" "}
          <h2 style={{ gridArea: "span 1/ span 2", textAlign: "center" }}>
            {" "}
            Our financing solutions
          </h2>
          <div style={{ textAlign: "left", width: "100%" }}>
            {" "}
            <h2>Type of project</h2>
            <p>
              {" "}
              Development project
              <span> (land acquisition, new construction)</span>
            </p>
            <p>
              Value add <span>buy and/or renew an existing asset</span>
            </p>
            <p>
              Existing income generating property{" "}
              <span>release locked-in equitiy </span>
            </p>
          </div>
          <div style={{ gridArea: "3/1", width: "100%" }}>
            <h2>Focus</h2>
            <p>
              Residential commercial and Industrial real estate in South Africa
            </p>
          </div>
          <div style={{ gridArea: "4/1", width: "100%" }}>
            <h2>Terms</h2>
            <p>Duration 6 - 36 months (flexible terms)</p>
            <p>Financing range: CHF 1'000'000 - 20'000'000</p>
            <p>Collateral: Real estate property </p>
          </div>
          <div>
            <h3>Submit your opration</h3>
            <p>Answer a few questions about your deal for a quick evaluation</p>
            <button> Request Financing</button>
          </div>
          <div>
            <h3>Learn more</h3>
            <p>
              Book a call to discover our funding oppurtinities for your
              projects
            </p>
            <button>Book a call</button>
          </div>
        </div>
      </section>
      <section className="container1" style={containerStyles}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            rowGap: "1em",
            columnGap: "1em",
            justifyItems: "center",
          }}
        >
          <h1 style={{ gridArea: "span 1/ span 2" }}>
            Advantages of our financing solution
          </h1>
          <div>
            <h2> Reduce your equity contribution</h2>{" "}
            <p>Free up additional equity for further market opportunities</p>
          </div>
          <div>
            <h2> Keep control of your operations</h2>{" "}
            <p>Remain the sole decision maker wihtou relying on a partner.</p>
          </div>
          <div>
            <h2> Maximise your return on investment</h2>{" "}
            <p>Keep the entire margin of your operation</p>
          </div>
          <div style={{ width: "100%" }}>
            <h2> Speed of execution</h2>{" "}
            <p>Obtain a loan within an average of 4 weeks.</p>
          </div>
        </div>
      </section>
      <StatsCard />
      <section className="container1" style={containerStyles}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "3em 20em",
            columnGap: "2em",
            rowGap: "2em",
            width: "100%",
          }}
        >
          <h1 style={{ gridArea: "span 1/ span 3", textAlign: "center" }}>
            Latest financed operations
          </h1>
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>
      </section>
      <InviteCard height="18rem" />
      <Footer />{" "}
    </>
  );
};
