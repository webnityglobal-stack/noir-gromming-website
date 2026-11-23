
import React from "react";
import { Canvas } from "@react-three/fiber";

function SalonChair() {
  return (
    <group position={[0, 0, 0]}>

      {/* 1. Chair Backrest */}
      <mesh position={[0, 2.7, -0.55]}>
        <boxGeometry args={[1.5, 1.8, 0.3]} />
        <meshStandardMaterial color="#171717" roughness={0.35} />
      </mesh>

      {/* 2. Chair Seat */}
      <mesh position={[0, 1.75, 0]}>
        <boxGeometry args={[1.6, 0.3, 1.5]} />
        <meshStandardMaterial color="#202020" roughness={0.3} />
      </mesh>

      {/* 3. Left Armrest */}
      <mesh position={[-0.95, 2.05, 0]}>
        <boxGeometry args={[0.25, 0.2, 1.1]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* 4. Right Armrest */}
      <mesh position={[0.95, 2.05, 0]}>
        <boxGeometry args={[0.25, 0.2, 1.1]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* 5. Hydraulic Support */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 1.5, 32]} />
        <meshStandardMaterial
          color="#b8b8b8"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* 6. Round Base */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 48]} />
        <meshStandardMaterial
          color="#777777"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* 7. Footrest */}
      <mesh position={[0, 0.65, 1]}>
        <boxGeometry args={[1.1, 0.12, 0.3]} />
        <meshStandardMaterial color="#999999" metalness={0.8} />
      </mesh>

    </group>
  );
}

function ThreeLesson() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "#101010"
    }}>
      <Canvas camera={{ position: [5, 4, 7], fov: 45 }}>

        {/* Lighting */}
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
        />

        {/* Salon Chair */}
        <SalonChair />

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#252525" />
        </mesh>

      </Canvas>
    </div>
  );
}

export default ThreeLesson;
