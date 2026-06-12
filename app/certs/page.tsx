import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Cert Paths | HandsOnCert',
  description:
    '21 hands-on cloud certification paths across Azure, AWS, GCP, HashiCorp, and CNCF. Real projects, GitHub portfolio auto-commit. Pay once per cert — no subscription.',
  alternates: {
    canonical: 'https://www.handsoncert.com/certs/',
  },
  openGraph: {
    title: 'All Cert Paths | HandsOnCert',
    description:
      '21 hands-on cloud certification paths. Real projects, GitHub portfolio auto-commit. Pay once per cert.',
    type: 'website',
    url: 'https://www.handsoncert.com/certs/',
  },
}

type Cert = {
  id: string
  name: string
  price: number
  projects: number
  hours: number
  slug: string
}

type Provider = {
  name: string
  color: string
  tagClass: string
  certs: Cert[]
}

const providers: Provider[] = [
  {
    name: 'Microsoft Azure',
    color: '#0078D4',
    tagClass: 'tag-azure',
    certs: [
      { id: 'AZ-104', name: 'Microsoft Azure Administrator',                       price: 49, projects: 5, hours: 6,  slug: 'az-104' },
      { id: 'AZ-900', name: 'Microsoft Azure Fundamentals',                        price: 29, projects: 3, hours: 3,  slug: 'az-900' },
      { id: 'AZ-305', name: 'Microsoft Azure Solutions Architect Expert',           price: 79, projects: 5, hours: 10, slug: 'az-305' },
      { id: 'AZ-400', name: 'Designing and Implementing Microsoft DevOps Solutions',price: 79, projects: 5, hours: 10, slug: 'az-400' },
      { id: 'SC-300', name: 'Microsoft Identity and Access Administrator',          price: 49, projects: 5, hours: 6,  slug: 'sc-300' },
      { id: 'SC-900', name: 'Microsoft Security, Compliance, and Identity Fundamentals', price: 29, projects: 3, hours: 3, slug: 'sc-900' },
      { id: 'DP-900', name: 'Microsoft Azure Data Fundamentals',                   price: 29, projects: 3, hours: 3,  slug: 'dp-900' },
    ],
  },
  {
    name: 'Amazon Web Services',
    color: '#F59E0B',
    tagClass: 'tag-aws',
    certs: [
      { id: 'SAA-C03', name: 'AWS Solutions Architect Associate',  price: 49, projects: 5, hours: 6,  slug: 'saa-c03' },
      { id: 'CLF-C02', name: 'AWS Cloud Practitioner',             price: 29, projects: 3, hours: 3,  slug: 'clf-c02' },
      { id: 'DVA-C02', name: 'AWS Certified Developer Associate',  price: 49, projects: 5, hours: 6,  slug: 'dva-c02' },
      { id: 'SOA-C03', name: 'AWS SysOps Administrator Associate', price: 49, projects: 5, hours: 6,  slug: 'soa-c03' },
      { id: 'SAP-C02', name: 'AWS Solutions Architect Professional',price: 79, projects: 5, hours: 10, slug: 'sap-c02' },
      { id: 'SCS-C03', name: 'AWS Security Specialty',             price: 79, projects: 5, hours: 10, slug: 'scs-c03' },
    ],
  },
  {
    name: 'Google Cloud',
    color: '#34A853',
    tagClass: 'tag-gcp',
    certs: [
      { id: 'GCP-ACE',  name: 'Google Cloud Associate Cloud Engineer',             price: 49, projects: 5, hours: 6,  slug: 'gcp-ace'  },
      { id: 'GCP-PCA',  name: 'Google Cloud Professional Cloud Architect',         price: 79, projects: 5, hours: 10, slug: 'gcp-pca'  },
      { id: 'GCP-PDE',  name: 'Google Cloud Professional Data Engineer',           price: 79, projects: 5, hours: 10, slug: 'gcp-pde'  },
      { id: 'GCP-PCSE', name: 'Google Cloud Professional Cloud Security Engineer', price: 79, projects: 5, hours: 10, slug: 'gcp-pcse' },
    ],
  },
  {
    name: 'HashiCorp',
    color: '#7B42BC',
    tagClass: 'tag-hashicorp',
    certs: [
      { id: 'TF-003', name: 'HashiCorp Certified Terraform Associate', price: 29, projects: 3, hours: 4, slug: 'tf-003' },
    ],
  },
  {
    name: 'CNCF / Kubernetes',
    color: '#326CE5',
    tagClass: 'tag-cncf',
    certs: [
      { id: 'CKA',  name: 'Certified Kubernetes Administrator',          price: 79, projects: 5, hours: 12, slug: 'cka'  },
      { id: 'CKAD', name: 'Certified Kubernetes Application Developer',  price: 79, projects: 5, hours: 10, slug: 'ckad' },
      { id: 'CKS',  name: 'Certified Kubernetes Security Specialist',    price: 79, projects: 5, hours: 10, slug: 'cks'  },
    ],
  },
]

const pageStyles = `
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:         #080D1A;
  --bg-card:    #0D1425;
  --bg-card2:   #111827;
  --border:     #1A2540;
  --border-2:   #1E3060;
  --blue:       #1A56DB;
  --blue-mid:   #2563EB;
  --blue-light: #4FC3F7;
  --green:      #10B981;
  --text-1:     #F1F5F9;
  --text-2:     #CBD5E1;
  --text-3:     #94A3B8;
  --text-4:     #64748B;
  --text-5:     #475569;
  --mono:       'DM Mono', monospace;
  --sans:       'Sora', sans-serif;
}
html { scroll-behavior: smooth; }
body { font-family: var(--sans); background: var(--bg); color: var(--text-2); -webkit-font-smoothing: antialiased; }

nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(8,13,26,0.92); backdrop-filter: blur(12px);
  border-bottom: 0.5px solid var(--border); padding: 0 1.5rem;
}
.nav-inner {
  max-width: 1080px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: center;
  height: 60px; gap: 12px;
}
.logo { font-size: 18px; font-weight: 800; color: var(--text-1); letter-spacing: -0.02em; text-decoration: none; }
.logo span { color: var(--blue-light); font-weight: 500; }
.nav-right { display: flex; align-items: center; gap: 10px; }
.nav-pill { font-size: 11px; color: var(--text-4); background: var(--bg-card); border: 0.5px solid var(--border); padding: 4px 12px; border-radius: 20px; white-space: nowrap; font-family: var(--mono); }
.nav-cta { background: var(--blue); color: #fff; padding: 9px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap; }

.breadcrumb { max-width: 1080px; margin: 0 auto; padding: 14px 1.5rem; font-size: 13px; color: var(--text-5); }
.breadcrumb a { color: var(--blue-light); text-decoration: none; }
.breadcrumb span { margin: 0 6px; }

.page-header {
  background: var(--bg-card); border-bottom: 0.5px solid var(--border);
  padding: 3.5rem 1.5rem 3rem;
}
.page-header-inner { max-width: 1080px; margin: 0 auto; }
.eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--blue-light); margin-bottom: 0.5rem; font-family: var(--mono); }
.page-header h1 { font-size: clamp(26px, 4vw, 36px); font-weight: 800; color: var(--text-1); letter-spacing: -0.025em; margin-bottom: 0.625rem; }
.page-header p { font-size: 15px; color: var(--text-4); max-width: 520px; line-height: 1.7; }

.main { max-width: 1080px; margin: 0 auto; padding: 3rem 1.5rem; }

.provider-section { margin-bottom: 3rem; }
.provider-label {
  display: flex; align-items: center; gap: 10px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--text-4); font-family: var(--mono); margin-bottom: 0.875rem;
}
.provider-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.cert-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }
.cert-card {
  background: var(--bg-card2); border: 0.5px solid rgba(16,185,129,0.3);
  border-radius: 12px; padding: 1.125rem;
  text-decoration: none; display: block;
  position: relative; overflow: hidden;
  transition: border-color 0.15s, transform 0.1s;
}
.cert-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--provider-color);
}
.cert-card:hover { border-color: var(--border-2); transform: translateY(-1px); }

.cert-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
.cert-provider-tag { font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 4px; font-family: var(--mono); letter-spacing: 0.04em; }
.tag-azure     { background: rgba(0,120,212,0.15); color: #60A5FA; border: 0.5px solid rgba(0,120,212,0.3); }
.tag-aws       { background: rgba(245,158,11,0.12); color: #FCD34D; border: 0.5px solid rgba(245,158,11,0.3); }
.tag-gcp       { background: rgba(52,168,83,0.12); color: #6EE7B7; border: 0.5px solid rgba(52,168,83,0.3); }
.tag-hashicorp { background: rgba(123,66,188,0.15); color: #C4B5FD; border: 0.5px solid rgba(123,66,188,0.3); }
.tag-cncf      { background: rgba(50,108,229,0.15); color: #93C5FD; border: 0.5px solid rgba(50,108,229,0.3); }
.cert-status-live {
  font-size: 10px; color: var(--green); background: rgba(16,185,129,0.1);
  border: 0.5px solid rgba(16,185,129,0.25); padding: 2px 8px;
  border-radius: 20px; font-family: var(--mono); font-weight: 600;
  display: flex; align-items: center; gap: 4px;
}
.cert-status-live::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--green); display: block; }

.cert-id { font-size: 13px; font-weight: 700; color: var(--text-1); font-family: var(--mono); margin-bottom: 3px; }
.cert-name { font-size: 12px; color: var(--text-3); line-height: 1.4; margin-bottom: 0.75rem; }
.cert-meta { display: flex; gap: 8px; align-items: center; font-size: 11px; color: var(--text-5); font-family: var(--mono); }
.cert-price { color: var(--blue-light); font-weight: 600; }
.cert-sep { color: var(--border); }

.all-access-banner {
  background: linear-gradient(135deg, rgba(26,86,219,0.08) 0%, var(--bg-card2) 100%);
  border: 1px solid var(--blue);
  border-radius: 14px; padding: 1.5rem 2rem;
  display: flex; justify-content: space-between; align-items: center;
  gap: 1.5rem; flex-wrap: wrap; margin-top: 1rem;
}
.aa-left strong { display: block; font-size: 15px; font-weight: 700; color: var(--text-1); margin-bottom: 4px; }
.aa-left span { font-size: 13px; color: var(--text-4); }
.aa-right { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
.aa-price { font-size: 28px; font-weight: 800; color: var(--blue-light); font-family: var(--mono); white-space: nowrap; }
.aa-price sub { font-size: 12px; font-weight: 400; color: var(--text-5); }
.btn-primary {
  background: var(--blue); color: #fff; padding: 11px 24px;
  border-radius: 8px; font-size: 14px; font-weight: 700;
  text-decoration: none; white-space: nowrap; display: inline-block;
}

footer { background: #050810; border-top: 0.5px solid var(--border); padding: 1.5rem; }
.footer-inner { max-width: 1080px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
.footer-brand { font-size: 14px; font-weight: 800; color: var(--text-1); letter-spacing: -0.01em; }
.footer-brand span { color: var(--blue-light); font-weight: 500; }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a { font-size: 12px; color: var(--text-5); text-decoration: none; }
.footer-copy { font-size: 11px; color: #1E2D4A; font-family: var(--mono); }

@media (max-width: 768px) {
  .cert-grid { grid-template-columns: 1fr 1fr; }
  .nav-pill { display: none; }
  .all-access-banner { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 480px) {
  .cert-grid { grid-template-columns: 1fr; }
}
`

export default function CertsPage() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">HandsOn<span>Cert</span></a>
          <div className="nav-right">
            <div className="nav-pill">21 cert paths live</div>
            <a href="https://app.handsoncert.com/signup" className="nav-cta">Start building →</a>
          </div>
        </div>
      </nav>

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <span>Cert paths</span>
      </nav>

      <div className="page-header">
        <div className="page-header-inner">
          <div className="eyebrow">Cert paths</div>
          <h1>All 21 cert paths — live now</h1>
          <p>Hands-on projects mapped to official exam objectives across Azure, AWS, GCP, HashiCorp, and CNCF. Project 1 of any cert is free — no card required.</p>
        </div>
      </div>

      <main className="main">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="provider-section"
            style={{ '--provider-color': provider.color } as React.CSSProperties}
          >
            <div className="provider-label">
              <span className="provider-dot" style={{ background: provider.color }} />
              {provider.name}
            </div>
            <div className="cert-grid">
              {provider.certs.map((cert) => (
                <a key={cert.id} href={`/certs/${cert.slug}/`} className="cert-card">
                  <div className="cert-top">
                    <span className={`cert-provider-tag ${provider.tagClass}`}>{provider.name.split(' ')[0] === 'Microsoft' ? 'Azure' : provider.name.split(' ')[0] === 'Amazon' ? 'AWS' : provider.name.split(' ')[0] === 'Google' ? 'GCP' : provider.name.split(' ')[0]}</span>
                    <span className="cert-status-live">Live</span>
                  </div>
                  <div className="cert-id">{cert.id}</div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-meta">
                    <span className="cert-price">${cert.price}</span>
                    <span className="cert-sep">·</span>
                    <span>{cert.projects} projects</span>
                    <span className="cert-sep">·</span>
                    <span>{cert.hours}h</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="all-access-banner">
          <div className="aa-left">
            <strong>All-Access Pass — all 21 cert paths, forever</strong>
            <span>Every cert that ships, past and future. One payment. Lifetime access.</span>
          </div>
          <div className="aa-right">
            <div className="aa-price">$199<sub> one-time</sub></div>
            <a href="https://app.handsoncert.com/signup" className="btn-primary">Get All-Access →</a>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">HandsOn<span>Cert</span></div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/certs/">Cert paths</a>
            <a href="https://app.handsoncert.com">App</a>
          </div>
          <div className="footer-copy">handsoncert.com · Learn · Build · Prove</div>
        </div>
      </footer>
    </div>
  )
}
