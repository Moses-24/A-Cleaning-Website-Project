import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Clock, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import img1 from '../images/ese-bulb_clean-img.PNG';
import img2 from '../images/ese-parlor-img.PNG';
import img3 from '../images/foodroom.PNG';
import img4 from '../images/ese5.PNG';
import heroBg from '../images/hero.jpg';
import sec1Img from '../images/ese-sec1-img.jpg';
import residentialImg from '../images/residentHome.jpg';
import officeImg from '../images/office-img.PNG';
import airbnbImg from '../images/Airbnb.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

const shakeAnimation = {
  animate: {
    y: [0, -5, 5, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut"
    }
  }
};

const faqs = [
  {
    q: "Why do I need a professional cleaning service?",
    a: "Professional cleaners use industrial-grade equipment and specialized solutions to remove deep-seated dirt, allergens, and bacteria that regular cleaning often misses. It also saves you valuable time and ensures a healthier living environment."
  },
  {
    q: "Do you handle my properties with care?",
    a: "Absolutely. Our team is trained in high-end property maintenance. We use appropriate cleaning agents for different surfaces (marble, wood, leather) to ensure nothing is damaged while achieving a perfect shine."
  },
  {
    q: "Are your cleaning products safe for kids and pets?",
    a: "Yes, we prioritize eco-friendly and non-toxic cleaning supplies that are powerful against dirt but gentle on your family and pets."
  },
  {
    q: "Can I schedule a cleaning for the same day?",
    a: "We recommend booking at least 24-48 hours in advance, but we do offer emergency same-day services in Lekki and VI depending on staff availability. Contact us on WhatsApp for urgent requests!"
  },
  {
    q: "What happens if I'm not satisfied with the cleaning?",
    a: "Customer satisfaction is our core value. If you're not 100% happy with any part of our service, notify us within 24 hours, and we will send a team back to re-clean the area at no extra cost."
  }
];

function FAQItem({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button 
        onClick={onClick}
        className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-ese-blue/5"
      >
        <span className="text-xl font-bold text-ese-green pr-4">{faq.q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full border-2 border-ese-teal flex items-center justify-center text-ese-teal font-bold text-xl transition-all duration-300 ${isOpen ? 'bg-ese-teal text-white rotate-180 shadow-lg scale-110' : 'rotate-0'}`}>
          {isOpen ? '−' : '+'}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-gray-600 leading-relaxed font-light border-t border-gray-50">
          {faq.a}
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Ese Cleaning Services - Professional Cleaning in Lekki" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ese-green/60" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              {...shakeAnimation}
              className="font-display text-5xl md:text-8xl font-bold mb-6 leading-[1.1] tracking-tighter"
            >
              Professional Cleaning <br className="hidden md:block" /> 
              Services in <span className="text-ese-teal bg-white px-4 rounded-xl rotate-1 inline-block text-[0.9em]">Lekki, Lagos</span> You Can Trust
            </motion.h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 font-light leading-relaxed tracking-tight lg:tracking-normal">
              Experience the gold standard of hygiene for your homes, offices, and short-let apartments across Lagos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-white text-ese-green px-10 py-5 rounded-full font-bold text-lg hover:bg-ese-teal hover:text-white transition-all shadow-2xl hover:scale-105 transform">
                Book Now
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-60" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-ese-blue/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-ese-teal font-bold uppercase tracking-widest text-sm mb-4 block"
              >
                Welcome to Ese Cleaning
              </motion.span>
              <motion.h2 
                {...shakeAnimation}
                className="text-4xl md:text-5xl font-display font-bold text-ese-green mb-6 leading-tight tracking-tight"
              >
                Your Preferred Choice for Hygiene and Spotless Spaces
              </motion.h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed tracking-tight">
                At Ese Cleaning Services, we understand that a clean environment is the foundation of a healthy and productive life. 
                Whether it's your luxury apartment in Lekki or your corporate office in VI, we bring professional standards and a personal touch to every space we clean.
              </p>
              <div className="space-y-4">
                {['Trained & Vetted Staff', 'Eco-friendly Cleaning Supplies', '100% Satisfaction Guarantee'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-ese-dark font-medium">
                    <CheckCircle2 className="text-ese-teal" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src={sec1Img} 
                  alt="Professional Cleaner in Nigeria" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ese-green/40 to-transparent" />
              </div>
              {/* Bottom left card */}
<div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl w-[200px] border border-gray-100">
  <p className="text-3xl font-display font-bold text-ese-green mb-1">600+</p>
  <p className="text-gray-500 font-medium leading-tight text-sm">Happy clients across Lekki & Lagos</p>
</div>

{/* Bottom right card */}
<div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl w-[200px] border border-gray-100">
  <p className="text-3xl font-display font-bold text-ese-green mb-1">5+</p>
  <p className="text-gray-500 font-medium leading-tight text-sm">Years of cleaning experience</p>
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl font-display font-bold text-ese-green mb-4"
            >
              Our Specialty Services
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From post-construction to daily maintenance, we've got you covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Residential Cleaning', desc: 'Detailed cleaning for your home, from bedrooms to kitchens.', img: residentialImg },
              { icon: ShieldCheck, title: 'Office Cleaning', desc: 'Professional maintenance for corporate spaces and hubs.', img: officeImg },
              { icon: Clock, title: 'Airbnb/Short-let', desc: 'Quick turnaround cleaning for your guest apartments.', img: airbnbImg }
            ].map((service, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-ese-teal shadow-lg">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ese-green mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed tracking-tight">{service.desc}</p>
                  <Link to="/services" className="text-ese-teal font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Explore Service <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Gallery */}
      <section className="py-24 bg-ese-blue/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              {...shakeAnimation}
              className="text-4xl font-display font-bold text-ese-green mb-4 tracking-tight"
            >
              Recent Projects in Lagos
            </motion.h2>
            <p className="text-gray-500 tracking-tight">Real photos from our recent residential and commercial cleanings.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: img1, label: 'Bulb Cleaning' },
              { src: img2, label: 'Parlor Cleaning' },
              { src: img3, label: 'Food Room Cleaning' },
              { src: img4, label: 'Project 4' },
            ].map((image, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100"
              >
                <img 
                  src={image.src} 
                  alt={`Ese Cleaning - ${image.label}`} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/search/Ese+Cleaning+Services+Lekki+Lagos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-ese-teal text-ese-teal rounded-full font-bold hover:bg-ese-teal hover:text-white transition-all shadow-md hover:shadow-xl group"
            >
              View Verified Projects on Google Maps <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-ese-blue/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-ese-green mb-4">What Our Clients Say</h2>
            <p className="text-gray-500">Real reviews from our loyal customers across Lagos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Olawale Adenuga', role: 'Airbnb Host, Lekki', text: 'Ese Cleaning has been a lifesaver for my shortlets. They are punctual and their attention to detail is unmatched. Highly recommended!' },
              { name: 'Chidinma Okechukwu', role: 'Busy Professional', text: 'I love coming home to a spotless house every Friday. Their staff are friendly and very professional. God bless your business!' },
              { name: 'Tunde Bakare', role: 'Tech Founder, VI', text: 'Best office cleaning service in Lagos. They transformed our space and keep it consistently clean every week.' }
            ].map((review, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-[#FFD700] text-[#FFD700]" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"{review.text}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-ese-green">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ese-green/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <motion.h2 
              {...shakeAnimation}
              className="text-4xl font-display font-bold text-ese-green mb-4 tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-gray-500 tracking-tight">Everything you need to know about our services.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                faq={faq} 
                isOpen={openFaq === i} 
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-ese-green rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ese-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready for a spotless space?</h2>
              <p className="text-xl text-ese-blue/80 mb-10 max-w-xl mx-auto font-light">
                Join hundreds of satisfied customers in Lekki who trust us with their hygiene. Get your free personalized quote today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="bg-white text-ese-green px-10 py-5 rounded-full font-bold text-lg hover:bg-ese-teal hover:text-white transition-all shadow-xl hover:scale-105 transform">
                  Book Your Cleaning
                </Link>
                <Link to="/contact" className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}