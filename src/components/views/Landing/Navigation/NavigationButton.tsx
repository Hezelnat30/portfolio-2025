import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { IoIdCardOutline } from "react-icons/io5";

interface NavigationButtonProps {
  x: string;
  y: string;
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

function getIcon(icon: string) {
  const iconSize = "2.1rem";
  switch (icon) {
    case "tiktok":
      return <FaTiktok strokeWidth={2} style={{ fontSize: iconSize }} />;

    case "instagram":
      return <FaInstagram strokeWidth={2} style={{ fontSize: iconSize }} />;

    case "youtube":
      return <FiYoutube strokeWidth={2} style={{ fontSize: iconSize }} />;

    case "linkedin":
      return <FaLinkedin strokeWidth={2} style={{ fontSize: iconSize }} />;

    case "whatsapp":
      return <FaWhatsapp strokeWidth={2} style={{ fontSize: iconSize }} />;

    case "gmail":
      return <BiLogoGmail strokeWidth={2} style={{ fontSize: iconSize }} />;

    case "cv":
      return <IoIdCardOutline strokeWidth={2} style={{ fontSize: iconSize }} />;

    default:
      return <IoLogoGithub strokeWidth={2} style={{ fontSize: iconSize }} />;
  }
}

export default function NavigationButton({
  icon,
  label,
  link,
  newTab,
  x,
  y,
}: NavigationButtonProps) {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="rounded-full flex items-center justify-center bg-black/10 border border-slate-800/25 border-solid backdrop-blur-[8px] p-2 md:p-3 shadow-glass-inset hover:shadow-glass-sm transition-all"
        aria-label={label}
      >
        <span className="relative animate-spin-slow-reverse group-hover:pause  text-white hover:text-primary-gold">
          {getIcon(icon)}

          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden peer-hover:block px-2 py-1 bg-white text-white group-hover:text-black top-full left-1/2 -translate-x-1/2 text-sm rounded-md shadow-lg whitespace-nowrap mt-5">
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
}
