import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-midnight-blue text-soft-white py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-sm mb-4">&copy; 2024 Pokémon Collections. All rights reserved.</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow hover:text-soft-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow hover:text-soft-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-yellow hover:text-soft-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}