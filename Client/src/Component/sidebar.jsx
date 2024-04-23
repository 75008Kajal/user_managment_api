import { Link } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <div id="viewport">
      <div id="sidebar">
        <header>
          <Link to="/home">Users </Link>
        </header>
        <ul className="navx">
          
          <li>
            <Link to="#" className="nav-link">
              All users
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Add user
            </Link>
          </li>
          
          <li>
            <Link to="/searchuser" className="nav-link">
              Serach user
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li>
            <Link to="/login" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
