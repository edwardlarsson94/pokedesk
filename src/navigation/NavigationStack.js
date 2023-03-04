import React from 'react';
import { Platform } from "react-native";
import DetailsPokemon from "../screen/DetailsPokemon";
import PokeDesk from "../screen/PokeDesk";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        headerBackTitle: ' ',
        headerTransparent: true,
        headerBackImage: () => (
          <Ionicons name={'arrow-back-outline'} 
                    size={25} 
                    color={'white'}
                    style={{marginLeft: Platform.OS === 'ios' ? 15 : 0}}
                    />
        ),
      }}
      />
    </Stack.Navigator>
  );
}