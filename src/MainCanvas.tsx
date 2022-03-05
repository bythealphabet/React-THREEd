import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./models/box/box";
import Scene from "./models/sceneModel";

const lightPosition = { x: 10, y: 10, z: 10 };

const MainCanvas = () => {
  const { x, y, z } = lightPosition;

  return (
    <div className="webgl-box">
      <Canvas>
        <Scene />
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight />
        <pointLight position={[x, y, z]} />
        <Box position={[0, 0, 2]} />
      </Canvas>
    </div>
  );
};

export default MainCanvas;
