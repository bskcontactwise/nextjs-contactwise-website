import React from "react";
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
        <Container maxWidth="sm">
          <Grid container>
            <Grid item xs={12} sx={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="center">
                  <Typography component="h1" variant="h3" align="center" color="text.primary" fontWeight="bold">
                    Advance Features set for optimization
                  </Typography>
                  <Typography variant="h6" align="center" color="text.secondary">
                    The best cloud contact center solution
                  </Typography>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button variant="contained" size="large">
                      Try Free Trail
                    </Button>
                  </Stack>
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

export default HeroBanner;
