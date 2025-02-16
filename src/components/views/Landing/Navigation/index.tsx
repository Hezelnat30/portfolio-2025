"use client";

import { NavigationList } from "@/constant/data";
import { useEffect, useState } from "react";
import NavigationButton from "./NavigationButton";

export default function Navigation() {
  const [radius, setRadius] = useState("calc(24vw - 1.4rem)"); // Default value
  const incrementAngle = 360 / NavigationList.length;

  useEffect(() => {
    const calculateRadius = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        return "calc(10vw - 20rem)";
      } else if (width <= 1024) {
        return "calc(22vw - 1rem)";
      } else {
        return "calc(24vw - 1.4rem)";
      }
    };

    // Set initial radius
    setRadius(calculateRadius());

    // Add resize listener
    const handleResize = () => {
      setRadius(calculateRadius());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute h-screen flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-max">
      <div className="w-max flex items-center justify-center relative animate-spin-slow hover:pause group">
        {NavigationList.map(({ label, link, icon, newTab }, i) => {
          const angle = (i * incrementAngle * Math.PI) / 180;
          const x = `calc(${radius} * ${Math.cos(angle)})`;
          const y = `calc(${radius} * ${Math.sin(angle)})`;

          return (
            <NavigationButton
              icon={icon}
              key={label}
              label={label}
              link={link}
              newTab={newTab}
              x={x}
              y={y}
            />
          );
        })}
      </div>
    </div>
  );
}
