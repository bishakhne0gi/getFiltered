import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
  Dimensions,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Upload: undefined;
  FilterScreen: { imageUri: string };
};

type UploadScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Upload"
>;

const UploadScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const navigation = useNavigation<UploadScreenNavigationProp>();

  const requestPermissions = async () => {
    if (Platform.OS !== "web") {
      const { status: cameraStatus } =
        await ImagePicker.requestCameraPermissionsAsync();
      const { status: libraryStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (cameraStatus !== "granted" || libraryStatus !== "granted") {
        Alert.alert(
          "Sorry, we need camera and media library permissions to make this work!"
        );
        return false;
      }
      return true;
    }
    return true;
  };

  const takePhoto = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
      exif: false,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
      exif: false,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const applyFilters = () => {
    if (image) {
      navigation.navigate("FilterScreen", { imageUri: image });
    } else {
      Alert.alert("Please select or take a photo first");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2F2D52" }}>
      <View
        style={{
          backgroundColor: "#FFF2D9",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
          height: "70%",
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 0,
          borderWidth: 4,
          borderColor: "black",
        }}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <MaterialIcons name="image" size={80} color="#ccc" />
            <Text style={{ color: "#ccc" }}>No image selected</Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFF2D9",
            padding: 10,
            width: "30%",
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
          onPress={takePhoto}
        >
          <MaterialIcons name="camera-alt" size={24} color="black" />
          <Text style={{ color: "black", fontSize: 16 }}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFF2D9",
            padding: 10,
            width: "30%",
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
          onPress={pickImage}
        >
          <MaterialIcons name="photo-library" size={24} color="black" />
          <Text style={{ color: "black", fontSize: 16 }}>Gallery</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
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
          onPress={applyFilters}
          disabled={!image}
        >
          <Text style={{ color: "black", fontSize: 20 }}>Next</Text>
          <MaterialIcons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;
