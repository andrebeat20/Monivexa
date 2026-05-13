import { motion } from 'framer-motion';
import { 
  ArrowRightLeft, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Search, 
  Filter, 
  Truck, 
  MoreVertical, 
  ChevronRight,
  MapPin,
  User
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { PageHeader } from '../../components/shared/PageHeader';

// Constants
import { LOGISTICS_TRANSACTIONS } from '../../constants/mockData';

export default function LogisticsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const getTypeStyle = (type) => {
    switch(type) {
      case 'STOCK IN': return 'text-primary-fixed bg-primary-fixed/10';
      case 'STOCK OUT': return 'text-orange-400 bg-orange-400/10';
      case 'TRANSFER': return 'text-tertiary-fixed bg-tertiary-fixed/10';
      default: return 'text-on-surface-variant bg-white/5';
    }
  };

  const headerActions = (
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <Truck size={18} /> Lacak Kiriman
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
        <ArrowRightLeft size={18} /> Catat Mutasi Baru
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Logistik & Arus Barang" 
        subtitle="Riwayat Mutasi & Pergerakan Aset" 
        actions={headerActions} 
      />

      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari ID Logistik, Barang, atau Pengirim..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-primary-fixed/50 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all font-bold uppercase tracking-widest text-[10px]">
            <Filter size={16} /> Filter Tipe
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {LOGISTICS_TRANSACTIONS.map((log, idx) => (
          <GlassCard key={log.id} delay={idx * 0.05} className="p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${getTypeStyle(log.type)}`}>
              {log.type === 'STOCK IN' && <ArrowDownLeft size={24} />}
              {log.type === 'STOCK OUT' && <ArrowUpRight size={24} />}
              {log.type === 'TRANSFER' && <ArrowRightLeft size={24} />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-[10px] font-mono font-bold text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded border border-primary-fixed/20 uppercase tracking-widest">
                  {log.id}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${getTypeStyle(log.type)}`}>
                  {log.type}
                </span>
                <span className="text-xs text-on-surface-variant font-medium ml-auto md:ml-0">{log.date}</span>
              </div>
              
              <h3 className="text-lg font-extrabold text-primary mb-3 uppercase tracking-tight flex items-center gap-2">
                {log.item}
                <span className="text-sm font-mono text-primary-fixed ml-2 font-bold">x{log.qty}</span>
              </h3>

              <div className="flex flex-wrap gap-y-2 gap-x-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <MapPin size={14} className="text-primary-fixed opacity-50" />
                    <span className="text-xs font-bold uppercase tracking-tight">{log.from}</span>
                  </div>
                  <ChevronRight size={14} className="text-on-surface-variant/30" />
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <MapPin size={14} className="text-primary-fixed" />
                    <span className="text-xs font-bold uppercase tracking-tight text-on-surface">{log.to}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/20 pt-4 md:pt-0 md:pl-6">
              <div className="flex flex-col md:items-end gap-1">
                <StatusBadge status={log.status} type={log.status} />
                <div className="flex items-center gap-1.5 text-on-surface-variant opacity-60">
                  <User size={10} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{log.user}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container-high hover:bg-surface-variant p-2 rounded-xl text-on-surface-variant hover:text-primary transition-all">
                  <MoreVertical size={18} />
                </button>
                <button className="bg-primary-fixed text-[#0e1512] font-bold text-xs px-4 py-2 rounded-xl hover:shadow-[0_0_10px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
                  Lihat Detail
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
