import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Building2, Bed, CheckCircle2, Star, ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
import img1 from '../images/ese-bulb_clean-img.PNG';
import img2 from '../images/ese-parlor-img.PNG';
import img3 from '../images/foodroom.PNG';
import img4 from '../images/ese5.PNG';
import heroBg from '../images/hero.jpg';
import residentialImg from '../images/residentHome.jpg';
import officeImg from '../images/office-img.PNG';
import desktopImg from '../images/ese-desktop.PNG';
import uphostryImg from '../images/uphostryimg.jpg';
import kitchenImg from '../images/esekitchenimg.jpg';
import eseclean from '../images/esecleanImg.jpg'


const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
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
  },
  {
    q: "How much does cleaning cost?",
    a: "Prices start from #15,000. But final quote depends on size + services"
  },
  {
    q: "Do you provide cleaning materials?",
    a: "Yes, we bring everything. You dont need to buy anything"
  },
];

function ScallopBottom({ nextColor }: { nextColor: string }) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 block">
        <path
          d="M0,30 C75,60 75,0 150,30 C225,60 225,0 300,30 C375,60 375,0 450,30 C525,60 525,0 600,30 C675,60 675,0 750,30 C825,60 825,0 900,30 C975,60 975,0 1050,30 C1125,60 1125,0 1200,30 L1200,60 L0,60 Z"
          fill={nextColor}
        />
      </svg>
    </div>
  );
}



function Bubbles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-300/70 border-1 border-blue-400/80"
          style={(()  => {
            const size = Math.random() * 20 + 10;
            return {
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: '-50px',
            };
          })()}
          animate={{
            y: [0, 2000],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}


function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 50));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);

  return { count, ref };
}

function useGreeting() {
  const [greeting, setGreeting] = useState('');
  const [location, setLocation] = useState('Lagos');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setLocation(data.city);
      })
      .catch(() => setLocation('Lagos'));
  }, []);

  return { greeting, location };
}

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
  const { greeting, location } = useGreeting();
  const { count: count600, ref: ref600 } = useCountUp(600, 3000);
  const { count: count5, ref: ref5 } = useCountUp(5, 5000);

  return (
    <div className="flex flex-col relative">
      <Bubbles />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Ese Cleaning Services - Professional Cleaning in Lekki"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ese-green/50" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              {...shakeAnimation}
              className="heading-1 mb-4 leading-[1.1] tracking-tighter text-gray-100"
            >
            Your <span className='text-ese-teal bg-white px-4 rounded-xl inline-block text-[0.9em] '>Space, </span> Spotless.  <br/> Your Health,    
             <span className='text-ese-teal bg-white px-4 rounded-xl  inline-block text-[0.9em]'> Protected. </span>
            </motion.h1>
            <p className="text-xl md:text-1xl mb-5 max-w-1x1 mx-auto text-gray-200 font-light leading-relaxed tracking-tight lg:tracking-normal">
              Experience the gold standard of hygiene for your homes, offices, and short-lets today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/booking" className="bg-ese-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-ese-green hover:text-white transition-all shadow-2xl hover:scale-105 transform">
                Book Cleaning Now!
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-60" />
        </div>
      </section>

      {/* Greeting Banner */}
      <div className="bg-ese-teal/10 py-4 text-center border-b border-ese-teal/20 relative z-10">
        <p className="text-ese-green font-semibold text-lg">
         {greeting}, visitor from <span className="text-ese-teal font-bold">{location}</span>! 
        </p>
      </div>

      
      {/* Intro Section */}
      <section className="py-15 bg-ese-blue/35 relative z-10 b-12">
        <div className="max-w-7x2 mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-22 items-center">
            <motion.div {...fadeInUp}>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="subhead-label mb-10 block"
              >
                Welcome to Ese Cleaning
              </motion.span>
              <motion.h2
                {...shakeAnimation}
                className="heading-2 mb-6 leading-tight tracking-tight"
              >
                Why 600+ Lagosians Choose Ese Cleaning..
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
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src={desktopImg}
                  alt="Professional Cleaner in Nigeria"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ese-green/40 to-transparent" />
              </div>
              {/* Bottom left card */}
              <div ref={ref600} className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-x3 w-[200px] border border-teal-500">
                <p className="text-3xl font-display font-bold text-ese-green mb-1">{count600}+</p>
                <p className="text-gray-500 font-medium leading-tight text-sm">Happy Clients Across Lekki & Lagos</p>
              </div>
              {/* Bottom right card */}
              <div ref={ref5} className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-x3 w-[200px] border border-teal-500">
                <p className="text-3xl font-display font-bold text-ese-green mb-1">{count5}+</p>
                <p className="text-gray-500 font-medium leading-tight text-sm">Years Of Cleaning Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
        <ScallopBottom nextColor="#ffffff" />
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              {...fadeInUp}
              className="text-4xl font-display font-bold text-ese-green mb-4"
            >
              What We Clean?
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto">From post-construction to daily maintenance. Transparent pricing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: 'Residential Cleaning', desc: 'Bedrooms, kitchens, bathrooms. Deep clean for your entire home, Starting from #25,000.', img: residentialImg },
              { icon: Building2, title: 'Office Cleaning', desc: 'Corporate offices, coworking spaces, retail shops.', img: officeImg },
              { icon: Bed, title: 'Airbnb/Short-let', desc: 'Quick turnaround cleaning for your guest apartments.', img: uphostryImg },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-3xl bg-ese-green border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-ese-green backdrop-blur rounded-2xl flex items-center justify-center text-ese-teal shadow-lg">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed tracking-tight">{service.desc}</p>
                  <Link to="/services" className="text-ese-teal font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Explore Service 
                    <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                    <ArrowRight size={20} />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <ScallopBottom nextColor="#ffffff" />
      </section>

{/* Marquee Strip */}
      <div className="bg-ese-green py-4 overflow-hidden whitespace-nowrap relative z-10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="inline-flex gap-12 text-white font-bold text-lg uppercase tracking-widest"
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex gap-12">
              <span>⭐ Professional Cleaning</span>
              <span>✨ Lekki & Lagos</span>
              <span>🏠 Residential Cleaning</span>
              <span>🏢 Office Cleaning</span>
              <span>🛁 Deep Cleaning</span>
              <span>🛏️ Airbnb Cleaning</span>
              <span>🌿 Eco-Friendly Products</span>
              <span>💯 100% Satisfaction</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Recent Work Gallery */}
<section className="py-10 bg-ese-blue/20 relative z-10 pb-12">
  <div className="max-w-7xl mx-auto px-15">
    <div className="text-center mb-16">
      <motion.h2
        {...shakeAnimation}
        className="text-4xl font-display font-bold text-ese-green mb-4 tracking-tight"
      >
        Recent Projects in Lagos
      </motion.h2>
      <p className="text-gray-500 tracking-tight">Real photos from our recent residential and commercial cleanings.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:max-w-3x2 md:mx-auto">
      {[
        { src: img1, label: 'Bulb Cleaning' },
        { src: img2, label: 'Parlor Cleaning' },
        { src: img3, label: 'Food Room Cleaning' },
        { src: img4, label: 'Dining Room Cleaning' },
        { src: kitchenImg, label: 'Kitchen Cleaning' },
        { src: eseclean, label: 'Deep Clean' },
      ].map((image) => (
        <motion.div
          key={image.label}
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
        href="https://www.google.com/maps/search/Ese+Cleaning+Services+LTD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-ese-teal text-ese-teal rounded-full font-bold hover:bg-ese-teal hover:text-white transition-all shadow-md hover:shadow-xl group"
      >
        View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      
<section className="py-10 bg-ese-green/70 overflow-hidden relative z-10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-display font-bold text-white mb-4">What Our Clients Say</h2>
      <p className="text-teal-500">5-Star Reviews From Real Customers.</p>
    </div>
    <motion.div
      className="flex gap-8 cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ right: 0, left: -1200 }}
      whileTap={{ cursor: 'grabbing' }}
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      whileHover={{ animationPlayState: 'paused' }}
    >
      {[...Array(2)].map((_, repeatIndex) => (
        <div key={repeatIndex} className="flex gap-8 shrink-0">
          {[
            { name: 'Olawale Adenuga', role: 'Airbnb Host, Lekki', text: 'Ese Cleaning has been a lifesaver for my shortlets. They are punctual and their attention to detail is unmatched. Highly recommended!' },
            { name: 'Chidinma Okechukwu', role: 'Busy Professional', text: 'I love coming home to a spotless house every Friday. Their staff are friendly and very professional. God bless your business!' },
            { name: 'Tunde Bakare', role: 'Tech Founder, VI', text: 'Best office cleaning service in Lagos. They transformed our space and keep it consistently clean every week.' },
            { name: 'Amaka Okonkwo', role: 'Homeowner, Ajah', text: 'Very thorough and professional. They cleaned every corner of my home and left it smelling fresh. Will definitely book again!' },
            { name: 'Emeka Nwosu', role: 'Property Manager, Ikoyi', text: 'I manage 6 apartments and Ese Cleaning handles all of them. Reliable, affordable and always on time. Best decision ever!' }
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm shrink-0 w-[320px]"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"{review.text}"</p>
              </div>
              <div>
                <h4 className="font-bold text-ese-green">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-10 bg-ese-green/12 relative z-10 pb-12">
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
        <ScallopBottom nextColor="#ffffff" />
      </section>

      {/* Final CTA */}
      <section className="py-10 bg-white relative z-15">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            {...fadeInUp}
            className="bg-ese-green rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ese-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready for a spotless space?</h2>
              <p className="text-xl text-ese-teal/100 mb-10 max-w-xl mx-auto font-light">
                Join 600+ satisfied customers in Lagos. Get a quote in 2 minutes Today!!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking" className="bg-white text-ese-green px-10 py-5 rounded-full font-bold text-lg hover:bg-ese-teal hover:text-white transition-all shadow-xl hover:scale-105 transform">
                  Book Now!
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
