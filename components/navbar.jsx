import React, { useState, useEffect } from "react";
// import "../styles/global.css";
import Link from "next/link";
import Container from "@mui/material/Container";

import DrawerComponent from "./Drawer";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { red, white, blue, purple, grey } from "@mui/material/colors";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [navbar, setnavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setnavbar(true);
    } else if (window.scrollY <= 0) {
      setnavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <nav
        className={
          navbar
            ? "nav navbar-expand-lg navbar-light bg-light  border-bottom header-sticky sticky-top "
            : "nav navbar-expand-lg navbar-light bg-light header border-bottom  "
        }
      >
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h4" sx={{ bgcolor: "transparent", flexGrow: 1 }}>
              ContactWise
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className="navlinks">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/features">
                  <a>Features</a>
                </Link>
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>

                <Link href="/contact">
                  <a>contact</a>
                </Link>
                <Link href="">
                  <a>Login</a>
                </Link>
                <Link href="">
                  <a>Register</a>
                </Link>
                <Button variant="contained">Register</Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
              </div>
            )}
          </Toolbar>
          {/* <navbar className="navbar">
            <div>ContactWise</div>
            <div>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <a>Resources</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          </navbar> */}
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
