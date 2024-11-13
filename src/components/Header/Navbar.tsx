import { Link } from "react-router-dom";

const navItemClasses = "hover:text-electric-yellow transition-colors duration-300";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between py-4 px-6 bg-soft-white shadow-md">
      {/* Navigation Links */}
      <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
        <li>
          <Link to="/" className={`${navItemClasses} text-midnight-blue`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`${navItemClasses} text-midnight-blue`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`${navItemClasses} text-midnight-blue`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
