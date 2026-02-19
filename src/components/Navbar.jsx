import { NavLink } from "react-router-dom";

function Navbar(){
    return(
          <nav className="navbar">
            <h2>Skillswap</h2>

            <div className="nav-links">
                
                <NavLink to="/"end>Dashboard</NavLink>
                <NavLink to="/directory">Mentors</NavLink>
                <NavLink to="/add">Become a Mentor</NavLink>
                <NavLink to="/inquiries">Inquiries</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
          </nav>


        
    );
};

export default Navbar;





