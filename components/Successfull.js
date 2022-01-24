import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import { red, white, blue, purple, grey, green } from "@mui/material/colors";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessFullBanner = () => {
  return (
    <>
      <Container disableGutters maxWidth="false" sx={{ bgcolor: grey[50], py: 5 }}>
        <Container>
          <Stack sx={{ pt: 4, pl: 5 }} direction="column" spacing={2} justifyContent="Center">
            <Typography component="h1" variant="h3" align="center" color="text.primary" fontWeight="bold">
              Everything you need to be successful
            </Typography>
          </Stack>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60vh",
                }}
              >
                <Image src="/Successfull.svg" alt="Picture of the author" width={500} height={500} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60vh",
                }}
              >
                <Stack sx={{ pt: 4, pl: 5 }} direction="column" spacing={2} justifyContent="left">
                  <Stack sx={{ pt: 4, pl: 5 }} direction="row" spacing={2} justifyContent="left">
                    <CheckCircleIcon style={{ fontSize: 30, color: green[500] }} />
                    <Typography variant="body1" align="left" color="text.primary" fontWeight="bold">
                      Support Voice, SMS and WhatsApp on a single platform
                    </Typography>
                  </Stack>
                  
                  <Stack sx={{ pt: 4, pl: 5 }} direction="row" spacing={2} justifyContent="left">
                    <CheckCircleIcon style={{ fontSize: 30, color: green[500] }} />
                    <Typography variant="body1" align="left" color="text.primary" fontWeight="bold">
                      Easily create intelligent workflows using drag and drop designer
                    </Typography>
                  </Stack>
                  <Stack sx={{ pt: 4, pl: 5 }} direction="row" spacing={2} justifyContent="left">
                    <CheckCircleIcon style={{ fontSize: 30, color: green[500] }} />
                    <Typography variant="body1" align="left" color="text.primary" fontWeight="bold">
                      Integrate with Salesforce, MS Dynamics 365, Zendesk or any of your favourite apps using in-built
                      connectors
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default SuccessFullBanner;
