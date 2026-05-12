import { motion } from 'framer-motion';
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  QrCode, 
  ArrowRightLeft, 
  Filter,
  MoreVertical,
  Edit2,
  History,
  MapPin,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function StockModule() {
  const stockItems = [
    { name: 'Cisco Catalyst 9300', sku: 'CS-9300-48P', category: 'Active Equipment', qty: 12, status: 'Healthy' },
    { name: 'Corning SMF-28 Ultra', sku: 'FBR-SMF-10K', category: 'Fiber', qty: 2, status: 'Low Stock' },
    { name: 'Ubiquiti UniFi AP AC Pro', sku: 'UB-UAP-AC', category: 'Active Equipment', qty: 0, status: 'Out of Stock' },
    { name: 'APC Smart-UPS 1500VA', sku: 'PWR-UPS-15K', category: 'Power', qty: 45, status: 'Healthy' },
    { name: 'SFP+ 10G Transceiver', sku: 'OPT-SFP-10G', category: 'Optics', qty: 8, status: 'Low Stock' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Healthy': return 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20';
      case 'Low Stock': return 'bg-tertiary-fixed/10 text-tertiary-fixed border-tertiary-fixed/20';
      case 'Out of Stock': return 'bg-error/10 text-error border-error/20';
      default: return 'bg-surface-variant text-on-surface-variant';
    }
  };

  return (
    <div className="flex flex-col gap-lg max-w-container-max mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-primary mb-1">Stock Management</h1>
          <p className="text-body-sm text-on-surface-variant uppercase tracking-widest font-label-caps">INFRASTRUCTURE CORE - STOCK & INVENTORY</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-2 rounded-lg text-body-sm font-medium hover:bg-surface-variant transition-all flex items-center gap-2">
            <QrCode size={18} />
            Scan Item
          </button>
          <button className="bg-primary-fixed text-[#0e1512] px-4 py-2 rounded-lg text-body-sm font-semibold hover:shadow-[0_0_15px_rgba(95,251,214,0.4)] transition-all flex items-center gap-2">
            <ArrowRightLeft size={18} />
            Record Transaction
          </button>
        </div>
      </div>

      {/* Stats Summary - Matching Billing Style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Package size={64} className="text-primary-fixed" />
          </div>
          <div className="relative z-10">
            <p className="text-label-caps text-on-surface-variant mb-2">TOTAL ITEMS</p>
            <h3 className="text-headline-lg text-primary mb-2 font-bold">12,458</h3>
            <div className="flex items-center text-body-sm">
              <span className="text-primary-fixed flex items-center bg-primary-fixed/10 px-2 py-0.5 rounded text-xs font-medium mr-2">
                <TrendingUp size={12} className="mr-1" /> +142
              </span>
              <span className="text-on-surface-variant opacity-70">this week</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant">
            <div className="h-full bg-primary-fixed w-full"></div>
          </div>
        </div>

        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <AlertTriangle size={64} className="text-error" />
          </div>
          <div className="relative z-10">
            <p className="text-label-caps text-on-surface-variant mb-2">LOW STOCK ALERTS</p>
            <h3 className="text-headline-lg text-primary mb-2 font-bold">24</h3>
            <div className="flex items-center text-body-sm">
              <span className="text-error flex items-center bg-error/10 px-2 py-0.5 rounded text-xs font-medium mr-2 uppercase tracking-tighter font-bold">
                Action Needed
              </span>
              <span className="text-on-surface-variant opacity-70">Requires attention</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant">
            <div className="h-full bg-error w-[60%]"></div>
          </div>
        </div>

        <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <TrendingUp size={64} className="text-primary-fixed" />
          </div>
          <div className="relative z-10">
            <p className="text-label-caps text-on-surface-variant mb-2">TOTAL VALUE</p>
            <h3 className="text-headline-lg text-primary mb-2 font-bold">$1.2M</h3>
            <div className="flex items-center text-body-sm">
              <span className="text-primary-fixed flex items-center bg-primary-fixed/10 px-2 py-0.5 rounded text-xs font-medium mr-2">
                Active
              </span>
              <span className="text-on-surface-variant opacity-70">Estimated current value</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant">
            <div className="h-full bg-primary-fixed w-[80%]"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Main Table Section - Matching Billing Style */}
        <div className="lg:col-span-2 flex flex-col gap-md">
          <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container/30">
              <h2 className="text-headline-md text-primary font-bold uppercase tracking-wider flex items-center gap-2">
                <Package size={20} className="text-primary-fixed" />
                Technical Inventory
              </h2>
              <div className="flex gap-2">
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded transition-colors border border-outline-variant/30">
                  <Filter size={18} />
                </button>
                <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded transition-colors border border-outline-variant/30">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/20">
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">Item Name</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">SKU/Serial</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest text-right">Qty</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-label-caps text-on-surface-variant font-medium text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-body-sm divide-y divide-outline-variant/10">
                  {stockItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-primary uppercase">{item.name}</td>
                      <td className="px-6 py-4 font-mono text-primary-fixed text-[11px] tracking-wider">{item.sku}</td>
                      <td className={`px-6 py-4 text-right font-mono font-bold ${item.qty < 5 ? 'text-error' : 'text-on-surface'}`}>{item.qty}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${getStatusStyle(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-on-surface-variant hover:text-primary-fixed transition-colors p-1 hover:bg-surface-variant rounded">
                          <Edit2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-outline-variant/20 flex justify-center bg-surface-container-low/30 group">
              <button className="text-primary-fixed text-body-sm font-medium hover:underline flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest font-label-caps">
                View Full Inventory <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Side Section - Matching Billing Style */}
        <div className="flex flex-col gap-lg">
          {/* Movement Timeline */}
          <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-5 border-b border-outline-variant/20 flex items-center gap-2">
              <History size={18} className="text-primary-fixed" />
              <h2 className="text-headline-md text-primary font-bold">Movements</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-[19px] before:h-full before:w-px before:bg-outline-variant/30">
                <div className="relative flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-[#0e1512] flex items-center justify-center shrink-0 z-10 shadow-[0_0_10px_rgba(95,251,214,0.3)]">
                    <Plus size={20} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 items-center gap-2">
                      <span className="text-body-sm font-bold text-primary">Stock In</span>
                      <span className="text-[10px] text-on-surface-variant opacity-60">10:42 AM</span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant">Received 50x <span className="text-primary-fixed font-bold">OPT-SFP-1G</span></p>
                    <p className="text-body-sm font-mono text-primary-fixed font-bold">WH-Alpha</p>
                  </div>
                </div>
                <div className="relative flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/50 text-on-surface-variant flex items-center justify-center shrink-0 z-10">
                    <ArrowRightLeft size={20} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 items-center gap-2">
                      <span className="text-body-sm font-bold text-primary">Stock Out</span>
                      <span className="text-[10px] text-on-surface-variant opacity-60">09:15 AM</span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant italic">Tech John D.</p>
                    <p className="text-body-sm font-mono text-on-surface font-bold">2x CS-9300-48P</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution Progress Bars */}
          <div className="bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center">
              <h2 className="text-headline-md text-primary font-bold">Distribution</h2>
              <MapPin size={18} className="text-on-surface-variant opacity-60" />
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-body-sm font-bold text-primary">WH-Alpha (Main)</span>
                  <span className="text-primary-fixed font-mono font-bold">65%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden border border-outline-variant/10">
                  <div className="bg-primary-fixed h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">8,097 items</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-body-sm font-bold text-primary">WH-Beta (Regional)</span>
                  <span className="text-tertiary-fixed font-mono font-bold">25%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden border border-outline-variant/10">
                  <div className="bg-tertiary-fixed h-full rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">3,114 items</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-body-sm font-bold text-primary">Tech Vans (Transit)</span>
                  <span className="text-on-surface-variant font-mono font-bold">10%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden border border-outline-variant/10">
                  <div className="bg-outline-variant h-full rounded-full" style={{ width: '10%' }}></div>
                </div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">1,247 items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
