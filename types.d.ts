declare module "gl-react" {
  import * as React from "react";

  export interface ShaderProps {
    children?: React.ReactNode;
  }

  export class Node extends React.Component<any> {}

  export const GLSL: (strings: TemplateStringsArray, ...values: any[]) => any;

  export const Shaders: {
    create: (obj: Record<string, any>) => any;
  };
}

declare module "gl-react-expo" {
  import * as React from "react";

  export interface SurfaceProps {
    style?: React.CSSProperties;
    width?: number;
    height?: number;
    children?: React.ReactNode;
  }

  export class Surface extends React.Component<SurfaceProps> {}
}

declare module "react-native-gl-image-filters" {
  import * as React from "react";

  interface ImageFiltersProps {
    width: number;
    height: number;
    children: any;
    brightness?: number;
    contrast?: number;
    saturation?: number;
    hue?: number;
    sepia?: number;
    sharpen?: number;
    negative?: number;
    temperature?: number;
    exposure?: number;
    blur?: number;
  }

  export default class ImageFilters extends React.Component<ImageFiltersProps> {}
}
