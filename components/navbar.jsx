import react from "react"
import Styles from "./navbar.module.css"
import Link from "next/link";
import Container from "@mui/material/Container";




function Navbar() {
    return (
      <>
        <nav className={Styles.nav}>
          <Container>
            <navbar className={Styles.navbar}>
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
