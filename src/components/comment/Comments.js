import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Comments(props) {
  const { title, children, openPop, setopenPop } = props;
  return (
    <Dialog open={openPop} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton onClick={() => setopenPop(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Comments;
