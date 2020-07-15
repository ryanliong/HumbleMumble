import React from "react";
import { Container } from "@material-ui/core";
import { Spin, Alert } from "antd";
function LoadingBar(props) {
  return (
    <div>
      <Container style={{ marginTop: 20, maxWidth: 1400 }}>
        <Spin tip="Loading...">
          <Alert
            message={props.message}
            description={props.description}
            type="info"
          />
        </Spin>
      </Container>
    </div>
  );
}

export default LoadingBar;
