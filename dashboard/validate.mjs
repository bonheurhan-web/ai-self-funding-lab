import { readFile } from "node:fs/promises";

const requiredFields = [
  "project_name",
  "status",
  "created_at",
  "deployments",
  "indexed_pages",
  "visitors",
  "revenue",
  "cost",
  "profit",
  "roi",
];

const statuses = new Set([
  "proposed",
  "validating",
  "building",
  "launched",
  "measuring",
  "scaling",
  "paused",
  "killed",
]);

const dashboard = JSON.parse(
  await readFile(new URL("./projects.json", import.meta.url), "utf8"),
);

if (dashboard.schema_version !== "1.0.0" || !Array.isArray(dashboard.projects)) {
  throw new Error("Dashboard envelope is invalid.");
}

const names = new Set();

for (const project of dashboard.projects) {
  for (const field of requiredFields) {
    if (!(field in project)) throw new Error(`${project.project_name ?? "Project"} is missing ${field}.`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.project_name)) {
    throw new Error(`Invalid project_name: ${project.project_name}`);
  }
  if (names.has(project.project_name)) throw new Error(`Duplicate project_name: ${project.project_name}`);
  names.add(project.project_name);
  if (!statuses.has(project.status)) throw new Error(`Invalid status for ${project.project_name}.`);
  if (!Array.isArray(project.deployments)) throw new Error(`Invalid deployments for ${project.project_name}.`);

  if (project.revenue !== null && project.cost !== null && project.profit !== null) {
    const expectedProfit = Number((project.revenue - project.cost).toFixed(2));
    if (project.profit !== expectedProfit) throw new Error(`Invalid profit for ${project.project_name}.`);
    const expectedRoi = project.cost === 0 ? null : Number(((project.profit / project.cost) * 100).toFixed(2));
    if (project.roi !== expectedRoi) throw new Error(`Invalid ROI for ${project.project_name}.`);
  }
}

console.log(`Dashboard valid: ${dashboard.projects.length} project(s).`);
