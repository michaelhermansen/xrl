import Jumbo from "@components/Jumbo";
import UserLinks from "@components/UserLinks";
import { useState, useEffect } from "react";
import getUserID from "@utils/getUserID";
import Footer from "@components/Footer";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const [links, setLinks] = useState(null);

  const getLinks = async () => {
    const res = await fetch(`/api/links/${getUserID()}`);
    const data = await res.json();
    setLinks(data.links.reverse());
  };

  useEffect(() => {
    getLinks();
    const updateLinks = () => {
      if (document.visibilityState === "visible") getLinks();
    };
    document.addEventListener("visibilitychange", updateLinks);

    return () => document.removeEventListener("visibilitychange", getLinks);
  }, []);

  return (
    <>
      <Head>
        <title>xrl.no – Lag korte og elegante linker</title>
        <meta name="description" content="Lag og del forkortede URL-er." />
        <meta name="author" content="Michael Hermansen" />
        <meta
          name="google-site-verification"
          content="nf1LBHN88IMILC9uIM8jnfMiaYVwqz9-c6PYPXnizZo"
        />

        {/* favicon-config */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8f8fff" />
        <meta name="msapplication-TileColor" content="#8f8fff" />
        <meta name="theme-color" content="#8f8fff"></meta>

        {/* polyfill for 'scrollBehavior: smooth' */}
        <Script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        ></Script>
      </Head>
      <Jumbo getLinks={getLinks} />
      <div style={{ backgroundColor: "var(--color-dark)" }}>
        <UserLinks links={links} getLinks={getLinks} />
        <Footer />
      </div>
    </>
  );
}
