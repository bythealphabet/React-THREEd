import React from "react";
import { useFrame } from "@react-three/fiber";
function Scene() {
  useFrame((state, delta) => {
    console.log("state", state);
    console.log("delta", delta);
  });
  return <mesh></mesh>;
}
export default Scene;
