import Image from "next/image";
import Navbar from "../components/Navbar";
import frontImage from "../public/roadMockup.jpg";

export default function Home() {
  return (
    <div className="">
      <Image
        src={frontImage}
        alt="road"
        layout="fill"
        // objectFit="cover"
        quality={100}
      />
      <div className="flex items-center justify-end lg:justify-center z-50 fixed bottom-0 w-screen">
        <Navbar />
      </div>
    </div>
  );
}
