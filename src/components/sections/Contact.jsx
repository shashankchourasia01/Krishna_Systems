import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { contactItems } from '../../data/siteData'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_URL ?? ''

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedback('')

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send inquiry.')
      }

      setStatus('success')
      setFeedback(data.message || 'Your inquiry has been sent. We will get back to you soon.')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setFeedback(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="surface-white section-padding">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <Reveal direction="right">
            <SectionHeading
              animate={false}
              badge="Contact"
              title="Let's build your next technology success story"
              description="Reach out for staffing, project delivery, cloud modernization, or enterprise transformation support."
            />

            <div className="space-y-3 sm:space-y-4">
              {contactItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06} direction="left">
                  <a
                    href={item.href}
                    className="card-light flex items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-teal-100 dark:hover:border-teal-500/30 sm:p-5"
                  >
                    <div className="icon-box shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted">{item.title}</p>
                      <p className="truncate font-semibold text-heading">{item.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="left">
            <form className="card-light p-5 sm:p-8" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">
                    Name <span className="text-teal-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField('name')}
                    className="input-field"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-heading">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={updateField('company')}
                    className="input-field"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">
                    Email <span className="text-teal-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={updateField('email')}
                    className="input-field"
                    placeholder="name@company.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-heading">
                    Phone <span className="text-teal-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={updateField('phone')}
                    className="input-field"
                    placeholder="+91"
                    autoComplete="tel"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-heading">
                    Message <span className="text-teal-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={updateField('message')}
                    className="input-field resize-y"
                    placeholder="Tell us about your staffing or IT services requirement"
                  />
                </div>
              </div>

              {feedback && (
                <p
                  role="status"
                  className={`mt-4 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'bg-teal-50 text-teal-800 dark:bg-teal-500/10 dark:text-teal-200'
                      : 'bg-red-50 text-red-800 dark:bg-red-500/10 dark:text-red-200'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  )}
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Contact
