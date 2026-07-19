import Image from "next/image";
import {
  ChartNoAxesColumnIncreasing,
  ChartPie,
  ClipboardCheck,
  HeartHandshake,
  RefreshCw,
  Route,
  Scale,
  Search,
  SquarePen,
  Unplug,
  UsersRound,
} from "lucide-react";
import MotionController from "./motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const navItems = [
  { label: "Why us", href: "#why-us" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
];

const services = [
  {
    title: "AI Learning",
    description: "Build AI confidence across your organisation.",
    image: "/assets/generated/journey-develop-malaysia.webp",
  },
  {
    title: "AI Workplace Transformation",
    description: "Workflow, automation and change management designed around your people.",
    image: "/assets/generated/ai-workplace-transformation-malaysia.webp",
  },
  {
    title: "Recruitment",
    description: "Find people who fit your culture and contribute to where you are going.",
    image: "/assets/generated/recruitment-malaysia.webp",
  },
  {
    title: "HR Advisory",
    description: "Modern HR systems for growing businesses.",
    image: "/assets/generated/hr-advisory-malaysia.webp",
  },
];

const steps = [
  {
    title: "Discover",
    outcome: "See where your people and workflows are today.",
    icon: Search,
  },
  {
    title: "Diagnose",
    outcome: "Find the friction and the opportunities that matter.",
    icon: ChartPie,
  },
  {
    title: "Design",
    outcome: "Shape practical workflows around how work gets done.",
    icon: SquarePen,
  },
  {
    title: "Develop",
    outcome: "Build confidence through hands-on learning and practice.",
    icon: UsersRound,
  },
  {
    title: "Transform",
    outcome: "Embed better habits so progress keeps moving.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const principles = [
  {
    title: "Human first",
    description: "Technology should strengthen people.",
    icon: HeartHandshake,
  },
  {
    title: "Practical, not theoretical",
    description: "Useful change starts with real work.",
    icon: ClipboardCheck,
  },
  {
    title: "People and business focused",
    description: "Progress should serve both.",
    icon: Scale,
  },
  {
    title: "Transformation over training",
    description: "Habits change, not just knowledge.",
    icon: RefreshCw,
  },
];

const testimonials = [
  ["Guiding Essence helped our leadership team turn uncertainty into a clear direction our people could trust.", "Mina Tan", "COO, Meridian Health", "/assets/hero/guiding-conversation.png"],
  ["The journey was grounded, ambitious and deeply human. Our team is more confident now.", "Ravi Patel", "Head of People, Hikari Retail", "/assets/generated/testimonial-ravi-malaysia.webp"],
];

const insights = [
  {
    title: "Practical design is an AI advantage",
    description: "Thoughtful implementation is what turns possibility into useful work.",
    image: "/assets/generated/insight-ai-malaysia.webp",
    topic: "AI and strategy",
  },
  {
    title: "Leading through changing expectations",
    description: "Workplace transformation works when outcomes and experience move together.",
    image: "/assets/generated/insight-leadership-malaysia.webp",
    topic: "Leadership",
  },
  {
    title: "Beyond one-off training",
    description: "How teams build learning into the way work actually gets done.",
    image: "/assets/generated/insight-productivity-malaysia.webp",
    topic: "Capability",
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
          <Image src={assetPath("/logo.png")} alt="Guiding Essence" width={92} height={92} priority />
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
        <div className="hero-copy gsap-hero-copy" data-gsap>
          <h1>
            <span className="hero-tagline-line">Guiding <span className="hero-tagline-accent">People</span>,</span>
            <span className="hero-tagline-line">Growing Businesses</span>
          </h1>
          <p className="hero-lede">
            <strong>Better workplaces for every growing business.</strong>
            <span>Helping businesses grow by empowering people and transforming the way work gets done.</span>
          </p>
          <a className="button button-primary" href="#contact">Talk to Us <Arrow /></a>
        </div>
        <figure className="hero-media gsap-hero-media" data-gsap>
          <Image src={assetPath("/assets/hero/guiding-team.png")} alt="A small leadership team working together around a table" fill priority sizes="(min-width: 960px) 52vw, 100vw" />
        </figure>
      </div>
      <div className="shell confidence-line">
        <p>Practical AI. Stronger teams. Better workplaces.</p>
      </div>
    </section>
  );
}

function Shift() {
  return (
    <section className="section shift-section">
      <div className="shell shift-heading gsap-section-reveal" data-gsap>
        <p className="kicker">The workplace is changing</p>
        <h2>Change can create friction or move people forward.</h2>
        <p>New tools only work when people have a clear path through them.</p>
      </div>
      <div className="shell change-grid" aria-label="A visual comparison of workplace approaches">
        <article className="change-card change-card-fragmented">
          <figure className="change-image gsap-media">
            <Image src={assetPath("/assets/generated/workplace-fragmented-malaysia.webp")} alt="A Malaysian team managing fragmented information across several devices" fill sizes="(min-width: 801px) 50vw, 100vw" />
          </figure>
          <div className="change-caption">
            <span className="change-icon" aria-hidden="true"><Unplug size={22} strokeWidth={1.75} /></span>
            <div><p>Without a clear path</p><h3>Tools multiply. Work fragments.</h3></div>
          </div>
        </article>
        <article className="change-card change-card-aligned">
          <figure className="change-image gsap-media">
            <Image src={assetPath("/assets/generated/workplace-aligned-malaysia.webp")} alt="A Malaysian team collaborating confidently around one shared workflow" fill sizes="(min-width: 801px) 50vw, 100vw" />
          </figure>
          <div className="change-caption">
            <span className="change-icon" aria-hidden="true"><Route size={22} strokeWidth={1.75} /></span>
            <div><p>With Guiding Essence</p><h3>One direction. People move together.</h3></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="section approach-section">
      <div className="shell why-grid">
        <div className="why-heading gsap-section-reveal" data-gsap>
          <p className="kicker">Why Guiding Essence</p>
          <h2>Transformation built for the people doing the work.</h2>
        </div>
        <div className="principle-grid">
          {principles.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className={`principle principle-${index + 1}`}>
              <span className="principle-icon" aria-hidden="true">
                <Icon size={32} strokeWidth={1.65} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="shell journey-heading gsap-section-reveal" data-gsap>
        <p className="kicker">Workplace transformation journey</p>
        <h2>Five stages. One practical path forward.</h2>
      </div>
      <ol className="shell journey-list">
        {steps.map(({ title, outcome, icon: Icon }, index) => (
          <li key={title} className="journey-step" data-gsap>
            <span className="journey-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className="journey-step-body">
              <span className="journey-icon" aria-hidden="true"><Icon size={46} strokeWidth={1.7} /></span>
              <div className="journey-step-copy">
                <h3>{title}</h3>
                <p>{outcome}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="shell section-heading gsap-section-reveal" data-gsap>
        <p className="kicker">How we can help</p>
        <h2>Practical support for an AI-ready workplace.</h2>
      </div>
      <div className="shell service-grid">
        {services.map((service, index) => (
          <article className={`service-card service-${index + 1}`} data-gsap key={service.title}>
            <div className="service-image gsap-media"><Image src={assetPath(service.image)} alt="" fill sizes="(min-width: 960px) 40vw, 100vw" /></div>
            <div className="service-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="section insights-section">
      <div className="shell insights-top gsap-section-reveal" data-gsap>
        <p className="kicker">Workplace insights</p>
        <h2>Fresh thinking for modern workplace leaders.</h2>
      </div>
      <div className="shell insights-list">
        {insights.map((insight) => (
          <article className="insight" key={insight.title}>
            <div className="insight-image gsap-media"><Image src={assetPath(insight.image)} alt="" fill sizes="(min-width: 960px) 25vw, 100vw" /></div>
            <div><p className="insight-topic">{insight.topic}</p><h3>{insight.title}</h3><p>{insight.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="shell section-heading gsap-section-reveal" data-gsap><p className="kicker">What our clients say</p><h2>Trusted guidance for important change.</h2></div>
      <div className="shell testimonial-grid">
        {testimonials.map(([quote, name, role, photo]) => (
          <figure className="testimonial gsap-section-reveal" data-gsap key={name}>
            <div className="testimonial-photo"><Image src={assetPath(photo)} alt="" fill sizes="120px" /></div>
            <blockquote>“{quote}”</blockquote>
            <figcaption><strong>{name}</strong><span>{role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="contact" className="closing">
      <div className="shell closing-grid gsap-section-reveal" data-gsap>
        <div><p className="kicker">Ready to begin?</p><h2>Build a stronger workplace for your people and your business.</h2></div>
        <div className="closing-action"><p>Let&apos;s start with a conversation about your business, your people and your next stage of growth.</p><a className="button button-light" href="mailto:hello@guidingessence.com">Book a Discovery Call <Arrow /></a></div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div className="shell footer-content"><div><strong>Guiding Essence</strong><p>Guiding People, Growing Businesses</p></div><div className="footer-links"><a href="#why-us">About</a><a href="#services">Services</a><a href="#insights">Workplace Insights</a><a href="mailto:hello@guidingessence.com">Contact</a></div><div className="footer-links"><a href="https://www.linkedin.com/company/guiding-essence/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/guidingessence.co/" target="_blank" rel="noreferrer">Instagram</a></div></div><div className="shell copyright">© 2026 Guiding Essence. All rights reserved.</div></footer>;
}

export default function Home() {
  return <div className="page-shell"><MotionController /><Header /><main><Hero /><Shift /><WhyUs /><Journey /><Services /><Insights /><Testimonials /><Closing /></main><Footer /></div>;
}
