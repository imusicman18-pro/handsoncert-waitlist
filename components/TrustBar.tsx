export default function TrustBar() {
  return (
    <div className="bg-[#0A0F1E] border-b border-[#1A2540] py-4 px-6">
      <div className="max-w-3xl mx-auto flex justify-center gap-8 flex-wrap">
        {[
          'AZ-104 ready at launch',
          'Verified against official exam objectives daily',
          'Real GitHub commits — not simulations',
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-xs text-[#64748B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
