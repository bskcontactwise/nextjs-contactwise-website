import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red, green, yellow, pink, purple, blue, teal, lightblue, orange } from "@mui/material/colors";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LanguageIcon from "@mui/icons-material/Language";
import TransformIcon from "@mui/icons-material/Transform";
import BoltIcon from "@mui/icons-material/Bolt";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CableIcon from "@mui/icons-material/Cable";
import RocketIcon from "@mui/icons-material/Rocket";
import HandymanIcon from "@mui/icons-material/Handyman";
const iconSize = 30;

const Data = [
  {
    title: "Easy to build and Customize",
    description: "Bring your Vision to life. easily create, change or extend interactions - with work flow designer",
    img: <HandymanIcon style={{ fontSize: iconSize, color: blue[900] }} />,
    alt: "easy",
    color: blue[200],
  },
  {
    title: "Deploy in days or weeks",
    description: "Build and deploy in a fast and reliable network that scales with your business",
    img: <RocketIcon style={{ fontSize: iconSize, color: purple[900] }} />,
    alt: "Deploy",
    color: purple[200],
  },
  {
    title: "Integrations",
    description:
      "Connect with cloud services like SalesForce, ZenDesk, Microsoft Dynamics 365 using inbuilt connectors",
    img: <CableIcon style={{ fontSize: iconSize, color: pink[900] }} />,
    alt: "integration",
    color: pink[200],
  },
  {
    title: "Zero maintenance",
    description: "99.99% uptime.No updates or patches to run",
    img: <AccessibilityNewIcon style={{ fontSize: iconSize, color: orange[900] }} />,
    alt: "zero",
    color: orange[200],
  },
  {
    title: "Power by Microsoft Azure",
    description: "Built to scale - on the same network as Samsung, BNW, Vodafone and TeleFonica",
    img: <BoltIcon style={{ fontSize: iconSize, color: green[900] }} />,
    alt: "azure",
    color: green[200],
  },
];

const WhyContactWise = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container disableGutters maxWidth="false">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sx={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 5,
                }}
              >
                <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="center">
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    Why choose ContactWise?
                  </Typography>
                  <Grid container spacing={5} justifyContent="center">
                    {Data.map((info) => {
                      return (
                        <>
                          <Grid item xs={12} sx={3} md={4}>
                            <Card
                              elevation={0}
                              sx={{
                                p: 2,
                                bgcolor: "transparent",
                                textalign: "center",

                                "&:hover": {
                                  boxShadow: 1,
                                },
                              }}
                            >
                              {" "}
                              <Avatar
                                sx={{ bgcolor: `${info.color}`, width: 60, height: 60, mx: "auto" }}
                                aria-label="recipe"
                                variant="rounded"
                                align="center"
                                justifyContent="center"
                                display="flex"
                              >
                                {info.img}
                              </Avatar>
                              {/* <CardMedia component="img" alt={info.alt} height="140" image={info.img} /> */}
                              {/* <CardHeader title={info.title} /> */}
                              <CardContent>
                                <Typography
                                  variant="h6"
                                  align="center"
                                  color="text.primary"
                                  fontWeight="bold"
                                  gutterBottom
                                >
                                  {info.title}
                                </Typography>
                                <Typography variant="body2" align="center" color="text.secondary">
                                  {info.description}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </>
                      );
                    })}
                    {/* <Grid item xs={12} sx={3} md={4}>
                      <Card
                        elevation={10}
                        sx={{
                          p: 2,
                          bgcolor: "transparent",
                          "&:hover": {
                            boxShadow: 1,
                          },
                        }}
                      >
                        {" "}
                        <CardMedia component="img" alt="green iguana" height="140" image="/azure.svg" />
                        <CardHeader title="Easy to build and Customize" />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Bring your Vision to life. easily create, change or extend interactions - with work flow
                            designer
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sx={3} md={4}>
                      <Card
                        elevation={10}
                        sx={{
                          p: 2,
                          bgcolor: "transparent",
                          "&:hover": {
                            boxShadow: 1,
                          },
                        }}
                      >
                        {" "}
                        <CardMedia component="img" alt="green iguana" height="140" image="/azure.svg" />
                        <CardHeader title="Easy to build and Customize" />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Bring your Vision to life. easily create, change or extend interactions - with work flow
                            designer
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sx={3} md={4}>
                      <Card
                        elevation={10}
                        sx={{
                          p: 2,
                          bgcolor: "transparent",
                          "&:hover": {
                            boxShadow: 1,
                          },
                        }}
                      >
                        {" "}
                        <CardMedia component="img" alt="green iguana" height="140" image="/azure.svg" />
                        <CardHeader title="Easy to build and Customize" />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Bring your Vision to life. easily create, change or extend interactions - with work flow
                            designer
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sx={3} md={4}>
                      <Card
                        elevation={5}
                        sx={{
                          p: 2,
                          bgcolor: "transparent",
                          "&:hover": {
                            boxShadow: 1,
                          },
                        }}
                      >
                        <CardHeader title="Easy to build and Customize">
                          <h5 className="card-title fw-bold">Easy to build and Customize</h5>
                        </CardHeader>
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Bring your Vision to life. easily create, change or extend interactions - with work flow
                            designer
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sx={3} md={4}>
                      <Card
                        elevation={5}
                        sx={{
                          p: 2,
                          bgcolor: "transparent",
                          "&:hover": {
                            boxShadow: 1,
                          },
                        }}
                      >
                        <CardHeader title="Easy to build and Customize">
                          <h5 className="card-title fw-bold">Easy to build and Customize</h5>
                        </CardHeader>
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Bring your Vision to life. easily create, change or extend interactions - with work flow
                            designer
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid> */}
                  </Grid>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default WhyContactWise;
