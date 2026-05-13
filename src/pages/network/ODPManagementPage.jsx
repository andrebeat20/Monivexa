import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Users, 
  Layers, 
  Maximize2,
  MapPin,
  Info
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatCard } from '../../components/shared/StatCard';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { PageHeader } from '../../components/shared/PageHeader';

// Constants
import { ODP_LIST } from '../../constants/mockData';

export default function ODPManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total Port Distribusi', value: '2,458', icon: <Layers />, color: 'text-primary' },
    { label: 'ODP Siaga (Full)', value: '42', icon: <Info />, color: 'text-error' },
    { label: 'Total Titik ODP', value: '512', icon: <MapPin />, color: 'text-primary-fixed' },
  ];

  const headerActions = (
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <Maximize2 size={18} /> Lihat Peta ODP
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
        <Plus size={18} /> Tambah ODP Baru
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Manajemen ODP" 
        subtitle="Titik Distribusi & Kapasitas Splitter" 
        actions={headerActions} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-lg">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Nama ODP, Lokasi, atau ID..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all uppercase tracking-widest font-bold text-[10px]">
          <Layers size={16} /> Filter Wilayah
        </button>
      </div>

      <GlassCard className="overflow-hidden" hover={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">NAMA ODP / ID</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">LOKASI PENEMPATAN</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest text-center">UTILISASI PORT</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">STATUS</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-outline-variant/10">
              {ODP_LIST.map((odp, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={odp.id} 
                  className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <p className="text-primary font-bold uppercase tracking-tight">{odp.name}</p>
                      <span className="text-[10px] text-primary-fixed font-mono font-bold tracking-widest opacity-60">{odp.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 max-w-[250px]">
                    <div className="flex items-start gap-2 text-on-surface-variant">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-primary-fixed opacity-50" />
                      <span className="line-clamp-2 italic">{odp.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center gap-1.5 min-w-[120px]">
                      <div className="flex justify-between w-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        <span>{odp.used} / {odp.capacity}</span>
                        <span className={odp.used === odp.capacity ? 'text-error' : 'text-primary-fixed'}>
                          {Math.round((odp.used / odp.capacity) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${odp.used === odp.capacity ? 'bg-error' : 'bg-primary-fixed'}`} style={{ width: `${(odp.used / odp.capacity) * 100}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <StatusBadge status={odp.status} type={odp.status} />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="bg-surface-container-high hover:bg-primary-fixed/20 p-2 rounded-lg text-on-surface-variant hover:text-primary-fixed transition-all">
                        <Users size={18} />
                      </button>
                      <button className="bg-surface-container-high hover:bg-surface-variant p-2 rounded-lg text-on-surface-variant transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-outline-variant/20 flex justify-between items-center bg-surface-container-low/30">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-medium italic">
            * Data kapasitas sinkron dengan sistem manajemen splitter lapangan.
          </p>
          <button className="text-primary-fixed text-xs font-bold hover:underline">Lihat Semua Titik ODP</button>
        </div>
      </GlassCard>
    </div>
  );
}
