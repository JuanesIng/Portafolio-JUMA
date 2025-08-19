import { useState } from "react";
import "./styles/portfolio.css";
import miFoto from "./assets/mi-foto.jpg"; 

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="page">
      {/* HEADER */}
      <h1 className="page__title">Portfolio</h1>

      {/* HERO */}
      <section className="hero">
        {/* Left */}
        <div>
          <h2 className="hero__title">
            Hola, soy <span className="accent">Manuel Martinez</span>
          </h2>
          <p className="hero__subtitle">Desarrollador web full stack</p>
          <p className="hero__desc">
            Escribe una breve descripción sobre ti y tu experiencia profesional
          </p>

          <button className="cta">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" fill="none" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
            Contact Me
          </button>
        </div>

        {/* Right (avatar con foto) */}
        <figure className="avatar" aria-label="Foto de Manuel">
          <img src={miFoto} alt="Manuel Martinez" className="avatar__img" />
        </figure>
      </section>

      {/* SKILL SETS */}
      <section className="section">
        <h3 className="section__title">SKILL SETS</h3>

        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span aria-hidden>🔧</span>
          <span className="hero__muted">Skill sets</span>
        </div>

        <div className="accordion">
          <button
            className="accordion__head"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="skills-panel"
          >
            <span>Programming Languages &amp; Technologies</span>
            <span className="chip">10</span>
            <span style={{ marginLeft: "auto", opacity: 0.7 }}>{open ? "▾" : "▸"}</span>
          </button>

          {open && (
            <div id="skills-panel" className="accordion__body">
              <div className="table__head">
                <span style={{ flex: 2 }}>Manuel Martinez</span>
                <span style={{ flex: 1, textAlign: "right" }}>Expert Level (7)</span>
              </div>

              {/* filas */}
              <SkillRow name="JavaScript / TypeScript" level={8} />
              <SkillRow name="React" level={8} />
              <SkillRow name="Node.js" level={8} />
              <SkillRow name="Python" level={8} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ------- Subcomponente simple ------- */
function SkillRow({ name, level }: { name: string; level: number }) {
  const pct = Math.max(0, Math.min(10, level)) * 10;
  return (
    <div className="row">
      <span style={{ flex: 2 }}>{name}</span>
      <div style={{ flex: 1 }}>
        <div className="meter">
          <div className="meter__fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
