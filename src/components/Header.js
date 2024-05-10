import logo from "/images/foodlogo.jpg";
export default Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
