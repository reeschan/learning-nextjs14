import Image from "next/image";

const HeroMobile = () => {
  return (
    <Image
      src="/hero-mobile.png"
      width={560}
      height={620}
      className="block md:hidden"
      alt="Screenshots of the dashboard project showing desktop version"
    />
  );
};

export default HeroMobile;
