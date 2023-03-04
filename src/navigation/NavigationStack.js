import React from 'react';
import { Platform } from "react-native";
import DetailsPokemon from "../screen/DetailsPokemon";
import PokeDesk from "../screen/PokeDesk";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokeDesk"
        component={PokeDesk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsPokemon"
        component={DetailsPokemon}
        options={{ title: Platform.OS === 'ios' ? "" : "",    
        headerBackTitle: 'Back',
        headerTransparent: true,
      }}
      />
    </Stack.Navigator>
  );
}