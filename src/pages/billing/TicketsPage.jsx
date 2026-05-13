import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  CheckCircle2, 
  User, 
  MapPin, 
  MessageCircle,
  Wrench,
  WifiOff,
  MoreVertical
} from 'lucide-react';
import { useState } from 'react';

export default function TicketsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const tickets = [
    { 
      id: 'TKT-2024-001', 
      customer: 'HERMAN FILIPUS', 
      location: 'SERASAU, PONTIANAK', 
      issue: 'Koneksi Sering Terputus', 
      category: 'Network', 
      priority: 'High', 
      status: 'In Progress', 
      date: '12 May 2026' 
    },
    { 
      id: 'TKT-2024-002', 
      customer: 'RUMAH MANUS', 
      location: 'JL. SANGGAU, PONTIANAK', 
      issue: 'Ganti Password Router', 
      category: 'Request', 
      priority: 'Low', 
      status: 'Resolved', 
      date: '11 May 2026' 
    },
    { 
      id: 'TKT-2024-003', 
      customer: 'KOSMEN ADEN', 
      location: 'SEGURI, KAB. MEMPAWAH', 
      issue: 'LOS Merah pada Modem', 
      category: 'Hardware', 
      priority: 'Critical', 
      status: 'Open', 
      date: '13 May 2026' 
    },
    { 
      id: 'TKT-2024-004', 
      customer: 'AMSAL', 
      location: 'SEGURI, KAB. MEMPAWAH', 
      issue: 'Request Upgrade Paket', 
      category: 'Billing', 
      priority: 'Medium', 
      status: 'Open', 
      date: '13 May 2026' 
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'text-error bg-error/10 border-error/20';
      case 'High': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'Medium': return 'text-primary-fixed bg-primary-fixed/10 border-primary-fixed/20';
      default: return 'text-on-surface-variant bg-white/5 border-white/10';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Open': return <AlertTriangle size={16} className="text-error" />;
      case 'In Progress': return <Wrench size={16} className="text-primary-fixed" />;
      case 'Resolved': return <CheckCircle2 size={16} className="text-primary-fixed" />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Pengaduan & Tiket</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Pusat Bantuan & Troubleshooting Pelanggan</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <Plus size={18} />
            Buat Tiket Baru
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
        {[
          { label: 'Tiket Terbuka', value: '12', color: 'text-error', icon: <AlertTriangle size={20} /> },
          { label: 'Sedang Diproses', value: '8', color: 'text-primary-fixed', icon: <Wrench size={20} /> },
          { label: 'Selesai (24j)', value: '24', color: 'text-primary-fixed', icon: <CheckCircle2 size={20} /> },
          { label: 'Rata-rata Respon', value: '15m', color: 'text-on-surface', icon: <Clock size={20} /> },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
              <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Tiket, Nama Pelanggan, atau Wilayah..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-primary-fixed/50 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all font-bold uppercase tracking-widest text-[10px]">
            <Filter size={16} /> Filter Status
          </button>
        </div>
      </div>

      {/* Tickets List */}
      <div className="grid grid-cols-1 gap-md">
        {tickets.map((ticket, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={ticket.id}
            className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-6 hover:border-primary-fixed/30 transition-all group flex flex-col md:flex-row md:items-center gap-6 shadow-xl relative overflow-hidden"
          >
            {/* Status Indicator Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              ticket.status === 'Open' ? 'bg-error' : ticket.status === 'In Progress' ? 'bg-primary-fixed' : 'bg-primary-fixed opacity-30'
            }`}></div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-[10px] font-mono font-bold text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded border border-primary-fixed/20 uppercase tracking-widest">
                  {ticket.id}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority} PRIORITY
                </span>
                <span className="text-xs text-on-surface-variant font-medium ml-auto md:ml-0">{ticket.date}</span>
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-3 uppercase tracking-tight flex items-center gap-2">
                {ticket.category === 'Network' && <WifiOff size={18} className="text-error" />}
                {ticket.issue}
              </h3>
              <div className="flex flex-wrap gap-y-2 gap-x-6">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <User size={14} className="text-primary-fixed" />
                  <span className="text-body-sm font-bold uppercase tracking-tight">{ticket.customer}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <MapPin size={14} className="text-primary-fixed" />
                  <span className="text-body-sm line-clamp-1 italic">{ticket.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/20 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2">
                {getStatusIcon(ticket.status)}
                <span className={`text-xs font-bold uppercase tracking-widest ${
                  ticket.status === 'Open' ? 'text-error' : 'text-primary-fixed'
                }`}>
                  {ticket.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-variant p-2 rounded-xl text-on-surface-variant hover:text-primary transition-all shadow-sm">
                  <MessageCircle size={18} />
                </button>
                <button className="flex items-center gap-2 bg-primary-fixed text-[#0e1512] font-bold text-xs px-4 py-2 rounded-xl hover:shadow-[0_0_10px_rgba(95,251,214,0.4)] transition-all">
                  Kelola Tiket
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Hint */}
      <p className="text-center text-xs text-on-surface-variant opacity-60 mt-4 italic">
        Menampilkan tiket aktif dalam 30 hari terakhir. Gunakan filter untuk melihat arsip tiket lama.
      </p>
    </div>
  );
}
