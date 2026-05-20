'use client'

export default function Nav() {
  function scrollToWaitlist() {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1425] border-b border-[#1E2D4A]">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between h-[68px] gap-3">
        <img src="/handsoncert-logo.png" alt="HandsOnCert" className="h-[56px] w-auto" />
        <span className="text-xs bg-[#141E33] border border-[#1E2D4A] rounded-full px-3 py-1 text-[#64748B] whitespace-nowrap">
          Learn · Build · Prove
        </span>
        <button
          onClick={scrollToWaitlist}
          className="bg-[#1A56DB] hover:bg-[#2563EB] text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap flex-shrink-0"
        >
          Join waitlist
        </button>
      </div>
    </nav>
  )
}
