"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Material, Mesh } from "three";

type GLTFResult = {
  nodes: {
    "3": Mesh;
    Sphere001: Mesh;
    Sphere001_1: Mesh;
    kacamta: Mesh;
    BézierCurve: Mesh;
  };
  materials: {
    PaletteMaterial001: Material;
    PaletteMaterial002: Material;
    PaletteMaterial003: Material;
    PaletteMaterial004: Material;
  };
};

type ModelProps = {
  [key: string]: unknown;
};

export default function JustinModel(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/model/justin3d-transformed.glb"
  ) as unknown as GLTFResult;

  const modelRef = useRef<Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        0.2 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const { width } = useScreenSize();

  const getModelSize = (): [number, number, number] => {
    if (width < 1024) return [1.2, 1.2, 1.2];
    return [1.5, 1.5, 1.5];
  };

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, 2, 1]}
      scale={getModelSize()}
      rotation={[0.3, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3"].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.046, 0.766, 0.011]}
        rotation={[0, 0.02, 0]}
      />
      <group
        position={[-0.007, 0.768, 0.047]}
        rotation={[0, 0.02, 0]}
        scale={0.807}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials.PaletteMaterial003}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kacamta.geometry}
        material={materials.PaletteMaterial004}
        position={[-0.045, 0.77, 0.086]}
        rotation={[Math.PI / 2, 0, 3.121]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve.geometry}
        material={nodes.BézierCurve.material}
        position={[0.132, -0.778, 0.152]}
        rotation={[0, 0.02, 0]}
        scale={0.073}
      />
    </group>
  );
}
useGLTF.preload("/model/justin3d-transformed.glb");
