import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Collection } from "../utils/types";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Collections() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await fetchData("collections", "GET");
      setCollections(data);
    };
    fetchCollections();
  }, []);

  const handleLike = async (col: Collection) => {
    const likesCount =
      typeof col.likes === "number"
        ? col.likes
        : parseInt(col.likes || "0", 10);
    const updatedCol = { ...col, likes: likesCount + 1 };

    try {
      await fetchData(
        `Collection/${col.id}`,
        "PATCH",
        JSON.stringify({ likes: updatedCol.likes })
      );
      setCollections((prev) =>
        prev.map((p) => (p.id === col.id ? updatedCol : p))
      );
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <main className="bg-soft-white dark:bg-dark-charcoal text-midnight-blue dark:text-soft-white p-8">
      <h2 className="text-3xl font-bold text-center">Collections</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {collections.map((col) => (
          <div
            key={col.id}
            className="bg-white dark:bg-midnight-blue p-4 rounded-lg shadow-md text-center"
          >
            <div className="flex flex-row gap-4 overflow-x-auto">
              {col.pokemonCollections.map((poke) => (
                <img
                  key={poke.pokemon.id}
                  src={poke.pokemon.imageUrl}
                  alt={poke.pokemon.name}
                  className="h-52 w-auto max-w-full object-contain mx-auto"
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold mt-4 capitalize">
              {col.name}
            </h3>
            <p className="text-sm text-slate-gray dark:text-soft-white">
              #{col.id}
            </p>
            <button
              onClick={() => handleLike(col)}
              className="flex items-center"
            >
              {col.likes == 0 ? (
                <FaRegHeart className="text-black dark:text-soft-white" />
              ) : (
                <FaHeart className="text-red-500" />
              )}
              <p className="ml-2 text-sm text-midnight-blue dark:text-soft-white">
                {col.likes || 0} Likes
              </p>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
