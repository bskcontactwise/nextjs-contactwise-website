import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PricingBanner from "../components/PricingBanner";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";

import data from "../components/pricingData";
import PricingTable from "../components/pricingTable";

function Pricing() {
  const [switchChat, setswitchChat] = useState(true);
  const [text, settext] = useState({ free: "$0", stnd: "$20", pre: "$40", user: "Per user/Month billed annually" });
  const ToggleChat = () => {
    switchChat ? setswitchChat(false) : setswitchChat(true);
    switchChat
      ? settext({ free: "$0", stnd: "$25", pre: "$45", user: "Per user/Month" })
      : settext({ free: "$0", stnd: "$20", pre: "$40", user: "Per user/Month billed annually" });
  };

  return (
    <>
      <PricingBanner />
      <PricingTable />
      {/* <Container disableGutters maxWidth="false">
        <Container>
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

          <Grid container spacing={0.5}>
            <Grid item xs={12} md={3}>
              <Card >
                <div className="card-body text-center py-4">
                  <h5 className="card-title">Free</h5>

                  <p className="display-5  my-4  fw-bold">{text.free} </p>
                  <p className="text-muted pricingbox"> 1 Free User </p>
                  <a href="#" className="btn btn-primary   mb-3">
                    SIGNUP NOW
                  </a>
                  <p className="text-muted pricingbox"> For Startups</p>
                  <hr />

                  <p className="card-text pricing">
                    <p className="text-muted pricingbox"></p>
                    <ul className="list-unstyled text-start">
                      {data.free.map((feature) => {
                        return (
                          <>
                            <li className="my-2" key={feature.id}>
                              {feature.title}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card >
                <div className="card-body text-center py-4">
                  <h5 className="card-title">Standard</h5>

                  <p className="display-5  my-4  fw-bold">{text.stnd}</p>
                  <p className="text-muted pricingbox">{text.user} </p>
                  <a href="#" className="btn btn-primary   mb-3">
                    SIGNUP NOW
                  </a>
                  <p className="text-mutedpricingbox">Ideal For Small Team</p>
                  <hr />

                  <p className="card-text pricing">
                    <p className="text-muted pricingbox">Everything in Free +</p>
                    <ul className="list-unstyled text-start">
                      {data.standard.map((feature) => {
                        return (
                          <>
                            <li className="my-2" key={feature.id}>
                              {feature.title}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card>
                <div className="card-body text-center py-4 ">
                  <h5 className="card-title">Premium</h5>

                  <p className="display-5  my-4  fw-bold">{text.pre} </p>
                  <p className="text-muted pricingbox">{text.user} </p>
                  <a href="#" className="btn btn-primary   mb-3">
                    SIGNUP NOW
                  </a>
                  <p className="text-muted pricingbox">Preferred For SMB Sales, Support & Marketing Teams </p>

                  <hr />

                  <p className="card-text pricing">
                    <p className=" text-muted pricingbox">Everything in Standard +</p>
                    <ul className="list-unstyled text-start">
                      {data.premium.map((feature) => {
                        return (
                          <>
                            <li className="my-2" key={feature.id}>
                              {feature.title}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card >
                <div className="card-body text-center py-4">
                  <h5 className="card-title">Enterprises</h5>

                  <h4 className="  my-4 text-dark fw-bold">Customized Solutions </h4>
                  <p className=" text-muted pricingbox">Tailer-Made for you</p>
                  <a href="#" className="btn btn-primary   mb-3">
                    CONTACT US
                  </a>

                  <p className=" text-muted pricingbox">One-Stop Business Phone System For Enterprise Businesses </p>
                  <hr />

                  <p className="card-text pricing">
                    <p className=" text-muted pricingbox">Everything in Premium +</p>
                    <ul className="list-unstyled text-start">
                      {data.enterprises.map((feature) => {
                        return (
                          <>
                            <li className="my-2" key={feature.id}>
                              {feature.title}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </p>
                </div>
              </Card>
            </Grid>
          </Grid>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              height: "2vh",
              py: 4,
              mb: 3,
            }}
          >
            {" "}
            <Stack direction="column" spacing={1} justifyContent="center">
              <h3>Addons</h3>
              <ul>
                <li>Recording transcription</li>
                <li>Sentiment analysis</li>
              </ul>
            </Stack>
          </Box>
        </Container>
      </Container> */}
    </>
  );
}

export default Pricing;
