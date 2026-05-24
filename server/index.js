import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT) || 3001

const adminEmail = process.env.ADMIN_EMAIL
const smtpHost = process.env.SMTP_HOST
const smtpPort = Number(process.env.SMTP_PORT) || 587
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const smtpFrom = process.env.SMTP_FROM || smtpUser

if (!adminEmail) {
  console.warn('[contact-api] ADMIN_EMAIL is not set — inquiry emails will fail until configured.')
}

const transporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      })
    : null

app.use(cors({ origin: true }))
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body ?? {}

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: 'Name, email, phone, and message are required.',
      })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }

    if (!adminEmail) {
      return res.status(503).json({ error: 'Contact service is not configured (ADMIN_EMAIL missing).' })
    }

    if (!transporter) {
      return res.status(503).json({
        error: 'Contact service is not configured (SMTP settings missing).',
      })
    }

    const subject = `New inquiry from ${name.trim()} — Krisha Systems`
    const text = [
      'New website inquiry',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim()}`,
      company?.trim() ? `Company: ${company.trim()}` : null,
      '',
      'Message:',
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n')

    const html = `
      <h2>New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
      <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone.trim())}</p>
      ${company?.trim() ? `<p><strong>Company:</strong> ${escapeHtml(company.trim())}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message.trim())}</p>
    `

    await transporter.sendMail({
      from: smtpFrom,
      to: adminEmail,
      replyTo: email.trim(),
      subject,
      text,
      html,
    })

    return res.json({ ok: true, message: 'Your inquiry has been sent. We will get back to you soon.' })
  } catch (err) {
    console.error('[contact-api]', err)
    return res.status(500).json({ error: 'Unable to send your inquiry. Please try again later.' })
  }
})

app.listen(port, () => {
  console.log(`[contact-api] listening on http://localhost:${port}`)
})

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
