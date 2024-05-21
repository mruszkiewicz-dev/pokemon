import Image from "next/image";
import { Details } from "./components/Details";

async function getRandomPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    const data = await response.json();
    const count = data.count;

    // Wylosowanie ID Pokemona
    const randomId = Math.floor(Math.random() * count) + 1;

    // Pobranie danych o losowym Pokemonie
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    if (!pokemonResponse.ok) {
      if (pokemonResponse.status === 404) {
        return await getRandomPokemon();
      }
    }
    const pokemonData = await pokemonResponse.json();

    return pokemonData;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export default async function Page() {
  const pokemon = await getRandomPokemon();

  return (
    <main>
      <Details pokemon={pokemon} />
    </main>
  );
}
