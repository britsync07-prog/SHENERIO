import { useState } from 'react'
import Reveal from '@/components/Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', order: '', message: '' })
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please complete your name and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
  }

  const inputCls =
    'h-12 w-full border border-[hsl(var(--border))] bg-transparent px-4 text-sm outline-none transition-colors duration-300 placeholder:text-[hsl(var(--ink-soft))] focus:border-[hsl(var(--ink))] focus-visible:ring-1 focus-visible:ring-[hsl(var(--ink))]'

  return (
    <div className="pt-16 md:pt-20">
      <header className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <p className="text-[11px] tracking-luxe-sm text-[hsl(var(--ink-soft))]">CONTACT</p>
        <h1 className="mt-5 font-display text-5xl font-light md:text-6xl">We are here to help</h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[hsl(var(--ink-soft))]">
          For questions about our products, orders or general enquiries, our team welcomes your message.
        </p>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-14 px-6 pb-24 md:grid-cols-12 md:pb-32">
        <Reveal className="md:col-span-4">
          <h2 className="text-[11px] tracking-luxe-sm">CUSTOMER SERVICE</h2>
          <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
            London, United Kingdom
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
            Our customer service email will be confirmed at launch. In the meantime, please use the enquiry form
            and we will respond within two working days.
          </p>
        </Reveal>
        <Reveal className="md:col-span-8" delay={120}>
          {done ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-[hsl(var(--blush-soft))] p-10 text-center" role="status">
              <p className="font-display text-3xl font-light">Thank you for your enquiry</p>
              <p className="mt-4 max-w-md text-sm text-[hsl(var(--ink-soft))]">
                We have received your message and will respond shortly. Thank you for your interest in SHENERIO.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2" noValidate>
              <div>
                <label htmlFor="c-name" className="mb-2 block text-[11px] tracking-luxe-sm">FULL NAME</label>
                <input id="c-name" className={inputCls} value={form.name} onChange={set('name')} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-2 block text-[11px] tracking-luxe-sm">EMAIL ADDRESS</label>
                <input id="c-email" type="email" className={inputCls} value={form.email} onChange={set('email')} autoComplete="email" />
              </div>
              <div>
                <label htmlFor="c-subject" className="mb-2 block text-[11px] tracking-luxe-sm">ENQUIRY SUBJECT</label>
                <input id="c-subject" className={inputCls} value={form.subject} onChange={set('subject')} />
              </div>
              <div>
                <label htmlFor="c-order" className="mb-2 block text-[11px] tracking-luxe-sm">ORDER NUMBER (OPTIONAL)</label>
                <input id="c-order" className={inputCls} value={form.order} onChange={set('order')} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className="mb-2 block text-[11px] tracking-luxe-sm">YOUR MESSAGE</label>
                <textarea
                  id="c-message"
                  rows={6}
                  className="w-full resize-y border border-[hsl(var(--border))] bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-[hsl(var(--ink-soft))] focus:border-[hsl(var(--ink))] focus-visible:ring-1 focus-visible:ring-[hsl(var(--ink))]"
                  value={form.message}
                  onChange={set('message')}
                />
              </div>
              {error && (
                <p className="text-sm text-[hsl(var(--destructive))] sm:col-span-2" role="alert">{error}</p>
              )}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-[hsl(var(--ink))] px-10 py-4 text-[11px] tracking-luxe-sm text-white transition-opacity duration-300 hover:opacity-80"
                >
                  SEND ENQUIRY
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </div>
  )
}
