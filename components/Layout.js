import React from "react";
import Head from "next/head";
import TopNavbar from "./TopNavbar";
import Header from "./Header";
import Footer from "./Footer";

import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Minus B2B</title>
        <meta content="upgrade-insecure-requests" />
        <meta name="description" content="Minus B2B" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopNavbar pageName={router.pathname} />
        <Header pageName={router.pathname} />
        {children}
      </main>
      <Footer withMargin={router.pathname == "/products" ? true : false} />
    </div>
  );
}
