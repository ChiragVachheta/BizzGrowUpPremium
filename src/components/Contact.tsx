import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { COMPANY, waLink } from '@/lib/site';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = Partial<Record<'businessName' | 'phone' | 'requirements', string>>;

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({
    businessName: '',
    phone: '',
    email: '',
    requirements: '',
  });

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.businessName.trim()) e.businessName = 'Please enter your business name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number.';
    if (!form.requirements.trim()) e.requirements = 'Tell us what you need.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    const payload = {
      business_name: form.businessName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || 'Not provided',
      requirements: form.requirements.trim(),
    };
    try {
      // 1. Save to database — this is the primary success criteria
      const { error: dbError } = await supabase.from('contact_submissions').insert({
        business_name: payload.business_name,
        phone: payload.phone,
        email: form.email.trim() || null,
        requirements: payload.requirements,
      });
      if (dbError) throw dbError;

      // 2. Email notification via FormSubmit (best-effort, non-blocking)
      //    If this fails (e.g. not yet activated), the data is still saved.
      const formData = new FormData();
      formData.append('business_name', payload.business_name);
      formData.append('phone', payload.phone);
      formData.append('email', payload.email);
      formData.append('requirements', payload.requirements);
      formData.append('_subject', `New enquiry from ${payload.business_name} — BizGrowUp`);
      formData.append('_template', 'table');

      fetch(`https://formsubmit.co/ajax/${COMPANY.email}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      }).catch(() => {});

      setStatus('success');
      setForm({ businessName: '', phone: '', email: '', requirements: '' });
    } catch {
      setStatus('error');
    }
  };

  const field = (name: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [name]: e.target.value }));
      if (errors[name as keyof Errors]) setErrors((er) => ({ ...er, [name]: undefined }));
    };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <span className="eyebrow">Let's Talk</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get Your Free Website Mockup
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Tell us about your business and we'll send a free mockup — no commitment, no cost. Reach us directly on WhatsApp or email, or send the form and we'll get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={waLink('Hi BizGrowUp! I have a question about getting a website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink-850/80 p-4 transition-colors hover:border-brand-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">WhatsApp</p>
                  <p className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {COMPANY.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink-850/80 p-4 transition-colors hover:border-accent-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Mail className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                  <p className="truncate text-base font-semibold text-white group-hover:text-accent-300 transition-colors">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-850/80 p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-slate-200">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Phone</p>
                  <p className="text-base font-semibold text-white">{COMPANY.whatsappDisplay}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="card-surface p-6 sm:p-8 shadow-card">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-brand-400" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">Message Sent!</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-200">Business Name *</label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={field('businessName')}
                    placeholder="e.g. Sharma Electricals"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-brand-400/50 focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                  />
                  {errors.businessName && <p className="mt-1.5 text-xs text-red-400">{errors.businessName}</p>}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-200">Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={field('phone')}
                      placeholder="+91 98xxx xxxxx"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-brand-400/50 focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200">Email <span className="text-slate-500">(optional)</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={field('email')}
                      placeholder="you@business.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-brand-400/50 focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200">Requirements *</label>
                  <textarea
                    rows={4}
                    value={form.requirements}
                    onChange={field('requirements')}
                    placeholder="Tell us about your business and what kind of website you need..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-brand-400/50 focus:outline-none focus:ring-1 focus:ring-brand-400/40"
                  />
                  {errors.requirements && <p className="mt-1.5 text-xs text-red-400">{errors.requirements}</p>}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong. Please try again or message us on WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500">
                  Your details go straight to {COMPANY.email}. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
