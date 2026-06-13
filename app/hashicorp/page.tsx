import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HashiCorp Terraform Certification | HandsOnCert',
  description:
    'HashiCorp Terraform Associate (TF-003) hands-on labs. Real Terraform projects, auto-committed to your GitHub portfolio. $29 one-time, Project 1 free.',
  alternates: {
    canonical: 'https://www.handsoncert.com/hashicorp/',
  },
  openGraph: {
    title: 'HashiCorp Terraform Certification | HandsOnCert',
    description:
      'TF-003 Terraform Associate hands-on labs with GitHub portfolio auto-commit. Real Terraform configs, real cloud resources. $29 one-time.',
    type: 'website',
    url: 'https://www.handsoncert.com/hashicorp/',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.handsoncert.com/' },
    { '@type': 'ListItem', position: 2, name: 'HashiCorp', item: 'https://www.handsoncert.com/hashicorp/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Terraform Associate (TF-003) certification worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, especially if you work with infrastructure as code on any cloud provider. Terraform is cloud-agnostic, so the certification is valuable whether you work primarily in AWS, Azure, or GCP. It's also a common requirement or differentiator for DevOps and platform engineering roles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need cloud certifications before taking Terraform Associate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, TF-003 has no prerequisites and doesn't require a specific cloud certification first. However, basic familiarity with at least one cloud provider (AWS, Azure, or GCP) helps since Terraform labs provision real cloud resources. HandsOnCert's TF-003 path works with any of the three major clouds.",
      },
    },
    {
      '@type': 'Question',
      name: 'What version of Terraform does TF-003 cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TF-003 is HashiCorp's current Terraform Associate exam version, covering Terraform CLI workflows, state management, modules, providers, and HCL syntax. HandsOnCert's labs use current Terraform versions and are updated as HashiCorp updates exam objectives.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the GitHub portfolio work for Terraform labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When you complete a Terraform lab step, HandsOnCert commits your actual .tf configuration files, state outputs, and plan/apply screenshots to your own GitHub repository. This gives you a real, working Terraform codebase in your portfolio — not just screenshots of someone else's code.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Terraform Associate good for a DevOps career path?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Infrastructure as code with Terraform is a core DevOps skill. TF-003 pairs especially well with AZ-400 (Azure DevOps Engineer), AWS DevOps-focused roles, or Kubernetes certifications like CKA — Terraform is commonly used to provision the infrastructure that Kubernetes runs on.',
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

.steps { display: grid; gap: 16px; margin-top: 32px; }
.step { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: var(--bg-card); border-radius: 12px; border-left: 4px solid var(--provider-color); }
.step-num { background: var(--provider-color); color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; flex-shrink: 0; }
.step-text p { color: var(--text-3); font-size: 15px; margin-top: 4px; }

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
}
`

export default function HashiCorpPage() {
  return (
    <div style={{ '--provider-color': '#5C4EE5' } as React.CSSProperties}>
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
          <span>HashiCorp</span>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="badge">✓ Live now — Terraform Associate (TF-003)</div>
          <h1>HashiCorp Terraform Certification<br /><em>Hands-on labs. Real GitHub portfolio.</em></h1>
          <p className="hero-desc">
            Infrastructure as code is cloud-agnostic — and so is this certification. Three hands-on Terraform projects mapped to TF-003 exam objectives, with real .tf configurations auto-committed to your own GitHub repo. The portfolio employers actually click into.
          </p>
          <div className="hero-ctas">
            <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
            <a href="#projects" className="btn-secondary">See the 3 projects</a>
          </div>
          <p className="hero-note">$29 one-time · Project 1 free · No subscription</p>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-num">3</div><div className="stat-label">Hands-on projects</div></div>
          <div className="stat"><div className="stat-num">4h</div><div className="stat-label">Estimated time</div></div>
          <div className="stat"><div className="stat-num">$70.50</div><div className="stat-label">TF-003 exam cost</div></div>
          <div className="stat"><div className="stat-num">$29</div><div className="stat-label">HandsOnCert price</div></div>
        </div>
      </div>

      <section id="projects">
        <div className="container">
          <h2>What you&apos;ll build</h2>
          <p className="sec-sub">Three projects covering the core TF-003 domains — CLI workflows, state management, and modules — using real Terraform configurations against a real cloud provider.</p>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <h3>Terraform CLI Workflow — Free</h3>
                <p>Write your first .tf configuration, run init, plan, apply, and destroy. Provision a real cloud resource (storage bucket or VM) and commit your configuration files to GitHub.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <h3>State Management</h3>
                <p>Configure remote state storage, understand state locking, and practice importing existing resources into Terraform state. Commit your backend configuration and state outputs.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <h3>Modules and Variables</h3>
                <p>Build a reusable Terraform module with input variables and outputs, then call it from a root configuration. Commit your module structure and variable definitions to GitHub.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why HandsOnCert for Terraform</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🗂️</div>
              <h3>Real Terraform code in your portfolio</h3>
              <p>Your GitHub repo gets actual .tf files, module structures, and plan/apply output — not screenshots of someone else&apos;s code.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">☁️</div>
              <h3>Cloud-agnostic, real resources</h3>
              <p>Labs provision real resources on AWS, Azure, or GCP — the same skills regardless of which cloud you use day to day.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤖</div>
              <h3>Cert Buddy AI mentor</h3>
              <p>Stuck on state locking or module syntax? Cert Buddy is trained on TF-003 objectives and helps you debug real Terraform errors.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💰</div>
              <h3>Cost alerts built in</h3>
              <p>Every project ends with terraform destroy guidance, so provisioned cloud resources don&apos;t keep running after you&apos;re done.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📄</div>
              <h3>Downloadable lab guide</h3>
              <p>Get the full TF-003 lab guide as a PDF — step-by-step instructions and an exam quick-reference section.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💵</div>
              <h3>One-time price</h3>
              <p>$29 once. No subscription. Or get All-Access to all 21 cert paths for $199.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">Is the Terraform Associate (TF-003) certification worth it?</p>
              <p className="faq-a">Yes, especially if you work with infrastructure as code on any cloud provider. Terraform is cloud-agnostic, so the certification is valuable whether you work primarily in AWS, Azure, or GCP. It&apos;s also a common requirement or differentiator for DevOps and platform engineering roles.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Do I need cloud certifications before taking Terraform Associate?</p>
              <p className="faq-a">No, TF-003 has no prerequisites and doesn&apos;t require a specific cloud certification first. However, basic familiarity with at least one cloud provider (AWS, Azure, or GCP) helps since Terraform labs provision real cloud resources. HandsOnCert&apos;s TF-003 path works with any of the three major clouds.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">What version of Terraform does TF-003 cover?</p>
              <p className="faq-a">TF-003 is HashiCorp&apos;s current Terraform Associate exam version, covering Terraform CLI workflows, state management, modules, providers, and HCL syntax. HandsOnCert&apos;s labs use current Terraform versions and are updated as HashiCorp updates exam objectives.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How does the GitHub portfolio work for Terraform labs?</p>
              <p className="faq-a">When you complete a Terraform lab step, HandsOnCert commits your actual .tf configuration files, state outputs, and plan/apply screenshots to your own GitHub repository. This gives you a real, working Terraform codebase in your portfolio — not just screenshots of someone else&apos;s code.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is Terraform Associate good for a DevOps career path?</p>
              <p className="faq-a">Yes. Infrastructure as code with Terraform is a core DevOps skill. TF-003 pairs especially well with AZ-400 (Azure DevOps Engineer), AWS DevOps-focused roles, or Kubernetes certifications like CKA — Terraform is commonly used to provision the infrastructure that Kubernetes runs on.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-section">
            <h2>Build your Terraform portfolio today</h2>
            <p>Project 1 is free — no credit card required. See exactly how the GitHub auto-commit works before you pay anything.</p>
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
            <a href="/cncf/">CNCF</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
