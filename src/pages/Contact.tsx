import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'cc401a9d-70a9-4f4d-87ad-5ecab5aadbe2',
          subject: 'New Contact Form Submission - Ese Cleaning Services',
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-ese-blue/100 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-ese-green mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Have questions or need a custom quote? We're just a message away.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-display font-bold text-ese-green mb-8">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-ese-teal rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-ese-teal/20">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-ese-green mb-2">Our Office</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Lekki Phase 1, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-ese-teal rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-ese-teal/20">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-ese-green mb-2">Call or WhatsApp</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      0907 824 4276<br />
                      Available 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-ese-teal rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-ese-teal/20">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-ese-green mb-2">Email Address</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      officialesecleaningservices@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-10 bg-ese-blue/20 rounded-[2rem] border border-ese-teal/10">
                <h3 className="text-2xl font-bold text-ese-green mb-4">Follow us on Socials</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', url: 'https://www.instagram.com/ese_cleaning_services/' },
                    { name: 'Facebook', url: 'https://www.facebook.com/p/Ese-Cleaning-Services-100063239768308/' },
                  ].map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white rounded-full text-ese-green font-bold text-sm shadow-sm hover:bg-ese-green hover:text-white transition-all"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              className="bg-ese-dark p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
            >
              <h3 className="text-3xl font-display font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white focus:bg-white/20 focus:border-ese-teal transition-all outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white focus:bg-white/20 focus:border-ese-teal transition-all outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white focus:bg-white/20 focus:border-ese-teal transition-all outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white focus:bg-white/20 focus:border-ese-teal transition-all outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-ese-teal text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:text-ese-green transition-all shadow-xl disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
                </button>

                {status === 'success' && (
                  <p className="text-ese-teal text-center font-semibold">Message sent! We'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center font-semibold">Something went wrong. Please try again or WhatsApp us.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map - Ese Cleaning Services Exact Location */}
      <section className="h-96 w-full overflow-hidden">
        <iframe
          title="Ese Cleaning Services - Lekki, Lagos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.721!2d3.4777599!3d6.4354035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfb2cd47144fb%3A0xfaf61d87e763219e!2sEse%20Cleaning%20Services!5e0!3m2!1sen!2sng!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-ese-green text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageCircle size={64} className="mx-auto mb-8 text-ese-teal" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Need an Instant Response?</h2>
          <p className="text-xl text-ese-blue/80 mb-10 font-light">
            Chat with a support representative on WhatsApp for immediate assistance regarding your cleaning needs.
          </p>
          <a
            href="https://wa.me/2349078244276"
            className="inline-block bg-white text-ese-green px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-ese-teal hover:text-white transition-all transform hover:scale-105"
          >
            Chat with us Now
          </a>
        </div>
      </section>
    </div>
  );
}