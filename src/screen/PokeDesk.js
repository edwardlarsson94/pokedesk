import React, { useEffect, useState } from "react";
import ListPokemon from "../component/ListPokemon";
import { getPokemonsApi, getPokemonsDetailsApi } from "../api/getPokemonsApi";

export default function PokeDesk() {
  const [pokemons, setPokemons] = useState(null);
  const [detailsPokemons, setDetailsPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const res = await getPokemonsApi(pokemons);
      setPokemons(res.next);
      const promises = res.results.map((pokemon) => {
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
      setDetailsPokemons(detailsPokemons.concat(pokemonDetails));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ListPokemon pokemon={detailsPokemons} loadMorePokemon={fetchPokemons} isNext = {pokemons}/>
  );
}
