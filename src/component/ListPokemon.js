import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import React from "react";
import CardPokemon from "./CardPokemon";

export default function ListPokemon({ pokemon, loadMorePokemon, isNext }) {
  return (
    <SafeAreaView style={styles.container}>
        <CardPokemon pokemon={pokemon} loadMorePokemon={loadMorePokemon} isNext = {isNext}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 8,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
