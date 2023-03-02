import React, { useEffect, useState } from "react";
import ListPokemon from "../component/ListPokemon";
import { getPokemonsApi, getPokemonsDetailsApi } from "../api/getPokemonsApi";

export default function PokeDesk() {
  const [pokemons, setPokemons] = useState([]);
  const [detailsPokemons, setDetailsPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await getPokemonsApi();
        setPokemons(res);

        const promises = res.map((pokemon) => {
          const url = pokemon.url;
          return getPokemonsDetailsApi(url).then((res) => ({
            id: res.id,
            name: res.name,
            type: res.types[0].type.name,
            order: res.order,
            img: res.sprites.other["official-artwork"].front_default,
          }));
        });

        const pokemonDetails = await Promise.all(promises);
        setDetailsPokemons(pokemonDetails);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPokemons();
  }, []);

  return <ListPokemon pokemon={detailsPokemons} />;
}
