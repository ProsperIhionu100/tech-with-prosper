import Nav from "@/components/Nav";
import Section from "@/components/Section";
import {
  about,
  coreSkills,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  traits,
  whyHireMe,
} from "@/content/data";

const card = "rounded-lg border border-line bg-surface p-6";

function Chip({ label, strong }: { label: string; strong?: boolean }) {
  return (
    <span
      className={`rounded border px-2 py-1 font-mono text-xs ${
        strong ? "border-accent/60 text-accent" : "border-line text-muted"
      }`}
    >
      {label}
    </span>
  );
}

function ButtonLink({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-block rounded px-5 py-2.5 font-mono text-sm transition-colors ${
        primary
          ? "bg-accent font-semibold text-black hover:bg-accent/85"
          : "border border-line text-fg hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <div className="dot-grid border-b border-line">
          <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-4 pt-16 sm:px-6">
            <p className="font-mono text-sm text-accent">Hi, my name is</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">{profile.name}</h1>
            <p className="mt-4 font-mono text-xl text-muted sm:text-2xl">
              {profile.title}
              <span className="cursor" aria-hidden="true" />
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted">{profile.tagline}</p>
            <p className="mt-4 font-mono text-sm text-muted">📍 {profile.location}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#projects" primary>
                View Projects
              </ButtonLink>
              <ButtonLink href={profile.github}>GitHub</ButtonLink>
              <ButtonLink href={profile.linkedin}>LinkedIn</ButtonLink>
            </div>
          </div>
        </div>

        {/* About */}
        <Section id="about" command="cat about.md" title="About Me">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-lg border border-accent/40 bg-surface font-mono text-7xl font-bold text-accent">
              P<span className="cursor" aria-hidden="true" />
            </div>
          </div>
        </Section>

        {/* Skills & traits */}
        <Section id="skills" command="ls skills/" title="Skills & Characteristics">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.group} className={card}>
                <h3 className="mb-4 font-mono text-sm font-semibold text-fg">{g.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <Chip key={s} label={s} strong={coreSkills.includes(s)} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-14 mb-6 font-mono text-xl font-semibold">What I bring to a team</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {traits.map((t) => (
              <div key={t.title} className={card}>
                <p className="font-semibold text-accent">{t.title}</p>
                <p className="mt-2 text-sm text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience + education */}
        <Section id="experience" command="git log --career" title="Experience">
          <ol className="space-y-8 border-l border-line pl-6">
            {experience.map((job) => (
              <li key={job.company + job.dates} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role} <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted">{job.dates}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-muted">{job.location}</p>
                <p className="mt-3 text-muted italic">{job.summary}</p>
                <ul className="mt-4 space-y-2 text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="text-accent">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3 className="mt-16 mb-6 font-mono text-xl font-semibold">Education</h3>
          {education.map((e) => (
            <div key={e.title} className={card}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-lg font-semibold">{e.title}</p>
                <span className="font-mono text-sm text-muted">{e.dates}</span>
              </div>
              <p className="mt-1 text-muted">
                {e.school} · {e.location} · <span className="text-accent">{e.note}</span>
              </p>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section id="projects" command="ls projects/" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className={`${card} flex flex-col transition-colors hover:border-accent/60 ${
                  p.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-mono text-lg font-semibold">{p.name}</h3>
                  {p.featured && <Chip label="Featured · Professional" strong />}
                </div>
                <p className="mt-3 flex-1 text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t} label={t} />
                  ))}
                </div>
                <div className="mt-5 flex gap-4 font-mono text-sm">
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      View code →
                    </a>
                  ) : (
                    <span className="text-muted">Private / company project</span>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Live demo →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-sm text-muted">
            More on{" "}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub
            </a>
          </p>
        </Section>

        {/* Why hire me */}
        <Section id="why-me" command="./why_hire_me.sh" title="Why Hire Me">
          <ol className="grid gap-4 md:grid-cols-2">
            {whyHireMe.map((w, i) => (
              <li key={w.title} className={`${card} flex gap-4`}>
                <span className="font-mono text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-semibold">{w.title}</p>
                  <p className="mt-1 text-sm text-muted">{w.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contact */}
        <Section id="contact" command="./contact.sh" title="Let's Connect">
          <div className={`${card} text-center`}>
            <p className="text-lg text-muted">
              I&apos;m currently open to backend and full-stack roles. Let&apos;s build something.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={profile.linkedin} primary>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.github}>GitHub</ButtonLink>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Prosper Ihionu · Tech With Prosper
      </footer>
    </>
  );
}
