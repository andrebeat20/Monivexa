/**
 * StatusBadge - Styled badge for status indicators
 * @param {Object} props
 * @param {string} props.status
 * @param {string} props.type - 'default', 'error', 'warning', 'success'
 */
export const StatusBadge = ({ status, type = 'default' }) => {
  const getStyle = () => {
    switch (type) {
      case 'success':
      case 'Healthy':
      case 'Online':
      case 'Received':
      case 'Delivered':
        return 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20 shadow-[0_0_10px_rgba(95,251,214,0.1)]';
      case 'error':
      case 'Critical':
      case 'Out of Stock':
      case 'Full':
        return 'bg-error/10 text-error border-error/20';
      case 'warning':
      case 'Low Stock':
      case 'Degraded':
      case 'In Transit':
        return 'bg-orange-400/10 text-orange-400 border-orange-400/20';
      default:
        return 'bg-white/5 text-on-surface-variant border-white/10';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${getStyle()}`}>
      {status}
    </span>
  );
};
