import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Smartphone, Linkedin, Github, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [state, handleSubmit] = useForm("mqelgeob");

  // ✅ added: controlled values + validation state
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [localErrors, setLocalErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:shruti3470@gmail.com',
      value: 'shruti3470@gmail.com',
    },
    {
      icon: Smartphone,
      label: 'Phone',
      href: 'tel:+919351255921',
      value: '+91-9351255921',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shrutijain2004',
      value: 'LinkedIn Profile',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ShrutiJain2004',
      value: 'GitHub Profile',
    },
  ];

  // ✅ added: validation helpers
  const validate = (v) => {
    const errors = {};

    const name = (v.name || '').trim();
    const email = (v.email || '').trim();
    const message = (v.message || '').trim();

    if (!name) errors.name = 'Name is required.';
    else if (name.length < 2) errors.name = 'Name must be at least 2 characters.';

    // basic email regex (works well for frontend validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) errors.email = 'Email is required.';
    else if (!emailRegex.test(email)) errors.email = 'Please enter a valid email address.';

    if (!message) errors.message = 'Message is required.';
    else if (message.length < 10) errors.message = 'Message must be at least 10 characters.';

    return errors;
  };

  // keep local errors updated while user types (only show when touched)
  useEffect(() => {
    setLocalErrors(validate(values));
  }, [values]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // clear generic submit error once user edits
    if (submitError) setSubmitError('');
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // ✅ added: wrap submit to block invalid form and show proper messages
  const onSubmit = async (e) => {
    e.preventDefault();

    // mark all fields touched so errors show
    setTouched({ name: true, email: true, message: true });

    const errs = validate(values);
    setLocalErrors(errs);
    setSubmitError('');

    if (Object.keys(errs).length > 0) return;

    try {
      await handleSubmit(e);
      // if succeeded, reset local inputs (Formspree state keeps succeeded flag)
      // reset only when success
      // NOTE: state.succeeded updates after handleSubmit
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  // reset form after success (optional, but makes UX clean)
  useEffect(() => {
    if (state.succeeded) {
      setValues({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      setLocalErrors({});
      setSubmitError('');
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="relative py-20 md:py-12 px-6 bg-slate-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Interested in collaborating or just want to chat? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                      <Icon className="text-cyan-400" size={24} />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">{link.label}</p>
                      <p className="font-semibold text-white">{link.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={onSubmit}
              className="space-y-4"
            >
              {/* ✅ Success message */}
              {state.succeeded && (
                <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-200">
                  Your message has been sent successfully. I’ll get back to you soon!
                </div>
              )}

              {/* ✅ Error message */}
              {!state.succeeded && (submitError || (state.errors && state.errors.length > 0)) && (
                <div className="p-4 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-200">
                  {submitError || 'Submission failed. Please check the form and try again.'}
                </div>
              )}

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  required
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                  placeholder="Your name"
                />
                {/* Formspree validation error (kept) */}
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                {/* ✅ local validation error */}
                {touched.name && localErrors.name && (
                  <p className="mt-2 text-sm text-rose-300">{localErrors.name}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                {touched.email && localErrors.email && (
                  <p className="mt-2 text-sm text-rose-300">{localErrors.email}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  required
                  rows={4}
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                {touched.message && localErrors.message && (
                  <p className="mt-2 text-sm text-rose-300">{localErrors.message}</p>
                )}
              </motion.div>

              <motion.button
                whileHover={state.submitting ? {} : { scale: 1.05, y: -2 }}
                whileTap={state.submitting ? {} : { scale: 0.95 }}
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <>
                    <span>Submitting...</span>
                  </>
                ) : state.succeeded ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>

          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-slate-800 text-center"
          >
            <p className="text-slate-400">
              Feel free to reach out directly through any channel above. Looking forward to connecting with you!
            </p>
          </motion.div>
        </motion.div>
      </div>

      <footer className="relative z-10 mt-12 pt-8 border-t border-slate-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto px-6 py-4 text-center text-slate-500 text-sm"
        >
          <p>© 2025 Shruti Jain. All rights reserved.</p>
        </motion.div>
      </footer>
    </section>
  );
}
