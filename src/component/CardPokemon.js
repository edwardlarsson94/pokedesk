import React from "react";
import { POKEMON_TYPE_COLORS } from "../utils/constant";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { capitalize } from "lodash";
import { useState } from "react";

const Item = ({ title, image, color, number }) => (
  <View style={{ ...styles.item, backgroundColor: POKEMON_TYPE_COLORS[color] }}>
    <Text style={styles.numberId}>{`#${number
      .toString()
      .padStart(3, "0")}`}</Text>
    <Text style={styles.title}>{capitalize(title)}</Text>
    <Image style={styles.image} source={{ uri: image }} />
  </View>
);

export default function CardPokemon({ pokemon, loadMorePokemon, isNext }) {
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handleEndReached = ({ distanceFromEnd }) => {
    if (isInitialLoad || distanceFromEnd < 0){
      setIsInitialLoad(false);
      return;
    }
    setLoading(true);
    loadMorePokemon()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        console.log("error");
        setLoading(false);
      });
  };
  return (
    <FlatList
      data={pokemon}
      renderItem={({ item }) => (
        <Item
          title={item.name}
          image={item.img}
          color={item.type}
          number={item.id}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      onEndReached={isNext && handleEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isNext && renderFooter}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 120,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    flex: 1,
  },
  numberId: {
    color: "white",
    textAlign: "right",
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
