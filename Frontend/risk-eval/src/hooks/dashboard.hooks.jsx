import mockdata from "@/data/mockdata";
const vulnerabilities = mockdata?.results;
export function getSeverityCount() {
  return {
    critical: vulnerabilities?.filter((v) => v.priority === "Critical").length,
    high: vulnerabilities?.filter((v) => v.priority === "High").length,
    medium: vulnerabilities?.filter((v) => v.priority === "Medium").length,
    low: vulnerabilities?.filter((v) => v.priority === "Low").length,
  };
}

export function getCveCountDetails() {
  const cveCount = {};
  vulnerabilities?.forEach((v) => {
    v.cve_ids.forEach((cve) => {
      cveCount[cve] = (cveCount[cve] || 0) + 1;
    });
  });

  return cveCount;
}

export function getFilesCount() {
  const counts = {
    java: 0,
    python: 0,
    javascript: 0,
    yaml: 0,
    powershell: 0,
  };

  const extensionMap = {
    ".js": "javascript",
    ".jsx": "javascript",
    ".py": "python",
    ".java": "java",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".ps1": "powershell",
  };

  vulnerabilities.forEach((item) => {
    const componentPath = item.component || "";
    const filePath = componentPath.split(":").pop();
    const extMatch = filePath.match(/\.([^.]+)$/);
    if (extMatch) {
      const ext = `.${extMatch[1]}`;
      const type = extensionMap[ext];
      if (type) {
        counts[type]++;
      }
    }
  });

  return counts;
}
