import Logo from './Logo'; 
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-midnight-blue text-soft-white py-4">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4 px-4">
        <Logo size={40} /> {/* Use the Logo component here */}
        <h1 className="text-2xl font-bold">Pokemon Collection</h1>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
}