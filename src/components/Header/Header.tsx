import Logo from './Logo'; 
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-midnight-blue text-soft-white py-4">
      <div className="flex items-center space-x-4 px-4">
        <Logo size={40} />
        <h1 className="text-2xl font-bold">PokéLike</h1>

      </div>
      <Navbar />
    </header>
  );
}