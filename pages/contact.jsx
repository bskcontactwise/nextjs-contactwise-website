import react from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CenterFocusStrong } from "@mui/icons-material";

function Contact() {
  return (
    <>
      <div>Contact</div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="center">
            <Grid item xs={12} md={4}>
              <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                <Typography variant="h3" gutterBottom component="div">
                  Contact us
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Got a question ? Our teams are here to help. Simply fill out the form, and we will be touch with you
                  shortly.
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
                <Typography variant="body1">For enquirers and any additional information, Please Contact-us</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ padding: 5, boxShadow: 2, border: 1, borderColor: "grey.300" }}>
                <Typography variant="h5" gutterBottom className="text-center p-bold font-25 font-weight-400 text-black">
                  Send us mail
                </Typography>

                {/* <form name="contact" method="POST" data-netlify="true" action="/success">
                  <input type="hidden" name="form-name" value="contact" className="hiddenfield" />
                  <Grid container xs={12} spacing={.5}>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                  <Grid container xs={12} spacing={.5}>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                </form> */}
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <Grid container xs={12} spacing={0.5}>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                  <p>
                    <label>
                      Your Role:{" "}
                      <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                      </select>
                    </label>
                  </p>
                  <p>
                    <label>
                      Message: <textarea name="message"></textarea>
                    </label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
