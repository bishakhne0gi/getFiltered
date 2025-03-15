import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { HomeScreenNavigationProp } from "../navigation/navigationTypes";
import Button from "../components/Button";
import Card from "../components/Card";
import { useToggle } from "../hooks";
import CircularSlider from "../components/CircularSlider";

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const offset = useSharedValue(0);
  const [isAnimating, toggleAnimating] = useToggle(false);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  const handleToggleAnimation = () => {
    offset.value = offset.value === 0 ? 1 : 0;
    toggleAnimating();
  };

  return (
    <View style={{ flex: 1 }}>
      <CircularSlider />
    </View>
  );
};

export default HomeScreen;
