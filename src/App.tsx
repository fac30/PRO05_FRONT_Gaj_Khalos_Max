import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Pokémon from "./pages/Pokémon";
import Collections from "./pages/Collections";

function App() {
  return (
    <div className="bg-soft-white dark:bg-dark-charcoal text-midnight-blue dark:text-soft-gray min-h-screen transition-colors duration-300">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokémon" element={<Pokémon />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;