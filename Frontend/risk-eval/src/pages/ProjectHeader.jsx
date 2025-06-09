import React from "react";
import { FolderRoot, GitBranch, Download } from "lucide-react";
import { getProjectDetails, useQueryParams } from "@/hooks/dashboard.hooks";
import { useLocation } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const projectDetails = getProjectDetails();
const stats = [
  {
    icon: <FolderRoot className="h-6 w-6 " />,
    name: projectDetails?.projectName,
    label: "Project Name",
  },
  {
    icon: <GitBranch className="h-6 w-6 " />,
    name: projectDetails?.branchName,
    label: "Branch Name",
  },
];
const ProjectHeader = () => {
  const location = useLocation();
  const { projectName, projectBranch } = useQueryParams();
  const stats = [
    {
      icon: <FolderRoot className="h-6 w-6 " />,
      name: projectName ?? projectDetails?.projectName,
      label: "Project Name",
    },
    {
      icon: <GitBranch className="h-6 w-6 " />,
      name: projectBranch ?? projectDetails?.branchName,
      label: "Branch Name",
    },
  ];
  return (
    <div
      className="flex gap-3 mb-4 justify-between items-center bg-white p-4 rounded mx-2"
      style={{ border: "1px solid #ececec" }}
    >
      <div className="flex gap-3 ">
        {stats.map((stat, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div
                key={index}
                className="relative group bg-gray-100  rounded p-2 flex items-center"
              >
                <div className="mr-3">{stat.icon}</div>
                <div className="  whitespace-nowrap">{stat.name}</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p key={index}>{stat.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {location.pathname.includes("dashboard") && (
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="/Vulnerability_Report.pdf"
              download
              className="align-middle group"
            >
              <Download size={25} className="group-hover:text-purple-800 " />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download PDF</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default ProjectHeader;
