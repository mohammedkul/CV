import { motion } from 'framer-motion';

export default function Silhouette3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center center'
        }} />

      </div>

      {/* Animated Rings */}
      {[0, 1, 2].map((i) =>
      <motion.div
        key={i}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 4,
          delay: i * 0.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-64 h-64 rounded-full border-2 border-purple-500"
        style={{ transform: `translateZ(${i * 20}px)` }} />

      )}

      {/* 3D Silhouette */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          y: [-10, 10, -10]
        }}
        transition={{
          rotateY: { duration: 8, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="relative z-10"
        style={{ transformStyle: 'preserve-3d' }}>

        <div className="w-48 h-64 relative">
          {/* Head */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 
              rounded-full bg-gradient-to-br from-purple-600 to-purple-800 
              shadow-2xl shadow-purple-500/50 border-2 border-purple-400/50"








































            style={{ transform: 'translateZ(30px) translateX(-50%)' }} />

          
          {/* Body */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-32 
            rounded-3xl bg-gradient-to-br from-purple-700 to-purple-900 
            shadow-2xl shadow-purple-500/50 border-2 border-purple-400/50"








































          style={{ transform: 'translateZ(20px) translateX(-50%)' }} />

          
          {/* Arms */}
          <div className="absolute top-24 -left-4 w-16 h-4 rounded-full 
            bg-gradient-to-r from-purple-700 to-purple-800 
            shadow-lg shadow-purple-500/50 rotate-12"








































          style={{ transform: 'translateZ(15px) rotate(12deg)' }} />

          <div className="absolute top-24 -right-4 w-16 h-4 rounded-full 
            bg-gradient-to-r from-purple-700 to-purple-800 
            shadow-lg shadow-purple-500/50 -rotate-12"








































          style={{ transform: 'translateZ(15px) rotate(-12deg)' }} />

          
          {/* Legs */}
          <div className="absolute top-52 left-8 w-6 h-12 rounded-full 
            bg-gradient-to-b from-purple-800 to-purple-900 
            shadow-lg shadow-purple-500/50"








































          style={{ transform: 'translateZ(10px)' }} />

          <div className="absolute top-52 right-8 w-6 h-12 rounded-full 
            bg-gradient-to-b from-purple-800 to-purple-900 
            shadow-lg shadow-purple-500/50"








































          style={{ transform: 'translateZ(10px)' }} />

        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) =>
      <motion.div
        key={i}
        animate={{
          y: [0, -100, 0],
          x: [0, Math.random() * 40 - 20, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          delay: i * 0.3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }} />

      )}
    </div>);

}