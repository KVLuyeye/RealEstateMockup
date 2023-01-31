import { Link } from "react-router-dom";

export const InviteCard = (props) => {
  return (
    <div id="invite-container" style={{ height: props.height }}>
      <div id="invite-bgimage">
        <h1>
          {" "}
          Learn more about our listing process, as well as our additionial
          staging and design work.
        </h1>
        <Link to="/">
          {" "}
          <button> Sign Up </button>
        </Link>
      </div>
    </div>
  );
};

export default InviteCard;
