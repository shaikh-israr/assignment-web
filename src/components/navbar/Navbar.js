import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Person from "./../../images/1.jpeg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    display: "flex",
    flexGrow: 1,
  },
  navtitle: {
    marginRight: theme.spacing(2),
  },
  iconbtn: {
    marginRight: theme.spacing(2),
    width: "30px",
    height: "30px",
    color: "black",
  },
  avtarlarge: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar style={{ color: "black" }}>
          <IconButton>
            <PhotoCameraIcon className={classes.iconbtn} />
          </IconButton>
          <Typography style={{ flex: 1 }}> </Typography>
          <Typography variant="h6" className={classes.navtitle}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.navtitle}>
            Collections
          </Typography>
          <Typography variant="h6" className={classes.navtitle}>
            Explore
          </Typography>
          <IconButton>
            <MoreHorizIcon className={classes.iconbtn} />
          </IconButton>
          <Button variant="outlined">
            <Typography>Submit a photo</Typography>
          </Button>
          <IconButton>
            <NotificationsActiveIcon className={classes.iconbtn} />
          </IconButton>
          <IconButton>
            <Avatar
              alt="Person icons here"
              src={Person}
              className={classes.avtarlarge}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
