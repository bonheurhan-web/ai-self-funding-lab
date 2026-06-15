export type Asset = {
  id: string;
  slug: string;
  title: string;
  titleZh: string;
  audience: string;
  problem: string;
  freeVersion: string;
  paidExtension: string;
  format: string;
  usage: string;
};

export const assets: Asset[] = [
  {
    id: "A1",
    slug: "codex-cto-command-template",
    title: "Codex CTO Command Template",
    titleZh: "Codex CTO 指挥模板",
    audience: "Solo founders and operators who want Codex to work against clear business goals.",
    problem: "Turns vague requests into scoped, verifiable engineering assignments with approval boundaries.",
    freeVersion: "A concise command structure covering role, objective, constraints, and completion criteria.",
    paidExtension: "Expanded operating prompts, approval gates, review routines, and reusable command examples.",
    format: "Markdown template and prompt files",
    usage: "Copy the template into a project brief, replace the placeholders, and use it to start a Codex task.",
  },
  {
    id: "A2",
    slug: "ai-project-brief-template",
    title: "AI Project Brief Template",
    titleZh: "AI 项目启动说明书模板",
    audience: "People starting an AI-assisted product or revenue experiment.",
    problem: "Defines the customer, evidence, scope, costs, approvals, and kill criteria before development.",
    freeVersion: "A one-page project brief outline with the essential validation fields.",
    paidExtension: "A complete PROJECT.md template, worked example, review checklist, and decision prompts.",
    format: "Markdown template and checklist",
    usage: "Complete the brief before building and use it as the source of truth for each project review.",
  },
  {
    id: "A3",
    slug: "ai-revenue-experiment-dashboard-template",
    title: "AI Revenue Experiment Dashboard Template",
    titleZh: "AI 收入实验仪表盘模板",
    audience: "Solo founders tracking multiple small experiments without a database.",
    problem: "Makes project status, traffic, revenue, cost, profit, and ROI measurable from the start.",
    freeVersion: "A minimal JSON record and metric definition sheet.",
    paidExtension: "Schema, validation rules, review workflow, sample records, and portfolio reporting views.",
    format: "JSON, JSON Schema, and Markdown instructions",
    usage: "Add one record per project and update it on a fixed reporting window without replacing unknowns with zero.",
  },
  {
    id: "A4",
    slug: "ai-daily-operating-workflow-template",
    title: "AI Daily Operating Workflow Template",
    titleZh: "AI 每日工作流程模板",
    audience: "Freelancers and solo founders coordinating ChatGPT, Codex, and manual approvals.",
    problem: "Prevents AI work from becoming disconnected conversations with no measurable outcome.",
    freeVersion: "A daily plan covering priorities, actions, blockers, and end-of-day review.",
    paidExtension: "Role-specific routines, handoff prompts, weekly review, and experiment tracking examples.",
    format: "Markdown workflow and reusable checklists",
    usage: "Run the opening checklist each morning and close the day by recording evidence and next actions.",
  },
  {
    id: "A5",
    slug: "ai-project-kill-criteria-review-template",
    title: "AI Project Kill Criteria and Review Template",
    titleZh: "AI 项目停止条件与复盘模板",
    audience: "Builders who need objective rules for pausing weak experiments.",
    problem: "Reduces sunk-cost decisions by defining evidence thresholds and review dates in advance.",
    freeVersion: "A basic pause, continue, or kill decision checklist.",
    paidExtension: "Scored review framework, postmortem template, evidence log, and portfolio decision examples.",
    format: "Markdown decision record and review worksheet",
    usage: "Set thresholds before launch, review on the scheduled date, and record the decision with evidence.",
  },
];
