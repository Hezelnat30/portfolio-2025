import PageHead from "@/components/commons/PageHead";
import HomeSection from "@/components/views/HomeSection";
import LandingSection from "@/components/views/Landing";
import SplashScreen from "@/components/views/SplashScreen";
import { cn } from "@/utils/cn";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={cn(inter.className, "min-h-screen w-full bg-primary-pink")}
    >
      <PageHead />
      <SplashScreen />
      <LandingSection />
      <HomeSection />
    </main>
  );
}
