import React from "react";
import { Canvas } from "@react-three/fiber";

interface CanvasProps {
  children: JSX.Element[] | JSX.Element;
  lightPosition: { x: number; y: number; z: number };
}

const webGlCanvas = ({ children, lightPosition }: CanvasProps) => {
  const { x, y, z } = lightPosition;
  return (
    <div className="webgl-box">
      <Canvas>
        <ambientLight />
        <pointLight position={[x, y, z]} />
        {children}
      </Canvas>
    </div>
  );
};

export default webGlCanvas;
