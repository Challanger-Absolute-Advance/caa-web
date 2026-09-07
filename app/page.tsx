"use client";
import { useState } from "react";

const updates = [
  {
    date: "7 Sep 2026",
    title: "Dorchester Engine System — Gen Ix50",
    summary: "Second incremental update to the Generation I engine. Gen Ix50 expands language support to six languages, grows the MCP tool surface from 4 to 10 tools, and updates the OpenKrak landing page to reflect current capabilities.",
    changes: [
      { type: "Added", text: "Multi-language support. The DeepStrike pipeline now processes Python (.py), Go (.go), Rust (.rs), Java (.java), and C# (.cs) in addition to TypeScript and JavaScript. Two new modules introduced: polyglotSymbolExtractor.ts (regex-based function, class, method, and type extraction per language) and polyglotDependencyResolver.ts (import/use/from statement extraction per language). TS/JS continues to use the AST-based path for higher accuracy; all other languages use the regex path." },
      { type: "Added", text: "Language breakdown reporting. primary_language and languages[] fields in the analysis output are now computed dynamically from actual file extension distribution across the scanned repository. Previously hardcoded to TypeScript 100%." },
      { type: "Added", text: "File discovery extended to all 6 supported languages. Extensions added: .py, .go, .rs, .java, .cs. Ignore patterns added for each: __pycache__, .venv, venv (Python); vendor (Go); target (Rust); bin, obj, .gradle (Java/C#)." },
      { type: "Added", text: "get_topology tool. Returns project type (monolith/monorepo), detected framework, language breakdown with percentages, all entry points, module list, and architectural layers. Use to orient to an unfamiliar codebase before reading any files." },
      { type: "Added", text: "get_findings tool. Returns structural findings filterable by severity (critical/high/medium/low/info) and type (dead_code/missing_symbol/circular_dependency/god_object/coupling_issue/security). Sortable, capped at configurable limit." },
      { type: "Added", text: "get_file_dependencies tool. Returns all imports made by a specific file and all files that import it. Deduplicates edges. Use before modifying any file to understand its full dependency context." },
      { type: "Added", text: "get_dead_code tool. Returns dead/unused export findings split into genuine (actionable) and noise-suppressed (false positive) categories. Suppressed findings include their Rule 4 suppression reason." },
      { type: "Added", text: "get_cycles tool. Returns all circular dependency cycles with the complete file path sequence of each cycle. Flags runtime risk from barrel import order dependencies." },
      { type: "Added", text: "get_security tool. Returns security-pattern findings: hardcoded secrets, sensitive key patterns, dangerous shell commands, and critical-severity issues. Intended for pre-deployment and pre-review gates." },
      { type: "Changed", text: "MCP tool count: 4 to 10. All 6 new tools are available under the same npx openkrak-mcp installation with no config change required." },
      { type: "Changed", text: "OpenKrak landing page updated. Tools reference section updated from 4 to 10 tools with descriptions and examples. Stats section updated to reflect Gen Ix25 benchmark figures (70-92% token reduction). Language support listed in hero description. Free plan feature updated to 'All 10 MCP tools'." },
      { type: "Metric", text: "openkrak-mcp version bumped to v1.1.0 (minor release). Published to npm." },
    ],
  },
  {
    date: "6 Sep 2026",
    title: "Dorchester Engine System — Gen Ix25",
    summary: "First incremental update to the Generation I engine. Gen Ix25 completes the noise reduction layer, introduces monorepo-aware framework detection, and resolves a pre-existing TypeScript interface gap in the Hotspot Registry.",
    changes: [
      { type: "Added", text: "Noise Reduction Rule 4: cross-bundle false positive suppression. Dead code findings on known cross-bundle exported symbols (ActionType, OrchestratorPlan, MahadataStore, handleAnalyzeRepo, and 20+ others) are now tagged and suppressed at the Correlation Engine output stage. These symbols are legitimately consumed by sibling packages outside the current scan boundary — the engine no longer reports them as unused exports." },
      { type: "Added", text: "Cross-bundle barrel file pattern matching. Any file matching known barrel path patterns (contracts/index.ts, action_contracts/index.ts, shared/index.ts, orchestrator/index.ts, etc.) now has all dead_code findings suppressed automatically, regardless of individual symbol name." },
      { type: "Added", text: "Safe export prefix inference. Symbols beginning with handle, create, build, or run are treated as cross-bundle interface symbols and suppressed from dead_code findings without requiring explicit whitelist entry." },
      { type: "Changed", text: "Framework detection is now monorepo-aware. The topology classifier scans sub-package roots up to depth 2 and reads each package.json independently. For the CAA monorepo, this now correctly reports next (x2) rather than none detected. Multiple distinct frameworks are deduplicated and emitted as a comma-separated summary." },
      { type: "Changed", text: "Entry point regex now matches nested App Router paths. Patterns like caa-web/app/page.tsx and openkrak-web/app/page.tsx are correctly identified as framework entry points, where previously only root-level app/page.tsx matched." },
      { type: "Fixed", text: "HotspotRegistryOptions interface added to hotspot/index.ts. The interface was referenced in pipeline.ts but undefined, producing a compile error. The interface now declares repoRoot and changeFrequencyMap as optional fields." },
      { type: "Metric", text: "Post-Ix25 benchmark — CAA full repository: dead code false positive count reduced from ~90 findings to near zero. Remaining dead_code findings reflect genuine unused exports confirmed by cross-file import search." },
    ],
  },
  {
    date: "6 Sep 2026",
    title: "Dorchester Engine System — Generation I",
    summary: "First-generation Dorchester engine released as the analytical core of OpenKrak. Generation I establishes the full six-step static analysis pipeline with significant noise reduction, framework detection, and git-integrated change frequency scoring.",
    changes: [
      { type: "Added", text: "Git change frequency integration. File modification history from git log is now incorporated into hotspot scoring, weighting frequently changed files higher in risk ranking." },
      { type: "Added", text: "Framework detection. The topology classifier now identifies Next.js, React, and other major framework signatures from project structure and package metadata." },
      { type: "Added", text: "Barrel file suppression. Index files (index.ts, index.js) are excluded from god_object detection to eliminate false positives on legitimate re-export patterns." },
      { type: "Added", text: "External package whitelist. 30+ known external packages whitelisted in structural analysis. Missing symbol findings for external dependencies are no longer emitted." },
      { type: "Added", text: "Dead code detection capped at 3 findings per file. Prevents a single module from dominating the findings output." },
      { type: "Added", text: "Missing symbol deduplication with global cap of 30. Eliminates redundant findings from shared symbols imported across many files." },
      { type: "Added", text: "Path alias resolution for TypeScript @/ imports. The dependency resolver now correctly maps @/ to the project root via tsconfig.json paths injection at DeepStrike initialization." },
      { type: "Added", text: "Next.js App Router entry points registered in the file index builder. page.tsx, layout.tsx, loading.tsx, error.tsx, and route.ts are now recognized as framework entry points and indexed accordingly." },
      { type: "Added", text: "Package name extraction from package.json. Analysis output now reports the canonical package name rather than the folder name." },
      { type: "Changed", text: "Mahadata brief output is now proportional to repository size. Token budget is computed dynamically based on file count and LOC, replacing the previous hardcoded 500-token ceiling." },
      { type: "Changed", text: "Hotspot score formula updated: coupling×0.35 + complexity×0.15 + method density×0.10 + git change frequency×0.10 + structural penalties. Weights reflect empirical signal quality observed across test repositories." },
      { type: "Fixed", text: "Correlation engine noise reduction operational. Findings reduced from 1,443 to approximately 274 on the CAA full repository scan (−81%). Suppressed findings include known cross-bundle symbol references, external type imports, and barrel re-exports." },
      { type: "Fixed", text: "God object detector no longer flags barrel files. Barrel files routinely contain many exported symbols by design; suppression prevents systematic false positives in well-structured TypeScript codebases." },
      { type: "Metric", text: "Benchmark — openkrak-mcp repository: 18 total findings, pipeline duration ~550ms." },
      { type: "Metric", text: "benchmark — CAA full repository (91 files, 9,853 LOC): 274–276 findings, 78 hotspots, pipeline duration ~1,847ms. Top critical hotspot: openkrak-web/app/page.tsx (score: 0.560)." },
      { type: "Metric", text: "Token efficiency benchmark: with Dorchester Gen I — ~18,000–19,000 total tokens, 0 manual file reads. Without: ~59,000–63,000 tokens, 30–35 file reads. Reduction: 70–92%." },
    ],
  },
  {
    date: "4 Sep 2026",
    title: "Challanger Absolute Advance — Public Release",
    summary: "Public availability of the Challanger Absolute Advance company profile. The company website, portfolio, and operating documentation are now accessible at challanger-aa.vercel.app.",
    changes: [
      { type: "Added", text: "Company profile page published at challanger-aa.vercel.app." },
      { type: "Added", text: "Portfolio section listing the first active product under Challanger Absolute Advance." },
      { type: "Added", text: "Operating principles, founder profile, and structural overview published." },
    ],
  },
  {
    date: "4 Sep 2026",
    title: "OpenKrak — Public Release",
    summary: "Initial public release of OpenKrak. The MCP server, license infrastructure, and landing page are now operational. OpenKrak 1.0 provides full static analysis capabilities for software repositories via the OpenCode integration.",
    changes: [
      { type: "Added", text: "openkrak-mcp@1.0.10 published to npm. Installable via npx openkrak-mcp." },
      { type: "Added", text: "Four MCP tools available: analyze_repo, get_mahadata, get_hotspots, blast_radius." },
      { type: "Added", text: "Dorchester engine integrated. Pipeline: DeepStrike → Hotspot Registry → Correlation → Blast Radius → Execution Gate → Mahadata." },
      { type: "Added", text: "License server operational (CF Worker v3.5). Free tier: 15 queries per 24-hour rolling window. Pro: monthly ($8) and annual ($67.20) via Payhip." },
      { type: "Added", text: "Landing page published. Pricing, quick-start, and MCP configuration documentation included." },
      { type: "Added", text: "OpenCode integration live. Claude Code, Codex, and Cursor support listed as upcoming." },
      { type: "Added", text: "Error telemetry and usage analytics endpoints operational." },
    ],
  },
  {
    date: "8 Jun 2026",
    title: "OpenKrak — Development Initiated",
    summary: "OpenKrak project initiated. Initial scope defined as an MCP server providing static analysis capabilities for developer tooling. Dorchester engine development begun under a separate private repository.",
    changes: [
      { type: "Added", text: "OpenKrak project repository created under FrnzJulianBergmann/openkrak." },
      { type: "Added", text: "Dorchester engine repository created under Challanger-Absolute-Advance/dorchester-engine (private)." },
      { type: "Added", text: "Initial six-step analysis pipeline architecture defined." },
    ],
  },
  {
    date: "12 Apr 2026",
    title: "Challanger Absolute Advance — Incorporated",
    summary: "Challanger Absolute Advance incorporated as an independent technology holding company under a single-principal structure. No external capital raised. Operating mandate established.",
    changes: [
      { type: "Added", text: "Company established. Single-principal structure, no external investors." },
      { type: "Added", text: "GitHub organization created: Challanger-Absolute-Advance." },
      { type: "Added", text: "Operating mandate defined: build and own software products targeting developer tooling and adjacent markets." },
    ],
  },
];

const VISIBLE_INITIAL = 4;
const VISIBLE_MAX = 10;
const LOAD_MORE_STEP = 4;

const changeTypeColor: Record<string, string> = {
  Added: "#2a6a2a",
  Changed: "#4a5a8a",
  Fixed: "#7a4a1a",
  Removed: "#8a2a2a",
  Metric: "#555",
};

function UpdateRow({ update }: { update: typeof updates[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid #e8e8e8" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "grid", gridTemplateColumns: "90px 1fr 16px", gap: "24px",
          padding: "14px 0", alignItems: "start", textAlign: "left",
        }}
      >
        <div>
          <p className="date-label">{update.date}</p>
        </div>
        <div>
          <p className="entry-title">{update.title}</p>
          <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.65, marginTop: "3px" }}>{update.summary}</p>
        </div>
        <span className="mono" style={{ fontSize: "14px", color: "#999", paddingTop: "2px" }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: "16px", paddingLeft: "114px" }}>
          <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "12px" }}>
            {update.changes.map((c, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "12px", padding: "4px 0" }}>
                <span className="mono" style={{ fontSize: "10px", color: changeTypeColor[c.type] ?? "#555", letterSpacing: "0.06em", paddingTop: "2px" }}>{c.type}</span>
                <p style={{ fontSize: "13px", color: "#333", lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function UpdatesList() {
  const [visible, setVisible] = useState(VISIBLE_INITIAL);
  const shown = updates.slice(0, visible);
  const canLoadMore = visible < updates.length && visible < VISIBLE_MAX;
  const isAtMax = visible >= VISIBLE_MAX;

  return (
    <div>
      <div
        style={{
          overflowY: isAtMax ? "auto" : "visible",
          maxHeight: isAtMax ? "640px" : "none",
        }}
      >
        <div>
          {shown.map((u, i) => <UpdateRow key={i} update={u} />)}
          <div style={{ borderTop: "1px solid #e8e8e8" }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: "16px", marginTop: "12px", alignItems: "center" }}>
        {canLoadMore && (
          <button
            onClick={() => setVisible(v => Math.min(v + LOAD_MORE_STEP, updates.length))}
            className="mono"
            style={{
              background: "none", border: "1px solid #d0d0d0", cursor: "pointer",
              fontSize: "10px", color: "#555", letterSpacing: "0.06em",
              padding: "6px 14px", textTransform: "uppercase",
            }}
          >
            Load more
          </button>
        )}
        {visible > VISIBLE_INITIAL && (
          <button
            onClick={() => setVisible(VISIBLE_INITIAL)}
            className="mono"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "10px", color: "#999", letterSpacing: "0.06em",
              padding: "6px 0", textDecoration: "underline",
            }}
          >
            Collapse
          </button>
        )}
        <span className="mono" style={{ fontSize: "10px", color: "#bbb", marginLeft: "auto" }}>
          {Math.min(visible, updates.length)} of {updates.length}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff", color: "#1a1a1a", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .container { max-width: 900px; margin: 0 auto; padding: 0 40px; }
        .mono { font-family: "SFMono-Regular", "Consolas", monospace; }

        .section-h {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }
        .section-sub { font-size: 12px; color: #666; margin-bottom: 32px; }

        .nav-brand {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #1a1a1a;
        }

        .entry-title {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.4;
        }

        .date-label {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .kv-row { display: grid; grid-template-columns: 160px 1fr; gap: 24px; padding: 9px 0; }
        .kv-key { font-family: "SFMono-Regular", monospace; font-size: 10px; letter-spacing: 0.09em; text-transform: uppercase; color: #666; padding-top: 2px; }
        .kv-val { font-size: 13px; color: #1a1a1a; line-height: 1.6; }
        .sidebar { display: grid; grid-template-columns: 200px 1fr; gap: 56px; }
        .pr-row { padding: 14px 0; }
        .pr-row:first-child { padding-top: 0; }

        .product-name {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .principle-title {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 6px;
        }

        .founder-name {
          font-family: "Source Serif 4", Georgia, "Times New Roman", serif;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2px;
        }

        .ext-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "SFMono-Regular", "Consolas", monospace;
          font-size: 10px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #1a1a1a;
          border: 1px solid #d0d0d0;
          padding: 6px 14px;
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s;
        }
        .ext-link:hover { background: #f5f5f5; border-color: #aaa; }
        .ext-link-primary {
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }
        .ext-link-primary:hover { background: #333; border-color: #333; }
      `}</style>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, background: "#fff", zIndex: 100, boxShadow: "0 1px 0 #e0e0e0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "48px" }}>
          <span className="nav-brand">Challanger Absolute Advance</span>
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {["Portfolio", "Principles", "Founder", "Updates"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="mono" style={{ fontSize: "11px", color: "#444" }}>{l}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overview */}
      <section style={{ padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar">
            <div>
              <p className="section-h">Overview</p>
              <p className="section-sub">Company profile and structure.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#1a1a1a" }}>
                Challanger Absolute Advance is an independent technology company incorporated in 2026. The company operates under a single-principal structure with no external investors, no institutional capital, and no governance obligations outside of its own operating mandate.
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#333" }}>
                The company builds and operates software products targeting developer tooling and adjacent markets. Each product is developed, deployed, and maintained independently under the Challanger Absolute Advance umbrella. Products are designed to generate revenue from first release and operate on zero marginal infrastructure cost where possible.
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#333" }}>
                The operational model is intentionally compact. No team, no process overhead, no consensus requirement. Decision velocity is the primary structural advantage available at this stage of capital formation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 0 48px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              ["2026", "Year incorporated"],
              ["1", "Products in market"],
              ["$0 / month", "Infrastructure cost"],
              ["Solo", "Operational structure"],
            ].map(([v, l]) => (
              <div key={l} style={{ padding: "24px 0" }}>
                <p className="mono" style={{ fontSize: "10px", color: "#666", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "8px" }}>{l}</p>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.01em" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Updates */}
      <section id="updates" style={{ padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar">
            <div>
              <p className="section-h">Platform Updates</p>
              <p className="section-sub">Release history and changelog.</p>
            </div>
            <UpdatesList />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={{ padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar">
            <div>
              <p className="section-h">Portfolio</p>
              <p className="section-sub">Products under active development and operation.</p>
            </div>
            <div>
              <p className="mono" style={{ fontSize: "10px", color: "#666", letterSpacing: "0.08em", marginBottom: "14px" }}>01 — Developer Tools</p>
              <p className="product-name">OpenKrak</p>
              <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#333", marginBottom: "16px" }}>
                OpenKrak is an MCP server that performs static analysis on software repositories prior to language model execution. The system traverses the repository file graph, constructs a dependency model, scores files by complexity and coupling, and computes blast radius for any given change target. The output is a structured brief delivered to the language model before it accesses any source file, reducing token consumption and improving task precision.
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#333", marginBottom: "24px" }}>
                The analysis pipeline runs on the Dorchester engine, a proprietary static analysis system developed and maintained under a separate private repository. Dorchester is not publicly available. OpenKrak exposes its capabilities through the MCP protocol, currently integrated with OpenCode.
              </p>
              <div style={{ marginBottom: "28px" }}>
                {[
                  ["Type", "MCP server — developer tooling"],
                  ["Engine", "Dorchester (proprietary, closed source)"],
                  ["Distribution", "npm / openkrak-mcp"],
                  ["Integration", "OpenCode"],
                  ["License model", "Free tier (15 queries / 24h). Pro license via Payhip."],
                  ["Status", "Operational."],
                  ["Repository", "github.com/FrnzJulianBergmann/openkrak"],
                ].map(([k, v]) => (
                  <div key={k as string} className="kv-row">
                    <span className="kv-key">{k}</span>
                    <span className="kv-val">{v}</span>
                  </div>
                ))}
              </div>
              {/* External links */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href="https://openkrak-web.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-link ext-link-primary"
                >
                  Product page ↗
                </a>
                <a
                  href="https://github.com/FrnzJulianBergmann/openkrak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-link"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.npmjs.com/package/openkrak-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-link"
                >
                  npm ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" style={{ padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar">
            <div>
              <p className="section-h">Operating Principles</p>
              <p className="section-sub">The assumptions this company is built on.</p>
            </div>
            <div>
              {[
                ["Revenue is the metric.", "Traction, user growth, and engagement are proxies. Revenue is the variable this company optimizes for. Every product decision is evaluated against its effect on revenue, margin, and capital accumulation."],
                ["Speed as structural advantage.", "Without capital or team, decision velocity is the only moat available. The company ships, observes, and corrects faster than institutions can coordinate. Slowness is a solvency risk."],
                ["Markets precede products.", "The target market is identified before the product is designed. We build where the market is large, incumbents are slow, and distribution is structurally accessible. The technology is a means, not the objective."],
                ["Macro awareness is operational.", "Capital environments, interest rate regimes, and sector sentiment determine whether a product can be monetized regardless of its quality. The company builds with one input from the product and one from the macro. A technically correct product in a wrong macro environment is not a business."],
              ].map(([t, b]) => (
                <div key={t} className="pr-row">
                  <p className="principle-title">{t}</p>
                  <p style={{ fontSize: "13px", color: "#333", lineHeight: 1.8 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" style={{ padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar">
            <div>
              <p className="section-h">Founder</p>
            </div>
            <div>
              <p className="founder-name">Mathias Hamidzan</p>
              <p className="mono" style={{ fontSize: "10px", color: "#666", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "24px" }}>Jambi, Indonesia</p>
              <p style={{ fontSize: "13px", lineHeight: 1.85, color: "#333", marginBottom: "24px" }}>
                Founder and sole operator of Challanger Absolute Advance. Responsible for product strategy, technical architecture, commercial operations, and capital allocation. The company has no other principals.
              </p>
              <div style={{ borderLeft: "2px solid #1a1a1a", paddingLeft: "18px", marginBottom: "28px" }}>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "13px", color: "#1a1a1a", lineHeight: 1.8, fontStyle: "italic", marginBottom: "4px" }}>"An army with a state."</p>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "13px", color: "#333", lineHeight: 1.8, fontStyle: "italic", marginBottom: "12px" }}>"Ein Heer mit einem Staat."</p>
                <p className="mono" style={{ fontSize: "10px", color: "#666", letterSpacing: "0.04em" }}>Kaiser Wilhelm II &amp; Otto von Bismarck &mdash; Preu&szlig;en, Berlin, 1871&ndash;1947</p>
              </div>
              <div>
                <p className="mono" style={{ fontSize: "10px", color: "#666", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "14px" }}>Contact</p>
                <div className="kv-row">
                  <span className="kv-key">Email</span>
                  <a href="mailto:hmznfaiz1094@gmail.com" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.6 }}>hmznfaiz1094@gmail.com</a>
                </div>
                <div className="kv-row">
                  <span className="kv-key">Instagram</span>
                  <a href="https://instagram.com/f.thiasz" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#1a1a1a", lineHeight: 1.6 }}>@f.thiasz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: "20px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>Challanger Absolute Advance</span>
          <span className="mono" style={{ fontSize: "10px", color: "#666" }}>&#169; 2026</span>
          <a href="https://github.com/Challanger-Absolute-Advance" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: "10px", color: "#444", letterSpacing: "0.06em", textTransform: "uppercase" }}>GitHub</a>
        </div>
      </footer>
    </main>
  );
}
