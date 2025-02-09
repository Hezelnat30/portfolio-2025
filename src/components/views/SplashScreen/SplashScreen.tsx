import { cn } from "@/utils/cn";
import logoTransparent from "@public/images/general/2.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import useSplashScreen from "./useSplashScreen";

const SplashScreen = () => {
  const { isAnimating } = useSplashScreen();

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
    delay: 1,
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
      className="w-screen min-h-screen bg-[#F6F1EA] fixed inset-0 flex justify-center items-center z-50 overflow-hidden"
    >
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        transition={logoTransition}
        className={cn(
          "w-64 h-64 rounded-full flex justify-center items-center overflow-hidden bg-primary-pink"
        )}
      >
        <Image
          src={logoTransparent}
          alt="logo"
          width={200}
          height={200}
          className="object-cover object-center scale-125 w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
