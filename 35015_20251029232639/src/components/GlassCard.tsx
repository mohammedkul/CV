import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
      className={`backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-purple-950/20 
        border border-purple-500/30 rounded-2xl p-6 shadow-xl 
        hover:border-purple-400/50 transition-all duration-300 ${className}`}>

      {children}
    </motion.div>);

}