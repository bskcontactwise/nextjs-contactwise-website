import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import IntegrationBanner from "../components/integrationBanner";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import YContactWise from "../components/YContactWise";
import Button from "@mui/material/Button";
import { display } from "@mui/system";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ContactWise</title>
        <meta name="description" content="Cloud contact center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                bgcolor: "#265454",
              }}
            >
              <Box className="center direction">
                <Typography sx={{ textAlign: "center" }} fontSize={{ xs: "36px", md:"48px" }} variant="h2" gutterBottom>
                  Modern way to build your contact centre
                </Typography>
                <Typography variant="subtitle" gutterBottom sx={{ mb: 5 }}>
                  Empower your business to deliver amazing sales and customer service
                </Typography>

                <Button variant="outlined">Outlined</Button>
                <br />
                <Typography variant="subtitle">No credit card required</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display={{xs:"none", md:"flex"}}
              sx={{
                
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                bgcolor: "#262354",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <main className={styles.main}>
          <Grid></Grid>
          <h5>main</h5>

          <IntegrationBanner />
          <YContactWise />
        </main>
      </Container>
    </div>
  );
}
