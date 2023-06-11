import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y20ZWK8XJK"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y20ZWK8XJK');
        `}
      </Script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link
        rel="preload"
        as="script"
        href="https://www.googletagmanager.com/gtag/js?id=G-Y20ZWK8XJK"
      /> */}
      <title>Full-Stack Software Engineer - Sulav Giri</title>
      <link rel="canonical" href="https://sulavgiri.com.np" />
      <meta
        name="description"
        content="Sulav Giri is a software engineer from Nepal with expertise in web development using Node.js and React"
      />
      <meta property="og:site_name" content="Sulav Giri" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:image" content="/WebsiteBanner.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700&family=Prompt:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <body>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TQWNXH"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
