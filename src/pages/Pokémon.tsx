import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Pokemon } from "../utils/types";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Pokémon() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetchData("pokemon", "GET");
      setPokemon(data);
    };
    fetchPokemon();
  }, []);

  const handleLike = async (poke: Pokemon) => {
    const likesCount =
      typeof poke.likes === "number"
        ? poke.likes
        : parseInt(poke.likes || "0", 10);
    const updatedPoke = { ...poke, likes: likesCount + 1 };

    try {
      await fetchData(
        `pokemon/${poke.id}`,
        "PATCH",
        JSON.stringify({ likes: updatedPoke.likes })
      );
      setPokemon((prev) =>
        prev.map((p) => (p.id === poke.id ? updatedPoke : p))
      );
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <main className="bg-soft-white dark:bg-dark-charcoal text-midnight-blue dark:text-soft-white p-8">
      <h2 className="text-3xl font-bold text-center">Pokémon</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemon.map((poke) => (
          <div
            key={poke.id}
            className="bg-white dark:bg-midnight-blue p-4 rounded-lg shadow-md text-center"
          >
            <img src={poke.imageUrl} alt={poke.name} className="h-52 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 capitalize">
              {poke.name}
            </h3>
            <p className="text-sm text-slate-gray dark:text-soft-white">
              #{poke.id}
            </p>
            <button
              onClick={() => handleLike(poke)}
              className="flex items-center"
            >
              {poke.likes == 0 ? (
                <FaRegHeart className="text-black dark:text-soft-white" />
              ) : (
                <FaHeart className="text-red-500" />
              )}
              <p className="ml-2 text-sm text-midnight-blue dark:text-soft-white">
                {poke.likes || 0} Likes
              </p>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}