import { motion } from 'framer-motion';
import { 
  Database, 
  MapPin, 
  Plus, 
  Search, 
  ArrowRight, 
  Box, 
  Users, 
  MoreVertical,
  TrendingUp,
  LayoutGrid
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatCard } from '../../components/shared/StatCard';
import { PageHeader } from '../../components/shared/PageHeader';

// Constants
import { WAREHOUSES_DATA } from '../../constants/mockData';

export default function WarehouseList() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Kapasitas Terpakai', value: '62.5%', trend: '+2.1%', icon: <Database />, color: 'text-primary' },
    { label: 'Pergerakan Barang (24j)', value: '+142', trend: 'High', icon: <TrendingUp />, color: 'text-primary-fixed' },
    { label: 'Lokasi Aktif', value: '4 Points', trend: 'Stable', icon: <MapPin />, color: 'text-on-surface' },
  ];

  const headerActions = (
    <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
      <Plus size={18} /> Tambah Lokasi Baru
    </button>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Manajemen Gudang" 
        subtitle="Lokasi Penyimpanan & Distribusi Aset" 
        actions={headerActions} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
        <input 
          type="text" 
          placeholder="Cari Lokasi atau Nama Manager..." 
          className="w-full bg-[#1a211f]/60 border border-outline-variant/20 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-2">
        {WAREHOUSES_DATA.map((wh, idx) => (
          <GlassCard key={wh.id} delay={idx * 0.05} className="p-6 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <span className="text-[9px] font-bold text-primary-fixed bg-primary-fixed/10 px-3 py-1 rounded-full border border-primary-fixed/20 uppercase tracking-widest">
                {wh.type}
              </span>
            </div>

            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary-fixed group-hover:scale-110 transition-transform duration-500">
                <Database size={28} />
              </div>
              <div className="flex-1 min-w-0 pr-20">
                <h3 className="text-xl font-bold text-primary mb-1 uppercase tracking-tight truncate">{wh.name}</h3>
                <div className="flex items-center gap-1.5 text-on-surface-variant text-[11px]">
                  <MapPin size={12} className="text-primary-fixed opacity-70" /> {wh.location}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[9px] font-label-caps text-on-surface-variant uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Box size={10} /> Total Stok
                </p>
                <p className="text-xl font-bold text-primary">{wh.items.toLocaleString()} <span className="text-[10px] text-on-surface-variant">Unit</span></p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[9px] font-label-caps text-on-surface-variant uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Users size={10} /> Penanggung Jawab
                </p>
                <p className="text-sm font-bold text-on-surface truncate">{wh.manager}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Kapasitas Penyimpanan</span>
                <span className={`text-[10px] font-bold font-mono ${wh.capacity > 80 ? 'text-error' : 'text-primary-fixed'}`}>{wh.capacity}%</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${wh.capacity}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full rounded-full ${wh.capacity > 80 ? 'bg-error shadow-[0_0_10px_rgba(255,84,84,0.3)]' : 'bg-primary-fixed shadow-[0_0_10px_rgba(95,251,214,0.3)]'}`}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-outline-variant/10">
              <button className="text-[10px] font-bold text-primary-fixed flex items-center gap-2 hover:underline uppercase tracking-widest">
                Detail Inventaris <ArrowRight size={14} />
              </button>
              <div className="flex gap-2">
                <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-lg">
                  <LayoutGrid size={18} />
                </button>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-lg">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
