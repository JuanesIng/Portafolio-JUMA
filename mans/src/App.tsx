import { useState } from "react";
import "./styles/portfolio.css";
import miFoto from "./assets/mi-foto.jpg"; // pon tu imagen aquí

export default function App() {
  const [open, setOpen] = useState(true);        // acordeón skills
  const [showContact, setShowContact] = useState(false); // panel contacto

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
          <p className="hero__subtitle">Desarrollador web</p>
          <p className="hero__desc">
            Soy desarrollador. Diseño y desarrollo
            aplicaciones: frontend en React/TypeScript, backend con Node.js y Python,
            bases de datos SQL/NoSQL y despliegues en la nube.
          </p>

          <button
            className="cta"
            aria-expanded={showContact}
            aria-controls="contact-panel"
            onClick={() => setShowContact((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" fill="none" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
            Contact Me
          </button>

          {/* Panel de contacto */}
          {showContact && (
            <div id="contact-panel" className="contact">
              {/* Reemplaza el tel y el correo por los tuyos */}
              <a className="contact__item" href="tel:+57TU_TELEFONO">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path d="M6 2h4l2 5-3 2a16 16 0 007 7l2-3 5 2v4a2 2 0 01-2 2A18 18 0 014 4a2 2 0 012-2z" fill="currentColor"/>
                </svg>
                +57 3229026945
              </a>

              <a className="contact__item" href="mailto:manuel.martinez@usantoto.edu.co">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                </svg>
                manuel.martinez@usantoto.edu.co
              </a>

              <a
                className="contact__item"
                href="https://instagram.com/Manuel_s568"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                @Manuel_s568
              </a>
              {/* WhatsApp opcional: <a className="contact__item" href="https://wa.me/57TU_TELEFONO">WhatsApp</a> */}
            </div>
          )}
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
