import React from "react";
// import { AppBar, Toolbar, CssBaseline, Typography, makeStyles, useTheme, useMediaQuery } from "@material-ui";
import Link from "next/link";
import DrawerComponent from "./Drawer";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { red, white, blue, purple, grey } from "@mui/material/colors";

import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


function Navbar() {
 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar elevation={0} position="static" sx={{ bgcolor: blue[50], color: "text.primary" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4"  sx={{ bgcolor: "transparent", flexGrow: 1 }}>
          ContactWise
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="navlinks">
            <Link href="/" >
              <a>Home</a>
            </Link>
            <Link href="/features" >
              <a>Features</a>
            </Link>
            <Link href="/pricing" >
              <a>Pricing</a>
            </Link>

            <Link href="/contact" >
              <a>contact</a>
            </Link>
            <Link href="" >
              <a>Login</a>
            </Link>
            <Link href="">
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
