"use client";
import { useRef } from "react";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8f7f4", color: "#0a0a0a", fontFamily: "Georgia, 'Times New Roman', serif" }}>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .nav-link { font-size: 11px; color: #999; transition: color 0.2s; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; }
        .nav-link:hover { color: #0a0a0a; }
        .label { font-size: 10px; font-family: system-ui, sans-serif; letter-spacing: 0.2em; text-transform: uppercase; color: #bbb; }
        .product-card { padding: 48px; background: #fff; transition: background 0.2s; }
        .product-card:hover { background: #fafaf8; }
        .tag { display: inline-block; font-size: 10px; font-family: system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px; border: 1px solid #ddd; color: #aaa; }
      `}</style>

      {/* Nav — no bottom border */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 72px", background: "#f8f7f4", position: "sticky", top: 0, zIndex: 100 }}>
        <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "#0a0a0a", letterSpacing: "0.2em", textTransform: "uppercase" }}>Challanger Absolute Advance</span>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#principles" className="nav-link">Principles</a>
          <a href="https://github.com/Challanger-Absolute-Advance" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          <a href="https://openkrak-web.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#fff", background: "#0a0a0a", padding: "8px 20px", letterSpacing: "0.08em", textTransform: "uppercase" }}>OpenKrak &rarr;</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "120px 72px 100px", maxWidth: "1400px", width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "32px" }}>
            Independent Technology &mdash; Since 1 March 2026, Present
          </div>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.14, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "48px", fontStyle: "italic" }}>
            Building tools that outlast<br />the companies they serve.
          </h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#portfolio" style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#fff", background: "#0a0a0a", padding: "11px 24px", letterSpacing: "0.08em", textTransform: "uppercase" }}>View Portfolio</a>
            <a href="https://github.com/Challanger-Absolute-Advance" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#0a0a0a", border: "1px solid #ccc", padding: "11px 24px", letterSpacing: "0.08em", textTransform: "uppercase" }}>GitHub</a>
          </div>
        </div>
        <div style={{ paddingTop: "8px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#555", marginBottom: "28px" }}>
            Challanger Absolute Advance is an independent technology holding company. We build and own software products across developer tooling and adjacent markets.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#999" }}>
            Each product operates as a standalone business under one structure. No external funding, no institutional dependency. Built to compound over time.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={{ padding: "80px 72px", maxWidth: "1400px", width: "100%", margin: "0 auto" }}>
        <div className="label" style={{ marginBottom: "48px" }}>Portfolio</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "#e8e6e0" }}>

          <a href="https://openkrak-web.vercel.app" target="_blank" rel="noopener noreferrer" className="product-card" style={{ display: "block" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase" }}>01 &mdash; Developer Tools</span>
            </div>
            <h2 style={{ fontSize: "34px", fontWeight: 400, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "16px", fontStyle: "italic" }}>OpenKrak</h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#666", lineHeight: 1.8, marginBottom: "36px" }}>
              AI coding intelligence via MCP. Pre-computes repository structure using the Dorchester static analysis engine before the LLM reads any file. Reduces token usage 20&ndash;80% per session.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
              {["MCP Protocol", "Static Analysis", "OpenCode", "npm"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#bbb", paddingTop: "20px", borderTop: "1px solid #f0ede8" }}>
              openkrak-web.vercel.app &rarr;
            </div>
          </a>

          <div className="product-card" style={{ opacity: 0.4 }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", color: "#bbb", letterSpacing: "0.1em", textTransform: "uppercase" }}>02 &mdash; Undisclosed</span>
            </div>
            <h2 style={{ fontSize: "34px", fontWeight: 400, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "16px", fontStyle: "italic" }}>Undisclosed</h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#888", lineHeight: 1.8 }}>
              Next product under development. No timeline, no public disclosure.
            </p>
          </div>

        </div>
      </section>

      {/* Principles */}
      <section id="principles" style={{ padding: "80px 72px", maxWidth: "1400px", width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: "100px" }}>
        <div className="label">Disposition</div>
        <div>
          {[
            ["Capitalist.", "Capital is the objective function. Every product, every decision, every line of code is evaluated against one question: does this compound? Revenue before traction, margin before growth."],
            ["Move fast, break things.", "Speed is the only structural moat available without resources. Ship, learn, correct. The cost of moving slowly always exceeds the cost of moving wrong."],
            ["Market opportunist.", "We go where the market is large, the incumbents are slow, and the distribution is structurally available. Technology follows the opportunity — not the other way around."],
            ["Finance and macro-driven.", "Macro conditions determine what categories survive. We build with one eye on the product and one eye on the capital environment. A tool nobody can afford to buy is not a business."],
          ].map(([title, body], i) => (
            <div key={title} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "48px", padding: "28px 0", borderTop: i === 0 ? "none" : "1px solid #eeece8" }}>
              <div style={{ fontSize: "15px", fontWeight: 400, color: "#0a0a0a", fontStyle: "italic" }}>{title}</div>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#777", lineHeight: 1.8 }}>{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section style={{ padding: "80px 72px", maxWidth: "1400px", width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: "100px", alignItems: "start" }}>
        <div className="label">Founder</div>
        <div>
          <div style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", color: "#0a0a0a", marginBottom: "12px" }}>Mathias Hamidzan</div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#bbb", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "32px" }}>Jambi, Indonesia</div>
          <p style={{ fontSize: "18px", fontStyle: "italic", color: "#555", lineHeight: 1.8, maxWidth: "560px", borderLeft: "2px solid #e0ddd8", paddingLeft: "24px" }}>
            &ldquo;An army with a state.&rdquo;<br /><span style={{fontSize:"15px", color:"#aaa", fontStyle:"italic"}}>&ldquo;Ein Heer mit einem Staat.&rdquo;</span><br /><br /><span style={{fontSize:"12px", color:"#bbb", fontStyle:"normal", fontFamily:"system-ui, sans-serif", letterSpacing:"0.08em"}}>— Kaiser Wilhelm II &amp; Otto von Bismarck, Preußen / Germans, Berlin, 1871&ndash;1947</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "36px 72px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", background: "#fff", marginTop: "auto" }}>
        <div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", fontWeight: 600, color: "#0a0a0a", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>Challanger Absolute Advance</div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#bbb" }}>Independent technology company</div>
        </div>
        <div style={{ textAlign: "center", fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#bbb" }}>
          &copy; 2026 Challanger Absolute Advance
        </div>
        <div style={{ display: "flex", gap: "32px", justifyContent: "flex-end" }}>
          <a href="https://github.com/Challanger-Absolute-Advance" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" }}>GitHub</a>
          <a href="https://openkrak-web.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" }}>OpenKrak</a>
        </div>
      </footer>

    </main>
  );
}
