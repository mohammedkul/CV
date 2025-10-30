import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/ParticlesBackground';
import Rotating3DElement from '@/components/Rotating3DElement';
import Testimonials from '@/components/Testimonials';


const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      dir="rtl"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C0A52 0%, #1a0631 50%, #2C0A52 100%)'
      }}>

      {/* Animated gradient background overlay */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(252, 217, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(215, 156, 255, 0.15) 0%, transparent 50%)'
        }} />


      {/* Particles Background */}
      <ParticlesBackground />



      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center"
        style={{ y, opacity }}>

        {/* Hero Section */}
        <motion.div
          className="text-center max-w-5xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}>

          {/* 3D Rotating Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}>

            <Rotating3DElement />
          </motion.div>

          {/* Main Name with White Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>

              محمد الصلاحي
            </h1>
          </motion.div>

          {/* Subtitle with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="inline-block">

            <div
              className="px-8 py-4 rounded-2xl backdrop-blur-xl border border-opacity-30"
              style={{
                background: 'rgba(215, 156, 255, 0.1)',
                borderColor: 'rgba(252, 217, 60, 0.3)',
                boxShadow: '0 8px 32px rgba(215, 156, 255, 0.2), inset 0 0 20px rgba(252, 217, 60, 0.1)'
              }}>

              <p
                className="text-2xl md:text-3xl font-light tracking-wide"
                style={{
                  color: '#D79CFF',
                  textShadow: '0 0 10px rgba(215, 156, 255, 0.6), 0 0 20px rgba(215, 156, 255, 0.4)'
                }}>

                مطور تطبيقات الموبايل والويب
              </p>
            </div>
          </motion.div>

          {/* Glowing Glass Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}>

            <Button
              size="lg"
              className="text-xl px-12 py-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 border-2"
              style={{
                background: 'linear-gradient(135deg, rgba(252, 217, 60, 0.2) 0%, rgba(215, 156, 255, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(252, 217, 60, 0.5)',
                color: '#FCD93C',
                boxShadow: `
                  0 0 20px rgba(252, 217, 60, 0.4),
                  0 0 40px rgba(215, 156, 255, 0.3),
                  inset 0 0 20px rgba(252, 217, 60, 0.1)
                `,
                textShadow: '0 0 10px rgba(252, 217, 60, 0.8)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 0 30px rgba(252, 217, 60, 0.6),
                  0 0 60px rgba(215, 156, 255, 0.5),
                  inset 0 0 30px rgba(252, 217, 60, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(252, 217, 60, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 0 20px rgba(252, 217, 60, 0.4),
                  0 0 40px rgba(215, 156, 255, 0.3),
                  inset 0 0 20px rgba(252, 217, 60, 0.1)
                `;
                e.currentTarget.style.borderColor = 'rgba(252, 217, 60, 0.5)';
              }}>

              ابدأ الجولة
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}>

            {[0, 1, 2].map((i) =>
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: i === 1 ? '#FCD93C' : '#D79CFF',
                boxShadow: i === 1 ?
                '0 0 20px rgba(252, 217, 60, 0.8)' :
                '0 0 20px rgba(215, 156, 255, 0.8)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut'
              }} />

            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}>

        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>

          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
            style={{
              borderColor: 'rgba(252, 217, 60, 0.5)',
              boxShadow: '0 0 20px rgba(252, 217, 60, 0.3)'
            }}>

            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#FCD93C]"
              animate={{
                y: [0, 16, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                boxShadow: '0 0 10px rgba(252, 217, 60, 0.8)'
              }} />

          </div>
        </motion.div>
      </motion.div>

      {/* Additional Section for Parallax Demo */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>

        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>

            <div
              className="p-12 rounded-3xl backdrop-blur-xl border"
              style={{
                background: 'rgba(44, 10, 82, 0.3)',
                borderColor: 'rgba(215, 156, 255, 0.3)',
                boxShadow: '0 20px 60px rgba(215, 156, 255, 0.2), inset 0 0 30px rgba(252, 217, 60, 0.05)'
              }}>

              <h2
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #FCD93C 0%, #D79CFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(252, 217, 60, 0.3)'
                }}>

                تجربة فريدة من نوعها
              </h2>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{
                  color: '#D79CFF',
                  textShadow: '0 0 10px rgba(215, 156, 255, 0.4)'
                }}>

                نقدم لك أفضل الحلول التقنية بتصميم عصري وأداء استثنائي
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>);

};

export default HomePage;