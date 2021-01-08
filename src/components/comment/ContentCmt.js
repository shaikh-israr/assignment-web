import {
  Typography,
  Button,
  TextField,
  makeStyles,
  TextareaAutosize,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  btn: {
    backgroundColor: "#431C53",
    color: "white",
    marginLeft: "5px",

    "&:hover": {
      backgroundColor: "#431C53",
    },
  },
  ninpt: {
    width: "300px",
    borderRadius: "5px",
  },
  inptarea: {
    width: "372px",
    height: "104px",
  },
  spancol: {
    color: "gray",
    marginLeft: "10px",
  },
  tit: {
    fontWeight: "bold",
  },
});
export default function ContentCmt() {
  const classes = useStyles();
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "5px" }}>
          <img
            src="https://miro.medium.com/max/10368/1*otyC6CUn6QqeIDfaPr65bQ.jpeg"
            alt="black cat"
            style={{ width: "250px", height: "200px" }}
          />
        </div>
        <div style={{ padding: "5px" }}>
          <Typography>Name</Typography>
          <TextField
            variant="outlined"
            className={classes.ninpt}
            size="small"
          />
          <Button className={classes.btn}>
            <Typography>Submit</Typography>
          </Button>
          <Typography>Comment</Typography>
          <TextareaAutosize style={{ height: "104px", width: "372px" }} />
        </div>
      </div>
      <p
        style={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        Previous commects
      </p>
      <div
        style={{ display: "flex", marginLeft: "10px", flexDirection: "column" }}
      >
        <div style={{ display: "flex" }}>
          <p className={classes.tit}>Ajth</p>
          <p className={classes.spancol}>wow nice</p>
        </div>
        <div style={{ display: "flex" }}>
          <p className={classes.tit}>Roy</p>
          <p className={classes.spancol}>Nice... so cute</p>
        </div>
        <div style={{ display: "flex" }}>
          <p className={classes.tit}>John</p>
          <p className={classes.spancol}>Look so cute</p>
        </div>
        <div style={{ display: "flex" }}>
          <p className={classes.tit}>Sam</p>
          <p className={classes.spancol}>Nice...</p>
        </div>
      </div>
    </>
  );
}
