"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check system preference or default to light
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="container">
      {/* Theme Toggle Nav */}
      <nav className="nav-header">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === "light" ? (
            <><span>☾</span> Dark Mode</>
          ) : (
            <><span>☀</span> Light Mode</>
          )}
        </button>
      </nav>

      {/* Header / Hero */}
      <header className="section hero-layout">
        <div className="hero-image-wrapper">
          <Image 
            src="/profile.jpeg" 
            alt="Hemapriyan R K" 
            width={250} 
            height={250} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            priority
          />
        </div>
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>HEMAPRIYAN R K</h1>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem", color: "var(--foreground)", opacity: 0.8 }}>Student at Vellore Institute of Technology</p>
          <p style={{ margin: "0.5rem 0 2rem 0", opacity: 0.7 }}>Computer Science and Engineering (Data Science)</p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="https://www.linkedin.com/in/hemapriyan-rk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>LinkedIn</a>
            <a href="https://github.com/hemapriyan-rk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>GitHub</a>
            <a href="mailto:hemapriyankuppusamy07@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>Email</a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {["Python", "Java", "JavaFX", "C", "C++", "SQL", "Postgres SQL", "Networking", "Basic Cybersecurity", "Git", "GitHub", "Machine Learning", "Basic RL", "Vercel", "Supabase", "Firebase", "Database Administration", "Docker Basics"].map(skill => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects & Research */}
      <section className="section">
        <h2 className="section-title">Projects & Research</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          
          <article className="card">
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>1. AssetSentinel</h3>
            <p style={{ marginBottom: "1rem", opacity: 0.8, lineHeight: "1.6" }}>
              A comprehensive solution for monitoring electrical assets in complex industrial networks. It combines real-time telemetry processing with ML-based decision intelligence to provide early warning systems and predictive degradation analysis. 
              <br/><br/>
              <strong>Key Features:</strong> Network topology management, Anomaly Detection using statistical learning (z-score standardization), State Classification (NORMAL/WARNING/CRITICAL), temporal consistency, and interactive KPI dashboards.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
              <span className="skill-badge">FastAPI</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">Machine Learning</span>
              <span className="skill-badge">PyTorch</span>
            </div>
          </article>

          <article className="card">
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>2. Multi-Angle Identity Fusion System</h3>
            <p style={{ marginBottom: "1rem", opacity: 0.8, lineHeight: "1.6" }}>
              An advanced AI-powered surveillance and tracking system designed to maintain persistent identity recognition of vehicles and individuals across multiple camera angles. By integrating datasets such as VeRi-776, CityFlow, and VehicleID, the model learns robust appearance signatures for identity continuity.
              <br/><br/>
              <strong>Primary Goal:</strong> Build a scalable cross-view intelligence system for smart surveillance, traffic analytics, and autonomous city infrastructure, leveraging multi-view computer vision, feature embedding, and re-identification (ReID).
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--foreground)", opacity: 0.6, marginTop: "1rem" }}><strong>Status:</strong> In development / Future Project</p>
          </article>

          <article className="card">
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>3. ORCA EYE</h3>
            <p style={{ marginBottom: "1rem", opacity: 0.8, lineHeight: "1.6" }}>
              An intelligent real-time assistive navigation system designed to enhance mobility and situational awareness for visually impaired individuals. Built on a hybrid architecture of edge AI and server-side processing, it integrates live camera input, environmental mapping, and spatial analysis to provide low-latency audio feedback.
              <br/><br/>
              <strong>Core Focus:</strong> Combines computer vision, contextual scene understanding, and path prediction to safely identify free paths, moving obstacles, and human presence.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--foreground)", opacity: 0.6, marginTop: "1rem" }}><strong>Status:</strong> Upcoming Project</p>
          </article>

          <article className="card">
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>4. A* Search Systems Study: Heuristic Design, Optimization & Analysis</h3>
            <p style={{ marginBottom: "1rem", opacity: 0.8, lineHeight: "1.6" }}>
              A research-grade implementation and empirical evaluation of classical informed search algorithms (A*, Weighted A*, Greedy Best-First Search, Uniform Cost Search, and IDA*) applied to the n-puzzle domain. 
              <br/><br/>
              <strong>Research Focus:</strong> Comprehensive evaluation of heuristic design (Manhattan Distance vs Linear Conflict) with respect to node expansion count, execution time, peak memory, and solution depth. Features a Python-native Tkinter live demo and a high-performance C++ compiled solver backend. Directly applicable to robotics pathfinding and cybersecurity attack graph analysis.
            </p>
          </article>

        </div>
      </section>

      {/* Patents */}
      <section className="section">
        <h2 className="section-title">Patents</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          <article className="card">
            <h3 style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>Interaction-aware probabilistic charging state control for mobile battery systems</h3>
            <p style={{ fontSize: "0.85rem", opacity: 0.6, margin: "0.5rem 0 1rem 0" }}>IN202641027106 A1 · Filed Mar 20, 2026</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>An interaction-aware charging framework that adapts charging behavior based on user-device interaction patterns to improve battery health, charging efficiency, and long-term battery performance.</p>
          </article>
          <article className="card">
            <h3 style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>A system and method for baseline-relative behavioral trend estimation for glucose regulation monitoring</h3>
            <p style={{ fontSize: "0.85rem", opacity: 0.6, margin: "0.5rem 0 1rem 0" }}>IN202641033662 A1 · Filed Mar 20, 2026</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>A data-driven framework for monitoring glucose regulation through baseline-relative behavioral trend estimation, supporting intelligent health analytics and personalized monitoring.</p>
          </article>
        </div>
      </section>

      {/* Notable Repositories */}
      <section className="section">
        <h2 className="section-title">Notable Repositories</h2>
        <div className="card">
          <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", padding: 0, margin: 0 }}>
            <li><a href="https://github.com/hemapriyan-rk/Dia-care" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ opacity: 0.5 }}>→</span> github.com/hemapriyan-rk/Dia-care</a></li>
            <li><a href="https://github.com/hemapriyan-rk/asset-sentinel" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ opacity: 0.5 }}>→</span> github.com/hemapriyan-rk/asset-sentinel</a></li>
            <li><a href="https://github.com/hemapriyan-rk/a-star-search-heuristic-optimization-and-performance-analysis" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", wordBreak: "break-all" }}><span style={{ opacity: 0.5 }}>→</span> github.com/hemapriyan-rk/a-star-search-heuristic-optimization-and-performance-analysis</a></li>
            <li><a href="https://github.com/hemapriyan-rk/shop-rks" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ opacity: 0.5 }}>→</span> github.com/hemapriyan-rk/shop-rks</a></li>
            <li><a href="https://github.com/hemapriyan-rk/Adaptive-Task-planner" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ opacity: 0.5 }}>→</span> github.com/hemapriyan-rk/Adaptive-Task-planner</a></li>
          </ul>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid var(--card-border)", fontSize: "0.9rem", opacity: 0.7 }}>
        <p>© 2026 Hemapriyan R K. All rights reserved.</p>
      </footer>
    </div>
  );
}
