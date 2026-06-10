"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, ChevronDown, Mail } from "lucide-react";

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── Data ──────────────────────────────────────────────────────────────── */

const projects = [
  {
    title: "MUSE",
    tagline: "Find music by feeling",
    description:
      "Describe an emotion and discover its soundtrack. Powered by Groq Llama 3.3, pulling results from Spotify, Audius, and iTunes with dynamic color theming.",
    tech: ["Next.js", "Groq", "Spotify API", "TypeScript"],
    url: "https://muse-music-search-by-feeling.vercel.app",
    github: "https://github.com/haven7777/MUSE-music-search-by-feeling",
  },
  {
    title: "Resume AI",
    tagline: "AI-powered job match",
    description:
      "Three-agent LangGraph pipeline (HR, Tech, Market analysts) that scores your resume against any job posting. FastAPI backend, Next.js frontend, Supabase storage.",
    tech: ["LangGraph", "FastAPI", "Next.js", "Supabase"],
    url: "https://resume-ai-gray-one.vercel.app",
    github: "https://github.com/haven7777/Resume-AI",
  },
  {
    title: "Mission Control",
    tagline: "Autonomous finance agents",
    description:
      "Multi-agent financial analysis system that autonomously researches, analyzes, and synthesizes market data into actionable insights.",
    tech: ["LangGraph", "FastAPI", "Next.js", "Python"],
    url: "https://frontend-seven-swart-31.vercel.app",
    github: "https://github.com/haven7777/mission-control-financial-agent",
  },
];

const stack = [
  "Next.js", "TypeScript", "Python", "LangGraph",
  "FastAPI", "Supabase", "Node.js", "Tailwind CSS",
];

/* ─── Helpers ───────────────────────────────────────────────────────────── */

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Nav ───────────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center px-6 sm:px-10 h-14 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md">
      <span
        className="text-sm font-bold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-archivo), sans-serif", color: "var(--color-fg)" }}
      >
        BI
      </span>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 max-w-5xl mx-auto pt-14">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-xl">
          {/* Available for work badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#4ade80",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "var(--color-fg)" }}
          >
            Ben<br />Isacov
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="max-w-md"
          >
            <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: "var(--color-secondary)" }}>
              Full Stack &amp; AI Engineer
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              I build practical tools and workflow automations — from multi-agent AI
              pipelines to full-stack web products that actually help people get things done.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              View Projects <ArrowUpRight size={15} />
            </a>
            <a
              href="https://github.com/haven7777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:bg-[var(--color-border)] active:scale-95"
              style={{ borderColor: "var(--color-border)", color: "var(--color-secondary)" }}
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ben-isacov-939574389"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:bg-[var(--color-border)] active:scale-95"
              style={{ borderColor: "var(--color-border)", color: "var(--color-secondary)" }}
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        style={{ color: "var(--color-muted)" }}
        aria-label="Scroll to projects"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 60% 40%, rgba(59,130,246,0.07) 0%, transparent 65%)",
        }}
      />
    </section>
  );
}

/* ─── Projects ──────────────────────────────────────────────────────────── */

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div
        className="group relative flex flex-col h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
          boxShadow: "0 0 0 0 rgba(59,130,246,0)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(59,130,246,0.15)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(59,130,246,0.4)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 rgba(59,130,246,0)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
        }}
      >
        <span
          className="text-xs font-bold tabular-nums mb-5 block"
          style={{ color: "var(--color-border)", fontFamily: "var(--font-archivo), sans-serif" }}
        >
          0{index + 1}
        </span>

        <h3
          className="text-xl font-bold mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-archivo), sans-serif", color: "var(--color-fg)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: "var(--color-accent)" }}>
          {project.tagline}
        </p>
        <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--color-muted)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-md"
              style={{ backgroundColor: "rgba(59,130,246,0.12)", color: "#93C5FD", border: "1px solid rgba(59,130,246,0.25)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-150 hover:gap-2"
            style={{ color: "var(--color-accent)" }}
          >
            Live site <ExternalLink size={13} />
          </a>
          <span style={{ color: "var(--color-border)" }}>·</span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-150 hover:opacity-70"
            style={{ color: "var(--color-muted)" }}
          >
            <GithubIcon size={13} /> Code
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-28 max-w-5xl mx-auto">
      <FadeUp>
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-3xl sm:text-4xl font-black tracking-tight"
            style={{ color: "var(--color-fg)" }}
          >
            Projects
          </h2>
          <a
            href="https://github.com/haven7777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-150"
            style={{ color: "var(--color-secondary)" }}
          >
            All repos <ArrowUpRight size={16} />
          </a>
        </div>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─── Stack ─────────────────────────────────────────────────────────────── */

function Stack() {
  return (
    <section className="px-6 sm:px-10 py-20 max-w-5xl mx-auto border-t" style={{ borderColor: "var(--color-border)" }}>
      <FadeUp>
        <p className="text-base font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--color-fg)" }}>
          Tech I work with
        </p>
        <div className="flex flex-wrap gap-3">
          {stack.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "rgba(59,130,246,0.12)",
                color: "#93C5FD",
                border: "1px solid rgba(59,130,246,0.25)",
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* CTA band */}
      <div className="px-6 sm:px-10 py-16 max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3
            className="text-2xl font-black mb-1"
            style={{ fontFamily: "var(--font-archivo), sans-serif", color: "var(--color-fg)" }}
          >
            Let&apos;s build something
          </h3>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="mailto:benisacov@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            <Mail size={14} /> Contact me
          </a>
          <a
            href="https://github.com/haven7777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 hover:bg-[var(--color-border)] active:scale-95"
            style={{ borderColor: "var(--color-border)", color: "var(--color-secondary)" }}
          >
            <GithubIcon size={14} /> GitHub
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 sm:px-10 py-5 max-w-5xl mx-auto flex items-center justify-between border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <span className="text-xs" style={{ color: "var(--color-muted)" }}>
          © 2025 Ben Isacov
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ben-isacov-939574389"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--color-muted)" }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href="https://github.com/haven7777"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--color-muted)" }}
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
