const included = (text: string) => (
  <li className="flex gap-2 items-start text-[12px] text-[#94A3B8]">
    <span className="text-[#10B981] font-bold text-[13px] flex-shrink-0">+</span>
    {text}
  </li>
)

const missing = (text: string) => (
  <li className="flex gap-2 items-start text-[12px] text-[#475569]">
    <span className="font-bold text-[13px] flex-shrink-0">–</span>
    {text}
  </li>
)

export default function PricingSection() {
  return (
    <section className="bg-[#0A0F1E] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#475569] mb-2">Pricing</p>
        <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-3">
          Pay once. Learn at your pace.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.7] mb-8">
          No subscriptions. No monthly clock ticking. Buy the cert path you need, study when you want, keep access forever.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          {/* Free */}
          <div className="bg-[#0A0F1E] border border-[#1A2540] rounded-2xl p-6 flex flex-col">
            <p className="text-[13px] font-medium text-[#64748B] mb-1">Free forever</p>
            <p className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-0.5">$0</p>
            <p className="text-[12px] text-[#64748B] leading-[1.55] mb-5">No card required.</p>
            <ul className="flex flex-col gap-1.5">
              {included('Project 1 of any cert')}
              {included('AI mentor 50 msgs/day')}
              {included('GitHub setup wizard')}
              {missing('Full cert path')}
              {missing('Auto GitHub commits')}
            </ul>
          </div>

          {/* Single cert — featured */}
          <div className="bg-[#0B1830] border-2 border-[#1A56DB] rounded-2xl p-6 flex flex-col">
            <span className="inline-block text-[11px] bg-[#0B1E3D] text-[#4FC3F7] border border-[#1E4080] px-2.5 py-1 rounded-full font-medium mb-3.5 self-start">
              Most popular
            </span>
            <p className="text-[13px] font-medium text-[#64748B] mb-1">Single cert</p>
            <p className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-0.5">
              $49
              <sub className="text-[13px] font-normal text-[#475569] align-baseline"> one-time</sub>
            </p>
            <p className="text-[12px] text-[#64748B] leading-[1.55] mb-5">Full access forever.</p>
            <ul className="flex flex-col gap-1.5">
              {included('All projects for one cert')}
              {included('Unlimited AI mentor')}
              {included('Auto GitHub commits')}
              {included('Downloadable lab guide PDF')}
              {included('Exam readiness summary')}
            </ul>
          </div>

          {/* All-access */}
          <div className="bg-[#0A0F1E] border border-[#1A2540] rounded-2xl p-6 flex flex-col">
            <p className="text-[13px] font-medium text-[#64748B] mb-1">All-access pass</p>
            <p className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-0.5">
              $129
              <sub className="text-[13px] font-normal text-[#475569] align-baseline"> one-time</sub>
            </p>
            <p className="text-[12px] text-[#64748B] leading-[1.55] mb-5">Every cert forever.</p>
            <ul className="flex flex-col gap-1.5">
              {included('All cert paths, all clouds')}
              {included('All future certs included')}
              {included('Unlimited AI mentor')}
              {included('Auto GitHub commits')}
              {included('All lab guide PDFs')}
            </ul>
          </div>
        </div>

        <p className="text-center text-[12px] text-[#475569]">
          All purchases include lifetime access · No subscriptions · No renewal fees
        </p>
      </div>
    </section>
  )
}
