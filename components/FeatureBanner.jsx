import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function FeatureBanner() {
  return (
    <>
      <Box sx={{ mx: "auto", width: 850, height: 500 }} style={{ height: "500px" }}>
        <section className="center direction">
          <Typography variant="h3" gutterBottom>
            Advance Features set for optimization
          </Typography>
          <Typography   variant="body1" gutterBottom  sx={{mb:5}}>The best cloud contact center solution</Typography>
          <Button variant="outlined" gutterBottom>Try it for Free</Button>
        </section>
      </Box>
    </>
  );
}

export default FeatureBanner;
