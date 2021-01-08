import React from "react";

import {
  Box,
  makeStyles,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((themes) => ({
  root: {
    backgroundImage:
      "url(" + "https://wallpaperaccess.com/full/346725.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 450,
  },
  textcolor: {
    color: "white",
  },
  centerstyle: {
    position: "absulate",
    padding: "150px",
    // marginTop: 112,
    marginLeft: "18%",
  },
  inptses: {
    display: "flex",
    textAlign: "center",
    backgroundColor: "white",
    width: 750,
    borderRadius: 4,
    marginTop: "8px",
  },
}));
function SearchPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.centerstyle}>
        <Typography className={classes.textcolor}>
          <Box fontWeight="fontWeightBold" fontSize={45}>
            Unsplash
          </Box>
        </Typography>
        <Typography
          variant="h6"
          fontSize={35}
          fontWeight="fontWeightBold"
          className={classes.textcolor}
        >
          Beautiful, free photos.
        </Typography>
        <Typography
          variant="h6"
          fontSize={35}
          fontWeight="fontWeightBold"
          className={classes.textcolor}
        >
          Gifted by the world's most generous community of photographers
        </Typography>
        <div className={classes.inptses}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            style={{ width: "650px", border: "none", outline: "none" }}
          />
          <Button variant="outlined">
            <Typography>Search</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
