import { Link } from "react-router-dom";

const navItemClasses = "hover:text-electric-yellow transition-colors duration-300";

const NAV_ITEMS = [
  { name: "Home", to: "/" },
  { name: "Pokémon", to: "/pokemon" },
  { name: "Collections", to: "/collections" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between py-4 px-6 bg-soft-white shadow-md">
      <div className="flex w-full justify-between">
        {NAV_ITEMS.map((item, index) => (
          <li key={index} className="list-none flex-grow text-center">
            <Link to={item.to} className={`${navItemClasses} text-midnight-blue`}>
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
}
