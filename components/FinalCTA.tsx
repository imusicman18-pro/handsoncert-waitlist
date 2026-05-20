import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section id="waitlist" className="bg-[#0D1425] border-t border-[#1A2540] py-16 px-6 text-center">
      <div className="max-w-lg mx-auto">
        <h2 className="text-[30px] font-bold text-[#F1F5F9] tracking-[-0.02em] mb-3">
          Ready to build something real?
        </h2>
        <p className="text-[15px] text-[#64748B] leading-[1.65] mb-7">
          Join the waitlist and get early access when HandsOnCert launches. Free tier available from day one.
        </p>
        <WaitlistForm />
        <p className="text-xs text-[#334155] mt-3">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
