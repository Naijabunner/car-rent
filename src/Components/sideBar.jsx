import { useContext } from "react";
import { navContext } from "../App";
const Sidebar = () => {
    const NavContext= useContext(navContext)
    return ( <>
    <div className= "sidebar_wrapper" id={NavContext.navOpen ? "sidebar_wrapper_active": undefined}>
        <div className="close_icon">
        <i className="fa-solid fa-x" onClick={()=>NavContext.setNavOpen(false)}></i>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Booing</li>
            <li>Car</li>
            <li>Contact</li>
            <li>
                <div className="login_singup">
                    <p>SIgn up</p>
                    <p>Sign up</p>
                </div>
            </li>
        </ul>
    </div>
    </> );
}
 
export default Sidebar;