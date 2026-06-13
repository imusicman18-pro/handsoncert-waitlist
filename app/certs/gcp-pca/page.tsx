import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "GCP-PCA Hands-On Labs | HandsOnCert",
  description: "Professional Cloud Architect hands-on labs. 5 real Google Cloud architecture projects based on official case studies, auto-committed to your GitHub portfolio. $79 one-time.",
  alternates: {
    canonical: "https://www.handsoncert.com/certs/gcp-pca/",
  },
  openGraph: {
    title: "GCP-PCA Hands-On Labs | HandsOnCert",
    description: "Professional Cloud Architect hands-on labs. 5 real Google Cloud architecture projects based on official case studies, auto-committed to your GitHub portfolio. $79 one-time.",
    type: 'website',
    url: "https://www.handsoncert.com/certs/gcp-pca/",
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
      "name": "Google Cloud",
      "item": "https://www.handsoncert.com/gcp/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "GCP-PCA",
      "item": "https://www.handsoncert.com/certs/gcp-pca/"
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to complete the GCP-PCA hands-on lab path on HandsOnCert",
  "description": "5 hands-on projects mapped to GCP-PCA exam objectives, with evidence auto-committed to your GitHub portfolio.",
  "totalTime": "PT12H",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Designing and Planning a Cloud Solution Architecture",
      "text": "Using one of Google's official case studies (e.g., EHR Healthcare), design a solution architecture diagram addressing the case study's business and technical requirements — compute, storage, and networking choices with justification. Commit your architecture diagram and design rationale document."
    },
    {
      "@type": "HowToStep",
      "name": "Managing and Provisioning Solution Infrastructure",
      "text": "Provision the core infrastructure for your case study architecture using Terraform or Deployment Manager — VPC, subnets, and a Compute Engine or GKE workload. Commit your IaC configuration files and provisioning evidence."
    },
    {
      "@type": "HowToStep",
      "name": "Designing for Security and Compliance",
      "text": "Design an IAM structure with custom roles following least privilege for your case study, configure VPC Service Controls around a sensitive data perimeter, and document a compliance mapping (e.g., for HIPAA requirements). Commit your IAM design and VPC Service Controls configuration."
    },
    {
      "@type": "HowToStep",
      "name": "Analyzing and Optimizing Technical and Business Processes",
      "text": "Analyze your case study's current vs target technical processes, identify a migration or modernization opportunity (e.g., lift-and-shift to containers), and document the business impact. Commit your process analysis and recommendation document."
    },
    {
      "@type": "HowToStep",
      "name": "Managing Implementation and Ensuring Reliability",
      "text": "Configure a budget alert and cost breakdown for your case study architecture, set up Cloud Monitoring uptime checks and alerting policies, and document an SLA-aligned reliability plan. Commit your budget configuration and monitoring dashboard screenshots."
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the GCP-PCA hands-on labs free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project 1 (Solution Architecture Design) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $79."
      }
    },
    {
      "@type": "Question",
      "name": "Do these labs use the official Google case studies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. HandsOnCert's GCP-PCA path is built around Google's official PCA case studies (such as EHR Healthcare, Helicopter Racing League, Mountkirk Games, and TerramEarth) — the same case studies referenced on the actual exam."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a GCP account for these labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you need a Google Cloud account with the $300 free trial credit (valid 90 days). Most GCP-PCA resources fit within this credit if cleaned up promptly — total out-of-pocket cost should be approximately $10-20 across all 5 projects."
      }
    },
    {
      "@type": "Question",
      "name": "How does the GitHub portfolio auto-commit work for GCP-PCA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you mark a lab step complete, HandsOnCert commits your architecture diagrams, Terraform configurations, and IAM designs directly to your own GitHub repository via OAuth — demonstrating real architecture decision-making tied to recognized case studies."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the GCP-PCA path take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 5 projects take approximately 12 hours total, covering solution design, infrastructure provisioning, security/compliance, process optimization, and reliability/cost management — the same domains tested on the GCP-PCA exam."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need GCP-ACE before GCP-PCA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GCP-ACE is not a hard prerequisite for GCP-PCA, but Google recommends hands-on GCP experience first. GCP-ACE (Associate Cloud Engineer) is HandsOnCert's foundational GCP path and builds the operational skills GCP-PCA's architecture decisions rely on."
      }
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "GCP-PCA Hands-On Lab Path",
  "description": "5 hands-on projects mapped to GCP-PCA exam objectives, with GitHub portfolio auto-commit.",
  "provider": {
    "@type": "Organization",
    "name": "HandsOnCert",
    "sameAs": "https://www.handsoncert.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "79",
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

export default function GcpPcaPage() {
  return (
    <div style={{ '--provider-color': "#4285F4" } as React.CSSProperties}>
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
    <a href="/gcp/">Google Cloud</a>
    <span>›</span>
    <span>GCP-PCA</span>
  </nav>
</div>

<div className="container">
  <div className="hero">
    <div className="badge">✓ Live now — <span className="cert-provider-tag" style={{ marginLeft: '4px' }}>Google Cloud</span> 5 hands-on projects</div>
    <h1>GCP-PCA Hands-On Labs<br /><em>Real GCP Architecture. Real GitHub portfolio.</em></h1>
    <p className="hero-desc">Five real Professional Cloud Architect projects mapped directly to GCP-PCA exam objectives and official Google case studies. Mark a step complete and HandsOnCert commits the evidence — architecture diagrams, IAM designs, cost analyses — straight to your own GitHub repo. The portfolio employers actually click into.</p>
    <div className="hero-ctas">
      <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
      <a href="#projects" className="btn-secondary">See the 5 projects</a>
    </div>
    <p className="hero-note">$79 one-time · Project 1 free · No subscription</p>
  </div>

  <div className="stats">
    <div className="stat"><div className="stat-num">5</div><div className="stat-label">Hands-on projects</div></div>
    <div className="stat"><div className="stat-num">12h</div><div className="stat-label">Estimated time</div></div>
    <div className="stat"><div className="stat-num">$200</div><div className="stat-label">GCP-PCA exam cost</div></div>
    <div className="stat"><div className="stat-num">$79</div><div className="stat-label">HandsOnCert price</div></div>
  </div>
</div>

<section id="projects">
  <div className="container">
    <h2>What you'll build</h2>
    <p className="sec-sub">Every project maps to an official GCP-PCA exam domain. Each one ends with evidence committed to your GitHub repo automatically.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div className="step-text">
          <h3>Designing and Planning a Cloud Solution Architecture — Free</h3>
          <p>Using one of Google's official case studies (e.g., EHR Healthcare), design a solution architecture diagram addressing the case study's business and technical requirements — compute, storage, and networking choices with justification. Commit your architecture diagram and design rationale document.</p>
          <span className="step-domain">Designing &amp; Planning — ~24% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div className="step-text">
          <h3>Managing and Provisioning Solution Infrastructure</h3>
          <p>Provision the core infrastructure for your case study architecture using Terraform or Deployment Manager — VPC, subnets, and a Compute Engine or GKE workload. Commit your IaC configuration files and provisioning evidence.</p>
          <span className="step-domain">Managing &amp; Provisioning Infrastructure — ~15% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div className="step-text">
          <h3>Designing for Security and Compliance</h3>
          <p>Design an IAM structure with custom roles following least privilege for your case study, configure VPC Service Controls around a sensitive data perimeter, and document a compliance mapping (e.g., for HIPAA requirements). Commit your IAM design and VPC Service Controls configuration.</p>
          <span className="step-domain">Designing for Security &amp; Compliance — ~18% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <div className="step-text">
          <h3>Analyzing and Optimizing Technical and Business Processes</h3>
          <p>Analyze your case study's current vs target technical processes, identify a migration or modernization opportunity (e.g., lift-and-shift to containers), and document the business impact. Commit your process analysis and recommendation document.</p>
          <span className="step-domain">Analyzing &amp; Optimizing Processes — ~18% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">5</div>
        <div className="step-text">
          <h3>Managing Implementation and Ensuring Reliability</h3>
          <p>Configure a budget alert and cost breakdown for your case study architecture, set up Cloud Monitoring uptime checks and alerting policies, and document an SLA-aligned reliability plan. Commit your budget configuration and monitoring dashboard screenshots.</p>
          <span className="step-domain">Implementation &amp; Reliability — ~25% of exam</span>
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
        <h3>Real Google Cloud resources</h3>
        <p>No simulators. You work in the actual Google Cloud console and tools, the same ones you'll use on the job and in the GCP-PCA exam.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🤖</div>
        <h3>Cert Buddy AI mentor</h3>
        <p>Stuck on a step or an exam concept? Cert Buddy is trained on GCP-PCA objectives and helps you debug and understand — not just copy-paste.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💰</div>
        <h3>Cost alerts built in</h3>
        <p>Every chargeable resource has a clear alert telling you exactly when to stop, deallocate, or delete — so a lab break doesn't become a surprise bill.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">📄</div>
        <h3>Downloadable lab guide</h3>
        <p>Get the full GCP-PCA lab guide as a PDF — step-by-step instructions, screenshots to capture, and an exam quick-reference section.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💵</div>
        <h3>One-time price</h3>
        <p>$79 once. No subscription, no recurring charges. Or get All-Access to all 21 cert paths for $199.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2 id="faq">Frequently Asked Questions</h2>
    <div className="faq-list">
      <div className="faq-item">
        <p className="faq-q">Are the GCP-PCA hands-on labs free?</p>
        <p className="faq-a">Project 1 (Solution Architecture Design) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $79.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Do these labs use the official Google case studies?</p>
        <p className="faq-a">Yes. HandsOnCert's GCP-PCA path is built around Google's official PCA case studies (such as EHR Healthcare, Helicopter Racing League, Mountkirk Games, and TerramEarth) — the same case studies referenced on the actual exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Do I need a GCP account for these labs?</p>
        <p className="faq-a">Yes, you need a Google Cloud account with the $300 free trial credit (valid 90 days). Most GCP-PCA resources fit within this credit if cleaned up promptly — total out-of-pocket cost should be approximately $10-20 across all 5 projects.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How does the GitHub portfolio auto-commit work for GCP-PCA?</p>
        <p className="faq-a">When you mark a lab step complete, HandsOnCert commits your architecture diagrams, Terraform configurations, and IAM designs directly to your own GitHub repository via OAuth — demonstrating real architecture decision-making tied to recognized case studies.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How long does the GCP-PCA path take to complete?</p>
        <p className="faq-a">The 5 projects take approximately 12 hours total, covering solution design, infrastructure provisioning, security/compliance, process optimization, and reliability/cost management — the same domains tested on the GCP-PCA exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Do I need GCP-ACE before GCP-PCA?</p>
        <p className="faq-a">GCP-ACE is not a hard prerequisite for GCP-PCA, but Google recommends hands-on GCP experience first. GCP-ACE (Associate Cloud Engineer) is HandsOnCert's foundational GCP path and builds the operational skills GCP-PCA's architecture decisions rely on.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="cta-section">
      <h2>Build your GCP-PCA portfolio today</h2>
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
      <a href="/hashicorp/">HashiCorp</a>
      <a href="/cncf/">CNCF</a>
    </p>
  </div>
</footer>
    </div>
  )
}
