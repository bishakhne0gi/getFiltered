import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "./navigationTypes";
import HomeStackNavigator from "./HomeStackNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            if (route.name === "HomeTab") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "SettingsTab") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "ProfileTab") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
      </Tab.Navigator> */}
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
