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

function fillList(node, values) {
  node.innerHTML = "";

  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    node.appendChild(li);
  });
}

function renderDetails(folder) {
  titleNode.textContent = folder.name;
  badgeNode.textContent = folder.type;
  descriptionNode.textContent = folder.description;
  fillList(purposeNode, folder.purpose);
  fillList(containsNode, folder.contains);
  useCaseNode.textContent = folder.useCase;
  previewNode.textContent = folder.markdown;
  exampleFileNode.textContent = folder.exampleFile;
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
