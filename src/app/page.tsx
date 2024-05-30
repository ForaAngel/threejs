"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import AnimatedBox from "./metaverse/AnimatedBox";

const TexturedShapes = () => {
  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
export default function Page() {
  return (
    <div className="container">
      <Canvas camera={{ fov: 75 }}>
        <Stats />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 5, 5]} />
        <axesHelper position={[0, 0, 0]} args={[2]} />
        <gridHelper args={[10, 10]} />
        <OrbitControls />
        <TexturedShapes />
      </Canvas>
    </div>
  );
}
