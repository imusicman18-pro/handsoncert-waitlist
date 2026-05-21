import WaitlistForm from './WaitlistForm'

export default function Hero() {
  return (
    <section className="bg-[#0D1425] py-20 pb-16 border-b border-[#1E2D4A]">
      <div className="max-w-[580px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-[#4FC3F7] bg-[#0B1E3D] border border-[#1E4080] px-4 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
          Early access now open
        </div>
        <h1 className="text-[40px] font-bold leading-[1.15] text-[#F1F5F9] tracking-[-0.025em] mb-4">
          Get certified.<br />
          <em className="not-italic text-[#4FC3F7]">Prove you built it.</em>
        </h1>
        <p className="text-sm font-medium text-[#64748B] tracking-[0.12em] uppercase mb-4">
          Learn <span className="text-[#1A56DB]">·</span> Build <span className="text-[#1A56DB]">·</span> Prove
        </p>
        <p className="text-[17px] text-[#94A3B8] leading-[1.7] mb-9">
          Anyone can pass a multiple choice exam. HandsOnCert makes you prove it — with real deployments, real commits, and a GitHub portfolio employers can verify. The cert gets you the interview. The HandsOnCert-GitHub portfolio gets you the job.
        </p>
        <WaitlistForm />
        <p className="text-xs text-[#475569] mt-3">Free to start. No credit card required.</p>
      </div>
    </section>
  )
}
