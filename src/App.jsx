import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, ClipboardList, Clock, Factory, HardHat, Home, Mail, MapPin, Menu, Phone, Printer,
  Ruler, ShieldCheck, Users, Wrench, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/aph-logo.png";
import umcChurch from "./assets/umc-church.jpg";
import umcChurchWide from "./assets/umc-church-wide.jpg";
import bethel from "./assets/bethel-bible.jpg";
import bethelTall from "./assets/bethel-bible-tall.jpg";
import mack from "./assets/mack-trucks.jpg";
import mackInplant from "./assets/mack-trucks-inplant.jpg";
import airProducts from "./assets/air-products.jpg";

// ------------------------------------------------------------ Content (from aphouser.com: home, services, residential,
// commercial, industrial, about us, projects, personnel resources and contact pages)
const COMPANY = "Arthur P. Houser, Inc.";
const ABBR = "aph";
const END_DATE = "2026-12-03T23:59:59-05:00";
const FOUNDED = 1912;
const YEARS = new Date().getFullYear() - FOUNDED;
const LICENSE = "PA License #002909";
const PHONE = "(610) 965-2664";
const PHONE_TEL = "+16109652664";
const FAX = "(610) 965-3648";
const EMAIL = "info@aphouser.com";
const ADDRESS = ["P.O. Box 325", "Emmaus, PA 18049-0325"];
const HOURS = "Monday – Friday, 8:00 am – 5:00 pm";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Emmaus+PA+18049";

const NAV = [
  ["Services", "#services"],
  ["Markets", "#markets"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const METHODS = [
  { no: "01", icon: HardHat, title: "General construction", text: "Traditional general contracting with one accountable builder, from site work to final finishes." },
  { no: "02", icon: Ruler, title: "Design / build", text: "Complete design / build services, or we work alongside your own design team as the plans come together." },
  { no: "03", icon: ClipboardList, title: "Construction management", text: "Preconstruction, estimating, scheduling and project management that keep budget, safety and quality on target." },
  { no: "04", icon: Wrench, title: "Industrial services", text: "Small projects inside existing, operating facilities, planned around the production process already on the floor." },
];

const PHASES = ["Preconstruction", "Project management", "Construction"];

const MARKETS = [
  {
    key: "residential", sheet: "A-101", title: "Residential", Drawing: HouseElevation,
    lede: "New homes and communities, from concept to completion, plus remodeling that brings the same quality to existing homes.",
    items: ["New single homes and communities", "Remodeling, modernizing and additions", "Step-by-step process from agreement of sale to post-settlement inspection", "Estimates by appointment"],
  },
  {
    key: "commercial", sheet: "A-201", title: "Commercial", Drawing: OfficeElevation,
    lede: "Office parks, commercial centers, medical fit-outs, dealership renovations, churches and institutional buildings.",
    items: ["New office and commercial buildings", "Medical facility fit-outs", "Renovations and expansions", "Value engineering on every project"],
  },
  {
    key: "industrial", sheet: "A-301", title: "Industrial", Drawing: PlantElevation,
    lede: "Physical plants, distribution facilities and specialized interiors, built with the engineer from inception through final construction.",
    items: ["Automated distribution facilities", "Refrigerated facilities and process plants", "Specialized ventilation, acoustics and traffic flow", "Work inside operating plants"],
  },
];

const PROJECTS = [
  { no: "P-01", name: "Air Products", place: "Trexlertown, PA", tag: "Industrial", img: airProducts, cls: "p-wide", alt: "Air Products entrance sign and campus in Trexlertown" },
  { no: "P-02", name: "Mack Trucks", place: "Macungie, PA", tag: "Industrial · in-plant", img: mackInplant, cls: "p-wide", alt: "Houser crew excavating foundations inside the Mack Trucks plant" },
  { no: "P-03", name: "Bethel Bible Church", place: "Emmaus, PA", tag: "Church · new building", img: bethel, cls: "", alt: "Brick and metal-panel building at Bethel Bible Church" },
  { no: "P-04", name: "Jerusalem Western Salisbury United Methodist Church", place: "Salisbury Township, PA", tag: "Church", img: umcChurchWide, cls: "", alt: "White clapboard church with steeple in Salisbury Township" },
  { no: "P-05", name: "Mack Trucks", place: "Macungie, PA", tag: "Industrial", img: mack, cls: "p-tall", alt: "Mack Trucks building entrance with the Mack logo" },
  { no: "P-06", name: "Bethel Bible Church", place: "Emmaus, PA", tag: "Church · new building", img: bethelTall, cls: "p-tall", alt: "Entrance canopy at Bethel Bible Church" },
];

const SCOPE = [
  ["01", "Design & planning", ["Architectural drawings", "Grading / E&S plans", "Construction & building permits"]],
  ["02", "Site & concrete", ["Site and earthwork", "Foundation footings and walls", "Patios, porches, sidewalks, steps", "Piers, pillars, parking decks"]],
  ["03", "Carpentry & steel", ["Wood and steel framing", "Door and window installation"]],
  ["04", "Exterior finishes", ["Vinyl siding", "Stone, stucco, hardcoat, brick", "Roofing, gutters, downspouts", "Exterior trim, mouldings, columns", "Asphalt paving, decks, landscaping"]],
  ["05", "Interior finishes", ["Insulation, drywall, spackle", "Paint and wallpaper", "Interior trim, mouldings, columns", "Cabinetry installation", "Vinyl, laminate, carpet, tile, hardwood"]],
  ["06", "Mechanicals", ["Plumbing", "HVAC", "Electrical work"]],
];

const VALUES = [
  ["Total accountability", "Our commitment to excellence begins with our president and extends to every member of the construction team."],
  ["Listen first, build second", "Your vision, plans and input set the construction approach and the schedule."],
  ["Value engineering", "Hands-on knowledge of materials and methods, applied to every project to protect your budget."],
  ["Single-source responsibility", "One builder for the whole job: quality workmanship, on schedule, at reasonable prices."],
];

const PROJECT_TYPES = ["New home", "Home remodeling or addition", "Commercial building or fit-out", "Church or institutional", "Industrial / in-plant work", "Construction management", "Something else"];

// ------------------------------------------------------------ Line drawings (blueprint elevations)
function HouseElevation() {
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      <path d="M20 128h200M40 128V70l80-48 80 48v58" />
      <path d="M30 76l90-54 90 54" />
      <path d="M150 38v-16h16v26" />
      <rect x="60" y="86" width="30" height="24" /><path d="M75 86v24M60 98h30" />
      <rect x="150" y="86" width="30" height="24" /><path d="M165 86v24M150 98h30" />
      <path d="M108 128V92h24v36" /><circle cx="127" cy="111" r="1.6" />
      <path className="dim" d="M40 136h160M40 132v8M200 132v8" />
    </svg>
  );
}
function OfficeElevation() {
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      <path d="M14 128h212M30 128V34h120v94M150 128V58h60v70" />
      <path d="M30 34h120M26 30h128" />
      {[48, 68, 88].map((y) => [44, 72, 100, 124].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="16" height="12" />))}
      <path d="M78 128v-22h24v22M72 106h36l-4-6H76z" />
      {[162, 186].map((x) => <rect key={x} x={x} y="72" width="14" height="30" />)}
      <path className="dim" d="M30 136h180M30 132v8M210 132v8" />
    </svg>
  );
}
function PlantElevation() {
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      <path d="M10 128h220M20 128V70l30-20v20l30-20v20l30-20v20l30-20v20h50v58" />
      <path d="M190 70V28h12v42M186 28h20" />
      <path d="M30 128v-30h30v30M30 108h30M30 118h30" />
      <path d="M84 128v-30h30v30M84 108h30M84 118h30" />
      <rect x="140" y="88" width="20" height="14" /><rect x="170" y="88" width="20" height="14" /><rect x="200" y="88" width="14" height="14" />
      <path className="dim" d="M20 136h200M20 132v8M220 132v8" />
    </svg>
  );
}

// ------------------------------------------------------------ Components
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>{LICENSE}</span>
          <span className="tb-hours"><Clock size={13} /> Office open Mon–Fri, 8–5</span>
          <a href={`tel:${PHONE_TEL}`}><Phone size={13} /> {PHONE}</a>
        </div>
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap header-in">
          <a href="#top" className="brand" aria-label="Arthur P. Houser home"><img src={logo} alt="Arthur P. Houser · General Contractor" width="645" height="98" /></a>
          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#bid" onClick={() => setOpen(false)}>Request a bid</a>
          </nav>
          <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="mono-label">Sheet A-000 · General contractor · Emmaus, Pennsylvania</p>
          <h1>Building the Lehigh Valley <span>since {FOUNDED}.</span></h1>
          <p className="lede">General contracting, design / build and construction management for business, industry, municipalities and churches, plus new homes and remodeling. One accountable builder, quality workmanship, on schedule, at reasonable prices.</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#bid">Request a bid <ArrowRight size={18} /></a>
            <a className="btn btn-line" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
          </div>
        </div>
        <figure className="hero-drawing">
          <span className="dim dim-top" aria-hidden="true"><i />{YEARS} years of building<i /></span>
          <span className="dim dim-side" aria-hidden="true"><i />Est. {FOUNDED}<i /></span>
          <div className="drawing-frame">
            <img src={umcChurch} alt="Jerusalem Western Salisbury United Methodist Church, a white church with a tall steeple" width="492" height="876" />
            <span className="corner c1" /><span className="corner c2" /><span className="corner c3" /><span className="corner c4" />
          </div>
          <figcaption><span>Detail 1</span>Jerusalem Western Salisbury United Methodist Church, Salisbury Twp.</figcaption>
        </figure>
      </div>
      <div className="wrap">
        <dl className="title-block" aria-label="Company facts">
          <div><dt>Established</dt><dd>{FOUNDED}</dd></div>
          <div><dt>License</dt><dd>PA #002909</dd></div>
          <div><dt>Delivery</dt><dd>GC · Design / build · CM</dd></div>
          <div><dt>Markets</dt><dd>Residential · Commercial · Industrial</dd></div>
          <div><dt>Office</dt><dd>Emmaus, PA</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <header className="sec-head">
          <p className="mono-label dark">Section 01 · How we build</p>
          <h2>Four ways to deliver your project. One team accountable for all of it.</h2>
          <p>Preconstruction, project management and construction services, delivered while achieving your budget, schedule, safety and quality goals.</p>
        </header>
        <div className="methods">
          {METHODS.map(({ no, icon: Icon, title, text }) => (
            <article key={no} className="method">
              <span className="method-no">{no}</span>
              <Icon size={28} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <ol className="phases" aria-label="Project phases">
          {PHASES.map((p, i) => <li key={p}><span>{String(i + 1).padStart(2, "0")}</span>{p}</li>)}
        </ol>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section className="section markets" id="markets">
      <div className="wrap">
        <header className="sec-head light">
          <p className="mono-label">Section 02 · Markets</p>
          <h2>Homes, commercial buildings and working plants.</h2>
          <p>In over a century of building, Houser has built all shapes, sizes and applications of buildings, using the full range of construction methods.</p>
        </header>
        <div className="sheets">
          {MARKETS.map(({ key, sheet, title, Drawing, lede, items }) => (
            <article key={key} className="sheet">
              <div className="sheet-drawing"><Drawing /></div>
              <div className="sheet-body">
                <h3>{title}</h3>
                <p>{lede}</p>
                <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
              <footer className="sheet-foot"><span>Arthur P. Houser</span><span>Sheet {sheet}</span></footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <header className="sec-head split">
          <div>
            <p className="mono-label dark">Section 03 · Project record</p>
            <h2>Built for Lehigh Valley employers and congregations.</h2>
          </div>
          <p>A sample of Houser work, from in-plant foundations at Mack Trucks to new church buildings in Emmaus and Salisbury Township.</p>
        </header>
        <div className="project-grid">
          {PROJECTS.map((p) => (
            <figure key={p.no} className={`project ${p.cls}`}>
              <img src={p.img} alt={p.alt} loading="lazy" />
              <figcaption>
                <span className="p-no">{p.no} · {p.tag}</span>
                <strong>{p.name}</strong>
                <span>{p.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scope() {
  return (
    <section className="section scope" id="scope">
      <div className="wrap">
        <header className="sec-head">
          <p className="mono-label dark">Section 04 · Scope of work</p>
          <h2>Every trade, coordinated under one contract.</h2>
        </header>
        <div className="spec">
          {SCOPE.map(([no, title, items]) => (
            <div key={no} className="spec-div">
              <h3><span>Div. {no}</span>{title}</h3>
              <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="seal" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs><path id="sealPath" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" /></defs>
            <circle cx="100" cy="100" r="96" /><circle cx="100" cy="100" r="62" />
            <text><textPath href="#sealPath" textLength="486" lengthAdjust="spacing">ARTHUR P. HOUSER · GENERAL CONTRACTOR · LEHIGH VALLEY ·</textPath></text>
          </svg>
          <div className="seal-core"><span>Est.</span><strong>{FOUNDED}</strong></div>
        </div>
        <div className="about-copy">
          <p className="mono-label dark">Section 05 · Since {FOUNDED}</p>
          <h2>Over {Math.floor(YEARS / 10) * 10} years of building excellence.</h2>
          <p>Since {FOUNDED}, Arthur P. Houser has been synonymous with building excellence in the Lehigh Valley and surrounding areas, solving the needs of business, industry, municipalities and churches. Our management team brings more than 100 years of combined building experience.</p>
          <p>We are full-service general contractors, construction managers and single-source responsibility builders. It's not just about building buildings; it's about building trust and long-lasting relationships with our clients and our community.</p>
          <div className="values">
            {VALUES.map(([t, d]) => <div key={t}><h3><ShieldCheck size={18} />{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function BidForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", location: "", timeline: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("error"); }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done">
        <h3>Thank you.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${PHONE} or email ${EMAIL}.` : "Your bid request is in. Our office will call you back during business hours."}</p>
      </div>
    );
  }
  return (
    <form className="bid-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
        <label>Company / organization<input value={form.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Project type
          <select value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select one...</option>
            {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label>Project location<input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Town or address" /></label>
      </div>
      <label>Target start<input value={form.timeline} onChange={(e) => update("timeline", e.target.value)} placeholder="e.g. Spring 2027" /></label>
      <label>Project details<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Size, scope, drawings available, bid date..." /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} aria-hidden="true" />
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {PHONE}.</p>}
      <button className="btn btn-navy" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send bid request"} <ArrowRight size={18} /></button>
    </form>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="mono-label">Section 06 · Contact</p>
          <h2>Planning a project? Start with a call.</h2>
          <p>Our professional staff is here to give the personalized, competent service that planning and building any project needs.</p>
          <ul className="contact-list">
            <li><Phone size={18} /><div><span>Telephone</span><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div></li>
            <li><Mail size={18} /><div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            <li><Clock size={18} /><div><span>Office hours</span>{HOURS}</div></li>
            <li><Printer size={18} /><div><span>Fax</span>{FAX}</div></li>
            <li><MapPin size={18} /><div><span>Mailing address</span><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}, {ADDRESS[1]} <ArrowUpRight size={14} /></a></div></li>
          </ul>
          <div className="team">
            <h3><Users size={18} /> Personnel</h3>
            <div className="team-row"><div><strong>Bill Wall</strong><span>President</span></div><a href="mailto:bwall@aphouser.com">bwall@aphouser.com</a></div>
            <div className="team-row"><div><strong>Estimating, project and office staff</strong><span>Vice president, estimator, office manager, administration</span></div><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
          </div>
        </div>
        <div className="bid-card" id="bid">
          <div className="bid-head"><h3>Request a bid or estimate</h3><span>Form A-1</span></div>
          <BidForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-logo" src={logo} alt="Arthur P. Houser · General Contractor" width="645" height="98" loading="lazy" />
          <p>General contractor and construction manager serving the Lehigh Valley since {FOUNDED}. {LICENSE}.</p>
        </div>
        <div>
          <h4>Office</h4>
          <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br />Fax {FAX}<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        <div>
          <h4>Markets</h4>
          <a href="#markets"><Home size={14} /> Residential</a>
          <a href="#markets"><Building2 size={14} /> Commercial</a>
          <a href="#markets"><Factory size={14} /> Industrial</a>
          <a href="#bid"><ArrowRight size={14} /> Request a bid</a>
        </div>
      </div>
      <div className="wrap footer-line">
        <span>© {new Date().getFullYear()} {COMPANY} · Concept redesign by Blueprint WebStudio · independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Markets />
        <Projects />
        <Scope />
        <About />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
