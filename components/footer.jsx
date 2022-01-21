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

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container className={`container-fluid bg-dark text-white mt-5 ${Styles.footerFS}`}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <h5>Contactwise</h5>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <h5>Solution</h5>
                <List>
                  <ListItem>Call center</ListItem>
                  <ListItem>Support</ListItem>
                  <ListItem>Sales</ListItem>
                  <ListItem>Phone system</ListItem>
                </List>
              </Grid>
              <div className="col">
                <h5>Product</h5>
                <ul className="list-unstyled">
                  <li>Workflow Designer</li>
                  <li>Integration</li>
                </ul>
              </div>
              <div className="col">
                <h5>Feature</h5>
                <ul className="list-unstyled">
                  <li>IVR</li>
                  <li>Call Routing</li>
                  <li>Analytics</li>
                  <li>Click to Call</li>
                </ul>
              </div>
              <div className="col">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                  <li>Blog</li>
                  <li>Knowledge base</li>
                  <li>Become an partner</li>
                  <li>Build an integration</li>
                </ul>
              </div>
              <div className="col">
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li>Contact us</li>
                  <li>About us</li>
                  <li>Career</li>
                  <li>Status</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
