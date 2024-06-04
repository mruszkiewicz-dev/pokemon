"use client";

import Image from "next/image";
import { BG } from "./BG";

export const Details = ({ pokemon }: any) => {
  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const imageUrl =
    pokemon.sprites?.other?.dream_world?.front_default ||
    pokemon.sprites?.other?.home?.front_default;

  return (
    <BG>
      <div className="absolute inset-x-1/3 bottom-1/4		 	 h-96 w-1/5 size-full   bg-red-500 rounded-xl">
        {imageUrl ? (
          <Image src={imageUrl} alt={pokemon.name} width={200} height={200} />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <p>{pokemon.name}</p>
      {pokemon.types.map((typ: any, i: any) => (
        <p key={i}>{typ.type.name}</p>
      ))}
    </BG>
  );
};
