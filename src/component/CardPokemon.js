import React, { memo, useCallback } from "react";
import { POKEMON_TYPE_COLORS } from "../utils/constant";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { capitalize } from "lodash";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Item = memo(({ title, image, color, number, onPress }) => {
  const handlePress = useCallback(() => {
    onPress(title);
  }, [onPress, title]);

  return (
    <View style={{ ...styles.item, backgroundColor: POKEMON_TYPE_COLORS[color] }}>
      <Text style={styles.numberId}>{`#${number.toString().padStart(3, "0")}`}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.title}>{capitalize(title)}</Text>
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableOpacity>
    </View>
  );
});

const MemoizedItem = memo(Item, (prevProps, nextProps) => {
  if (
    prevProps.title === nextProps.title &&
    prevProps.image === nextProps.image &&
    prevProps.color === nextProps.color &&
    prevProps.number === nextProps.number
  ) {
    return true;
  }
  return false;
});

export default function CardPokemon({ pokemon, loadMorePokemon, isNext }) {
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const navigation = useNavigation();

  const handleEndReached = useCallback(
    ({ distanceFromEnd }) => {
      if (isInitialLoad || distanceFromEnd < 0) {
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
    },
    [isInitialLoad, loadMorePokemon]
  );

  const handleNavigateToDetails = useCallback(
    (name) => {
      navigation.navigate("DetailsPokemon", { name });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <MemoizedItem
        key={item.id}
        title={item.name}
        image={item.img}
        color={item.type}
        number={item.id}
        onPress={() => handleNavigateToDetails(item.name)}
      />
    ),
    [handleNavigateToDetails]
  );

  return (
    <FlatList
      data={pokemon}
      extraData={pokemon}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      numColumns={2}
      onEndReached={isNext && handleEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isNext && loading && <ActivityIndicator size="large" />}
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
    top: 0,
  },
});