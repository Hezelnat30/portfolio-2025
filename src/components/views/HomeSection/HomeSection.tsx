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
console.log(londrina);

const HomeSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="py-24 h-full max-w-3xl mx-auto">
        <div className="relative w-full">
          <h1
            className={cn(
              "text-center uppercase text-6xl lg:text-[13rem] tracking-tight leading-[0.8]",
              londrina.className
            )}
          >
            Justine Hezekiel
          </h1>
          <div className="absolute -top-[13%] translate-y-full left-16 w-fit hover:z-20 hover:scale-105 transition-all ease-in-out">
            <Image
              src={pic2}
              alt="justin-2"
              width={250}
              height={300}
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="w-fit absolute top-[90%] left-1/2 -translate-x-1/2 z-10 hover:z-20 hover:scale-105 transition-all ease-in-out">
            <Image
              src={pic1}
              alt="justin-1"
              width={250}
              height={300}
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="absolute right-8 top-3/4 w-fit hover:z-20 hover:scale-105 transition-all ease-in-out">
            <Image
              src={pic3}
              alt="justin-3"
              width={300}
              height={300}
              className="object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
