import HeadNav from "../components/Header/HeadNav";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";
import Hero from "../components/Header/Hero";

export const Landing = () => {
  return (
    <>
      <HeadNav btnName="Sign Up" />
      <Hero
        btnName="Discover More"
        header="REAL ESTATE INVESTING REIMAGINED "
      />
      <Content />
      <Footer />
    </>
  );
};
