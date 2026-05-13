/**
 * Centralized Mock Data for Monivexa Dashboard
 * This file centralizes all dummy data for easier maintenance and 
 * clean separation between UI and Data layers.
 */

// --- STOCK MODULE DATA ---

export const INVENTORY_DATA = [
  { id: 1, name: 'Cisco Catalyst 9300', sku: 'CS-9300-48P', category: 'Active Equipment', qty: 12, minQty: 5, unit: 'Unit', location: 'WH-ALPHA / RACK-A1', status: 'Healthy' },
  { id: 2, name: 'Corning SMF-28 Ultra', sku: 'FBR-SMF-10K', category: 'Fiber', qty: 2, minQty: 10, unit: 'Drum', location: 'WH-ALPHA / YARD', status: 'Low Stock' },
  { id: 3, name: 'Ubiquiti UniFi AP AC Pro', sku: 'UB-UAP-AC', category: 'Active Equipment', qty: 0, minQty: 15, unit: 'Unit', location: 'WH-BETA / SHELF-B', status: 'Out of Stock' },
  { id: 4, name: 'APC Smart-UPS 1500VA', sku: 'PWR-UPS-15K', category: 'Power', qty: 45, minQty: 20, unit: 'Unit', location: 'WH-ALPHA / RACK-C2', status: 'Healthy' },
  { id: 5, name: 'SFP+ 10G Transceiver', sku: 'OPT-SFP-10G', category: 'Optics', qty: 8, minQty: 50, unit: 'Pcs', location: 'WH-ALPHA / BOX-SFP', status: 'Low Stock' },
  { id: 6, name: 'MikroTik CCR2004', sku: 'MT-CCR-2004', category: 'Active Equipment', qty: 5, minQty: 2, unit: 'Unit', location: 'WH-BETA / RACK-A1', status: 'Healthy' },
];

export const WAREHOUSES_DATA = [
  { id: 'WH-ALPHA', name: 'Gudang Utama (Alpha)', location: 'Jl. Ahmad Yani No. 12, Pontianak', manager: 'Budi Santoso', items: 8097, capacity: 85, type: 'Central Distribution' },
  { id: 'WH-BETA', name: 'Hub Regional (Beta)', location: 'Mempawah Hilir, Kab. Mempawah', manager: 'Siti Aminah', items: 3114, capacity: 45, type: 'Regional Hub' },
  { id: 'WH-GAMMA', name: 'Gudang Satelit (Gamma)', location: 'Singkawang Barat', manager: 'Andi Wijaya', items: 1247, capacity: 20, type: 'Satellite Storage' },
  { id: 'VAN-TECH-01', name: 'Teknisi Van 01', location: 'Mobile / In-Transit', manager: 'John Doe', items: 142, capacity: 70, type: 'Transit Stock' }
];

export const LOGISTICS_TRANSACTIONS = [
  { id: 'LOG-2024-001', type: 'STOCK IN', item: 'SFP+ 10G Transceiver', qty: 50, from: 'Vendor: FiberOptic ID', to: 'WH-ALPHA', status: 'Received', date: '14 May 2026', user: 'Budi Santoso' },
  { id: 'LOG-2024-002', type: 'TRANSFER', item: 'Cisco Catalyst 9300', qty: 2, from: 'WH-ALPHA', to: 'WH-BETA', status: 'In Transit', date: '14 May 2026', user: 'Siti Aminah' },
  { id: 'LOG-2024-003', type: 'STOCK OUT', item: 'MikroTik CCR2004', qty: 1, from: 'WH-BETA', to: 'Customer: RUMAH MANUS', status: 'Delivered', date: '13 May 2026', user: 'John Doe (Tech)' },
  { id: 'LOG-2024-004', type: 'STOCK IN', item: 'Corning SMF-28 Ultra', qty: 5, from: 'Vendor: Global Link', to: 'WH-ALPHA', status: 'Pending', date: '13 May 2026', user: 'Andi Wijaya' },
  { id: 'LOG-2024-005', type: 'TRANSFER', item: 'Ubiquiti UniFi AP AC Pro', qty: 10, from: 'WH-ALPHA', to: 'VAN-TECH-01', status: 'Received', date: '12 May 2026', user: 'John Doe (Tech)' }
];

// --- NETWORK MODULE DATA ---

export const OLT_DEVICES = [
  { id: 'OLT-001', name: 'JKT-CORE-01', model: 'ZTE C320', ip: '10.20.30.1', temp: 42, cpu: 15, ponPorts: 16, activeOnu: 842, status: 'Online' },
  { id: 'OLT-002', name: 'SBY-CORE-02', model: 'Huawei MA5608T', ip: '10.20.30.2', temp: 58, cpu: 45, ponPorts: 8, activeOnu: 412, status: 'Online' },
  { id: 'OLT-003', name: 'BDG-EDGE-05', model: 'ZTE C320', ip: '10.20.40.15', temp: 72, cpu: 88, ponPorts: 8, activeOnu: 156, status: 'Degraded' },
  { id: 'OLT-004', name: 'MDN-CORE-03', model: 'Huawei MA5800', ip: '10.20.50.5', temp: 38, cpu: 12, ponPorts: 32, activeOnu: 1245, status: 'Online' }
];

export const ODP_LIST = [
  { id: 'ODP-JKT-001', name: 'ODP-PLZ-A1', location: 'Plaza Senayan, Lt. 1', capacity: 16, used: 14, status: 'Full' },
  { id: 'ODP-JKT-002', name: 'ODP-SRA-B2', location: 'Jl. Serasau No. 45', capacity: 8, used: 3, status: 'Available' },
  { id: 'ODP-JKT-003', name: 'ODP-MMP-C3', location: 'Pasar Mempawah Blok B', capacity: 16, used: 16, status: 'Full' },
  { id: 'ODP-JKT-004', name: 'ODP-KOR-D4', location: 'Perum Korpri Blok C', capacity: 8, used: 7, status: 'Available' },
  { id: 'ODP-JKT-005', name: 'ODP-AYN-E5', location: 'Jl. Ahmad Yani Gg. 1', capacity: 16, used: 8, status: 'Available' },
];

export const NETWORK_TICKETS = [
  { id: 'TECH-771', title: 'High Latency Report', location: 'JKT-SOUTH', priority: 'High', status: 'Investigating' },
  { id: 'TECH-775', title: 'Massive Loss of Signal', location: 'BDG-WEST', priority: 'Critical', status: 'Dispatched' },
  { id: 'TECH-778', title: 'OLT Temperature Warning', location: 'SBY-CORE', priority: 'Medium', status: 'Monitoring' },
];

export const NETWORK_LOGS = [
  { id: 1, timestamp: '14 May 2026 10:15:22', level: 'CRITICAL', source: 'OLT-JKT-01', message: 'Fiber Cut Detected - Link Down towards ODP-PLZ-A1' },
  { id: 2, timestamp: '14 May 2026 09:42:10', level: 'WARNING', source: 'SBY-CORE-02', message: 'High CPU Load (88%) detected on Control Card' },
  { id: 3, timestamp: '14 May 2026 08:30:45', level: 'INFO', source: 'SYSTEM', message: 'Daily Backup completed successfully to Cloud-Alpha' },
  { id: 4, timestamp: '13 May 2026 23:58:01', level: 'INFO', source: 'RADIUS', message: 'Scheduled maintenance: Restarting Authentication Service' },
  { id: 5, timestamp: '13 May 2026 22:15:33', level: 'CRITICAL', source: 'JKT-CORE-01', message: 'AC Power Loss - Switching to DC Battery Backup' },
  { id: 6, timestamp: '13 May 2026 18:10:12', level: 'WARNING', source: 'BDG-EDGE-05', message: 'High Optical Attenuation (> -28dBm) on PON Port 4' },
];
