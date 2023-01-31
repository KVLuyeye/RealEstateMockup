import "./App.scss";
import "./index.css";
import { Landing } from "./pages/Landing";
import { Invest } from "./pages/Invest";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Funds } from "./pages/Funds";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </>
  );
}

export default App;
