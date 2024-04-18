import { Outlet, Link } from "react-router-dom";
import "./navbar.css"
        const Navbar = () => {
          return (
          <>
              <div className="navbar">
              <div className="navbarcontainer">
                <span className="logo">Savings App</span>
               
                <ul className="navItems">
                  <li className="navItem">
                    <Link to="/"  className="navText">Home</Link>
                  </li>
                  <li className="navItem">
                    <Link to="/Goal"  className="navText">Goal</Link>
                  </li>
                  <li className="navItem">
                    <Link to="/Balance" className="navText">Balance</Link>
                  </li>
                  <li className="navItem">
                    <Link to="/Summary" className="navText">Summary</Link>
                  </li>
                </ul>
              </div>
              </div>
              <Outlet/>
            </>
          )
        };
        
        export default Navbar;