"use client";
import React, { useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

type arbolType = {
  position: { x: number; z: number };
  box: number;
};

type props = {
  boundary: number;
  count: number;
};

const Arboles: React.FC<props> = ({ boundary, count }) => {
  const model = useLoader(GLTFLoader, "./models/arbol.glb");
  const [arboles, setaArboles] = useState<arbolType[]>([]);

  model.scene.traverse((object) => {
    if (object.isObject3D) {
      object.castShadow = true;
    }
  });

  const updatePosition = (arbolArray: arbolType[], _boundary: number) => {
    arbolArray.forEach((arbol, _index) => {
      arbol.position.x = Math.random() * 100;
      arbol.position.z = Math.random() * 100;
    });
    setaArboles(arbolArray);
  };

  useEffect(() => {
    const tempArboles: arbolType[] = [];
    for (let i = 0; i < count; i++) {
      tempArboles.push({ position: { x: 0, z: 0 }, box: 1 });
    }
    updatePosition(tempArboles, boundary);
  }, [boundary, count]);
  return (
    <group>
      {arboles.map((arbol, index) => {
        return (
          <object3D
            key={index}
            position={[arbol.position.x, 0, arbol.position.z]}
            scale={[5, 5, 5]}
          >
            <primitive object={model.scene.clone()} />
          </object3D>
        );
      })}
    </group>
  );
};

export default Arboles;
