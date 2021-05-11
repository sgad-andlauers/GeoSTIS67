import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

export default function DialogTable(props) {

  const { selectedRow, open, onClickClose, fullScreen } = props;
  console.warn("selectrow", selectedRow);
  return (
    <div style={{ maxWidth: "100%" }}>
     <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={onClickClose}
          aria-labelledby="responsive-dialog-title"
          size="xl"
          fullWidth
          maxWidth="xl"
        >
          <DialogContent>
            <DialogContentText></DialogContentText>
            </DialogContent>
        </Dialog>
    </div>
  );
}
