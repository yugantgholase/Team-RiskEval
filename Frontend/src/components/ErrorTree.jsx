import React from "react";
import Accordion from "react-bootstrap/Accordion";
import TreeNode from "./TreeNode";

const ErrorTree = ({ data }) => {
  return (
    <Accordion defaultActiveKey="0">
      <TreeNode node={data} eventKey="0" />
    </Accordion>
  );
};

export default ErrorTree;
