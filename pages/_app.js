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
    const init = async () => {
      const localData = auth?.getUserLocal();
      if (localData) {
        auth?.setUser(localData?.customer);
      } else {
        router.push("/connexion");
      }
    };

    init();
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
