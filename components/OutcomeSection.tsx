const outcomes = [
  {
    label: 'Cert badge',
    value: 'Pass on the first try with hands-on confidence — not memorized answers.',
  },
  {
    label: 'GitHub portfolio',
    value: 'A public repo with real commits recruiters can click into on the spot.',
  },
  {
    label: 'Practical skills',
    value: "You've deployed VMs, secured networks, written KQL. You can do it at work too.",
  },
  {
    label: 'Always current',
    value: 'Daily monitoring of official exam objectives — content updates before it affects you.',
  },
]

export default function OutcomeSection() {
  return (
    <section className="bg-[#0D1425] border-t border-b border-[#1A2540] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#0B1E3D] border border-[#1E4080] rounded-2xl p-8">
          <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#4FC3F7] mb-2">
            What you leave with
          </p>
          <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-6">
            Two outcomes. One platform.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.04] border border-[#1E4080] rounded-xl p-4"
              >
                <strong className="block text-[13px] font-semibold text-[#CBD5E1] mb-1">
                  {item.label}
                </strong>
                <span className="text-[12px] text-[#4FC3F7] leading-[1.55]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
