import React from "react";
import styles from "../styles/integrationBanner.module.css";
import Image from "next/image";
import Hubspot from "../public/hubspot.svg";
import Pipedrive from "../public/pipedrive.svg";
import Zendesk from "../public/zendesk.svg";
import Zoho from "../public/zoho.svg";
import Freshwork from "../public/freshwork.svg";
import Microsoft from "../public/microsoft.svg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function IntegrationBanner() {
  return (
    <>
      <Container className="text-center bg-white">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">Easy integration with your favourite apps</Typography>

          <div className="logos-ticker logos-tickers-theme-dark">
            <div className="logos-ticker-container">
              <Microsoft />
              <Hubspot />
              <Pipedrive />
              <Zoho />
              <Zendesk />
              <Freshwork />
            </div>
            <div className="logos-ticker-container">
              <Microsoft />
              <Hubspot />
              <Pipedrive />
              <Zoho />
              <Zendesk />
              <Freshwork />
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default IntegrationBanner;
