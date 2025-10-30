import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
{
  title: 'مطور Full Stack مستقل',
  period: '2020 - الحالي',
  description: 'تطوير تطبيقات ويب وموبايل متكاملة للعملاء حول العالم',
  achievements: [
  'تطوير أكثر من 50 مشروع ناجح',
  'العمل مع فرق متعددة الجنسيات',
  'تطبيق أحدث تقنيات الذكاء الاصطناعي',
  'إدارة المشاريع من البداية للنهاية']

},
{
  title: 'مطور تطبيقات الذكاء الاصطناعي',
  period: '2021 - الحالي',
  description: 'تخصص في تطوير تطبيقات ذكية في المجالات الصحية والتعليمية',
  achievements: [
  'تطوير نظام تشخيص طبي بالذكاء الاصطناعي',
  'بناء منصة تعليمية تفاعلية',
  'تطبيق تحليل البشرة والعناية الشخصية',
  'نظام ERP متكامل للشركات']

},
{
  title: 'مطور Flutter',
  period: '2019 - الحالي',
  description: 'تطوير تطبيقات موبايل متعددة المنصات بتقنية Flutter',
  achievements: [
  'تطوير تطبيقات iOS و Android',
  'واجهات مستخدم عالية الأداء',
  'دمج APIs وخدمات سحابية',
  'تطبيقات حائزة على رضا عملاء 100%']

}];


const WorkTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-white to-purple-500" />

      <div className="space-y-12">
        {experiences.map((exp, index) =>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative pr-20">

            {/* Timeline Dot */}
            <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            className="absolute right-6 top-6 w-5 h-5 rounded-full bg-white border-4 border-purple-500 shadow-lg shadow-purple-500/50"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
            }} />


            {/* Content Card */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-300 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-purple-100 mb-4">{exp.description}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white mb-2">الإنجازات الرئيسية:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) =>
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-purple-200 flex items-start gap-2">

                      <span className="text-white mt-1">•</span>
                      {achievement}
                    </motion.li>
                )}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>);

};

export default WorkTimeline;