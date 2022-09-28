import React from "react";
import Head from "next/head";
import TopNavbar from "./TopNavbar";
import Header from "./Header";
import Footer from "./Footer";

import Script from "next/script";

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
        {router?.pathname == "/checkout" && (
          <Script
            id="payplug-js"
            src="https://api.payplug.com/js/1/form.latest.js"
          />
        )}
        <TopNavbar pageName={router.pathname} />
        <Header pageName={router.pathname} />
        {children}
      </main>
      <Footer
        pageName={router.pathname}
        withMargin={router.pathname == "/products" ? true : false}
      />
    </div>
  );
}
