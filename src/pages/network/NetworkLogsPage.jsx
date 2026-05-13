import { motion } from 'framer-motion';
import { 
  Database, 
  Terminal, 
  AlertTriangle, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  Clock, 
  Activity,
  Server,
  Network,
  Cpu
} from 'lucide-react';
import { useState } from 'react';

// Shared Components
import { GlassCard } from '../../components/shared/GlassCard';
import { PageHeader } from '../../components/shared/PageHeader';
import { StatusBadge } from '../../components/shared/StatusBadge';

// Constants
import { NETWORK_LOGS } from '../../constants/mockData';

export default function NetworkLogsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const getLogIcon = (level) => {
    switch (level) {
      case 'CRITICAL': return <AlertTriangle className="text-error" />;
      case 'WARNING': return <Cpu className="text-orange-400" />;
      case 'INFO': return <Database className="text-primary-fixed" />;
      default: return <Activity />;
    }
  };

  const headerActions = (
    <>
      <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
        <Download size={18} /> Export Log
      </button>
      <button className="bg-error/10 text-error border border-error/30 px-4 py-2 rounded-lg text-body-sm font-bold hover:bg-error/20 transition-all flex items-center gap-2">
        <Trash2 size={18} /> Clear Logs
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      <PageHeader 
        title="Log Jaringan" 
        subtitle="Catatan Aktivitas & Kejadian Sistem" 
        actions={headerActions} 
      />

      <div className="bg-[#1a211f]/60 border border-primary-fixed/20 p-4 rounded-xl flex items-center gap-4 shadow-[0_0_20px_rgba(95,251,214,0.05)]">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary-fixed/20 border border-primary-fixed flex items-center justify-center text-primary-fixed">
            <Terminal size={14} />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-primary tracking-wide uppercase">Live Feed Active</p>
          <p className="text-[10px] text-on-surface-variant font-medium">Monitoring 142 devices & 4 core routers...</p>
        </div>
      </div>

      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-lg">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Event, Source, atau Pesan Log..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all font-mono"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all uppercase tracking-widest font-bold text-[10px]">
          <Filter size={16} /> Filter Severity
        </button>
      </div>

      <GlassCard className="overflow-hidden" hover={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/40 border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest w-[200px]">TIMESTAMP</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest w-[120px]">LEVEL</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest w-[150px]">SOURCE</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">EVENT MESSAGE</th>
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-outline-variant/10 font-mono">
              {NETWORK_LOGS.map((log, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={log.id} 
                  className="hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-on-surface-variant/70 text-[11px]">
                      <Clock size={12} className="text-primary-fixed opacity-40" />
                      {log.timestamp}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={log.level} type={log.level === 'CRITICAL' ? 'error' : log.level === 'WARNING' ? 'warning' : 'success'} />
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-on-surface font-bold text-xs uppercase tracking-tight">{log.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 opacity-50">
                        {getLogIcon(log.level)}
                      </div>
                      <p className={`text-xs ${log.level === 'CRITICAL' ? 'text-error font-bold' : 'text-on-surface-variant group-hover:text-primary transition-colors'}`}>
                        {log.message}
                      </p>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-black/40 border-t border-outline-variant/20 flex justify-center">
          <button className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.3em] hover:text-primary-fixed transition-colors flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full animate-pulse"></span>
            Streaming Older Logs
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
