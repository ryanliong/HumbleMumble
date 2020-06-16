import React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import Registration from "./Registation";
import { Button } from "antd";

function CenteredModal() {
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
        Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Registration close={handleClose}></Registration>
      </Modal>
    </div>
  );
}

export default CenteredModal;
