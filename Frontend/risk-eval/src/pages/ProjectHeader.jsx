import React from "react";
import {
  FolderRoot,
  GitBranch,
  Download,
  DownloadCloud,
  Cloud,
} from "lucide-react";
import { BsFiletypePdf } from "react-icons/bs";
import { IoIosGitBranch } from "react-icons/io";
import { getProjectDetails, useQueryParams } from "@/hooks/dashboard.hooks";
import { useLocation } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectDetails = getProjectDetails();
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
      icon: <IoIosGitBranch className="h-6 w-6 " />,
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
              <div key={index} className="relative p-2 flex items-center">
                <div className="mr-3">{stat.icon}</div>
                <Select>
                  <SelectTrigger
                    className="hidden  w-fit rounded-lg sm:ml-auto sm:flex"
                    aria-label="Select a value"
                  >
                    <SelectValue placeholder={stat.name} />
                  </SelectTrigger>

                  <SelectContent className="rounded-xl whitespace-nowrap">
                    <SelectItem
                      value="currentProject"
                      className="rounded-lg flex whitespace-nowrap"
                    >
                      {stat.name}
                    </SelectItem>
                  </SelectContent>
                </Select>
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
              className="align-middle group mr-3"
            >
              <BsFiletypePdf
                size={25}
                className="group-hover:text-purple-800 "
              />
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
