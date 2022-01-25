import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import { red, white, blue, purple, grey } from "@mui/material/colors";

const PricingBanner = () => {
  return (
    <>
      <Container disableGutters maxWidth="false" sx={{ bgcolor: blue[50], py: 5, mb:5 }}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sx={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                }}
              >
                <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="center">
                  <Typography component="h1" variant="h3" align="center" color="text.primary" fontWeight="bold">
                    Choose a Cloud Telephony Solution pricing plan to suit you
                  </Typography>
                  <Typography variant="h6" align="center" color="text.secondary">
                    Try any plan for free for 15 days.
                  </Typography>
                  <Typography variant="subtitle2" align="center" color="text.secondary" paragraph>
                    No credit card required. No software to download.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default PricingBanner;
