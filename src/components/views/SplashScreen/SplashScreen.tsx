import { cn } from "@/utils/cn";
import logoTransparent from "@public/images/general/2.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useSplashScreen from "./useSplashScreen";

const SplashScreen = () => {
  const { isAnimating, logoSize, setLogoSize } = useSplashScreen();

  useEffect(() => {
    if (!isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAnimating]);

  useEffect(() => {
    const updateLogoSize = () => {
      const vw = Math.min(window.innerWidth, window.innerHeight);
      const baseSize = Math.min(Math.max(vw * 0.4, 180), 300);
      setLogoSize({ width: baseSize, height: baseSize });
    };

    updateLogoSize();

    window.addEventListener("resize", updateLogoSize);
    return () => {
      window.removeEventListener("resize", updateLogoSize);
    };
  }, [setLogoSize]);

  const containerVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: isAnimating ? "-100%" : 0,
    },
  };

  const logoVariants = {
    initial: {
      scale: 0.1,
      transformPerspective: 1000,
    },
    animate: {
      scale: 1,
      transformPerspective: 1000,
    },
  };

  const containerTransition = {
    duration: 1,
    ease: "easeInOut",
    delay: 0.5,
  };

  const logoTransition = {
    duration: 0.5,
    ease: "easeOut",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={containerTransition}
      className="fixed inset-0 h-screen w-screen z-50 flex items-center justify-center bg-[#F6F1EA]"
    >
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        transition={logoTransition}
        style={{
          width: logoSize.width,
          height: logoSize.height,
        }}
        className={cn(
          "relative rounded-full flex justify-center items-center overflow-hidden bg-primary-pink"
        )}
      >
        <Image
          src={logoTransparent}
          alt="logo"
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center scale-125 p-4"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
