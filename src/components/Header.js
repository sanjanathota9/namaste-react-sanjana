import logo from "/images/foodlogo.jpg";
import { useState } from "react";
export default Header = () => {
  let intialBtnName = "Login";
  const [btnName, setBtnName] = useState(intialBtnName);
  return (
    <div className="header">
      <div className="img-container">
        <img className="logo-img" src={logo} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
