import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible &&
      <>
          {/* Main glow */}
          <motion.div
          className="fixed pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '300px',
            height: '300px',
            marginLeft: '-150px',
            marginTop: '-150px'
          }}
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>

            <div
            className="w-full h-full rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(252, 217, 60, 0.4) 0%, rgba(215, 156, 255, 0.3) 50%, transparent 70%)',
              filter: 'blur(40px)'
            }} />

          </motion.div>

          {/* Small cursor dot */}
          <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '8px',
            height: '8px',
            marginLeft: '-4px',
            marginTop: '-4px'
          }}>

            <div
            className="w-full h-full rounded-full bg-[#FCD93C]"
            style={{
              boxShadow: '0 0 20px rgba(252, 217, 60, 0.8), 0 0 40px rgba(215, 156, 255, 0.6)'
            }} />

          </motion.div>
        </>
      }
    </>);

};

export default CursorGlow;