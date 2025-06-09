import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router";
import mockData from "../../data/mockdata.json";

import { Folder, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import VulnerabilityCard from "@/components/explorer/VulnerabilityCard";

// Utility to build a tree from component paths
const buildTree = (paths) => {
  const root = {};

  paths.forEach((fullPath) => {
    const [rootFolder, rest] = fullPath.split(":");
    const parts = [rootFolder, ...rest.split("/")];
    let current = root;

    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = {
          name: part,
          children: {},
          type: index === parts.length - 1 ? "file" : "folder",
        };
      }
      current = current[part].children;
    });
  });

  const convertToArray = (node) =>
    Object.values(node).map((item) => ({
      ...item,
      children:
        item.type === "folder" ? convertToArray(item.children) : undefined,
    }));

  return convertToArray(root);
};

// Component to render folders and files
const ExplorerNode = ({ node, onFolderClick, onFileClick }) => {
  const isFolder = node.type === "folder";

  return (
    <div
      className="flex flex-col items-center m-4 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => (isFolder ? onFolderClick(node) : onFileClick(node))}
    >
      <div className="text-5xl">
        {isFolder ? <Folder size={40} /> : <FileText size={40} />}
      </div>
      <div className="text-sm mt-2 text-center max-w-[100px] truncate">
        {node.name}
      </div>
    </div>
  );
};

const Explorer = () => {
  const location = useLocation();
  const filePathFromState = location.state?.filePath || null;

  const paths = useMemo(
    () => mockData.results.map((item) => item.component),
    []
  );
  const tree = useMemo(() => buildTree(paths), [paths]);

  const [path, setPath] = useState(["data-ingest-monitoring"]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Auto-navigate to file if coming from another page
  useEffect(() => {
    if (filePathFromState) {
      const [root, rest] = filePathFromState.split(":");
      const parts = [root, ...rest.split("/")];
      setPath(parts.slice(0, -1));
      setSelectedFile(parts[parts.length - 1]);
    }
  }, [filePathFromState]);

  const getCurrentNodes = (tree, path) => {
    let current = tree;
    for (const segment of path) {
      const next = current.find((node) => node.name === segment);
      if (!next || !next.children) return [];
      current = next.children;
    }
    return current;
  };

  const currentNodes = getCurrentNodes(tree, path);

  const handleFolderClick = (node) => {
    setSelectedFile(null);
    setPath([...path, node.name]);
  };

  const handleFileClick = (node) => {
    setSelectedFile(node.name);
  };

  const handleBreadcrumbClick = (index) => {
    setSelectedFile(null);
    setPath(path.slice(0, index + 1));
  };

  const currentFilePath =
    path.length > 1
      ? `${path[0]}:${path.slice(1).join("/")}/${selectedFile}`
      : path[0];

  const fileData = mockData.results.filter(
    (item) => item.component === currentFilePath
  );

  return (
    <div className="bg-gray-100 p-2">
      {/* Breadcrumb Header */}
      <div className="mb-6 text-lg font-semibold text-blue-600">
        {path.map((segment, index) => (
          <span
            key={index}
            onClick={() => handleBreadcrumbClick(index)}
            className="cursor-pointer hover:underline"
          >
            {segment}
            {index < path.length - 1 && " > "}
          </span>
        ))}
        {selectedFile && ` > ${selectedFile}`}
      </div>

      {/* Folder/File Grid */}
      {!selectedFile && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {currentNodes.map((node) => (
            <ExplorerNode
              key={node.name}
              node={node}
              onFolderClick={handleFolderClick}
              onFileClick={handleFileClick}
            />
          ))}
        </div>
      )}

      {/* File Details with Vulnerability Cards */}
      {selectedFile && (
        <Card className="mt-6 p-4 gap-2">
          <CardHeader>
            <CardTitle className="flex flex-row text-2xl">
              <FileText size={30} className="mt-1 mr-2" />
              {selectedFile}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fileData.map((item, index) => (
                <VulnerabilityCard key={index} data={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Explorer;
