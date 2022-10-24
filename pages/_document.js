import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=optional"
          rel="stylesheet"
        />
        {/* <Script
          src="https://kit.fontawesome.com/33d6e1a458.js"
          crossOrigin="anonymous"
        ></Script> */}
      </Head>
      <body className="selection:bg-fem-600 selection:text-fem-700 font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
