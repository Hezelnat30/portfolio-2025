import { navbarMenu } from "@/constants/navbarMenu.constant";
import useScreenSize from "@/hooks/useScreenSize";
import { cn } from "@/utils/cn";
import logo from "@public/images/general/logo2.svg";
import pic1 from "@public/images/illustrations/justin1.png";
import pic2 from "@public/images/illustrations/justin2.png";
import pic3 from "@public/images/illustrations/justin3.png";
import { Josefin_Sans, Londrina_Solid } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const londrina = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const HomeSection = () => {
  const { width } = useScreenSize();

  const [imageSize, setImageSize] = useState(150);

  useEffect(() => {
    setImageSize(width < 1024 ? 150 : 250);
  }, [width]);

  return (
    <>
      <header
        className={`absolute z-10 w-full p-4 flex items-center justify-between ${josefin.className}`}
      >
        <div className="rounded-full overflow-hidden bg-red-400 w-fit">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <nav>
          <ul className="flex gap-10">
            {navbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.to} className="font-bold">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="w-full h-screen">
        <div className="pt-32 h-full max-w-sm lg:max-w-3xl mx-auto">
          <div className="relative w-full">
            <h1
              className={cn(
                "text-center uppercase text-8xl md:text-[12rem] tracking-tight lg:tracking-[-0.03em] leading-[0.74]",
                londrina.className
              )}
            >
              Justine Hezekiel
            </h1>
            <div className="absolute -bottom-1/2 translate-y-1/2 md:translate-y-[28%] lg:left-20 w-fit hover:z-20 hover:scale-105 transition-all ease-in-out">
              <Image
                key={imageSize}
                src={pic2}
                alt="justin-2"
                width={imageSize}
                height={325}
                className="object-cover cursor-pointer"
              />
            </div>
            <div className="w-fit absolute -bottom-1/2 lg:-bottom-1/3 translate-y-3/4 lg:translate-y-[60%] left-1/2 -translate-x-1/2 z-10 hover:z-20 hover:scale-105 transition-all ease-in-out">
              <Image
                key={imageSize}
                src={pic1}
                alt="justin-1"
                width={imageSize}
                height={325}
                className="object-cover cursor-pointer"
              />
            </div>
            <div className="absolute right-0 md:right-20 -bottom-1/2 translate-y-1/2 md:-bottom-1/2 md:translate-y-1/4 w-fit hover:z-20 hover:scale-105 transition-all ease-in-out">
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
    </>
  );
};

export default HomeSection;
