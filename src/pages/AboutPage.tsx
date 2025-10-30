import { motion } from 'framer-motion';
import Silhouette3D from '@/components/3DSilhouette';
import TypewriterText from '@/components/TypewriterText';

export default function AboutPage() {
  const bioText = 'مطور مستقل، أبتكر تطبيقات تعليمية وصحية تعتمد على الذكاء الاصطناعي. أستخدم أحدث التقنيات لبناء حلول مبتكرة تساعد المستخدمين على تحسين حياتهم اليومية. شغوف بالتعلم المستمر واستكشاف التقنيات الجديدة لتقديم أفضل تجربة ممكنة.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
      overflow-hidden relative"





























    dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(168,85,247,0.1),transparent)]" />

      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-16 text-white">
          من أنا
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-[600px] relative flex items-center justify-center">

            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-yellow-500/20 
                rounded-3xl blur-2xl animate-pulse" />
























              <motion.img
                src="https://newoaks.s3.us-west-1.amazonaws.com/NewOaks/5500/eaa55f3f-6c07-4dde-943e-3251b0286554.png"
                alt="محمد الصلاحي"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-purple-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }} />

            </div>
          </motion.div>

          {/* Right Side - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8">

            <div className="backdrop-blur-md bg-gradient-to-br from-purple-900/40 to-purple-950/20 
              border border-purple-500/30 rounded-3xl p-8 shadow-2xl">






























              <div className="w-20 h-1 bg-white rounded-full mb-6 mr-auto" />








              
              <p className="text-2xl leading-relaxed text-white/90 text-right font-light">
                <TypewriterText text={bioText} speed={30} />
              </p>

              <div className="flex gap-4 mt-10 justify-end">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 
                    text-white rounded-full font-medium shadow-lg shadow-purple-500/50 
                    hover:from-purple-500 hover:to-purple-600 transition-all">





























































                  تواصل معي
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30\\\\\\\\\\\\\\\\n                    text-white rounded-full font-medium shadow-lg\\\\\\\\\\\\\\\\n                    hover:bg-white/30 transition-all bg-black text-white bg-black text-white bg-black text-white bg-black text-white bg-black text-white">




                  السيرة الذاتية
                </motion.button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
              { value: '50+', label: 'مشروع' },
              { value: '5+', label: 'سنوات خبرة' },
              { value: '100%', label: 'رضا العملاء' }].
              map((stat, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="backdrop-blur-md bg-gradient-to-br from-purple-800/40 to-purple-900/20 
                    border border-purple-500/30 rounded-2xl p-6 text-center shadow-xl">































                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}