import { motion } from 'framer-motion';
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  QrCode, 
  MoreVertical, 
  Edit2, 
  ArrowUpRight, 
  ArrowDownLeft,
  AlertTriangle,
  MapPin,
  Tag
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatCard } from '../../components/shared/StatCard';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { PageHeader } from '../../components/shared/PageHeader';

// Constants
import { INVENTORY_DATA } from '../../constants/mockData';

export default function InventoryList() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total SKU', value: '142', icon: <Package />, color: 'text-primary' },
    { label: 'Stok Kritis', value: '8', icon: <AlertTriangle />, color: 'text-error' },
    { label: 'Total Unit', value: '2.4K', icon: <Tag />, color: 'text-primary-fixed' },
    { label: 'Gudang Aktif', value: '4', icon: <MapPin />, color: 'text-tertiary-fixed' },
  ];

  const headerActions = (
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <QrCode size={18} /> Scan QR
      </button>
      <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
        <Plus size={18} /> Tambah Barang
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Daftar Inventaris" 
        subtitle="Infrastruktur & Aset Teknis" 
        actions={headerActions} 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Nama Barang, SKU, atau Serial..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-primary-fixed/50 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all font-bold uppercase tracking-widest text-[10px]">
            <Filter size={16} /> Filter Kategori
          </button>
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all font-bold uppercase tracking-widest text-[10px]">
            <ArrowDownLeft size={16} /> Stok Masuk
          </button>
        </div>
      </div>

      <GlassCard className="overflow-hidden" hover={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">NAMA BARANG / SKU</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">KATEGORI</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest text-center">STOK</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">LOKASI</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">STATUS</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-outline-variant/10">
              {INVENTORY_DATA.map((item, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id} 
                  className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <p className="text-primary font-bold uppercase tracking-tight">{item.name}</p>
                      <span className="text-[10px] text-primary-fixed font-mono font-bold tracking-widest opacity-60">{item.sku}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{item.category}</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex flex-col items-center">
                      <span className={`text-base font-mono font-bold ${item.qty <= item.minQty ? 'text-error' : 'text-on-surface'}`}>
                        {item.qty} {item.unit}
                      </span>
                      <span className="text-[9px] text-on-surface-variant uppercase tracking-tighter">Min: {item.minQty}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <MapPin size={14} className="text-primary-fixed opacity-50" />
                      <span className="text-xs italic">{item.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <StatusBadge status={item.status} type={item.status} />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant rounded-lg transition-all border border-outline-variant/10">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant rounded-lg transition-all border border-outline-variant/10">
                        <ArrowUpRight size={18} />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant rounded-lg transition-all border border-outline-variant/10">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <div className="flex items-center justify-between mt-4 px-2">
        <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Menampilkan 1-6 dari 142 Barang</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary border border-outline-variant/20 rounded-lg">Sebelumnya</button>
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-fixed border border-primary-fixed/20 bg-primary-fixed/5 rounded-lg shadow-[0_0_10px_rgba(95,251,214,0.1)]">Selanjutnya</button>
        </div>
      </div>
    </div>
  );
}
