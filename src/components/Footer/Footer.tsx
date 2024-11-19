import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; 
import logo2 from '../../assets/logo2.png';

export default function Footer() {
  return (
    <footer className="bg-midnight-blue dark:bg-dark-charcoal text-soft-white dark:text-soft-gray py-16 pb-1 mt-0 relative transition-colors duration-300 border-t dark:border-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-sm mb-4">&copy; 2024 PokéLike. All rights reserved.</p>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow dark:text-electric-blue hover:text-soft-white dark:hover:text-soft-gray transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow dark:text-electric-blue hover:text-soft-white dark:hover:text-soft-gray transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow dark:text-electric-blue hover:text-soft-white dark:hover:text-soft-gray transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="absolute top-[-22px] right-4 transform translate-x-0 z-10">
        <img
          src={logo2}
          alt="Pokémon Logo"
          className="w-24 h-auto transform rotate-180 dark:opacity-80"
        />
      </div>
    </footer>
  );
}