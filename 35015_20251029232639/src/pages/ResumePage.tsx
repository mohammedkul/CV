import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SkillBar from '@/components/SkillBar';
import WorkTimeline from '@/components/WorkTimeline';
import CertificationCard from '@/components/CertificationCard';
import { Cloud, Palette, Calendar, Container, Brain, Shield, GitBranch, Database } from 'lucide-react';

const certifications = [
{
  name: 'AWS Certified Solutions Architect',
  issuer: 'Amazon Web Services',
  logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&q=80',
  icon: Cloud
},
{
  name: 'Google Cloud Professional',
  issuer: 'Google Cloud',
  logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&q=80',
  icon: Cloud
},
{
  name: 'Flutter Development',
  issuer: 'Udacity',
  logo: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=200&q=80',
  icon: GitBranch
},
{
  name: 'Machine Learning Specialization',
  issuer: 'Coursera',
  logo: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80',
  icon: Brain
},
{
  name: 'UI/UX Design Professional',
  issuer: 'Adobe Certified',
  logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80',
  icon: Palette
},
{
  name: 'Agile & Scrum Master (Jira)',
  issuer: 'Atlassian University',
  logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80',
  icon: Calendar
},
{
  name: 'Docker & Kubernetes Expert',
  issuer: 'Linux Foundation',
  logo: 'https://images.unsplash.com/photo-1605745341075-1e67d6e6a2a7?w=200&q=80',
  icon: Container
},
{
  name: 'Certified Database Administrator',
  issuer: 'Oracle University',
  logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&q=80',
  icon: Database
}];


export default function ResumePage() {
  const skills = [
  { name: 'JavaScript', level: 95, icon: '⚡' },
  { name: 'Python', level: 90, icon: '🐍' },
  { name: 'PHP', level: 85, icon: '🐘' },
  { name: 'Java', level: 80, icon: '☕' },
  { name: 'Dart', level: 88, icon: '🎯' },
  { name: 'React', level: 93, icon: '⚛️' },
  { name: 'Flutter', level: 90, icon: '🦋' },
  { name: 'Node.js', level: 87, icon: '💚' },
  { name: 'TypeScript', level: 92, icon: '📘' },
  { name: 'SQL', level: 85, icon: '🗄️' }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
      py-20 px-4 relative overflow-hidden"



















    dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-16 text-white">
          السيرة الذاتية
        </motion.h1>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16">

          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 justify-end">
            <span>التعليم</span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-5xl">
              🎓
            </motion.span>
          </h2>
          
          <GlassCard>
            <div className="flex items-start justify-between gap-6 mb-6">
              <motion.div
                animate={{
                  boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.3)',
                  '0 0 40px rgba(234, 179, 8, 0.5)',
                  '0 0 20px rgba(168, 85, 247, 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-yellow-500 
                  flex items-center justify-center text-4xl shadow-2xl transform hover:scale-110 
                  transition-transform duration-300"




















                style={{ transform: 'rotateY(15deg) rotateX(5deg)', transformStyle: 'preserve-3d' }}>
                🏛️
              </motion.div>
              
              <div className="flex-1 text-right">
                <h3 className="text-2xl font-bold text-white mb-2">جامعة الجزيرة</h3>
                <p className="text-purple-300 text-lg mb-2">بكالوريوس علوم الحاسوب</p>
                <div className="flex items-center gap-2 justify-end text-white mb-4">
                  <span className="font-semibold">2024 - 2025</span>
                  <span>📅</span>
                </div>
                <div className="flex items-center gap-2 justify-end text-purple-200 mb-2">
                  <span className="font-semibold">المعدل التراكمي: 3.8/4.0</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>

            {/* Important Courses Section */}
            <div className="border-t border-purple-400/30 pt-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-end">
                <span>المقررات الرئيسية</span>
                <span className="text-2xl">📚</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                { name: 'Data Structures & Algorithms', nameAr: 'هياكل البيانات والخوارزميات', icon: '🔷' },
                { name: 'Software Engineering', nameAr: 'هندسة البرمجيات', icon: '⚙️' },
                { name: 'Database Systems', nameAr: 'أنظمة قواعد البيانات', icon: '🗄️' },
                { name: 'Computer Networks', nameAr: 'شبكات الحاسوب', icon: '🌐' }].
                map((course, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, x: -5 }}
                  className="flex items-center gap-3 p-3 bg-purple-600/20 border border-purple-400/30 
                      rounded-xl hover:bg-purple-600/30 transition-all duration-300 justify-end">










                    <div className="text-right flex-1">
                      <p className="text-white font-semibold">{course.nameAr}</p>
                      <p className="text-purple-300 text-sm">{course.name}</p>
                    </div>
                    <span className="text-2xl">{course.icon}</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Graduation Project Section */}
            <div className="border-t border-purple-400/30 pt-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-end">
                <span>مشروع التخرج</span>
                <span className="text-2xl">🚀</span>
              </h4>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-br from-purple-600/30 to-blue-600/20 border border-purple-400/40 
                  rounded-xl">










                <h5 className="text-lg font-bold text-white mb-2 text-right">
                  نظام إدارة المشاريع الذكي بالذكاء الاصطناعي
                </h5>
                <p className="text-sm text-purple-300 mb-1 text-right">
                  Intelligent AI-Powered Project Management System
                </p>
                <p className="text-purple-200 text-sm leading-relaxed text-right mb-4">
                  تطبيق ويب متكامل يستخدم تقنيات الذكاء الاصطناعي لإدارة المشاريع وتوزيع المهام بشكل ذكي.
                  يتضمن المشروع نظام توصيات ذكي، تحليلات متقدمة، ولوحة تحكم تفاعلية لتتبع الأداء والإنتاجية.
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Docker'].map((tech, i) =>
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-3 py-1 bg-purple-700/40 border border-purple-400/50 
                        rounded-full text-xs text-purple-200 font-medium">










                      {tech}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 justify-end">
            <span>الخبرة العملية</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl">
              💼
            </motion.span>
          </h2>
          <WorkTimeline />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16">

          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 justify-end">
            <span>المهارات التقنية</span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl">

              💻
            </motion.span>
          </h2>

          <GlassCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {skills.map((skill, index) =>
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={index * 0.05} />

              )}
            </div>
          </GlassCard>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>

          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 justify-end">
            <span>اللغات</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl">

              🌍
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard delay={0}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center">

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl mb-4">

                  🇸🇦
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">العربية</h3>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 
                  rounded-full shadow-lg border border-white/30">












                  <span className="text-lg font-bold text-white">متقن</span>
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="mt-4 flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-3 h-3 bg-white rounded-full shadow-lg" />
                  )}
                </div>
              </motion.div>
            </GlassCard>

            <GlassCard delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center">

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="text-6xl mb-4">

                  🇬🇧
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">الإنجليزية</h3>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r 
                  from-purple-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50">




















                  <span className="text-lg font-bold text-white">مبتدئ</span>
                  <span className="text-2xl">📚</span>
                </div>
                <div className="mt-4 flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`w-3 h-3 rounded-full shadow-lg ${
                    i < 2 ?
                    'bg-purple-400 shadow-purple-400/50' :
                    'bg-purple-900/50 shadow-purple-900/30'}`
                    } />

                  )}
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3 justify-end">
            <span>الشهادات المعتمدة</span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl">
              🏆
            </motion.span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Custom Icon with Logo */}
                    <div className="relative w-20 h-20">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-md" />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-white p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <IconComponent className="w-10 h-10 text-purple-600" />
                        </div>
                      </div>
                    </div>

                    {/* Certificate Name */}
                    <h3 className="text-lg font-bold text-white leading-tight">{cert.name}</h3>

                    {/* Issuer */}
                    <p className="text-purple-300 text-sm">{cert.issuer}</p>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/40 border border-purple-400/50 rounded-full">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}>
                        ✓
                      </motion.span>
                      <span className="text-sm text-white font-medium">معتمد</span>
                    </div>
                  </div>
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center">

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30
              text-white text-xl font-bold rounded-full shadow-2xl
              hover:bg-white/20 transition-all duration-300 
              flex items-center gap-3 mx-auto">




































            <span>📥</span>
            <span>تحميل السيرة الذاتية</span>
          </motion.button>
        </motion.div>
      </div>
    </div>);

}