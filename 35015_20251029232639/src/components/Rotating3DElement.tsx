import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Zap } from 'lucide-react';

const Rotating3DElement = () => {
  return (
    <div className="relative w-64 h-64 mx-auto" style={{ perspective: '1000px' }}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0]
        }}
        transition={{
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          },
          rotateX: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}>

        {/* Center Icon - Lightbulb */}
        <div
          className="absolute"
          style={{
            transform: 'translateZ(80px)'
          }}>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-r from-[#FCD93C] to-[#D79CFF] rounded-full" />
            <Lightbulb size={80} className="relative text-[#FCD93C] drop-shadow-[0_0_30px_rgba(252,217,60,0.8)]" />
          </div>
        </div>

        {/* Orbiting Icons */}
        {[0, 120, 240].map((angle, i) =>
        <motion.div
          key={i}
          className="absolute"
          style={{
            transform: `rotateY(${angle}deg) translateZ(120px)`
          }}
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}>

            {i === 0 && <Rocket size={40} className="text-[#D79CFF] drop-shadow-[0_0_20px_rgba(215,156,255,0.8)]" />}
            {i === 1 && <Zap size={40} className="text-[#FCD93C] drop-shadow-[0_0_20px_rgba(252,217,60,0.8)]" />}
            {i === 2 && <Lightbulb size={40} className="text-[#D79CFF] drop-shadow-[0_0_20px_rgba(215,156,255,0.8)]" />}
          </motion.div>
        )}

        {/* Glowing Ring */}
        <div
          className="absolute w-56 h-56 rounded-full border-2 border-[#D79CFF] opacity-30"
          style={{
            transform: 'rotateX(75deg)',
            boxShadow: '0 0 40px rgba(215, 156, 255, 0.6)'
          }} />

      </motion.div>
    </div>);

};

export default Rotating3DElement;