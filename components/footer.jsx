import Link from "next/link";
import React from "react";
import Styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { StayPrimaryLandscape } from "@mui/icons-material";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box sx={{ bgcolor: "primary.dark", py: 5 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <h5>Contactwise</h5>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography variant="title">Solution</Typography>
                  <List>
                    <Typography variant="title">Solution</Typography>
                    <ListItem>Call center</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>Sales</ListItem>
                    <ListItem>Phone system</ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <footer className={`container-fluid  p-3  ${Styles.bgfooter}`}>
        <Box sx={{ padding: 1, boxShadow: 2, border: 1, borderColor: "grey.300" }}>
          <small>Copyright ⓒ FlexiContact {currentYear}. All Rights Reserved</small>
          <Link href="/terms-of-service">
            <a style={{ margin: "10px" }}>Terms of service</a>
          </Link>
          <Link href="/privacy">
            <a>Privacy policy</a>
          </Link>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
