"use client";
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
import Lights from "./metaverse/Lights";
import Ground from "./metaverse/Ground";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { ArbolModel } from "./metaverse/Arbol";

const Avatar = () => {
  const model = useLoader(GLTFLoader, "./models/avatarmet.glb");
  model.scene.traverse((object) => {
    if (object.isObject3D) {
      object.castShadow = true;
    }
  });
  return <primitive object={model.scene} />;
};

export default function Page() {
  return (
    <div className="container">
      <Canvas shadows>
        <Stats />
        <axesHelper position={[0, 0, 0]} args={[2]} />
        <gridHelper args={[10, 10]} />
        <OrbitControls />
        {/* <TexturedShapes /> */}
        <ArbolModel />
        {/* <Avatar /> */}
        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
}
