import { useContext } from "react";
import { navContext } from "../App";
const Navbar = () => {
  const NavContext= useContext(navContext)

  return (
    <nav>
      <div className="logo_wrapper">
        <h1>CARENT</h1>
      </div>
      <div className="navbar_wrapper">
        <div className="nav_links_wrapper">
          <ul className="nav_links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Booking</a>
            </li>
            <li>
              <a href="">Car</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navBtn_wrapper">
          <p className="navBtn_wrapper_a">Login</p>
          <aside>/</aside>
          <p className="navBtn_wrapper_a">Sign up</p>
        </div>
      </div>
      <div className="hambuger">
      <i className="fa-solid fa-bars" id={NavContext.navOpen ? "remove_ham": undefined} onClick={()=>NavContext.setNavOpen(true)}></i>
      </div>
    </nav>
  );
};

export default Navbar;
