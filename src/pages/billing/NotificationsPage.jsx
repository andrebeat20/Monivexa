import { motion } from 'framer-motion';
import { 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Mail, 
  MessageSquare, 
  Trash2, 
  MoreHorizontal,
  Search,
  Settings
} from 'lucide-react';
import { useState } from 'react';

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    { 
      id: 1, 
      title: 'Pembayaran Berhasil', 
      desc: 'Pelanggan RUMAH MANUS telah melunasi tagihan INV-2605-001 sebesar Rp 450.000.', 
      time: '10 menit yang lalu', 
      type: 'success', 
      isRead: false 
    },
    { 
      id: 2, 
      title: 'Pengingat Jatuh Tempo', 
      desc: 'Tagihan INV-2605-003 (KOSMEN ADEN) akan jatuh tempo dalam 2 hari.', 
      time: '2 jam yang lalu', 
      type: 'warning', 
      isRead: false 
    },
    { 
      id: 3, 
      title: 'Sistem Update', 
      desc: 'Maintenance sistem Monivexa selesai. Semua layanan normal kembali.', 
      time: '5 jam yang lalu', 
      type: 'info', 
      isRead: true 
    },
    { 
      id: 4, 
      title: 'Pendaftaran Baru', 
      desc: 'Calon pelanggan baru (Bpk. Ahmad) telah mengisi formulir pendaftaran.', 
      time: '1 hari yang lalu', 
      type: 'info', 
      isRead: true 
    },
    { 
      id: 5, 
      title: 'Tiket Pengaduan', 
      desc: 'Pelanggan CUST-004 melaporkan gangguan koneksi di wilayah Serasau.', 
      time: '2 hari yang lalu', 
      type: 'error', 
      isRead: true 
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle2 className="text-primary-fixed" size={20} />;
      case 'warning': return <Clock className="text-tertiary-fixed" size={20} />;
      case 'error': return <AlertCircle className="text-error" size={20} />;
      default: return <Bell className="text-on-surface-variant" size={20} />;
    }
  };

  return (
    <div className="flex flex-col gap-lg max-w-[800px] mx-auto w-full pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Notifikasi</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">Informasi & Aktivitas Sistem Terbaru</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-lg hover:bg-surface-variant">
            <Settings size={20} />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-error transition-all rounded-lg hover:bg-surface-variant">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-outline-variant/20">
        {['all', 'unread', 'system', 'billing'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all relative ${
              activeTab === tab ? 'text-primary-fixed' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-fixed shadow-[0_0_8px_rgba(95,251,214,0.6)]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="flex flex-col gap-3">
        {notifications.map((note, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={note.id}
            className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-start gap-4 relative overflow-hidden ${
              note.isRead 
              ? 'bg-[#1a211f]/40 border-outline-variant/10' 
              : 'bg-[#1a211f] border-primary-fixed/20 shadow-lg'
            }`}
          >
            {!note.isRead && (
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-fixed"></div>
            )}
            
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              note.isRead ? 'bg-surface-container' : 'bg-primary-fixed/10'
            }`}>
              {getIcon(note.type)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4 mb-1">
                <h3 className={`font-bold uppercase tracking-tight truncate ${note.isRead ? 'text-on-surface-variant' : 'text-primary'}`}>
                  {note.title}
                </h3>
                <span className="text-[10px] text-on-surface-variant font-medium whitespace-nowrap opacity-60">
                  {note.time}
                </span>
              </div>
              <p className={`text-body-sm leading-relaxed ${note.isRead ? 'text-on-surface-variant/70' : 'text-on-surface'}`}>
                {note.desc}
              </p>
              
              {!note.isRead && (
                <div className="mt-3 flex gap-2">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed hover:underline">Tandai Dibaca</button>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Lihat Detail</button>
                </div>
              )}
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-on-surface-variant hover:text-primary">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <button className="py-4 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary-fixed transition-colors flex items-center justify-center gap-2 border-t border-outline-variant/10 mt-4">
        Lihat Riwayat Notifikasi Lama
      </button>
    </div>
  );
}
