import React from "react";
import { useState } from "react";
import Registration from "./Registation";
import { Button, Modal, Tabs } from "antd";
import MediaList from "./MediaList";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SignInOut from "./SignInOut";

function CenteredModal(props) {
  const [open, setOpen] = useState(false);
  const { TabPane } = Tabs;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return props.type == "Registration" ? (
    <div>
      <button className="btn btn-dark" onClick={handleOpen}>
        Sign In
      </button>
      <Modal
        visible={open}
        footer={null}
        onCancel={handleClose}
        centered={true}
        width={1300}
      >
        <Tabs type="card">
          <TabPane tab="Register" key="1">
            <Registration close={handleClose}></Registration>
          </TabPane>
          <TabPane tab="Sign in" key="2">
            <SignInOut></SignInOut>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  ) : (
    <div>
      <Link onClick={handleOpen} style={{ color: "white" }} to="">
        List
      </Link>

      <Modal
        title="List"
        visible={open}
        footer={null}
        onCancel={handleClose}
        centered={true}
        width={1300}
      >
        <MediaList></MediaList>
      </Modal>
    </div>
  );
}

export default CenteredModal;
