const Navbar = () => {
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
          <a href="">Login</a>
          <aside>/</aside>
          <a href="">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
