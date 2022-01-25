import React from "react";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { red, white, blue, purple, grey } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"],
  },
  {
    title: "Resources",
    description: ["Resource", "Resource name", "Another resource", "Final resource"],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
  
];
function Copyright() {
  return (
    <Typography variant="body2" color="text.primary" align="start">
      {"Copyright © "}
      <Link color="inherit" href="https://contactwise.io/">
        ContactWise
      </Link>{" "}
      {new Date().getFullYear()}
          {"."}
          All Rights Reserved
    </Typography>
  );
}
const FooterNew = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth="false"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          bgcolor: grey[50],
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom sx={{fontSize:"14px"}}>
                  {footer.title}
                </Typography>
                <List>
                  {footer.description.map((item) => (
                    <ListItem key={item}  sx={{ pl: 0, fontSize: "14px", py: 1}}>
                      
                      <Link href="#" >
                       {item}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>

          {/* <Copyright sx={{ mt: 10 }} /> */}
        </Container>
        {/* <Divider /> */}
        <Container
          maxWidth="lg"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: 3,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6} sm={5}>
              <Copyright sx={{ mt: 0 }} />
            </Grid>
            <Grid item xs={6} sm={3} align="end">
              <Box spacing={3}>
                <IconButton>
                  {" "}
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  {" "}
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default FooterNew;
