import React from "react";
import Head from "next/head";
import TopNavbar from "./TopNavbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Minus B2B</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="description" content="Minus B2B" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopNavbar />
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
}
