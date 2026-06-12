import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Creaticabud Carpets',
  description: 'How Creaticabud Exports Pvt. Ltd. collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: 'Information We Collect',
    body: `When you engage with Creaticabud, we may collect your name, email address, phone number, company name, country of residence, and the nature of your enquiry. This information is provided voluntarily when you submit a contact form, request a catalogue, or initiate a trade conversation with us.

We may also collect limited technical data through standard server logs — such as your IP address, browser type, and pages visited — solely for the purpose of maintaining the security and performance of our website.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information you provide exclusively to respond to your enquiries, process bespoke orders, send requested catalogues or product information, and maintain our trade and export relationships.

We do not use your information for unsolicited marketing communications. If you opt in to receive updates from us, you may unsubscribe at any time by contacting us directly.`,
  },
  {
    title: 'Sharing of Information',
    body: `Creaticabud does not sell, rent, or trade your personal information to third parties. We may share your information with trusted logistics partners or freight forwarders solely where necessary to fulfil your order — and only to the extent required.

Any third parties we engage are contractually bound to protect your information and may not use it for any purpose beyond fulfilling our instructions.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your contact and order information for as long as necessary to serve you and to comply with our legal obligations under Indian and applicable international trade laws. Where information is no longer required, we securely delete or anonymise it.`,
  },
  {
    title: 'Cookies & Tracking',
    body: `Our website uses only essential cookies necessary for the site to function correctly. We do not use advertising or cross-site tracking cookies. You may disable cookies in your browser settings; however, certain features of the website may not function as intended as a result.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to request access to the personal data we hold about you, to correct any inaccuracies, or to request deletion of your data — subject to any legal obligations we may have to retain it. To exercise these rights, please contact us at Creaticabudcarpets@gmail.com.

For users in the European Economic Area, you may also have rights under the GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.`,
  },
  {
    title: 'Security',
    body: `We take reasonable organisational and technical measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. All data submitted through our website is transmitted over HTTPS.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The date at the top of this page will indicate when the policy was last revised. Continued use of our website following any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    body: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact:\n\nCreaticabud Exports Pvt. Ltd.\nBhadohi · Mirzapur · Delhi, India\nEmail: Creaticabudcarpets@gmail.com\nWhatsApp: +91 98105 25135`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar assembling={true} />
      <main>
        {/* ── Hero Banner ── */}
        <section className="relative bg-navy overflow-hidden min-h-[44vh] flex flex-col justify-end pt-36">
          <div className="carpet-texture opacity-20" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 75% 30%, rgba(184,134,69,0.1) 0%, transparent 55%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/15" />

          <div className="relative z-10 px-6 sm:px-10 md:px-20 pb-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-gold/40" />
              <span className="font-body text-[8.5px] tracking-[0.5em] uppercase text-gold/70 font-semibold">
                Legal
              </span>
            </div>
            <h1
              className="font-display font-normal text-linen leading-[1.05]"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
            >
              Privacy <span className="text-gold italic">Policy</span>
            </h1>
            <p className="font-body font-light text-[13px] text-linen/40 mt-4 tracking-wide">
              Last updated: June 2025
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="bg-ivory relative">
          <div className="carpet-texture opacity-50" />
          <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-10 py-20 md:py-28">

            {/* Intro */}
            <p className="font-body text-[15px] md:text-[16px] leading-[2] text-navy/70 font-light mb-16 border-l-2 border-gold/30 pl-8">
              Creaticabud Exports Pvt. Ltd. ("Creaticabud", "we", "our", or "us") is committed
              to protecting the privacy of our clients, partners, and website visitors. This
              Privacy Policy explains how we collect, use, and safeguard your personal information
              in connection with our website and business activities.
            </p>

            {/* Sections */}
            <div className="flex flex-col gap-14">
              {sections.map(({ title, body }, i) => (
                <div key={title}>
                  {/* Section header */}
                  <div className="flex items-start gap-6 mb-5">
                    <span className="font-display text-[13px] text-gold/50 leading-none mt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <h2 className="font-display font-normal text-[22px] md:text-[26px] text-navy leading-snug">
                      {title}
                    </h2>
                  </div>
                  <div className="pl-10">
                    {body.split('\n\n').map((para, j) => (
                      <p
                        key={j}
                        className="font-body text-[14px] md:text-[15px] leading-[2] text-navy/65 font-light mb-5 last:mb-0 whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {i < sections.length - 1 && (
                    <div className="mt-12 flex items-center gap-4">
                      <div className="flex-1 h-px bg-navy/8" />
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 0L6 4.5L10 5L6 5.5L5 10L4 5.5L0 5L4 4.5L5 0Z" fill="#B88645" opacity="0.4" />
                      </svg>
                      <div className="flex-1 h-px bg-navy/8" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
