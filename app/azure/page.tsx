import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Azure Certification Path | HandsOnCert',
  description:
    'Azure certification roadmap with hands-on labs. AZ-900, AZ-104, AZ-305, AZ-400, SC-300, SC-900, DP-900 — real labs, GitHub portfolio auto-commit, one-time pricing.',
  alternates: {
    canonical: 'https://www.handsoncert.com/azure/',
  },
  openGraph: {
    title: 'Azure Certification Path | HandsOnCert',
    description:
      '7 Azure cert paths with hands-on labs and GitHub portfolio auto-commit. AZ-900 through AZ-305/AZ-400/SC-300. One-time pricing from $29.',
    type: 'website',
    url: 'https://www.handsoncert.com/azure/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'Azure', item: 'https://www.handsoncert.com/azure/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What order should I take Azure certifications in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Start with AZ-900 (Azure Fundamentals) if you're new to cloud concepts — it's a $29 gateway cert with no prerequisites. Then move to AZ-104 (Azure Administrator Associate), the most common next step. From there, branch based on your goal: AZ-305 for solutions architecture, AZ-400 for DevOps, or SC-300 for identity and access management.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which Azure certification is best for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AZ-900 (Azure Fundamentals) is designed for beginners with no technical prerequisites. It covers core cloud concepts, Azure services, pricing, and compliance. HandsOnCert's AZ-900 path is $29 with 3 hands-on projects.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need AZ-900 before AZ-104?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AZ-900 is not a hard prerequisite for AZ-104, but it's recommended if you're new to Azure. If you already have hands-on cloud experience, you can go directly to AZ-104, which is the more practical, hands-on administrator certification.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between AZ-104 and AZ-305?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AZ-104 (Azure Administrator Associate) focuses on day-to-day operations: managing identities, storage, compute, and networking. AZ-305 (Solutions Architect Expert) focuses on designing solutions — choosing the right services, architecture patterns, and governance for business requirements. AZ-104 is typically taken first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SC-300 worth taking alongside AZ-104?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "SC-300 (Identity and Access Administrator) is a specialization in Microsoft Entra ID — useful if your role involves identity, access governance, or security. It pairs well with AZ-104 for administrators, but isn't required for general Azure administration.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is SC-500 and when will it be available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SC-500 (Microsoft Cloud and AI Security Engineer Associate) is a new certification covering cloud and AI security, replacing AZ-500 which retires August 31, 2026. SC-500 entered beta in May 2026 with general availability expected July 2026. HandsOnCert will add an SC-500 hands-on path once it reaches general availability.',
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
.path-cta { color: var(--accent); text-decoration: none; font-weight: 700; font-size: 14px; white-space: nowrap; }
.path-branch-label { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: var(--text-5); margin: 24px 0 4px; }

.cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 20px; }
.cert-card { padding: 20px; border: 1px solid var(--border); border-radius: 12px; background: var(--bg-card2); text-decoration: none; display: block; transition: border-color 0.15s; }
.cert-card:hover { border-color: var(--provider-color); }
.cert-card.soon { opacity: 0.6; }
.cert-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.cert-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 12px; text-transform: uppercase; color: #fff; background: var(--provider-color); }
.cert-status-live { font-size: 11px; font-weight: 700; color: var(--emerald); }
.cert-status-soon { font-size: 11px; font-weight: 700; color: var(--amber); }
.cert-id { font-size: 20px; font-weight: 800; color: var(--text-1); font-family: monospace; }
.cert-name { font-size: 14px; color: var(--text-3); margin-top: 4px; }
.cert-meta { display: flex; gap: 8px; margin-top: 12px; font-size: 12px; color: var(--text-5); }
.cert-price { color: var(--accent); font-weight: 700; }
.cert-sep { color: var(--border); }

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

export default function AzurePage() {
  return (
    <div style={{ '--provider-color': '#0078D4' } as React.CSSProperties}>
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
          <span>Azure</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ 7 Azure cert paths live</div>
          <h1>Azure Certification Path<br /><em>Hands-on labs. Real GitHub portfolio.</em></h1>
          <p className="hero-desc">
            A clear roadmap through Azure certifications — from Fundamentals to Administrator to Architect, DevOps, Identity, Security, and Data. Every path is hands-on: real Azure resources, real projects, auto-committed to your own GitHub repo as you go.
          </p>
          <div className="hero-ctas">
            <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
            <a href="#path" className="btn-secondary">See the roadmap</a>
          </div>
          <p className="hero-note">7 cert paths · $29–$79 each · Project 1 always free</p>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-num">7</div><div className="stat-label">Azure cert paths</div></div>
          <div className="stat"><div className="stat-num">29</div><div className="stat-label">Total projects</div></div>
          <div className="stat"><div className="stat-num">$29</div><div className="stat-label">Starting price</div></div>
          <div className="stat"><div className="stat-num">2</div><div className="stat-label">Coming soon</div></div>
        </div>
      </div>

      <section id="path">
        <div className="container">
          <h2>The Azure certification roadmap</h2>
          <p className="sec-sub">Start with Fundamentals, build core admin skills, then branch toward architecture, DevOps, identity, security, or data based on your role.</p>

          <div className="path">
            <div className="path-step">
              <div className="path-num">1</div>
              <div className="path-text">
                <h3>AZ-900 — Azure Fundamentals</h3>
                <p>Start here if you&apos;re new to Azure or cloud computing in general. Covers core cloud concepts, Azure services, pricing, and compliance — no prerequisites.</p>
                <div className="path-meta">
                  <span className="path-tag">3 projects</span>
                  <span className="path-tag">4h</span>
                  <span className="path-tag price">$29</span>
                </div>
              </div>
              <a href="/certs/az-900/" className="path-cta">View path →</a>
            </div>

            <div className="path-step">
              <div className="path-num">2</div>
              <div className="path-text">
                <h3>AZ-104 — Azure Administrator Associate</h3>
                <p>The most common next step. Hands-on administration: identity, storage, compute, networking, and monitoring. HandsOnCert&apos;s most popular path.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">8h</span>
                  <span className="path-tag price">$49</span>
                </div>
              </div>
              <a href="/certs/az-104/" className="path-cta">View path →</a>
            </div>
          </div>

          <p className="path-branch-label">Then branch based on your role</p>

          <div className="path">
            <div className="path-step">
              <div className="path-num">3a</div>
              <div className="path-text">
                <h3>AZ-305 — Solutions Architect Expert</h3>
                <p>For those moving into architecture roles. Design identity, governance, monitoring, business continuity, and infrastructure solutions at scale.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">10h</span>
                  <span className="path-tag price">$79</span>
                </div>
              </div>
              <a href="/certs/az-305/" className="path-cta">View path →</a>
            </div>

            <div className="path-step">
              <div className="path-num">3b</div>
              <div className="path-text">
                <h3>AZ-400 — DevOps Engineer Expert</h3>
                <p>For those focused on CI/CD and automation. Design and implement DevOps practices using Azure DevOps, GitHub Actions, and infrastructure as code.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">12h</span>
                  <span className="path-tag price">$79</span>
                </div>
              </div>
              <a href="/certs/az-400/" className="path-cta">View path →</a>
            </div>

            <div className="path-step">
              <div className="path-num">3c</div>
              <div className="path-text">
                <h3>SC-300 — Identity and Access Administrator</h3>
                <p>For those focused on identity and security. Design and implement identity solutions using Microsoft Entra ID, including access governance and authentication.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">10h</span>
                  <span className="path-tag price">$49</span>
                </div>
              </div>
              <a href="/certs/sc-300/" className="path-cta">View path →</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Other Azure fundamentals paths</h2>
          <p className="sec-sub">Gateway-tier certs covering security/compliance and data fundamentals — useful alongside or instead of AZ-900 depending on your focus.</p>
          <div className="cert-grid">
            <a href="/certs/sc-900/" className="cert-card">
              <div className="cert-top">
                <span className="cert-tag">Azure</span>
                <span className="cert-status-live">● Live</span>
              </div>
              <div className="cert-id">SC-900</div>
              <div className="cert-name">Security, Compliance &amp; Identity Fundamentals</div>
              <div className="cert-meta">
                <span className="cert-price">$29</span><span className="cert-sep">·</span><span>3 projects</span><span className="cert-sep">·</span><span>4h</span>
              </div>
            </a>
            <a href="/certs/dp-900/" className="cert-card">
              <div className="cert-top">
                <span className="cert-tag">Azure</span>
                <span className="cert-status-live">● Live</span>
              </div>
              <div className="cert-id">DP-900</div>
              <div className="cert-name">Azure Data Fundamentals</div>
              <div className="cert-meta">
                <span className="cert-price">$29</span><span className="cert-sep">·</span><span>3 projects</span><span className="cert-sep">·</span><span>4h</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Coming soon</h2>
          <p className="sec-sub">New Azure certs we&apos;re building hands-on paths for as soon as objectives and exams are finalized.</p>
          <div className="cert-grid">
            <a href="#" className="cert-card soon" aria-disabled="true">
              <div className="cert-top">
                <span className="cert-tag">Azure</span>
                <span className="cert-status-soon">◐ Coming Soon</span>
              </div>
              <div className="cert-id">SC-500</div>
              <div className="cert-name">Microsoft Cloud and AI Security Engineer</div>
              <div className="cert-meta">
                <span>Replaces AZ-500</span><span className="cert-sep">·</span><span>GA expected July 2026</span>
              </div>
            </a>
            <a href="#" className="cert-card soon" aria-disabled="true">
              <div className="cert-top">
                <span className="cert-tag">Azure</span>
                <span className="cert-status-soon">◐ Coming Soon</span>
              </div>
              <div className="cert-id">AI-901</div>
              <div className="cert-name">Azure AI Fundamentals</div>
              <div className="cert-meta">
                <span>Pending Microsoft objectives</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why HandsOnCert for Azure</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🗂️</div>
              <h3>Real GitHub portfolio</h3>
              <p>Every Azure path auto-commits your evidence — RBAC configs, network topologies, deployment templates — straight to your own GitHub repo.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">☁️</div>
              <h3>Real Azure portal &amp; CLI</h3>
              <p>No simulators. Every project uses the actual Azure portal and CLI — the same tools tested on the exam and used on the job.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤖</div>
              <h3>Cert Buddy AI mentor</h3>
              <p>Each Azure path has a Cert Buddy trained on that exam&apos;s objectives — for debugging labs and understanding concepts, not just copy-paste.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>Azure cost alerts</h3>
              <p>Precise terminology for Azure billing — deallocate vs stop, when a resource needs deleting — so a break doesn&apos;t become a surprise bill.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📄</div>
              <h3>Downloadable lab guides</h3>
              <p>Every Azure cert path includes a full PDF lab guide with step-by-step instructions and an exam quick-reference section.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💵</div>
              <h3>One-time pricing</h3>
              <p>$29–$79 per cert, once. Or get All-Access to all 21 cert paths — every Azure path included — for $199.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">What order should I take Azure certifications in?</p>
              <p className="faq-a">Start with AZ-900 (Azure Fundamentals) if you&apos;re new to cloud concepts — it&apos;s a $29 gateway cert with no prerequisites. Then move to AZ-104 (Azure Administrator Associate), the most common next step. From there, branch based on your goal: AZ-305 for solutions architecture, AZ-400 for DevOps, or SC-300 for identity and access management.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Which Azure certification is best for beginners?</p>
              <p className="faq-a">AZ-900 (Azure Fundamentals) is designed for beginners with no technical prerequisites. It covers core cloud concepts, Azure services, pricing, and compliance. HandsOnCert&apos;s AZ-900 path is $29 with 3 hands-on projects.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do I need AZ-900 before AZ-104?</p>
              <p className="faq-a">AZ-900 is not a hard prerequisite for AZ-104, but it&apos;s recommended if you&apos;re new to Azure. If you already have hands-on cloud experience, you can go directly to AZ-104, which is the more practical, hands-on administrator certification.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What&apos;s the difference between AZ-104 and AZ-305?</p>
              <p className="faq-a">AZ-104 (Azure Administrator Associate) focuses on day-to-day operations: managing identities, storage, compute, and networking. AZ-305 (Solutions Architect Expert) focuses on designing solutions — choosing the right services, architecture patterns, and governance for business requirements. AZ-104 is typically taken first.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is SC-300 worth taking alongside AZ-104?</p>
              <p className="faq-a">SC-300 (Identity and Access Administrator) is a specialization in Microsoft Entra ID — useful if your role involves identity, access governance, or security. It pairs well with AZ-104 for administrators, but isn&apos;t required for general Azure administration.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What is SC-500 and when will it be available?</p>
              <p className="faq-a">SC-500 (Microsoft Cloud and AI Security Engineer Associate) is a new certification covering cloud and AI security, replacing AZ-500 which retires August 31, 2026. SC-500 entered beta in May 2026 with general availability expected July 2026. HandsOnCert will add an SC-500 hands-on path once it reaches general availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Start your Azure portfolio today</h2>
            <p>Project 1 of any Azure path is free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
            <a href="https://app.handsoncert.com/signup" className="btn-accent">Start Free →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 HandsOnCert &nbsp;·&nbsp; Learn · Build · Prove &nbsp;·&nbsp;
            <a href="/">Home</a>
            <a href="/certs/">All Certs</a>
            <a href="/aws/">AWS</a>
            <a href="/gcp/">GCP</a>
            <a href="/cncf/">CNCF</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
