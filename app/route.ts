export const dynamic = 'force-static'

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HandsOnCert — Learn · Build · Prove</title>
<meta name="description" content="Hands-on cloud certification labs with real projects, GitHub portfolio commits, and an AI mentor. 21 cert paths live now. Pay once per cert — no subscription.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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
    --amber:      #F59E0B;
    --red:        #EF4444;
    --purple:     #8B5CF6;
    --text-1:     #F1F5F9;
    --text-2:     #CBD5E1;
    --text-3:     #94A3B8;
    --text-4:     #64748B;
    --text-5:     #475569;
    --mono:       'DM Mono', monospace;
    --sans:       'Sora', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--text-2);
    -webkit-font-smoothing: antialiased;
  }

  /* ── NAV ── */
  nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(8,13,26,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 0.5px solid var(--border);
    padding: 0 1.5rem;
  }
  .nav-inner {
    max-width: 1080px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    height: 60px; gap: 12px;
  }
  .logo {
    font-size: 18px; font-weight: 800; color: var(--text-1);
    letter-spacing: -0.02em; white-space: nowrap;
    text-decoration: none;
  }
  .logo span { color: var(--blue-light); font-weight: 500; }
  .nav-right { display: flex; align-items: center; gap: 10px; }
  .nav-pill {
    font-size: 11px; color: var(--text-4); background: var(--bg-card);
    border: 0.5px solid var(--border); padding: 4px 12px;
    border-radius: 20px; white-space: nowrap;
    font-family: var(--mono);
  }
  .nav-cta {
    background: var(--blue); color: #fff; border: none;
    padding: 9px 20px; border-radius: 8px; font-size: 13px;
    font-weight: 600; cursor: pointer; white-space: nowrap;
    font-family: var(--sans); text-decoration: none;
    transition: background 0.15s;
  }
  .nav-cta:hover { background: var(--blue-mid); }

  /* ── HERO ── */
  .hero {
    background: var(--bg-card);
    border-bottom: 0.5px solid var(--border);
    padding: 6rem 1.5rem 5rem;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,86,219,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-inner { max-width: 680px; margin: 0 auto; position: relative; }

  .live-badge {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--green);
    background: rgba(16,185,129,0.08);
    border: 0.5px solid rgba(16,185,129,0.3);
    padding: 5px 14px; border-radius: 20px;
    margin-bottom: 2rem;
    font-family: var(--mono);
  }
  .live-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 6px var(--green);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .hero h1 {
    font-size: clamp(38px, 6vw, 60px);
    font-weight: 900; line-height: 1.1;
    color: var(--text-1); letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
  }
  .hero h1 .h1-setup {
    display: block;
    font-size: clamp(17px, 2vw, 22px);
    font-weight: 600;
    color: var(--text-3);
    letter-spacing: -0.01em;
    margin-bottom: 0.5em;
  }
  .hero h1 em { font-style: normal; color: var(--blue-light); }

  .hero-sub {
    font-size: 17px; color: var(--text-3); line-height: 1.75;
    margin-bottom: 2.5rem; max-width: 520px; margin-left: auto; margin-right: auto;
  }

  .hero-cta-group {
    display: flex; gap: 10px; justify-content: center;
    flex-wrap: wrap; margin-bottom: 2rem;
  }
  .btn-primary {
    background: var(--blue); color: #fff; border: none;
    padding: 13px 28px; border-radius: 10px;
    font-size: 15px; font-weight: 700; cursor: pointer;
    font-family: var(--sans); text-decoration: none;
    transition: background 0.15s, transform 0.1s;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-primary:hover { background: var(--blue-mid); transform: translateY(-1px); }
  .btn-ghost {
    background: transparent; color: var(--text-2);
    border: 1px solid var(--border-2);
    padding: 13px 28px; border-radius: 10px;
    font-size: 15px; font-weight: 600; cursor: pointer;
    font-family: var(--sans); text-decoration: none;
    transition: border-color 0.15s, color 0.15s;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-ghost:hover { border-color: var(--blue-light); color: var(--blue-light); }

  .hero-note {
    font-size: 12px; color: var(--text-5);
    font-family: var(--mono);
  }
  .hero-note span { color: var(--green); }

  /* ── STAT BAR ── */
  .stat-bar {
    background: var(--bg);
    border-bottom: 0.5px solid var(--border);
    padding: 1.25rem 1.5rem;
  }
  .stat-inner {
    max-width: 1080px; margin: 0 auto;
    display: flex; justify-content: center;
    gap: 0; flex-wrap: wrap;
  }
  .stat-item {
    display: flex; flex-direction: column; align-items: center;
    padding: 0.5rem 2.5rem;
    border-right: 0.5px solid var(--border);
  }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-size: 22px; font-weight: 800; color: var(--text-1);
    letter-spacing: -0.02em; font-family: var(--mono);
  }
  .stat-num span { color: var(--blue-light); }
  .stat-label { font-size: 11px; color: var(--text-4); margin-top: 2px; }

  /* ── SECTIONS ── */
  .section { padding: 4rem 1.5rem; }
  .section.alt { background: var(--bg-card); border-top: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); }
  .sec-inner { max-width: 1080px; margin: 0 auto; }
  .sec-eyebrow {
    font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--blue-light);
    margin-bottom: 0.5rem; font-family: var(--mono);
  }
  .sec-title {
    font-size: clamp(22px, 3vw, 30px); font-weight: 800;
    color: var(--text-1); margin-bottom: 0.75rem;
    letter-spacing: -0.02em; line-height: 1.2;
  }
  .sec-sub {
    font-size: 15px; color: var(--text-4); line-height: 1.75;
    margin-bottom: 2.5rem; max-width: 560px;
  }

  /* ── CERT GRID ── */
  .cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
    margin-bottom: 1.5rem;
  }
  .cert-card {
    background: var(--bg-card2);
    border: 0.5px solid var(--border);
    border-radius: 12px; padding: 1.125rem;
    position: relative; overflow: hidden;
    transition: border-color 0.15s, transform 0.1s;
  }
  .cert-card:hover { border-color: var(--border-2); transform: translateY(-1px); }
  .cert-card.live { border-color: rgba(16,185,129,0.3); }
  .cert-card.live::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
  }
  .cert-card[data-provider="azure"].live::before { background: #0078D4; }
  .cert-card[data-provider="aws"].live::before { background: #F59E0B; }
  .cert-card[data-provider="gcp"].live::before { background: #34A853; }
  .cert-card[data-provider="hashicorp"].live::before { background: #7B42BC; }
  .cert-card[data-provider="cncf"].live::before { background: #326CE5; }

  .cert-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; }
  .cert-provider-tag {
    font-size: 10px; font-weight: 600; padding: 2px 8px;
    border-radius: 4px; font-family: var(--mono);
    letter-spacing: 0.04em;
  }
  .tag-azure   { background: rgba(0,120,212,0.15); color: #60A5FA; border: 0.5px solid rgba(0,120,212,0.3); }
  .tag-aws     { background: rgba(245,158,11,0.12); color: #FCD34D; border: 0.5px solid rgba(245,158,11,0.3); }
  .tag-gcp     { background: rgba(52,168,83,0.12); color: #6EE7B7; border: 0.5px solid rgba(52,168,83,0.3); }
  .tag-hashicorp { background: rgba(123,66,188,0.15); color: #C4B5FD; border: 0.5px solid rgba(123,66,188,0.3); }
  .tag-cncf    { background: rgba(50,108,229,0.15); color: #93C5FD; border: 0.5px solid rgba(50,108,229,0.3); }

  .cert-status-live {
    font-size: 10px; color: var(--green); background: rgba(16,185,129,0.1);
    border: 0.5px solid rgba(16,185,129,0.25); padding: 2px 8px;
    border-radius: 20px; font-family: var(--mono); font-weight: 600;
    display: flex; align-items: center; gap: 4px;
  }
  .cert-status-live::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--green); display: block;
  }
  .cert-status-soon {
    font-size: 10px; color: var(--text-5);
    padding: 2px 8px; font-family: var(--mono);
  }

  .cert-id {
    font-size: 13px; font-weight: 700; color: var(--text-1);
    font-family: var(--mono); margin-bottom: 3px;
  }
  .cert-name { font-size: 12px; color: var(--text-3); line-height: 1.4; margin-bottom: 0.75rem; }
  .cert-meta {
    display: flex; gap: 8px; align-items: center;
    font-size: 11px; color: var(--text-5); font-family: var(--mono);
  }
  .cert-price { color: var(--blue-light); font-weight: 600; }
  .cert-sep { color: var(--border); }

  /* ── HOW IT WORKS ── */
  .steps-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1px; background: var(--border);
    border: 0.5px solid var(--border); border-radius: 14px;
    overflow: hidden;
  }
  .step-block {
    background: var(--bg-card2); padding: 1.75rem 1.5rem;
  }
  .step-n {
    font-size: 11px; font-weight: 700; color: var(--blue-light);
    font-family: var(--mono); letter-spacing: 0.06em;
    margin-bottom: 0.875rem;
  }
  .step-block h3 { font-size: 14px; font-weight: 700; color: var(--text-1); margin-bottom: 0.5rem; }
  .step-block p { font-size: 12.5px; color: var(--text-4); line-height: 1.65; }

  /* ── PORTFOLIO PROOF ── */
  .portfolio-box {
    background: var(--bg-card2);
    border: 0.5px solid var(--border-2);
    border-radius: 16px; overflow: hidden;
  }
  .portfolio-header {
    background: rgba(26,86,219,0.08);
    border-bottom: 0.5px solid var(--border-2);
    padding: 1.25rem 1.5rem;
    display: flex; align-items: center; gap: 10px;
  }
  .gh-dot { width: 10px; height: 10px; border-radius: 50%; }
  .portfolio-header-text { font-size: 13px; color: var(--text-3); font-family: var(--mono); }
  .portfolio-header-text strong { color: var(--blue-light); }
  .portfolio-body { padding: 1.5rem; }
  .portfolio-files { display: flex; flex-direction: column; gap: 4px; margin-bottom: 1.25rem; }
  .pf-row {
    display: flex; align-items: center; gap: 10px;
    padding: 6px 8px; border-radius: 6px;
  }
  .pf-row:hover { background: rgba(255,255,255,0.03); }
  .pf-icon { font-size: 12px; width: 16px; text-align: center; flex-shrink: 0; }
  .pf-name { font-size: 12px; color: var(--blue-light); font-family: var(--mono); flex: 1; }
  .pf-name.folder { color: var(--text-3); }
  .pf-commit { font-size: 11px; color: var(--text-5); font-family: var(--mono); white-space: nowrap; }
  .pf-time { font-size: 11px; color: var(--text-5); font-family: var(--mono); margin-left: auto; white-space: nowrap; }
  .commit-strip {
    background: rgba(16,185,129,0.06);
    border: 0.5px solid rgba(16,185,129,0.2);
    border-radius: 8px; padding: 10px 12px;
    font-size: 12px; font-family: var(--mono); color: var(--text-3);
  }
  .commit-strip strong { color: var(--green); }

  /* ── PROBLEM CARDS ── */
  .prob-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  @media (max-width: 640px) { .prob-grid { grid-template-columns: 1fr; } }
  .prob-card {
    background: var(--bg); border: 0.5px solid var(--border);
    border-radius: 12px; padding: 1.25rem;
  }
  .prob-icon {
    width: 34px; height: 34px; border-radius: 8px;
    margin-bottom: 0.875rem;
    display: flex; align-items: center; justify-content: center;
  }
  .prob-card h3 { font-size: 13px; font-weight: 700; color: var(--text-2); margin-bottom: 5px; }
  .prob-card p { font-size: 12px; color: var(--text-4); line-height: 1.65; }

  /* ── OUTCOMES ── */
  .outcome-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  @media (max-width: 540px) { .outcome-grid { grid-template-columns: 1fr; } }
  .outcome-item {
    background: rgba(255,255,255,0.03);
    border: 0.5px solid var(--border-2);
    border-radius: 10px; padding: 1.125rem;
  }
  .outcome-item strong {
    display: block; font-size: 13px; font-weight: 700;
    color: var(--text-1); margin-bottom: 4px;
  }
  .outcome-item span { font-size: 12px; color: var(--text-4); line-height: 1.6; }

  /* ── PRICING ── */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px; margin-bottom: 12px;
  }
  .price-card {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 14px; padding: 1.5rem;
    transition: border-color 0.15s;
  }
  .price-card.featured {
    border-color: var(--blue);
    background: linear-gradient(135deg, rgba(26,86,219,0.06) 0%, var(--bg-card2) 100%);
  }
  .price-badge {
    font-size: 10px; font-weight: 700; background: rgba(26,86,219,0.15);
    color: var(--blue-light); border: 0.5px solid rgba(26,86,219,0.3);
    padding: 3px 10px; border-radius: 20px;
    display: inline-block; margin-bottom: 0.875rem;
    font-family: var(--mono); letter-spacing: 0.05em;
  }
  .price-tier { font-size: 12px; font-weight: 500; color: var(--text-4); margin-bottom: 0.25rem; }
  .price-amount {
    font-size: 32px; font-weight: 800; color: var(--text-1);
    letter-spacing: -0.03em; margin-bottom: 0.25rem;
    font-family: var(--mono);
  }
  .price-amount sub { font-size: 13px; font-weight: 400; color: var(--text-5); vertical-align: baseline; }
  .price-desc { font-size: 12px; color: var(--text-4); margin-bottom: 1rem; line-height: 1.6; }
  .price-features { list-style: none; display: flex; flex-direction: column; gap: 7px; }
  .price-features li { font-size: 12px; color: var(--text-3); display: flex; gap: 8px; align-items: flex-start; line-height: 1.5; }
  .chk { color: var(--green); font-weight: 700; flex-shrink: 0; }

  .price-note {
    background: rgba(26,86,219,0.06);
    border: 0.5px solid rgba(26,86,219,0.2);
    border-radius: 10px; padding: 1rem 1.25rem;
    display: flex; justify-content: space-between; align-items: center;
    gap: 1rem; flex-wrap: wrap;
  }
  .pn-left strong { display: block; font-size: 13px; font-weight: 700; color: var(--text-1); }
  .pn-left span { font-size: 12px; color: var(--text-4); }
  .pn-price { font-size: 20px; font-weight: 800; color: var(--blue-light); font-family: var(--mono); white-space: nowrap; }
  .pn-price sub { font-size: 12px; font-weight: 400; color: var(--text-5); }

  /* ── ROADMAP ── */
  .roadmap-track { margin-bottom: 1.75rem; }
  .track-label {
    display: flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; color: var(--text-4);
    font-family: var(--mono); letter-spacing: 0.06em;
    text-transform: uppercase; margin-bottom: 0.625rem;
  }
  .track-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .pill-row { display: flex; flex-wrap: wrap; gap: 6px; }
  .pill {
    font-size: 12px; padding: 4px 12px; border-radius: 20px;
    border: 0.5px solid var(--border); color: var(--text-5);
    background: var(--bg-card); font-family: var(--mono);
  }
  .pill.live {
    font-weight: 700; border-color: rgba(16,185,129,0.3);
    color: #6EE7B7; background: rgba(16,185,129,0.08);
  }

  /* ── FINAL CTA ── */
  .final {
    background: var(--bg-card);
    border-top: 0.5px solid var(--border);
    padding: 5rem 1.5rem; text-align: center;
  }
  .final-inner { max-width: 520px; margin: 0 auto; }
  .final h2 {
    font-size: clamp(26px, 4vw, 36px); font-weight: 800;
    color: var(--text-1); margin-bottom: 0.875rem;
    letter-spacing: -0.025em; line-height: 1.15;
  }
  .final p { font-size: 15px; color: var(--text-4); margin-bottom: 2rem; line-height: 1.7; }

  /* ── FOOTER ── */
  footer {
    background: #050810;
    border-top: 0.5px solid var(--border);
    padding: 1.5rem;
  }
  .footer-inner {
    max-width: 1080px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 8px;
  }
  .footer-brand { font-size: 14px; font-weight: 800; color: var(--text-1); letter-spacing: -0.01em; }
  .footer-brand span { color: var(--blue-light); font-weight: 500; }
  .footer-links { display: flex; gap: 1.5rem; }
  .footer-links a { font-size: 12px; color: var(--text-5); text-decoration: none; }
  .footer-links a:hover { color: var(--text-3); }
  .footer-copy { font-size: 11px; color: #1E2D4A; font-family: var(--mono); }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .stat-item { padding: 0.5rem 1.25rem; }
    .cert-grid { grid-template-columns: 1fr 1fr; }
    .steps-grid { grid-template-columns: 1fr; }
    .prob-grid { grid-template-columns: 1fr; }
    .nav-pill { display: none; }
  }
  @media (max-width: 480px) {
    .cert-grid { grid-template-columns: 1fr; }
    .outcome-grid { grid-template-columns: 1fr; }
    .pricing-grid { grid-template-columns: 1fr; }
    .stat-inner { gap: 0; }
    .stat-item { padding: 0.5rem 1rem; border-right: none; border-bottom: 0.5px solid var(--border); width: 50%; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="/" class="logo">HandsOn<span>Cert</span></a>
    <div class="nav-right">
      <div class="nav-pill">21 cert paths live</div>
      <a href="https://app.handsoncert.com" class="nav-cta">Start building →</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="live-badge">
      <span class="live-dot"></span>
      Platform live — 21 cert paths available now
    </div>
    <p style="font-size:19px; color:#94A3B8; margin-bottom:0.5rem;">
      The cert gets you the interview.
    </p>
    <h1 style="line-height:1.15; margin-bottom:1.25rem;">
      <span style="display:block; font-size:28px; font-weight:600; color:#4FC3F7; letter-spacing:-0.02em;">
        HandsOnCert-built GitHub portfolio
      </span>
      <span style="display:block; font-size:56px; font-weight:800; color:#F1F5F9; letter-spacing:-0.03em; line-height:1.05;">
        gets you the job.
      </span>
    </h1>
    <p class="hero-sub">
      Hands-on cloud labs mapped to real exam objectives. Mark a step complete —
      HandsOnCert commits the evidence to your GitHub automatically.
      The portfolio employers actually click into.
    </p>
    <div class="hero-cta-group">
      <a href="https://app.handsoncert.com" class="btn-primary">
        Start building free
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="#certs" class="btn-ghost">Browse cert paths</a>
    </div>
    <p class="hero-note"><span>Project 1 of any cert is free</span> — no card, no trial clock.</p>
  </div>
</section>

<!-- STAT BAR -->
<div class="stat-bar">
  <div class="stat-inner">
    <div class="stat-item">
      <div class="stat-num">21</div>
      <div class="stat-label">Live cert paths</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">90<span>+</span></div>
      <div class="stat-label">Total projects</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">20<span>+</span></div>
      <div class="stat-label">Certs on roadmap</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">$<span>0</span></div>
      <div class="stat-label">Subscription fees</div>
    </div>
  </div>
</div>

<!-- CERT PATHS -->
<section class="section alt" id="certs">
  <div class="sec-inner">
    <div class="sec-eyebrow">Cert paths</div>
    <div class="sec-title">Multi-cloud, multi-track. Pay once per cert.</div>
    <p class="sec-sub">Every path built from official exam objectives — no subscriptions, no trial timers. Pay once, keep forever.</p>

    <div class="cert-grid">

      <!-- Azure -->
      <div class="cert-card live" data-provider="azure">
        <div class="cert-top">
          <span class="cert-provider-tag tag-azure">Azure</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">AZ-104</div>
        <div class="cert-name">Microsoft Azure Administrator</div>
        <div class="cert-meta">
          <span class="cert-price">$49</span>
          <span class="cert-sep">·</span>
          <span>5 projects</span>
          <span class="cert-sep">·</span>
          <span>6h</span>
        </div>
      </div>

      <div class="cert-card live" data-provider="azure">
        <div class="cert-top">
          <span class="cert-provider-tag tag-azure">Azure</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">AZ-900</div>
        <div class="cert-name">Microsoft Azure Fundamentals</div>
        <div class="cert-meta">
          <span class="cert-price">$29</span>
          <span class="cert-sep">·</span>
          <span>3 projects</span>
          <span class="cert-sep">·</span>
          <span>3h</span>
        </div>
      </div>

      <!-- AWS -->
      <div class="cert-card live" data-provider="aws">
        <div class="cert-top">
          <span class="cert-provider-tag tag-aws">AWS</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">SAA-C03</div>
        <div class="cert-name">AWS Solutions Architect Associate</div>
        <div class="cert-meta">
          <span class="cert-price">$49</span>
          <span class="cert-sep">·</span>
          <span>5 projects</span>
          <span class="cert-sep">·</span>
          <span>6h</span>
        </div>
      </div>

      <div class="cert-card live" data-provider="aws">
        <div class="cert-top">
          <span class="cert-provider-tag tag-aws">AWS</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">CLF-C02</div>
        <div class="cert-name">AWS Cloud Practitioner</div>
        <div class="cert-meta">
          <span class="cert-price">$29</span>
          <span class="cert-sep">·</span>
          <span>3 projects</span>
          <span class="cert-sep">·</span>
          <span>3h</span>
        </div>
      </div>

      <!-- GCP -->
      <div class="cert-card live" data-provider="gcp">
        <div class="cert-top">
          <span class="cert-provider-tag tag-gcp">GCP</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">GCP-ACE</div>
        <div class="cert-name">Google Cloud Associate Engineer</div>
        <div class="cert-meta">
          <span class="cert-price">$49</span>
          <span class="cert-sep">·</span>
          <span>5 projects</span>
          <span class="cert-sep">·</span>
          <span>6h</span>
        </div>
      </div>

      <!-- HashiCorp -->
      <div class="cert-card live" data-provider="hashicorp">
        <div class="cert-top">
          <span class="cert-provider-tag tag-hashicorp">HashiCorp</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">TF-003</div>
        <div class="cert-name">Terraform Associate</div>
        <div class="cert-meta">
          <span class="cert-price">$29</span>
          <span class="cert-sep">·</span>
          <span>3 projects</span>
          <span class="cert-sep">·</span>
          <span>4h</span>
        </div>
      </div>

      <!-- CNCF -->
      <div class="cert-card live" data-provider="cncf">
        <div class="cert-top">
          <span class="cert-provider-tag tag-cncf">CNCF</span>
          <span class="cert-status-live">Live</span>
        </div>
        <div class="cert-id">CKA</div>
        <div class="cert-name">Certified Kubernetes Administrator</div>
        <div class="cert-meta">
          <span class="cert-price">$79</span>
          <span class="cert-sep">·</span>
          <span>5 projects</span>
          <span class="cert-sep">·</span>
          <span>12h</span>
        </div>
      </div>

      <!-- Coming soon teaser -->
      <div class="cert-card" style="border-style: dashed; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 110px; gap: 6px;">
        <div style="font-size: 11px; color: var(--text-5); font-family: var(--mono);">Coming next</div>
        <div style="font-size: 13px; font-weight: 700; color: var(--text-3);">SC-500 · AI-901</div>
        <div style="font-size: 11px; color: var(--text-5);">Azure Cloud & AI Security · Azure AI Fundamentals</div>
      </div>

    </div>

    <div style="text-align:center; margin-top: 0.5rem;">
      <a href="https://app.handsoncert.com" style="font-size:13px; color: var(--blue-light); text-decoration: none; font-family: var(--mono);">
        Browse all certs + notify me → app.handsoncert.com
      </a>
    </div>
  </div>
</section>

<!-- PROBLEM -->
<section class="section">
  <div class="sec-inner">
    <div class="sec-eyebrow">The problem</div>
    <div class="sec-title">A badge alone doesn't get you hired.</div>
    <p class="sec-sub">Most cert prep gets you to passing — but leaves you with nothing to show a hiring manager the morning after.</p>
    <div class="prob-grid">
      <div class="prob-card">
        <div class="prob-icon" style="background:#1F0A0A;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L1.5 13h13L8 2z" stroke="#EF4444" stroke-width="1.4" fill="none"/><path d="M8 7v3" stroke="#EF4444" stroke-width="1.4" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.7" fill="#EF4444"/></svg>
        </div>
        <h3>Passive prep fades fast</h3>
        <p>Videos and flashcards don't build muscle memory. You pass the exam, then freeze when a manager asks you to deploy something real.</p>
      </div>
      <div class="prob-card">
        <div class="prob-icon" style="background:#1C1208;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="#F59E0B" stroke-width="1.4" fill="none"/><path d="M5 8h6M5 10.5h4" stroke="#F59E0B" stroke-width="1.3" stroke-linecap="round"/></svg>
        </div>
        <h3>Empty GitHub = red flag</h3>
        <p>Recruiters check GitHub before they call. A blank profile says you studied but never shipped. It plants doubt before the interview starts.</p>
      </div>
      <div class="prob-card">
        <div class="prob-icon" style="background:#0D1F0D;">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#10B981" stroke-width="1.4"/><path d="M5.5 8l2 2 3-3" stroke="#10B981" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>HandsOnCert fixes both</h3>
        <p>Every project builds real infrastructure and commits real evidence to your GitHub. You leave with a cert badge <em>and</em> a portfolio employers can verify.</p>
      </div>
    </div>
  </div>
</section>

<!-- PORTFOLIO PROOF -->
<section class="section alt">
  <div class="sec-inner" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
    <div>
      <div class="sec-eyebrow">What employers see</div>
      <div class="sec-title">A GitHub portfolio they can click into on the spot.</div>
      <p class="sec-sub" style="margin-bottom: 1.5rem;">Every completed project commits real screenshots, config files, and infrastructure code to your repo — with proper folder structure and commit messages that show your work.</p>
      <div class="outcome-grid">
        <div class="outcome-item">
          <strong>Real commits</strong>
          <span>Not simulated. Actual git history with timestamps and diffs.</span>
        </div>
        <div class="outcome-item">
          <strong>Evidence files</strong>
          <span>Screenshots, YAML, ARM templates, KQL queries — all organized.</span>
        </div>
        <div class="outcome-item">
          <strong>5 projects per cert</strong>
          <span>Up to 5 folder-deep repos per cert path. Deep = credible.</span>
        </div>
        <div class="outcome-item">
          <strong>Verifiable</strong>
          <span>Anyone can clone it, review it, and see exactly what you built.</span>
        </div>
      </div>
    </div>
    <div class="portfolio-box">
      <div class="portfolio-header">
        <div class="gh-dot" style="background:#EF4444;"></div>
        <div class="gh-dot" style="background:#F59E0B; margin-left:4px;"></div>
        <div class="gh-dot" style="background:#10B981; margin-left:4px;"></div>
        <div class="portfolio-header-text" style="margin-left:10px;">
          <strong>alexremi</strong> / az104-azure-labs
        </div>
      </div>
      <div class="portfolio-body">
        <div class="portfolio-files">
          <div class="pf-row">
            <span class="pf-icon">📁</span>
            <span class="pf-name folder">project-1-compute-identity</span>
            <span class="pf-time">2d ago</span>
          </div>
          <div class="pf-row">
            <span class="pf-icon">📁</span>
            <span class="pf-name folder">project-2-networking-storage</span>
            <span class="pf-time">3d ago</span>
          </div>
          <div class="pf-row">
            <span class="pf-icon">📁</span>
            <span class="pf-name folder">project-3-monitoring-backup</span>
            <span class="pf-time">5d ago</span>
          </div>
          <div class="pf-row">
            <span class="pf-icon">🖼</span>
            <span class="pf-name">01-rg-created.png</span>
            <span class="pf-commit">add project 1 evidence</span>
            <span class="pf-time">2d ago</span>
          </div>
          <div class="pf-row">
            <span class="pf-icon">🖼</span>
            <span class="pf-name">02-vm-deployed.png</span>
            <span class="pf-commit">add project 1 evidence</span>
            <span class="pf-time">2d ago</span>
          </div>
          <div class="pf-row">
            <span class="pf-icon">📄</span>
            <span class="pf-name">arm-template.json</span>
            <span class="pf-commit">add project 1 evidence</span>
            <span class="pf-time">2d ago</span>
          </div>
        </div>
        <div class="commit-strip">
          <strong>47 commits</strong> · Last: "feat: add project 3 evidence — monitoring and backup"
        </div>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="section">
  <div class="sec-inner">
    <div class="sec-eyebrow">How it works</div>
    <div class="sec-title">Four steps. Real infrastructure. Real proof.</div>
    <p class="sec-sub">Each cert path is structured projects mapped to official exam domains. The AI mentor knows exactly which step you're on.</p>
    <div class="steps-grid">
      <div class="step-block">
        <div class="step-n">STEP 01</div>
        <h3>Pick your cert path</h3>
        <p>Choose from 21 live paths across Azure, AWS, GCP, HashiCorp, and CNCF. Project 1 of any cert is completely free.</p>
      </div>
      <div class="step-block">
        <div class="step-n">STEP 02</div>
        <h3>Follow guided projects</h3>
        <p>A step-by-step checklist walks you through real deployments. Each step maps directly to an exam domain and percentage.</p>
      </div>
      <div class="step-block">
        <div class="step-n">STEP 03</div>
        <h3>AI mentor at every step</h3>
        <p>Cert Buddy knows which project and step you're on — and what usually breaks there. Context-aware answers, not generic docs.</p>
      </div>
      <div class="step-block">
        <div class="step-n">STEP 04</div>
        <h3>Evidence commits to GitHub</h3>
        <p>Screenshots, configs, and infrastructure code land in your repo with proper commit messages. The portfolio builds itself.</p>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="section alt" id="pricing">
  <div class="sec-inner">
    <div class="sec-eyebrow">Pricing</div>
    <div class="sec-title">Pay once per cert. No subscription, ever.</div>
    <p class="sec-sub">One-time pricing is a feature, not a limitation. You paid for the cert. You shouldn't also pay monthly to study for it.</p>
    <div class="pricing-grid">
      <div class="price-card">
        <div class="price-tier">Free</div>
        <div class="price-amount">$0</div>
        <p class="price-desc">Project 1 of any cert, fully unlocked. No time limit, no card required.</p>
        <ul class="price-features">
          <li><span class="chk">✓</span>Project 1 of any cert path</li>
          <li><span class="chk">✓</span>Cert Buddy AI mentor</li>
          <li><span class="chk">✓</span>Guided git workflow</li>
          <li><span class="chk">✓</span>GitHub setup wizard</li>
        </ul>
      </div>
      <div class="price-card">
        <div class="price-tier">Gateway certs</div>
        <div class="price-amount">$29<sub> one-time</sub></div>
        <p class="price-desc">AZ-900 · CLF-C02 · TF-003. Pay once, access all projects forever.</p>
        <ul class="price-features">
          <li><span class="chk">✓</span>All projects in that cert path</li>
          <li><span class="chk">✓</span>Unlimited Cert Buddy access</li>
          <li><span class="chk">✓</span>Exam readiness summary</li>
        </ul>
      </div>
      <div class="price-card featured">
        <div class="price-badge">Most popular</div>
        <div class="price-tier">Associate certs</div>
        <div class="price-amount">$49<sub> one-time</sub></div>
        <p class="price-desc">AZ-104 · SAA-C03 · GCP-ACE. Pay once, own it permanently.</p>
        <ul class="price-features">
          <li><span class="chk">✓</span>All 5 projects, full cert path</li>
          <li><span class="chk">✓</span>Unlimited Cert Buddy access</li>
          <li><span class="chk">✓</span>Exam readiness summary</li>
          <li><span class="chk">✓</span>Content updates included</li>
        </ul>
      </div>
      <div class="price-card">
        <div class="price-tier">Expert / DevOps certs</div>
        <div class="price-amount">$79<sub> one-time</sub></div>
        <p class="price-desc">CKA and upcoming expert-tier paths. Deeper content, higher stakes.</p>
        <ul class="price-features">
          <li><span class="chk">✓</span>All 5 projects + EC2 lab setup</li>
          <li><span class="chk">✓</span>Unlimited Cert Buddy access</li>
          <li><span class="chk">✓</span>Exam readiness summary</li>
          <li><span class="chk">✓</span>Content updates included</li>
        </ul>
      </div>
    </div>
    <div class="price-note">
      <div class="pn-left">
        <strong>All-Access Pass — all current + future cert paths, forever</strong>
        <span>Every cert that ships, past and future. One payment. Lifetime access.</span>
      </div>
      <div class="pn-price">$199<sub> one-time</sub></div>
    </div>
  </div>
</section>

<!-- ROADMAP -->
<section class="section">
  <div class="sec-inner">
    <div class="sec-eyebrow">Roadmap</div>
    <div class="sec-title">Multi-cloud. Multi-track. 21 cert paths live.</div>
    <p class="sec-sub">Every cert path built from official exam objectives. All 21 paths live now — SC-500 and AI-901 coming when Microsoft publishes objectives.</p>

    <div class="roadmap-track">
      <div class="track-label"><span class="track-dot" style="background:#0078D4;"></span>Microsoft Azure</div>
      <div class="pill-row">
        <span class="pill live">AZ-104 ✓</span>
        <span class="pill live">AZ-900 ✓</span>
        <span class="pill live">AZ-305 ✓</span>
        <span class="pill live">AZ-400 ✓</span>
        <span class="pill live">SC-300 ✓</span>
        <span class="pill live">SC-900 ✓</span>
        <span class="pill live">DP-900 ✓</span>
        <span class="pill">SC-500 (coming soon)</span>
        <span class="pill">AI-901 (coming soon)</span>
      </div>
    </div>

    <div class="roadmap-track">
      <div class="track-label"><span class="track-dot" style="background:#F59E0B;"></span>Amazon Web Services</div>
      <div class="pill-row">
        <span class="pill live">SAA-C03 ✓</span>
        <span class="pill live">CLF-C02 ✓</span>
        <span class="pill live">DVA-C02 ✓</span>
        <span class="pill live">SOA-C03 ✓</span>
        <span class="pill live">SAP-C02 ✓</span>
        <span class="pill live">SCS-C03 ✓</span>
      </div>
    </div>

    <div class="roadmap-track">
      <div class="track-label"><span class="track-dot" style="background:#34A853;"></span>Google Cloud</div>
      <div class="pill-row">
        <span class="pill live">GCP-ACE ✓</span>
        <span class="pill live">GCP-PCA ✓</span>
        <span class="pill live">GCP-PDE ✓</span>
        <span class="pill live">GCP-PCSE ✓</span>
      </div>
    </div>

    <div class="roadmap-track">
      <div class="track-label"><span class="track-dot" style="background:#7B42BC;"></span>HashiCorp</div>
      <div class="pill-row">
        <span class="pill live">TF-003 ✓</span>
      </div>
    </div>

    <div class="roadmap-track">
      <div class="track-label"><span class="track-dot" style="background:#326CE5;"></span>CNCF / Kubernetes</div>
      <div class="pill-row">
        <span class="pill live">CKA ✓</span>
        <span class="pill live">CKAD ✓</span>
        <span class="pill live">CKS ✓</span>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final">
  <div class="final-inner">
    <h2>Ready to build something real?</h2>
    <p>Project 1 of any cert is completely free — no card, no trial clock. Pick a cert and start in under 5 minutes.</p>
    <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
      <a href="https://app.handsoncert.com" class="btn-primary" style="font-size:16px; padding: 15px 32px;">
        Start building free →
      </a>
    </div>
    <p style="font-size:12px; color: var(--text-5); margin-top:1.25rem; font-family: var(--mono);">
      Free forever on Project 1 · No subscription · Pay once per cert
    </p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-brand">HandsOn<span>Cert</span></div>
    <div class="footer-links">
      <a href="https://app.handsoncert.com">App</a>
      <a href="https://app.handsoncert.com/certs">Cert paths</a>
      <a href="https://app.handsoncert.com/contact">Contact</a>
    </div>
    <div class="footer-copy">handsoncert.com · Learn · Build · Prove</div>
  </div>
</footer>

</body>
</html>`

export function GET() {
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
