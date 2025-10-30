import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
  delay?: number;
}

export default function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-4">

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-purple-300 font-bold">{level}%</span>
      </div>
      <div className="h-3 bg-purple-950/50 rounded-full overflow-hidden border border-purple-500/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-yellow-400 
            rounded-full shadow-lg shadow-purple-500/50" />





















      </div>
    </motion.div>);

}