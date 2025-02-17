"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
}

export default function RenderModel({ children, className }: RenderModelProps) {
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
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}

// Komponen fallback sederhana
function LoadingFallback() {
  return null;
}
