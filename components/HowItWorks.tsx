const steps = [
  {
    num: '1',
    title: 'Pick your cert path',
    body: 'Start with AZ-104. AWS and GCP paths launching soon. Every project maps directly to official exam domains.',
  },
  {
    num: '2',
    title: 'Follow guided projects step by step',
    body: "A checklist walks you through real deployments. An AI mentor knows exactly which step you're on — and what usually breaks there.",
  },
  {
    num: '3',
    title: 'Your evidence commits to GitHub automatically',
    body: 'Screenshots, configs, ARM templates, and KQL queries land in the right folders with proper commit messages.',
  },
  {
    num: '4',
    title: 'Walk in ready — and leave with proof',
    body: "Get an exam-readiness summary when all projects are done. Sit the exam knowing you've actually done the work.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0A0F1E] py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#475569] mb-2">How it works</p>
        <h2 className="text-[26px] font-bold text-[#F1F5F9] tracking-[-0.015em] mb-3">
          Study. Build. Commit. Repeat.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.7] mb-8">
          Each cert path is real, hands-on projects mapped to the official exam objectives. Follow the steps — the evidence builds itself.
        </p>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-5 py-[1.375rem] ${i < steps.length - 1 ? 'border-b border-[#1A2540]' : ''}`}
            >
              <div className="w-8 h-8 rounded-full bg-[#0B1E3D] border border-[#1E4080] flex items-center justify-center text-[13px] font-bold text-[#4FC3F7] flex-shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#E2E8F0] mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-[#64748B] leading-[1.65]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
