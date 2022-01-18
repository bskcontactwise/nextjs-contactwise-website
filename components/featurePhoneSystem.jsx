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
import { red,white,blue, purple } from "@mui/material/colors";


const iconSize = 30;

const featurePhoneSystem = () => {
    return (
      <>
        <Box  sx={{ bgcolor: "primary.main", p:5 }}>
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{ p: 2 }}>
                                <Typography variant="h4" sx={{ color: "white" }} gutterBottom>Phone System</Typography>
                  <Typography variant="subtitle1" sx={{ color: "white" }}>
                    Be a global brand from a single location and ensure your customers receive the same personal touch
                    of a local partner.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={5}>
                    {Data.phonesystem.map((info) => {
                      let isshown = info.more;
                      let str = info.description;

                      return (
                        <>
                          <Grid item key={info.id} xs={12} md={6} lg={6}>
                            <div data-aos="fade-up" className="card h-100 border-0 bg-light">
                              <Card elevation={1} sx={{ p: 2, bgcolor:purple[500] }}>
                                <Avatar
                                  sx={{ bgcolor: `${info.color}`, width: 50, height: 50, ml:2 }}
                                  aria-label="recipe"
                                  variant="rounded"
                                >
                                  {info.icon}
                                </Avatar>
                                <CardHeader
                                //   avatar={
                                //     <Avatar
                                //       sx={{ bgcolor: `${info.color}`, width: 50, height: 50 }}
                                //       aria-label="recipe"
                                //       variant="rounded"
                                //     >
                                //       {info.icon}
                                //     </Avatar>
                                //   }
                                  title={info.title}
                                >
                                  <h5 className="card-title fw-bold">{info.title}</h5>
                                </CardHeader>
                                <CardContent height="140">
                                  <Typography variant="body2" color="text.secondary">
                                    {str.length < 100 ? info.description : info.description.substring(0, 80) + `...`}
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <p className={isshown ? "" : "d-none"}>
                                    {/* <Link className="text-decoration-none fw-bold" href={info.url}>
                                Read more from {info.title}
                                <i className=" ms-2 fw-bold bi bi-arrow-right"></i>
                              </Link> */}
                                  </p>
                                </CardActions>
                              </Card>
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
}

export default featurePhoneSystem
