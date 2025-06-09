import React from "react";
import { FolderRoot, GitBranch } from "lucide-react";
import { getProjectDetails } from "@/hooks/dashboard.hooks";

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
  return (
    <div className="flex gap-3 mb-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative group bg-gray-100  rounded-lg p-2 flex items-center"
        >
          <div className="mr-3">{stat.icon}</div>
          {/* <div className="text-gray-600">{stat.label}</div> */}
          <div className=" text-xl font-bold whitespace-nowrap">
            {stat.name}
          </div>

          <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-70 transition-opacity pointer-events-none z-10">
            {stat.label}{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectHeader;
