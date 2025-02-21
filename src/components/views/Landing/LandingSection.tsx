import dynamic from "next/dynamic";
import Image from "next/image";

const RenderModel = dynamic(() => import("./RenderModel"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-primary-pink" />,
});

const JustinModel = dynamic(() => import("./JustinModel"), {
  ssr: false,
});

const Navigation = dynamic(() => import("./Navigation"));

const LandingSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden md:overflow-x-visible">
      <Image
        src="/background/background.png"
        alt="background"
        fill
        priority
        sizes="100vw"
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
