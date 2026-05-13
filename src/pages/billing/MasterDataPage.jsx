import { motion } from 'framer-motion';
import { 
  Database, 
  Package, 
  Map, 
  Users, 
  Settings, 
  ShieldCheck, 
  Server, 
  CreditCard,
  ChevronRight,
  Plus,
  ArrowRight,
  Receipt
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MasterDataPage() {
  const navigate = useNavigate();

  const masterCategories = [
    {
      id: 'packages',
      title: 'Paket Layanan',
      desc: 'Kelola harga, kecepatan bandwidth, dan fitur paket internet.',
      icon: <Package size={28} />,
      count: '12 Paket',
      color: 'text-primary-fixed'
    },
    {
      id: 'regions',
      title: 'Wilayah & Area',
      desc: 'Manajemen coverage area, zona penagihan, dan koordinat wilayah.',
      icon: <Map size={28} />,
      count: '45 Area',
      color: 'text-tertiary-fixed'
    },
    {
      id: 'users',
      title: 'User Management',
      desc: 'Kelola akses staf, peran (role), dan log aktivitas admin.',
      icon: <Users size={28} />,
      count: '8 Staf',
      color: 'text-primary'
    },
    {
      id: 'payment-methods',
      title: 'Metode Pembayaran',
      desc: 'Konfigurasi akun bank, Virtual Account, dan integrasi payment gateway.',
      icon: <CreditCard size={28} />,
      count: '5 Metode',
      color: 'text-primary-fixed'
    },
    {
      id: 'ticket-categories',
      title: 'Kategori Pengaduan',
      desc: 'Daftar jenis masalah teknis dan non-teknis untuk sistem tiket.',
      icon: <Settings size={28} />,
      count: '10 Kategori',
      color: 'text-on-surface-variant'
    },
    {
      id: 'system-config',
      title: 'Konfigurasi Sistem',
      desc: 'Pengaturan global aplikasi, nama perusahaan, dan limit sistem.',
      icon: <Server size={28} />,
      count: 'v2.4.0',
      color: 'text-on-surface-variant'
    },
    {
      id: 'invoice-template',
      title: 'Template Invoice',
      desc: 'Atur logo, rincian bank, dan catatan kaki untuk tagihan pelanggan.',
      icon: <Receipt size={28} />,
      count: 'Active',
      color: 'text-primary-fixed',
      path: '/billing/master/invoice-template'
    }
  ];

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Master Data</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Pengaturan Inti & Basis Data Sistem</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary-fixed/10 border border-primary-fixed/20 rounded-xl">
          <ShieldCheck size={18} className="text-primary-fixed" />
          <span className="text-xs font-bold text-primary-fixed uppercase tracking-wider">Akses Administrator</span>
        </div>
      </div>

      {/* Grid of Master Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mt-4">
        {masterCategories.map((cat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={cat.id}
            onClick={() => cat.path && navigate(cat.path)}
            className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-3xl p-8 hover:border-primary-fixed/40 transition-all group cursor-pointer shadow-xl relative overflow-hidden"
          >
            {/* Background Decorative Icon */}
            <div className="absolute -bottom-6 -right-6 text-primary-fixed opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
              {cat.icon}
            </div>

            <div className="flex justify-between items-start mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform duration-500`}>
                {cat.icon}
              </div>
              <span className="text-[10px] font-extrabold text-primary-fixed bg-primary-fixed/10 px-3 py-1 rounded-full border border-primary-fixed/20 uppercase tracking-widest">
                {cat.count}
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-tight group-hover:text-primary-fixed transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100">
                {cat.desc}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary-fixed transition-colors">Kelola Data</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-[#0e1512] transition-all">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary Settings Quick Links */}
      <div className="mt-12">
        <h4 className="text-label-caps text-on-surface-variant font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
          <Database size={16} /> Data Tools & Utils
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {[
            { label: 'Import dari Excel', desc: 'Migrasi data pelanggan masal.' },
            { label: 'Backup Basis Data', desc: 'Simpan snapshot data harian.' },
            { label: 'Log Audit Sistem', desc: 'Pantau riwayat perubahan data.' },
            { label: 'Reset Penomoran', desc: 'Atur ulang prefix invoice/tiket.' },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-low/30 border border-outline-variant/20 p-5 rounded-2xl hover:bg-surface-container transition-all cursor-pointer group">
              <h5 className="text-sm font-bold text-primary mb-1 group-hover:text-primary-fixed transition-colors">{item.label}</h5>
              <p className="text-[10px] text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
