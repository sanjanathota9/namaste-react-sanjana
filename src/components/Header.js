import logo from "/images/foodlogo.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
export default Header = () => {
  let intialBtnName = "Login";
  const [btnName, setBtnName] = useState(intialBtnName);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between items-center border border-black sm:bg-gray-200">
      <div className="w-40">
        <img className="logo-img" src={logo} />
      </div>
      <div className="nav-container">
        <ul className="flex">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                setBtnName("Logout");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{data.userName}</li>
        </ul>
      </div>
    </div>
  );
};
