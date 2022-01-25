import * as React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../components/theme";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NB78KQT" });
  }, []);

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 10,
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
