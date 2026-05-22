import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section id="waitlist" className="bg-[#0D1425] border-t border-[#1A2540] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-3 whitespace-nowrap">
          Stop studying cloud. Start proving it.
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.65] mb-7">
          Join the waitlist. Get early access. Free to start — no card, no commitment.
        </p>
        <WaitlistForm />
        <p className="text-xs text-[#334155] mt-3">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
