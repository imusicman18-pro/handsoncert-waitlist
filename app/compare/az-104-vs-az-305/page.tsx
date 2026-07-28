import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AZ-104 vs AZ-305: Which Azure Certification Should You Take? | HandsOnCert',
  description:
    'AZ-104 vs AZ-305 compared — exam domains, difficulty, career fit, and pricing. Hands-on labs for both with GitHub portfolio auto-commit. AZ-104 $49, AZ-305 $79.',
  alternates: {
    canonical: 'https://www.handsoncert.com/compare/az-104-vs-az-305/',
  },
  openGraph: {
    title: 'AZ-104 vs AZ-305: Which Azure Certification Should You Take? | HandsOnCert',
    description:
      'AZ-104 vs AZ-305 compared — exam domains, difficulty, career fit, and pricing. Hands-on labs for both with GitHub portfolio auto-commit.',
    type: 'website',
    url: 'https://www.handsoncert.com/compare/az-104-vs-az-305/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'Azure', item: 'https://www.handsoncert.com/azure/' },
    { '@type': 'ListItem', position: 3, name: 'AZ-104 vs AZ-305', item: 'https://www.handsoncert.com/compare/az-104-vs-az-305/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I take AZ-104 before AZ-305?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AZ-104 is not a hard prerequisite for AZ-305, but Microsoft strongly recommends hands-on Azure administration experience first. AZ-104 (Azure Administrator Associate) builds the foundational operational skills that AZ-305's architecture decisions rely on, and it's the most common path people take before attempting AZ-305.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is AZ-305 harder than AZ-104?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. AZ-305 is an Expert-level certification that requires designing complete solutions — weighing tradeoffs across identity, governance, data, business continuity, and infrastructure based on business requirements. AZ-104 is Associate-level and focuses on implementing and managing resources that are already designed. AZ-305 assumes AZ-104-level operational knowledge as a baseline and builds architectural judgment on top of it.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the core difference between AZ-104 and AZ-305?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AZ-104 (Azure Administrator Associate) focuses on day-to-day operations: managing identities, storage, compute, and networking for resources that already exist. AZ-305 (Solutions Architect Expert) focuses on designing those solutions in the first place — choosing the right services, architecture patterns, and governance structures to meet business requirements. AZ-104 is about running things well; AZ-305 is about deciding what to run and how it should fit together.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I skip AZ-104 and go straight to AZ-305?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Technically yes — there's no enforced prerequisite. But AZ-305 exam questions often assume you understand how the underlying services behave operationally (e.g., what configuring a VM scale set actually involves), which AZ-104 teaches hands-on. Going straight to AZ-305 without that experience is possible but considerably harder.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which certification is better for career advancement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AZ-104 is more commonly required for Azure Administrator roles, which are higher in volume. AZ-305 is required for Solutions Architect and senior infrastructure roles, which are fewer but typically higher-paying. Many people take AZ-104 to get into Azure roles, then AZ-305 later to move into architecture — the two complement each other across a career progression rather than competing.",
      },
    },
    {
      '@type': 'Question',
      name: "How much do AZ-104 and AZ-305 cost compared to HandsOnCert's labs?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both official Microsoft exams cost $165. HandsOnCert's hands-on lab paths are separate from the exam fee — AZ-104 is $49 for 5 projects (8 hours), and AZ-305 is $79 for 5 projects (10 hours), each with Project 1 free.",
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
section { padding: 64px 0; }
section + section { border-top: 1px solid var(--bg-card); }
h2 { font-size: 30px; font-weight: 800; margin-bottom: 16px; color: var(--text-1); }
h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--text-1); }
.sec-sub { color: var(--text-5); font-size: 16px; max-width: 640px; }
.compare-table { width: 100%; margin-top: 32px; border-collapse: collapse; background: var(--bg-card); border-radius: 12px; overflow: hidden; }
.compare-table th, .compare-table td { padding: 16px 20px; text-align: left; border-bottom: 1px solid var(--border); font-size: 15px; }
.compare-table th { background: var(--bg-card2); color: var(--text-5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; }
.compare-table td { color: var(--text-3); }
.compare-table td.row-label { color: var(--text-1); font-weight: 700; }
.compare-table tr:last-child td { border-bottom: none; }
.compare-table .col-104 { color: var(--accent); font-weight: 700; }
.compare-table .col-305 { color: var(--emerald); font-weight: 700; }
.vs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px; }
.vs-card { padding: 28px; border-radius: 12px; background: var(--bg-card); border: 1px solid var(--border); }
.vs-card.c104 { border-left: 4px solid var(--accent); }
.vs-card.c305 { border-left: 4px solid var(--emerald); }
.vs-card h3 { font-size: 22px; margin-bottom: 4px; }
.vs-card .vs-sub { font-size: 13px; color: var(--text-5); margin-bottom: 16px; }
.vs-card ul { list-style: none; margin-top: 16px; }
.vs-card li { color: var(--text-3); font-size: 14px; padding: 6px 0; padding-left: 20px; position: relative; }
.vs-card li::before { content: "→"; position: absolute; left: 0; color: var(--text-5); }
.vs-card .vs-price { margin-top: 20px; font-size: 14px; color: var(--text-5); }
.vs-card .vs-price strong { color: var(--text-1); font-size: 20px; }
.vs-cta { margin-top: 20px; display: inline-block; color: var(--accent); text-decoration: none; font-weight: 700; font-size: 14px; }
.verdict { background: var(--bg-card2); border: 1px solid var(--border); border-radius: 12px; padding: 28px; margin-top: 32px; }
.verdict h3 { margin-bottom: 12px; }
.verdict p { color: var(--text-3); font-size: 15px; margin-bottom: 12px; }
.verdict p:last-child { margin-bottom: 0; }
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
  .cta-section { padding: 40px 24px; }
  .vs-grid { grid-template-columns: 1fr; }
  .compare-table { font-size: 13px; }
  .compare-table th, .compare-table td { padding: 12px 10px; }
}
`

export default function AZ104vsAZ305Page() {
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
              <div className="nav-pill">22 cert paths live</div>
              <a href="https://app.handsoncert.com/signup" className="nav-cta">Start building →</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/azure/">Azure</a>
          <span>›</span>
          <span>AZ-104 vs AZ-305</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ Both paths live on HandsOnCert</div>
          <h1>AZ-104 vs AZ-305<br /><em>Administrator or Architect — what&apos;s next?</em></h1>
          <p className="hero-desc">
            AZ-104 (Azure Administrator Associate) and AZ-305 (Solutions Architect Expert) sit at different points on the same career path. AZ-104 is about running Azure resources well; AZ-305 is about designing how those resources should fit together in the first place. Here&apos;s how they compare — and which one you should take first.
          </p>
          <div className="hero-ctas">
            <a href="#verdict" className="btn-primary">Jump to the verdict →</a>
            <a href="#compare" className="btn-secondary">See the comparison table</a>
          </div>
        </div>
      </div>

      <section id="compare">
        <div className="container">
          <h2>AZ-104 vs AZ-305 at a glance</h2>
          <p className="sec-sub">AZ-104 is Associate-level and operational. AZ-305 is Expert-level and architectural — it builds on the operational knowledge AZ-104 covers.</p>

          <table className="compare-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th className="col-104">AZ-104</th>
                <th className="col-305">AZ-305</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-label">Full name</td>
                <td>Azure Administrator Associate</td>
                <td>Azure Solutions Architect Expert</td>
              </tr>
              <tr>
                <td className="row-label">Level</td>
                <td>Associate</td>
                <td>Expert</td>
              </tr>
              <tr>
                <td className="row-label">Focus</td>
                <td>Implementing and managing — identity, storage, compute, networking, monitoring</td>
                <td>Designing — identity/governance, data, business continuity, infrastructure architecture</td>
              </tr>
              <tr>
                <td className="row-label">Best for</td>
                <td>Azure administrators, IT operations</td>
                <td>Solutions architects, senior infrastructure roles</td>
              </tr>
              <tr>
                <td className="row-label">Prerequisite</td>
                <td>None</td>
                <td>None enforced, but AZ-104-level experience strongly recommended</td>
              </tr>
              <tr>
                <td className="row-label">Official exam cost</td>
                <td>$165</td>
                <td>$165</td>
              </tr>
              <tr>
                <td className="row-label">HandsOnCert price</td>
                <td className="col-104">$49 (5 projects, 8h)</td>
                <td className="col-305">$79 (5 projects, 10h)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>What each path covers</h2>
          <p className="sec-sub">AZ-104 builds the operational foundation. AZ-305 builds the architectural judgment on top of it.</p>

          <div className="vs-grid">
            <div className="vs-card c104">
              <h3>AZ-104</h3>
              <div className="vs-sub">Azure Administrator Associate</div>
              <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>HandsOnCert&apos;s most popular path — the day-to-day operations of running Azure resources.</p>
              <ul>
                <li>Identity and Governance (Entra ID, RBAC, Azure Policy)</li>
                <li>Storage (accounts, blob lifecycle, Azure Files)</li>
                <li>Compute (VMs, scale sets, App Service)</li>
                <li>Networking (VNets, NSGs, load balancers, VPN)</li>
                <li>Monitoring and Backup (Azure Monitor, Log Analytics, Backup)</li>
              </ul>
              <div className="vs-price">HandsOnCert price: <strong>$49</strong> · 5 projects · 8h · Project 1 free</div>
              <a href="/certs/az-104/" className="vs-cta">View AZ-104 path →</a>
            </div>

            <div className="vs-card c305">
              <h3>AZ-305</h3>
              <div className="vs-sub">Azure Solutions Architect Expert</div>
              <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>Designing the architecture decisions that AZ-104-level work then implements.</p>
              <ul>
                <li>Identity, Governance and Monitoring design</li>
                <li>Data Storage solution design</li>
                <li>Business Continuity (backup &amp; DR strategy)</li>
                <li>Infrastructure design — Compute architecture</li>
                <li>Infrastructure design — Network architecture</li>
              </ul>
              <div className="vs-price">HandsOnCert price: <strong>$79</strong> · 5 projects · 10h · Project 1 free</div>
              <a href="/certs/az-305/" className="vs-cta">View AZ-305 path →</a>
            </div>
          </div>

          <div className="verdict" id="verdict">
            <h3>The verdict: AZ-104 first, AZ-305 as the next step</h3>
            <p>If you&apos;re new to Azure or building toward an administrator role, <strong style={{ color: 'var(--text-1)' }}>AZ-104</strong> is the right starting point. It&apos;s HandsOnCert&apos;s most popular path for good reason — it covers the operational fundamentals (identity, storage, compute, networking, monitoring) that almost every Azure role touches.</p>
            <p><strong style={{ color: 'var(--text-1)' }}>AZ-305</strong> is the natural next step once you&apos;ve built that operational foundation — whether through AZ-104 itself or equivalent hands-on experience. AZ-305 assumes you understand how the underlying services behave, and adds the architectural judgment of choosing between them based on business requirements.</p>
            <p>Think of it as a sequence, not a choice: AZ-104 teaches you to run what&apos;s already designed well; AZ-305 teaches you to design it in the first place. Most people who move into architecture roles take both, in that order.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">Should I take AZ-104 before AZ-305?</p>
              <p className="faq-a">AZ-104 is not a hard prerequisite for AZ-305, but Microsoft strongly recommends hands-on Azure administration experience first. AZ-104 (Azure Administrator Associate) builds the foundational operational skills that AZ-305&apos;s architecture decisions rely on, and it&apos;s the most common path people take before attempting AZ-305.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is AZ-305 harder than AZ-104?</p>
              <p className="faq-a">Yes. AZ-305 is an Expert-level certification that requires designing complete solutions — weighing tradeoffs across identity, governance, data, business continuity, and infrastructure based on business requirements. AZ-104 is Associate-level and focuses on implementing and managing resources that are already designed. AZ-305 assumes AZ-104-level operational knowledge as a baseline and builds architectural judgment on top of it.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What&apos;s the core difference between AZ-104 and AZ-305?</p>
              <p className="faq-a">AZ-104 (Azure Administrator Associate) focuses on day-to-day operations: managing identities, storage, compute, and networking for resources that already exist. AZ-305 (Solutions Architect Expert) focuses on designing those solutions in the first place — choosing the right services, architecture patterns, and governance structures to meet business requirements. AZ-104 is about running things well; AZ-305 is about deciding what to run and how it should fit together.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Can I skip AZ-104 and go straight to AZ-305?</p>
              <p className="faq-a">Technically yes — there&apos;s no enforced prerequisite. But AZ-305 exam questions often assume you understand how the underlying services behave operationally (e.g., what configuring a VM scale set actually involves), which AZ-104 teaches hands-on. Going straight to AZ-305 without that experience is possible but considerably harder.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Which certification is better for career advancement?</p>
              <p className="faq-a">AZ-104 is more commonly required for Azure Administrator roles, which are higher in volume. AZ-305 is required for Solutions Architect and senior infrastructure roles, which are fewer but typically higher-paying. Many people take AZ-104 to get into Azure roles, then AZ-305 later to move into architecture — the two complement each other across a career progression rather than competing.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How much do AZ-104 and AZ-305 cost compared to HandsOnCert&apos;s labs?</p>
              <p className="faq-a">Both official Microsoft exams cost $165. HandsOnCert&apos;s hands-on lab paths are separate from the exam fee — AZ-104 is $49 for 5 projects (8 hours), and AZ-305 is $79 for 5 projects (10 hours), each with Project 1 free.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Start building your Azure portfolio</h2>
            <p>Project 1 of either path is free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
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
            <a href="/certs/az-104/">AZ-104</a>
            <a href="/certs/az-305/">AZ-305</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
