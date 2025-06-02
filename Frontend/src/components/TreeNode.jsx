import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

const TreeNode = ({ node, eventKey }) => {
  const isFolder = node.type === "folder";

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        {isFolder ? "📁" : "📄"} {node.name}
        {node.hasError && (
          <Badge bg="danger" className="ms-2">
            Error
          </Badge>
        )}
      </Accordion.Header>

      <Accordion.Body>
        {isFolder
          ? node.children.map((child, index) => (
              <Accordion key={index} defaultActiveKey="">
                <TreeNode node={child} eventKey={`${eventKey}-${index}`} />
              </Accordion>
            ))
          : node.hasError && (
              <div className="text-danger">⚠️ {node.errorMessage}</div>
            )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default TreeNode;
