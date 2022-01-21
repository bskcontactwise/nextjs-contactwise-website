import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Link from "next/link";
import Container from "@mui/material/Container";

function Navbar() {
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
        <Container>
          <navbar className="navbar">
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
          </navbar>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
