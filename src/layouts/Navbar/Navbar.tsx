import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.scss";
import { Box, Menu, MenuItem } from "@mui/material";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography textAlign="center">Weekly Schedule</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
