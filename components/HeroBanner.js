
import React from 'react';
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";

const HeroBanner = () => {
    return (
      <>
        <Container disableGutters maxWidth="false">
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "95vh",
                   
                  }}
                >
                  <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="left">
                    <Typography component="h1" variant="h3" align="left" color="text.primary" fontWeight="bold">
                      Modern way to build your contact centre
                    </Typography>
                    <Typography variant="h6" align="left" color="text.secondary">
                      Empower your business to deliver amazing sales and customer service
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="left">
                      <Button variant="contained" size="large">
                        Try Free Trail
                      </Button>
                    </Stack>
                    <Typography variant="subtitle2" align="left" color="text.secondary" paragraph>
                      No credit card required. No software to download.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "95vh",
                   
                  }}
                >
                  <Image src="/banner.png" alt="Picture of the author" width={500} height={500} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </>
    );
};

export default HeroBanner;
