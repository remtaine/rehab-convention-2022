import Image from "next/image";
import Navbar from "../components/Navbar";
import frontImage from "../public/frontImage/road.svg";

export default function Home() {
  return (
    <div className="font-inter">
      <Image
        src={frontImage}
        alt="road"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Navbar />
    </div>
  );
}
