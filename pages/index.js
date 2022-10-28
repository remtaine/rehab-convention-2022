import Image from "next/image";
import Head from "next/head";
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
    <div className="font-inter min-h-screen bg-[#72C4BB]">
      <Head>
        <title>22nd PGH Rehab Postgrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-screen h-screen">
        <FrontImage style={imageStyle} />
      </div>
      <Navbar isActivated={true} />
    </div>
  );
}
