import { motion } from 'framer-motion';
import { 
  Zap, 
  Signal, 
  Search, 
  Terminal, 
  Wrench, 
  AlertCircle, 
  Play, 
  Clock,
  ShieldCheck,
  Cpu,
  RefreshCcw,
  MapPin,
  Activity
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { PageHeader } from '../../components/shared/PageHeader';
import { StatusBadge } from '../../components/shared/StatusBadge';

// Constants
import { NETWORK_TICKETS } from '../../constants/mockData';

export default function NetworkSupportPage() {
  const [onuSerial, setOnuSerial] = useState('');

  const tools = [
    { title: 'Attenuation Map', desc: 'Visualisasi redaman kabel per wilayah', icon: <Activity />, color: 'text-primary-fixed' },
    { title: 'Mass Troubleshooting', desc: 'Reset ONT massal dalam satu ODP', icon: <RefreshCcw />, color: 'text-orange-400' },
    { title: 'OLT Terminal', desc: 'Akses command line pusat OLT', icon: <Terminal />, color: 'text-tertiary-fixed' },
    { title: 'Fiber Cut Detector', desc: 'Analisis titik putus kabel FO', icon: <AlertCircle />, color: 'text-error' },
  ];

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Network Command Center" 
        subtitle="Pusat Investigasi & Bantuan Teknis Jaringan" 
        actions={
          <div className="bg-primary-fixed/10 border border-primary-fixed/20 px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></div>
            <span className="text-[10px] font-bold text-primary-fixed uppercase tracking-widest">Support System Online</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <div className="lg:col-span-2 flex flex-col gap-lg">
          <GlassCard className="p-8 relative overflow-hidden" hover={false}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/5 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
            
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3 uppercase tracking-tight">
              <Zap size={24} className="text-primary-fixed" />
              ONU Real-time Diagnostics
            </h3>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
                <input 
                  type="text" 
                  placeholder="Masukkan Serial Number ONU atau ID Pelanggan..." 
                  className="w-full bg-background/50 border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all font-mono"
                  value={onuSerial}
                  onChange={(e) => setOnuSerial(e.target.value)}
                />
              </div>
              <button className="bg-primary-fixed text-[#0e1512] px-8 py-4 rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(95,251,214,0.4)] transition-all flex items-center justify-center gap-2">
                <Play size={18} /> Run Diagnostics
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Optical Power', value: '-18.5 dBm', status: 'Excellent', icon: <Signal /> },
                { label: 'ONU Uptime', value: '14d 02h 11m', status: 'Stable', icon: <Clock /> },
                { label: 'Firmware', value: 'V1.0.2.P4', status: 'Latest', icon: <ShieldCheck /> },
              ].map((res, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-on-surface-variant">
                    <div className="text-primary-fixed">{res.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{res.label}</span>
                  </div>
                  <p className="text-lg font-bold text-primary">{res.value}</p>
                  <span className="text-[9px] font-bold text-primary-fixed uppercase tracking-tight">{res.status}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {tools.map((tool, i) => (
              <GlassCard key={i} className="p-6 cursor-pointer group" delay={0.1}>
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${tool.color} group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h4 className="text-base font-bold text-primary mb-1 uppercase tracking-tight">{tool.title}</h4>
                <p className="text-xs text-on-surface-variant">{tool.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-lg">
          <GlassCard className="p-6 flex-1 flex flex-col" hover={false}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
                <Wrench size={20} className="text-primary-fixed" />
                Technical Tickets
              </h3>
              <span className="text-[10px] font-bold text-error bg-error/10 px-2 py-0.5 rounded border border-error/20">3 ACTIVE</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
              {NETWORK_TICKETS.map((ticket, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-mono font-bold text-primary-fixed uppercase tracking-widest">{ticket.id}</span>
                    <StatusBadge status={ticket.priority} type={ticket.priority === 'Critical' ? 'error' : 'warning'} />
                  </div>
                  <h4 className="text-sm font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{ticket.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-on-surface-variant font-medium">
                    <MapPin size={10} /> {ticket.location}
                    <span className="opacity-20">•</span>
                    <span className="text-primary-fixed">{ticket.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 bg-surface-container-high border border-outline-variant/20 text-on-surface rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-surface-variant transition-all">
              Buka Semua Tiket Teknis
            </button>
          </GlassCard>

          <div className="bg-primary-fixed/5 border border-primary-fixed/20 p-6 rounded-3xl">
            <h4 className="text-xs font-bold text-primary-fixed mb-4 flex items-center gap-2 uppercase tracking-widest">
              <Cpu size={16} /> Server Load
            </h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-bold text-on-surface-variant uppercase tracking-tighter">
                  <span>API Response</span>
                  <span className="text-primary-fixed">14ms</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-primary-fixed h-full w-[20%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
