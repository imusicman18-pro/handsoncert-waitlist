import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microsoft 365 Certifications | MD-102 & MS-102 Hands-On Labs | HandsOnCert',
  description:
    'Microsoft 365 certification hands-on labs — MD-102 Endpoint Administrator and MS-102 Administrator Expert. Real Intune, Entra, Defender XDR, and Purview projects auto-committed to your GitHub portfolio. Pay once per cert.',
  alternates: {
    canonical: 'https://www.handsoncert.com/microsoft-365/',
  },
  openGraph: {
    title: 'Microsoft 365 Certifications | MD-102 & MS-102 | HandsOnCert',
    description:
      'MD-102 (Endpoint Administrator) and MS-102 (Administrator Expert) hands-on labs. Real Intune, Entra, Defender XDR, and Purview projects with GitHub portfolio auto-commit.',
    type: 'website',
    url: 'https://www.handsoncert.com/microsoft-365/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'Microsoft 365', item: 'https://www.handsoncert.com/microsoft-365/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Microsoft 365 certifications does HandsOnCert cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HandsOnCert covers two Microsoft 365 certifications: MD-102 (Microsoft 365 Certified: Endpoint Administrator Associate), focused on managing and securing devices with Microsoft Intune, and MS-102 (Microsoft 365 Certified: Administrator Expert), covering full tenant administration — identity with Entra, security with Defender XDR, and compliance with Purview.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take MD-102 or MS-102 first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MD-102 is the associate-level starting point — it focuses on endpoint and device management with Intune, which is a natural entry into modern-workplace administration. MS-102 is the expert-level path covering the whole Microsoft 365 tenant (identity, security, compliance). Many admins do MD-102 first, then MS-102 for the broader administrator role.',
      },
    },
    {
      '@type': 'Question',
      name: 'What environment do the Microsoft 365 labs use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both MD-102 and MS-102 labs run in a free Microsoft 365 Developer tenant, which includes Microsoft Intune, Entra ID P2, Defender XDR, and Purview at no cost. There are no cloud resource charges — the only thing to watch is keeping your developer tenant active. You can reuse the same tenant across both certifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the Microsoft 365 certs relate to SC-300 and Azure certs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MS-102 + SC-300 is the highest-ROI pairing for Microsoft 365 admins: MS-102 covers tenant administration end to end while SC-300 goes deeper on Entra identity and access. MD-102 adds endpoint management. Azure certifications (like AZ-104) cover cloud infrastructure, which is a different role with minimal overlap — the Microsoft 365 track is about the modern workplace, not cloud infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Microsoft 365 administration a good career path?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Nearly every organization on Microsoft 365 needs administrators who can deploy devices, manage identity, run security operations with Defender, and enforce compliance with Purview. As organizations consolidate the modern-workplace role, the combination of MD-102 and MS-102 covers exactly the skills employers are hiring for — and a GitHub portfolio of real configurations proves you can do the work, not just pass the exam.',
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
  --provider-color: #0078D4;
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
.badge { display: inline-flex; align-items: center; gap: 6px; background: var(--bg-card2); border: 1px solid var(--border); color: var(--provider-color); font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
h1 { font-size: 42px; font-weight: 800; line-height: 1.15; color: var(--text-1); margin-bottom: 20px; }
h1 em { color: var(--provider-color); font-style: normal; }
.hero-desc { font-size: 18px; color: var(--text-3); max-width: 660px; margin-bottom: 32px; }
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-primary { background: var(--provider-color); color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 16px; }
.btn-secondary { background: transparent; color: var(--text-2); padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px; border: 2px solid var(--border); }

.stats { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 28px 32px; margin: 32px 0; display: flex; gap: 40px; flex-wrap: wrap; }
.stat { text-align: center; }
.stat-num { font-size: 28px; font-weight: 800; color: var(--provider-color); }
.stat-label { font-size: 13px; color: var(--text-5); margin-top: 4px; }

section { padding: 64px 0; }
section + section { border-top: 1px solid var(--bg-card); }
h2 { font-size: 30px; font-weight: 800; margin-bottom: 16px; color: var(--text-1); }
h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--text-1); }
.sec-sub { color: var(--text-5); font-size: 16px; max-width: 660px; }

.cert-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 32px; }
.cert-card { display: block; padding: 28px; background: var(--bg-card); border: 1px solid var(--border); border-left: 4px solid var(--provider-color); border-radius: 12px; text-decoration: none; transition: border-color 0.15s, transform 0.1s; }
.cert-card:hover { border-color: var(--provider-color); transform: translateY(-2px); }
.cert-card-id { font-size: 13px; font-weight: 700; color: var(--provider-color); font-family: monospace; letter-spacing: 0.04em; }
.cert-card-tier { display: inline-block; margin-left: 8px; font-size: 10px; font-weight: 700; color: var(--text-5); text-transform: uppercase; letter-spacing: 0.5px; }
.cert-card-name { font-size: 20px; font-weight: 800; color: var(--text-1); margin: 8px 0 4px; }
.cert-card-desc { font-size: 14px; color: var(--text-3); margin: 12px 0 18px; line-height: 1.65; }
.cert-card-meta { display: flex; gap: 14px; align-items: center; font-size: 13px; color: var(--text-5); font-family: monospace; }
.cert-card-price { color: var(--provider-color); font-weight: 800; font-size: 16px; }

.path { display: grid; gap: 16px; margin-top: 32px; }
.path-step { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: var(--bg-card); border-radius: 12px; border-left: 4px solid var(--provider-color); }
.path-num { background: var(--provider-color); color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 15px; flex-shrink: 0; }
.path-step p { color: var(--text-3); font-size: 15px; margin-top: 4px; }

.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 32px; }
.benefit { padding: 24px; border: 1px solid var(--border); border-radius: 12px; background: var(--bg-card2); }
.benefit-icon { font-size: 28px; margin-bottom: 12px; }
.benefit p { color: var(--text-3); font-size: 14px; }

.faq-list { margin-top: 32px; }
.faq-item { border-bottom: 1px solid var(--border); padding: 24px 0; }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-q { font-weight: 700; font-size: 17px; color: var(--text-1); margin-bottom: 10px; }
.faq-a { color: var(--text-3); font-size: 15px; line-height: 1.7; }

.cta-section { background: var(--bg-card); border: 1px solid var(--provider-color); border-radius: 16px; padding: 56px; text-align: center; }
.cta-section h2 { color: var(--text-1); font-size: 32px; }
.cta-section p { color: var(--text-3); margin: 16px 0 32px; font-size: 18px; }
.btn-accent { background: var(--provider-color); color: #fff; padding: 16px 36px; border-radius: 8px; text-decoration: none; font-weight: 800; font-size: 17px; display: inline-block; }

footer { border-top: 1px solid var(--bg-card); padding: 32px 0; text-align: center; color: var(--text-5); font-size: 14px; }
footer a { color: var(--accent); text-decoration: none; margin: 0 12px; }

@media (max-width: 640px) {
  h1 { font-size: 28px; }
  .stats { gap: 24px; justify-content: center; }
  .cta-section { padding: 40px 24px; }
}
`

export default function Microsoft365Page() {
  return (
    <div>
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
          <span>Microsoft 365</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ Live now — MD-102 &amp; MS-102</div>
          <h1>Microsoft 365 Certifications<br /><em>Run the modern workplace. Prove it on GitHub.</em></h1>
          <p className="hero-desc">
            Two hands-on Microsoft 365 certification paths — from managing endpoints with Intune to administering an entire tenant with Entra, Defender XDR, and Purview. Every step auto-commits real configurations to your own GitHub repo. The modern-workplace portfolio employers actually click into.
          </p>
          <div className="hero-ctas">
            <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
            <a href="#certs" className="btn-secondary">See the 2 certs</a>
          </div>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-num">2</div><div className="stat-label">Certifications</div></div>
          <div className="stat"><div className="stat-num">10</div><div className="stat-label">Hands-on projects</div></div>
          <div className="stat"><div className="stat-num">22h</div><div className="stat-label">Total lab time</div></div>
          <div className="stat"><div className="stat-num">$49–79</div><div className="stat-label">Pay once per cert</div></div>
        </div>
      </div>

      <section id="certs">
        <div className="container">
          <h2>The Microsoft 365 certifications</h2>
          <p className="sec-sub">Two complementary paths covering the modern-workplace administrator role — endpoints, identity, security, and compliance. Project 1 of either cert is free.</p>
          <div className="cert-cards">
            <a href="/certs/md-102/" className="cert-card">
              <span className="cert-card-id">MD-102</span><span className="cert-card-tier">Associate</span>
              <div className="cert-card-name">Endpoint Administrator</div>
              <p className="cert-card-desc">Deploy and secure devices with Microsoft Intune — Windows Autopilot, compliance and configuration policies, Conditional Access with Defender for Endpoint, and app deployment.</p>
              <div className="cert-card-meta">
                <span className="cert-card-price">$49</span>
                <span>·</span><span>5 projects</span>
                <span>·</span><span>10h</span>
              </div>
            </a>
            <a href="/certs/ms-102/" className="cert-card">
              <span className="cert-card-id">MS-102</span><span className="cert-card-tier">Expert</span>
              <div className="cert-card-name">Microsoft 365 Administrator</div>
              <p className="cert-card-desc">Administer a full Microsoft 365 tenant — deployment, users and licensing, Entra identity and access, Defender XDR security operations, and Purview compliance.</p>
              <div className="cert-card-meta">
                <span className="cert-card-price">$79</span>
                <span>·</span><span>5 projects</span>
                <span>·</span><span>12h</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>How the path fits together</h2>
          <p className="sec-sub">MD-102 and MS-102 are complementary, not redundant — endpoints versus the whole tenant. Add SC-300 for the deepest identity coverage.</p>
          <div className="path">
            <div className="path-step">
              <div className="path-num">1</div>
              <div>
                <h3>Start with MD-102 (Associate) — endpoints</h3>
                <p>Learn modern device management with Intune: Autopilot deployment, compliance and configuration, and endpoint security with Defender. The natural entry point into modern-workplace administration.</p>
              </div>
            </div>
            <div className="path-step">
              <div className="path-num">2</div>
              <div>
                <h3>Move up to MS-102 (Expert) — the whole tenant</h3>
                <p>Administer Microsoft 365 end to end: tenant deployment, users and licensing, Entra identity and access, Defender XDR security operations, and Purview compliance — the broad administrator role.</p>
              </div>
            </div>
            <div className="path-step">
              <div className="path-num">+</div>
              <div>
                <h3>Pair with SC-300 for identity depth</h3>
                <p>MS-102 covers identity as part of tenant administration; <a href="/certs/sc-300/" style={{ color: '#0078D4' }}>SC-300</a> goes deeper on Entra identity and access. MS-102 + SC-300 + MD-102 together cover the complete modern-workplace administration role.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why HandsOnCert for Microsoft 365</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🗂️</div>
              <h3>Real GitHub portfolio</h3>
              <p>Every completed step auto-commits real configurations — Intune policies, Conditional Access, Defender XDR incidents, Purview DLP — to your own repo. Not screenshots of someone else&apos;s work.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🆓</div>
              <h3>Free tenant, no cloud charges</h3>
              <p>Both certs run in a free Microsoft 365 Developer tenant with Intune, Entra ID P2, Defender XDR, and Purview included. Reuse the same tenant across MD-102 and MS-102.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤖</div>
              <h3>Cert Buddy AI mentor</h3>
              <p>Stuck on a Conditional Access policy or a DLP rule? Cert Buddy is trained on the MD-102 and MS-102 objectives and helps you understand — not just copy-paste.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🔗</div>
              <h3>A coherent learning path</h3>
              <p>Associate to Expert, endpoints to full tenant. MD-102 and MS-102 build on each other, and both pair naturally with SC-300 for identity depth.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📅</div>
              <h3>Current exam coverage</h3>
              <p>Both paths map to the current exam objectives — MD-102&apos;s 2026 five-domain structure and MS-102&apos;s tenant, Entra, Defender XDR, and Purview domains.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💵</div>
              <h3>Pay once per cert</h3>
              <p>$49 for MD-102, $79 for MS-102. No subscription. Or get All-Access to all 23 cert paths for $199.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">What Microsoft 365 certifications does HandsOnCert cover?</p>
              <p className="faq-a">HandsOnCert covers two Microsoft 365 certifications: MD-102 (Microsoft 365 Certified: Endpoint Administrator Associate), focused on managing and securing devices with Microsoft Intune, and MS-102 (Microsoft 365 Certified: Administrator Expert), covering full tenant administration — identity with Entra, security with Defender XDR, and compliance with Purview.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Should I take MD-102 or MS-102 first?</p>
              <p className="faq-a">MD-102 is the associate-level starting point — it focuses on endpoint and device management with Intune, which is a natural entry into modern-workplace administration. MS-102 is the expert-level path covering the whole Microsoft 365 tenant (identity, security, compliance). Many admins do MD-102 first, then MS-102 for the broader administrator role.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What environment do the Microsoft 365 labs use?</p>
              <p className="faq-a">Both MD-102 and MS-102 labs run in a free Microsoft 365 Developer tenant, which includes Microsoft Intune, Entra ID P2, Defender XDR, and Purview at no cost. There are no cloud resource charges — the only thing to watch is keeping your developer tenant active. You can reuse the same tenant across both certifications.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How do the Microsoft 365 certs relate to SC-300 and Azure certs?</p>
              <p className="faq-a">MS-102 + SC-300 is the highest-ROI pairing for Microsoft 365 admins: MS-102 covers tenant administration end to end while SC-300 goes deeper on Entra identity and access. MD-102 adds endpoint management. Azure certifications (like AZ-104) cover cloud infrastructure, which is a different role with minimal overlap — the Microsoft 365 track is about the modern workplace, not cloud infrastructure.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is Microsoft 365 administration a good career path?</p>
              <p className="faq-a">Yes. Nearly every organization on Microsoft 365 needs administrators who can deploy devices, manage identity, run security operations with Defender, and enforce compliance with Purview. As organizations consolidate the modern-workplace role, the combination of MD-102 and MS-102 covers exactly the skills employers are hiring for — and a GitHub portfolio of real configurations proves you can do the work, not just pass the exam.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Build your Microsoft 365 portfolio today</h2>
            <p>Start Project 1 of either cert free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
            <a href="https://app.handsoncert.com/signup" className="btn-accent">Start Free →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 HandsOnCert &nbsp;·&nbsp; Learn · Build · Prove &nbsp;·&nbsp;
            <a href="/">Home</a>
            <a href="/certs/">All Certs</a>
            <a href="/certs/md-102/">MD-102</a>
            <a href="/certs/ms-102/">MS-102</a>
            <a href="/certs/sc-300/">SC-300</a>
            <a href="/compare/ms-102-vs-sc-300/">Compare: MS-102 vs SC-300</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
