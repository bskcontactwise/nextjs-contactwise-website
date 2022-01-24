import React from "react";
// import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, useTheme, useMediaQuery } from "@material-ui";
import Link from "next/link";
import DrawerComponent from "./Drawer";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky"  >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} sx={{ flexGrow: 1 }}>
          ContactWise
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="navlinks">
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/features" className={classes.link}>
              <a>Features</a>
            </Link>
            <Link href="/pricing" className={classes.link}>
              <a>Pricing</a>
            </Link>

            <Link href="/contact" className={classes.link}>
              <a>contact</a>
            </Link>
            <Link href="" className={classes.link}>
              <a>Login</a>
            </Link>
            <Link href="" className={classes.link}>
              <a>Register</a>
            </Link>
            <Button variant="Contained">Register</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
