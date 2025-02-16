import { useEffect, useState } from "react";

const useSplashScreen = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [logoSize, setLogoSize] = useState({ width: 256, height: 256 });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { isAnimating, logoSize, setLogoSize };
};

export default useSplashScreen;
