import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, MapPin, ClipboardList, Send, CheckCircle } from 'lucide-react';

export default function Booking() {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-ese-blue/10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <div className="w-24 h-24 bg-ese-teal rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-lg">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-display font-bold text-ese-green mb-4">Booking Received!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for choosing Ese Cleaning. Our team will review your request and contact you via phone or WhatsApp within the next 30 minutes to confirm your appointment.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="bg-ese-green text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-ese-teal transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-ese-blue/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-ese-green mb-6 leading-tight">
              Book Your Spotless <br /><span className="text-ese-teal">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 font-light mb-10 leading-relaxed">
              Fill out the form to schedule a cleaning or request a customized quote. We serve Lekki, VI, Ajah, and beyond.
            </p>

            <div className="space-y-8">
              {[
                { icon: CheckCircle, title: 'No Hidden Fees', desc: 'The price we quote is the price you pay.' },
                { icon: CheckCircle, title: 'Flexible Scheduling', desc: 'Choose a date and time that suits your lifestyle.' },
                { icon: CheckCircle, title: 'Verified Professionals', desc: 'Secure and trustworthy staff for your peace of mind.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-ese-teal/10 rounded-full flex items-center justify-center text-ese-teal">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ese-green text-lg">{item.title}</h4>
                    <p className="text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-ese-green rounded-3xl text-white">
              <p className="text-sm uppercase tracking-widest opacity-60 mb-2 font-bold">Direct Support</p>
              <h3 className="text-2xl font-bold mb-2">Need a last-minute clean?</h3>
              <p className="text-ese-blue/80 mb-6">Chat with us directly on WhatsApp for emergency or same-day cleaning services.</p>
              <a 
                href="https://wa.me/2349078244276" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ese-green px-6 py-3 rounded-xl font-bold hover:bg-ese-teal hover:text-white transition-all shadow-lg"
              >
                Message us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
            <div 
              className="h-full bg-ese-teal transition-all duration-500" 
              style={{ width: `${(formStep / 2) * 100}%` }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {formStep === 1 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-ese-teal text-white flex items-center justify-center font-bold">1</div>
                  <h3 className="text-2xl font-bold text-ese-green">Basic Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Doe"
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-ese-teal transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="tel" 
                        placeholder="e.g. 0907 824 4276"
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-ese-teal transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select 
                        required
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-ese-teal transition-all outline-none appearance-none"
                      >
                        <option value="">Select your area</option>
                        <option value="lekki1">Lekki Phase 1</option>
                        <option value="lekki2">Lekki Phase 2</option>
                        <option value="vi">Victoria Island</option>
                        <option value="ajah">Ajah / Abraham Adesanya</option>
                        <option value="ikoyi">Ikoyi</option>
                        <option value="other">Other (Please specify in notes)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => setFormStep(2)}
                  className="w-full bg-ese-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-ese-teal transition-all flex items-center justify-center gap-2"
                >
                  Continue to Details <ArrowRight size={20} />
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                 <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-ese-teal text-white flex items-center justify-center font-bold">2</div>
                  <h3 className="text-2xl font-bold text-ese-green">Service Details</h3>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Service Type</label>
                    <div className="relative">
                      <ClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <select 
                        required
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-ese-teal transition-all outline-none appearance-none"
                      >
                        <option value="">Choose a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="office">Office Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="post-con">Post-Construction</option>
                        <option value="airbnb">Airbnb / Short-let</option>
                        <option value="upholstery">Upholstery & Sofa</option>
                        <option value="fumigation">Fumigation</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="date" 
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-ese-teal transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Additional Notes</label>
                    <textarea 
                      placeholder="Any specific instructions or apartment details..."
                      rows={4}
                      className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-ese-teal transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="flex-1 bg-gray-100 text-gray-600 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                  >
                    Back
                  </button>
                  <button 
                    disabled={isSubmitting}
                    className="flex-[2] bg-ese-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-ese-teal transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                    <Send size={20} />
                  </button>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
