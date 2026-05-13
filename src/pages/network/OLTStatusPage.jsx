import { motion } from 'framer-motion';
import { 
  Network, 
  Cpu, 
  Thermometer, 
  Zap, 
  Activity, 
  Search, 
  Filter, 
  Radio,
  BarChart2,
  MoreVertical,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { StatCard } from '../../components/shared/StatCard';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { PageHeader } from '../../components/shared/PageHeader';

// Constants
import { OLT_DEVICES } from '../../constants/mockData';

export default function OLTStatusPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total OLT', value: '142', icon: <Network />, color: 'text-primary' },
    { label: 'Beban CPU', value: '24%', icon: <Cpu />, color: 'text-primary-fixed' },
    { label: 'Suhu Rata-rata', value: '45°C', icon: <Thermometer />, color: 'text-tertiary-fixed' },
    { label: 'Total ONU Online', value: '84.5K', icon: <Activity />, color: 'text-primary-fixed' },
  ];

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Status OLT & Core" 
        subtitle="Monitoring Perangkat Pusat Jaringan" 
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-lg">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Nama OLT, Model, atau IP Management..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all uppercase tracking-widest font-bold text-[10px]">
          <Filter size={16} /> Filter Vendor
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        {OLT_DEVICES.map((olt, idx) => (
          <GlassCard key={olt.id} delay={idx * 0.05} className="p-6 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${
              olt.status === 'Online' ? 'bg-primary-fixed' : 'bg-error'
            }`}></div>

            <div className="flex justify-between items-start mb-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${olt.status === 'Online' ? 'text-primary-fixed' : 'text-error'}`}>
                  <Radio size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary uppercase tracking-tight">{olt.name}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">
                    <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">{olt.model}</span>
                    <span className="opacity-40">|</span>
                    <span className="text-primary-fixed">{olt.ip}</span>
                  </div>
                </div>
              </div>
              <StatusBadge status={olt.status} type={olt.status} />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <Thermometer size={14} className={`mx-auto mb-1 ${olt.temp > 60 ? 'text-error' : 'text-primary-fixed'}`} />
                <p className="text-[9px] text-on-surface-variant uppercase font-bold tracking-tighter">Temperature</p>
                <p className={`text-lg font-mono font-bold ${olt.temp > 60 ? 'text-error' : 'text-primary'}`}>{olt.temp}°C</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <Cpu size={14} className={`mx-auto mb-1 ${olt.cpu > 80 ? 'text-error' : 'text-primary-fixed'}`} />
                <p className="text-[9px] text-on-surface-variant uppercase font-bold tracking-tighter">CPU Load</p>
                <p className={`text-lg font-mono font-bold ${olt.cpu > 80 ? 'text-error' : 'text-primary'}`}>{olt.cpu}%</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <Zap size={14} className="mx-auto mb-1 text-primary-fixed" />
                <p className="text-[9px] text-on-surface-variant uppercase font-bold tracking-tighter">PON Ports</p>
                <p className="text-lg font-mono font-bold text-primary">{olt.ponPorts}</p>
              </div>
            </div>

            <div className="bg-black/20 p-4 rounded-2xl border border-white/5 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">ONU Utilization</span>
                <span className="text-[10px] font-mono text-primary-fixed font-bold">{olt.activeOnu} / {olt.ponPorts * 64} Users</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="bg-primary-fixed h-full" style={{ width: `${(olt.activeOnu / (olt.ponPorts * 64)) * 100}%` }}></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
              <button className="text-[10px] font-bold text-primary-fixed flex items-center gap-2 hover:underline uppercase tracking-widest">
                Port Monitor <BarChart2 size={14} />
              </button>
              <div className="flex gap-2">
                <button className="bg-primary-fixed text-[#0e1512] text-[10px] font-bold px-4 py-2 rounded-xl hover:shadow-[0_0_10px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
                  Console <ArrowRight size={14} />
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
