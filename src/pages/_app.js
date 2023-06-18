import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sulav Giri is a software engineer from Nepal with expertise in web development using Node.js and React"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta property="og:site_name" content="Sulav Giri" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content="/WebsiteBanner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
