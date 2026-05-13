import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart3, Globe, Zap, Cpu, CheckCircle2, Server, Activity, Users } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function LandingPage() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const features = [
    {
      title: "Automated Billing",
      desc: "Streamline your revenue with automated invoicing and real-time payment tracking.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Inventory Control",
      desc: "Manage multi-warehouse stocks with precision serial tracking and logistics monitoring.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Network Intelligence",
      desc: "Real-time OLT monitoring and ODP management to ensure zero downtime.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <div className="bg-[#0e1512] text-on-surface min-h-screen selection:bg-primary-fixed/30 selection:text-primary-fixed overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-fixed/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-container-max mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary-fixed animate-ping"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-fixed">Next-Gen ISP Infrastructure</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30">
              CONNECTING <br /> THE <span className="text-primary-fixed italic font-serif">FUTURE</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-medium leading-relaxed opacity-80">
              Monivexa menyediakan ekosistem terpadu untuk mengelola Billing, Stok, dan Monitoring Jaringan dalam satu dashboard pintar yang direkayasa untuk kecepatan.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/login')}
                className="group relative px-10 py-5 bg-primary-fixed text-[#0e1512] font-black rounded-2xl overflow-hidden transition-all hover:shadow-[0px_0px_40px_rgba(100,255,214,0.4)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <span className="relative flex items-center gap-2 uppercase tracking-widest text-sm">
                  Luncurkan Platform <ArrowRight size={20} />
                </span>
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md uppercase tracking-widest text-sm">
                Lihat Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto mt-20 relative px-6"
          >
            <div className="relative rounded-[3rem] p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img 
                src="/assets/dashboard_mockup.png" 
                alt="Platform Dashboard" 
                className="rounded-[2.8rem] w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1512] via-transparent to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-32 px-gutter relative">
          <div className="max-w-container-max mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">Built for Enterprise <br/><span className="text-primary-fixed">Network Reliability</span></h2>
                <p className="text-on-surface-variant font-medium text-lg">Tiga pilar utama untuk operasional ISP yang efisien dan menguntungkan.</p>
              </div>
              <div className="flex gap-4">
                <motion.div whileHover={{ rotate: 15 }} className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 bg-white/5"><Server size={24} /></motion.div>
                <motion.div whileHover={{ rotate: -15 }} className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 bg-white/5"><Activity size={24} /></motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((f, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-primary-fixed/40 transition-all duration-500 cursor-default"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${f.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-fixed mb-8 group-hover:scale-110 group-hover:bg-primary-fixed/20 transition-all duration-500 shadow-xl shadow-black/20">
                    {f.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8 font-medium text-lg opacity-80">
                    {f.desc}
                  </p>
                  <div className="flex items-center gap-3 text-primary-fixed font-black text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    JELAJAHI MODUL <ArrowRight size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Stats Section */}
        <section className="py-24 px-gutter border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
          <div className="absolute inset-0 network-grid opacity-10"></div>
          <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 text-center relative z-10">
            {[
              { val: "10K+", label: "Active Customers", icon: <Users size={20} /> },
              { val: "500+", label: "Network ODPs", icon: <Globe size={20} /> },
              { val: "99.9%", label: "System Uptime", icon: <Shield size={20} /> },
              { val: "24/7", label: "Smart Monitoring", icon: <Activity size={20} /> }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                <div className="mx-auto text-primary-fixed opacity-40 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:text-primary-fixed transition-colors">{stat.val}</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section - The Scale Section */}
        <section className="py-32 px-gutter">
          <div className="max-w-container-max mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent rounded-[4rem] p-10 md:p-24 border border-white/10 overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-[60%] h-full bg-primary-fixed/5 blur-[120px] rounded-full translate-x-[20%] pointer-events-none"></div>
              
              <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
                <div className="order-2 md:order-1">
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-[0.9]">Ready to Scale <br/>Your Network?</h2>
                  <div className="space-y-8 mb-12">
                    {[
                      "Real-time Data Synchronization Across Nodes",
                      "Advanced Multi-Layer Security & Encryption",
                      "Next-Gen Mobile-First Dashboard Experience",
                      "Developer-First API & Integration Suite"
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 15 }}
                        className="flex items-center gap-5 text-on-surface-variant font-semibold text-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="text-primary-fixed" size={18} />
                        </div>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate('/register')} 
                    className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-sm shadow-2xl shadow-black/40"
                  >
                    Mulai Sekarang
                  </button>
                </div>
                <div className="order-1 md:order-2 relative">
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="glass-card rounded-[3rem] border border-white/20 p-5 relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]"
                  >
                    <img 
                      src="/assets/infrastructure.png" 
                      alt="Infrastructure" 
                      className="rounded-[2.5rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-fixed/20 blur-[60px] rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="py-24 px-gutter border-t border-white/5 bg-[#0a0f0d]">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-10 group">
                <img src="/assets/logo_monivexa.png" alt="Monivexa Logo" className="h-12 w-auto transition-transform group-hover:rotate-12" />
                <span className="text-4xl font-black text-white tracking-tighter uppercase">Monivexa</span>
              </div>
              <p className="text-on-surface-variant text-xl font-medium leading-relaxed max-w-md opacity-70 mb-10">
                Engineered for high-performance connectivity and seamless ISP infrastructure management.
              </p>
              <div className="flex gap-6">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(s => (
                  <motion.div 
                    key={s} 
                    whileHover={{ y: -5, color: '#64ffd6' }}
                    className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/30 hover:border-primary-fixed transition-all cursor-pointer bg-white/5"
                  >
                    <span className="material-symbols-outlined text-[20px]">{s === 'facebook' ? 'groups' : 'public'}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Platform</h4>
              <ul className="space-y-5">
                {['Billing Engine', 'Stock Suite', 'Network Ops', 'Analytics'].map(l => (
                  <li key={l}><a href="#" className="text-on-surface-variant hover:text-primary-fixed transition-colors font-semibold opacity-60 hover:opacity-100">{l}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Enterprise</h4>
              <ul className="space-y-5">
                {['Pricing', 'Case Studies', 'Security', 'SLA'].map(l => (
                  <li key={l}><a href="#" className="text-on-surface-variant hover:text-primary-fixed transition-colors font-semibold opacity-60 hover:opacity-100">{l}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Newsletter</h4>
              <p className="text-on-surface-variant mb-6 text-sm font-medium opacity-60">Dapatkan update terbaru mengenai infrastruktur jaringan.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full outline-none focus:border-primary-fixed transition-colors text-sm" />
                <button className="bg-primary-fixed text-black p-3 rounded-xl hover:scale-105 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-10">
              <span className="text-[10px] font-black tracking-[0.3em] text-on-surface-variant opacity-30 uppercase">Privacy Policy</span>
              <span className="text-[10px] font-black tracking-[0.3em] text-on-surface-variant opacity-30 uppercase">Terms of Service</span>
            </div>
            <p className="text-[10px] font-black tracking-[0.4em] text-on-surface-variant opacity-20 uppercase text-center">
              © 2024 MONIVEXA TECHNICAL GROUP. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
