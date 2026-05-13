const folderData = [
  {
    name: ".ai/",
    type: "Root",
    description:
      "The platform-neutral root context package. It centralizes rules, operating docs, and agent orchestration files reused by Copilot, Codex, and Claude workflows.",
    purpose: [
      "Defines the overall operating contract for agentic coding",
      "Keeps standards, policies, and runbooks in one discoverable location",
      "Acts as a portable template teams can adapt per platform"
    ],
    contains: [
      "Core files like registry.json, settings.json, conventions.md",
      "Specialized folders (global, shared, agents, orchestration, memory)",
      "Execution and governance docs such as retry, fallback, and audit policies"
    ],
    useCase:
      "When onboarding a new assistant platform, teams copy this root package and tune routing + policies while preserving the same conceptual structure.",
    exampleFile: "README.md",
    markdown: `# Agentic Workspace\n\nThis folder is the source-of-truth for agent behavior.\n\n## Key outcomes\n- Consistent execution policy\n- Shared language across agents\n- Easy portability between AI coding platforms`
  },
  {
    name: "global/",
    type: "Preference Layer",
    description:
      "Cross-project preference guides: coding style, naming, git habits, engineering philosophy, and response behavior.",
    purpose: [
      "Captures long-lived human/team preferences",
      "Reduces repetitive instruction in every task",
      "Improves consistency across generated code and communication"
    ],
    contains: [
      "coding-style.md, naming-conventions.md, commit-style.md",
      "editor-preferences.md and shell-preferences.md",
      "anti-patterns.md to avoid repeated mistakes"
    ],
    useCase:
      "Before writing code, an agent loads this folder to align with formatting, naming, and collaboration expectations automatically.",
    exampleFile: "coding-style.md",
    markdown: `# Coding Style\n\n## JavaScript\n- Use const by default\n- Prefer small pure functions\n- Keep UI copy concise and user-centered\n\n## Commits\n- Write imperative commit messages\n- Scope each commit to one clear purpose`
  },
  {
    name: "shared/",
    type: "Standards Library",
    description:
      "Reusable architecture and engineering standards that apply across multiple agents and domains.",
    purpose: [
      "Houses canonical standards for backend, frontend, API, testing, and security",
      "Provides a single reference set for large multi-agent workflows",
      "Prevents conflicting implementation patterns"
    ],
    contains: [
      "architecture.md, stack.md, coding-standards.md",
      "security-guidelines.md, accessibility.md, performance-rules.md",
      "domain references such as websocket-patterns.md and rate-limiting.md"
    ],
    useCase:
      "When a backend and UI agent collaborate, both can rely on the same shared standards to keep output compatible.",
    exampleFile: "security-guidelines.md",
    markdown: `# Security Guidelines\n\n## Input Safety\n- Validate all incoming payloads\n- Sanitize untrusted content before rendering\n\n## Secrets\n- Never commit credentials\n- Use runtime environment injection`
  },
  {
    name: "agents/",
    type: "Agent Blueprints",
    description:
      "Role-based definitions for specialized agents (backend, UI/UX, security, testing, deployment, etc.).",
    purpose: [
      "Defines each agent's mission, constraints, and workflow",
      "Separates responsibilities to support parallel execution",
      "Allows targeted prompts and capability boundaries"
    ],
    contains: [
      "Per-agent docs: mission.md, behavior.md, workflow.md",
      "prompts/, scripts/, knowledge/, sessions/, outputs/, logs/",
      "tools.json and permissions.json for controlled execution"
    ],
    useCase:
      "A supervisor routes a database task to database-engineer while assigning security checks to security-auditor in parallel.",
    exampleFile: "agents/backend-architect/mission.md",
    markdown: `# Mission\n\nYou are the backend architect agent.\n\n## Objectives\n1. Propose scalable service boundaries\n2. Design reliable API contracts\n3. Ensure observability and failure recovery`
  },
  {
    name: "orchestration/",
    type: "Coordination Engine",
    description:
      "Rules for routing, delegation, conflict resolution, and recovery between multiple agents.",
    purpose: [
      "Controls how tasks are split and assigned",
      "Defines collaboration protocol and state transitions",
      "Ensures graceful fallback when an agent fails"
    ],
    contains: [
      "agent-routing.md, execution-graph.md, state-machine.md",
      "delegation-rules.md and collaboration-rules.md",
      "supervisor-agent.md, planner-agent.md, critic-agent.md"
    ],
    useCase:
      "For a bugfix flow, planner-agent drafts subtasks, supervisor-agent dispatches work, and evaluator-agent verifies merged results.",
    exampleFile: "execution-graph.md",
    markdown: `# Execution Graph\n\nStart -> Plan -> Delegate -> Validate -> Merge\n\n## Failure Path\nIf validation fails: route to Debugging Agent -> re-run tests -> retry merge`
  },
  {
    name: "memory/",
    type: "Project Memory",
    description:
      "Persistent project knowledge: decisions, incidents, known bugs, release notes, and lessons learned.",
    purpose: [
      "Preserves context between sessions",
      "Prevents repeated mistakes",
      "Supports faster onboarding for new contributors or agents"
    ],
    contains: [
      "engineering-decisions.md and architecture-decisions.md",
      "known-bugs.md, recurring-issues.md, lessons-learned.md",
      "incident-history.md and release-notes.md"
    ],
    useCase:
      "Before changing a fragile module, an agent reviews known-bugs.md and incident-history.md to avoid regressions.",
    exampleFile: "known-bugs.md",
    markdown: `# Known Bugs\n\n## Bug: stale routing cache\n- Trigger: config update without cache invalidation\n- Impact: wrong agent selected\n- Mitigation: clear routing cache after settings refresh`
  },
  {
    name: "tasks/",
    type: "Work Queue",
    description:
      "Task lifecycle management: active, planned, blocked, completed, archived, and categorized work streams.",
    purpose: [
      "Tracks current and future work in a structured pipeline",
      "Makes dependencies and blockers visible",
      "Helps orchestration agents choose next actionable items"
    ],
    contains: [
      "active/, planned/, backlog/, completed/, blocked/, archived/",
      "Thematic streams like feature-development/ and bug-fixes/",
      "Specialized tracks such as migrations/, scaling/, research/"
    ],
    useCase:
      "A planner can prioritize tasks from backlog to active, then move outputs to completed after validation.",
    exampleFile: "tasks/active/example-task.md",
    markdown: `# Example Task\n\n- Title: Add search to folder explorer\n- Owner: frontend-designer\n- Status: active\n- Acceptance: keyboard accessible + responsive layout`
  },
  {
    name: "workflows/",
    type: "Runbooks",
    description:
      "Step-by-step process documentation for recurring activities like debugging, release, rollback, and audits.",
    purpose: [
      "Standardizes operations across the team",
      "Reduces execution ambiguity in high-pressure scenarios",
      "Supports repeatable quality for releases and incidents"
    ],
    contains: [
      "feature-development.md, bug-investigation.md, code-review.md",
      "deployment.md, rollback.md, emergency-recovery.md",
      "security-audit.md and architecture-review.md"
    ],
    useCase:
      "During production issues, incident-response and rollback runbooks guide fast, consistent action.",
    exampleFile: "incident-response.md",
    markdown: `# Incident Response\n\n1. Confirm severity\n2. Assign incident commander\n3. Stabilize production\n4. Communicate updates every 15 minutes\n5. Publish postmortem`
  },
  {
    name: "prompts/",
    type: "Prompt Toolkit",
    description:
      "Curated prompt templates grouped by task type to steer agent behavior consistently.",
    purpose: [
      "Improves output quality with reusable prompt patterns",
      "Speeds up execution for common engineering tasks",
      "Keeps prompting style consistent across contributors"
    ],
    contains: [
      "planning/, implementation/, debugging/, testing/",
      "architecture/, migration/, review/, brainstorming/",
      "Domain-specific prompt starters and structure templates"
    ],
    useCase:
      "A reviewer can select prompts/review/checklist-style templates to enforce systematic code reviews.",
    exampleFile: "prompts/implementation/example.md",
    markdown: `# Implementation Prompt\n\nContext: Build a minimal feature without changing unrelated modules.\n\nRequirements:\n- Keep diffs small\n- Add focused validation\n- Summarize trade-offs`
  },
  {
    name: "scripts/",
    type: "Automation Scripts",
    description:
      "Executable helpers for bootstrap, linting, testing, benchmarking, deployment, and operational maintenance.",
    purpose: [
      "Automates repetitive workflows",
      "Reduces manual error in setup and release tasks",
      "Encodes operational know-how into reusable commands"
    ],
    contains: [
      "bootstrap/, repo-analysis/, linting/, testing/",
      "deployment/, monitoring/, migrations/, recovery/",
      "benchmarking/, profiling/, cleanup/"
    ],
    useCase:
      "A CI pipeline can call scripts/testing and scripts/linting to standardize quality gates across environments.",
    exampleFile: "scripts/bootstrap/setup.sh",
    markdown: `# setup.sh\n\n#!/usr/bin/env bash\nset -euo pipefail\n\necho \"Preparing local agent workspace...\"\n# install deps\n# seed baseline settings`
  },
  {
    name: "knowledge/",
    type: "Domain References",
    description:
      "Topic-indexed technical references used by agents when generating solutions across stacks and domains.",
    purpose: [
      "Supplies just-in-time domain context",
      "Improves technical depth in generated plans/code",
      "Supports multi-discipline work (security, scaling, networking, AI)"
    ],
    contains: [
      "backend/, frontend/, devops/, security/, ai/",
      "distributed-systems/, scaling/, performance/, databases/",
      "architecture/ and product/ strategy notes"
    ],
    useCase:
      "Before suggesting a streaming design, an agent reads knowledge/streaming for proven patterns and trade-offs.",
    exampleFile: "knowledge/security/input-validation.md",
    markdown: `# Input Validation\n\n- Validate schema at boundaries\n- Reject unknown fields in strict modes\n- Log and monitor validation failures`
  },
  {
    name: "telemetry/",
    type: "Observability Data",
    description:
      "Operational signals and historical metrics for usage, latency, failures, traces, and token consumption.",
    purpose: [
      "Measures system health and efficiency",
      "Provides evidence for optimization decisions",
      "Supports incident diagnosis with historical data"
    ],
    contains: [
      "usage/, performance/, token-consumption/",
      "execution-history/, failures/, latency/, traces/",
      "analytics/ for trend and behavior insights"
    ],
    useCase:
      "A performance-optimizer agent can correlate latency spikes with token-consumption growth before proposing changes.",
    exampleFile: "telemetry/performance/daily-summary.md",
    markdown: `# Daily Performance Summary\n\n- P95 latency: 920ms (down 11%)\n- Task success rate: 98.7%\n- Top bottleneck: context-loading step`
  },
  {
    name: "telemetry/analytics/",
    type: "Behavior Analytics",
    description:
      "Product and workflow analytics: event schemas, dashboards, reporting, experimentation readouts, and governance for how insights are produced.",
    purpose: [
      "Defines which events are tracked and how they map to KPIs",
      "Standardizes dashboards, reports, and recurring analysis",
      "Sets guardrails for privacy, data quality, and interpretation"
    ],
    contains: [
      "README.md, events-schema.md, kpi-definitions.md, data-quality.md, privacy.md",
      "dashboards/, reports/, queries/, experiments/, segments/",
      "retention.md, anomaly-detection.md"
    ],
    useCase:
      "A product-strategist agent reviews KPI definitions + retention notes, then pulls a standardized query template to validate a hypothesis before proposing a roadmap change.",
    examples: [
      {
        file: "telemetry/analytics/README.md",
        markdown: `# telemetry/analytics\n\nThis folder standardizes how we turn raw telemetry into decisions.\n\n## Contents\n- Event taxonomy + schemas\n- KPI definitions\n- Dashboards + recurring reports\n- Experiments + interpretation guardrails`
      },
      {
        file: "telemetry/analytics/events-schema.md",
        markdown: `# Events Schema\n\n## Naming\n- Use dot notation: \`agent.run.started\`\n- Prefer noun + verb + outcome\n\n## Required fields\n- \`timestamp\` (ISO)\n- \`session_id\`\n- \`agent_role\`\n- \`task_type\`\n- \`success\` (boolean)\n\n## Optional fields\n- \`latency_ms\`\n- \`tokens_in\`, \`tokens_out\`\n- \`error_code\``
      },
      {
        file: "telemetry/analytics/kpi-definitions.md",
        markdown: `# KPI Definitions\n\n## Success Rate\nSuccessful tasks / total tasks over a rolling 7-day window.\n\n## Cost per Task\n(token_cost_usd + infra_cost_usd) / successful tasks.\n\n## Time to First Useful Output\nP50 and P95 of elapsed seconds from task start to first validated artifact.`
      },
      {
        file: "telemetry/analytics/data-quality.md",
        markdown: `# Data Quality Checks\n\n- Reject events missing required fields\n- Monitor schema drift (new/removed keys)\n- Deduplicate by (session_id, event_id)\n- Alert on late-arriving events (> 24h)\n\n## Daily gate\nIf null-rate for \`success\` > 0.1%: block KPI rollups.`
      },
      {
        file: "telemetry/analytics/privacy.md",
        markdown: `# Privacy & PII\n\n- Never log secrets, tokens, or raw file contents\n- Hash stable identifiers when possible\n- Redact paths when they can reveal user info\n\n## Retention\n- Raw events: 30 days\n- Aggregates: 18 months\n\n## Access\n- Role-based access to raw events\n- Dashboards are safe-by-default (aggregated).`
      },
      {
        file: "telemetry/analytics/retention.md",
        markdown: `# Retention\n\n## Definitions\n- D0: first day active\n- D7/D30: returned and produced a successful task\n\n## Cohort cut\n- Cohort by first successful task\n- Exclude internal test traffic\n\n## Leading indicators\n- Save rate (exports per session)\n- Return-to-fix (reruns within 24h).`
      },
      {
        file: "telemetry/analytics/anomaly-detection.md",
        markdown: `# Anomaly Detection\n\n## Signals\n- P95 latency\n- failure rate\n- cost per task\n\n## Rules\n- Trigger when z-score > 3 over 14-day baseline\n- Suppress if traffic < minimum threshold\n\n## Response\n- Create incident ticket\n- Attach top contributing agents + tasks\n- Link queries used for diagnosis.`
      }
    ]
  },
  {
    name: "telemetry/analytics/dashboards/",
    type: "Dashboards",
    description:
      "Dashboard definitions for health, adoption, quality, latency, and cost—kept consistent across teams and tools.",
    purpose: [
      "Keeps KPI visualizations consistent across environments",
      "Defines the minimum dashboard set for operations and product",
      "Documents interpretation notes to avoid misleading reads"
    ],
    contains: [
      "overview.md",
      "latency.md",
      "cost.md"
    ],
    useCase:
      "An ops agent checks overview + latency dashboards during an incident to see impact by agent role and task type.",
    examples: [
      {
        file: "telemetry/analytics/dashboards/overview.md",
        markdown: `# Overview Dashboard\n\n## Tiles\n- Task success rate (7d)\n- P95 end-to-end latency\n- Cost per successful task\n\n## Breakdowns\n- By agent_role\n- By task_type\n- By repository (when available)`
      },
      {
        file: "telemetry/analytics/dashboards/latency.md",
        markdown: `# Latency Dashboard\n\n## Charts\n- P50/P95 latency over time\n- Slowest steps (context load, tools, validation)\n\n## Notes\n- Compare like-for-like task types\n- Watch for token spikes correlated with latency.`
      },
      {
        file: "telemetry/analytics/dashboards/cost.md",
        markdown: `# Cost Dashboard\n\n## KPIs\n- Token cost per task\n- Tokens in/out distributions\n- Top cost drivers by agent_role\n\n## Guardrails\n- Alert if cost/task increases > 20% week-over-week.`
      }
    ]
  },
  {
    name: "telemetry/analytics/reports/",
    type: "Reports",
    description:
      "Recurring reports that summarize trends, changes, and recommended actions based on standardized queries and KPI definitions.",
    purpose: [
      "Turns dashboards into narrative insight",
      "Captures action items and owners",
      "Creates an auditable history of decisions"
    ],
    contains: [
      "weekly-insights.md",
      "incident-postmortem-metrics.md"
    ],
    useCase:
      "A supervisor agent produces a weekly summary and links it to the tasks backlog with specific follow-ups.",
    examples: [
      {
        file: "telemetry/analytics/reports/weekly-insights.md",
        markdown: `# Weekly Insights\n\n## Highlights\n- Success rate: 98.7% (+0.4pp)\n- P95 latency: 920ms (-11%)\n- Cost per task: $0.014 (+3%)\n\n## Actions\n- Investigate cost increase in \`security-auditor\`\n- Improve caching for context-loading step`
      },
      {
        file: "telemetry/analytics/reports/incident-postmortem-metrics.md",
        markdown: `# Postmortem Metrics Appendix\n\n## Impact window\n2026-05-10 12:05 UTC → 13:20 UTC\n\n## Observed\n- Failure rate peaked at 12.3%\n- P95 latency peaked at 4.2s\n\n## Links\n- Dashboard snapshot\n- Queries used for root cause.`
      }
    ]
  },
  {
    name: "telemetry/analytics/queries/",
    type: "Queries",
    description:
      "Reusable query templates (SQL or log query language) to power dashboards and answer recurring questions consistently.",
    purpose: [
      "Keeps analysis reproducible and reviewable",
      "Avoids ad-hoc query drift for shared KPIs",
      "Speeds up investigation by providing known-good templates"
    ],
    contains: [
      "common-sql.md",
      "funnel-query.md"
    ],
    useCase:
      "A debugging agent uses the funnel query template to see where tasks fail in the execution pipeline.",
    examples: [
      {
        file: "telemetry/analytics/queries/common-sql.md",
        markdown: `# Common SQL Patterns\n\n## Success rate (7d)\n\`\`\`sql\nSELECT\n  date_trunc('day', timestamp) AS day,\n  AVG(CASE WHEN success THEN 1 ELSE 0 END) AS success_rate\nFROM events\nWHERE timestamp >= now() - interval '7 days'\nGROUP BY 1\nORDER BY 1;\n\`\`\``
      },
      {
        file: "telemetry/analytics/queries/funnel-query.md",
        markdown: `# Funnel Query\n\nGoal: measure drop-off across execution stages.\n\nStages:\n1. started\n2. planned\n3. tools_used\n4. validated\n5. completed\n\nOutput: conversion between each stage by task_type.`
      }
    ]
  },
  {
    name: "telemetry/analytics/experiments/",
    type: "Experiments",
    description:
      "A/B test and experiment artifacts: templates, guardrails, and analysis guidance for safe iteration.",
    purpose: [
      "Provides a consistent experiment write-up format",
      "Sets guardrails for safety, cost, and quality",
      "Records results and recommended follow-ups"
    ],
    contains: [
      "ab-template.md",
      "guardrails.md"
    ],
    useCase:
      "A performance-optimizer drafts an experiment to reduce latency and uses guardrails to ensure success rate doesn’t regress.",
    examples: [
      {
        file: "telemetry/analytics/experiments/ab-template.md",
        markdown: `# Experiment: <name>\n\n## Hypothesis\nIf we change <X>, then <metric> improves because <reason>.\n\n## Metrics\n- Primary: P95 latency\n- Guardrails: success rate, cost/task\n\n## Ramp\n- 10% → 50% → 100% with stop conditions.`
      },
      {
        file: "telemetry/analytics/experiments/guardrails.md",
        markdown: `# Guardrails\n\nStop the experiment if any occurs:\n- success rate drops > 1pp\n- cost/task increases > 15%\n- P95 latency increases > 10%\n\n## Monitoring cadence\n- Review every 2 hours during ramp.`
      }
    ]
  },
  {
    name: "telemetry/analytics/segments/",
    type: "Segments",
    description:
      "Segment definitions and cohorting rules to ensure consistent comparisons across users, repos, and task types.",
    purpose: [
      "Defines cohorts and personas used in reporting",
      "Prevents apples-to-oranges comparisons",
      "Documents inclusion/exclusion logic"
    ],
    contains: [
      "personas.md",
      "cohort-definitions.md"
    ],
    useCase:
      "A product agent compares retention for new users vs returning maintainers using the same cohort definitions across reports.",
    examples: [
      {
        file: "telemetry/analytics/segments/personas.md",
        markdown: `# Personas\n\n## Maintainer\n- Runs tasks weekly\n- Owns releases\n\n## Contributor\n- Runs tasks sporadically\n- Focused on isolated fixes\n\n## Evaluator\n- Runs reviews + validation flows.`
      },
      {
        file: "telemetry/analytics/segments/cohort-definitions.md",
        markdown: `# Cohort Definitions\n\n## New user\nFirst successful task within the last 30 days.\n\n## Returning user\nHas at least one successful task older than 30 days.\n\n## Power user\n>= 20 successful tasks in the last 7 days.`
      }
    ]
  }
];
const folderSearchIndex = folderData.map((folder) => ({
  folder,
  searchText: [folder.name, folder.type, folder.description, folder.useCase].join(" ").toLowerCase()
}));

const listNode = document.getElementById("folder-list");
const searchNode = document.getElementById("folder-search");

const titleNode = document.getElementById("folder-title");
const badgeNode = document.getElementById("folder-badge");
const descriptionNode = document.getElementById("folder-description");
const purposeNode = document.getElementById("folder-purpose");
const containsNode = document.getElementById("folder-contains");
const useCaseNode = document.getElementById("folder-use-case");
const previewNode = document.getElementById("markdown-preview");
const exampleFileNode = document.getElementById("example-file");
const chipsNode = document.getElementById("example-chips");

function fillList(node, values) {
  node.innerHTML = "";

  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    node.appendChild(li);
  });
}

function getFolderExamples(folder) {
  if (Array.isArray(folder.examples) && folder.examples.length) {
    return folder.examples;
  }

  if (folder.exampleFile && folder.markdown) {
    return [
      {
        file: folder.exampleFile,
        markdown: folder.markdown
      }
    ];
  }

  return [];
}

function setMarkdownPreview(example) {
  if (!example) {
    previewNode.textContent = "# No sample markdown is configured for this folder yet.";
    exampleFileNode.textContent = "No file selected";
    return;
  }

  previewNode.textContent = example.markdown;
  exampleFileNode.textContent = example.file;
}

function renderExampleChips(folder) {
  const examples = getFolderExamples(folder);
  chipsNode.innerHTML = "";

  if (!examples.length) {
    chipsNode.hidden = true;
    setMarkdownPreview(null);
    return;
  }

  chipsNode.hidden = false;

  const buttons = examples.map((example, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = example.file.split("/").pop();
    button.dataset.index = String(index);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");

    chipsNode.appendChild(button);
    return button;
  });

  function activate(index, options = {}) {
    const example = examples[index];
    if (!example) {
      return;
    }

    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    setMarkdownPreview(example);

    if (options.focus && buttons[index]) {
      buttons[index].focus();
    }
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activate(index));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + buttons.length) % buttons.length;
      activate(nextIndex, { focus: true });
    });
  });

  activate(0);
}

function renderDetails(folder) {
  titleNode.textContent = folder.name;
  badgeNode.textContent = folder.type;
  descriptionNode.textContent = folder.description;
  fillList(purposeNode, folder.purpose);
  fillList(containsNode, folder.contains);
  useCaseNode.textContent = folder.useCase;
  renderExampleChips(folder);
}

function renderFolderButtons(items) {
  listNode.innerHTML = "";

  items.forEach((folder) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "folder-button";
    button.textContent = folder.name;
    button.dataset.folder = folder.name;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");

    button.addEventListener("click", () => {
      document.querySelectorAll(".folder-button").forEach((candidate) => {
        candidate.classList.remove("active");
        candidate.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderDetails(folder);
    });

    listNode.appendChild(button);
  });

  const firstButton = listNode.querySelector(".folder-button");
  if (firstButton) {
    firstButton.classList.add("active");
    firstButton.setAttribute("aria-selected", "true");
    const activeFolder = items.find((item) => item.name === firstButton.dataset.folder);
    if (activeFolder) {
      renderDetails(activeFolder);
    }
  }
}

function applyFilter() {
  const query = searchNode.value.trim().toLowerCase();
  const filtered = folderSearchIndex
    .filter((entry) => entry.searchText.includes(query))
    .map((entry) => entry.folder);

  if (!filtered.length) {
    listNode.innerHTML = "";
    const emptyState = document.createElement("p");
    emptyState.className = "muted";
    emptyState.setAttribute("role", "status");
    emptyState.setAttribute("aria-live", "polite");
    emptyState.textContent = "No folders match your search.";
    listNode.appendChild(emptyState);
    return;
  }

  renderFolderButtons(filtered);
}

searchNode.addEventListener("input", applyFilter);

renderFolderButtons(folderData);
