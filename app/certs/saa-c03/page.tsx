import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SAA-C03 Hands-On Labs | HandsOnCert",
  description: "SAA-C03 AWS Solutions Architect Associate hands-on labs. 5 real AWS architecture projects, auto-committed to your GitHub portfolio. $49 one-time, Project 1 free.",
  alternates: {
    canonical: "https://www.handsoncert.com/certs/saa-c03/",
  },
  openGraph: {
    title: "SAA-C03 Hands-On Labs | HandsOnCert",
    description: "SAA-C03 AWS Solutions Architect Associate hands-on labs. 5 real AWS architecture projects, auto-committed to your GitHub portfolio. $49 one-time, Project 1 free.",
    type: 'website',
    url: "https://www.handsoncert.com/certs/saa-c03/",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.handsoncert.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AWS",
      "item": "https://www.handsoncert.com/aws/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SAA-C03",
      "item": "https://www.handsoncert.com/certs/saa-c03/"
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to complete the SAA-C03 hands-on lab path on HandsOnCert",
  "description": "5 hands-on projects mapped to SAA-C03 exam objectives, with evidence auto-committed to your GitHub portfolio.",
  "totalTime": "PT8H",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Design Secure Architectures",
      "text": "Create IAM roles and policies following least privilege, configure a VPC with public and private subnets, and set up security groups and NACLs for a multi-tier application. Commit your IAM policies and VPC architecture diagram."
    },
    {
      "@type": "HowToStep",
      "name": "Design Resilient Architectures",
      "text": "Configure an Auto Scaling group across multiple Availability Zones with an Application Load Balancer, set up RDS Multi-AZ for database failover, and test failover behavior. Commit your Auto Scaling configuration and failover test results."
    },
    {
      "@type": "HowToStep",
      "name": "Design High-Performing Architectures",
      "text": "Configure CloudFront with an S3 origin for content delivery, set up ElastiCache for database query caching, and choose appropriate EC2 instance types for a workload. Commit your CloudFront configuration and caching evidence."
    },
    {
      "@type": "HowToStep",
      "name": "Design Cost-Optimized Architectures",
      "text": "Use AWS Cost Explorer to analyze spending, configure S3 lifecycle policies to transition data to cheaper storage classes, and compare Reserved Instance vs On-Demand pricing for a workload. Commit your cost analysis and lifecycle policy configuration."
    },
    {
      "@type": "HowToStep",
      "name": "Putting It Together — Well-Architected Review",
      "text": "Conduct a Well-Architected Framework review of your project architecture across all 5 pillars (operational excellence, security, reliability, performance, cost), documenting findings and improvement recommendations. Commit your Well-Architected review document."
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are the SAA-C03 hands-on labs free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project 1 (Security and IAM) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $49."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an AWS account for SAA-C03 labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you need an AWS Free Tier account. Most SAA-C03 resources fit within free tier limits — each project includes a cost alert showing exactly which resources to stop or delete after use."
      }
    },
    {
      "@type": "Question",
      "name": "How does the GitHub portfolio auto-commit work for SAA-C03?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you mark a lab step complete, HandsOnCert commits your VPC architecture diagrams, IAM policies, and Well-Architected review documents directly to your own GitHub repository via OAuth — demonstrating real architecture decision-making."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the SAA-C03 path take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 5 projects take approximately 8 hours total, covering secure architectures, resilient architectures, high-performing architectures, cost-optimized architectures, and a Well-Architected capstone review — the same domains tested on the SAA-C03 exam."
      }
    },
    {
      "@type": "Question",
      "name": "Should I take CLF-C02 before SAA-C03?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CLF-C02 is recommended if you're new to AWS, since it builds foundational vocabulary and concepts. If you already have hands-on cloud experience, you can go directly to SAA-C03 — the most widely recognized AWS associate-level certification."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between SAA-C03 and SAP-C02?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAA-C03 (Associate) focuses on designing well-architected solutions for standard workloads and single accounts. SAP-C02 (Professional) focuses on complex, multi-account, multi-region architectures, large-scale migrations, and organizational governance. SAA-C03 is the foundation most people build on before SAP-C02."
      }
    }
  ]
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "SAA-C03 Hands-On Lab Path",
  "description": "5 hands-on projects mapped to SAA-C03 exam objectives, with GitHub portfolio auto-commit.",
  "provider": {
    "@type": "Organization",
    "name": "HandsOnCert",
    "sameAs": "https://www.handsoncert.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD"
  }
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

export default function SaaC03Page() {
  return (
    <div style={{ '--provider-color': "#F59E0B" } as React.CSSProperties}>
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
    <a href="/aws/">AWS</a>
    <span>›</span>
    <span>SAA-C03</span>
  </nav>
</div>

<div className="container">
  <div className="hero">
    <div className="badge">✓ Live now — <span className="cert-provider-tag" style={{ marginLeft: '4px' }}>AWS</span> 5 hands-on projects</div>
    <h1>SAA-C03 Hands-On Labs<br /><em>Real AWS Architecture. Real GitHub portfolio.</em></h1>
    <p className="hero-desc">Five real Solutions Architect Associate projects mapped directly to the SAA-C03 exam objectives. Mark a step complete and HandsOnCert commits the evidence — VPC diagrams, IAM policies, architecture decisions — straight to your own GitHub repo. The portfolio employers actually click into.</p>
    <div className="hero-ctas">
      <a href="https://app.handsoncert.com/signup" className="btn-primary">Start Free →</a>
      <a href="#projects" className="btn-secondary">See the 5 projects</a>
    </div>
    <p className="hero-note">$49 one-time · Project 1 free · No subscription</p>
  </div>

  <div className="stats">
    <div className="stat"><div className="stat-num">5</div><div className="stat-label">Hands-on projects</div></div>
    <div className="stat"><div className="stat-num">8h</div><div className="stat-label">Estimated time</div></div>
    <div className="stat"><div className="stat-num">$150</div><div className="stat-label">SAA-C03 exam cost</div></div>
    <div className="stat"><div className="stat-num">$49</div><div className="stat-label">HandsOnCert price</div></div>
  </div>
</div>

<section id="projects">
  <div className="container">
    <h2>What you'll build</h2>
    <p className="sec-sub">Every project maps to an official SAA-C03 exam domain. Each one ends with evidence committed to your GitHub repo automatically.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">1</div>
        <div className="step-text">
          <h3>Design Secure Architectures — Free</h3>
          <p>Create IAM roles and policies following least privilege, configure a VPC with public and private subnets, and set up security groups and NACLs for a multi-tier application. Commit your IAM policies and VPC architecture diagram.</p>
          <span className="step-domain">Design Secure Architectures — 30% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">2</div>
        <div className="step-text">
          <h3>Design Resilient Architectures</h3>
          <p>Configure an Auto Scaling group across multiple Availability Zones with an Application Load Balancer, set up RDS Multi-AZ for database failover, and test failover behavior. Commit your Auto Scaling configuration and failover test results.</p>
          <span className="step-domain">Design Resilient Architectures — 26% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">3</div>
        <div className="step-text">
          <h3>Design High-Performing Architectures</h3>
          <p>Configure CloudFront with an S3 origin for content delivery, set up ElastiCache for database query caching, and choose appropriate EC2 instance types for a workload. Commit your CloudFront configuration and caching evidence.</p>
          <span className="step-domain">Design High-Performing Architectures — 24% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">4</div>
        <div className="step-text">
          <h3>Design Cost-Optimized Architectures</h3>
          <p>Use AWS Cost Explorer to analyze spending, configure S3 lifecycle policies to transition data to cheaper storage classes, and compare Reserved Instance vs On-Demand pricing for a workload. Commit your cost analysis and lifecycle policy configuration.</p>
          <span className="step-domain">Design Cost-Optimized Architectures — 20% of exam</span>
        </div>
      </div>
      <div className="step">
        <div className="step-num">5</div>
        <div className="step-text">
          <h3>Putting It Together — Well-Architected Review</h3>
          <p>Conduct a Well-Architected Framework review of your project architecture across all 5 pillars (operational excellence, security, reliability, performance, cost), documenting findings and improvement recommendations. Commit your Well-Architected review document.</p>
          <span className="step-domain">Spans all domains — capstone project</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2>Why HandsOnCert</h2>
    <div className="benefits-grid">
      <div className="benefit">
        <div className="benefit-icon">🗂️</div>
        <h3>Real GitHub portfolio</h3>
        <p>Every completed step auto-commits evidence to your own repo. No fake portfolio templates — real configs, real screenshots, real history.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">☁️</div>
        <h3>Real AWS resources</h3>
        <p>No simulators. You work in the actual AWS console and tools, the same ones you'll use on the job and in the SAA-C03 exam.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">🤖</div>
        <h3>Cert Buddy AI mentor</h3>
        <p>Stuck on a step or an exam concept? Cert Buddy is trained on SAA-C03 objectives and helps you debug and understand — not just copy-paste.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💰</div>
        <h3>Cost alerts built in</h3>
        <p>Every chargeable resource has a clear alert telling you exactly when to stop, deallocate, or delete — so a lab break doesn't become a surprise bill.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">📄</div>
        <h3>Downloadable lab guide</h3>
        <p>Get the full SAA-C03 lab guide as a PDF — step-by-step instructions, screenshots to capture, and an exam quick-reference section.</p>
      </div>
      <div className="benefit">
        <div className="benefit-icon">💵</div>
        <h3>One-time price</h3>
        <p>$49 once. No subscription, no recurring charges. Or get All-Access to all 21 cert paths for $199.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <h2 id="faq">Frequently Asked Questions</h2>
    <div className="faq-list">
      <div className="faq-item">
        <p className="faq-q">Are the SAA-C03 hands-on labs free?</p>
        <p className="faq-a">Project 1 (Security and IAM) is completely free, including unlimited access to Cert Buddy for that project and the manual GitHub commit workflow. The remaining 4 projects unlock for a one-time payment of $49.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Do I need an AWS account for SAA-C03 labs?</p>
        <p className="faq-a">Yes, you need an AWS Free Tier account. Most SAA-C03 resources fit within free tier limits — each project includes a cost alert showing exactly which resources to stop or delete after use.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How does the GitHub portfolio auto-commit work for SAA-C03?</p>
        <p className="faq-a">When you mark a lab step complete, HandsOnCert commits your VPC architecture diagrams, IAM policies, and Well-Architected review documents directly to your own GitHub repository via OAuth — demonstrating real architecture decision-making.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">How long does the SAA-C03 path take to complete?</p>
        <p className="faq-a">The 5 projects take approximately 8 hours total, covering secure architectures, resilient architectures, high-performing architectures, cost-optimized architectures, and a Well-Architected capstone review — the same domains tested on the SAA-C03 exam.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">Should I take CLF-C02 before SAA-C03?</p>
        <p className="faq-a">CLF-C02 is recommended if you're new to AWS, since it builds foundational vocabulary and concepts. If you already have hands-on cloud experience, you can go directly to SAA-C03 — the most widely recognized AWS associate-level certification.</p>
      </div>
      <div className="faq-item">
        <p className="faq-q">What's the difference between SAA-C03 and SAP-C02?</p>
        <p className="faq-a">SAA-C03 (Associate) focuses on designing well-architected solutions for standard workloads and single accounts. SAP-C02 (Professional) focuses on complex, multi-account, multi-region architectures, large-scale migrations, and organizational governance. SAA-C03 is the foundation most people build on before SAP-C02.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="cta-section">
      <h2>Build your SAA-C03 portfolio today</h2>
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
      <a href="/azure/">Azure</a>
      <a href="/gcp/">GCP</a>
      <a href="/hashicorp/">HashiCorp</a>
      <a href="/cncf/">CNCF</a>
    </p>
  </div>
</footer>
    </div>
  )
}
