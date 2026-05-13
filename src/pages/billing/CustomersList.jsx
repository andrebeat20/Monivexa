import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical, 
  MapPin, 
  Phone, 
  Package,
  CheckCircle2,
  XCircle,
  Mail
} from 'lucide-react';
import { useState } from 'react';

export default function CustomersList() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    { id: 'CUST-001', name: 'RUMAH MANUS', address: 'JL. SANGGAU, PONTIANAK', phone: '0812-3456-7890', package: 'Paket Bisnis', status: 'Active', since: 'Jan 2024' },
    { id: 'CUST-002', name: 'AMSAL', address: 'SEGURI, KAB. MEMPAWAH', phone: '0852-9876-5432', package: 'Paket Bisnis', status: 'Active', since: 'Feb 2024' },
    { id: 'CUST-003', name: 'KOSMEN ADEN', address: 'SEGURI, KAB. MEMPAWAH', phone: '0813-1122-3344', package: 'Paket Premium', status: 'Inactive', since: 'Mar 2024' },
    { id: 'CUST-004', name: 'HERMAN FILIPUS', address: 'SERASAU, PONTIANAK', phone: '0896-5544-3322', package: 'Paket Basic', status: 'Active', since: 'Apr 2024' },
    { id: 'CUST-005', name: 'KUTREK', address: 'SURYA DELI, PONTIANAK', phone: '0821-6677-8899', package: 'Paket Bisnis', status: 'Active', since: 'May 2024' },
  ];

  const filteredCustomers = customers.filter(cust => 
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cust.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Manajemen Pelanggan</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Database Pelanggan PT SAFANET DIGITAL NETWORKING</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <UserPlus size={18} />
            Tambah Pelanggan
          </button>
        </div>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
        {[
          { label: 'Total Pelanggan', value: '1.240', color: 'text-primary' },
          { label: 'Pelanggan Aktif', value: '1.180', color: 'text-primary-fixed' },
          { label: 'Isolir / Inaktif', value: '45', color: 'text-error' },
          { label: 'New This Month', value: '+12', color: 'text-primary-fixed' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl">
            <p className="text-[10px] font-label-caps text-on-surface-variant uppercase mb-1 tracking-wider">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-[#1a211f]/60 backdrop-blur-md border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Nama, ID, atau No HP..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-primary-fixed/50 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all">
            <Filter size={18} />
            Semua Paket
          </button>
          <button className="flex-1 md:flex-none flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all">
            <CheckCircle2 size={18} />
            Status Aktif
          </button>
        </div>
      </div>

      {/* Customers Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {filteredCustomers.map((cust, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={cust.id}
            className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-6 hover:border-primary-fixed/30 transition-all group relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-on-surface-variant hover:text-primary">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary-fixed">
                <Users size={28} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-primary truncate uppercase">{cust.name}</h3>
                  {cust.status === 'Active' ? (
                    <div className="w-2 h-2 rounded-full bg-primary-fixed shadow-[0_0_8px_rgba(95,251,214,0.6)]"></div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-error shadow-[0_0_8px_rgba(255,180,171,0.6)]"></div>
                  )}
                </div>
                <p className="text-[10px] font-mono text-primary-fixed/70 font-bold uppercase tracking-widest">{cust.id}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-on-surface-variant mt-1 shrink-0" />
                <p className="text-body-sm text-on-surface-variant line-clamp-2">{cust.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-on-surface-variant shrink-0" />
                <p className="text-body-sm text-on-surface">{cust.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Package size={14} className="text-on-surface-variant shrink-0" />
                <span className="text-xs font-bold bg-primary-fixed/10 text-primary-fixed px-2 py-0.5 rounded border border-primary-fixed/20">{cust.package}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-60">Terdaftar: {cust.since}</p>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container border border-outline-variant/30 rounded-lg text-on-surface-variant hover:text-primary-fixed transition-all" title="Email">
                  <Mail size={16} />
                </button>
                <button className="p-2 bg-primary-fixed text-[#0e1512] rounded-lg font-bold text-xs px-3 hover:shadow-[0_0_10px_rgba(95,251,214,0.3)] transition-all">
                  Detail
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
