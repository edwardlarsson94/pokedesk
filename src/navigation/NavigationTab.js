import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Favorite from "../screen/Favorite";
import Account from "../screen/Account";
import PokeDesk from "../screen/PokeDesk";
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Favorite":
              iconName = focused ? "heart-sharp" : "heart-outline";
              break;
            case "Account":
              iconName = focused ? "person" : "person-outline";
              break;
            case "PokeDesk":
              return (
                <Image
                  style={{ width: 70, height: 70, top: -15 }}
                  source={require("../../assets/pokeball.png")}
                />
              );
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign:"center"
      })}
    >
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen
        name="PokeDesk"
        component={PokeDesk}
        options={{ title: Platform.OS === 'ios' ? "Poke Desk Ios" : "Poke Desk Android",
        tabBarLabel: "",
       }}
      />

      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
