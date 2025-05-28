declare module '*.mov' {
  const src: string;
  export default src;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": any;
  }
}
