"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  { index: "01", name: "TNAOT App", url: "https://www.tnaot.app/", host: "tnaot.app", image: "/images/projects/tnaot-app.png", type: "Media Platform", description: "A content-rich Khmer information platform covering news, culture, jobs, community, events, and everyday life in Cambodia.", stack: ["Next.js", "React", "Directus", "PostgreSQL"], theme: "red" },
  { index: "02", name: "Koh Thmey", url: "https://www.kohthmey.com/", host: "kohthmey.com", image: "/images/projects/koh-thmey.png", type: "Corporate Website", description: "The digital home of Koh Thmey Technology, presenting the company and its work through a responsive, maintainable web experience.", stack: ["React", "JavaScript", "Responsive UI"], theme: "blue" },
  { index: "03", name: "TNAOT Media", url: "https://www.tnaot.kh/", host: "tnaot.kh", image: "/images/projects/tnaot-media.png", type: "Marketing Platform", description: "A multilingual media and marketing platform for brands entering Cambodia, with services, events, and company content.", stack: ["Next.js", "Directus", "PostgreSQL", "Multilingual"], theme: "yellow" },
  { index: "04", name: "TNAOT Khmer", url: "https://kh.tnaot.kh/", host: "kh.tnaot.kh", image: "/images/projects/tnaot-khmer.png", type: "Content Experience", description: "A digital business platform built and maintained as part of the wider TNAOT ecosystem.", stack: ["React", "CMS", "API Integration"], theme: "purple" },
];

const skillGroups = [
  { number: "01", label: "Frontend", skills: ["React.js", "Next.js", "Vue.js", "Astro", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"] },
  { number: "02", label: "Backend & Data", skills: ["Laravel", "PHP", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Directus", "REST APIs"] },
  { number: "03", label: "Beyond code", skills: ["PC building", "Hardware setup", "Office IT support", "Maintenance"] },
];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Laysin Hong, home">LH<span>/</span></a>
        <div className="header-status"><i /> Phnom Penh, Cambodia <span>GMT+7</span></div>
        <button className={`menu-button${menuOpen ? " active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation"><span>Menu</span><i /><i /></button>
        <nav id="main-navigation" className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}><span>01</span> Work</a>
          <a href="#about" onClick={closeMenu}><span>02</span> About</a>
          <a href="#experience" onClick={closeMenu}><span>03</span> Experience</a>
          <a href="#contact" onClick={closeMenu}><span>04</span> Contact</a>
          <a className="resume-nav" href="/resume/Laysin-Hong-CV.pdf" target="_blank" onClick={closeMenu}>Resume ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-meta" data-reveal><span className="availability"><i /> Available for opportunities</span><span>Web developer / IT engineer</span></div>
          <div className="hero-title" data-reveal>
            <div className="hero-side">
              <div className="hero-photo"><Image src="/images/profile/laysin-hong.png" alt="Laysin Hong" fill sizes="220px" priority /></div>
              <p className="hero-intro">Hi, I&apos;m Laysin — a web developer turning ideas into reliable digital products.</p>
              <div className="hero-chips"><span>React</span><span>Next.js</span><span>Laravel</span><span>Directus</span></div>
            </div>
            <h1><span>Build.</span><span>Learn.</span><span className="accent">Ship.</span></h1>
          </div>
          <div className="hero-footer" data-reveal>
            <div className="hero-role"><p>Currently at</p><strong>Koh Thmey Technology Co., Ltd.</strong><span>Since 2025</span><a className="resume-link" href="/resume/Laysin-Hong-CV.pdf" target="_blank">Download CV ↗</a></div>
            <a className="scroll-cue" href="#work"><span>Explore selected work</span><i>↓</i></a>
            <div className="code-card" aria-label="Developer profile code sample"><div className="code-top"><i /><i /><i /><span>developer.js</span></div><code><span className="code-purple">const</span> developer = {'{'}<br />&nbsp;&nbsp;name: <span className="code-green">&quot;Laysin&quot;</span>,<br />&nbsp;&nbsp;location: <span className="code-green">&quot;Phnom Penh&quot;</span>,<br />&nbsp;&nbsp;status: <span className="code-green">&quot;ready to build&quot;</span><br />{'}'};</code></div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Highlights">
          <div><strong>04</strong><span>Live products</span></div><div><strong>02</strong><span>Languages</span></div><div><strong>2025</strong><span>Professional journey</span></div><div><strong>∞</strong><span>Curiosity</span></div>
        </section>

        <div className="tech-marquee" aria-label="Technology stack"><div><span>React.js</span><i>✦</i><span>Next.js</span><i>✦</i><span>Laravel</span><i>✦</i><span>Directus</span><i>✦</i><span>PostgreSQL</span><i>✦</i><span>Astro</span><i>✦</i><span>Node.js</span><i>✦</i><span>React.js</span><i>✦</i><span>Next.js</span><i>✦</i></div></div>

        <section id="work" className="work shell section-space">
          <SectionTitle number="01" label="Selected work" title={<>Products I&apos;ve helped<br />bring to <em>life.</em></>} />
          <div className="project-list">{projects.map((project) => <ProjectCard project={project} key={project.name} />)}</div>
          <div className="early-work" data-reveal>
            <div className="early-work-heading"><span>From the archive</span><h3>Earlier builds that shaped my foundation.</h3></div>
            <div className="early-projects">
              <a href="https://www.travelworldwithme.me/" target="_blank" rel="noreferrer">
                <span className="early-index">05 / Laravel</span><h4>Travel World With Me</h4><p>A full-stack tourism platform with destinations, province and place filtering, hotel listings, reviews, authentication, RESTful APIs, and an admin dashboard.</p><ul><li>Laravel</li><li>Blade</li><li>MySQL</li><li>MVC</li></ul><i>Visit project ↗</i>
              </a>
              <a href="https://youtu.be/-md0eE-4Ct8" target="_blank" rel="noreferrer">
                <span className="early-index">06 / JavaScript</span><h4>Responsive Storefront</h4><p>A responsive product experience with category filtering, interactive cart, likes and sharing, smooth navigation, and localStorage persistence.</p><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>localStorage</li></ul><i>Watch demo ↗</i>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about section-space">
          <div className="shell">
            <SectionTitle number="02" label="About me" title={<>Developer mindset.<br /><em>Engineer&apos;s curiosity.</em></>} />
            <div className="about-layout">
              <div className="portrait-card" data-reveal><Image className="portrait-image" src="/images/profile/laysin-hong.png" alt="Laysin Hong, web developer based in Phnom Penh" fill sizes="(max-width: 900px) 90vw, 32vw" priority /><div className="portrait-shade" /><div className="portrait-code">WEB / PNH / 2025</div><span className="portrait-ring">Laysin Hong · Web developer</span></div>
              <div className="about-copy" data-reveal>
                <p className="lead">I&apos;m a recent Information Technology Engineering graduate from the Royal University of Phnom Penh, now building real products used across Cambodia.</p>
                <div className="two-column-copy"><p>I work across frontend, backend, databases, and CMS platforms. I enjoy turning requirements into clean, responsive interfaces and keeping production systems dependable after launch.</p><p>I&apos;m also comfortable beyond the browser: building PCs, troubleshooting hardware, and handling day-to-day office IT support. I learn quickly, work hard, and stay curious when a problem is unfamiliar.</p></div>
                <a className="text-link" href="mailto:honglaysin@gmail.com">Let&apos;s work together <span>↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section shell section-space">
          <div className="skills-heading" data-reveal><span>Capabilities</span><p>The tools I use to move from an idea to a working product.</p></div>
          <div className="skill-groups">{skillGroups.map((group) => <article key={group.label} data-reveal><div><span>{group.number}</span><h3>{group.label}</h3></div><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
        </section>

        <section id="experience" className="experience shell section-space">
          <SectionTitle number="03" label="Journey" title={<>Learning fast.<br /><em>Building for real.</em></>} />
          <div className="timeline">
            <article data-reveal><div className="timeline-date"><i />2025 — Present</div><div><p>Experience</p><h3>Web Developer</h3><a href="https://www.kohthmey.com/" target="_blank" rel="noreferrer">Koh Thmey Technology Co., Ltd. ↗</a></div><p>Building and maintaining production websites across the company&apos;s media and technology platforms, working with React, Next.js, Directus, and PostgreSQL.</p></article>
            <article data-reveal><div className="timeline-date"><i />2022 — 2026</div><div><p>Education</p><h3>Bachelor&apos;s in Information Technology Engineering</h3><span>Royal University of Phnom Penh</span></div><p>A practical engineering foundation spanning software development, databases, networking, computer systems, and technical problem-solving.</p></article>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="shell contact-inner">
            <p className="section-tag" data-reveal><span>04</span> Start a conversation</p>
            <div className="contact-title" data-reveal><p>Have an opportunity, project,<br />or interesting problem?</p><h2>Let&apos;s build<br /><em>something great.</em></h2></div>
            <div className="contact-actions" data-reveal><a className="email-button" href="mailto:honglaysin@gmail.com"><span>honglaysin@gmail.com</span><i>↗</i></a><div className="contact-details"><a href="tel:+85587497386">+855 (0) 87 497 386</a><span>Phnom Penh, Cambodia</span><span>Khmer / English</span><a href="/resume/Laysin-Hong-CV.pdf" target="_blank">Download CV ↗</a></div></div>
            <footer><a className="wordmark" href="#top">LH<span>/</span></a><p>© {new Date().getFullYear()} Laysin Hong</p><div><a href="https://github.com/honglaysin" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div></footer>
          </div>
        </section>
      </main>
    </>
  );
}

function SectionTitle({ number, label, title }) { return <div className="section-title" data-reveal><p className="section-tag"><span>{number}</span>{label}</p><h2>{title}</h2></div>; }

function ProjectCard({ project }) {
  return <article className={`project-card theme-${project.theme}`} data-reveal><a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><div className="preview-top"><span>{project.host}</span><span>Live ↗</span></div><ProjectPreview project={project} /><span className="project-number">{project.index}</span></a><div className="project-copy"><div><p>{project.type}</p><h3>{project.name}</h3></div><div className="project-role"><span>My role</span><strong>Development & maintenance</strong></div><p>{project.description}</p><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><a href={project.url} target="_blank" rel="noreferrer">View live project <span>↗</span></a></div></article>;
}

function ProjectPreview({ project }) {
  return <div className="mockup screenshot-mock"><div className="browser-chrome"><span /><span /><span /><small>{project.host}</small></div><div className="screenshot-image"><Image src={project.image} alt={`${project.name} website homepage`} fill sizes="(max-width: 900px) 88vw, 58vw" /></div></div>;
}
