import React from "react";
import { useState } from "react";
import Registration from "./Registation";
import { Button, Modal } from "antd";
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
        title="List"
        visible={open}
        footer={null}
        onCancel={handleClose}
        centered={true}
        width={1300}
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
