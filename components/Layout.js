import React from "react";
import Head from "next/head";
import TopNavbar from "./TopNavbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  console.log(children?.type);
  console.log(children);

  if (children?.type?.name != "o") {
    return (
      <div>
        <Head>
          <title>Minus B2B</title>
          <meta content="upgrade-insecure-requests" />
          <meta name="description" content="Minus B2B" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <TopNavbar pageName={children?.type?.name} />
          <Header pageName={children?.type?.name} />
          {children}
        </main>
        <Footer
          withMargin={children?.type?.name == "Products" ? true : false}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
