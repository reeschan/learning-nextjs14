import Image from "next/image";

const HeroDesktop = () => {
  return (
    <Image
      src="/hero-desktop.png"
      width={1000}
      height={760}
      className="hidden md:block"
      alt="Screenshots of the dashboard project showing desktop version"
    />
  );
};

export default HeroDesktop;
