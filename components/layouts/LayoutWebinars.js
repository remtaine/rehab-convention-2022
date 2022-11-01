import React from "react";
import WebinarCloud from "../WebinarCloud";
import LayoutBasic from "./LayoutBasic";
import Image from "next/image";

function LayoutWebinars(props) {
  return (
    <LayoutBasic>
      {props.children}
      <WebinarCloud />
    </LayoutBasic>
  );
}

export default LayoutWebinars;
