import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="bg-electric-yellow dark:bg-dark-charcoal text-midnight-blue dark:text-soft-white p-2 rounded-full shadow-md transition-colors"
    >
      {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}