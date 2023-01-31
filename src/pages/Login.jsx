import { Link } from "react-router-dom";
import LoginImage from "../assets/pics/Login-Image.jpg";
import LoginVid from "../assets/vid/loginVideo.mp4";

export const Login = () => {
  const LoginImageStyles = {
    height: "84%",
    width: "100%",
    columnGap: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginright: 0,
  };

  const styles1 = {
    height: "100%",
    width: "100%",
    background: `url(${LoginVid})`,
  };

  return (
    <>
      <div className="container1" style={LoginImageStyles}>
        <div id="loginForm">
          <h2>Welcome back</h2>
          <h4>Please login to your Account</h4>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>
            {" "}
            <a href="">Forgot Password?</a>{" "}
          </p>
          <Link>
            {" "}
            <button>Log In</button>
          </Link>
          <p> Are you a new user?</p>
        </div>
      </div>
    </>
  );
};
