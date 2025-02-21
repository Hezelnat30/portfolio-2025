"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, memo } from "react";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
}

const RenderModel = memo(({ children }: RenderModelProps) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      performance={{ min: 0.5 }}
      gl={{
        antialias: true,
        powerPreference: "low-power",
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
});

RenderModel.displayName = "RenderModel";

export default RenderModel;
