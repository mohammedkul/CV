import { motion } from 'framer-motion';

export default function RocketLaunch() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <motion.div
        initial={{ y: 0, scale: 1, rotateX: 0 }}
        animate={{
          y: -1000,
          scale: 0.5,
          rotateX: -20
        }}
        transition={{ duration: 2, ease: 'easeIn' }}
        className="relative">

        {/* Rocket body */}
        <motion.div
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}>

          {/* Main rocket */}
          <div className="w-16 h-32 bg-gradient-to-b from-purple-400 to-purple-600 rounded-t-full relative">
            {/* Window */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-300 rounded-full border-2 border-white" />
            
            {/* Wings */}
            <div className="absolute bottom-0 -left-4 w-8 h-16 bg-purple-500 clip-triangle" />
            <div className="absolute bottom-0 -right-4 w-8 h-16 bg-purple-500 clip-triangle" />
          </div>

          {/* Fire trail */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 1.5, 1, 1.5] }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-8">

            <div className="w-full h-16 bg-gradient-to-b from-orange-500 via-yellow-400 to-transparent rounded-b-full" />
          </motion.div>

          {/* Sparkles */}
          {[...Array(6)].map((_, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: (Math.random() - 0.5) * 100,
              y: Math.random() * 50 + 50
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute top-full left-1/2 w-2 h-2 bg-yellow-300 rounded-full" />

          )}
        </motion.div>
      </motion.div>
    </div>);

}