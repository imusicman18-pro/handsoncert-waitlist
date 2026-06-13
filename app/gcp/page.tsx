import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Cloud (GCP) Certification Path | HandsOnCert',
  description:
    'Google Cloud certification roadmap with hands-on labs. GCP-ACE, GCP-PCA, GCP-PDE, GCP-PCSE — real labs, GitHub portfolio auto-commit, one-time pricing from $49.',
  alternates: {
    canonical: 'https://www.handsoncert.com/gcp/',
  },
  openGraph: {
    title: 'Google Cloud (GCP) Certification Path | HandsOnCert',
    description:
      '4 GCP cert paths with hands-on labs and GitHub portfolio auto-commit. Associate Cloud Engineer through Professional Cloud Architect, Data Engineer, and Security Engineer.',
    type: 'website',
    url: 'https://www.handsoncert.com/gcp/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'Google Cloud', item: 'https://www.handsoncert.com/gcp/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What order should I take Google Cloud certifications in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Start with GCP-ACE (Associate Cloud Engineer) — it's the foundational certification covering deployment, monitoring, and management of GCP projects, with no prerequisites. From there, branch based on your goal: GCP-PCA (Professional Cloud Architect) for architecture roles, GCP-PDE (Professional Data Engineer) for data roles, or GCP-PCSE (Professional Cloud Security Engineer) for security roles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which Google Cloud certification is best for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GCP-ACE (Associate Cloud Engineer) is the best starting point for Google Cloud. Unlike AWS and Azure, Google Cloud doesn't have a separate 'fundamentals' tier — ACE is the entry-level certification and covers core services, deployment, and operations. HandsOnCert's GCP-ACE path is $49 with 5 hands-on projects.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is GCP-PCA harder than GCP-ACE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GCP-PCA (Professional Cloud Architect) is a professional-level certification that requires designing complete solutions — considering business requirements, security, scalability, and cost across multiple GCP services. GCP-ACE (Associate Cloud Engineer) focuses on deploying and managing individual resources. Most people take ACE first to build foundational skills before attempting PCA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take GCP-PDE or GCP-PCA first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your career direction. GCP-PDE (Professional Data Engineer) is specialized for data engineering roles — covering BigQuery, Dataflow, and Vertex AI. GCP-PCA (Professional Cloud Architect) is broader, covering general solution architecture. If you're targeting a data engineering role specifically, go straight to PDE after ACE. If you want a general architecture credential first, choose PCA.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does GCP-PCSE cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GCP-PCSE (Professional Cloud Security Engineer) covers designing and implementing secure infrastructure on Google Cloud — including IAM, VPC Service Controls, Binary Authorization, data protection, and security operations. It's the GCP equivalent of AWS's Security Specialty or Azure's SC-500.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do GCP certifications expire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Google Cloud certifications are valid for 2-3 years depending on the certification, after which they must be renewed by retaking the exam. This is shorter than some AWS and Azure certifications, so factor recertification into your long-term study plan.',
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

export default function GCPPage() {
  return (
    <div style={{ '--provider-color': '#4285F4' } as React.CSSProperties}>
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
          <span>Google Cloud</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ 4 Google Cloud cert paths live</div>
          <h1>Google Cloud Certification Path<br /><em>Hands-on labs. Real GitHub portfolio.</em></h1>
          <p className="hero-desc">
            A clear roadmap through Google Cloud certifications — from Associate Cloud Engineer to Professional Architect, Data Engineer, or Security Engineer. Every path is hands-on: real GCP resources, real projects, auto-committed to your own GitHub repo as you go.
          </p>
          <div className="hero-ctas">
            <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
            <a href="#path" className="btn-secondary">See the roadmap</a>
          </div>
          <p className="hero-note">4 cert paths · $49–$79 each · Project 1 always free</p>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-num">4</div><div className="stat-label">GCP cert paths</div></div>
          <div className="stat"><div className="stat-num">20</div><div className="stat-label">Total projects</div></div>
          <div className="stat"><div className="stat-num">$49</div><div className="stat-label">Starting price</div></div>
          <div className="stat"><div className="stat-num">3</div><div className="stat-label">Professional level</div></div>
        </div>
      </div>

      <section id="path">
        <div className="container">
          <h2>The Google Cloud certification roadmap</h2>
          <p className="sec-sub">Unlike AWS and Azure, Google Cloud doesn&apos;t have a separate fundamentals tier — start with Associate Cloud Engineer, then branch toward architecture, data, or security at the professional level.</p>

          <div className="path">
            <div className="path-step">
              <div className="path-num">1</div>
              <div className="path-text">
                <h3>GCP-ACE — Associate Cloud Engineer</h3>
                <p>The foundational Google Cloud certification. Deploy, monitor, and manage projects across compute, storage, networking, and IAM — no prerequisites.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">8h</span>
                  <span className="path-tag price">$49</span>
                </div>
              </div>
              <a href="/certs/gcp-ace/" className="path-cta">View path →</a>
            </div>
          </div>

          <p className="path-branch-label">Then branch based on your role — professional level</p>

          <div className="path">
            <div className="path-step">
              <div className="path-num">2a</div>
              <div className="path-text">
                <h3>GCP-PCA — Professional Cloud Architect</h3>
                <p>For those moving into architecture roles. Design complete solutions across business requirements, security, scalability, and cost — Google&apos;s flagship professional certification.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">12h</span>
                  <span className="path-tag price">$79</span>
                </div>
              </div>
              <a href="/certs/gcp-pca/" className="path-cta">View path →</a>
            </div>

            <div className="path-step">
              <div className="path-num">2b</div>
              <div className="path-text">
                <h3>GCP-PDE — Professional Data Engineer</h3>
                <p>For those focused on data. Design and build data processing systems using BigQuery, Dataflow, Pub/Sub, and Vertex AI — with machine learning model deployment.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">12h</span>
                  <span className="path-tag price">$79</span>
                </div>
              </div>
              <a href="/certs/gcp-pde/" className="path-cta">View path →</a>
            </div>

            <div className="path-step">
              <div className="path-num">2c</div>
              <div className="path-text">
                <h3>GCP-PCSE — Professional Cloud Security Engineer</h3>
                <p>For those focused on security. Design and implement secure infrastructure — IAM, VPC Service Controls, Binary Authorization, data protection, and security operations.</p>
                <div className="path-meta">
                  <span className="path-tag">5 projects</span>
                  <span className="path-tag">12h</span>
                  <span className="path-tag price">$79</span>
                </div>
              </div>
              <a href="/certs/gcp-pcse/" className="path-cta">View path →</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why HandsOnCert for Google Cloud</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🗂️</div>
              <h3>Real GitHub portfolio</h3>
              <p>Every GCP path auto-commits your evidence — IAM bindings, Terraform configs, BigQuery schemas, Dataflow pipelines — straight to your own GitHub repo.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">☁️</div>
              <h3>Real GCP console &amp; gcloud CLI</h3>
              <p>No simulators. Every project uses the actual Google Cloud console and gcloud CLI — the same tools tested on the exam and used on the job.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤖</div>
              <h3>Cert Buddy AI mentor</h3>
              <p>Each GCP path has a Cert Buddy trained on that exam&apos;s objectives — for debugging labs and understanding concepts, not just copy-paste.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>GCP cost alerts</h3>
              <p>Precise alerts for GCP billing — GKE clusters, Bigtable, Composer, Dataflow, and Vertex AI all have no-pause resources flagged with exact delete/cancel commands.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📄</div>
              <h3>Downloadable lab guides</h3>
              <p>Every GCP cert path includes a full PDF lab guide with step-by-step instructions and an exam quick-reference section.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💵</div>
              <h3>One-time pricing</h3>
              <p>$49–$79 per cert, once. Or get All-Access to all 21 cert paths — every GCP path included — for $199.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">What order should I take Google Cloud certifications in?</p>
              <p className="faq-a">Start with GCP-ACE (Associate Cloud Engineer) — it&apos;s the foundational certification covering deployment, monitoring, and management of GCP projects, with no prerequisites. From there, branch based on your goal: GCP-PCA (Professional Cloud Architect) for architecture roles, GCP-PDE (Professional Data Engineer) for data roles, or GCP-PCSE (Professional Cloud Security Engineer) for security roles.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Which Google Cloud certification is best for beginners?</p>
              <p className="faq-a">GCP-ACE (Associate Cloud Engineer) is the best starting point for Google Cloud. Unlike AWS and Azure, Google Cloud doesn&apos;t have a separate &quot;fundamentals&quot; tier — ACE is the entry-level certification and covers core services, deployment, and operations. HandsOnCert&apos;s GCP-ACE path is $49 with 5 hands-on projects.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is GCP-PCA harder than GCP-ACE?</p>
              <p className="faq-a">Yes. GCP-PCA (Professional Cloud Architect) is a professional-level certification that requires designing complete solutions — considering business requirements, security, scalability, and cost across multiple GCP services. GCP-ACE (Associate Cloud Engineer) focuses on deploying and managing individual resources. Most people take ACE first to build foundational skills before attempting PCA.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Should I take GCP-PDE or GCP-PCA first?</p>
              <p className="faq-a">It depends on your career direction. GCP-PDE (Professional Data Engineer) is specialized for data engineering roles — covering BigQuery, Dataflow, and Vertex AI. GCP-PCA (Professional Cloud Architect) is broader, covering general solution architecture. If you&apos;re targeting a data engineering role specifically, go straight to PDE after ACE. If you want a general architecture credential first, choose PCA.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What does GCP-PCSE cover?</p>
              <p className="faq-a">GCP-PCSE (Professional Cloud Security Engineer) covers designing and implementing secure infrastructure on Google Cloud — including IAM, VPC Service Controls, Binary Authorization, data protection, and security operations. It&apos;s the GCP equivalent of AWS&apos;s Security Specialty or Azure&apos;s SC-500.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do GCP certifications expire?</p>
              <p className="faq-a">Yes, Google Cloud certifications are valid for 2-3 years depending on the certification, after which they must be renewed by retaking the exam. This is shorter than some AWS and Azure certifications, so factor recertification into your long-term study plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Start your Google Cloud portfolio today</h2>
            <p>Project 1 of any GCP path is free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
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
            <a href="/cncf/">CNCF</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
