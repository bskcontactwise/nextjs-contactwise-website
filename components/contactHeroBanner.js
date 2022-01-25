import { Container, Grid,Box,Stack, Typography } from '@mui/material';
import React from 'react';
import { red, white, blue, purple, grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Image from "next/image";

const ContactHeroBanner = () => {
    return (
      <>
        <Container disableGutters maxWidth="false" sx={{ bgcolor: blue[50] , py:5}}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                                    height: { xs: "600px", md: "600px" },
                    pr:5
                  }}
                >
                  <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="left">
                    <Typography variant="h3" gutterBottom component="div">
                      Contact us
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Got a question ? Our teams are here to help. Simply fill out the form, and we will be touch with
                      you shortly.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Our Office
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      UNITED KINGDOM
                    </Typography>
                    <address>
                      Unit 2 Tower House Hoddesdon,
                      <br />
                      Hertfordshire,
                      <br />
                      EN11 8UR.
                    </address>
                    <hr />
                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                      For enquirers and any additional information, Please Contact-us
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
                                    height: { xs: "700px", md: "600px" },
                    pl:{md:5}
                  }}
                >
                  <form name="contact" method="POST" data-netlify="true" action="/success">
                    <input type="hidden" name="form-name" value="contact" />
                    <Grid container xs={12} spacing={0.5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          placeholder="Enter your name"
                          name="name"
                          type="text"
                          id="name"
                          label="Name"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          placeholder="someone@gmail.com"
                          type="email"
                          id="email"
                          name="email"
                          dataerror="This email address is invalid"
                          label="Email"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                    <Grid container xs={12} spacing={0.5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          placeholder="+201-985376"
                          type="number"
                          name="number"
                          id="number"
                          fullWidth
                          label=" Phone Number"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          placeholder="Enter Company"
                          type="text"
                          name="company"
                          id="company"
                          label="Company"
                          fullWidth
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                    <TextField
                      placeholder="Enter Subject"
                      type="text"
                      name="subject"
                      id="subject"
                      label="Subject"
                      fullWidth
                      margin="normal"
                    />

                    <TextField
                      placeholder="Enter Message"
                      name="message"
                      id="message"
                      rows={3}
                      multiline
                      label="Message"
                      fullWidth
                      margin="normal"
                    />
                    <hr />
                    <Button variant="contained" type="submit" id="SendBtn" fullWidth>
                      Submit
                    </Button>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
        {/* <Container  maxWidth="false" sx={{bgcolor:"red"}} >
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                  }}
                >
                  <Stack sx={{ pt: 4 }} direction="column" spacing={2} justifyContent="left">
                    <Typography variant="h3" gutterBottom component="div">
                      Contact us
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Got a question ? Our teams are here to help. Simply fill out the form, and we will be touch with
                      you shortly.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Our Office
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      UNITED KINGDOM
                    </Typography>
                    <address>
                      Unit 2 Tower House Hoddesdon,
                      <br />
                      Hertfordshire,
                      <br />
                      EN11 8UR.
                    </address>
                    <hr />
                    <Typography variant="body1" sx={{ fontSize: "14px" }}>
                      For enquirers and any additional information, Please Contact-us
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container> */}
      </>
    );
};

export default ContactHeroBanner;
