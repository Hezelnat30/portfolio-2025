"use client";
import { cn } from "@/utils/cn";
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
      performance={{ min: 0.5 }}
      className={cn("w-screen h-screen relative -z-10", className)}
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
