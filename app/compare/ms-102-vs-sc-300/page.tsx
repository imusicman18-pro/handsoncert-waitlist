import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MS-102 vs SC-300: Which Microsoft Cert Should You Take? | HandsOnCert',
  description:
    'MS-102 vs SC-300 compared: Administrator Expert vs Identity Associate. Which Microsoft certification fits your role, and why they pair so well together. Hands-on lab paths for both.',
  alternates: {
    canonical: 'https://www.handsoncert.com/compare/ms-102-vs-sc-300/',
  },
  openGraph: {
    title: 'MS-102 vs SC-300: Which Microsoft Cert Should You Take? | HandsOnCert',
    description:
      'MS-102 (broad M365 admin, Expert) vs SC-300 (deep identity, Associate) — how they differ and why they pair. Hands-on labs for both.',
    type: 'article',
    url: 'https://www.handsoncert.com/compare/ms-102-vs-sc-300/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.handsoncert.com/compare/' },
    { '@type': 'ListItem', position: 3, name: 'MS-102 vs SC-300', item: 'https://www.handsoncert.com/compare/ms-102-vs-sc-300/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I take MS-102 or SC-300 first?',
      acceptedAnswer: { '@type': 'Answer', text: "It depends on your role. If you're a broad Microsoft 365 administrator responsible for the whole tenant — users, security, compliance — start with MS-102. If your role centers specifically on identity and access (Entra ID, Conditional Access, identity governance), start with SC-300. Many admins do MS-102 for breadth, then SC-300 to go deeper on the identity domain that MS-102 only covers at a high level." },
    },
    {
      '@type': 'Question',
      name: "What's the difference between MS-102 and SC-300?",
      acceptedAnswer: { '@type': 'Answer', text: 'MS-102 is an Expert-level Microsoft 365 Administrator cert covering the entire M365 stack — tenant management, Entra identity, Defender XDR security, and Purview compliance. SC-300 is an Associate-level cert that goes deep on one area: identity and access with Microsoft Entra ID, including authentication, workload identities, and identity governance. MS-102 is broad; SC-300 is deep on identity.' },
    },
    {
      '@type': 'Question',
      name: 'Do MS-102 and SC-300 overlap?',
      acceptedAnswer: { '@type': 'Answer', text: 'They overlap on identity — both cover Microsoft Entra ID, MFA, and Conditional Access. But MS-102 treats identity as one of four domains (alongside tenant, security, and compliance), while SC-300 dedicates the entire exam to identity, going much deeper into authentication methods, workload identities, and identity governance. The overlap is real but shallow — SC-300 goes far beyond what MS-102 covers on identity.' },
    },
    {
      '@type': 'Question',
      name: 'Are MS-102 and SC-300 a good combination?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes — it's one of the highest-value Microsoft pairings. MS-102 gives you end-to-end Microsoft 365 administration (Expert level), and SC-300 adds deep identity and access expertise (the modern security perimeter). Together they cover both the breadth of running a tenant and the depth of securing its identities — exactly the combination many organizations want in a senior M365 or identity-focused admin." },
    },
    {
      '@type': 'Question',
      name: 'Which cert pays more, MS-102 or SC-300?',
      acceptedAnswer: { '@type': 'Answer', text: "Both lead to strong salaries; identity-focused roles tied to SC-300 are among the most in-demand security specializations because identity is the modern security perimeter. MS-102's Expert-level breadth suits senior M365 administrator roles. Rather than choosing on salary alone, match the cert to your role: broad administration (MS-102) or identity specialization (SC-300). Holding both signals both breadth and depth." },
    },
  ],
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
  --ms102: #0078D4;
  --sc300: #5B5FC7;
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
.hero { padding: 56px 0 32px; text-align: center; }
h1 { font-size: 40px; font-weight: 800; line-height: 1.15; color: var(--text-1); margin-bottom: 20px; }
h1 .vs { color: var(--text-5); font-style: normal; }
.hero-desc { font-size: 18px; color: var(--text-3); max-width: 680px; margin: 0 auto; }
.cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 40px 0; }
.card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 28px; }
.card.ms102 { border-top: 4px solid var(--ms102); }
.card.sc300 { border-top: 4px solid var(--sc300); }
.card-code { font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.card.ms102 .card-code { color: var(--ms102); }
.card.sc300 .card-code { color: var(--sc300); }
.card h2 { font-size: 22px; color: var(--text-1); margin: 6px 0 4px; }
.card-tier { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; margin-bottom: 14px; }
.card.ms102 .card-tier { background: rgba(0,120,212,0.15); color: #4FC3F7; }
.card.sc300 .card-tier { background: rgba(91,95,199,0.18); color: #A5A8F0; }
.card p { color: var(--text-3); font-size: 14px; margin-bottom: 16px; }
.card ul { list-style: none; }
.card li { color: var(--text-3); font-size: 14px; padding: 6px 0 6px 24px; position: relative; }
.card li::before { content: "→"; position: absolute; left: 0; color: var(--accent); }
.card-cta { display: inline-block; margin-top: 18px; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; }
.card.ms102 .card-cta { background: var(--ms102); color: #fff; }
.card.sc300 .card-cta { background: var(--sc300); color: #fff; }
section { padding: 48px 0; }
section + section { border-top: 1px solid var(--bg-card); }
h2.sec { font-size: 28px; font-weight: 800; margin-bottom: 20px; color: var(--text-1); }
.table-wrap { overflow-x: auto; margin-top: 24px; }
table { width: 100%; border-collapse: collapse; font-size: 15px; }
th, td { text-align: left; padding: 14px 16px; border-bottom: 1px solid var(--border); }
th { color: var(--text-5); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
th.ms102 { color: var(--ms102); }
th.sc300 { color: var(--sc300); }
td:first-child { color: var(--text-5); font-weight: 600; }
td { color: var(--text-2); }
.verdict { background: var(--bg-card); border: 1px solid var(--accent); border-radius: 16px; padding: 40px; margin-top: 24px; }
.verdict h3 { color: var(--text-1); font-size: 20px; margin-bottom: 12px; }
.verdict p { color: var(--text-3); font-size: 16px; margin-bottom: 14px; }
.verdict .pick { color: var(--text-1); font-weight: 700; }
.faq-list { margin-top: 24px; }
.faq-item { border-bottom: 1px solid var(--border); padding: 22px 0; }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-q { font-weight: 700; font-size: 17px; color: var(--text-1); margin-bottom: 10px; }
.faq-a { color: var(--text-3); font-size: 15px; line-height: 1.7; }
footer { border-top: 1px solid var(--bg-card); padding: 32px 0; text-align: center; color: var(--text-5); font-size: 14px; }
footer a { color: var(--accent); text-decoration: none; margin: 0 12px; }
@media (max-width: 640px) {
  h1 { font-size: 28px; }
  .cards { grid-template-columns: 1fr; }
  .verdict { padding: 28px 20px; }
}`

export default function Ms102VsSc300Page() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <span>MS-102 vs SC-300</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <h1>MS-102 <span className="vs">vs</span> SC-300</h1>
          <p className="hero-desc">Both are Microsoft identity-adjacent certs — but they solve different problems. MS-102 is broad Microsoft 365 administration at Expert level; SC-300 goes deep on identity and access at Associate level. Here&apos;s how to choose, and why so many admins end up doing both.</p>
        </div>

        <div className="cards">
          <div className="card ms102">
            <div className="card-code">MS-102</div>
            <h2>Microsoft 365 Administrator</h2>
            <span className="card-tier">Expert · $79 lab path</span>
            <p>End-to-end administration of a Microsoft 365 tenant — the broad, senior admin cert.</p>
            <ul>
              <li>Tenant deployment and management</li>
              <li>Users, groups, and licensing</li>
              <li>Entra identity and access</li>
              <li>Defender XDR security (heaviest)</li>
              <li>Purview compliance</li>
            </ul>
            <a href="/certs/ms-102/" className="card-cta">MS-102 lab path →</a>
          </div>
          <div className="card sc300">
            <div className="card-code">SC-300</div>
            <h2>Identity and Access Administrator</h2>
            <span className="card-tier">Associate · $49 lab path</span>
            <p>Deep specialization in identity and access with Microsoft Entra ID — the modern security perimeter.</p>
            <ul>
              <li>User and group identities</li>
              <li>Authentication and access (largest domain)</li>
              <li>Workload identities</li>
              <li>Identity governance</li>
              <li>Conditional Access and PIM in depth</li>
            </ul>
            <a href="/certs/sc-300/" className="card-cta">SC-300 lab path →</a>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h2 className="sec">Side by side</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>&nbsp;</th><th className="ms102">MS-102</th><th className="sc300">SC-300</th></tr>
              </thead>
              <tbody>
                <tr><td>Credential level</td><td>Administrator Expert</td><td>Identity &amp; Access Associate</td></tr>
                <tr><td>Scope</td><td>Broad — whole M365 stack</td><td>Deep — identity only</td></tr>
                <tr><td>Focus areas</td><td>Tenant, identity, security, compliance</td><td>Entra ID, auth, workload identities, governance</td></tr>
                <tr><td>Heaviest domain</td><td>Defender XDR security (30-35%)</td><td>Authentication &amp; access (25-30%)</td></tr>
                <tr><td>Exam cost</td><td>$165</td><td>$165</td></tr>
                <tr><td>HandsOnCert lab path</td><td>$79 (Expert)</td><td>$49 (Associate)</td></tr>
                <tr><td>Lab environment</td><td>Free M365 Developer tenant</td><td>Free M365 Developer tenant</td></tr>
                <tr><td>Best for</td><td>Broad M365 administrators</td><td>Identity/access specialists</td></tr>
                <tr><td>Renewal</td><td>Annual, free assessment</td><td>Annual, free assessment</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="sec">The verdict</h2>
          <div className="verdict">
            <h3>They&apos;re complementary, not competitors</h3>
            <p>These certs answer different questions. <span className="pick">Choose MS-102 if you run — or want to run — an entire Microsoft 365 tenant:</span> you need breadth across tenant setup, identity, Defender XDR security operations, and Purview compliance. It&apos;s the Expert-level credential for a senior, generalist M365 administrator.</p>
            <p><span className="pick">Choose SC-300 if identity is your specialty:</span> your role centers on Entra ID, authentication, Conditional Access, workload identities, and identity governance. SC-300 goes far deeper on identity than MS-102&apos;s identity domain does — because for SC-300, identity is the whole exam.</p>
            <p>The overlap is only on the identity slice, and it&apos;s shallow — so the two reinforce each other rather than repeat. Many administrators take <span className="pick">MS-102 for breadth, then SC-300 to specialize</span>, or hold both to signal they can both run the tenant and secure its identities. Pair either with MD-102 (endpoints) and you cover the complete modern-workplace administration role.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="sec">Frequently asked questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">Should I take MS-102 or SC-300 first?</p>
              <p className="faq-a">It depends on your role. If you&apos;re a broad Microsoft 365 administrator responsible for the whole tenant — users, security, compliance — start with MS-102. If your role centers specifically on identity and access (Entra ID, Conditional Access, identity governance), start with SC-300. Many admins do MS-102 for breadth, then SC-300 to go deeper on the identity domain that MS-102 only covers at a high level.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What&apos;s the difference between MS-102 and SC-300?</p>
              <p className="faq-a">MS-102 is an Expert-level Microsoft 365 Administrator cert covering the entire M365 stack — tenant management, Entra identity, Defender XDR security, and Purview compliance. SC-300 is an Associate-level cert that goes deep on one area: identity and access with Microsoft Entra ID, including authentication, workload identities, and identity governance. MS-102 is broad; SC-300 is deep on identity.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do MS-102 and SC-300 overlap?</p>
              <p className="faq-a">They overlap on identity — both cover Microsoft Entra ID, MFA, and Conditional Access. But MS-102 treats identity as one of four domains (alongside tenant, security, and compliance), while SC-300 dedicates the entire exam to identity, going much deeper into authentication methods, workload identities, and identity governance. The overlap is real but shallow — SC-300 goes far beyond what MS-102 covers on identity.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Are MS-102 and SC-300 a good combination?</p>
              <p className="faq-a">Yes — it&apos;s one of the highest-value Microsoft pairings. MS-102 gives you end-to-end Microsoft 365 administration (Expert level), and SC-300 adds deep identity and access expertise (the modern security perimeter). Together they cover both the breadth of running a tenant and the depth of securing its identities — exactly the combination many organizations want in a senior M365 or identity-focused admin.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Which cert pays more, MS-102 or SC-300?</p>
              <p className="faq-a">Both lead to strong salaries; identity-focused roles tied to SC-300 are among the most in-demand security specializations because identity is the modern security perimeter. MS-102&apos;s Expert-level breadth suits senior M365 administrator roles. Rather than choosing on salary alone, match the cert to your role: broad administration (MS-102) or identity specialization (SC-300). Holding both signals both breadth and depth.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 HandsOnCert &nbsp;·&nbsp; Learn · Build · Prove &nbsp;·&nbsp;
            <a href="/certs/ms-102/">MS-102</a>
            <a href="/certs/sc-300/">SC-300</a>
            <a href="/certs/md-102/">MD-102</a>
            <a href="/microsoft-365/">Microsoft 365</a>
            <a href="/certs/">All Certs</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
