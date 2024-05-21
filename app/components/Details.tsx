"use client";

import Image from "next/image";

export const Details = ({ pokemon }) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const imageUrl = pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites?.other?.home?.front_default;

  return (
    <div>
      <p>{pokemon.name}</p>
      {imageUrl ? <Image src={imageUrl} alt={pokemon.name} width={500} height={500} /> : <p>No image available</p>}
    </div>
  );
};
