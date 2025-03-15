import Animated, {
  clamp,
  FadeIn,
  FadeOut,
  interpolate,
  interpolateColor,
  runOnJS,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import React, { useState, useEffect } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Upload: undefined;
  FilterScreen: { imageUri: string };
};

type FilterScreenRouteProp = RouteProp<RootStackParamList, "FilterScreen">;
type FilterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FilterScreen"
>;

const { width } = Dimensions.get("screen");
const _itemSize = width * 0.24;
const _spacing = 12;
const _itemTotalSize = _itemSize + _spacing;

const allFilters = [
  { id: "original", name: "Original" },
  { id: "grayscale", name: "Grayscale" },
  { id: "sepia", name: "Sepia" },
  { id: "negative", name: "Negative" },
  { id: "saturate", name: "Saturate" },
  { id: "contrast", name: "Contrast" },
  { id: "brightness", name: "Brightness" },
  { id: "hue", name: "Hue" },
  { id: "amaro", name: "Amaro" },
  { id: "clarendon", name: "Clarendon" },
  { id: "dogpatch", name: "Dogpatch" },
  { id: "gingham", name: "Gingham" },
];

function FilterItem({
  filter,
  index,
  scrollX,
  originalImageUri,
}: {
  filter: (typeof allFilters)[number];
  index: number;
  scrollX: SharedValue<number>;
  originalImageUri: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Just to simulate loading for consistency
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [originalImageUri]);

  const styles = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      scrollX.value,
      [index - 1, index, index + 1],
      ["black", "#FFF2D9", "black"]
    );
    const translateY = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [_itemSize / 3, 0, _itemSize / 3]
    );

    const shadowColor = interpolateColor(
      scrollX.value,
      [index - 1, index, index + 1],
      ["black", "#FFF2D9", "black"]
    );
    return {
      borderWidth: 2,
      borderColor,
      shadowColor,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 0,
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: _itemSize,
          height: _itemSize,
          borderRadius: _itemSize / 2,
        },
        styles,
      ]}
    >
      {/* Temporarily use a simple Image component to avoid GL React issues */}
      <Image
        source={{ uri: originalImageUri }}
        style={{
          flex: 1,
          borderRadius: _itemSize / 2,
        }}
      />
      {/* Add a colored overlay to simulate filter effect */}
      {filter.id !== "original" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:
              filter.id === "grayscale"
                ? "rgba(0,0,0,0.5)"
                : filter.id === "sepia"
                ? "rgba(255,235,205,0.5)"
                : filter.id === "negative"
                ? "rgba(255,0,0,0.3)"
                : filter.id === "saturate"
                ? "rgba(0,0,255,0.2)"
                : filter.id === "contrast"
                ? "rgba(255,255,255,0.3)"
                : filter.id === "brightness"
                ? "rgba(255,255,255,0.4)"
                : filter.id === "hue"
                ? "rgba(128,0,128,0.3)"
                : filter.id === "amaro"
                ? "rgba(255,218,185,0.4)"
                : filter.id === "clarendon"
                ? "rgba(0,0,139,0.3)"
                : filter.id === "dogpatch"
                ? "rgba(160,82,45,0.3)"
                : filter.id === "gingham"
                ? "rgba(230,230,250,0.4)"
                : "transparent",

            borderRadius: _itemSize / 2,
          }}
        />
      )}
    </Animated.View>
  );
}

function FilterScreen() {
  const route = useRoute<FilterScreenRouteProp>();
  const { imageUri } = route.params;

  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = clamp(
      e.contentOffset.x / _itemTotalSize,
      0,
      allFilters.length - 1
    );
    const newActiveIndex = Math.round(scrollX.value);

    if (activeIndex !== newActiveIndex) {
      runOnJS(setActiveIndex)(newActiveIndex);
    }
  });

  const activeFilter = allFilters[activeIndex];

  const getFilterOverlayColor = () => {
    if (activeFilter.id === "original") return "transparent";
    if (activeFilter.id === "grayscale") return "rgba(0,0,0,0.5)";
    if (activeFilter.id === "sepia") return "rgba(255,235,205,0.5)";
    if (activeFilter.id === "negative") return "rgba(255,0,0,0.3)";
    if (activeFilter.id === "saturate") return "rgba(0,0,255,0.2)";
    if (activeFilter.id === "contrast") return "rgba(255,255,255,0.3)";
    if (activeFilter.id === "brightness") return "rgba(255,255,255,0.4)";
    if (activeFilter.id === "hue") return "rgba(128,0,128,0.3)";
    if (activeFilter.id === "amaro") return "rgba(255,218,185,0.4)";
    if (activeFilter.id === "clarendon") return "rgba(0,0,139,0.3)";
    if (activeFilter.id === "dogpatch") return "rgba(160,82,45,0.3)";
    if (activeFilter.id === "gingham") return "rgba(230,230,250,0.4)";
    return "transparent";
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={[StyleSheet.absoluteFillObject]}>
        <Animated.Image
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          source={{ uri: imageUri }}
          style={{ flex: 1 }}
        />
        {/* Add a colored overlay to simulate filter effect */}
        {activeFilter.id !== "original" && (
          <View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: getFilterOverlayColor() },
            ]}
          />
        )}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",

          marginBottom: 20,
        }}
      >
        <Animated.Text
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          style={{
            color: "black",
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "center",
            borderColor: "black",
            shadowColor: "black",
            borderWidth: 1,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 1,
            shadowRadius: 0,
            backgroundColor: "#FFF2D9",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          {allFilters[activeIndex].name}
        </Animated.Text>
      </View>

      <Animated.FlatList
        style={{ flexGrow: 0, height: _itemSize * 2 }}
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _itemSize) / 2,
        }}
        data={allFilters}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <FilterItem
              filter={item}
              index={index}
              scrollX={scrollX}
              originalImageUri={imageUri}
            />
          );
        }}
        snapToInterval={_itemTotalSize}
        horizontal
        onScroll={onScroll}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default FilterScreen;
