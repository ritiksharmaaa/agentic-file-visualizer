const aiWorkspaceDisclosure = `.ai/
│
├── README.md
├── registry.json
├── settings.json
├── conventions.md
├── glossary.md
├── routing-rules.md
├── orchestration-engine.md
├── context-loading.md
├── security-policy.md
├── memory-policy.md
├── token-budget.md
├── model-routing.md
├── agent-selection.md
├── execution-policy.md
├── fallback-policy.md
├── retry-policy.md
├── observability.md
├── audit-policy.md
│
├── global/
│   ├── user-preferences.md
│   ├── engineering-philosophy.md
│   ├── shell-preferences.md
│   ├── editor-preferences.md
│   ├── coding-style.md
│   ├── naming-conventions.md
│   ├── response-style.md
│   ├── git-preferences.md
│   ├── commit-style.md
│   ├── stack-preferences.md
│   ├── architecture-bias.md
│   ├── testing-preferences.md
│   ├── debug-strategy.md
│   ├── productivity-rules.md
│   └── anti-patterns.md
│
├── shared/
│   ├── architecture.md
│   ├── stack.md
│   ├── coding-standards.md
│   ├── backend-standards.md
│   ├── frontend-standards.md
│   ├── database-standards.md
│   ├── api-standards.md
│   ├── auth-standards.md
│   ├── caching-strategy.md
│   ├── event-driven-patterns.md
│   ├── scaling-guidelines.md
│   ├── testing-guidelines.md
│   ├── security-guidelines.md
│   ├── deployment-guidelines.md
│   ├── observability-guidelines.md
│   ├── logging-guidelines.md
│   ├── monitoring-guidelines.md
│   ├── error-handling.md
│   ├── validation-rules.md
│   ├── accessibility.md
│   ├── performance-rules.md
│   ├── ui-patterns.md
│   ├── animation-guidelines.md
│   ├── state-management.md
│   ├── design-system.md
│   ├── file-structure.md
│   ├── folder-conventions.md
│   ├── branch-strategy.md
│   ├── release-process.md
│   ├── ci-cd.md
│   ├── infrastructure.md
│   ├── docker-guidelines.md
│   ├── kubernetes-guidelines.md
│   ├── queue-processing.md
│   ├── websocket-patterns.md
│   ├── streaming-architecture.md
│   ├── recommendation-system.md
│   ├── video-pipeline.md
│   ├── payment-flow.md
│   ├── rate-limiting.md
│   ├── indexing-strategy.md
│   ├── search-architecture.md
│   ├── seo-guidelines.md
│   ├── data-retention.md
│   ├── backup-policy.md
│   ├── incident-response.md
│   ├── feature-flag-policy.md
│   ├── package-management.md
│   └── dependency-policy.md
│
├── agents/
│   │
│   ├── backend-architect/
│   │   ├── agent.md
│   │   ├── identity.md
│   │   ├── mission.md
│   │   ├── personality.md
│   │   ├── behavior.md
│   │   ├── principles.md
│   │   ├── constraints.md
│   │   ├── workflow.md
│   │   ├── execution-plan.md
│   │   ├── reasoning-style.md
│   │   ├── decision-tree.md
│   │   ├── escalation-policy.md
│   │   ├── retry-policy.md
│   │   ├── failure-handling.md
│   │   ├── anti-patterns.md
│   │   ├── checklists.md
│   │   ├── skills.md
│   │   ├── capabilities.md
│   │   ├── memory.md
│   │   ├── short-term-memory.md
│   │   ├── long-term-memory.md
│   │   ├── episodic-memory.md
│   │   ├── semantic-memory.md
│   │   ├── tools.json
│   │   ├── permissions.json
│   │   ├── environment.json
│   │   ├── dependencies.json
│   │   ├── models.json
│   │   ├── context-rules.md
│   │   ├── retrieval-policy.md
│   │   ├── chunking-policy.md
│   │   ├── ranking-policy.md
│   │   ├── summarization-policy.md
│   │   ├── prompts/
│   │   │   ├── planning.md
│   │   │   ├── implementation.md
│   │   │   ├── refactor.md
│   │   │   ├── debugging.md
│   │   │   ├── optimization.md
│   │   │   ├── migration.md
│   │   │   ├── architecture-review.md
│   │   │   ├── code-review.md
│   │   │   ├── testing.md
│   │   │   ├── deployment.md
│   │   │   ├── documentation.md
│   │   │   └── emergency-fix.md
│   │   │
│   │   ├── scripts/
│   │   │   ├── bootstrap.sh
│   │   │   ├── analyze-repo.sh
│   │   │   ├── lint-fix.sh
│   │   │   ├── run-tests.sh
│   │   │   ├── generate-types.sh
│   │   │   ├── dependency-audit.sh
│   │   │   ├── docker-build.sh
│   │   │   ├── deploy.sh
│   │   │   ├── rollback.sh
│   │   │   ├── cleanup.sh
│   │   │   ├── benchmark.sh
│   │   │   ├── migration.sh
│   │   │   ├── backup.sh
│   │   │   └── profiling.sh
│   │   │
│   │   ├── knowledge/
│   │   │   ├── backend-patterns.md
│   │   │   ├── distributed-systems.md
│   │   │   ├── event-sourcing.md
│   │   │   ├── cqrs.md
│   │   │   ├── caching.md
│   │   │   ├── scaling.md
│   │   │   ├── database-indexing.md
│   │   │   ├── postgres.md
│   │   │   ├── redis.md
│   │   │   ├── kafka.md
│   │   │   ├── websocket-systems.md
│   │   │   ├── auth-systems.md
│   │   │   ├── oauth.md
│   │   │   ├── queue-processing.md
│   │   │   ├── observability.md
│   │   │   ├── microservices.md
│   │   │   ├── monoliths.md
│   │   │   ├── api-versioning.md
│   │   │   ├── grpc.md
│   │   │   ├── graphql.md
│   │   │   ├── streaming.md
│   │   │   └── rate-limiting.md
│   │   │
│   │   ├── sessions/
│   │   │   ├── current-session.md
│   │   │   ├── previous-session.md
│   │   │   ├── unresolved-issues.md
│   │   │   └── completed-tasks.md
│   │   │
│   │   ├── outputs/
│   │   │   ├── plans/
│   │   │   ├── reports/
│   │   │   ├── diffs/
│   │   │   ├── summaries/
│   │   │   └── reviews/
│   │   │
│   │   └── logs/
│   │       ├── execution.log
│   │       ├── reasoning.log
│   │       ├── errors.log
│   │       └── audit.log
│   │
│   ├── frontend-designer/
│   ├── devops-agent/
│   ├── security-auditor/
│   ├── performance-optimizer/
│   ├── database-engineer/
│   ├── ai-researcher/
│   ├── product-strategist/
│   ├── ui-ux-agent/
│   ├── code-reviewer/
│   ├── debugging-agent/
│   ├── documentation-agent/
│   ├── testing-agent/
│   ├── accessibility-agent/
│   ├── seo-agent/
│   ├── deployment-agent/
│   ├── infra-agent/
│   ├── analytics-agent/
│   ├── recommendation-agent/
│   ├── streaming-agent/
│   ├── monetization-agent/
│   └── orchestration-agent/
│
├── orchestration/
│   ├── agent-routing.md
│   ├── execution-graph.md
│   ├── delegation-rules.md
│   ├── coordination-policy.md
│   ├── collaboration-rules.md
│   ├── parallelism.md
│   ├── load-balancing.md
│   ├── conflict-resolution.md
│   ├── fallback-strategy.md
│   ├── task-distribution.md
│   ├── communication-protocol.md
│   ├── state-machine.md
│   ├── supervisor-agent.md
│   ├── planner-agent.md
│   ├── evaluator-agent.md
│   ├── critic-agent.md
│   └── recovery-agent.md
│
├── memory/
│   ├── project-memory.md
│   ├── engineering-decisions.md
│   ├── architecture-decisions.md
│   ├── known-bugs.md
│   ├── recurring-issues.md
│   ├── lessons-learned.md
│   ├── optimization-history.md
│   ├── migration-history.md
│   ├── release-notes.md
│   ├── incident-history.md
│   └── retrospectives.md
│
├── tasks/
│   ├── active/
│   ├── planned/
│   ├── backlog/
│   ├── completed/
│   ├── blocked/
│   ├── archived/
│   ├── feature-development/
│   ├── bug-fixes/
│   ├── refactors/
│   ├── migrations/
│   ├── scaling/
│   ├── deployments/
│   └── research/
│
├── sessions/
│   ├── active/
│   ├── archived/
│   ├── shared-context/
│   ├── context-snapshots/
│   ├── checkpoints/
│   └── handoffs/
│
├── workflows/
│   ├── feature-development.md
│   ├── bug-investigation.md
│   ├── code-review.md
│   ├── incident-response.md
│   ├── production-debugging.md
│   ├── deployment.md
│   ├── rollback.md
│   ├── database-migration.md
│   ├── scaling.md
│   ├── security-audit.md
│   ├── optimization.md
│   ├── architecture-review.md
│   ├── onboarding.md
│   ├── release-cycle.md
│   └── emergency-recovery.md
│
├── prompts/
│   ├── planning/
│   ├── implementation/
│   ├── debugging/
│   ├── optimization/
│   ├── architecture/
│   ├── migration/
│   ├── deployment/
│   ├── testing/
│   ├── review/
│   └── brainstorming/
│
├── scripts/
│   ├── bootstrap/
│   ├── repo-analysis/
│   ├── indexing/
│   ├── linting/
│   ├── testing/
│   ├── deployment/
│   ├── benchmarking/
│   ├── profiling/
│   ├── monitoring/
│   ├── migrations/
│   ├── backup/
│   ├── recovery/
│   └── cleanup/
│
├── knowledge/
│   ├── backend/
│   ├── frontend/
│   ├── devops/
│   ├── security/
│   ├── ai/
│   ├── distributed-systems/
│   ├── streaming/
│   ├── payments/
│   ├── databases/
│   ├── networking/
│   ├── performance/
│   ├── scaling/
│   ├── architecture/
│   └── product/
│
└── telemetry/
    ├── usage/
    ├── performance/
    ├── token-consumption/
    ├── execution-history/
    ├── failures/
    ├── latency/
    ├── traces/
    └── analytics/`;

function ensureTrailingSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}

function getParentDirectory(path) {
  const normalized = path.endsWith("/") ? path.slice(0, -1) : path;
  const lastSlash = normalized.lastIndexOf("/");
  if (lastSlash === -1) {
    return null;
  }
  return ensureTrailingSlash(normalized.slice(0, lastSlash + 1));
}

function getBaseName(path) {
  const normalized = path.endsWith("/") ? path.slice(0, -1) : path;
  const parts = normalized.split("/");
  return parts[parts.length - 1] || normalized;
}

function parseWorkspaceDisclosure(treeText) {
  const directories = new Set([ensureTrailingSlash(".ai")]);
  const files = new Set();
  const stack = [ensureTrailingSlash(".ai")];

  treeText.split("\n").forEach((line) => {
    const match = line.match(
      /^(?<indent>(?:│   |    )*)(?:├──|└──)\s+(?<name>.+)$/
    );
    if (!match || !match.groups) {
      return;
    }

    const depth = Math.floor(match.groups.indent.length / 4);
    const name = match.groups.name.trim();
    const parent = stack[depth] ?? ensureTrailingSlash(".ai");
    const fullPath = `${parent}${name}`;

    if (name.endsWith("/")) {
      const dirPath = ensureTrailingSlash(fullPath);
      directories.add(dirPath);
      stack[depth + 1] = dirPath;
      return;
    }

    files.add(fullPath);
  });

  return {
    directories: Array.from(directories),
    files: Array.from(files)
  };
}

const aiWorkspace = parseWorkspaceDisclosure(aiWorkspaceDisclosure);

const curatedFolderDetails = {
  ".ai/": {
    type: "Root",
    description:
      "The platform-neutral root context package. It centralizes rules, operating docs, and agent orchestration files reused by Copilot, Codex, and Claude workflows.",
    purpose: [
      "Defines the overall operating contract for agentic coding",
      "Keeps standards, policies, and runbooks in one discoverable location",
      "Acts as a portable template teams can adapt per platform"
    ],
    useCase:
      "Teams copy this root package and tune routing + policies while preserving the same conceptual structure."
  },
  ".ai/global/": {
    type: "Preference Layer",
    description:
      "Cross-project preference guides: coding style, naming, git habits, engineering philosophy, and response behavior.",
    purpose: [
      "Captures long-lived human/team preferences",
      "Reduces repetitive instruction in every task",
      "Improves consistency across generated code and communication"
    ],
    useCase:
      "Before writing code, agents load this folder to align with formatting, naming, and collaboration expectations."
  },
  ".ai/shared/": {
    type: "Standards Library",
    description:
      "Reusable architecture and engineering standards that apply across multiple agents and domains.",
    purpose: [
      "Houses canonical standards for backend, frontend, API, testing, and security",
      "Provides a single reference set for large multi-agent workflows",
      "Prevents conflicting implementation patterns"
    ],
    useCase:
      "When a backend and UI agent collaborate, both can rely on the same shared standards to keep output compatible."
  },
  ".ai/agents/": {
    type: "Agent Blueprints",
    description:
      "Role-based definitions for specialized agents (backend, UI/UX, security, testing, deployment, etc.).",
    purpose: [
      "Defines each agent's mission, constraints, and workflow",
      "Separates responsibilities to support parallel execution",
      "Allows targeted prompts and capability boundaries"
    ],
    useCase:
      "A supervisor routes work to specialized agents (e.g. database-engineer, security-auditor) in parallel."
  },
  ".ai/orchestration/": {
    type: "Coordination Engine",
    description:
      "Rules for routing, delegation, conflict resolution, and recovery between multiple agents.",
    purpose: [
      "Controls how tasks are split and assigned",
      "Defines collaboration protocol and state transitions",
      "Ensures graceful fallback when an agent fails"
    ],
    useCase:
      "Planner/supervisor/evaluator flows live here and define how parallel agent work stays coordinated."
  },
  ".ai/memory/": {
    type: "Project Memory",
    description:
      "Persistent project knowledge: decisions, incidents, known bugs, release notes, and lessons learned.",
    purpose: [
      "Preserves context between sessions",
      "Prevents repeated mistakes",
      "Supports faster onboarding for new contributors or agents"
    ],
    useCase:
      "Before changing risky areas, agents review known bugs and prior incidents to avoid repeating regressions."
  },
  ".ai/tasks/": {
    type: "Task Backlog",
    description:
      "Work tracking directories grouped by task lifecycle: active, planned, backlog, completed, blocked, archived.",
    purpose: [
      "Keeps tasks organized in a predictable lifecycle",
      "Allows agents to pick up prioritized work",
      "Stores artifacts and acceptance criteria close to the task context"
    ],
    useCase:
      "A planner prioritizes tasks from backlog to active, then moves outputs to completed after validation."
  },
  ".ai/sessions/": {
    type: "Session History",
    description:
      "Session snapshots and handoffs capturing what context was loaded and what work was performed over time.",
    purpose: [
      "Keeps per-session context auditable",
      "Makes handoffs between agents repeatable",
      "Helps debug why a run produced a given result"
    ],
    useCase:
      "When an agent needs continuity, it reads the latest active session plus shared-context snapshots."
  },
  ".ai/workflows/": {
    type: "Runbooks",
    description:
      "Step-by-step process documentation for recurring activities like debugging, release, rollback, and audits.",
    purpose: [
      "Standardizes operations across the team",
      "Reduces execution ambiguity in high-pressure scenarios",
      "Supports repeatable quality for releases and incidents"
    ],
    useCase:
      "During incidents, runbooks guide consistent actions and communication cadence."
  },
  ".ai/prompts/": {
    type: "Prompt Toolkit",
    description:
      "Curated prompt templates grouped by task type to steer agent behavior consistently.",
    purpose: [
      "Improves output quality with reusable prompt patterns",
      "Speeds up execution for common engineering tasks",
      "Keeps prompting style consistent across contributors"
    ],
    useCase:
      "Teams keep prompting style consistent by reusing the same prompt shapes across tasks."
  },
  ".ai/scripts/": {
    type: "Automation Scripts",
    description:
      "Executable helpers for bootstrap, linting, testing, benchmarking, deployment, and operational maintenance.",
    purpose: [
      "Automates repetitive workflows",
      "Reduces manual error in setup and release tasks",
      "Encodes operational know-how into reusable commands"
    ],
    useCase:
      "CI and agents call scripts here to standardize quality gates and operational tasks."
  },
  ".ai/knowledge/": {
    type: "Domain References",
    description:
      "Topic-indexed technical references used by agents when generating solutions across stacks and domains.",
    purpose: [
      "Supplies just-in-time domain context",
      "Improves technical depth in generated plans and code",
      "Supports multi-discipline work (security, scaling, networking, AI)"
    ],
    useCase:
      "Before proposing a design, agents read the most relevant domain folder to ground trade-offs."
  },
  ".ai/telemetry/": {
    type: "Observability Data",
    description:
      "Operational signals and historical metrics for usage, latency, failures, traces, and token consumption.",
    purpose: [
      "Measures system health and efficiency",
      "Provides evidence for optimization decisions",
      "Supports incident diagnosis with historical data"
    ],
    useCase:
      "A performance agent correlates latency spikes with token consumption and failure trends."
  },
  ".ai/telemetry/analytics/": {
    type: "Behavior Analytics",
    description:
      "Analytics governance: event schemas, dashboards, reports, experiments, and guardrails for turning telemetry into decisions.",
    purpose: [
      "Defines tracked events and how they map to KPIs",
      "Standardizes dashboards and recurring reports",
      "Sets guardrails for privacy, data quality, and interpretation"
    ],
    useCase:
      "A product agent reviews KPI definitions and retention notes, then uses standard queries to validate hypotheses."
  }
};

const curatedMarkdownSamples = {
  ".ai/README.md": `# Agentic Workspace\n\nThis folder is the source-of-truth for agent behavior.\n\n## Key outcomes\n- Consistent execution policy\n- Shared language across agents\n- Easy portability between AI coding platforms`,
  ".ai/global/coding-style.md": `# Coding Style\n\n## JavaScript\n- Use const by default\n- Prefer small pure functions\n- Keep UI copy concise and user-centered\n\n## Commits\n- Write imperative commit messages\n- Scope each commit to one clear purpose`,
  ".ai/shared/security-guidelines.md": `# Security Guidelines\n\n## Input Safety\n- Validate all incoming payloads\n- Sanitize untrusted content before rendering\n\n## Secrets\n- Never commit credentials\n- Use runtime environment injection`,
  ".ai/orchestration/execution-graph.md": `# Execution Graph\n\nStart -> Plan -> Delegate -> Validate -> Merge\n\n## Failure Path\nIf validation fails: route to Debugging Agent -> re-run tests -> retry merge`,
  ".ai/memory/known-bugs.md": `# Known Bugs\n\n## Issue: Search UI loses focus\n- Symptom: input caret jumps when folder list rerenders\n- Workaround: debounce search updates\n\n## Issue: Missing telemetry folder\n- Symptom: agents can't discover analytics schema\n- Fix: ensure telemetry/ is included in context loading`,
  ".ai/workflows/incident-response.md": `# Incident Response\n\n1. Confirm severity\n2. Assign incident commander\n3. Stabilize production\n4. Communicate updates every 15 minutes\n5. Publish postmortem`,
  ".ai/telemetry/analytics/README.md": `# telemetry/analytics\n\nThis folder standardizes how we turn raw telemetry into decisions.\n\n## Contents\n- Event taxonomy + schemas\n- KPI definitions\n- Dashboards + recurring reports\n- Experiments + interpretation guardrails`,
  ".ai/telemetry/analytics/events-schema.md": `# Events Schema\n\n## Naming\n- Use dot notation: \`agent.run.started\`\n- Prefer noun + verb + outcome\n\n## Required fields\n- \`timestamp\` (ISO)\n- \`session_id\`\n- \`agent_role\`\n- \`task_type\`\n- \`success\` (boolean)\n\n## Optional fields\n- \`latency_ms\`\n- \`tokens_in\`, \`tokens_out\`\n- \`error_code\``,
  ".ai/telemetry/analytics/kpi-definitions.md": `# KPI Definitions\n\n## Success Rate\nSuccessful tasks / total tasks over a rolling 7-day window.\n\n## Cost per Task\n(token_cost_usd + infra_cost_usd) / successful tasks.\n\n## Time to First Useful Output\nP50 and P95 of elapsed seconds from task start to first validated artifact.`,
  ".ai/telemetry/analytics/data-quality.md": `# Data Quality Checks\n\n- Reject events missing required fields\n- Monitor schema drift (new/removed keys)\n- Deduplicate by (session_id, event_id)\n- Alert on late-arriving events (> 24h)\n\n## Daily gate\nIf null-rate for \`success\` > 0.1%: block KPI rollups.`,
  ".ai/telemetry/analytics/privacy.md": `# Privacy & PII\n\n- Never log secrets, tokens, or raw file contents\n- Hash stable identifiers when possible\n- Redact paths when they can reveal user info\n\n## Retention\n- Raw events: 30 days\n- Aggregates: 18 months\n\n## Access\n- Role-based access to raw events\n- Dashboards are safe-by-default (aggregated).`,
  ".ai/telemetry/analytics/retention.md": `# Retention\n\n## Definitions\n- D0: first day active\n- D7/D30: returned and produced a successful task\n\n## Cohort cut\n- Cohort by first successful task\n- Exclude internal test traffic\n\n## Leading indicators\n- Save rate (exports per session)\n- Return-to-fix (reruns within 24h).`,
  ".ai/telemetry/analytics/anomaly-detection.md": `# Anomaly Detection\n\n## Signals\n- P95 latency\n- failure rate\n- cost per task\n\n## Rules\n- Trigger when z-score > 3 over 14-day baseline\n- Suppress if traffic < minimum threshold\n\n## Response\n- Create incident ticket\n- Attach top contributing agents + tasks\n- Link queries used for diagnosis.`,
  ".ai/telemetry/analytics/dashboards/overview.md": `# Overview Dashboard\n\n## Tiles\n- Task success rate (7d)\n- P95 end-to-end latency\n- Cost per successful task\n\n## Breakdowns\n- By agent_role\n- By task_type\n- By repository (when available)`,
  ".ai/telemetry/analytics/dashboards/latency.md": `# Latency Dashboard\n\n## Charts\n- P50/P95 latency over time\n- Slowest steps (context load, tools, validation)\n\n## Notes\n- Compare like-for-like task types\n- Watch for token spikes correlated with latency.`,
  ".ai/telemetry/analytics/dashboards/cost.md": `# Cost Dashboard\n\n## KPIs\n- Token cost per task\n- Tokens in/out distributions\n- Top cost drivers by agent_role\n\n## Guardrails\n- Alert if cost/task increases > 20% week-over-week.`,
  ".ai/telemetry/analytics/reports/weekly-insights.md": `# Weekly Insights\n\n## Highlights\n- Success rate: 98.7% (+0.4pp)\n- P95 latency: 920ms (-11%)\n- Cost per task: $0.014 (+3%)\n\n## Actions\n- Investigate cost increase in \`security-auditor\`\n- Improve caching for context-loading step`,
  ".ai/telemetry/analytics/reports/incident-postmortem-metrics.md": `# Postmortem Metrics Appendix\n\n## Impact window\n2026-05-10 12:05 UTC → 13:20 UTC\n\n## Observed\n- Failure rate peaked at 12.3%\n- P95 latency peaked at 4.2s\n\n## Links\n- Dashboard snapshot\n- Queries used for root cause.`,
  ".ai/telemetry/analytics/queries/common-sql.md": `# Common SQL Patterns\n\n## Success rate (7d)\n\`\`\`sql\nSELECT\n  date_trunc('day', timestamp) AS day,\n  AVG(CASE WHEN success THEN 1 ELSE 0 END) AS success_rate\nFROM events\nWHERE timestamp >= now() - interval '7 days'\nGROUP BY 1\nORDER BY 1;\n\`\`\``,
  ".ai/telemetry/analytics/queries/funnel-query.md": `# Funnel Query\n\nGoal: measure drop-off across execution stages.\n\nStages:\n1. started\n2. planned\n3. tools_used\n4. validated\n5. completed\n\nOutput: conversion between each stage by task_type.`,
  ".ai/telemetry/analytics/experiments/ab-template.md": `# Experiment: <name>\n\n## Hypothesis\nIf we change <X>, then <metric> improves because <reason>.\n\n## Metrics\n- Primary: P95 latency\n- Guardrails: success rate, cost/task\n\n## Ramp\n- 10% → 50% → 100% with stop conditions.`,
  ".ai/telemetry/analytics/experiments/guardrails.md": `# Guardrails\n\nStop the experiment if any occurs:\n- success rate drops > 1pp\n- cost/task increases > 15%\n- P95 latency increases > 10%\n\n## Monitoring cadence\n- Review every 2 hours during ramp.`,
  ".ai/telemetry/analytics/segments/personas.md": `# Personas\n\n## Maintainer\n- Runs tasks weekly\n- Owns releases\n\n## Contributor\n- Runs tasks sporadically\n- Focused on isolated fixes\n\n## Evaluator\n- Runs reviews + validation flows.`,
  ".ai/telemetry/analytics/segments/cohort-definitions.md": `# Cohort Definitions\n\n## New user\nFirst successful task within the last 30 days.\n\n## Returning user\nHas at least one successful task older than 30 days.\n\n## Power user\n>= 20 successful tasks in the last 7 days.`
};

function createGenericMarkdownSample(filePath) {
  const baseName = filePath.split("/").pop() || filePath;
  return `# ${baseName}\n\nThis is a sample of \`${filePath}\` in the \`.ai/\` workspace.\n\n## What it’s for\n- Capture stable guidance for agents and humans\n- Keep execution consistent across tools and repos\n- Reduce repeated instructions during tasks\n\n## Typical sections\n- Scope\n- Rules\n- Examples\n- Edge cases\n- Review checklist`;
}

function getImmediateChildren(dirPath, workspace) {
  const normalizedDir = ensureTrailingSlash(dirPath);
  const childDirectories = workspace.directories
    .filter((dir) => dir !== normalizedDir && getParentDirectory(dir) === normalizedDir)
    .map((dir) => `${getBaseName(dir)}/`);

  const childFiles = workspace.files
    .filter((file) => getParentDirectory(file) === normalizedDir)
    .map((file) => file.split("/").pop() || file);

  childDirectories.sort((a, b) => a.localeCompare(b));
  childFiles.sort((a, b) => a.localeCompare(b));
  return [...childDirectories, ...childFiles];
}

function getMarkdownExamplesForDirectory(dirPath, workspace) {
  const normalizedDir = ensureTrailingSlash(dirPath);
  const markdownFiles = workspace.files
    .filter(
      (file) =>
        getParentDirectory(file) === normalizedDir &&
        file.toLowerCase().endsWith(".md")
    )
    .sort((a, b) => a.localeCompare(b));

  if (!markdownFiles.length) {
    const exampleFile = `${normalizedDir}README.md (example)`;
    return [
      {
        file: exampleFile,
        markdown: `# ${getBaseName(normalizedDir) || ".ai"}\n\nThis is an example README for \`${normalizedDir}\`.\n\n## What you’ll find here\n- Folder-specific context files and subfolders\n- Policies or runbooks that agents load during tasks\n\n## How agents use it\n1. Discover relevant docs quickly\n2. Load the smallest useful subset into context\n3. Apply rules consistently while coding\n`
      }
    ];
  }

  return markdownFiles.map((filePath) => ({
    file: filePath,
    markdown: curatedMarkdownSamples[filePath] ?? createGenericMarkdownSample(filePath)
  }));
}

function buildFolderData(workspace) {
  const sortedDirectories = [...workspace.directories].sort((a, b) => {
    const depthA = a.split("/").length;
    const depthB = b.split("/").length;
    if (depthA !== depthB) {
      return depthA - depthB;
    }
    return a.localeCompare(b);
  });

  return sortedDirectories.map((dirPath) => {
    const normalizedDir = ensureTrailingSlash(dirPath);
    const curated = curatedFolderDetails[normalizedDir];

    return {
      name: normalizedDir,
      label: normalizedDir === ".ai/" ? ".ai/" : `${getBaseName(normalizedDir)}/`,
      type: curated?.type ?? "Folder",
      description:
        curated?.description ??
        `A folder inside \`.ai/\` at \`${normalizedDir}\`. Select it to see nested folders and example markdown.`,
      purpose:
        curated?.purpose ?? [
          "Organizes related context files",
          "Keeps agent guidance discoverable and reusable",
          "Supports consistent execution across tasks"
        ],
      contains: getImmediateChildren(normalizedDir, workspace),
      useCase:
        curated?.useCase ??
        "Browse this folder to find the most relevant docs before starting work, then load only what you need into context.",
      examples: getMarkdownExamplesForDirectory(normalizedDir, workspace)
    };
  });
}

const folderData = buildFolderData(aiWorkspace);
const folderByName = new Map(folderData.map((folder) => [folder.name, folder]));
const folderSearchIndex = folderData.map((folder) => ({
  folder,
  searchText: [folder.name, folder.label, folder.type, folder.description, folder.useCase]
    .join(" ")
    .toLowerCase()
}));

function buildDirectoryChildrenMap(directories) {
  const map = new Map();
  directories.forEach((dir) => {
    const parent = getParentDirectory(dir);
    if (!parent) {
      return;
    }
    if (!map.has(parent)) {
      map.set(parent, []);
    }
    map.get(parent).push(dir);
  });

  map.forEach((children, parent) => {
    children.sort((a, b) => a.localeCompare(b));
    map.set(parent, children);
  });

  return map;
}

const directoryChildren = buildDirectoryChildrenMap(aiWorkspace.directories);

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

let activeFolderName = folderByName.has(".ai/") ? ".ai/" : folderData[0]?.name;
const expandedFolders = new Set([ensureTrailingSlash(".ai")]);

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
  fillList(purposeNode, folder.purpose ?? []);
  fillList(containsNode, folder.contains ?? []);
  useCaseNode.textContent = folder.useCase ?? "";
  renderExampleChips(folder);
}

function setActiveFolder(folderName) {
  const folder = folderByName.get(folderName);
  if (!folder) {
    return;
  }
  activeFolderName = folderName;
  renderDetails(folder);
}

function renderTreeExplorer() {
  listNode.innerHTML = "";

  const rootFolder = folderByName.get(".ai/") ?? folderData[0];
  if (!rootFolder) {
    return;
  }

  const rows = [];

  function walk(dir, depth) {
    rows.push({ dir, depth });
    const isExpanded = expandedFolders.has(dir);
    if (!isExpanded) {
      return;
    }
    const children = directoryChildren.get(dir) ?? [];
    children.forEach((childDir) => walk(childDir, depth + 1));
  }

  walk(rootFolder.name, 0);

  rows.forEach(({ dir, depth }) => {
    const folder = folderByName.get(dir);
    if (!folder) {
      return;
    }

    const row = document.createElement("div");
    row.className = "tree-row";
    row.style.paddingLeft = `${depth * 14}px`;

    const children = directoryChildren.get(dir) ?? [];
    const hasChildren = children.length > 0;
    const isExpanded = expandedFolders.has(dir);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "tree-toggle";
    toggle.textContent = hasChildren ? (isExpanded ? "▾" : "▸") : "•";
    toggle.disabled = !hasChildren;
    toggle.setAttribute(
      "aria-label",
      hasChildren ? (isExpanded ? "Collapse folder" : "Expand folder") : "Folder"
    );

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!hasChildren) {
        return;
      }
      if (expandedFolders.has(dir)) {
        expandedFolders.delete(dir);
      } else {
        expandedFolders.add(dir);
      }
      renderExplorer();
    });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "folder-button tree-item";
    button.textContent = folder.label;
    button.dataset.folder = folder.name;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");

    button.addEventListener("click", () => {
      setActiveFolder(folder.name);
      renderExplorer();
    });

    if (activeFolderName === folder.name) {
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
    }

    row.appendChild(toggle);
    row.appendChild(button);
    listNode.appendChild(row);
  });

  if (!activeFolderName) {
    activeFolderName = rootFolder.name;
    renderDetails(rootFolder);
    renderExplorer();
  } else if (folderByName.has(activeFolderName)) {
    renderDetails(folderByName.get(activeFolderName));
  }
}

function renderSearchExplorer(items) {
  listNode.innerHTML = "";

  items.forEach((folder) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "folder-button";
    button.textContent = folder.name;
    button.dataset.folder = folder.name;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", "false");

    if (activeFolderName === folder.name) {
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
    }

    button.addEventListener("click", () => {
      setActiveFolder(folder.name);
      renderExplorer();
    });

    listNode.appendChild(button);
  });
}

function renderExplorer() {
  const query = searchNode.value.trim().toLowerCase();
  if (!query) {
    renderTreeExplorer();
    return;
  }

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

  renderSearchExplorer(filtered);
}

searchNode.addEventListener("input", renderExplorer);

if (activeFolderName && folderByName.has(activeFolderName)) {
  renderDetails(folderByName.get(activeFolderName));
}

renderExplorer();
