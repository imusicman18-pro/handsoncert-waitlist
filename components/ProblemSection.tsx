const problems = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2L1.5 12h11L7 2z" stroke="#EF4444" strokeWidth="1.3" fill="none" />
        <path d="M7 6v2.5" stroke="#EF4444" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="7" cy="10" r="0.6" fill="#EF4444" />
      </svg>
    ),
    iconBg: '#1F0A0A',
    title: 'Passive prep fades fast',
    body: "Videos and flashcards don't build muscle memory. You pass, then freeze on day one at work.",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="3" width="10" height="8" rx="1.5" stroke="#F59E0B" strokeWidth="1.3" fill="none" />
        <path d="M4.5 6.5h5M4.5 8.5h3" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    iconBg: '#1C1208',
    title: 'Empty GitHub = red flag',
    body: "Recruiters check GitHub before they call. A blank profile says you studied but never built.",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5" stroke="#64748B" strokeWidth="1.3" />
        <path d="M7 4.5v3l1.5 1.5" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    iconBg: '#111827',
    title: 'Content goes stale',
    body: 'Most courses lag behind exam updates by months. You study old objectives and get surprised.',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-[#0D1425] border-t border-b border-[#1A2540] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#475569] mb-2">The problem</p>
        <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-3">
          A badge alone doesn't get you hired.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.7] mb-8">
          Most cert prep gets you to passing — but leaves you with nothing to show a hiring manager the morning after.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {problems.map((p) => (
            <div key={p.title} className="bg-[#0A0F1E] border border-[#1A2540] rounded-xl p-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-3.5"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <h3 className="text-[13px] font-semibold text-[#CBD5E1] mb-1.5">{p.title}</h3>
              <p className="text-[12px] text-[#64748B] leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
