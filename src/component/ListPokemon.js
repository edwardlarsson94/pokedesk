import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React from "react";

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default function ListPokemon({ pokemon }) {
  return (
    <SafeAreaView>
      <FlatList
        data={pokemon}
        renderItem={({ item }) => <Item title={item.name} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
