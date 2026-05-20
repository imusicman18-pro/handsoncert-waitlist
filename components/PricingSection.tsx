export default function PricingSection() {
  return (
    <section className="bg-[#0A0F1E] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#475569] mb-2">Pricing</p>
        <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-3">
          Start free. Upgrade when it clicks.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.7] mb-8">
          Project 1 of any cert path is completely free — no card, no trial clock.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2.5">
          <div className="bg-[#0A0F1E] border border-[#1A2540] rounded-2xl p-6">
            <p className="text-[13px] font-medium text-[#64748B] mb-1">Free</p>
            <p className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-1">$0</p>
            <p className="text-[12px] text-[#64748B] leading-[1.55] mb-4">
              Project 1 of any cert, fully unlocked. No time limit, no card.
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                'Project 1 of any cert path',
                'AI mentor (50 messages/day)',
                'Guided git workflow',
                'GitHub setup wizard',
              ].map((f) => (
                <li key={f} className="flex gap-2 items-start text-[12px] text-[#94A3B8]">
                  <span className="text-[#10B981] font-bold text-[13px] flex-shrink-0">+</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0B1830] border-2 border-[#1A56DB] rounded-2xl p-6">
            <span className="inline-block text-[11px] bg-[#0B1E3D] text-[#4FC3F7] border border-[#1E4080] px-2.5 py-1 rounded-full font-medium mb-3.5">
              Most popular
            </span>
            <p className="text-[13px] font-medium text-[#64748B] mb-1">Pro</p>
            <p className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-1">
              $29.99
              <sub className="text-[13px] font-normal text-[#475569] align-baseline">/mo</sub>
            </p>
            <p className="text-[12px] text-[#64748B] leading-[1.55] mb-4">
              All projects, all cert paths, unlimited AI, auto GitHub commits.
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                'All projects across all certs',
                'Unlimited AI mentor',
                'Auto GitHub commit pipeline',
                'Downloadable lab guide PDFs',
                'Exam readiness summary',
              ].map((f) => (
                <li key={f} className="flex gap-2 items-start text-[12px] text-[#94A3B8]">
                  <span className="text-[#10B981] font-bold text-[13px] flex-shrink-0">+</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#0D1425] border border-[#1A2540] rounded-xl px-5 py-4 flex justify-between items-center gap-4 mb-2">
          <div>
            <strong className="block text-[13px] font-semibold text-[#CBD5E1]">
              Pro Annual — save 45%
            </strong>
            <span className="text-[12px] text-[#64748B]">Everything in Pro. Billed once a year.</span>
          </div>
          <span className="text-[20px] font-bold text-[#F1F5F9] whitespace-nowrap">
            $199<sub className="text-[12px] font-normal text-[#475569]">/yr</sub>
          </span>
        </div>

        <div className="bg-[#0B1E3D] border border-[#1E4080] rounded-xl px-5 py-4 flex justify-between items-center gap-4">
          <div>
            <strong className="block text-[13px] font-semibold text-[#93C5FD]">
              Lifetime access — early bird
            </strong>
            <span className="text-[12px] text-[#4FC3F7]">
              First 200 buyers only. All current and future cert paths, forever.
            </span>
          </div>
          <span className="text-[20px] font-bold text-[#93C5FD] whitespace-nowrap">
            $299<sub className="text-[12px] font-normal text-[#4FC3F7]"> one-time</sub>
          </span>
        </div>
      </div>
    </section>
  )
}
