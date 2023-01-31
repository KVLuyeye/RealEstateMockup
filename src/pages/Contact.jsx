import Footer from "../components/Footer/Footer";
import HeadNav from "../components/Header/HeadNav";
import { MaterialSymbolsOtherHouses } from "../assets/icons/icons";

export const Contact = () => {
  return (
    <>
      <HeadNav btnName="Sign Up" />
      <h1>Contact Us</h1>
      <p>
        For any inquiries about our investment process or other business
        inquiries, please fill out the following form.
      </p>
      <div className="container1" id="contact-container">
        <div>
          <h2>Get in touch with us !</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quam
            odit unde ipsa reiciendis reprehenderit, explicabo dolor quo fuga
            suscipit quaerat nostrum labore pariatur?
          </p>

          <p>+41 88 999 22 11</p>
          <p>invest@realestate.com</p>
          <span>
            {" "}
            <MaterialSymbolsOtherHouses /> Rue du Roi 27, Génève, Suisse
          </span>
        </div>
        <form id="contact-form">
          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="..."></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
