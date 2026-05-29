import { useState, useEffect, useRef } from 'react'
import './index.css'
import myphoto from '/myphoto.jpg' 

// ─── DATA ───────────────────────────────────────────────
const skills = [
  {
    category: 'Machine Learning & NLP',
    tags: ['PyTorch', 'TensorFlow', 'Hugging Face', 'DistilBERT', 'XGBoost', 'Scikit-Learn', 'RAG Pipelines', 'FAISS', 'spaCy', 'NLTK'],
  },
  {
    category: 'Data Engineering',
    tags: ['PySpark', 'Delta Lake', 'Informatica ETL', 'SQL', 'Perceval', 'ETL/ELT Design','SQLite', 'SQL'],
  },
  {
    category: 'MLOps & Development',
    tags: ['Python', 'FastAPI', 'Docker', 'Git', 'React'],
  },
  {
    category: 'Analytics & Visualisation',
    tags: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'DAX'],
  },
]

const projects = [
  {
    emoji: '📚',
    color: 'linear-gradient(135deg, #ddd8ea, #d0cae0)',
    tag: 'Full Stack · RAG · LLM',
    title: 'Gnostic Library',
    desc: 'Full-stack RAG application using Mistral-7B with FAISS vector search for semantic retrieval across large document collections, with long-text summarisation, comparative analysis, and entity extraction.',
    links: [{ label: 'Live Demo', href: 'https://the-naghammadi-library.onrender.com/' }],
  },
  {
    emoji: '🗂️',
    color: 'linear-gradient(135deg, #d8e8f0, #c8dce8)',
    tag: 'NLP · Transformers · MLOps',
    title: 'Git Commit Classifier',
    desc: 'End-to-end ML pipeline combining TF-IDF baselines and fine-tuned DistilBERT to automate commit categorisation for enterprise tax compliance. Includes active learning loop for iterative sample selection.',
    links: [{ label: 'GitHub', href: 'https://github.com/anubhavsingh1729/dempe-classification' }],
  },
  {
    emoji: '🛣️',
    color: 'linear-gradient(135deg, #d4ddd0, #c8d8c4)',
    tag: 'Computer Vision · Accessibility',
    title: 'Road Scene Understanding',
    desc: 'Assistive navigation system using DeepLabV3-ResNet50 trained on Cityscapes & Mapillary for road scene segmentation, with Valhalla API integration to generate step-by-step walking directions.',
    links: [{ label: 'GitHub', href: 'https://github.com/anubhavsingh1729/RSU-VI' }],
  },
]

const experience = [
  {
    date: 'Sep 2025 - Present',
    title: 'Assistant Professor',
    company: 'Dept. of Computer Engineering, GBPUA&T Pantnagar',
    desc: 'Supervising 3 final-year B.Tech projects in applied AI/ML including RAG-based agri-tech chatbots, and an M.Tech thesis on multimodal beehive health monitoring integrating acoustic, thermal, weight and visual sensors.',
    tags: ['RAG', 'Applied ML', 'Research Supervision'],
  },
  {
    date: 'Apr 2024 - Sep 2024',
    title: 'Student Researcher',
    company: 'Chair of Open Source Software, FAU Erlangen, Germany',
    desc: 'Increased unit test coverage by ~30% using Python testing frameworks, reducing data quality failures. Built and maintained GitHub data ingestion pipelines using Perceval with PySpark and Delta Lake for large open-source repository datasets.',
    tags: ['PySpark', 'Delta Lake', 'Perceval', 'Unit Testing'],
  },
  {
    date: 'Feb 2021 - Aug 2022',
    title: 'ETL Developer',
    company: 'Tata Consultancy Services, New Delhi',
    desc: 'Optimised Informatica ETL pipelines reducing pharmaceutical data refresh times by 50%. Built Power BI and Tableau dashboards improving operational visibility by 25-30% for cross-functional stakeholders.',
    tags: ['Informatica', 'Power BI', 'Tableau', 'SQL'],
  },
]

const education = [
  {
    date: 'Oct 2022 - Mar 2025',
    title: 'M.Sc. in Data Science',
    company: 'Friedrich Alexander Universität, Erlangen, Germany',
    desc: 'Specialisation in AI/ML with coursework in Mathematics of Learning, Deep Learning and Pattern Analysis. Thesis on deterministic classification of Git commits using transformer-based NLP for enterprise tax compliance.',
    tags: ['Deep Learning', 'NLP', 'Pattern Analysis', 'Advanced Data Engineering'],
  },
  {
    date: 'Jul 2016 - Aug 2020',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'JUET, Guna, India',
    desc: 'Final project on Multimodal Image Captioning with CNN-RNN for Visual Scene Description, combining computer vision and natural language generation.',
    tags: ['CNN-RNN', 'Computer Vision', 'Image Captioning'],
  },
]

// ─── HOOKS ──────────────────────────────────────────────
function useScrollFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── COMPONENTS ─────────────────────────────────────────
function FadeSection({ children, className = '' }) {
  const ref = useScrollFadeIn()
  return <div ref={ref} className={`fade-in ${className}`}>{children}</div>
}

function Navbar() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
  return (
    <nav>
      <a href="#hero" className="nav-logo">Anubhav Singh</a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Data & ML Professional · NLP Specialist</p>
          <h1>Building <em>intelligent</em><br />systems</h1>
          <p className="hero-desc">
            Hi, I'm Anubhav, a Data & ML professional with an M.Sc. in Data Science from FAU Erlangen, Germany. 
            I specialise in NLP, transformer-based models and end-to-end ML pipelines.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="https://medium.com/@anubhavsingh1729" target="_blank" rel="noreferrer" className="btn-secondary">My Blog ↗</a>
          </div>
        </div>
        <div className="hero-image-area">
          <div className="hero-avatar" style={{ position: 'relative' }}>
            AS
            {/* <img src={myphoto} alt="Anubhav Singh" className="hero-avatar-img" />  */}
            <div className="hero-stats">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <FadeSection>
          <p className="section-label">About</p>
          <h2 className="section-title">A little about <em>me</em></h2>
        </FadeSection>
        <FadeSection>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Data & ML professional based in India, holding an M.Sc. in Data Science from Friedrich Alexander 
                Universität Erlangen-Nürnberg, Germany. My work spans the full ML lifecycle, from data 
                engineering and pipeline design to transformer fine-tuning and production deployment.
              </p>
              <p>
                My master's thesis tackled deterministic classification of Git commits using fine-tuned DistilBERT 
                for enterprise tax compliance workflows. At FAU, I also built scalable GitHub data ingestion 
                pipelines with PySpark and Delta Lake. Earlier, at TCS, I optimised enterprise ETL 
                pipelines and built analytics dashboards for pharmaceutical clients.
              </p>
              <p>
                I'm currently an Assistant Professor at GBPUA&T Pantnagar, supervising applied AI/ML research 
                projects in agri-tech and multimodal sensing. I am passionate about AI systems that are built with Human values in mind. Actively exploring the intersection of AI and Ethics.
              </p>
            </div>
            <div className="about-highlights">
              {[
                { title: 'Research-oriented', desc: 'Rigorous experimentation, benchmarking, hyperparameter tuning and reproducibility.' },
                { title: 'Pipeline Builder', desc: 'End-to-end ML pipelines from raw data ingestion to modular, production-grade deployment.' },
                {  title: 'NLP & Transformers', desc: 'Fine-tuning BERT-family models for classification, RAG pipelines and semantic search.' },
                { title: 'Always learning', desc: 'Currently deepening German language skills and exploring Ethical AI applications.' },
              ].map(h => (
                <div className="highlight-card" key={h.title}>
                  <div className="icon">{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <FadeSection>
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I work <em>with</em></h2>
        </FadeSection>
        <FadeSection>
          <div className="skills-grid">
            {skills.map(s => (
              <div className="skill-category" key={s.category}>
                <h3>{s.category}</h3>
                <div className="skill-tags">
                  {s.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <FadeSection>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've <em>built</em></h2>
        </FadeSection>
        <FadeSection>
          <div className="projects-grid">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <div className="project-thumb" style={{ background: p.color }}>
                  {p.emoji}
                </div>
                <div className="project-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-links">
                    {p.links.map(l => (
                      <a key={l.label} href={l.href} className="project-link">{l.label} ↗</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="timeline-dot" />
          <span className="timeline-date">{item.date}</span>
          <h3>{item.title}</h3>
          <h4>{item.company}</h4>
          <p>{item.desc}</p>
          <div className="timeline-badges">
            {item.tags.map(t => <span className="badge" key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

function Experience() {
  const [tab, setTab] = useState('experience')
  return (
    <section id="experience">
      <div className="section-inner">
        <FadeSection>
          <p className="section-label">Journey</p>
          <h2 className="section-title">Where I've <em>been</em></h2>
          <div className="timeline-tabs">
            <button className={`tab-btn ${tab === 'experience' ? 'active' : ''}`} onClick={() => setTab('experience')}>
              Work Experience
            </button>
            <button className={`tab-btn ${tab === 'education' ? 'active' : ''}`} onClick={() => setTab('education')}>
              Education
            </button>
          </div>
        </FadeSection>
        <FadeSection>
          {tab === 'experience' ? <Timeline items={experience} /> : <Timeline items={education} />}
        </FadeSection>
      </div>
    </section>
  )
}

function Contact() {
  const contacts = [
    { icon: '✉️', label: 'Email', value: 'anubhav.singh1729@gmail.com', href: 'mailto:anubhav.singh1729@gmail.com', color: 'var(--blush)' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/anubhavsingh10', href: 'https://linkedin.com/in/anubhavsingh10', color: 'var(--sky)' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/anubhavsingh1729', href: 'https://github.com/anubhavsingh1729', color: 'var(--sage)' },
  ]
  return (
    <section id="contact">
      <div className="section-inner">
        <FadeSection>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's <em>connect</em></h2>
          <div className="contact-inner">
            <p>
              Whether you have a research collaboration, ML engineering role, or just want to talk data and AI,
              my inbox is always open. I respond within a day or two.
            </p>
            <div className="contact-links">
              {contacts.map(c => (
                <a key={c.label} href={c.href} className="contact-item">
                  <div className="contact-icon" style={{ background: c.color }}>{c.icon}</div>
                  <div className="contact-info">
                    <span>{c.label}</span>
                    <span>{c.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <span className="logo">Anubhav Singh</span>
      <p>{new Date().getFullYear()}</p>
    </footer>
  )
}

// ─── APP ────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
