export default function Footer() {
  return (
    <footer className="bg-[#080C18] border-t border-[#141E33] py-5 px-6">
      <div className="max-w-3xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <span className="text-[14px] font-bold text-[#E2E8F0]">
          HandsOn<span className="text-[#4FC3F7] font-normal">Cert</span>
        </span>
        <span className="text-[12px] text-[#334155]">
          handsoncert.com — built by a cloud engineer, for cloud engineers
        </span>
        <div className="flex gap-4">
          <a href="https://app.handsoncert.com/legal/privacy" className="text-[11px] text-[#334155] hover:text-[#4FC3F7] transition-colors">Privacy</a>
          <a href="https://app.handsoncert.com/legal/terms" className="text-[11px] text-[#334155] hover:text-[#4FC3F7] transition-colors">Terms</a>
          <a href="https://app.handsoncert.com/legal/refunds" className="text-[11px] text-[#334155] hover:text-[#4FC3F7] transition-colors">Refunds</a>
        </div>
      </div>
    </footer>
  )
}
