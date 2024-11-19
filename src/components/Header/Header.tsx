import Logo from './Logo'; 
import Navbar from './Navbar';
import DarkModeToggle from '../Button/DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-midnight-blue dark:bg-dark-charcoal text-soft-white py-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Logo size={40} />
          <h1 className="text-2xl font-bold">PokéLike</h1>
        </div>
        <DarkModeToggle />
      </div>
      <Navbar />
    </header>
  );
}