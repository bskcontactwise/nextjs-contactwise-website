import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { red, white, blue, purple, grey } from "@mui/material/colors";
import { StayPrimaryLandscape } from "@mui/icons-material";

const TryBlock = () => {
  return (
    <>
      <Container disableGutters maxWidth="false" >
        <Container maxWidth="sm" sx={{ py: 5 }}>
          <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="center">
            <Typography component="h1" variant="h3" align="center" color="text.primary" fontWeight="600">
              Provide the best customer service.
            </Typography>
            <Typography variant="h6" align="center" color="text.primary" fontWeight="bold">
              Try ContactWise for free
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
              <Button variant="contained" size="large">
                Try Free Trail
              </Button>
            </Stack>

            <Typography variant="subtitle2" align="center" color="text.primary" paragraph>
              No credit card required. No software to download.
            </Typography>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default TryBlock;
