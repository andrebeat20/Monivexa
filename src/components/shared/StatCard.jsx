/**
 * StatCard - Compact card for displaying key metrics
 * @param {Object} props
 * @param {string} props.label
 * @param {string|number} props.value
 * @param {React.ReactNode} props.icon
 * @param {string} props.color - CSS class for color (text-primary, etc)
 * @param {string} props.trend - Optional trend text
 */
export const StatCard = ({ label, value, icon, color = 'text-primary', trend }) => {
  return (
    <div className="bg-[#1a211f]/60 border border-outline-variant/20 p-5 rounded-2xl relative overflow-hidden group">
      <div className="absolute -right-2 -bottom-2 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:scale-110 duration-700">
        {icon}
      </div>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 ${color}`}>
          {icon}
        </div>
        {trend && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 ${
            trend.includes('+') ? 'text-primary-fixed' : 'text-on-surface-variant'
          }`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-bold mb-1">{label}</p>
      <p className={`text-2xl font-black ${color}`}>{value}</p>
    </div>
  );
};
