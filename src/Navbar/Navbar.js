import "../Navbar/Navbar.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header-container">
      <Link to="/" className='header-link-styles'>
        <h2>Sasquatch</h2>
      </Link>
      <Menu />
    </header>
  );
};

export default Navbar;
