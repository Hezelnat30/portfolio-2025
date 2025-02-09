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
    <Canvas className={cn("w-screen h-screen relative -z-10", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
