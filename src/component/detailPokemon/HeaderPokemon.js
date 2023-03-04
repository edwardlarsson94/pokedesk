import { View, Text, Platform } from "react-native";
import React from "react";
import { POKEMON_TYPE_COLORS } from "../../utils/constant";
import { StyleSheet, Image } from "react-native";
import { capitalize } from "lodash";

export default function HeaderPokemon({ pokemon, img }) {
  if (!pokemon) {
    return null;
  }
  const { id = "", name = "", sprites = {}, types = [] } = pokemon || {};
  const color = types[0]?.type?.name || "";
  const number = id.toString().padStart(3, "0");
  const title = capitalize(name);
  const image = img;

  return (
    <>
      <View
        style={{
          ...styles.item,
          backgroundColor: POKEMON_TYPE_COLORS[color],
        }}
      ></View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{capitalize(title)}</Text>
        <Text style={styles.numberId}>{`#${number
          .toString()
          .padStart(3, "0")}`}</Text>
      </View>
      <Image style={styles.image} source={{ uri: image }} />
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 400,
    width: "100%",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    transform: [{ scaleX: 2 }],
    position: "absolute",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 90 : 70,
    marginHorizontal: 20,
  },
  numberId: {
    color: "white",
    fontSize: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 250,
    height: 250,
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 175 : 160,
    marginLeft: 70,
  },
});
