import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Torus = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!mesh || !mesh.current) return;

    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
export default Torus;
