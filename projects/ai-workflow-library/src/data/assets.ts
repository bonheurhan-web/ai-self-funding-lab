export type Asset = {
  id: string;
  slug: string;
  title: string;
  purpose: string;
  format: string;
};

export const assets: Asset[] = [
  {
    id: "A1",
    slug: "codex-cto-command-template",
    title: "Codex CTO Command Template",
    purpose: "Tell Codex exactly what to build, what to avoid, and how to report completion.",
    format: "Markdown template",
  },
  {
    id: "A2",
    slug: "ai-project-brief-template",
    title: "AI Project Brief Template",
    purpose: "Define a small AI project before writing code or spending money.",
    format: "Markdown template",
  },
  {
    id: "A3",
    slug: "ai-revenue-experiment-dashboard-template",
    title: "AI Revenue Experiment Dashboard Template",
    purpose: "Track status, cost, revenue, profit, and ROI for an AI project.",
    format: "JSON template + checklist",
  },
  {
    id: "A4",
    slug: "ai-daily-operating-workflow-template",
    title: "AI Daily Operating Workflow Template",
    purpose: "Run one focused AI work session with clear inputs, outputs, and review.",
    format: "Checklist",
  },
  {
    id: "A5",
    slug: "ai-project-kill-criteria-review-template",
    title: "AI Project Kill Criteria and Review Template",
    purpose: "Decide when to continue, pause, or stop an AI project based on evidence.",
    format: "Markdown template + checklist",
  },
];
