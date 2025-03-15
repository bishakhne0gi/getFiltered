# React Native Image Filter App

A React Native application that allows users to take photos or select images from their gallery and apply various filters directly within the app, without relying on external APIs.

## Features

- Take photos using the device camera
- Select images from the gallery
- Apply 12 different filters to images:
  - Original
  - Grayscale (grayscale(1))
  - Sepia (sepia(1))
  - Blur (blur(2px))
  - Brightness (brightness(0.8))
  - Contrast (contrast(1.2))
  - Hue Rotate (hue-rotate(90deg))
  - Invert (invert(1))
  - Saturate (saturate(1.5))
  - Opacity (opacity(0.7))
  - Drop Shadow (drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5)))
  - Vintage (combination of filters)
- Save filtered images to the device gallery

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the app:
   ```
   npx expo start
   ```

## Dependencies

- React Native
- Expo
- React Navigation
- React Query
- Reanimated (for animations)

## How It Works

1. The app allows users to take a photo or select an image from their gallery
2. The selected image is displayed with the chosen filter applied
3. Users can select from 12 different filters
4. The filtered image can be saved to the device gallery

## Image Filtering Implementation

This app uses React Native's built-in capabilities to apply CSS-style filters to images:

1. **CSS-Style Filters**: We implement filters that mimic CSS filter properties like `grayscale()`, `sepia()`, `blur()`, etc.

2. **Native Properties**: We use React Native's `Image` component properties like `tintColor`, `opacity`, `blurRadius`, and shadow properties to create various filter effects.

3. **No External APIs**: All filtering is done directly within the app, so there's no need for internet connectivity or API keys.

4. **Performance**: Since we're using native properties, the filtering is fast and efficient.

## Filter Implementation Details

Each filter is implemented using React Native's native properties:

- **Grayscale**: Applied using the `grayscale` style property
- **Sepia**: Applied using the `sepia` style property
- **Blur**: Applied using the `blurRadius` property
- **Brightness**: Applied using the `brightness` style property
- **Contrast**: Applied using the `contrast` style property
- **Hue Rotate**: Applied using the `hueRotate` style property
- **Invert**: Applied using the `invert` style property
- **Saturate**: Applied using the `saturate` style property
- **Opacity**: Applied using the `opacity` property
- **Drop Shadow**: Applied using shadow properties (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`)
- **Vintage**: A combination of multiple filters for a vintage effect

## Extending the Filters

To add new filters, you can modify the `getFilterStyle` function in `api/imageFilters.ts`. Each filter is defined by a set of style properties that are applied to the image.

## License

MIT
