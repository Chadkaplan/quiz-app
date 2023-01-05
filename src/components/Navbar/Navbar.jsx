import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/play">Play</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
