import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
