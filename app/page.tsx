import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  HeartHandshake,
  MessageCircle,
  Presentation,
  Star,
  UsersRound,
  Zap,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const navItems = [
  { label: "Why us", href: "#why-us" },
  { label: "Programmes", href: "#services" },
];

const trainingCredentials: Array<{
  lines: string[];
  tone: string;
  icon?: LucideIcon;
  logo?: string;
}> = [
  {
    lines: ["HRD Corp", "Claimable Courses"],
    logo: "/assets/hrd-corp-claimable.webp",
    tone: "jade",
  },
  {
    lines: ["Public &", "In-house Training"],
    icon: Presentation,
    tone: "cyan",
  },
  {
    lines: ["Team Building"],
    icon: UsersRound,
    tone: "indigo",
  },
  {
    lines: ["Registered HRD Corp", "Training Provider"],
    logo: "/assets/hrd-corp-registered-training-provider.webp",
    tone: "hrd",
  },
];

const featuredProgrammes = [
  {
    prefix: "AI for HR:",
    title: "Work Smarter",
    subtitle: "Everyday Productivity",
    outcomes: ["Automate repetitive tasks", "Create content faster", "Organize information", "Improve accuracy"],
    image: "/assets/generated/ai-learning-malaysia.webp",
    alt: "A facilitator leading a practical workplace learning session",
    tone: "violet",
  },
  {
    prefix: "AI for HR:",
    title: "Hire Smarter",
    subtitle: "Talent Acquisition",
    outcomes: ["Smart sourcing", "Resume screening", "Interview support", "Candidate experience"],
    image: "/assets/generated/recruitment-malaysia.webp",
    alt: "A recruitment adviser speaking with a candidate",
    tone: "cyan",
  },
  {
    prefix: "AI for HR:",
    title: "Reward Smarter",
    subtitle: "Compensation & Benefits",
    outcomes: ["Compensation analysis", "Market benchmarking", "Benefits optimization", "Total rewards insights"],
    image: "/assets/generated/hr-advisory-malaysia.webp",
    alt: "An HR adviser discussing workplace planning with a professional",
    tone: "magenta",
  },
  {
    prefix: "AI for HR:",
    title: "Lead Smarter",
    subtitle: "Strategic HR",
    outcomes: ["Workforce planning", "People analytics", "Performance insights", "Strategic decision support"],
    image: "/assets/generated/vision-mission-malaysia.webp",
    alt: "A Malaysian leadership team discussing workplace strategy",
    tone: "jade",
  },
  {
    prefix: "Advanced Certificate in",
    title: "AI for Human Capital Management",
    subtitle: null,
    outcomes: ["Covers all key HR areas", "Practical tools & frameworks", "Real-world applications", "Certificate of completion"],
    image: "/assets/generated/ai-workplace-transformation-malaysia.webp",
    alt: "A Malaysian team applying practical workplace transformation tools",
    tone: "indigo",
  },
];

const reasons = [
  {
    title: "People First",
    description: "We believe transformation starts with people.",
    icon: HeartHandshake,
    tone: "violet",
  },
  {
    title: "Practical & Actionable",
    description: "Real tools, real strategies that create real impact.",
    icon: Zap,
    tone: "magenta",
  },
  {
    title: "Built for SMEs",
    description: "Solutions that are scalable, affordable and results-driven.",
    icon: Building2,
    tone: "jade",
  },
  {
    title: "Real Experience",
    description: "Consultants with deep HR and business experience.",
    icon: Star,
    tone: "cyan",
  },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <a className="brand" href="#top" aria-label="Guiding Essence home">
          <Image src={assetPath("/logo.webp")} alt="Guiding Essence" width={92} height={92} priority />
          <span>Guiding Essence</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Contact</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy reveal-hero">
          <h1>
            <span className="hero-tagline-line">Guiding <span className="hero-tagline-people">People</span></span>
            <span className="hero-tagline-line">Growing <span className="hero-tagline-businesses">Businesses</span></span>
          </h1>
          <p className="hero-lede">
            <strong>Better workplaces for every growing business.</strong>
            <span>Helping businesses grow by empowering people and transforming the way work gets done.</span>
          </p>
          <a className="button button-primary" href="#services">Explore Programmes <Arrow /></a>
        </div>
        <div className="hero-media-frame reveal-hero-media">
          <figure className="hero-media">
            <Image src={assetPath("/assets/hero/in-person-training-malaysia-v4.webp")} alt="A Chinese Malaysian trainer presenting to participants seated in front of a Guiding Essence slide" fill priority sizes="(min-width: 960px) 52vw, 100vw" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function TrainingCredentials() {
  return (
    <section className="training-credentials" aria-label="Training credentials">
      <div className="shell credential-grid">
        {trainingCredentials.map(({ lines, icon: Icon, logo, tone }) => (
          <div className={`credential-item tone-${tone}`} key={lines.join(" ")}>
            {logo ? (
              <span className="credential-logo-wrap">
                <Image className="credential-logo" src={assetPath(logo)} alt={lines.join(" ")} width={64} height={64} />
              </span>
            ) : Icon ? (
              <span className="credential-icon" aria-hidden="true">
                <Icon size={34} strokeWidth={1.8} />
              </span>
            ) : null}
            <p>
              {lines.map((line) => <span key={line}>{line}</span>)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProgrammes() {
  return (
    <section id="services" className="featured-programmes">
      <div className="shell programmes-heading reveal-on-scroll">
        <div className="programmes-heading-copy">
          <p className="programmes-kicker">Featured programmes</p>
          <h2>Practical programmes. Real impact.</h2>
        </div>
      </div>

      <div className="programmes-carousel shell">
        <a className="carousel-control carousel-control-left" href="#programme-1" aria-label="View previous programmes">‹</a>
        <div className="programme-grid">
          {featuredProgrammes.map((programme, index) => (
            <article className={`programme-card tone-${programme.tone}`} id={`programme-${index + 1}`} key={programme.title}>
              <div className="programme-image">
                <Image src={assetPath(programme.image)} alt={programme.alt} fill sizes="(min-width: 1280px) 280px, (min-width: 801px) 20vw, 82vw" />
              </div>
              <div className="programme-content">
                <h3><span>{programme.prefix}</span><strong>{programme.title}</strong></h3>
                <p className="programme-subtitle" aria-hidden={programme.subtitle ? undefined : true}>{programme.subtitle ?? "\u00a0"}</p>
                <ul className="programme-outcomes">
                  {programme.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
                <a className="programme-link" href="#contact">Learn more <ArrowRight size={18} strokeWidth={2.2} /></a>
              </div>
            </article>
          ))}
        </div>
        <a className="carousel-control carousel-control-right" href="#programme-5" aria-label="View more programmes">›</a>
      </div>
    </section>
  );
}

function WhyGuidingEssence() {
  return (
    <section id="why-us" className="why-guiding">
      <div className="shell why-guiding-heading reveal-on-scroll">
        <p className="programmes-kicker">Why Guiding Essence</p>
        <h2>People-first transformation that delivers results.</h2>
      </div>
      <div className="shell reason-grid">
        {reasons.map(({ title, description, icon: Icon, tone }) => (
          <article className={`reason tone-${tone}`} key={title}>
            <span className="reason-icon" aria-hidden="true"><Icon size={31} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgrammeCallToAction() {
  return (
    <section id="contact" className="programme-cta-section">
      <div className="shell programme-cta reveal-on-scroll">
        <div className="programme-cta-copy">
          <h2>Ready to build<br />a better workplace?</h2>
          <p>Let&apos;s find the right programme or solution for your business.</p>
          <a className="whatsapp-button" href="https://wa.me/601116725868" target="_blank" rel="noreferrer">
            <MessageCircle size={22} strokeWidth={2} aria-hidden="true" /> WhatsApp Us
          </a>
        </div>
        <div className="programme-cta-image">
          <Image src={assetPath("/assets/hero/guiding-team.webp")} alt="A Malaysian workplace team discussing ideas around a laptop" fill sizes="(min-width: 801px) 58vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div className="shell footer-content"><div><strong>Guiding Essence</strong><p>Guiding People Growing Businesses</p></div><div className="footer-links"><a href="#why-us">Why us</a><a href="#services">Programmes</a><a href="#contact">Contact</a></div><div className="footer-links"><a href="https://www.linkedin.com/company/guiding-essence/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/guidingessence.co/" target="_blank" rel="noreferrer">Instagram</a></div></div><div className="shell copyright">© 2026 Guiding Essence. All rights reserved.</div></footer>;
}

export default function Home() {
  return <div className="page-shell"><Header /><main><Hero /><TrainingCredentials /><FeaturedProgrammes /><WhyGuidingEssence /><ProgrammeCallToAction /></main><Footer /></div>;
}
