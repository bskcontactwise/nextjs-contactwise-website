import React, { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import DrawerIcon from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import { red, green, yellow, pink, purple, blue, teal, lightblue, orange } from "@mui/material/colors";

import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "black",
  },
  list: {
    width: "240px",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  //const history = useHistory();
  // const location = useLocation();
  return (
    <>
      <DrawerIcon
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{  color: blue[900] }}
      >
        <div className={classes.list}>
          <Box textAlign="Left" p={2}>
            <Typography variant="h5" color="primary">
              ContactWise
            </Typography>
          </Box>
          <List>
            <ListItem
              button
              onClick={() => {
                router.push("/");
                setOpenDrawer(false);
              }}
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
            <Divider />
            <ListItem
              button
              // className={location.pathname == item.path ? classes.active : null}
              onClick={() => {
                setOpenDrawer(false);
                router.push("/features");
              }}
            >
              <ListItemText>Features</ListItemText>
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                router.push("/pricing");
                setOpenDrawer(false);
              }}
            >
              <ListItemText>Pricing</ListItemText>
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                router.push("/contact");
                setOpenDrawer(false);
              }}
            >
              <ListItemText>Contact</ListItemText>
            </ListItem>
            <Divider />
          </List>
        </div>
      </DrawerIcon>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
