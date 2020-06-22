import { Progress, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";

function ProgressBar() {
  const [state, changeState] = useState(0);

  const increase = () => {
    let percent = state + 10;
    if (percent > 100) {
      percent = 100;
    }
    changeState(percent);
  };

  const decline = () => {
    let percent = state - 10;
    if (percent < 0) {
      percent = 0;
    }
    changeState(percent);
  };

  return (
    <>
      <Progress percent={state} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
}
export default ProgressBar;
