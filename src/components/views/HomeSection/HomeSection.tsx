import useScreenSize from "@/hooks/useScreenSize";
import { cn } from "@/utils/cn";
import pic1 from "@public/images/illustrations/justin1.png";
import pic2 from "@public/images/illustrations/justin2.png";
import pic3 from "@public/images/illustrations/justin3.png";
import { Londrina_Solid } from "next/font/google";
import Image from "next/image";

const londrina = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
});

const HomeSection = () => {
  const { width } = useScreenSize();

  const getImageSize = () => {
    if (width < 1024) return 150;
    return 275;
  };

  const imageSize = getImageSize();
  return (
    <section className="w-full h-screen">
      <div className="py-24 h-full max-w-sm lg:max-w-3xl mx-auto">
        <div className="relative w-full">
          <h1
            className={cn(
              "text-center uppercase text-8xl md:text-[13rem] tracking-tight lg:tracking-[-0.03em] leading-[0.74]",
              londrina.className
            )}
          >
            Justine Hezekiel
          </h1>
          <div className="absolute -bottom-1/2 translate-y-1/2 md:translate-y-1/3 lg:left-14 w-fit hover:z-20 hover:scale-105 transition-all ease-in-out">
            <Image
              key={imageSize}
              src={pic2}
              alt="justin-2"
              width={imageSize}
              height={325}
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="w-fit absolute -bottom-1/2 translate-y-3/4 lg:translate-y-1/2 left-1/2 -translate-x-1/2 z-10 hover:z-20 hover:scale-105 transition-all ease-in-out">
            <Image
              key={imageSize}
              src={pic1}
              alt="justin-1"
              width={imageSize}
              height={325}
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="absolute right-0 lg:right-14 -bottom-1/2 translate-y-1/2 md:-bottom-[30%] md:translate-y-1/2 w-fit hover:z-20 hover:scale-105 transition-all ease-in-out">
            <Image
              key={imageSize}
              src={pic3}
              alt="justin-3"
              width={imageSize}
              height={325}
              className="object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
