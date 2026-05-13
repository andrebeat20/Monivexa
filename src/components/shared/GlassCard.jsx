import { motion } from 'framer-motion';

/**
 * GlassCard - A reusable container with glassmorphism effect
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.hover - Enable hover border effect
 * @param {number} props.delay - Animation delay
 */
export const GlassCard = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`
        bg-[#1a211f]/80 backdrop-blur-md border border-outline-variant/30 rounded-3xl 
        ${hover ? 'hover:border-primary-fixed/30 transition-all shadow-xl hover:shadow-primary-fixed/5' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
