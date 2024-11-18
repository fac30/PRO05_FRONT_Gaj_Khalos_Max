import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Pokemon } from "../utils/types";

export default function Pokémon() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetchData("pokemon", "GET");
      setPokemon(data);
    };
    fetchPokemon();
  }, []);

  return (
    <main className="bg-soft-white text-midnight-blue p-8">
      <h2 className="text-3xl font-bold text-center">Pokémon Collection</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemon.map((poke) => (
          <div
            key={poke.id}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <img src={poke.imageUrl} alt={poke.name} className="w-24 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 capitalize">
              {poke.name}
            </h3>
            <p className="text-sm text-slate-gray">#{poke.id}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
