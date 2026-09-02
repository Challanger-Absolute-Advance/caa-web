"use client";
import { useRef } from "react";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff", color: "#1a1a1a", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .container { max-width: 900px; margin: 0 auto; padding: 0 40px; width: 100%; }
        .nav-link { font-size: 12px; color: #666; transition: color 0.15s; letter-spacing: 0.02em; }
        .nav-link:hover { color: #1a1a1a; }
        .label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #999; font-weight: 500; }
        .section-border { border-top: 1px solid #e5e5e5; }
        .tag { display: inline-block; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 2px 8px; border: 1px solid #ddd; color: #888; }
        .tag-live { border-color: #2a6a2a; color: #2a6a2a; }
        .principle-row { display: grid; grid-template-columns: 200px 1fr; gap: 32px; padding: 20px 0; border-top: 1px solid #ebebeb; }
        .principle-row:first-child { border-top: none; }
        .sidebar-layout { display: grid; grid-template-columns: 200px 1fr; gap: 48px; }
      `}</style>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e5e5", position: "sticky", top: 0, zIndex: 100, background: "#fff" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "48px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Challanger Absolute Advance</span>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#principles" className="nav-link">Principles</a>
            <a href="#founder" className="nav-link">Founder</a>
            <a href="https://github.com/Challanger-Absolute-Advance" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <a href="https://openkrak-web.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#fff", background: "#1a1a1a", padding: "6px 14px", letterSpacing: "0.04em" }}>OpenKrak &rarr;</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ borderBottom: "1px solid #e5e5e5", padding: "80px 0 64px" }}>
        <div className="container">
          <div className="label" style={{ marginBottom: "24px" }}>Independent Technology Company &mdash; Since 1 March 2026</div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1a1a1a", marginBottom: "32px", maxWidth: "640px" }}>
            Building tools that outlast the companies they serve.
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "720px" }}>
            <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#444" }}>
              Challanger Absolute Advance is an independent technology holding company. We build and own software products across developer tooling and adjacent markets.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#777" }}>
              Each product operates as a standalone business under one structure. No external funding, no institutional dependency. Built to compound over time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderBottom: "1px solid #e5e5e5" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid #e5e5e5" }}>
            {[
              ["2026", "Year founded"],
              ["1", "Products in market"],
              ["$0 / month", "Infrastructure cost"],
              ["Solo", "Operational structure"],
            ].map(([val, label]) => (
              <div key={label} style={{ padding: "32px 24px", borderRight: "1px solid #e5e5e5" }}>
                <div style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 600, color: "#1a1a1a", marginBottom: "6px", letterSpacing: "-0.01em" }}>{val}</div>
                <div style={{ fontSize: "11px", color: "#999", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={{ borderBottom: "1px solid #e5e5e5", padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar-layout">
            <div>
              <div className="label" style={{ marginBottom: "8px" }}>Portfolio</div>
              <p style={{ fontSize: "12px", color: "#999", lineHeight: 1.6 }}>Active products under Challanger Absolute Advance.</p>
            </div>
            <div>
              {/* OpenKrak */}
              <a href="https://openkrak-web.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "24px", border: "1px solid #e5e5e5", marginBottom: "2px", transition: "border-color 0.15s", background: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#999")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e5e5")}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span className="tag tag-live">Live</span>
                    <span style={{ fontSize: "11px", color: "#999", letterSpacing: "0.06em" }}>01 &mdash; Developer Tools</span>
                  </div>
                  <span style={{ fontSize: "13px", color: "#999" }}>&#8599;</span>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 600, color: "#1a1a1a", marginBottom: "10px", letterSpacing: "-0.01em" }}>OpenKrak</div>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
                  AI coding intelligence via MCP. Pre-computes repository structure using the Dorchester static analysis engine before the LLM reads any file. Reduces token usage 20&ndash;80% per session.
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["MCP Protocol", "Static Analysis", "OpenCode", "npm"].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </a>

              {/* Next */}
              <div style={{ padding: "24px", border: "1px solid #e5e5e5", opacity: 0.4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <span className="tag">In Development</span>
                    <span style={{ fontSize: "11px", color: "#999", letterSpacing: "0.06em" }}>02 &mdash; Undisclosed</span>
                  </div>
                </div>
                <div style={{ fontSize: "18px", fontWeight: 600, color: "#1a1a1a", marginBottom: "10px" }}>Undisclosed</div>
                <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7 }}>Next product under development. No timeline, no public disclosure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" style={{ borderBottom: "1px solid #e5e5e5", padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar-layout">
            <div>
              <div className="label" style={{ marginBottom: "8px" }}>Disposition</div>
              <p style={{ fontSize: "12px", color: "#999", lineHeight: 1.6 }}>How we think and operate.</p>
            </div>
            <div>
              {[
                ["Capitalist.", "Capital is the objective function. Every product, every decision, every line of code is evaluated against one question: does this compound? Revenue before traction, margin before growth."],
                ["Move fast, break things.", "Speed is the only structural moat available without resources. Ship, learn, correct. The cost of moving slowly always exceeds the cost of moving wrong."],
                ["Market opportunist.", "We go where the market is large, incumbents are slow, and distribution is structurally available. Technology follows the opportunity, not the other way around."],
                ["Finance and macro-driven.", "Macro conditions determine what categories survive. We build with one eye on the product and one on the capital environment. A tool nobody can afford to buy is not a business."],
              ].map(([title, body], i) => (
                <div key={title} className="principle-row">
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>{title}</div>
                  <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.75 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" style={{ borderBottom: "1px solid #e5e5e5", padding: "56px 0" }}>
        <div className="container">
          <div className="sidebar-layout">
            <div>
              <div className="label" style={{ marginBottom: "8px" }}>Founder</div>
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 600, color: "#1a1a1a", marginBottom: "4px", letterSpacing: "-0.01em" }}>Mathias Hamidzan</div>
              <div style={{ fontSize: "11px", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>Jambi, Indonesia</div>
              <div style={{ borderLeft: "2px solid #1a1a1a", paddingLeft: "20px" }}>
                <p style={{ fontSize: "14px", color: "#1a1a1a", lineHeight: 1.75, marginBottom: "8px", fontStyle: "italic" }}>
                  &ldquo;An army with a state.&rdquo;
                </p>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.75, marginBottom: "16px", fontStyle: "italic" }}>
                  &ldquo;Ein Heer mit einem Staat.&rdquo;
                </p>
                <p style={{ fontSize: "11px", color: "#999", letterSpacing: "0.06em" }}>
                  &mdash; Kaiser Wilhelm II &amp; Otto von Bismarck, Preu&szlig;en / Germans, Berlin, 1871&ndash;1947
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px 0", background: "#fff" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2px" }}>Challanger Absolute Advance</div>
            <div style={{ fontSize: "11px", color: "#bbb" }}>Independent technology company</div>
          </div>
          <div style={{ fontSize: "11px", color: "#bbb" }}>&copy; 2026 Challanger Absolute Advance</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="https://github.com/Challanger-Absolute-Advance" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" }}>GitHub</a>
            <a href="https://openkrak-web.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" }}>OpenKrak</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
