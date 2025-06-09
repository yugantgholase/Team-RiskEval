import React from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Shield,
  ChartArea,
  OctagonAlert,
} from "lucide-react";
import SeverityHighIcon from "@/assets/high.svg";
import SeverityMediumIcon from "@/assets/medium.svg";
import SeverityCriticalIcon from "@/assets/critical.svg";
import SeverityLowIcon from "@/assets/low.svg";
import { getSeverityCount } from "@/hooks/dashboard.hooks";

const severity = getSeverityCount();
const stats = [
  {
    icon: (
      <img
        src={SeverityCriticalIcon}
        alt="Critical Priority"
        className="h-12 w-12 mr-4"
      />
    ),
    // icon: <OctagonAlert size={40} style={{ color: "#af2525" }}></OctagonAlert>,
    count: severity?.critical,
    label: "Critical Severity",
  },
  {
    icon: (
      <img
        src={SeverityHighIcon}
        alt="Critical Priority"
        className="h-12 w-12 mr-4"
      />
    ),
    // icon: <OctagonAlert size={40} style={{ color: "#f54a00" }}></OctagonAlert>,
    count: severity?.high,
    label: "High Severity",
  },
  {
    icon: (
      <img
        src={SeverityMediumIcon}
        alt="Critical Priority"
        className="h-12 w-12 mr-4"
      />
    ),
    // icon: <OctagonAlert size={40} style={{ color: "#ffb900" }}></OctagonAlert>,
    count: severity?.medium,
    label: "Medium Severity",
  },
  {
    icon: (
      <img
        src={SeverityLowIcon}
        alt="Critical Priority"
        className="h-12 w-12 mr-4"
      />
    ),
    // icon: <OctagonAlert size={40} style={{ color: "#008d45" }}></OctagonAlert>,
    count: severity?.low,
    label: "Low Severity",
  },
];

const SeveritySummary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white  rounded-lg p-6 flex items-center"
          style={{ border: "1px solid #ececec" }}
        >
          <div className="mr-4">{stat.icon}</div>

          <div>
            <div className="text-2xl font-bold">{stat.count}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeveritySummary;
