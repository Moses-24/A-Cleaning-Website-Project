import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import founderImg from '../images/founderImg.png';
import kitchenclean from '../images/eseaboutimg.jpg';



const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-ese-blue/100 py-24 text-center">
        <div className="max-w-4xl mx-auto px-5">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-ese-green mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Serving Lekki with excellence, one spotless space at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-ese-teal font-bold uppercase tracking-widest text-sm mb-4 block">How we started</span>
            <h2 className="text-4xl font-display font-bold text-ese-green mb-8">Redefining Cleaning Standards in Lagos</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Ese Cleaning Services was born out of a simple observation: busy professionals in Lekki and surrounding areas struggled to find reliable, high-quality cleaning services that they could truly trust with their homes and offices.
              </p>
              <p>
                We started with a small, dedicated team and a big vision: to bring professional-grade hygiene to every Lagosian home. Today, we have grown into a trusted partner for families, property managers, and business owners who value excellence and consistency.
              </p>
              <p>
                Our name, **Ese**, signifies grace and movement—reflecting the smooth, effortless way we transform messy spaces into serene sanctuaries.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="relative">
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-3">
              <img 
                src="src/images/eseaboutimg.jpg" 
                alt="Cleaning Team" 
                className="w-full h-full object-cover -skew-y-3 scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-ese-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeInUp} className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-ese-teal rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              To deliver clean, healthy, and organized environments that enhance the quality of life and productivity of our clients through professional, reliable, and consistent service.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-ese-teal rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6">Our Vision</h3>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              To become the most trusted and sought-after premium cleaning brand in Lagos, recognized for our commitment to excellence, integrity, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-ese-green mb-4">Our Core Values</h2>
            <p className="text-gray-500">The pillars that sustain our commitment to you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Trust', desc: 'We build relationships based on honesty and transparency.' },
              { icon: Sparkles, title: 'Quality', desc: 'We never settle for "good enough." Only spotless is acceptable.' },
              { icon: Heart, title: 'Care', desc: 'We treat your space with the same respect as our own.' },
              { icon: Target, title: 'Consistency', desc: 'You get the same high standards every single time we visit.' }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-ese-blue/5 hover:bg-ese-blue/10 transition-colors"
              >
                <div className="inline-flex w-16 h-16 rounded-full bg-white shadow-sm items-center justify-center text-ese-teal mb-6">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-ese-green mb-3">{value.title}</h4>
                <p className="text-gray-600 font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section Placeholder */}
<section className="py-24 bg-ese-blue/20">
  <div className="max-w-5xl mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white shrink-0">
        <img 
          src={founderImg} 
          alt="Eseoghene A. - Founder & CEO, Ese Cleaning Services" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div>
        <h2 className="text-3xl font-display font-bold text-ese-green mb-4">A Note from the Founder</h2>
        <p className="text-lg text-gray-600 italic leading-relaxed mb-6">
          "Our goal isn't just to clean floors, but to clear minds. When your space is clean, you can focus on what truly matters—your family, your work, and your peace. Thank you for trusting Ese Cleaning."
        </p>
        <p className="font-bold text-ese-green">Eseoghene A.</p>
        <p className="text-sm text-ese-teal font-semibold uppercase tracking-widest">Founder & CEO</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
