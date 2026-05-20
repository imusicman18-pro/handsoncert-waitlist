'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setState('success')
        setEmail('')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="max-w-md mx-auto w-full text-center py-3">
        <p className="text-[#10B981] text-sm">You're on the list! We'll be in touch.</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 px-4 py-3 text-sm bg-[#141E33] border border-[#1E2D4A] rounded-lg text-[#E2E8F0] placeholder-[#475569] focus:outline-none focus:border-[#1A56DB]"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="bg-[#1A56DB] hover:bg-[#2563EB] disabled:opacity-60 text-white text-sm font-semibold px-6 py-3 rounded-lg whitespace-nowrap flex-shrink-0"
        >
          {state === 'loading' ? 'Adding you...' : 'Get early access'}
        </button>
      </form>
      {state === 'error' && (
        <p className="text-red-400 text-xs mt-2 text-center">Something went wrong. Try again.</p>
      )}
    </div>
  )
}
