import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "MS-102 Hands-On Labs | Microsoft 365 Administrator Certification | HandsOnCert",
  description: "MS-102 Microsoft 365 Administrator hands-on labs. 5 real projects — tenant deployment, Entra identity, Defender XDR, Purview compliance — auto-committed to your GitHub portfolio. $79 one-time, Project 1 free.",
  alternates: {
    canonical: "https://www.handsoncert.com/certs/ms-102/",
  },
  openGraph: {
    title: "MS-102 Hands-On Labs | Microsoft 365 Administrator Certification | HandsOnCert",
    description: "5 real Microsoft 365 admin projects mapped to MS-102 exam objectives. Tenant, Entra identity, Defender XDR, Purview. $79 one-time, Project 1 free.",
    type: 'website',
    url: "https://www.handsoncert.com/certs/ms-102/",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.handsoncert.com/" },
    { "@type": "ListItem", "position": 2, "name": "All Certs", "item": "https://www.handsoncert.com/certs/" },
    { "@type": "ListItem", "position": 3, "name": "MS-102", "item": "https://www.handsoncert.com/certs/ms-102/" }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to complete the MS-102 hands-on lab path on HandsOnCert",
  "description": "5 hands-on Microsoft 365 administration projects mapped to MS-102 exam objectives, with evidence auto-committed to your GitHub portfolio.",
  "totalTime": "PT12H",
  "step": [
    { "@type": "HowToStep", "name": "Deploy and Manage a Microsoft 365 Tenant", "text": "Configure tenant settings, add and verify a custom domain, and monitor Service Health. Commit your tenant and domain configuration." },
    { "@type": "HowToStep", "name": "Manage Users, Groups and Licensing", "text": "Create users, configure group-based licensing, manage groups and shared mailboxes, and assign admin roles. Commit your user and licensing evidence." },
    { "@type": "HowToStep", "name": "Implement Microsoft Entra Identity and Access", "text": "Configure MFA, Conditional Access, Identity Protection, and PIM. Commit your identity and access configuration." },
    { "@type": "HowToStep", "name": "Secure Microsoft 365 with Defender XDR", "text": "Review Secure Score, configure Defender for Office 365 policies, and investigate unified incidents. Commit your security configuration." },
    { "@type": "HowToStep", "name": "Enforce Compliance with Microsoft Purview", "text": "Create sensitivity labels, DLP policies, and retention policies, and run Audit and eDiscovery. Commit your compliance evidence." }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the MS-102 hands-on labs free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Project 1 (Deploy and Manage a Microsoft 365 Tenant) is completely free, including Cert Buddy access for that project and the GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $79." }
    },
    {
      "@type": "Question",
      "name": "What environment do I need for the MS-102 labs?",
      "acceptedAnswer": { "@type": "Answer", "text": "MS-102 labs run in a Microsoft 365 tenant with Entra ID P2, Defender XDR, and Purview. You get one via the Microsoft 365 Developer Program (requires a qualifying Visual Studio Professional/Enterprise subscription, or ISV Success/MAICPP membership) or a time-limited Microsoft 365 E5 trial — no cloud resource charges either way. Plan ~10–12 hours of lab time within your tenant’s active window. If you already set up a tenant for MD-102, reuse it." }
    },
    {
      "@type": "Question",
      "name": "What certification does MS-102 earn?",
      "acceptedAnswer": { "@type": "Answer", "text": "MS-102 earns the Microsoft 365 Certified: Administrator Expert credential. It's an expert-level certification covering tenant management, Microsoft Entra identity, Microsoft Defender XDR security, and Microsoft Purview compliance — the full scope of administering a Microsoft 365 environment." }
    },
    {
      "@type": "Question",
      "name": "How does the GitHub portfolio auto-commit work for MS-102?",
      "acceptedAnswer": { "@type": "Answer", "text": "When you mark a lab step complete, HandsOnCert commits your screenshot evidence — tenant configuration, Conditional Access policies, Defender XDR incidents, Purview DLP policies — directly to your own GitHub repository. Each project gets its own folder with a unique enrollment code, so your portfolio reflects real Microsoft 365 administration an employer can review." }
    },
    {
      "@type": "Question",
      "name": "How long does the MS-102 path take to complete?",
      "acceptedAnswer": { "@type": "Answer", "text": "The 5 projects take approximately 12 hours total, covering tenant deployment, users and licensing, Entra identity and access, Defender XDR security, and Purview compliance — the same domains tested on the MS-102 exam, weighted toward the heaviest Defender XDR security domain." }
    },
    {
      "@type": "Question",
      "name": "Should I take MS-102 with SC-300 or MD-102?",
      "acceptedAnswer": { "@type": "Answer", "text": "They complement each other. MS-102 covers Microsoft 365 administration end to end (tenant, identity, security, compliance). SC-300 goes deeper on identity and access with Entra ID. MD-102 covers endpoint and device management with Intune. Together, MS-102 + SC-300 + MD-102 cover the complete modern-workplace administration role that many organizations are consolidating into one position." }
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "MS-102 Hands-On Lab Path",
  "description": "5 hands-on Microsoft 365 administration projects mapped to MS-102: Microsoft 365 Administrator exam objectives, with GitHub portfolio auto-commit.",
  "provider": { "@type": "Organization", "name": "HandsOnCert", "sameAs": "https://www.handsoncert.com" },
  "offers": { "@type": "Offer", "price": "79", "priceCurrency": "USD" }
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

export default function Ms102Page() {
  return (
    <div style={{ '--provider-color': "#0078D4" } as React.CSSProperties}>
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
        <div className="nav-pill">23 cert paths live</div>
        <a href="https://app.handsoncert.com/signup" className="nav-cta">Start building →</a>
      </div>
    </div>
  </div>
</nav>

<div className="container">
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span>›</span>
    <a href="/certs/">All Certs</a>
    <span>›</span>
    <span>MS-102</span>
  </nav>
</div>

<div className="container">
  <div className="hero">
    <div className="badge">✓ Live now — <span className="cert-provider-tag" style={{ marginLeft: '4px' }}>Microsoft 365</span> Expert · 5 hands-on projects</div>
    <h1>MS-102 Hands-On Labs<br /><em>Run a real Microsoft 365 tenant. Prove it on GitHub.</em></h1>
    <p className="hero-desc">Five real Microsoft 365 Administrator projects mapped to the MS-102 exam objectives. Deploy a tenant, manage identity with Entra ID, run security operations with Defender XDR, and enforce compliance with Purview. Every step auto-commits the evidence to your own GitHub repo — the expert-level portfolio employers actually click into.</p>
    <div className="hero-ctas">
      <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
      <a href="#projects" className="btn-secondary">See the 5 projects</a>
    </div>
    <p className="hero-note">$79 one-time · Project 1 free · Microsoft 365 E5 trial or Developer Program · No cloud charges</p>
  </div>

  <div className="stats">
    <div className="stat"><div className="stat-num">5</div><div className="stat-label">Hands-on projects</div></div>
    <div className="stat"><div className="stat-num">12h</div><div className="stat-label">Estimated time</div></div>
    <div className="stat"><div className="stat-num">$165</div><div className="stat-label">MS-102 exam cost</div></div>
    <div className="stat"><div className="stat-num">$79</div><div className="stat-label">HandsOnCert price</div></div>
  </div>
</div>

<section id="projects">
  <div className="container">
    <h2>What you&apos;ll build</h2>
    <p className="sec-sub">Every project maps to an official MS-102 exam domain — weighted toward the heaviest domain, Defender XDR security. Each one ends with evidence committed to your GitHub repo automatically.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div className="step-text">
          <h3>Deploy and Manage a Microsoft 365 Tenant — Free</h3>
          <p>Configure tenant and organizational settings, add and verify a custom domain with the right DNS records, and monitor Service Health and usage analytics. Commit your tenant and domain configuration.</p>
          <span className="step-domain">Deploy and manage a tenant — 25-30% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div className="step-text">
          <h3>Manage Users, Groups and Licensing</h3>
          <p>Create and bulk-import users, configure group-based licensing, manage the four Microsoft 365 group types and shared mailboxes, and assign admin roles with least privilege and B2B guest access. Commit your user and licensing evidence.</p>
          <span className="step-domain">Users, groups and licensing — 20-25% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div className="step-text">
          <h3>Implement Microsoft Entra Identity and Access</h3>
          <p>Configure MFA and passwordless authentication, build Conditional Access policies, enable Identity Protection risk policies, and set up Privileged Identity Management for just-in-time admin access. Commit your identity and access configuration.</p>
          <span className="step-domain">Microsoft Entra identity and access — 15-20% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <div className="step-text">
          <h3>Secure Microsoft 365 with Defender XDR</h3>
          <p>Review Secure Score, configure Defender for Office 365 policies (Safe Links, Safe Attachments, anti-phishing), investigate correlated incidents in the unified queue, and map the four Defender workloads. The heaviest exam domain. Commit your security configuration.</p>
          <span className="step-domain">Defender XDR security — 30-35% of exam (heaviest)</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">5</div>
        <div className="step-text">
          <h3>Enforce Compliance with Microsoft Purview</h3>
          <p>Create sensitivity labels with encryption, build a Data Loss Prevention policy across Exchange/SharePoint/Teams, configure retention policies for data lifecycle, and run Audit and eDiscovery. Commit your compliance evidence.</p>
          <span className="step-domain">Microsoft Purview compliance — 15-20% of exam</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2>Why HandsOnCert for MS-102</h2>
    <div className="benefits-grid">
      <div className="benefit">
        <div className="benefit-icon">🗂️</div>
        <h3>Real GitHub portfolio</h3>
        <p>Every completed step auto-commits evidence — Conditional Access, Defender XDR incidents, Purview DLP — to your own repo. Real M365 admin work, not screenshots of someone else&apos;s.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🛡️</div>
        <h3>Defender XDR depth</h3>
        <p>The heaviest exam domain gets the deepest project — Secure Score, Defender for Office 365 policies, and unified incident investigation across all four Defender workloads.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🆓</div>
        <h3>Lab tenant, no cloud charges</h3>
        <p>Labs run in a Microsoft 365 tenant with Entra ID P2, Defender XDR, and Purview — from the Microsoft 365 Developer Program (requires a qualifying Visual Studio Professional/Enterprise subscription, or ISV Success/MAICPP membership) or a time-limited Microsoft 365 E5 trial. No cloud resource charges; plan ~10–12 hours within your tenant’s active window. Reuse your MD-102 tenant if you have one.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🤖</div>
        <h3>Cert Buddy AI mentor</h3>
        <p>Stuck on a Conditional Access policy or a DLP rule? Cert Buddy is trained on MS-102 objectives and helps you understand — not just copy-paste.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🔗</div>
        <h3>Pairs with SC-300 and MD-102</h3>
        <p>MS-102 covers admin end to end; SC-300 goes deeper on identity; MD-102 covers endpoints. Together they&apos;re the complete modern-workplace administration skill set.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💵</div>
        <h3>One-time price</h3>
        <p>$79 once for this expert-level path. No subscription, no recurring charges. Or get All-Access to all cert paths for $199.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2 id="faq">Frequently Asked Questions</h2>
    <div className="faq-list">
      <div className="faq-item">
        <p className="faq-q">Are the MS-102 hands-on labs free?</p>
        <p className="faq-a">Project 1 (Deploy and Manage a Microsoft 365 Tenant) is completely free, including Cert Buddy access for that project and the GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $79.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">What environment do I need for the MS-102 labs?</p>
        <p className="faq-a">MS-102 labs run in a Microsoft 365 tenant with Entra ID P2, Defender XDR, and Purview. You get one via the Microsoft 365 Developer Program (requires a qualifying Visual Studio Professional/Enterprise subscription, or ISV Success/MAICPP membership) or a time-limited Microsoft 365 E5 trial — no cloud resource charges either way. Plan ~10–12 hours of lab time within your tenant’s active window. If you already set up a tenant for MD-102, reuse it.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">What certification does MS-102 earn?</p>
        <p className="faq-a">MS-102 earns the Microsoft 365 Certified: Administrator Expert credential. It&apos;s an expert-level certification covering tenant management, Microsoft Entra identity, Microsoft Defender XDR security, and Microsoft Purview compliance — the full scope of administering a Microsoft 365 environment.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How does the GitHub portfolio auto-commit work for MS-102?</p>
        <p className="faq-a">When you mark a lab step complete, HandsOnCert commits your screenshot evidence — tenant configuration, Conditional Access policies, Defender XDR incidents, Purview DLP policies — directly to your own GitHub repository. Each project gets its own folder with a unique enrollment code, so your portfolio reflects real Microsoft 365 administration an employer can review.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How long does the MS-102 path take to complete?</p>
        <p className="faq-a">The 5 projects take approximately 12 hours total, covering tenant deployment, users and licensing, Entra identity and access, Defender XDR security, and Purview compliance — the same domains tested on the MS-102 exam, weighted toward the heaviest Defender XDR security domain.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Should I take MS-102 with SC-300 or MD-102?</p>
        <p className="faq-a">They complement each other. MS-102 covers Microsoft 365 administration end to end (tenant, identity, security, compliance). SC-300 goes deeper on identity and access with Entra ID. MD-102 covers endpoint and device management with Intune. Together, MS-102 + SC-300 + MD-102 cover the complete modern-workplace administration role that many organizations are consolidating into one position.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="cta-section">
      <h2>Build your MS-102 portfolio today</h2>
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
      <a href="/microsoft-365/">Microsoft 365</a>
      <a href="/certs/md-102/">MD-102</a>
      <a href="/certs/sc-300/">SC-300</a>
      <a href="/compare/ms-102-vs-sc-300/">Compare: MS-102 vs SC-300</a>
    </p>
  </div>
</footer>
    </div>
  )
}
