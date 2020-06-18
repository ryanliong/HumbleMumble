import React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import Registration from "./Registation";
import { Button } from "antd";
import MediaList from "./MediaList";

function CenteredModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={handleOpen}>
        {props.type == "Registration" ? "Register" : "List"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {props.type == "Registration" ? (
          <Registration close={handleClose}></Registration>
        ) : (
          <MediaList></MediaList>
        )}
      </Modal>
    </div>
  );
}

export default CenteredModal;
