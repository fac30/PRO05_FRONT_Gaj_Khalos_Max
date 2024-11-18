export default function Pokémon() {
  return (
    <main className="bg-soft-white dark:bg-dark-charcoal text-midnight-blue dark:text-pure-white p-8">
      <h2 className="text-3xl font-bold text-center">Pokémon Collection</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-gray p-4 rounded-lg shadow-md text-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Bulbasaur"
            className="w-24 mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">Bulbasaur</h3>
          <p className="text-sm text-slate-gray dark:text-soft-white">Grass / Poison</p>
        </div>

        <div className="bg-white dark:bg-slate-gray p-4 rounded-lg shadow-md text-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            alt="Ivysaur"
            className="w-24 mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">Ivysaur</h3>
          <p className="text-sm text-slate-gray dark:text-soft-white">Grass / Poison</p>
        </div>

        <div className="bg-white dark:bg-slate-gray p-4 rounded-lg shadow-md text-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            alt="Venusaur"
            className="w-24 mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">Venusaur</h3>
          <p className="text-sm text-slate-gray dark:text-soft-white">Grass / Poison</p>
        </div>
      </div>
    </main>
  );
}