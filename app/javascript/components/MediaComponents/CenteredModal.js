import React from "react";
import { useState } from "react";
import Registration from "./Registation";
import { Modal, Tabs, message } from "antd";
import MediaList from "./MediaList";
import { Link } from "react-router-dom";
import SignInOut from "./SignInOut";
import { useEffect } from "react";

function CenteredModal(props) {
  const [open, setOpen] = useState(false);
  const { TabPane } = Tabs;
  console.log(localStorage.getItem("username"));
  // currently using username check because signedIn is true at the start of server for some weird reason
  console.log(localStorage);
  console.log(localStorage.getItem("username") != "null");

  if (localStorage.getItem("signedIn") == null) {
    localStorage.setItem("signedIn", false);
  }

  const [userSignInStatus, setUserSignInStatus] = useState(
    localStorage.getItem("signedIn") == false ||
      localStorage.getItem("signedIn") == "false"
      ? false
      : true
  );

  useEffect(
    () =>
      setUserSignInStatus(
        localStorage.getItem("signedIn") == false ||
          localStorage.getItem("signedIn") == "false"
          ? false
          : true
      ),
    [localStorage.getItem("signedIn"), userSignInStatus]
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    setUserSignInStatus(false);
    localStorage.clear();
    message.success("Sign out Successful");
    localStorage.setItem("signedIn", false);
  };

  const signInOrOutButton = userSignInStatus ? (
    <button className="btn btn-dark" onClick={handleSignOut}>
      Sign Out
    </button>
  ) : (
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
            <SignInOut close={handleClose}></SignInOut>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );

  return props.type == "Registration" ? (
    signInOrOutButton
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
