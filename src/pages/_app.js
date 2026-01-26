import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import defaultData from "@/data/defaultData.json";
import usePageGlobalStore from "@/store/usePageGlobalStore";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const seo =
    pageProps?.pageData?.profile?.seo?.profile?.seo ||
    defaultData?.profile?.seo;
  const { pageData } = pageProps;

  const setPageData = usePageGlobalStore((state) => state.setPageData);

  useEffect(() => {
    if (
      pageData &&
      pageData?.experience?.length > 0 &&
      pageData?.projects?.length > 0 &&
      pageData?.profile
    ) {
      setPageData(pageData);
    }
  }, [pageData, setPageData]);

  return (
    <>
      <Head>
        <title>{seo?.metaTitle}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={seo.keywords.join(", ")} />
        <meta name="description" content={seo?.metaDescription} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="canonical" href={seo?.canonicalUrl} />

        <meta property="og:title" content={seo?.ogTitle} />
        <meta property="og:description" content={seo?.ogDescription} />
        <meta property="og:site_name" content="Sulav Giri" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content="/WebsiteBanner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content={seo?.twitterCard} />
        <meta name="theme-color" content="#1f1f1f" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
