import React, { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
  list: {
    width: "240px",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className={classes.list}>
          <Box textAlign="Left" p={2}>
            <Typography variant="h5" color="primary">
              ContactWise
            </Typography>
          </Box>
          <List>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="/" className={classes.link}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="/features" className={classes.link}>
                  Features
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="/pricing" className={classes.link}>
                  Pricing
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link href="/contact" className={classes.link}>
                  Contact
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
