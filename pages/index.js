import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import IntegrationBanner from "../components/integrationBanner";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import WhyContactWise from "../components/WhyContactWise";
import Button from "@mui/material/Button";
import { display } from "@mui/system";
import VerticalTabs from "../components/verticalTabs";
import HorizontalTab from "../components/horizontalTab";
import HeroBanner from "../components/HeroBanner";
import SuccessFullBanner from "../components/Successfull";



export default function Home() {
  return (
    <div >
      <Head>
        <title>ContactWise</title>
        <meta name="description" content="Cloud contact center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <HeroBanner/>
     

     
        <main>
         

          <IntegrationBanner />
          <WhyContactWise />
          <SuccessFullBanner/>
          {/* <VerticalTabs /> */}
          {/* <HorizontalTab/> */}
        </main>
      
    </div>
  );
}
