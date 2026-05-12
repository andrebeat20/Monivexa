import { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { 
  Network, 
  Server, 
  Radio, 
  AlertTriangle, 
  Search, 
  Bell, 
  Settings, 
  Database,
  ChevronRight,
  Maximize2,
  Layers,
  MapPin,
  Activity
} from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export default function NetworkModule() {
  const [viewport, setViewport] = useState({
    latitude: -6.2088,
    longitude: 106.8456,
    zoom: 12
  });

  const devices = [
    { name: 'JKT-CORE-01', id: '98A-B2-C1', status: 'Online', type: 'OLT' },
    { name: 'SBY-CORE-02', id: '77F-X9-D4', status: 'Online', type: 'OLT' },
    { name: 'BDG-EDGE-05', id: '11C-Z8-E2', status: 'Degraded', type: 'OLT' },
    { name: 'MDN-CORE-03', id: '55E-R1-F7', status: 'Online', type: 'OLT' },
    { name: 'MKS-CORE-04', id: '22G-T2-H9', status: 'Online', type: 'OLT' },
  ];

  return (
    <div className="absolute inset-0 flex flex-col bg-background overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <Map
          {...viewport}
          onMove={evt => setViewport(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/dark-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          style={{ width: '100%', height: '100%' }}
        >
          <NavigationControl position="bottom-left" />
        </Map>
        {/* Technical Overlay Grid */}
        <div className="absolute inset-0 pointer-events-none network-grid opacity-20 z-10"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-background/50 z-10"></div>
      </div>

      {/* Top Overlay: Health Stats - Matching Billing Style HUD */}
      <div className="absolute top-4 left-4 right-4 z-30 flex gap-4 max-w-[calc(100%-340px)] overflow-x-auto pb-2 scrollbar-hide">
        {/* Stat Card 1 */}
        <div className="bg-[#1a211f]/90 backdrop-blur-xl border border-outline-variant/30 p-4 rounded-xl min-w-[220px] flex-shrink-0 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-fixed to-transparent opacity-50"></div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Total Active OLTs</span>
            <Network size={16} className="text-primary-fixed" />
          </div>
          <div className="text-3xl font-bold text-primary">142</div>
          <div className="text-[11px] text-primary-fixed mt-1 flex items-center gap-1 font-bold">
            <Activity size={12} />
            <span>99.9% Uptime</span>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-[#1a211f]/90 backdrop-blur-xl border border-outline-variant/30 p-4 rounded-xl min-w-[220px] flex-shrink-0 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-fixed to-transparent opacity-50"></div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Online Customers</span>
            <Radio size={16} className="text-primary-fixed" />
          </div>
          <div className="text-3xl font-bold text-primary">84,592</div>
          <div className="text-[11px] text-on-surface-variant mt-1 font-medium">Across 12 regions</div>
        </div>

        {/* Stat Card 3 (Alert) */}
        <div className="bg-[#1a211f]/90 backdrop-blur-xl border border-error/30 p-4 rounded-xl min-w-[220px] flex-shrink-0 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-error to-transparent opacity-50"></div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-label-caps text-error uppercase tracking-widest font-bold">Signal Alerts</span>
            <AlertTriangle size={16} className="text-error" />
          </div>
          <div className="text-3xl font-bold text-primary">17</div>
          <div className="text-[11px] text-error mt-1 flex items-center gap-1 font-bold">
            <AlertTriangle size={12} />
            <span>Requires attention</span>
          </div>
        </div>
      </div>

      {/* Right Panel: Device Explorer */}
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#1a211f]/95 backdrop-blur-2xl border-l border-outline-variant/30 flex flex-col z-30 shadow-[-8px_0_24px_rgba(0,0,0,0.6)]">
        <div className="p-6 border-b border-outline-variant/20 bg-surface-container/30">
          <h2 className="text-headline-md font-bold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
            <Layers size={20} className="text-primary-fixed" />
            Explorer
          </h2>
          <div className="flex gap-2 p-1 bg-background/50 rounded-lg border border-outline-variant/20">
            <button className="flex-1 py-1.5 px-3 bg-primary-fixed text-[#0e1512] rounded-md font-label-caps text-[11px] font-bold text-center transition-all shadow-lg shadow-primary-fixed/10">OLTs</button>
            <button className="flex-1 py-1.5 px-3 bg-transparent text-on-surface-variant rounded-md font-label-caps text-[11px] font-medium text-center hover:text-primary transition-all">ODPs</button>
          </div>
        </div>

        {/* Search inside panel */}
        <div className="p-4 border-b border-outline-variant/10">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
            <input 
              type="text" 
              placeholder="Search serial or ONU..."
              className="w-full bg-background/50 border border-outline-variant/20 rounded-lg py-2 pl-9 pr-4 text-[12px] text-on-surface focus:border-primary-fixed outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {devices.map((device, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded-xl hover:bg-surface-variant/30 cursor-pointer transition-all border border-transparent hover:border-outline-variant/30 flex items-center justify-between group"
            >
              <div>
                <div className="text-body-sm font-bold text-on-surface group-hover:text-primary-fixed transition-colors">{device.name}</div>
                <div className="text-[10px] font-label-caps text-on-surface-variant opacity-60 uppercase tracking-widest">ID: {device.id}</div>
              </div>
              <div className={`px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest border ${
                device.status === 'Online' 
                ? 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20' 
                : 'bg-error/10 text-error border-error/20'
              }`}>
                {device.status}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom panel action */}
        <div className="p-4 border-t border-outline-variant/20 bg-surface-container/20">
          <button className="w-full py-3 bg-surface-container-high border border-outline-variant/30 text-on-surface rounded-xl font-label-caps text-[11px] font-bold hover:bg-surface-variant transition-all flex items-center justify-center gap-2 group">
            <Maximize2 size={14} className="text-primary-fixed group-hover:scale-110 transition-transform" />
            Open Detailed Topology
          </button>
        </div>
      </div>

      {/* Map Controls (Floating) */}
      <div className="absolute bottom-8 left-20 z-30 flex flex-col gap-2">
        <div className="bg-[#1a211f]/90 backdrop-blur-xl border border-outline-variant/30 p-2 rounded-xl flex flex-col gap-2 shadow-2xl">
          <button className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary-fixed hover:bg-surface-variant/50 rounded-lg transition-all" title="Map Layers">
            <Layers size={20} />
          </button>
          <div className="h-px w-full bg-outline-variant/20"></div>
          <button className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-primary-fixed hover:bg-surface-variant/50 rounded-lg transition-all" title="Focus Center">
            <MapPin size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
