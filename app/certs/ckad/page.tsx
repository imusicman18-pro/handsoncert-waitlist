import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CKAD Hands-On Labs | HandsOnCert",
  description: "CKAD Certified Kubernetes Application Developer hands-on labs. 5 real application deployment projects, auto-committed to your GitHub portfolio. $49 one-time, Project 1 free.",
  alternates: {
    canonical: "https://www.handsoncert.com/certs/ckad/",
  },
  openGraph: {
    title: "CKAD Hands-On Labs | HandsOnCert",
    description: "CKAD Certified Kubernetes Application Developer hands-on labs. 5 real application deployment projects, auto-committed to your GitHub portfolio. $49 one-time, Project 1 free.",
    type: 'website',
    url: "https://www.handsoncert.com/certs/ckad/",
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
      "name": "CNCF",
      "item": "https://www.handsoncert.com/cncf/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "CKAD",
      "item": "https://www.handsoncert.com/certs/ckad/"
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to complete the CKAD hands-on lab path on HandsOnCert",
  "description": "5 hands-on projects mapped to CKAD exam objectives, with evidence auto-committed to your GitHub portfolio.",
  "totalTime": "PT10H",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Application Design and Build",
      "text": "Write a multi-container Pod with an init container, create a Deployment with rolling update strategy, and build a multi-stage Dockerfile for the application image. Commit your Pod/Deployment manifests and Dockerfile."
    },
    {
      "@type": "HowToStep",
      "name": "Application Deployment",
      "text": "Implement a blue-green or canary deployment using Deployments and Services, perform a rolling update with a defined strategy, and roll back a failed deployment. Commit your deployment manifests and rollout history evidence."
    },
    {
      "@type": "HowToStep",
      "name": "Application Observability and Maintenance",
      "text": "Configure liveness, readiness, and startup probes for a Deployment, set up a Horizontal Pod Autoscaler, and use kubectl to debug a CrashLoopBackOff pod. Commit your probe configurations and HPA manifest."
    },
    {
      "@type": "HowToStep",
      "name": "Application Environment, Configuration and Security",
      "text": "Create ConfigMaps and Secrets and mount them into a Pod, configure a ServiceAccount with RBAC permissions for an application, and set resource quotas for a namespace. Commit your ConfigMap/Secret manifests and RBAC definitions."
    },
    {
      "@type": "HowToStep",
      "name": "Services and Networking",
      "text": "Expose a Deployment via a Service, configure an Ingress resource for path-based routing, and create a NetworkPolicy restricting traffic to your application. Commit your Service, Ingress, and NetworkPolicy manifests."
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the CKAD hands-on labs free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project 1 (Application Build) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $49."
      }
    },
    {
      "@type": "Question",
      "name": "What environment do CKAD labs use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HandsOnCert's CKAD labs use kind (Kubernetes in Docker) for fast, repeatable cluster environments — the same kubectl-based workflow as the actual performance-based exam."
      }
    },
    {
      "@type": "Question",
      "name": "How does the GitHub portfolio work for CKAD labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you complete a lab step, HandsOnCert commits your actual Deployment manifests, ConfigMaps, probes, and networking configurations to your own GitHub repository — giving you real working application deployments in your portfolio."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the CKAD path take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 5 projects take approximately 10 hours total, covering application design/build, deployment strategies, observability/maintenance, configuration/security, and services/networking — the same domains tested on the CKAD exam."
      }
    },
    {
      "@type": "Question",
      "name": "Is CKAD good for application developers without ops experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CKAD is designed for developers who build and deploy applications on Kubernetes, without requiring the cluster administration depth of CKA. It's a strong fit for backend or full-stack developers working with containerized applications."
      }
    },
    {
      "@type": "Question",
      "name": "Should I take CKAD before or after CKA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neither requires the other — CKAD focuses on application development while CKA focuses on cluster operations. Choose based on your role first. If you plan to pursue CKS eventually, note that CKS requires an active CKA specifically (not CKAD)."
      }
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "CKAD Hands-On Lab Path",
  "description": "5 hands-on projects mapped to CKAD exam objectives, with GitHub portfolio auto-commit.",
  "provider": {
    "@type": "Organization",
    "name": "HandsOnCert",
    "sameAs": "https://www.handsoncert.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "49",
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

export default function CkadPage() {
  return (
    <div style={{ '--provider-color': "#326CE5" } as React.CSSProperties}>
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
    <a href="/cncf/">CNCF</a>
    <span>›</span>
    <span>CKAD</span>
  </nav>
</div>

<div className="container">
  <div className="hero">
    <div className="badge">✓ Live now — <span className="cert-provider-tag" style={{ marginLeft: '4px' }}>CNCF</span> 5 hands-on projects</div>
    <h1>CKAD Hands-On Labs<br /><em>Real Kubernetes Apps. Real GitHub portfolio.</em></h1>
    <p className="hero-desc">Five real Certified Kubernetes Application Developer projects mapped directly to CKAD exam objectives. Mark a step complete and HandsOnCert commits the evidence — Deployment manifests, ConfigMaps, observability configs — straight to your own GitHub repo. The portfolio employers actually click into.</p>
    <div className="hero-ctas">
      <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
      <a href="#projects" className="btn-secondary">See the 5 projects</a>
    </div>
    <p className="hero-note">$49 one-time · Project 1 free · No subscription</p>
  </div>

  <div className="stats">
    <div className="stat"><div className="stat-num">5</div><div className="stat-label">Hands-on projects</div></div>
    <div className="stat"><div className="stat-num">10h</div><div className="stat-label">Estimated time</div></div>
    <div className="stat"><div className="stat-num">$445</div><div className="stat-label">CKAD exam cost</div></div>
    <div className="stat"><div className="stat-num">$49</div><div className="stat-label">HandsOnCert price</div></div>
  </div>
</div>

<section id="projects">
  <div className="container">
    <h2>What you'll build</h2>
    <p className="sec-sub">Every project maps to an official CKAD exam domain. Each one ends with evidence committed to your GitHub repo automatically.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div className="step-text">
          <h3>Application Design and Build — Free</h3>
          <p>Write a multi-container Pod with an init container, create a Deployment with rolling update strategy, and build a multi-stage Dockerfile for the application image. Commit your Pod/Deployment manifests and Dockerfile.</p>
          <span className="step-domain">Application Design &amp; Build — 20%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div className="step-text">
          <h3>Application Deployment</h3>
          <p>Implement a blue-green or canary deployment using Deployments and Services, perform a rolling update with a defined strategy, and roll back a failed deployment. Commit your deployment manifests and rollout history evidence.</p>
          <span className="step-domain">Application Deployment — 20%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div className="step-text">
          <h3>Application Observability and Maintenance</h3>
          <p>Configure liveness, readiness, and startup probes for a Deployment, set up a Horizontal Pod Autoscaler, and use kubectl to debug a CrashLoopBackOff pod. Commit your probe configurations and HPA manifest.</p>
          <span className="step-domain">Application Observability &amp; Maintenance — 15%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <div className="step-text">
          <h3>Application Environment, Configuration and Security</h3>
          <p>Create ConfigMaps and Secrets and mount them into a Pod, configure a ServiceAccount with RBAC permissions for an application, and set resource quotas for a namespace. Commit your ConfigMap/Secret manifests and RBAC definitions.</p>
          <span className="step-domain">Application Environment, Configuration &amp; Security — 25%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">5</div>
        <div className="step-text">
          <h3>Services and Networking</h3>
          <p>Expose a Deployment via a Service, configure an Ingress resource for path-based routing, and create a NetworkPolicy restricting traffic to your application. Commit your Service, Ingress, and NetworkPolicy manifests.</p>
          <span className="step-domain">Services &amp; Networking — 20%</span>
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
        <h3>Real CNCF resources</h3>
        <p>No simulators. You work in the actual CNCF console and tools, the same ones you'll use on the job and in the CKAD exam.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🤖</div>
        <h3>Cert Buddy AI mentor</h3>
        <p>Stuck on a step or an exam concept? Cert Buddy is trained on CKAD objectives and helps you debug and understand — not just copy-paste.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💰</div>
        <h3>Cost alerts built in</h3>
        <p>Every chargeable resource has a clear alert telling you exactly when to stop, deallocate, or delete — so a lab break doesn't become a surprise bill.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">📄</div>
        <h3>Downloadable lab guide</h3>
        <p>Get the full CKAD lab guide as a PDF — step-by-step instructions, screenshots to capture, and an exam quick-reference section.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💵</div>
        <h3>One-time price</h3>
        <p>$49 once. No subscription, no recurring charges. Or get All-Access to all 21 cert paths for $199.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2 id="faq">Frequently Asked Questions</h2>
    <div className="faq-list">
      <div className="faq-item">
        <p className="faq-q">Are the CKAD hands-on labs free?</p>
        <p className="faq-a">Project 1 (Application Build) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $49.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">What environment do CKAD labs use?</p>
        <p className="faq-a">HandsOnCert's CKAD labs use kind (Kubernetes in Docker) for fast, repeatable cluster environments — the same kubectl-based workflow as the actual performance-based exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How does the GitHub portfolio work for CKAD labs?</p>
        <p className="faq-a">When you complete a lab step, HandsOnCert commits your actual Deployment manifests, ConfigMaps, probes, and networking configurations to your own GitHub repository — giving you real working application deployments in your portfolio.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How long does the CKAD path take to complete?</p>
        <p className="faq-a">The 5 projects take approximately 10 hours total, covering application design/build, deployment strategies, observability/maintenance, configuration/security, and services/networking — the same domains tested on the CKAD exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Is CKAD good for application developers without ops experience?</p>
        <p className="faq-a">Yes. CKAD is designed for developers who build and deploy applications on Kubernetes, without requiring the cluster administration depth of CKA. It's a strong fit for backend or full-stack developers working with containerized applications.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Should I take CKAD before or after CKA?</p>
        <p className="faq-a">Neither requires the other — CKAD focuses on application development while CKA focuses on cluster operations. Choose based on your role first. If you plan to pursue CKS eventually, note that CKS requires an active CKA specifically (not CKAD).</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="cta-section">
      <h2>Build your CKAD portfolio today</h2>
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
      <a href="/hashicorp/">HashiCorp</a>
    </p>
  </div>
</footer>
    </div>
  )
}
