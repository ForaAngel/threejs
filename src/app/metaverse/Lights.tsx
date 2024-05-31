import React from "react";

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[0, 10, 10]}
        castShadow
        shadow-mapSize-width={1000}
        shadow-mapSize-height={1000}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <hemisphereLight args={["#7cdbe6", "5e9c49", 0.7]} />
    </>
  );
};

export default Lights;
