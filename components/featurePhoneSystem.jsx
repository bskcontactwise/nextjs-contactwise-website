import React from "react";
import Data from "../content/featuresData";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { red, white, blue, purple, grey } from "@mui/material/colors";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const featurePhoneSystem = () => {
  return (
    <>
      <Box id="phonesystem" sx={{ bgcolor: grey[100], p: 5, pt:5 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                  Phone System
                </Typography>
                <Typography variant="subtitle1">
                  Be a global brand from a single location and ensure your customers receive the same personal touch of
                  a local partner.
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  {Data.phonesystem.map((info) => {
                    let isshown = info.more;
                    let str = info.description;

                    return (
                      <>
                        <Grid item key={info.id} xs={12} md={6} lg={6}>
                          <div data-aos="fade-up">
                            <FeatureCard info={info} str={str} isshown={isshown} />
                            {/* <Card elevation={0} sx={{ p: 0.5, bgcolor: "transparent" }}>
                                <Avatar
                                  sx={{ bgcolor: `${info.color}`, width: 50, height: 50, ml: 2 }}
                                  aria-label="recipe"
                                  variant="rounded"
                                >
                                  {info.icon}
                                </Avatar>
                                <CardHeader title={info.title}>
                                  <h5 className="card-title fw-bold">{info.title}</h5>
                                </CardHeader>
                                <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                    {str.length < 100 ? info.description : info.description.substring(0, 70) + `...`}
                                  </Typography>
                                  <Typography variant="body2" color="primary" mt={1} className={isshown ? "" : "d-none"}>
                                    <Link href={info.url}>
                                      <a>
                                        Read more from {info.title}
                                        <i className=" ms-2 fw-bold bi bi-arrow-right"></i>
                                      </a>
                                    </Link>
                                  </Typography>
                                </CardContent>
                               
                              </Card> */}
                          </div>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default featurePhoneSystem;
