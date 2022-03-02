import React from "react";
import WebGlCanvas from "./models";
import Box from "./models/box/box";
import Sphere from "./models/sphere/sphere";

function MainCanvas() {
  return (
    <WebGlCanvas lightPosition={{ x: 10, y: 10, z: 10 }}>
      <Box position={[-6, -3, -10.3]} />
      <Box position={[1.2, 0, 0]} />
      <Sphere position={[20, 1, -20]} />
    </WebGlCanvas>
  );
}
export default MainCanvas;
