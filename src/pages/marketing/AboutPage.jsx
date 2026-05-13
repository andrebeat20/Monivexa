import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  History, 
  Target, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  Globe, 
  Award, 
  ArrowRight,
  Rocket
} from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  const navigate = useNavigate();

  const values = [
    {
      title: "Integrity",
      desc: "Keandalan data dan transparansi operasional adalah fondasi utama setiap baris kode yang kami tulis.",
      icon: <ShieldCheck size={24} />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Innovation",
      desc: "Terus berevolusi mengikuti perkembangan teknologi infrastruktur jaringan terbaru di dunia.",
      icon: <Lightbulb size={24} />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Scalability",
      desc: "Membangun sistem yang siap tumbuh bersama bisnis ISP Anda, dari ratusan hingga jutaan pelanggan.",
      icon: <Rocket size={24} />,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <div className="bg-[#0a0f0d] text-white min-h-screen selection:bg-primary-fixed/30 selection:text-primary-fixed overflow-x-hidden">
      <Navbar />
      
      {/* About Hero */}
      <section className="relative pt-40 pb-32 px-gutter overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-fixed/10 blur-[150px] rounded-full animate-pulse"></div>
        
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
          >
            <Award className="text-primary-fixed" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-fixed">The Vision Behind Monivexa</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12 uppercase italic"
          >
            ENGINEERING <br /> <span className="text-primary-fixed not-italic font-sans">CONNECTIVITY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-80 leading-relaxed italic font-serif"
          >
            "Misi kami adalah mendemokratisasi infrastruktur ISP berkualitas enterprise melalui perangkat lunak yang cerdas, efisien, dan mudah diakses."
          </motion.p>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-24 px-gutter relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-fixed">Our Journey</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">Challenging <br/>the Status Quo</h2>
            </div>
            <p className="text-on-surface-variant text-lg font-medium leading-relaxed opacity-70">
              Monivexa lahir dari kebutuhan mendesak akan platform terintegrasi di industri ISP. Kami melihat bagaimana tim operasional berjuang dengan sistem yang terpisah-pisah, data yang tidak konsisten, dan kurangnya visibilitas jaringan.
            </p>
            <p className="text-on-surface-variant text-lg font-medium leading-relaxed opacity-70">
              Hari ini, Monivexa telah berevolusi menjadi standar baru bagi penyedia layanan internet yang mengutamakan kecepatan, akurasi, dan skalabilitas.
            </p>
            <div className="flex gap-12 pt-6">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white italic">2024</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed opacity-60">Established</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white italic">Core v2</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed opacity-60">Engine Version</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div 
              whileHover={{ rotate: 5 }}
              className="glass-card rounded-[4rem] p-4 border border-white/10 relative z-10 shadow-2xl overflow-hidden"
            >
              <img 
                src="/assets/workspace_visual.png" 
                alt="Our Workspace" 
                className="rounded-[3rem] grayscale-[0.4] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1512] via-transparent to-transparent opacity-60"></div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-fixed/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Core Values Bento */}
      <section className="py-32 px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic mb-4">Our Core Values</h2>
            <p className="text-on-surface-variant font-medium opacity-60 max-w-xl mx-auto">Prinsip yang memandu setiap inovasi yang kami hadirkan di Monivexa.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="glass-card p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-primary-fixed/30 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity blur-[60px]`}></div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-fixed mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic relative z-10">{v.title}</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed opacity-60 relative z-10">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-24 px-gutter">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-container-max mx-auto bg-gradient-to-br from-primary-fixed/20 via-white/[0.02] to-transparent rounded-[4rem] p-16 md:p-24 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 network-grid opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase italic leading-none">Ready to be Part <br/>of the Future?</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12 font-medium opacity-70">
              Mari kita bangun infrastruktur internet yang lebih cerdas dan efisien bersama Monivexa.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-primary-fixed transition-all hover:scale-110 active:scale-95 uppercase tracking-widest text-sm shadow-2xl shadow-black/40"
            >
              Luncurkan Dashboard Sekarang
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer (Simplified from Landing) */}
      <footer className="py-20 px-gutter border-t border-white/5">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo_monivexa.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-2xl font-black tracking-tighter uppercase text-white">Monivexa</span>
          </div>
          <div className="flex gap-10">
            {['Home', 'Services', 'Pricing'].map(l => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); navigate(l === 'Home' ? '/' : `/${l.toLowerCase().replace(' ', '-')}`); }} className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2024 Monivexa Technical Group</p>
        </div>
      </footer>
    </div>
  );
}
