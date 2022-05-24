import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Navbar.module.scss";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          color="primary.contrastText"
        >
          Fixed Schedule
        </Link>
        <Link
          component={RouterLink}
          to="/weekly"
          underline="none"
          color="primary.contrastText"
          marginLeft="2rem"
        >
          Calendar
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
