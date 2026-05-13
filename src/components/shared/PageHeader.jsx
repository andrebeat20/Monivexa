/**
 * PageHeader - Standard header for all dashboard pages
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {React.ReactNode} props.actions - Action buttons
 */
export const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
      <div>
        <h1 className="text-headline-lg font-headline-lg text-primary mb-1 uppercase tracking-tight">{title}</h1>
        <p className="text-body-sm text-on-surface-variant uppercase tracking-[0.2em] font-label-caps opacity-70">{subtitle}</p>
      </div>
      {actions && <div className="flex gap-3 items-center">{actions}</div>}
    </div>
  );
};
