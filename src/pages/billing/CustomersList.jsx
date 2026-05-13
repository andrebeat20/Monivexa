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
  Mail,
  Globe,
  ChevronRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { PageHeader } from '../../components/shared/PageHeader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

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

  const headerActions = (
    <button className="bg-primary-fixed text-[#0e1512] px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(95,251,214,0.3)] transition-all flex items-center gap-2">
      <UserPlus size={18} /> Add New Partner
    </button>
  );

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 max-w-container-max mx-auto w-full pb-20 px-4 md:px-0"
    >
      <PageHeader 
        title="CUSTOMER DIRECTORY" 
        subtitle="Global Partner Database • Active Subscriber Units" 
        actions={headerActions} 
      />

      {/* Stats Summary Panel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Base', value: '1,240', color: 'text-white' },
          { label: 'Verified Active', value: '1,180', color: 'text-primary-fixed' },
          { label: 'Deactivated', value: '45', color: 'text-red-400' },
          { label: 'Monthly Growth', value: '+12', color: 'text-primary-fixed' },
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GlassCard className="p-5 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-primary-fixed/5 transition-colors"></div>
              <p className="text-[9px] font-black text-white/40 uppercase mb-1 tracking-[0.2em]">{stat.label}</p>
              <p className={`text-2xl font-black tracking-tighter ${stat.color}`}>{stat.value}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Advanced Filter Bar */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-6 relative group">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-fixed transition-colors" />
          <input 
            type="text" 
            placeholder="Filter by Name, ID, or Contact Number..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all font-medium placeholder:text-white/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="md:col-span-3">
          <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/60 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-2"><Filter size={16} /> Plan Type</div>
            <ChevronRight size={14} />
          </button>
        </div>
        <div className="md:col-span-3">
          <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/60 hover:bg-white/10 transition-all">
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> Subscription</div>
            <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>

      {/* Partner Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((cust, idx) => (
          <motion.div 
            variants={itemVariants}
            key={cust.id}
            className="group relative"
          >
            <div className="absolute inset-0 bg-primary-fixed/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <GlassCard className="p-8 border border-white/5 relative z-10 transition-all group-hover:border-primary-fixed/20">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-fixed group-hover:bg-primary-fixed group-hover:text-[#0e1512] transition-all shadow-xl">
                  <Users size={32} />
                </div>
                <div className="flex flex-col items-end">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    cust.status === 'Active' ? 'bg-primary-fixed/10 text-primary-fixed' : 'bg-red-500/10 text-red-400'
                  }`}>
                    <div className={`w-1 h-1 rounded-full animate-pulse ${cust.status === 'Active' ? 'bg-primary-fixed' : 'bg-red-400'}`}></div>
                    {cust.status}
                  </span>
                  <span className="text-[10px] font-mono text-white/20 font-black tracking-widest mt-2 uppercase">{cust.id}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-primary-fixed transition-colors line-clamp-1">{cust.name}</h3>
                <div className="flex items-start gap-2 text-white/40">
                  <MapPin size={12} className="mt-1 shrink-0" />
                  <p className="text-[11px] font-medium leading-relaxed line-clamp-2 uppercase tracking-tight">{cust.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/[0.03] border border-white/5 p-3 rounded-xl">
                  <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Contact Unit</p>
                  <div className="flex items-center gap-2">
                    <Phone size={10} className="text-primary-fixed" />
                    <span className="text-[10px] font-bold text-white/80">{cust.phone}</span>
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 p-3 rounded-xl">
                  <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Service Plan</p>
                  <div className="flex items-center gap-2">
                    <Globe size={10} className="text-primary-fixed" />
                    <span className="text-[10px] font-bold text-white/80 uppercase">{cust.package}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-white/20">
                  <Calendar size={12} />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">{cust.since}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-white/40 hover:text-white transition-all">
                    <Mail size={16} />
                  </button>
                  <button className="px-5 py-2.5 bg-primary-fixed text-[#0e1512] rounded-xl font-black text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_rgba(95,251,214,0.3)] transition-all flex items-center gap-2">
                    Profile <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
