import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Search, 
  Filter, 
  MapPin, 
  Phone, 
  Calendar,
  CheckCircle2,
  Clock,
  ClipboardList,
  Wrench,
  MoreVertical,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function RegistrationPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const applications = [
    { id: 'REG-2024-001', name: 'Bpk. Ahmad Sujana', address: 'Komp. Surya Deli No. 45', phone: '0812-5566-7788', package: 'Paket Bisnis', status: 'Surveying', date: '12 May 2026' },
    { id: 'REG-2024-002', name: 'Ibu Ratna Sari', address: 'Jl. Merdeka Gg. Baru', phone: '0852-1122-3344', package: 'Paket Basic', status: 'Pending Approval', date: '13 May 2026' },
    { id: 'REG-2024-003', name: 'Toko Maju Jaya', address: 'Pasar Mempawah Blok A', phone: '0813-9988-7766', package: 'Paket Premium', status: 'Ready to Install', date: '11 May 2026' },
    { id: 'REG-2024-004', name: 'Sdr. Kevin', address: 'Perum Korpri Blok C1', phone: '0896-4433-2211', package: 'Paket Basic', status: 'Canceled', date: '10 May 2026' },
    { id: 'REG-2024-005', name: 'Bpk. Ridwan', address: 'Jl. Ahmad Yani No. 12', phone: '0821-7788-9900', package: 'Paket Bisnis', status: 'Installed', date: '08 May 2026' },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Surveying': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Pending Approval': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Ready to Install': return 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20';
      case 'Installed': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Canceled': return 'bg-error/10 text-error border-error/20';
      default: return 'bg-white/5 text-on-surface-variant border-white/10';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Surveying': return <ClipboardList size={14} />;
      case 'Pending Approval': return <Clock size={14} />;
      case 'Ready to Install': return <Wrench size={14} />;
      case 'Installed': return <CheckCircle2 size={14} />;
      default: return <Clock size={14} />;
    }
  };

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Antrian Pendaftaran</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Kelola Calon Pelanggan & Instalasi Baru</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <UserPlus size={18} />
            Input Pendaftaran Manual
          </button>
        </div>
      </div>

      {/* Pipeline Steps View */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-md">
        {[
          { label: 'Aplikasi Masuk', count: 12, icon: <UserPlus /> },
          { label: 'Survey Lokasi', count: 5, icon: <ClipboardList /> },
          { label: 'Menunggu Persetujuan', count: 3, icon: <Clock /> },
          { label: 'Siap Instalasi', count: 7, icon: <Wrench /> },
          { label: 'Aktif Bulan Ini', count: 45, icon: <CheckCircle2 /> },
        ].map((step, i) => (
          <div key={i} className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col items-center text-center gap-2">
            <div className="text-primary-fixed opacity-50">{step.icon}</div>
            <p className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">{step.label}</p>
            <p className="text-2xl font-extrabold text-primary">{step.count}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-lg">
        <div className="relative flex-grow w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
          <input 
            type="text" 
            placeholder="Cari Nama atau ID Pendaftaran..." 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary-fixed/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2.5 rounded-lg text-body-sm hover:bg-surface-variant transition-all uppercase tracking-widest font-bold text-[10px]">
            <Filter size={16} /> Filter Tahapan
          </button>
        </div>
      </div>

      {/* Registration Table */}
      <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">TANGGAL</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">CALON PELANGGAN</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">LOKASI</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">PAKET</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium">STATUS TAHAPAN</th>
                <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-outline-variant/10">
              {applications.map((app, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={app.id} 
                  className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-on-surface font-medium">{app.date}</span>
                      <span className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest opacity-60">{app.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <p className="text-primary font-bold uppercase tracking-tight">{app.name}</p>
                      <div className="flex items-center gap-1.5 text-on-surface-variant text-[11px]">
                        <Phone size={10} className="text-primary-fixed" /> {app.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 max-w-[200px]">
                    <div className="flex items-start gap-2 text-on-surface-variant">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-primary-fixed" />
                      <span className="line-clamp-2 italic">{app.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-bold text-on-surface uppercase tracking-wider">{app.package}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-bold text-[10px] uppercase tracking-widest ${getStatusStyle(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="bg-surface-container-high hover:bg-primary-fixed/20 p-2 rounded-lg text-on-surface-variant hover:text-primary-fixed transition-all">
                        <ChevronRight size={18} />
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
        
        {/* Pagination/Status Hint */}
        <div className="p-4 border-t border-outline-variant/20 flex justify-between items-center bg-surface-container-low/30">
          <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-medium italic">
            * Data diperbarui secara otomatis dari portal pendaftaran online.
          </p>
          <button className="text-primary-fixed text-xs font-bold hover:underline">Lihat Semua Antrian</button>
        </div>
      </div>
    </div>
  );
}
