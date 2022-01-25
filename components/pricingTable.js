import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import tiers from "./PricingDataNew";
import Switch from "@mui/material/Switch";

function PricingTable() {
     const [switchChat, setswitchChat] = useState(false);
  
    const ToggleChat = () => {
      switchChat ? setswitchChat(false) : setswitchChat(true);
    };

  return (
    <>
      <h6>Pricing Table</h6>

      <Container maxWidth="lg" component="main">
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "2vh",
            py: 4,
            mb: 3,
          }}
        >
          <label className="mx-3">Monthly</label>
          <Switch onClick={ToggleChat} checked={switchChat} />
          <label className="mx-3 position-relative">Yearly</label>
          <span className="pricingtooltip"> Save 2 Months Cost</span>
        </Box>
        <Grid container spacing={1} alignItems="flex-start">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={3}
              sx={{ border: (theme) => `1px solid ${theme.palette.divider}` }}
            >
              <Card
                sx={{
                  height: "1000px",
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Premium" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700],
                    height: "100px",
                  }}
                />
                <CardContent>
                  <Box sx={{ height: "200px" }}>
                    {tier.price === "Customized Solutions" ? (
                      <Typography component="h6" variant="h6" align="center" color="text.primary">
                        {tier.price}
                      </Typography>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                      >
                        <Typography component="h2" variant="h3" color="text.primary">
                          {switchChat ? `${tier.priceannual}` : `${tier.price}`}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /mo
                        </Typography>
                      </Box>
                    )}

                    <Typography variant="body1" align="center" color="text.secondary">
                      {switchChat ? `${tier.userannual}` : `${tier.user}`}
                    </Typography>
                    <Button fullWidth variant={tier.buttonVariant}>
                      {tier.buttonText}
                    </Button>
                    <Typography variant="body1" align="center" color="text.secondary">
                      {tier.size}
                    </Typography>
                  </Box>
                  <hr />
                  <Box sx={{ height: "50px" }}>
                    <Typography variant="body1" align="center" color="text.secondary">
                      {tier.package}
                    </Typography>
                  </Box>
                  <Box sx={{ height: "520px" }}>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="start" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PricingTable;
