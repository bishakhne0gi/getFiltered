import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UploadScreen from "./screens/UploadScreen";
import FilterScreen from "./screens/FilterScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  OverpassMono_400Regular,
  OverpassMono_700Bold,
} from "@expo-google-fonts/overpass-mono";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    OverpassMono_400Regular,
    OverpassMono_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Hide splash screen once fonts are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <StatusBar style="light" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Upload"
              component={UploadScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FilterScreen"
              component={FilterScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
