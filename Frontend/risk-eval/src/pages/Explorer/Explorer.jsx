import React from "react";

import VulnerabilityCard from "@/components/explorer/VulnerabilityCard";

const mock = {
  message: '"token" detected here, make sure this is not a hard-coded secret.',
  priority: "High",
  cvss_score: 9.0,
  status: "TO_REVIEW",
  reason: "The vulnerability involves hard-coded secrets (CWE-798)...",
  remediation:
    "Immediately remove any hard-coded tokens or secrets from the source code...",
};

const Explorer = () => {
  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <VulnerabilityCard data={mock} />{" "}
      </div>
    </div>
  );
};

export default Explorer;
