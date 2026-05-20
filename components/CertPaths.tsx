const paths = [
  { label: 'AZ-104 — live at launch', live: true },
  { label: 'AZ-900 — coming soon', live: false },
  { label: 'SC-900 — coming soon', live: false },
  { label: 'AI-900 — coming soon', live: false },
  { label: 'AWS Cloud Practitioner — coming soon', live: false },
  { label: 'AWS SAA-C03 — coming soon', live: false },
  { label: 'GCP Associate Cloud Engineer — coming soon', live: false },
]

export default function CertPaths() {
  return (
    <section className="bg-[#0D1425] border-t border-b border-[#1A2540] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#475569] mb-2">Cert paths</p>
        <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-3">
          Azure first. Cloud-agnostic soon.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.7] mb-5">
          Every path built from official exam objectives.
        </p>
        <div className="flex flex-wrap gap-2">
          {paths.map((p) => (
            <span
              key={p.label}
              className={`text-[12px] px-3 py-1.5 rounded-full border ${
                p.live
                  ? 'bg-[#052E16] text-[#6EE7B7] border-[#065F46] font-semibold'
                  : 'bg-[#0D1425] text-[#475569] border-[#1A2540]'
              }`}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
