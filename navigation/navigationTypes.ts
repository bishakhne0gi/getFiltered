import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

// Define the stack navigator param list
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

// Define the tab navigator param list
export type RootTabParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  ProfileTab: { userId?: string };
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

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export type SettingsScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "SettingsTab"
>;

// Define route prop types
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

// Helper type for screen props
export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
