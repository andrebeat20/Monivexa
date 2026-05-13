import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Zap, ShieldCheck, Globe, Star, ArrowRight, Clock, Award, Settings } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function PricingPage() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "DEMO",
      price: "FREE",
      period: "Trial 3 Hari",
      desc: "Uji coba akses penuh sistem sebelum berlangganan resmi.",
      features: [
        "Akses Semua Fitur Pro",
        "Masa Aktif 3 Hari",
        "Full System Access",
        "Community Support"
      ],
      color: "border-white/5",
      highlight: false,
      setupFee: null
    },
    {
      name: "STARTER",
      price: "400K",
      period: "/bulan",
      desc: "Fokus pada efisiensi Billing dan Manajemen Pelanggan.",
      features: [
        "Maks. 100 User",
        "Billing Otomatis",
        "WhatsApp Gateway",
        "Manajemen Pelanggan",
        "Laporan Dasar"
      ],
      color: "border-white/5",
      highlight: false,
      setupFee: null
    },
    {
      name: "STANDARD",
      price: "550K",
      period: "/bulan",
      desc: "Solusi lengkap untuk manajemen stok dan pemetaan.",
      features: [
        "Maks. 500 User",
        "Semua Fitur Starter",
        "Stock Inventaris",
        "GIS Titik Rumah",
        "Multi-Warehouse Support"
      ],
      color: "border-primary-fixed/30",
      highlight: true,
      setupFee: null
    },
    {
      name: "PRO",
      price: "1.0M",
      period: "/bulan",
      desc: "Monitoring total dan manajemen topologi jaringan penuh.",
      features: [
        "Unlimited User",
        "Semua Fitur Standard",
        "Full Monitoring OLT (SNMP)",
        "Full Topology (Garis Kabel)",
        "Priority Support 24/7"
      ],
      color: "border-primary-fixed",
      highlight: false,
      setupFee: "500.000"
    },
    {
      name: "CUSTOM",
      price: "1.5M",
      period: "/bulan",
      desc: "Eksklusivitas total dengan branding dan API khusus.",
      features: [
        "Semua Fitur Pro",
        "White-label (Logo Sendiri)",
        "Custom API Integration",
        "Dedicated Server Instance",
        "Enterprise Consulting"
      ],
      color: "border-white/5",
      highlight: false,
      setupFee: "500.000"
    }
  ];

  return (
    <div className="bg-[#0a0f0d] text-white min-h-screen selection:bg-primary-fixed/30 selection:text-primary-fixed overflow-x-hidden">
      <Navbar />
      
      {/* Pricing Hero */}
      <section className="relative pt-40 pb-24 px-gutter overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary-fixed/10 blur-[150px] rounded-full opacity-50"></div>
        
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-fixed italic">No Forever Free - Quality First</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase"
          >
            CHOOSE YOUR <span className="text-primary-fixed italic font-serif">PLAN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-70"
          >
            Sistem eksklusif untuk menjaga kualitas layanan ISP Anda. Pilih paket yang sesuai dengan skala bisnis Anda.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 pb-32 px-gutter relative">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass-card p-0.5 rounded-[2.5rem] border ${plan.color} relative overflow-hidden flex flex-col group`}
              >
                {plan.highlight && (
                  <div className="absolute top-8 right-[-35px] bg-primary-fixed text-black py-1 px-10 rotate-45 text-[8px] font-black uppercase tracking-widest z-20">
                    Most Popular
                  </div>
                )}
                
                <div className="bg-[#0e1512] rounded-[2.4rem] p-8 flex flex-col h-full relative z-10 border border-white/5">
                  <div className="mb-8">
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight italic">{plan.name}</h3>
                    <p className="text-on-surface-variant text-[11px] font-medium opacity-60 leading-relaxed min-h-[40px]">{plan.desc}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white tracking-tighter">{plan.price}</span>
                      <span className="text-on-surface-variant font-bold text-[10px] opacity-40">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow mb-10">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-[11px] font-medium text-white/70">
                        <CheckCircle2 className="text-primary-fixed shrink-0" size={14} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {plan.setupFee && (
                    <div className="mb-6 p-4 rounded-2xl bg-primary-fixed/5 border border-primary-fixed/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Settings size={12} className="text-primary-fixed" />
                        <span className="text-[10px] font-black text-primary-fixed uppercase tracking-widest">Setup Fee</span>
                      </div>
                      <p className="text-[10px] text-white/50 font-medium">Rp {plan.setupFee} (Sekali bayar)</p>
                      <p className="text-[9px] text-primary-fixed/40 mt-1 italic leading-tight">Konfigurasi SNMP OLT & Koordinat ODP Pertama</p>
                    </div>
                  )}

                  <button 
                    onClick={() => navigate('/register')}
                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 active:scale-95 ${
                      plan.highlight 
                        ? 'bg-primary-fixed text-black shadow-lg shadow-primary-fixed/20' 
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {plan.name === 'DEMO' ? 'Start Trial' : 'Pilih Paket'} <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & FAQ Link */}
      <section className="py-24 px-gutter border-t border-white/5">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">Uncompromising <br/><span className="text-primary-fixed italic font-serif">Security & Reliability</span></h2>
            <p className="text-on-surface-variant font-medium opacity-70 leading-relaxed text-lg">
              Setiap paket (kecuali Demo) dikelola dengan prioritas tinggi untuk menjamin stabilitas bisnis ISP Anda. 
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-primary-fixed" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest">Enterprise Security</span>
              </div>
              <div className="flex flex-col gap-2">
                <Globe className="text-primary-fixed" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest">GIS Integration</span>
              </div>
              <div className="flex flex-col gap-2">
                <Zap className="text-primary-fixed" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest">SNMP Monitoring</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-[3rem] p-12 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary-fixed" size={24} />
              <h3 className="text-2xl font-bold uppercase tracking-tight italic">Assisted Setup Service</h3>
            </div>
            <p className="text-on-surface-variant font-medium mb-10 opacity-70">
              Khusus paket <span className="text-white font-bold">PRO</span> dan <span className="text-white font-bold">CUSTOM</span>, tim ahli kami akan membantu Anda melakukan konfigurasi SNMP OLT dan input koordinat ODP pertama kali untuk memastikan sistem berjalan sempurna.
            </p>
            <a href="https://wa.me/6285753327872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-primary-fixed font-black uppercase tracking-widest text-xs hover:gap-6 transition-all">
              Hubungi Tim Teknis <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Simplified from Landing) */}
      <footer className="py-20 px-gutter border-t border-white/5">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo_monivexa.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-2xl font-black tracking-tighter uppercase text-white">Monivexa</span>
          </div>
          <div className="flex gap-10">
            {['Home', 'Services', 'About Us'].map(l => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); navigate(l === 'Home' ? '/' : `/${l.toLowerCase().replace(' ', '-')}`); }} className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2024 Monivexa Technical Group</p>
        </div>
      </footer>
    </div>
  );
}
