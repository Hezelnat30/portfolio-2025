import pic1 from "@public/images/illustrations/justin1.png";
import pic2 from "@public/images/illustrations/justin2.png";
import pic3 from "@public/images/illustrations/justin3.png";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex relative w-3/4 justify-center gap-2 mx-auto">
        <Image
          src={pic2}
          alt="justin-2"
          width={400}
          height={300}
          className="object-cover absolute left-1/2 -translate-x-[90%]"
        />
        <Image
          src={pic1}
          alt="justin-1"
          width={400}
          height={300}
          className="object-cover absolute top-10 left-1/2 -translate-x-1/2 z-10"
        />
        <Image
          src={pic3}
          alt="justin-3"
          width={400}
          height={300}
          className="object-cover absolute right-1/2 translate-x-[90%]"
        />
      </div>
    </section>
  );
};

export default HomeSection;
