import { motion } from 'framer-motion';
import { 
  Wrench, 
  MessageSquare, 
  Zap, 
  Wifi, 
  FileJson, 
  ShieldAlert, 
  Database, 
  History,
  Terminal,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function ToolsPage() {
  const tools = [
    {
      title: 'WhatsApp Broadcast',
      desc: 'Kirim pesan tagihan atau informasi massal ke pelanggan via WhatsApp API.',
      icon: <MessageSquare size={24} />,
      status: 'Ready',
      color: 'text-green-400'
    },
    {
      title: 'Generate Invoice Masal',
      desc: 'Proses otomatis pembuatan ribuan tagihan bulanan dalam satu klik.',
      icon: <Zap size={24} />,
      status: 'Ready',
      color: 'text-primary-fixed'
    },
    {
      title: 'Ping & Traceroute',
      desc: 'Diagnosa koneksi pelanggan langsung dari server ke router client.',
      icon: <Wifi size={24} />,
      status: 'Ready',
      color: 'text-primary'
    },
    {
      title: 'Export / Import Data',
      desc: 'Alat migrasi data pelanggan, tagihan, dan log transaksi (Excel/JSON).',
      icon: <FileJson size={24} />,
      status: 'Ready',
      color: 'text-tertiary-fixed'
    },
    {
      title: 'Pembersihan Log',
      desc: 'Optimasi database dengan menghapus log lama yang tidak diperlukan.',
      icon: <Trash2 size={24} />,
      status: 'Maintenance',
      color: 'text-error'
    },
    {
      title: 'System Debugger',
      desc: 'Konsol untuk melihat error log sistem dan status API secara real-time.',
      icon: <Terminal size={24} />,
      status: 'Admin Only',
      color: 'text-on-surface-variant'
    }
  ];

  function Trash2(props) {
    return <History {...props} />;
  }

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Tools & Utilitas</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Alat Bantu Operasional & Pemeliharaan Sistem</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
          <History size={18} className="text-on-surface-variant" />
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Terakhir Digunakan: 2 jam lalu</span>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mt-4">
        {tools.map((tool, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={idx}
            className="group bg-[#1a211f]/60 backdrop-blur-md border border-outline-variant/20 p-6 rounded-2xl hover:border-primary-fixed/30 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${tool.color} group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-widest ${
                tool.status === 'Ready' ? 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20' : 'bg-white/5 text-on-surface-variant border-white/10'
              }`}>
                {tool.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-fixed transition-colors">{tool.title}</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6 opacity-80 line-clamp-2">
              {tool.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-primary-fixed uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Jalankan Alat <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Debug Console Placeholder */}
      <div className="mt-12 bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed/40"></div>
            </div>
            <span className="text-[10px] font-mono text-on-surface-variant uppercase ml-4 tracking-widest font-bold">System Health Monitor</span>
          </div>
          <button className="text-[10px] font-bold text-primary-fixed flex items-center gap-1 hover:underline">
            Full Logs <ExternalLink size={12} />
          </button>
        </div>
        <div className="p-8 font-mono text-xs text-on-surface-variant space-y-2 opacity-80">
          <p className="text-primary-fixed flex gap-4"><span className="opacity-40">[00:08:45]</span> <span className="font-bold">SYSTEM:</span> Database connection stable. (4ms latency)</p>
          <p className="flex gap-4"><span className="opacity-40">[00:08:12]</span> <span className="font-bold text-primary-fixed/70">SYNC:</span> API Endpoint /billing/invoices processed 142 items.</p>
          <p className="flex gap-4"><span className="opacity-40">[00:07:55]</span> <span className="font-bold text-primary-fixed/70">WAPP:</span> Gateway connection established.</p>
          <p className="text-on-surface flex gap-4 animate-pulse"><span className="opacity-40">[00:09:02]</span> <span className="font-bold underline">IDLE:</span> Waiting for system task...</p>
        </div>
      </div>
    </div>
  );
}
