import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "TF-003 Hands-On Labs | HandsOnCert",
  description: "TF-003 HashiCorp Terraform Associate hands-on labs. 3 real Terraform projects, auto-committed to your GitHub portfolio. $29 one-time, Project 1 free.",
  alternates: {
    canonical: "https://www.handsoncert.com/certs/tf-003/",
  },
  openGraph: {
    title: "TF-003 Hands-On Labs | HandsOnCert",
    description: "TF-003 HashiCorp Terraform Associate hands-on labs. 3 real Terraform projects, auto-committed to your GitHub portfolio. $29 one-time, Project 1 free.",
    type: 'website',
    url: "https://www.handsoncert.com/certs/tf-003/",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.handsoncert.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "HashiCorp",
      "item": "https://www.handsoncert.com/hashicorp/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "TF-003",
      "item": "https://www.handsoncert.com/certs/tf-003/"
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to complete the TF-003 hands-on lab path on HandsOnCert",
  "description": "3 hands-on projects mapped to TF-003 exam objectives, with evidence auto-committed to your GitHub portfolio.",
  "totalTime": "PT4H",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Terraform CLI Workflow",
      "text": "Write your first .tf configuration, run init, plan, apply, and destroy. Provision a real cloud resource (storage bucket or VM) on AWS, Azure, or GCP and commit your configuration files to GitHub."
    },
    {
      "@type": "HowToStep",
      "name": "State Management",
      "text": "Configure remote state storage, understand state locking, and practice importing an existing resource into Terraform state. Commit your backend configuration and state outputs."
    },
    {
      "@type": "HowToStep",
      "name": "Modules and Variables",
      "text": "Build a reusable Terraform module with input variables and outputs, then call it from a root configuration. Commit your module structure and variable definitions to GitHub."
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the TF-003 hands-on labs free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project 1 (CLI Workflow) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 2 projects unlock for a one-time payment of $29."
      }
    },
    {
      "@type": "Question",
      "name": "Which cloud provider do these Terraform labs use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HandsOnCert's TF-003 labs work with AWS, Azure, or GCP — you choose based on what you already have access to or want to practice with. Terraform itself is cloud-agnostic, and the certification tests Terraform concepts, not provider-specific knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "How does the GitHub portfolio work for Terraform labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you complete a Terraform lab step, HandsOnCert commits your actual .tf configuration files, module structures, and plan/apply output to your own GitHub repository — giving you a real, working Terraform codebase in your portfolio."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the TF-003 path take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 3 projects take approximately 4 hours total, covering the CLI workflow, state management, and modules — the core domains tested on the TF-003 exam."
      }
    },
    {
      "@type": "Question",
      "name": "Is TF-003 worth it if I don't know Terraform yet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — TF-003 has no prerequisites, and HandsOnCert's labs teach Terraform from the CLI workflow up through modules, building real working configurations as you go."
      }
    },
    {
      "@type": "Question",
      "name": "Does TF-003 pair well with cloud certifications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TF-003 pairs especially well with AZ-400 (Azure DevOps Engineer) or AWS DevOps-focused roles — Terraform is commonly used to provision the infrastructure that other cloud services run on, including Kubernetes clusters for CKA."
      }
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "TF-003 Hands-On Lab Path",
  "description": "3 hands-on projects mapped to TF-003 exam objectives, with GitHub portfolio auto-commit.",
  "provider": {
    "@type": "Organization",
    "name": "HandsOnCert",
    "sameAs": "https://www.handsoncert.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "29",
    "priceCurrency": "USD"
  }
}

const pageStyles = `* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg-dark: #0F172A;
  --bg-card: #1E293B;
  --bg-card2: #162032;
  --text-1: #F8FAFC;
  --text-2: #F1F5F9;
  --text-3: #CBD5E1;
  --text-5: #94A3B8;
  --accent: #4FC3F7;
  --emerald: #10B981;
  --amber: #F59E0B;
  --border: #334155;
}
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg-dark); color: var(--text-2); line-height: 1.6; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
nav { background: var(--bg-card); border-bottom: 1px solid var(--border); padding: 16px 0; position: sticky; top: 0; z-index: 100; }
.nav-inner { display: flex; justify-content: space-between; align-items: center; }
.logo { font-weight: 800; font-size: 19px; text-decoration: none; }
.logo .hands { color: var(--text-2); }
.logo .cert { color: var(--accent); }
.nav-pill { font-size: 12px; color: var(--text-5); font-family: monospace; border: 1px solid var(--border); border-radius: 20px; padding: 4px 12px; }
.nav-cta { background: var(--accent); color: var(--bg-dark); padding: 8px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 700; }
.breadcrumb { padding: 12px 0; font-size: 13px; color: var(--text-5); }
.breadcrumb a { color: var(--accent); text-decoration: none; }
.breadcrumb span { margin: 0 6px; }
.hero { padding: 64px 0 48px; }
.badge { display: inline-flex; align-items: center; gap: 6px; background: var(--bg-card2); border: 1px solid var(--border); color: var(--emerald); font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
h1 { font-size: 42px; font-weight: 800; line-height: 1.15; color: var(--text-1); margin-bottom: 20px; }
h1 em { color: var(--accent); font-style: normal; }
.hero-desc { font-size: 18px; color: var(--text-3); max-width: 640px; margin-bottom: 32px; }
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-primary { background: var(--accent); color: var(--bg-dark); padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 16px; }
.btn-secondary { background: transparent; color: var(--text-2); padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; border: 2px solid var(--border); }
.hero-note { margin-top: 16px; font-size: 13px; color: var(--text-5); }
.stats { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 28px 32px; margin: 32px 0; display: flex; gap: 40px; flex-wrap: wrap; }
.stat { text-align: center; }
.stat-num { font-size: 28px; font-weight: 800; color: var(--accent); }
.stat-label { font-size: 13px; color: var(--text-5); margin-top: 4px; }
section { padding: 64px 0; }
section + section { border-top: 1px solid var(--bg-card); }
h2 { font-size: 30px; font-weight: 800; margin-bottom: 16px; color: var(--text-1); }
h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--text-1); }
.sec-sub { color: var(--text-5); font-size: 16px; max-width: 640px; }
.steps { display: grid; gap: 16px; margin-top: 32px; }
.step { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: var(--bg-card); border-radius: 12px; border-left: 4px solid var(--provider-color); }
.step-num { background: var(--provider-color); color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0; }
.step-text p { color: var(--text-3); font-size: 15px; margin-top: 4px; }
.step-domain { display: inline-block; font-size: 11px; font-weight: 700; color: var(--provider-color); text-transform: uppercase; letter-spacing: 0.5px; margin-top: 8px; }
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 32px; }
.benefit { padding: 24px; border: 1px solid var(--border); border-radius: 12px; background: var(--bg-card2); }
.benefit-icon { font-size: 28px; margin-bottom: 12px; }
.benefit p { color: var(--text-3); font-size: 14px; }
.faq-list { margin-top: 32px; }
.faq-item { border-bottom: 1px solid var(--border); padding: 24px 0; }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-q { font-weight: 700; font-size: 17px; color: var(--text-1); margin-bottom: 10px; }
.faq-a { color: var(--text-3); font-size: 15px; line-height: 1.7; }
.cta-section { background: var(--bg-card); border: 1px solid var(--accent); border-radius: 16px; padding: 56px; text-align: center; }
.cta-section h2 { color: var(--text-1); font-size: 32px; }
.cta-section p { color: var(--text-3); margin: 16px 0 32px; font-size: 18px; }
.btn-accent { background: var(--accent); color: var(--bg-dark); padding: 16px 36px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 17px; display: inline-block; }
footer { border-top: 1px solid var(--bg-card); padding: 32px 0; text-align: center; color: var(--text-5); font-size: 14px; }
footer a { color: var(--accent); text-decoration: none; margin: 0 12px; }
.cert-provider-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 12px; text-transform: uppercase; color: #fff; background: var(--provider-color); }
@media (max-width: 640px) {
  h1 { font-size: 28px; }
  .stats { gap: 24px; justify-content: center; }
  .cta-section { padding: 40px 24px; }
}`

export default function Tf003Page() {
  return (
    <div style={{ '--provider-color': "#5C4EE5" } as React.CSSProperties}>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
<nav>
  <div className="container">
    <div className="nav-inner">
      <a href="/" className="logo"><span className="hands">HandsOn</span><span className="cert">Cert</span></a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div className="nav-pill">21 cert paths live</div>
        <a href="https://app.handsoncert.com/signup" className="nav-cta">Start building →</a>
      </div>
    </div>
  </div>
</nav>

<div className="container">
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span>›</span>
    <a href="/hashicorp/">HashiCorp</a>
    <span>›</span>
    <span>TF-003</span>
  </nav>
</div>

<div className="container">
  <div className="hero">
    <div className="badge">✓ Live now — <span className="cert-provider-tag" style={{ marginLeft: '4px' }}>HashiCorp</span> 3 hands-on projects</div>
    <h1>TF-003 Hands-On Labs<br /><em>Real Terraform. Real GitHub portfolio.</em></h1>
    <p className="hero-desc">Three real Terraform Associate projects mapped directly to the TF-003 exam objectives. Mark a step complete and HandsOnCert commits the evidence — actual .tf configuration files, state outputs, module structures — straight to your own GitHub repo. The portfolio employers actually click into.</p>
    <div className="hero-ctas">
      <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
      <a href="#projects" className="btn-secondary">See the 3 projects</a>
    </div>
    <p className="hero-note">$29 one-time · Project 1 free · No subscription</p>
  </div>

  <div className="stats">
    <div className="stat"><div className="stat-num">3</div><div className="stat-label">Hands-on projects</div></div>
    <div className="stat"><div className="stat-num">4h</div><div className="stat-label">Estimated time</div></div>
    <div className="stat"><div className="stat-num">$70.50</div><div className="stat-label">TF-003 exam cost</div></div>
    <div className="stat"><div className="stat-num">$29</div><div className="stat-label">HandsOnCert price</div></div>
  </div>
</div>

<section id="projects">
  <div className="container">
    <h2>What you'll build</h2>
    <p className="sec-sub">Every project maps to an official TF-003 exam domain. Each one ends with evidence committed to your GitHub repo automatically.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div className="step-text">
          <h3>Terraform CLI Workflow — Free</h3>
          <p>Write your first .tf configuration, run init, plan, apply, and destroy. Provision a real cloud resource (storage bucket or VM) on AWS, Azure, or GCP and commit your configuration files to GitHub.</p>
          <span className="step-domain">Understand the Terraform CLI workflow</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div className="step-text">
          <h3>State Management</h3>
          <p>Configure remote state storage, understand state locking, and practice importing an existing resource into Terraform state. Commit your backend configuration and state outputs.</p>
          <span className="step-domain">Use the Terraform CLI to manage state</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div className="step-text">
          <h3>Modules and Variables</h3>
          <p>Build a reusable Terraform module with input variables and outputs, then call it from a root configuration. Commit your module structure and variable definitions to GitHub.</p>
          <span className="step-domain">Use Terraform modules to manage infrastructure</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2>Why HandsOnCert</h2>
    <div className="benefits-grid">
      <div className="benefit">
        <div className="benefit-icon">🗂️</div>
        <h3>Real GitHub portfolio</h3>
        <p>Every completed step auto-commits evidence to your own repo. No fake portfolio templates — real configs, real screenshots, real history.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">☁️</div>
        <h3>Real HashiCorp resources</h3>
        <p>No simulators. You work in the actual HashiCorp console and tools, the same ones you'll use on the job and in the TF-003 exam.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🤖</div>
        <h3>Cert Buddy AI mentor</h3>
        <p>Stuck on a step or an exam concept? Cert Buddy is trained on TF-003 objectives and helps you debug and understand — not just copy-paste.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💰</div>
        <h3>Cost alerts built in</h3>
        <p>Every chargeable resource has a clear alert telling you exactly when to stop, deallocate, or delete — so a lab break doesn't become a surprise bill.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">📄</div>
        <h3>Downloadable lab guide</h3>
        <p>Get the full TF-003 lab guide as a PDF — step-by-step instructions, screenshots to capture, and an exam quick-reference section.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💵</div>
        <h3>One-time price</h3>
        <p>$29 once. No subscription, no recurring charges. Or get All-Access to all 21 cert paths for $199.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2 id="faq">Frequently Asked Questions</h2>
    <div className="faq-list">
      <div className="faq-item">
        <p className="faq-q">Are the TF-003 hands-on labs free?</p>
        <p className="faq-a">Project 1 (CLI Workflow) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 2 projects unlock for a one-time payment of $29.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Which cloud provider do these Terraform labs use?</p>
        <p className="faq-a">HandsOnCert's TF-003 labs work with AWS, Azure, or GCP — you choose based on what you already have access to or want to practice with. Terraform itself is cloud-agnostic, and the certification tests Terraform concepts, not provider-specific knowledge.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How does the GitHub portfolio work for Terraform labs?</p>
        <p className="faq-a">When you complete a Terraform lab step, HandsOnCert commits your actual .tf configuration files, module structures, and plan/apply output to your own GitHub repository — giving you a real, working Terraform codebase in your portfolio.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How long does the TF-003 path take to complete?</p>
        <p className="faq-a">The 3 projects take approximately 4 hours total, covering the CLI workflow, state management, and modules — the core domains tested on the TF-003 exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Is TF-003 worth it if I don't know Terraform yet?</p>
        <p className="faq-a">Yes — TF-003 has no prerequisites, and HandsOnCert's labs teach Terraform from the CLI workflow up through modules, building real working configurations as you go.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Does TF-003 pair well with cloud certifications?</p>
        <p className="faq-a">Yes. TF-003 pairs especially well with AZ-400 (Azure DevOps Engineer) or AWS DevOps-focused roles — Terraform is commonly used to provision the infrastructure that other cloud services run on, including Kubernetes clusters for CKA.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="cta-section">
      <h2>Build your TF-003 portfolio today</h2>
      <p>Start Project 1 free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
      <a href="https://app.handsoncert.com/signup" className="btn-accent">Start Free →</a>
    </div>
  </div>
</section>

<footer>
  <div className="container">
    <p>© 2026 HandsOnCert &nbsp;·&nbsp; Learn · Build · Prove &nbsp;·&nbsp;
      <a href="/">Home</a>
      <a href="/certs/">All Certs</a>
      <a href="/azure/">Azure</a>
      <a href="/aws/">AWS</a>
      <a href="/gcp/">GCP</a>
      <a href="/cncf/">CNCF</a>
    </p>
  </div>
</footer>
    </div>
  )
}
