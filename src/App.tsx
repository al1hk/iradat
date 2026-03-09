import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Droplets, Sparkles, ArrowRight, Menu, X, Beaker } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#fdfbf7]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
            <Leaf size={20} />
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide text-brand-dark">
            IRADAT
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-brand-dark/80">
          <a href="#skincare" className="hover:text-brand-green transition-colors">Skincare</a>
          <a href="#haircare" className="hover:text-brand-green transition-colors">Hair Care</a>
          <a href="#compounding" className="hover:text-brand-green transition-colors">Compounding</a>
          <a href="#about" className="hover:text-brand-green transition-colors">About</a>
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2.5 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase font-medium">
            Shop Now
          </button>
        </div>

        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#fdfbf7] shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#skincare" className="text-lg font-serif" onClick={() => setIsMobileMenuOpen(false)}>Skincare</a>
            <a href="#haircare" className="text-lg font-serif" onClick={() => setIsMobileMenuOpen(false)}>Hair Care</a>
            <a href="#compounding" className="text-lg font-serif" onClick={() => setIsMobileMenuOpen(false)}>Compounding Rx</a>
            <a href="#about" className="text-lg font-serif" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <button className="mt-4 px-6 py-3 bg-brand-green text-white w-full text-sm tracking-widest uppercase font-medium">
              Shop Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7] via-[#fdfbf7]/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Skincare" 
          className="w-full h-full object-cover object-right"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
              Your Health, Our Priority
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-brand-dark mb-6">
              Customized <br/>
              <span className="italic text-brand-green">Health & Beauty</span> <br/>
              Solutions.
            </h1>
            <p className="text-lg text-brand-dark/70 mb-10 max-w-md font-light leading-relaxed">
              Experience the perfect blend of nature and science with our compounding pharmacy and premium skincare formulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-green text-white text-sm tracking-widest uppercase font-medium hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2">
                Explore Products <ArrowRight size={16} />
              </button>
              <button className="px-8 py-4 border border-brand-dark/20 text-brand-dark text-sm tracking-widest uppercase font-medium hover:border-brand-dark transition-colors">
                Consult a Pharmacist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: "Beauty & Skincare",
      desc: "Premium products formulated to nourish, protect, and rejuvenate your skin naturally."
    },
    {
      icon: <Droplets className="w-6 h-6 text-brand-gold" />,
      title: "Hair Growth Serums",
      desc: "Clinically inspired serums designed to stimulate follicles and promote thicker, healthier hair."
    },
    {
      icon: <Beaker className="w-6 h-6 text-brand-gold" />,
      title: "Compounding Rx",
      desc: "Personalized medications and treatments tailored specifically to your unique health needs."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 text-brand-dark">{feature.title}</h3>
              <p className="text-brand-dark/60 leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section className="py-24 bg-[#fdfbf7]" id="skincare">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Featured Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
              Signature Formulations
            </h2>
          </div>
          <button className="text-sm tracking-widest uppercase font-medium text-brand-green hover:text-brand-green-dark flex items-center gap-2 transition-colors border-b border-brand-green pb-1">
            View All Products <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6">
              <img 
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" 
                alt="Hair Growth Serum" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-green text-white text-xs tracking-widest uppercase px-3 py-1">
                Bestseller
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl mb-1 text-brand-dark group-hover:text-brand-green transition-colors">Advanced Hair Growth Serum</h3>
                <p className="text-brand-dark/60 font-light text-sm">50ml / Aesthetic Solution</p>
              </div>
              <span className="font-medium text-lg">$45</span>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
                alt="Revitalizing Face Cream" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-2xl mb-1 text-brand-dark group-hover:text-brand-green transition-colors">Revitalizing Face Cream</h3>
                <p className="text-brand-dark/60 font-light text-sm">Custom Compounded</p>
              </div>
              <span className="font-medium text-lg">$68</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-green text-white relative overflow-hidden" id="about">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-green-dark/40 via-brand-green to-brand-green z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Leaf className="w-10 h-10 mb-8 text-brand-gold opacity-90" />
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl leading-[1.3] mb-10 font-light">
              "We believe that <span className="italic text-brand-gold">true beauty</span> stems from optimal health. Our compounding expertise allows us to create solutions as <span className="italic text-brand-gold">unique</span> as you are."
            </h2>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-brand-gold/60"></div>
              <div className="flex flex-col">
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-brand-gold">
                  The Iradat Promise
                </span>
                <span className="text-white/60 text-sm font-light mt-1">
                  Pharmacy & Compounding Rx
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-t-[200px] rounded-b-[20px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1608280631328-11116241b711?q=80&w=1000&auto=format&fit=crop" 
                alt="Botanical Ingredients" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center p-2 shadow-xl border-4 border-brand-green">
              <div className="w-full h-full border border-brand-dark/20 rounded-full flex items-center justify-center text-center">
                <span className="font-serif text-brand-dark leading-tight text-sm font-medium">Custom<br/>Rx</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white">
                <Leaf size={20} />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide">
                IRADAT
              </span>
            </div>
            <p className="text-white/60 font-light max-w-sm mb-10 leading-relaxed text-sm">
              Elevating your wellness journey through personalized compounding and premium skincare formulations.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold">Join our newsletter</h4>
              <div className="flex border-b border-white/20 pb-2 max-w-sm group focus-within:border-brand-gold transition-colors">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-white/30"
                />
                <button className="text-white/50 group-focus-within:text-brand-gold hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Shop</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Skincare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hair Serums</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wellness</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Services</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Compounding Rx</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prescription Refills</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li>123 Wellness Ave<br/>Suite 100</li>
              <li><a href="mailto:contact@iradathealth.com" className="hover:text-white transition-colors">Email Us</a></li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <span className="text-xs">Ig</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <span className="text-xs">Fb</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Massive Brand Name */}
        <div className="border-t border-white/10 pt-16 pb-8 text-center overflow-hidden flex justify-center">
          <h2 className="font-serif text-[18vw] leading-[0.8] text-white/[0.03] select-none tracking-tighter w-full text-center">
            IRADAT
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light mt-8">
          <p>&copy; {new Date().getFullYear()} Iradat Pharmacy & Compounding Rx.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
