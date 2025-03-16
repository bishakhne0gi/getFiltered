import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

type RootStackParamList = {
  Upload: undefined;
  FilterScreen: { imageUri: string };
  Home: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2D52" }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* Top text section */}
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            Never loose a
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            moment again.
          </Text>
          <View
            style={{
              paddingTop: 24,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#ADACCA",
                fontSize: 24,
                fontWeight: "normal",
              }}
            >
              Make it yours
            </Text>
            <Image
              source={require("../assets/Star.png")}
              style={{ width: 24, height: 24 }}
            />
          </View>
        </View>

        {/* Center image */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 40,
          }}
        >
          <Image
            source={require("../assets/Camera.png")}
            style={{
              width: 300,
              height: 300,
            }}
            resizeMode="contain"
          />
        </View>

        {/* Bottom button */}
        <View style={{ marginHorizontal: 20, marginBottom: 0 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#F5B758",
              padding: 16,
              width: "100%",
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 1,
              shadowRadius: 0,
              borderWidth: 1,
              borderColor: "black",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
            onPress={() => navigation.navigate("Upload")}
          >
            <Text style={{ color: "black", fontSize: 20 }}>Get Started</Text>
            <MaterialIcons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
