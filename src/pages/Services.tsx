import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Building2, Home, Construction, Truck, Bed, Sofa, Waves, Utensils, Zap, Bug } from 'lucide-react';
import kitchenclean from '../images/kitchenclean.PNG';
import officeImg from '../images/office-img.PNG';
import deepImg from '../images/beddeep-img.PNG';
import constructionImg from '../images/p-construction.PNG';
import moveImg from '../images/inoutimg.PNG';
import airbnbImg from '../images/Airbnb.jpg';
import uphostryImg from '../images/uphostryimg.jpg';
import fumigationImg from '../images/fumigatingimg.PNG';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Cleaning',
    desc: 'Bespoke cleaning services for your Lekki home. We handle dusting, vacuuming, mopping, and comprehensive kitchen/bathroom cleaning.',
    benefits: ['Expert dusting', 'Floor sanitation', 'Trash removal', 'Kitchen degreasing'],
    img: kitchenclean
  },
  {
    id: 'office',
    icon: Building2,
    title: 'Office Cleaning',
    desc: 'Keep your workspace productive and professional. We offer daily, weekly, or monthly maintenance for corporate offices in VI and Ikoyi.',
    benefits: ['Desk sanitation', 'Window cleaning', 'Restroom maintenance', 'Communal area care'],
    img: officeImg
  },
  {
    id: 'deep',
    icon: Sparkles,
    title: 'Deep Cleaning',
    desc: 'A heavy-duty, top-to-bottom clean. Recommended for homes or offices that haven\'t been professionally cleaned in over 3 months.',
    benefits: ['Deep carpet scrubbing', 'Tile grout cleaning', 'Baseboard detailing', 'Appliance interior cleaning'],
    img: deepImg
  },
  {
    id: 'post-construction',
    icon: Construction,
    title: 'Post-Construction Cleaning',
    desc: 'Just finished a renovation or new build? We remove dust, paint splatters, and debris to make your new space move-in ready.',
    benefits: ['Cement/paint removal', 'Dust extraction', 'Detailed window scraping', 'Industrial vacuuming'],
    img: constructionImg
  },
  {
    id: 'move-in-out',
    icon: Truck,
    title: 'Move-in / Move-out Cleaning',
    desc: 'Moving is stressful enough. Let us handle the cleaning so you can focus on settling into your new Lekki apartment.',
    benefits: ['Cabinet cleaning', 'Sanitary overhaul', 'Floor polishing', 'Wall spot cleaning'],
    img: moveImg
  },
  {
    id: 'airbnb',
    icon: Bed,
    title: 'Airbnb / Short-let Cleaning',
    desc: 'Maintain your Superhost status with our rapid-turnaround cleaning service designed specifically for Lagos short-let apartments.',
    benefits: ['Laundry & linen change', 'Welcome kit setup', 'Restroom sanitation', 'General tidying'],
    img: airbnbImg
  },
  {
    id: 'upholstery',
    icon: Sofa,
    title: 'Upholstery & Sofa Cleaning',
    desc: 'Breathe new life into your furniture. We use specialized equipment to steam and sanitize your sofas, mattresses, and armchairs.',
    benefits: ['Stain removal', 'Odor neutralization', 'Fabric conditioning', 'Deep steam'],
    img: uphostryImg
  },
  {
    id: 'fumigation',
    icon: Bug,
    title: 'Fumigation & Pest Control',
    desc: 'Protect your property from pests. Our safe and effective fumigation services target mosquitoes, cockroaches, termites, and more.',
    benefits: ['Eco-friendly chemicals', 'Long-lasting protection', 'Targeted treatment', 'Safety-first approach'],
    img: fumigationImg
  }
];

export default function Services() {
  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-ese-green py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Expert Cleaning for Every Space</h1>
            <p className="text-xl text-ese-blue/80 font-light max-w-2xl mx-auto">
              From luxury apartments to corporate headquarters, we bring world-class hygiene standards to the heart of Lagos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-ese-green/20" />
                  </div>
                  <div className="lg:w-3/5 p-10 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-ese-blue flex items-center justify-center rounded-xl text-ese-green mb-6">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-ese-green mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 font-light leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="grid grid-cols-1 gap-2 mb-8">
                        {service.benefits.map((b, bi) => (
                          <li key={bi} className="flex items-center gap-2 text-sm text-ese-teal font-medium">
                            <Zap size={14} className="fill-ese-teal" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      to="/booking" 
                      className="inline-flex items-center justify-center bg-ese-green text-white py-3 rounded-xl font-bold hover:bg-ese-teal transition-colors"
                    >
                      Book this service
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Minor Services */}
      <section className="py-24 bg-ese-blue/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-ese-green mb-4">Wait, there's more!</h2>
            <p className="text-gray-500">We also provide specialized attention for specific needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Utensils, title: 'Kitchen Intensive', desc: 'Deep degreasing and appliance detailing.' },
              { icon: Waves, title: 'Carpet Cleaning', desc: 'Industrial steam cleaning for all rugs.' },
              { icon: Sparkles, title: 'Mirror & Glass', desc: 'Streak-free polishing for all windows.' },
              { icon: Zap, title: 'Pre-Party Clean', desc: 'Get your space party-ready in hours.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex w-14 h-14 bg-ese-teal/10 rounded-2xl items-center justify-center text-ese-teal mb-6">
                  <s.icon size={28} />
                </div>
                <h4 className="font-bold text-ese-green mb-2">{s.title}</h4>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-ese-teal rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Not sure which service you need?</h2>
              <p className="text-xl text-white/80 font-light">
                Our experts are here to help you choose the best cleaning plan for your space. Contact us for a free site assessment today.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 w-full">
              <Link to="/contact" className="bg-white text-ese-teal px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-ese-dark hover:text-white transition-all shadow-xl">
                Speak with an expert
              </Link>
              <Link to="/booking" className="bg-ese-green text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-ese-dark transition-all">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
