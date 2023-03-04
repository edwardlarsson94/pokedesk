import React from 'react';
import { View, Text } from 'react-native';

const DetailsPokemon = ({ route }) => {
  const { name } = route.params || {};
  if (!name) {
    return <Text>No item found</Text>;
  }
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
export default DetailsPokemon;
