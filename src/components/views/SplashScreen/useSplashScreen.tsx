import { useEffect, useState } from "react";

const useSplashScreen = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { isAnimating };
};

export default useSplashScreen;
