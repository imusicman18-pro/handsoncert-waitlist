import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CKS Hands-On Labs | HandsOnCert",
  description: "CKS Certified Kubernetes Security Specialist hands-on labs. 5 real security hardening projects with Falco, OPA Gatekeeper, and Trivy, auto-committed to your GitHub portfolio. $79 one-time.",
  alternates: {
    canonical: "https://www.handsoncert.com/certs/cks/",
  },
  openGraph: {
    title: "CKS Hands-On Labs | HandsOnCert",
    description: "CKS Certified Kubernetes Security Specialist hands-on labs. 5 real security hardening projects with Falco, OPA Gatekeeper, and Trivy, auto-committed to your GitHub portfolio. $79 one-time.",
    type: 'website',
    url: "https://www.handsoncert.com/certs/cks/",
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
      "name": "CKS",
      "item": "https://www.handsoncert.com/certs/cks/"
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to complete the CKS hands-on lab path on HandsOnCert",
  "description": "5 hands-on projects mapped to CKS exam objectives, with evidence auto-committed to your GitHub portfolio.",
  "totalTime": "PT14H",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Cluster Setup and Hardening",
      "text": "Run kube-bench CIS Kubernetes Benchmark, harden API server flags (disable anonymous auth, enable audit logging), configure default-deny NetworkPolicies, and encrypt secrets at rest in etcd. Commit your kube-bench results and hardening configurations."
    },
    {
      "@type": "HowToStep",
      "name": "System Hardening",
      "text": "Create a custom AppArmor profile and apply it to a pod via annotation, configure a seccomp profile with a syscall allowlist, and deploy pods with dropped capabilities and read-only root filesystem. Commit your AppArmor/seccomp profiles and pod security contexts."
    },
    {
      "@type": "HowToStep",
      "name": "Minimize Microservice Vulnerabilities",
      "text": "Enforce Pod Security Standards on a namespace, deploy OPA Gatekeeper with a custom ConstraintTemplate blocking privileged containers, and secure Kubernetes Secrets with disabled service account token automounting. Commit your Gatekeeper policies and PSS configuration."
    },
    {
      "@type": "HowToStep",
      "name": "Supply Chain Security",
      "text": "Scan a container image with Trivy and output CRITICAL CVEs to a file, write a secure multi-stage Dockerfile with a non-root user, and configure an OPA constraint restricting images to trusted registries. Commit your Trivy scan results and secure Dockerfile."
    },
    {
      "@type": "HowToStep",
      "name": "Monitoring, Logging and Runtime Security",
      "text": "Deploy Falco and write a custom rule detecting sensitive file access in containers, configure a Kubernetes audit policy capturing secret access and exec events, and deploy an immutable container configuration with read-only root filesystem. Commit your Falco rules and audit policy."
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the CKS hands-on labs free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project 1 (Cluster Hardening) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $79."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need CKA before CKS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CKS requires an active CKA certification as a prerequisite — set by the Linux Foundation/CNCF, not by HandsOnCert. CKS builds directly on CKA knowledge and adds security-specific tooling on top."
      }
    },
    {
      "@type": "Question",
      "name": "What tools do the CKS labs cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HandsOnCert's CKS labs cover kube-bench, AppArmor, seccomp, OPA Gatekeeper, Trivy, and Falco — the same security tooling tested on the actual CKS exam, applied to real kind clusters and (for cluster hardening) an optional kubeadm-on-EC2 setup."
      }
    },
    {
      "@type": "Question",
      "name": "How does the GitHub portfolio work for CKS labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you complete a lab step, HandsOnCert commits your actual Falco rules, OPA Rego policies, Trivy scan output, and hardening configurations to your own GitHub repository — a portfolio that demonstrates real platform security knowledge, which is rare and valuable to employers."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the CKS path take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 5 projects take approximately 14 hours total, covering cluster setup/hardening, system hardening, microservice vulnerabilities, supply chain security, and runtime security — the same domains tested on the CKS exam."
      }
    },
    {
      "@type": "Question",
      "name": "Is CKS the hardest Kubernetes certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, CKS is widely considered the most difficult of the three CNCF Kubernetes certifications. It requires CKA-level knowledge plus an entirely new layer of security tooling, all under the same 2-hour performance-based exam format."
      }
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "CKS Hands-On Lab Path",
  "description": "5 hands-on projects mapped to CKS exam objectives, with GitHub portfolio auto-commit.",
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

export default function CksPage() {
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
    <span>CKS</span>
  </nav>
</div>

<div className="container">
  <div className="hero">
    <div className="badge">✓ Live now — <span className="cert-provider-tag" style={{ marginLeft: '4px' }}>CNCF</span> 5 hands-on projects</div>
    <h1>CKS Hands-On Labs<br /><em>Real Kubernetes Security. Real GitHub portfolio.</em></h1>
    <p className="hero-desc">Five real Certified Kubernetes Security Specialist projects mapped directly to CKS exam objectives. Mark a step complete and HandsOnCert commits the evidence — Falco rules, OPA Gatekeeper policies, Trivy scan results — straight to your own GitHub repo. The portfolio employers actually click into.</p>
    <div className="hero-ctas">
      <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
      <a href="#projects" className="btn-secondary">See the 5 projects</a>
    </div>
    <p className="hero-note">$79 one-time · Project 1 free · No subscription</p>
  </div>

  <div className="stats">
    <div className="stat"><div className="stat-num">5</div><div className="stat-label">Hands-on projects</div></div>
    <div className="stat"><div className="stat-num">14h</div><div className="stat-label">Estimated time</div></div>
    <div className="stat"><div className="stat-num">$445</div><div className="stat-label">CKS exam cost</div></div>
    <div className="stat"><div className="stat-num">$79</div><div className="stat-label">HandsOnCert price</div></div>
  </div>
</div>

<section id="projects">
  <div className="container">
    <h2>What you'll build</h2>
    <p className="sec-sub">Every project maps to an official CKS exam domain. Each one ends with evidence committed to your GitHub repo automatically.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div className="step-text">
          <h3>Cluster Setup and Hardening — Free</h3>
          <p>Run kube-bench CIS Kubernetes Benchmark, harden API server flags (disable anonymous auth, enable audit logging), configure default-deny NetworkPolicies, and encrypt secrets at rest in etcd. Commit your kube-bench results and hardening configurations.</p>
          <span className="step-domain">Cluster Setup — 15%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div className="step-text">
          <h3>System Hardening</h3>
          <p>Create a custom AppArmor profile and apply it to a pod via annotation, configure a seccomp profile with a syscall allowlist, and deploy pods with dropped capabilities and read-only root filesystem. Commit your AppArmor/seccomp profiles and pod security contexts.</p>
          <span className="step-domain">System Hardening — 10%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div className="step-text">
          <h3>Minimize Microservice Vulnerabilities</h3>
          <p>Enforce Pod Security Standards on a namespace, deploy OPA Gatekeeper with a custom ConstraintTemplate blocking privileged containers, and secure Kubernetes Secrets with disabled service account token automounting. Commit your Gatekeeper policies and PSS configuration.</p>
          <span className="step-domain">Minimize Microservice Vulnerabilities — 20%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <div className="step-text">
          <h3>Supply Chain Security</h3>
          <p>Scan a container image with Trivy and output CRITICAL CVEs to a file, write a secure multi-stage Dockerfile with a non-root user, and configure an OPA constraint restricting images to trusted registries. Commit your Trivy scan results and secure Dockerfile.</p>
          <span className="step-domain">Supply Chain Security — 20%</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">5</div>
        <div className="step-text">
          <h3>Monitoring, Logging and Runtime Security</h3>
          <p>Deploy Falco and write a custom rule detecting sensitive file access in containers, configure a Kubernetes audit policy capturing secret access and exec events, and deploy an immutable container configuration with read-only root filesystem. Commit your Falco rules and audit policy.</p>
          <span className="step-domain">Monitoring, Logging &amp; Runtime Security — 20%</span>
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
        <p>No simulators. You work in the actual CNCF console and tools, the same ones you'll use on the job and in the CKS exam.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🤖</div>
        <h3>Cert Buddy AI mentor</h3>
        <p>Stuck on a step or an exam concept? Cert Buddy is trained on CKS objectives and helps you debug and understand — not just copy-paste.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💰</div>
        <h3>Cost alerts built in</h3>
        <p>Every chargeable resource has a clear alert telling you exactly when to stop, deallocate, or delete — so a lab break doesn't become a surprise bill.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">📄</div>
        <h3>Downloadable lab guide</h3>
        <p>Get the full CKS lab guide as a PDF — step-by-step instructions, screenshots to capture, and an exam quick-reference section.</p>
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
        <p className="faq-q">Are the CKS hands-on labs free?</p>
        <p className="faq-a">Project 1 (Cluster Hardening) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $79.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Do I need CKA before CKS?</p>
        <p className="faq-a">Yes. CKS requires an active CKA certification as a prerequisite — set by the Linux Foundation/CNCF, not by HandsOnCert. CKS builds directly on CKA knowledge and adds security-specific tooling on top.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">What tools do the CKS labs cover?</p>
        <p className="faq-a">HandsOnCert's CKS labs cover kube-bench, AppArmor, seccomp, OPA Gatekeeper, Trivy, and Falco — the same security tooling tested on the actual CKS exam, applied to real kind clusters and (for cluster hardening) an optional kubeadm-on-EC2 setup.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How does the GitHub portfolio work for CKS labs?</p>
        <p className="faq-a">When you complete a lab step, HandsOnCert commits your actual Falco rules, OPA Rego policies, Trivy scan output, and hardening configurations to your own GitHub repository — a portfolio that demonstrates real platform security knowledge, which is rare and valuable to employers.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How long does the CKS path take to complete?</p>
        <p className="faq-a">The 5 projects take approximately 14 hours total, covering cluster setup/hardening, system hardening, microservice vulnerabilities, supply chain security, and runtime security — the same domains tested on the CKS exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Is CKS the hardest Kubernetes certification?</p>
        <p className="faq-a">Yes, CKS is widely considered the most difficult of the three CNCF Kubernetes certifications. It requires CKA-level knowledge plus an entirely new layer of security tooling, all under the same 2-hour performance-based exam format.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="cta-section">
      <h2>Build your CKS portfolio today</h2>
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
