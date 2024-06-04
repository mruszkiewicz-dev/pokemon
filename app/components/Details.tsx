"use client";

import Image from "next/image";
import { BG } from "./BG";

export const Details = ({ pokemon }: any) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const imageUrl = pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites?.other?.home?.front_default;

  return (
    <BG>
      <div>
        <p>{pokemon.name}</p>
        {imageUrl ? <Image src={imageUrl} alt={pokemon.name} width={200} height={200} /> : <p>No image available</p>}
        {pokemon.types.map((typ: any, i: any) => (
          <p key={i}>{typ.type.name}</p>
        ))}
      </div>
    </BG>
  );
};
