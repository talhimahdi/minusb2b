import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { AuthProvider } from "../RestHelper/useAuth";
import { useAuth } from "../RestHelper/useAuth";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    console.log("useEffect called");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(
  //   () => async () => {
  //     console.log("useEffect _app");
  //     const localData = auth?.getUserLocal();
  //     if (localData) {
  //       auth?.setUser(localData?.customer);
  //     } else {
  //       console.log("useEffect else _app");
  //       router.push("/connexion");
  //     }
  //   },
  //   []
  // );

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
