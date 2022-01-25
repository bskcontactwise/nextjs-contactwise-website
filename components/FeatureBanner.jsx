import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function FeatureBanner() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          width: "100vw",
          bgcolor: "#265454",
        }}
      >
        <section className="center direction">
          <Typography variant="h3" gutterBottom>
            Advance Features set for optimization
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 5 }}>
            The best cloud contact center solution
          </Typography>
          <Button variant="outlined" gutterBottom>
            Try it for Free
          </Button>
        </section>
      </Box>
    </>
  );
}

export default FeatureBanner;
