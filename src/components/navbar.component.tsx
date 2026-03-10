import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">
          <img src="/src/assets/sanelogo.png" alt="Company Logo" />
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </nav>
    </header>
  );
};

export default NavbarComponent;
