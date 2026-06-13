import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kubernetes (CNCF) Certification Path | HandsOnCert',
  description:
    'CNCF Kubernetes certification roadmap with hands-on labs. CKA, CKAD, CKS — real clusters, GitHub portfolio auto-commit, one-time pricing from $49.',
  alternates: {
    canonical: 'https://www.handsoncert.com/cncf/',
  },
  openGraph: {
    title: 'Kubernetes (CNCF) Certification Path | HandsOnCert',
    description:
      '3 CNCF Kubernetes cert paths with hands-on labs and GitHub portfolio auto-commit. CKA, CKAD, and CKS. One-time pricing from $49.',
    type: 'website',
    url: 'https://www.handsoncert.com/cncf/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'CNCF', item: 'https://www.handsoncert.com/cncf/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What order should I take CNCF Kubernetes certifications in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Start with CKA (Certified Kubernetes Administrator) to build core cluster operations skills, or CKAD (Certified Kubernetes Application Developer) if your role is more application-focused. CKS (Certified Kubernetes Security Specialist) requires an active CKA and should be taken last — it's the most advanced of the three.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take CKA or CKAD first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CKA (Certified Kubernetes Administrator) focuses on cluster operations — installation, configuration, networking, storage, and troubleshooting. CKAD (Certified Kubernetes Application Developer) focuses on building and deploying applications on Kubernetes — pods, deployments, services, and configuration. Choose based on your role: operations/platform engineers typically take CKA first, while application developers often start with CKAD. Both are valid starting points and don't require each other.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need CKA before taking CKS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CKS (Certified Kubernetes Security Specialist) requires an active CKA certification as a prerequisite. CKS builds on CKA knowledge and adds security-specific tooling — AppArmor, seccomp, Falco, OPA Gatekeeper, Trivy, and runtime security. It\'s considered the most difficult of the three Kubernetes certifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are CKA, CKAD, and CKS exams hands-on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, all three are performance-based exams. You work in live terminal environments connected to real Kubernetes clusters, completing tasks under time pressure — not multiple-choice questions. HandsOnCert's labs use the same tools (kubectl, kind, Helm) in the same hands-on format to build real exam-day speed and confidence.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the GitHub portfolio work for Kubernetes labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you complete a Kubernetes lab step, HandsOnCert commits your actual YAML manifests, kubectl command output, and configuration files to your own GitHub repository. For CKS specifically, this includes real Falco rules, OPA Gatekeeper policies, and security configurations — a portfolio that demonstrates real platform security knowledge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do CKA, CKAD, and CKS certifications expire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all three CNCF Kubernetes certifications are valid for 2 years from the date you pass the exam, after which they must be renewed by retaking the current version of the exam.',
      },
    },
  ],
}

const pageStyles = `
* { box-sizing: border-box; margin: 0; padding: 0; }
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

.path { display: grid; gap: 16px; margin-top: 32px; }
.path-step { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: var(--bg-card); border-radius: 12px; border-left: 4px solid var(--provider-color); position: relative; }
.path-num { background: var(--provider-color); color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0; }
.path-text p { color: var(--text-3); font-size: 15px; margin-top: 4px; }
.path-meta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; }
.path-tag { font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 12px; background: var(--bg-card2); color: var(--text-5); border: 1px solid var(--border); }
.path-tag.price { color: var(--accent); border-color: var(--accent); }
.path-tag.prereq { color: var(--amber); border-color: var(--amber); }
.path-cta { color: var(--accent); text-decoration: none; font-weight: 700; font-size: 14px; white-space: nowrap; }
.path-branch-label { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--text-5); margin: 24px 0 4px; }

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

@media (max-width: 640px) {
  h1 { font-size: 28px; }
  .stats { gap: 24px; justify-content: center; }
  .cta-section { padding: 40px 24px; }
  .path-step { flex-direction: column; }
  .path-cta { align-self: flex-start; }
}
`

export default function CNCFPage() {
  return (
    <div style={{ '--provider-color': '#326CE5' } as React.CSSProperties}>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav>
        <div className="container">
          <div className="nav-inner">
            <a href="/" className="logo">
              <span className="hands">HandsOn</span><span className="cert">Cert</span>
            </a>
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
          <span>CNCF</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ 3 Kubernetes cert paths live</div>
          <h1>Kubernetes Certification Path<br /><em>Hands-on labs. Real GitHub portfolio.</em></h1>
          <p className="hero-desc">
            A clear roadmap through CNCF&apos;s Kubernetes certifications — Administrator, Application Developer, and Security Specialist. Every path is hands-on: real clusters, real kubectl, real YAML, auto-committed to your own GitHub repo as you go.
          </p>
          <div className="hero-ctas">
            <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
            <a href="#path" className="btn-secondary">See the roadmap</a>
          </div>
          <p className="hero-note">3 cert paths · $49–$79 each · Project 1 always free</p>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-num">3</div><div className="stat-label">Kubernetes cert paths</div></div>
          <div className="stat"><div className="stat-num">15</div><div className="stat-label">Total projects</div></div>
          <div className="stat"><div className="stat-num">$49</div><div className="stat-label">Starting price</div></div>
          <div className="stat"><div className="stat-num">2yr</div><div className="stat-label">Cert validity</div></div>
        </div>
      </div>

      <section id="path">
        <div className="container">
          <h2>The Kubernetes certification roadmap</h2>
          <p className="sec-sub">Start with CKA (operations) or CKAD (development) depending on your role — both are valid entry points. CKS requires an active CKA and is the most advanced of the three.</p>

          <div className="path">
            <div className="path-step">
              <div className="path-num">1a</div>
              <div className="path-text">
                <h3>CKA — Certified Kubernetes Administrator</h3>
                <p>For operations and platform roles. Covers cluster installation, configuration, networking, storage, troubleshooting, and cluster maintenance — the foundation for managing Kubernetes in production.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">12h</span>
                  <span className="path-tag price">$79</span>
                </div>
              </div>
              <a href="/certs/cka/" className="path-cta">View path →</a>
            </div>

            <div className="path-step">
              <div className="path-num">1b</div>
              <div className="path-text">
                <h3>CKAD — Certified Kubernetes Application Developer</h3>
                <p>For application developer roles. Covers building, configuring, and deploying applications on Kubernetes — pods, deployments, services, config maps, and observability.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">10h</span>
                  <span className="path-tag price">$49</span>
                </div>
              </div>
              <a href="/certs/ckad/" className="path-cta">View path →</a>
            </div>
          </div>

          <p className="path-branch-label">Advanced — requires active CKA</p>

          <div className="path">
            <div className="path-step">
              <div className="path-num">2</div>
              <div className="path-text">
                <h3>CKS — Certified Kubernetes Security Specialist</h3>
                <p>The most advanced Kubernetes certification. Covers cluster hardening, system hardening, minimizing microservice vulnerabilities, supply chain security, and runtime security with Falco, OPA Gatekeeper, and Trivy.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">14h</span>
                  <span className="path-tag price">$79</span>
                  <span className="path-tag prereq">Requires active CKA</span>
                </div>
              </div>
              <a href="/certs/cks/" className="path-cta">View path →</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why HandsOnCert for Kubernetes</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🗂️</div>
              <h3>Real GitHub portfolio</h3>
              <p>Every Kubernetes path auto-commits your evidence — YAML manifests, kubectl output, Falco rules, OPA policies — straight to your own GitHub repo.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">⎈</div>
              <h3>Real clusters with kind</h3>
              <p>No simulators. Labs use kind (Kubernetes in Docker) and real kubectl commands — the same performance-based format as the actual exams.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤖</div>
              <h3>Cert Buddy AI mentor</h3>
              <p>Each path has a Cert Buddy trained on that exam&apos;s objectives — for debugging YAML, kubectl errors, and exam strategy under time pressure.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">⏱️</div>
              <h3>Exam speed practice</h3>
              <p>All three Kubernetes exams are performance-based with strict time limits. Labs are built to develop the speed and muscle memory the exams demand.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📄</div>
              <h3>Downloadable lab guides</h3>
              <p>Every Kubernetes cert path includes a full PDF lab guide with step-by-step instructions and a command quick-reference section.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💵</div>
              <h3>One-time pricing</h3>
              <p>$49–$79 per cert, once. Or get All-Access to all 21 cert paths — CKA, CKAD, and CKS included — for $199.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">What order should I take CNCF Kubernetes certifications in?</p>
              <p className="faq-a">Start with CKA (Certified Kubernetes Administrator) to build core cluster operations skills, or CKAD (Certified Kubernetes Application Developer) if your role is more application-focused. CKS (Certified Kubernetes Security Specialist) requires an active CKA and should be taken last — it&apos;s the most advanced of the three.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Should I take CKA or CKAD first?</p>
              <p className="faq-a">CKA (Certified Kubernetes Administrator) focuses on cluster operations — installation, configuration, networking, storage, and troubleshooting. CKAD (Certified Kubernetes Application Developer) focuses on building and deploying applications on Kubernetes — pods, deployments, services, and configuration. Choose based on your role: operations/platform engineers typically take CKA first, while application developers often start with CKAD. Both are valid starting points and don&apos;t require each other.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do I need CKA before taking CKS?</p>
              <p className="faq-a">Yes. CKS (Certified Kubernetes Security Specialist) requires an active CKA certification as a prerequisite. CKS builds on CKA knowledge and adds security-specific tooling — AppArmor, seccomp, Falco, OPA Gatekeeper, Trivy, and runtime security. It&apos;s considered the most difficult of the three Kubernetes certifications.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Are CKA, CKAD, and CKS exams hands-on?</p>
              <p className="faq-a">Yes, all three are performance-based exams. You work in live terminal environments connected to real Kubernetes clusters, completing tasks under time pressure — not multiple-choice questions. HandsOnCert&apos;s labs use the same tools (kubectl, kind, Helm) in the same hands-on format to build real exam-day speed and confidence.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How does the GitHub portfolio work for Kubernetes labs?</p>
              <p className="faq-a">When you complete a Kubernetes lab step, HandsOnCert commits your actual YAML manifests, kubectl command output, and configuration files to your own GitHub repository. For CKS specifically, this includes real Falco rules, OPA Gatekeeper policies, and security configurations — a portfolio that demonstrates real platform security knowledge.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do CKA, CKAD, and CKS certifications expire?</p>
              <p className="faq-a">Yes, all three CNCF Kubernetes certifications are valid for 2 years from the date you pass the exam, after which they must be renewed by retaking the current version of the exam.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Start your Kubernetes portfolio today</h2>
            <p>Project 1 of any Kubernetes path is free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
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
