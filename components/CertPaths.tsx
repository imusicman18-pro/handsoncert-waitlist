const livePill = 'bg-[#052E16] text-[#6EE7B7] border border-[#065F46] text-[11px] font-semibold px-2.5 py-1 rounded-full'
const soonPill = 'bg-[#0A0F1E] text-[#475569] border border-[#1A2540] text-[11px] px-2.5 py-1 rounded-full'

const clouds = [
  {
    name: 'Microsoft Azure',
    seriesLabel: 'AZ · SC · AI series',
    seriesColor: '#4FC3F7',
    iconBg: '#0B1E3D',
    iconBorder: '#1E4080',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16h6.5L14 6l-4 2-3 4H4v4z" fill="#4FC3F7" opacity="0.4" />
        <path d="M10.5 16H18l-4-10-3.5 10z" fill="#4FC3F7" />
      </svg>
    ),
    certs: [
      { label: 'AZ-104 Administrator', tag: 'LIVE', live: true },
      { label: 'AZ-900 Fundamentals', tag: 'Q3 2026', live: false },
      { label: 'SC-900 Security', tag: 'Q3 2026', live: false },
      { label: 'AI-900 AI Fundamentals', tag: 'Q4 2026', live: false },
    ],
  },
  {
    name: 'Amazon Web Services',
    seriesLabel: 'SAA · CLF series',
    seriesColor: '#F59E0B',
    iconBg: '#1C1208',
    iconBorder: '#3D2A10',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 14c0 1.1.9 2 2 2h12a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v5z" stroke="#F59E0B" strokeWidth="1.4" fill="none" />
        <path d="M7 17v1M11 17v1M15 17v1" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="11" cy="11" r="2" fill="#F59E0B" opacity="0.5" />
      </svg>
    ),
    certs: [
      { label: 'SAA-C03 Solutions Architect', tag: 'Q3 2026', live: false },
      { label: 'CLF-C02 Cloud Practitioner', tag: 'Q4 2026', live: false },
      { label: 'DVA-C02 Developer', tag: '2027', live: false },
    ],
  },
  {
    name: 'Google Cloud',
    seriesLabel: 'ACE · PCA series',
    seriesColor: '#10B981',
    iconBg: '#0C1F0C',
    iconBorder: '#1A3D1A',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#10B981" strokeWidth="1.4" fill="none" />
        <path d="M11 4v7l4 2.5" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    certs: [
      { label: 'Associate Cloud Engineer', tag: 'Q4 2026', live: false },
      { label: 'Prof. Cloud Architect', tag: '2027', live: false },
      { label: 'Prof. Data Engineer', tag: '2027', live: false },
    ],
  },
]

export default function CertPaths() {
  return (
    <section className="bg-[#0D1425] border-t border-b border-[#1A2540] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#475569] mb-2">Cert paths</p>
        <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-3">
          Three clouds. One platform.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.7] mb-8">
          Every path built from official exam objectives — mapped to real hands-on projects that land in your GitHub.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {clouds.map((cloud) => (
            <div key={cloud.name} className="bg-[#141E33] border border-[#1E2D4A] rounded-2xl p-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: cloud.iconBg, border: `1px solid ${cloud.iconBorder}` }}
              >
                {cloud.icon}
              </div>
              <p className="text-[14px] font-bold text-[#F1F5F9] mb-0.5">{cloud.name}</p>
              <p className="text-[11px] font-medium mb-4" style={{ color: cloud.seriesColor }}>
                {cloud.seriesLabel}
              </p>
              <div className="border-t border-[#1E2D4A] mb-4" />
              <div className="flex flex-col gap-2">
                {cloud.certs.map((cert) => (
                  <div key={cert.label} className="flex items-center justify-between gap-2">
                    <span className="text-[12px] text-[#94A3B8]">{cert.label}</span>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap"
                      style={cert.live
                        ? { background: '#052E16', color: '#6EE7B7', borderColor: '#065F46' }
                        : { background: '#0A0F1E', color: '#475569', borderColor: '#1A2540', fontWeight: 400 }
                      }
                    >{cert.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-[#475569]">
          All paths built from official exam objectives · Content verified against live exam guides
        </p>
      </div>
    </section>
  )
}
