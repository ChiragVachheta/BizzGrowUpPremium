import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: 'How long does it take to build and launch a website?',
    a: 'Most local business websites are designed, built, and launched in 15 days or less. After you share your business details, we deliver a working prototype within days, refine it with your feedback, and go live on your domain.',
  },
  {
    q: 'What is included in the ₹7,000 Starter Landing Page package?',
    a: 'The Starter package includes a one-page responsive website, lightning-fast loading, a contact form, mobile-first design, and basic SEO setup. It is ideal for small local businesses that need a quick, professional online presence.',
  },
  {
    q: 'Do you build websites for cafes, contractors, and retail shops?',
    a: 'Yes. We specialize in local business websites for cafes and restaurants, plumbers and electricians, and boutique retail shops. Each template is tailored to the way your customers browse and contact you.',
  },
  {
    q: 'Can I sell products online with the E-Commerce package?',
    a: 'The E-Commerce / Catalog package includes an online store setup with product lists, categories, cart, checkout workflow, and payment gateway integration so you can start selling online.',
  },
  {
    q: 'What happens after my website is launched?',
    a: 'You own the website outright. For ongoing peace of mind, you can add the monthly maintenance plan (₹1,500/month) which covers hosting management, security monitoring, and content updates.',
  },
  {
    q: 'How do I get started with GoBizLive?',
    a: 'Send us a message through the contact form or chat with us on WhatsApp. Tell us about your business and goals, and we will send a free website mockup within 24 hours — no commitment required.',
  },
];

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions About Local Business Web Design
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Everything you need to know about getting your local business online with GoBizLive.
          </p>
        </div>

        <div ref={ref} className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`card-surface overflow-hidden transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-white">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
