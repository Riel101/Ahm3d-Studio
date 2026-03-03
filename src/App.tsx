import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, 
  Layout, 
  Home, 
  Layers, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Monitor, 
  Compass, 
  Sparkles,
  Instagram,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Event Center Design",
    description: "Full-scale 3D visualization of event spaces tailored to specific themes and guest capacities.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Interior Decor Design",
    description: "Photorealistic 3D models for residential and commercial interiors, focusing on lighting and texture.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Custom 3D Modeling",
    description: "Bespoke 3D assets and architectural models for developers, designers, and creative agencies.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  }
];

const portfolio = [
  {
    id: 1,
    title: "Birthday Setup Design",
    category: "Event Space",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Modern Minimalist bedroom",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Industrial event Concept",
    category: "Event Space",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "A Cozy Room",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "A Funeral Setup",
    category: "Event Space",
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Detailed Realistic Chair",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "A Retirement Setup",
    category: "Event Space",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
  },
    {
    id: 8,
    title: "An Office Space",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Box className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter">AHM<span className="text-emerald-500">3D</span> STUDIO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-bold text-zinc-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-radial from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                Next-Gen 3D Visualization
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                Turning Concepts Into <span className="text-emerald-500">Spatial Reality.</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                Ahm3d Studio specializes in high-fidelity 3D modeling for event centers and interior decor. We bridge the gap between imagination and construction.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href= "#portfolio" className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-all group">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a >
                <a href= "#services" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                  Our Services
                </a >
              </div>
            </motion.div>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5">
              {[
                { label: 'Projects Completed', value: '50+' },
                { label: 'Client Satisfaction', value: '99%' },
                { label: 'Years Experience', value: '3+' },
                { label: 'Render Quality', value: '4K' },
              ].map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={stat.label}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">What We Do</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Expert Modeling Services</h3>
              </div>
              <p className="max-w-md text-zinc-400">
                From initial sketches to photorealistic renders, we provide a comprehensive suite of 3D visualization tools for every project scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-bold text-emerald-500 group-hover:gap-3 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                    <service.icon className="w-full h-full translate-x-8 translate-y-8" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Featured Projects</h3>
              <div className="flex justify-center gap-4">
                {['All', 'Event Centers', 'Interior', 'Custom'].map((cat) => (
                  <button key={cat} className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-800"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                    <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                    <a 
                    href= {item.image}
                    target= "_blank" 
                    className="w-fit px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-emerald-500 transition-colors">
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-[40px] bg-emerald-500 p-12 md:p-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight mb-6">
                    Ready to bring your vision to life?
                  </h2>
                  <p className="text-black/70 text-lg font-medium">
                    Let's discuss your next project and how our 3D modeling expertise can help you succeed.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <a href= "https://wa.me/message/K3S2HP44ZVQBN1" target= "_blank" className="px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                    Start a Project <Mail className="w-5 h-5" />
                  </a>
                  <p className="text-black/50 text-sm text-center font-bold">Average response time: 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Box className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold tracking-tighter">AHM<span className="text-emerald-500">3D</span> STUDIO</span>
              </div>
              <p className="text-zinc-500 max-w-sm leading-relaxed">
                Professional 3D modeling and visualization studio based in the heart of design innovation. We create spaces that inspire.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-emerald-500 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Social</h5>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ahm3d_studio?igsh=MXIxNWRmYThmM3NkaQ==" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/message/K3S2HP44ZVQBN1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">© 2026 Ahm3d Studio. All rights reserved.</p>
            <span className="flex gap-8 text-zinc-600 text-sm">Made by 
              <a href="https://github.com/Riel101" className="hover:text-white transition-colors">Riel</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
