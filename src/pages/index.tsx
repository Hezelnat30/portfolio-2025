import PageHead from "@/components/commons/PageHead";
import LandingPage from "@/components/views/LandingPage";
import SplashScreen from "@/components/views/SplashScreen";
import { cn } from "@/utils/cn";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={cn(inter.className, "min-h-screen w-full bg-primary-white")}
    >
      <PageHead />
      <SplashScreen />
      <LandingPage />
    </main>
  );
}
