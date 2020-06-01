import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function CheckBox() {
  return (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check
        type="checkbox"
        label="Completed"
        style={{ marginLeft: "85px" }}
      />
    </Form.Group>
  );
}

export default CheckBox;
