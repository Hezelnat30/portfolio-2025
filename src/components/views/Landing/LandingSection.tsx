import bg from "@public/background/background.png";
import Image from "next/image";
import JustinModel from "./JustinModel";
import Navigation from "./Navigation";
import RenderModel from "./RenderModel";

const LandingSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden md:overflow-x-visible">
      <Image
        src={bg}
        alt="background"
        fill
        className="z-10 w-full h-full object-cover object-center"
      />
      <div className="w-full z-20 h-screen flex justify-center items-center">
        <Navigation />
        <RenderModel>
          <JustinModel />
        </RenderModel>
      </div>
    </section>
  );
};

export default LandingSection;
