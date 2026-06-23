import { useState } from 'react'
import { ArrowDownRight, Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { additionalProjects, projects, skillGroups, type Project } from './data/projects'

const email = 'dja6@rice.edu'
const github = 'https://github.com/devinja13'
const linkedin = 'https://www.linkedin.com/in/devin-abraham/'
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [{ href: '#top', label: 'Home' }, { href: '#projects', label: 'Projects' }, { href: '#skills', label: 'Skills' }, { href: '#about', label: 'About' }, { href: '#contact', label: 'Resume' }]
  const close = () => setOpen(false)
  return <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur"><div className="page flex h-16 items-center justify-between"><a href="#top" className="flex items-center gap-3" onClick={close} aria-label="Devin Abraham home"><span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-mono text-[10px] font-bold text-paper">DA</span><span className="font-mono text-xs font-medium tracking-[.14em] text-ink">DEVIN ABRAHAM</span></a><nav className="hidden items-center gap-7 md:flex">{links.map(link => <a key={link.href} href={link.href} className="nav-link">{link.label}</a>)}</nav><button className="grid h-9 w-9 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button></div>{open && <nav className="border-t border-line bg-paper px-6 py-4 md:hidden">{links.map(link => <a key={link.href} href={link.href} onClick={close} className="block py-3 font-mono text-xs uppercase tracking-widest">{link.label}</a>)}</nav>}</header>
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) { return <div className="section-header"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{body && <p className="section-body">{body}</p>}</div> }

function ProjectCard({ project, number }: { project: Project; number: number }) {
  return <article className={`case-study art-${project.accent}`}>
    <div className="case-study-art"><span className="case-number">0{number}</span><span className="case-orbit orbit-a" /><span className="case-orbit orbit-b" /><span className="case-marker">{project.visualLabel}</span></div>
    <div className="case-study-content"><div className="flex items-start justify-between gap-6"><div><p className="eyebrow !mb-3">{project.eyebrow} · {project.year}</p><h3 className="font-display text-4xl leading-[.95] tracking-[-.03em] text-ink md:text-5xl">{project.title}</h3></div><span className="project-index">0{number}</span></div><p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">{project.summary}</p><div className="case-study-grid"><CaseStudyItem label="Problem" content={project.challenge} /><CaseStudyItem label="Approach" content={project.approach.join(' ')} /><CaseStudyItem label="Result" content={project.outcome} /></div><div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 pt-5"><div className="flex flex-wrap gap-2">{project.tools.map(tool => <span className="tag" key={tool}>{tool}</span>)}</div><div className="flex items-center gap-3"><a className="text-link" href={github} target="_blank" rel="noreferrer">GitHub <Github size={14} /></a><span className="text-link-muted">Report / demo soon</span></div></div></div>
  </article>
}

function CaseStudyItem({ label, content }: { label: string; content: string }) { return <div><p className="eyebrow !mb-3">{label}</p><p className="text-sm leading-7 text-ink/70">{content}</p></div> }
function SkillGroup({ title, skills, number }: { title: string; skills: string[]; number: number }) { return <div className="skill-group"><span className="font-mono text-[10px] text-signal">0{number}</span><h3>{title}</h3><div className="mt-4 flex flex-wrap gap-2">{skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div> }

function App() { return <div id="top" className="min-h-screen overflow-x-hidden"><Navbar /><main>
  <section className="page hero-section"><div><p className="eyebrow">Rice University · Operations Research & Data Science</p><h1>Building models for <em>better decisions.</em></h1><p className="hero-copy">I’m Devin Abraham. I work on optimization, data science, simulation, and applied decision systems—from urban forestry and elevator dispatch to sports analytics and reinforcement learning.</p><div className="mt-8 flex flex-wrap gap-3"><a className="button-primary" href="#projects">View projects <ArrowDownRight size={16} /></a><a className="button-quiet" href={resumeUrl} target="_blank" rel="noreferrer">Resume <Download size={15} /></a><a className="button-quiet" href={github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a className="button-quiet" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></div><div className="hero-system" aria-hidden="true"><span>OPTIMIZE</span><i /><b>SIMULATE</b><strong>DECIDE</strong></div></section>

  <section className="signal-strip"><div className="page grid gap-5 sm:grid-cols-3"><p>Optimization <span>→</span> real constraints</p><p>Simulation <span>→</span> policy insight</p><p>Data systems <span>→</span> usable decisions</p></div></section>

  <section id="projects" className="page scroll-section"><SectionHeader eyebrow="01 / Featured projects" title="Four systems, four kinds of decisions." body="Each project starts with a real constraint set and ends with a model, simulation, or analysis designed to make a decision clearer." /><div className="mt-14 space-y-10">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} number={index + 1} />)}</div></section>

  <section className="border-y border-line bg-white/40"><div className="page scroll-section"><SectionHeader eyebrow="02 / Additional work" title="More ways I like to build." body="A few smaller threads that support the larger projects: practical implementation, data fluency, and clear communication." /><div className="mt-12 grid gap-4 md:grid-cols-3">{additionalProjects.map((project, index) => <article key={project.title} className="compact-project"><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.description}</p><div>{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

  <section id="skills" className="bg-ink text-paper"><div className="page scroll-section"><SectionHeader eyebrow="03 / Skills" title="A toolkit in service of the work." body="The methods below are the ingredients behind the projects above—not a wall of logos." /><div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map((group, index) => <SkillGroup key={group.title} number={index + 1} {...group} />)}</div></div></section>

  <section id="about" className="page scroll-section about-section"><div><SectionHeader eyebrow="04 / About" title="Technical work with real-world stakes." /></div><div><p className="font-display text-3xl leading-tight text-ink md:text-4xl">I’m an Operations Research major and Data Science minor at Rice University.</p><p className="mt-7 max-w-xl text-base leading-8 text-ink/70">I’m interested in optimization, data systems, and the messy real-world decisions that sit between them. I like turning constraints into models people can inspect, test, and use—whether the system is a city, a building, a card game, or a football field.</p></div></section>

  <section id="contact" className="contact-section"><div className="page"><p className="eyebrow">05 / Resume & contact</p><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><h2>Let’s build something <em>useful.</em></h2><div className="flex flex-wrap gap-3"><a className="button-primary" href={resumeUrl} target="_blank" rel="noreferrer">Resume <Download size={16} /></a><a className="button-quiet" href={github} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a><a className="button-quiet" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15} /></a><a className="button-quiet" href={`mailto:${email}`}>Email <Mail size={15} /></a></div></div></div></section>
</main><footer className="border-t border-line"><div className="page flex flex-col gap-3 py-7 text-xs text-ink/55 sm:flex-row sm:items-center sm:justify-between"><span className="font-mono">© {new Date().getFullYear()} DEVIN ABRAHAM</span><span>Operations Research · Data Science · Rice University</span></div></footer></div> }

export default App
