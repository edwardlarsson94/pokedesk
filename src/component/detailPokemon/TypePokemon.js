import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { POKEMON_TYPE_COLORS } from "../../utils/constant";
import { capitalize } from "lodash";


export default function TypePokemon({ pokemon }) {
  return (
    <View style={styles.item}>
      {pokemon?.types.map((item) => {
        return (
          <Text
            key={item.type.name}
            style={{
              ...styles.texts,
              backgroundColor: POKEMON_TYPE_COLORS[item?.type.name],
            }}
          >
            {capitalize(item?.type.name)}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({  
    item: { 
        marginTop: 350,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    texts:{
        width: 80,
        height: 22,
        padding: 1,
        textAlign: "center",
        borderRadius: 9,
        overflow: "hidden",
        marginLeft: 15,
    }

});
