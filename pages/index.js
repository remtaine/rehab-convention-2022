import Image from "next/image";
// import FrontImage from "../components/FrontImage";
import Navbar from "../components/Navbar";
import FrontImage from "/public/REHAB 2022/EDITED2_LANDING PAGE-REHAB 2022 copy copy-01-01.svg";

export default function Home() {
  const imageStyle = {
    // objectFit: "cover",
    width: "inherit",
    height: "inherit",
  };
  return (
    <div className="font-inter min-h-screen">
      {/* <Image
        src={frontImage}
        alt="road"
        layout="fill"
        objectFit="cover"
        quality={100}
      /> */}
      {/* <embed src={frontImage} /> */}
      <div className=" w-screen h-screen">
        <FrontImage style={imageStyle} />
      </div>
      <Navbar />
    </div>
  );
}
