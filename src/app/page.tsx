import Image from "next/image";
import {
  CameraIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  ServerIcon,
  ShieldIcon,
} from "./icons";
import { earlier, focus, patents, profile, projects, skills } from "@/data/content";

const focusIcons = [<CameraIcon key="c" />, <ServerIcon key="s" />, <PhoneIcon key="p" />, <ShieldIcon key="h" />];

export default function Home() {
  return (
    <>
      <header className="bar">
        <div className="wrap bar-inner">
          <a href="#top" className="wordmark">
            <Image src="/logo.png" alt={profile.name} width={1994} height={226} priority />
          </a>
          <nav aria-label="Primary" className="bar-nav">
            <a href="#top" className="is-active" aria-current="page">Home</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#patents">Patents</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <div className="hero-text">
            <p className="hero-kicker">Engineer / Researcher / Problem solver</p>
            <h1>
              Building systems that keep the <span className="hero-red">real world</span> running.
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="hero-lede">{profile.intro}</p>
            <p className="hero-cta">
              <a className="btn btn-solid" href={profile.links.email}><MailIcon /> Email me</a>
              <a className="btn" href={profile.links.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
              <a className="btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a>
            </p>
          </div>
          <div className="hero-visual">
            <ol className="hero-index" aria-hidden="true">
              <li className="on">01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
            </ol>
            <div className="hero-photo">
              <Image src="/profile.jpeg" alt={profile.name} width={420} height={500} priority />
            </div>
            <div className="hero-frame">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polyline points="2,0 2,64 14,71 98,71 98,100 0,100" />
              </svg>
              <p className="hero-name">
                <span>HEMAPRIYAN</span>
                <span>R K</span>
              </p>
              <p className="hero-meta">
                <a className="hero-company" href="https://qenbel.site" target="_blank" rel="noopener noreferrer">
                  <Image src="/qenbel.png" alt="QenBel" width={932} height={205} />
                  <span>Technology</span>
                </a>
              </p>
              <span aria-hidden="true">{"//"}</span>
            </div>
          </div>
        </section>

        <section className="wrap focus">
          {focus.map((f, i) => (
            <div key={f.name}>
              <span className="focus-icon">{focusIcons[i]}<i /></span>
              <div>
                <h2>{f.name}</h2>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="work" className="wrap block">
          <h2 className="block-title">Work</h2>
          <div className="register">
            {projects.map((p) => (
              <article key={p.title} className="row">
                <div className="row-head">
                  <h3>{p.title}</h3>
                  <p className="row-kind">{p.tag}</p>
                </div>
                <div className="row-body">
                  <p>{p.summary}</p>
                  {p.points.length > 0 && (
                    <ul>
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                  {p.note && <p className="row-note">{p.note}</p>}
                </div>
                <div className="row-meta">
                  <p>{p.stack.join(", ")}</p>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">View source</a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <h3 className="sub-title">Earlier projects</h3>
          <ul className="earlier">
            {earlier.map((e) => (
              <li key={e.title}>
                <a href={e.href} target="_blank" rel="noopener noreferrer">{e.title}</a>
                <p>{e.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="wrap block">
          <h2 className="block-title">Skills</h2>
          <dl className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skills-line">
                <dt>{group}</dt>
                <dd>{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="patents" className="wrap block">
          <h2 className="block-title">Patents</h2>
          <div className="patents">
            {patents.map((p) => (
              <article key={p.id} className="patent">
                <p className="patent-id">{p.id}</p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <p className="patent-date">{p.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Have a system that can&apos;t fail? Let&apos;s talk.</h2>
            <a className="contact-mail" href={profile.links.email}>hemapriyankuppusamy07@gmail.com</a>
            <p className="contact-links">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="wrap foot">© 2026 {profile.name}</footer>
    </>
  );
}
