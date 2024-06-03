import logo from "/images/foodlogo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export default Header = () => {
  let intialBtnName = "Login";
  const [btnName, setBtnName] = useState(intialBtnName);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="img-container">
        <img className="logo-img" src={logo} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                setBtnName("Logout");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
