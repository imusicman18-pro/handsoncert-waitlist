import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CKA vs CKAD: Which Kubernetes Certification Should You Take? | HandsOnCert',
  description:
    'CKA vs CKAD compared — exam domains, difficulty, career fit, and pricing. Hands-on labs for both with GitHub portfolio auto-commit. CKAD $49, CKA $79.',
  alternates: {
    canonical: 'https://www.handsoncert.com/compare/cka-vs-ckad/',
  },
  openGraph: {
    title: 'CKA vs CKAD: Which Kubernetes Certification Should You Take? | HandsOnCert',
    description:
      'CKA vs CKAD compared — exam domains, difficulty, career fit, and pricing. Hands-on labs for both with GitHub portfolio auto-commit.',
    type: 'website',
    url: 'https://www.handsoncert.com/compare/cka-vs-ckad/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.handsoncert.com/compare/' },
    { '@type': 'ListItem', position: 3, name: 'CKA vs CKAD', item: 'https://www.handsoncert.com/compare/cka-vs-ckad/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I take CKA or CKAD first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your role, not a fixed order. CKA (Certified Kubernetes Administrator) focuses on cluster operations — installation, configuration, networking, storage, and troubleshooting. CKAD (Certified Kubernetes Application Developer) focuses on building and deploying applications on Kubernetes. Operations and platform engineers typically start with CKA, while application developers often start with CKAD. Neither requires the other.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is CKA harder than CKAD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "CKA is generally considered slightly more difficult than CKAD because it covers a broader scope — full cluster installation, multi-component troubleshooting, and networking concepts that go beyond a single application's perspective. CKAD's scope is narrower and more focused on the application layer, which some find more approachable. Both are 2-hour performance-based exams.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take both CKA and CKAD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, and many people do — they cover complementary skill sets (operations vs application development) and together give a fuller picture of working with Kubernetes. There's no rule against holding both, and doing so is common for engineers who move between platform and application work.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do CKA and CKAD have the same prerequisites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither has formal prerequisites. However, CKS (Certified Kubernetes Security Specialist) requires an active CKA specifically — CKAD does not satisfy that requirement. If you plan to pursue CKS eventually, factor that into your choice between CKA and CKAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which certification is better for a DevOps role?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CKA tends to align more closely with DevOps and platform engineering roles since it covers cluster setup, networking, and troubleshooting — the operational side of running Kubernetes. CKAD aligns more with development roles focused on building and deploying applications. Many DevOps job postings list CKA specifically, though CKAD is also valued.',
      },
    },
    {
      '@type': 'Question',
      name: "How much do CKA and CKAD cost compared to HandsOnCert's labs?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The official CKA and CKAD exams each cost $445 through the Linux Foundation (with one free retake included). HandsOnCert's hands-on lab paths are separate from the exam fee — CKA is $79 for 5 projects (12 hours), and CKAD is $49 for 5 projects (10 hours), each with Project 1 free.",
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
.compare-table .col-cka { color: var(--accent); font-weight: 700; }
.compare-table .col-ckad { color: var(--emerald); font-weight: 700; }
.vs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px; }
.vs-card { padding: 28px; border-radius: 12px; background: var(--bg-card); border: 1px solid var(--border); }
.vs-card.cka { border-left: 4px solid var(--accent); }
.vs-card.ckad { border-left: 4px solid var(--emerald); }
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

export default function CKAvsCKADPage() {
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
        {/* Breadcrumb: uses /cncf/ as parent since /compare/ doesn't exist yet */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/cncf/">CNCF</a>
          <span>›</span>
          <span>CKA vs CKAD</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ Both paths live on HandsOnCert</div>
          <h1>CKA vs CKAD<br /><em>Which Kubernetes certification is right for you?</em></h1>
          <p className="hero-desc">
            CKA (Certified Kubernetes Administrator) and CKAD (Certified Kubernetes Application Developer) are CNCF&apos;s two entry points into Kubernetes certification — and neither requires the other. The right choice depends on whether your work centers on running clusters or building applications that run on them.
          </p>
          <div className="hero-ctas">
            <a href="#verdict" className="btn-primary">Jump to the verdict →</a>
            <a href="#compare" className="btn-secondary">See the comparison table</a>
          </div>
        </div>
      </div>

      <section id="compare">
        <div className="container">
          <h2>CKA vs CKAD at a glance</h2>
          <p className="sec-sub">Both are 2-hour, performance-based exams in live Kubernetes clusters — no multiple choice. The difference is what you&apos;re tested on.</p>

          <table className="compare-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th className="col-cka">CKA</th>
                <th className="col-ckad">CKAD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-label">Full name</td>
                <td>Certified Kubernetes Administrator</td>
                <td>Certified Kubernetes Application Developer</td>
              </tr>
              <tr>
                <td className="row-label">Focus</td>
                <td>Cluster operations — install, configure, network, troubleshoot</td>
                <td>Application deployment — build, configure, expose, observe</td>
              </tr>
              <tr>
                <td className="row-label">Best for</td>
                <td>Platform engineers, SREs, cluster admins</td>
                <td>Application developers, backend engineers</td>
              </tr>
              <tr>
                <td className="row-label">Exam format</td>
                <td>2 hours, performance-based, live clusters</td>
                <td>2 hours, performance-based, live clusters</td>
              </tr>
              <tr>
                <td className="row-label">Official exam cost</td>
                <td>$445 (1 free retake)</td>
                <td>$445 (1 free retake)</td>
              </tr>
              <tr>
                <td className="row-label">Prerequisite for</td>
                <td>CKS (Certified Kubernetes Security Specialist)</td>
                <td>None of the other CNCF Kubernetes certs</td>
              </tr>
              <tr>
                <td className="row-label">Validity</td>
                <td>2 years</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td className="row-label">HandsOnCert price</td>
                <td className="col-cka">$79 (5 projects, 12h)</td>
                <td className="col-ckad">$49 (5 projects, 10h)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>What each path covers</h2>
          <p className="sec-sub">Both HandsOnCert paths use real kind clusters and kubectl — the same tools and format as the actual exams.</p>

          <div className="vs-grid">
            <div className="vs-card cka">
              <h3>CKA</h3>
              <div className="vs-sub">Certified Kubernetes Administrator</div>
              <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>Covers the full lifecycle of running a cluster — from installation to keeping it healthy under failure.</p>
              <ul>
                <li>Cluster architecture, installation &amp; configuration (kubeadm)</li>
                <li>Workloads &amp; scheduling (Deployments, DaemonSets, affinity)</li>
                <li>Services &amp; networking (Services, Ingress, NetworkPolicies)</li>
                <li>Storage (PersistentVolumes, StorageClasses)</li>
                <li>Troubleshooting (broken pods, NotReady nodes, debugging)</li>
              </ul>
              <div className="vs-price">HandsOnCert price: <strong>$79</strong> · 5 projects · 12h · Project 1 free</div>
              <a href="/certs/cka/" className="vs-cta">View CKA path →</a>
            </div>

            <div className="vs-card ckad">
              <h3>CKAD</h3>
              <div className="vs-sub">Certified Kubernetes Application Developer</div>
              <p style={{ color: 'var(--text-3)', fontSize: '14px' }}>Covers building and shipping applications on an existing cluster — the developer&apos;s view of Kubernetes.</p>
              <ul>
                <li>Application design &amp; build (multi-container pods, Dockerfiles)</li>
                <li>Application deployment (rolling updates, rollbacks)</li>
                <li>Observability &amp; maintenance (probes, autoscaling, debugging)</li>
                <li>Configuration &amp; security (ConfigMaps, Secrets, RBAC)</li>
                <li>Services &amp; networking (Services, Ingress, NetworkPolicies)</li>
              </ul>
              <div className="vs-price">HandsOnCert price: <strong>$49</strong> · 5 projects · 10h · Project 1 free</div>
              <a href="/certs/ckad/" className="vs-cta">View CKAD path →</a>
            </div>
          </div>

          <div className="verdict" id="verdict">
            <h3>The verdict: it&apos;s about your role, not difficulty</h3>
            <p>If your day-to-day involves standing up clusters, configuring networking, managing storage, and troubleshooting nodes — <strong style={{ color: 'var(--text-1)' }}>CKA</strong> matches your work directly and is the more commonly requested certification in platform and SRE job postings.</p>
            <p>If your day-to-day is building, deploying, and debugging applications that run on Kubernetes someone else manages — <strong style={{ color: 'var(--text-1)' }}>CKAD</strong> matches your work directly and has a slightly gentler learning curve due to its narrower scope.</p>
            <p>If you&apos;re not sure yet, CKAD is the lower-cost, lower-time entry point ($49, 10h vs $79, 12h) and still builds real Kubernetes fluency. But if you eventually want <strong style={{ color: 'var(--text-1)' }}>CKS</strong> (Certified Kubernetes Security Specialist), note that it requires an active CKA specifically — CKAD does not count toward that prerequisite.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">Should I take CKA or CKAD first?</p>
              <p className="faq-a">It depends on your role, not a fixed order. CKA (Certified Kubernetes Administrator) focuses on cluster operations — installation, configuration, networking, storage, and troubleshooting. CKAD (Certified Kubernetes Application Developer) focuses on building and deploying applications on Kubernetes. Operations and platform engineers typically start with CKA, while application developers often start with CKAD. Neither requires the other.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is CKA harder than CKAD?</p>
              <p className="faq-a">CKA is generally considered slightly more difficult than CKAD because it covers a broader scope — full cluster installation, multi-component troubleshooting, and networking concepts that go beyond a single application&apos;s perspective. CKAD&apos;s scope is narrower and more focused on the application layer, which some find more approachable. Both are 2-hour performance-based exams.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Can I take both CKA and CKAD?</p>
              <p className="faq-a">Yes, and many people do — they cover complementary skill sets (operations vs application development) and together give a fuller picture of working with Kubernetes. There&apos;s no rule against holding both, and doing so is common for engineers who move between platform and application work.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do CKA and CKAD have the same prerequisites?</p>
              <p className="faq-a">Neither has formal prerequisites. However, CKS (Certified Kubernetes Security Specialist) requires an active CKA specifically — CKAD does not satisfy that requirement. If you plan to pursue CKS eventually, factor that into your choice between CKA and CKAD.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Which certification is better for a DevOps role?</p>
              <p className="faq-a">CKA tends to align more closely with DevOps and platform engineering roles since it covers cluster setup, networking, and troubleshooting — the operational side of running Kubernetes. CKAD aligns more with development roles focused on building and deploying applications. Many DevOps job postings list CKA specifically, though CKAD is also valued.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How much do CKA and CKAD cost compared to HandsOnCert&apos;s labs?</p>
              <p className="faq-a">The official CKA and CKAD exams each cost $445 through the Linux Foundation (with one free retake included). HandsOnCert&apos;s hands-on lab paths are separate from the exam fee — CKA is $79 for 5 projects (12 hours), and CKAD is $49 for 5 projects (10 hours), each with Project 1 free.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Start building your Kubernetes portfolio</h2>
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
            <a href="/cncf/">CNCF</a>
            <a href="/certs/cka/">CKA</a>
            <a href="/certs/ckad/">CKAD</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
