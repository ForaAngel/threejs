import React from "react";
import type * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";

const AnimatedBox = () => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  useFrame(() => {
    console.log("frame");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });
  return (
    <mesh scale={[1, 1, 1]} ref={meshRef}>
      <boxGeometry attach={"geometry"} />
      <meshStandardMaterial />
    </mesh>
  );
};
export default AnimatedBox;
