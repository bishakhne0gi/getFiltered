import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";

// Define the stack navigator param list
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Define the tab navigator param list
export type RootTabParamList = {
  HomeTab: undefined;
  Settings: undefined;
};

// Define the navigation prop types
export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, "Home">,
  BottomTabNavigationProp<RootTabParamList>
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

export type SettingsScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Settings"
>;
