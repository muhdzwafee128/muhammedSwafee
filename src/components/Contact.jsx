import { useState, useRef } from 'react';
import { Send, Mail, Linkedin, Github, Download, Loader2, CheckCircle, AlertCircle, Info } from 'lucide-react';
import portfolio from '../data/portfolio';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', botcheck: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const nameInputRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          botcheck: form.botcheck ? true : false,
          subject: `New Message from ${form.name.trim()} via Portfolio`,
          from_name: 'Muhammed Swafee Portfolio',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', botcheck: false });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please try again or email directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try again or email directly.');
    }
  };

  const isFormConfigured = Boolean(
    WEB3FORMS_ACCESS_KEY &&
      WEB3FORMS_ACCESS_KEY.trim() !== '' &&
      WEB3FORMS_ACCESS_KEY !== 'your_web3forms_access_key_here',
  );

  const handleFocusForm = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
      nameInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-16 md:py-24 scroll-mt-20 border-t border-light-border dark:border-dark-borderSubtle"
    >
      <div className="section-container">
        {/* Neeraj-Inspired "LET'S WORK TOGETHER." Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-light-textPrimary dark:text-dark-textPrimary mb-4 sm:mb-6">
            {portfolio.contactHeadline || "LET'S WORK TOGETHER."}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-6 sm:mb-8">
            {portfolio.contactSupportingText ||
              "I'm always open to exciting projects, freelance opportunities, internships and collaborations. If you have an idea or would like to connect, feel free to reach out."}
          </p>

          {/* Contact Action Buttons & Monochrome Socials */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={handleFocusForm}
              className="btn-primary h-12 px-6"
            >
              <span>Get in Touch</span>
              <Mail size={16} />
            </button>

            {/* Download Resume Action */}
            <a
              href={portfolio.resumePath}
              download
              className="btn-secondary h-12 px-6"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            {/* Monochrome Social Icons */}
            <div className="flex items-center gap-2.5 sm:ml-2">
              <a
                href={`mailto:${portfolio.email}`}
                aria-label="Send Email to Muhammed Swafee"
                className="h-12 w-12 rounded-xl border border-light-border dark:border-dark-border
                           bg-white/60 dark:bg-dark-card/60
                           text-light-textSecondary dark:text-dark-textSecondary
                           hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                           hover:border-zinc-400 dark:hover:border-zinc-500
                           flex items-center justify-center
                           transition-colors focus-ring"
              >
                <Mail size={18} />
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Muhammed Swafee's LinkedIn Profile"
                className="h-12 w-12 rounded-xl border border-light-border dark:border-dark-border
                           bg-white/60 dark:bg-dark-card/60
                           text-light-textSecondary dark:text-dark-textSecondary
                           hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                           hover:border-zinc-400 dark:hover:border-zinc-500
                           flex items-center justify-center
                           transition-colors focus-ring"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Muhammed Swafee's GitHub Profile"
                className="h-12 w-12 rounded-xl border border-light-border dark:border-dark-border
                           bg-white/60 dark:bg-dark-card/60
                           text-light-textSecondary dark:text-dark-textSecondary
                           hover:text-light-textPrimary dark:hover:text-dark-textPrimary
                           hover:border-zinc-400 dark:hover:border-zinc-500
                           flex items-center justify-center
                           transition-colors focus-ring"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Contact Form */}
        <div className="max-w-2xl">
          <div className="glass-card p-6 sm:p-8">
            {!isFormConfigured ? (
              /* Setup required state */
              <div className="text-center py-6">
                <div className="w-11 h-11 rounded-2xl bg-zinc-200 dark:bg-zinc-800 text-light-textPrimary dark:text-dark-textPrimary flex items-center justify-center mx-auto mb-3.5">
                  <Info size={22} />
                </div>
                <h3 className="font-display font-bold text-light-textPrimary dark:text-dark-textPrimary text-base sm:text-lg mb-2">
                  Web3Forms Configuration Required
                </h3>
                <p className="text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary max-w-md mx-auto mb-5 leading-relaxed">
                  To receive messages directly to your email, generate a free access key at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">web3forms.com</a> and configure <code className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-xs font-mono">VITE_WEB3FORMS_ACCESS_KEY</code> in your <code className="text-xs font-mono">.env</code> file.
                </p>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="btn-primary"
                >
                  <Mail size={16} />
                  <span>Email Me Directly</span>
                </a>
              </div>
            ) : status === 'success' ? (
              /* Success state */
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-2xl bg-zinc-200 dark:bg-zinc-800 text-light-textPrimary dark:text-dark-textPrimary flex items-center justify-center mx-auto mb-3.5">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-display font-bold text-light-textPrimary dark:text-dark-textPrimary text-lg mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-5">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs sm:text-sm font-semibold underline text-light-textPrimary dark:text-dark-textPrimary hover:opacity-80 transition-opacity focus-ring rounded-lg px-2 py-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for Web3Forms spam prevention (hidden from real users) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={form.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-zinc-900/70
                               border ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-light-border dark:border-dark-border'}
                               text-light-textPrimary dark:text-dark-textPrimary text-sm sm:text-base
                               placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                               focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100
                               transition-colors`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-zinc-900/70
                               border ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-light-border dark:border-dark-border'}
                               text-light-textPrimary dark:text-dark-textPrimary text-sm sm:text-base
                               placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                               focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100
                               transition-colors`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-zinc-900/70
                               border ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-light-border dark:border-dark-border'}
                               text-light-textPrimary dark:text-dark-textPrimary text-sm sm:text-base
                               placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                               focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100
                               transition-colors resize-y min-h-[100px]`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm"
                    role="alert"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{errorMessage || 'Failed to send message. Please try again or email directly.'}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full sm:w-auto mt-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
