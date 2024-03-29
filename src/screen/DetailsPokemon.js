import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getPokemonDetailSelected } from '../api/getPokemonsApi';
import { useState } from 'react';
import HeaderPokemon from '../component/detailPokemon/HeaderPokemon';
import TypePokemon from '../component/detailPokemon/TypePokemon';
import StatsPokemon from '../component/detailPokemon/StatsPokemon';


const DetailsPokemon = ({ route }) => {
  const { id,img } = route.params || {};
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonDetail();
  }, [id]);

  const fetchPokemonDetail = async () => {
    try {
      const res = await getPokemonDetailSelected(id);
      setPokemon(res);
    } catch (e) {
      console.log(e);
    }
  };

  if (!id) {
    return <Text>No item found</Text>;
  }
  return (
    <View>
      <HeaderPokemon pokemon={pokemon} img={img}/>
      <TypePokemon pokemon={pokemon}/>
      <StatsPokemon pokemon={pokemon}/>
    </View>
  );
};
export default DetailsPokemon;
