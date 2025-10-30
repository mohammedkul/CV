import { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProjectModal, { ProjectDetails } from '@/components/ProjectModal';

type FilterType = 'all' | 'featured' | 'sold' | 'ai';

interface Project {
  id: string;
  title: string;
  description: string;
  category: FilterType;
  categoryLabel: string;
  image: string;
  details: ProjectDetails;
}

const projectsData: Project[] = [
{
  id: '1',
  title: 'تطبيق التعليم الذكي',
  description: 'منصة تعليمية متقدمة باستخدام الذكاء الاصطناعي',
  category: 'featured',
  categoryLabel: 'المشاريع البارزة',
  image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  details: {
    title: 'تطبيق التعليم الذكي',
    description: 'منصة تعليمية متقدمة باستخدام الذكاء الاصطناعي',
    fullDescription: 'منصة تعليمية شاملة تستخدم خوارزميات الذكاء الاصطناعي لتحليل أسلوب التعلم لكل طالب وتقديم محتوى تعليمي مخصص يناسب احتياجاته. المنصة تتضمن نظام متابعة تقدم الطلاب، اختبارات تفاعلية، ومساعد ذكي للإجابة على استفسارات الطلاب.',
    challenges: [
    'تصميم خوارزميات تعلم آلي دقيقة لتحليل أنماط التعلم المختلفة',
    'ضمان استجابة سريعة للمنصة مع عدد كبير من المستخدمين',
    'توفير واجهة سهلة الاستخدام لجميع الأعمار'],

    solutions: [
    'استخدام نماذج التعلم العميق لتخصيص المحتوى',
    'تطبيق تقنيات التخزين المؤقت والتحميل الكسول',
    'تصميم واجهة بديهية مع اختبارات تجربة المستخدم'],

    role: 'مطور Full Stack - تصميم المعمارية الكاملة، تطوير الواجهة الأمامية والخلفية، دمج نماذج الذكاء الاصطناعي',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'WebSocket'],
    images: [
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80']

  }
},
{
  id: '2',
  title: 'تطبيق السياحة الذكي',
  description: 'دليل سياحي تفاعلي يستخدم الذكاء الاصطناعي',
  category: 'featured',
  categoryLabel: 'المشاريع البارزة',
  image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  details: {
    title: 'تطبيق السياحة الذكي',
    description: 'دليل سياحي تفاعلي',
    fullDescription: 'تطبيق سياحي شامل يوفر توصيات مخصصة للوجهات السياحية بناءً على اهتمامات المستخدم وميزانيته. يتضمن خرائط تفاعلية، معلومات عن المعالم السياحية، وحجز الفنادق والرحلات.',
    challenges: [
    'دمج بيانات من مصادر متعددة للوجهات السياحية',
    'توفير توصيات دقيقة تناسب تفضيلات كل مستخدم',
    'العمل بدون اتصال بالإنترنت في المناطق النائية'],

    solutions: [
    'بناء نظام تجميع بيانات من APIs متعددة',
    'تطوير محرك توصيات ذكي باستخدام التعلم الآلي',
    'تطبيق تقنيات التخزين المحلي والمزامنة التلقائية'],

    role: 'مطور رئيسي - تصميم التطبيق، تطوير نظام التوصيات، دمج الخرائط والخدمات السياحية',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Python Flask', 'PostgreSQL'],
    images: [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80']

  }
},

{
  id: '3',
  title: 'نظام إدارة المياه',
  description: 'حل متكامل لمراقبة استهلاك المياه',
  category: 'sold',
  categoryLabel: 'مشاريع تم بيعها',
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  details: {
    title: 'نظام إدارة المياه',
    description: 'حل متكامل لمراقبة استهلاك المياه',
    fullDescription: 'نظام شامل لإدارة ومراقبة استهلاك المياه في المدن والمنشآت الكبرى مع تقارير تفصيلية وتنبيهات ذكية.',
    challenges: ['التعامل مع كميات ضخمة من البيانات', 'دقة القراءات', 'التكامل مع أنظمة قديمة'],
    solutions: ['استخدام قواعد بيانات موزعة', 'أجهزة استشعار دقيقة', 'APIs متوافقة'],
    role: 'مطور النظام الكامل',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'IoT'],
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80']
  }
},
{
  id: '4',
  title: 'نظام إدارة الكهرباء',
  description: 'منصة ذكية لتتبع الاستهلاك الكهربائي',
  category: 'sold',
  categoryLabel: 'مشاريع تم بيعها',
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  details: {
    title: 'نظام إدارة الكهرباء',
    description: 'منصة ذكية لتتبع الاستهلاك',
    fullDescription: 'نظام متقدم لمراقبة استهلاك الكهرباء وتحسين كفاءة الطاقة مع تحليلات ذكية.',
    challenges: ['قراءة العدادات عن بعد', 'كشف التلاعب', 'التنبؤ بالأحمال'],
    solutions: ['شبكة IoT', 'خوارزميات كشف الشذوذ', 'نماذج تعلم آلي'],
    role: 'مطور البرمجيات الرئيسي',
    technologies: ['Python', 'Django', 'TensorFlow', 'MySQL'],
    images: ['https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80']
  }
},
{
  id: '5',
  title: 'تطبيق العناية بالبشرة',
  description: 'تطبيق ذكي لتحليل البشرة',
  category: 'ai',
  categoryLabel: 'مشاريع AI الذكية',
  image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
  details: {
    title: 'تطبيق العناية بالبشرة',
    description: 'تطبيق ذكي لتحليل البشرة',
    fullDescription: 'تطبيق يستخدم تقنيات رؤية الحاسوب لتحليل نوع البشرة وتقديم نصائح مخصصة.',
    challenges: ['دقة التحليل', 'إضاءة متغيرة', 'أنواع بشرة مختلفة'],
    solutions: ['نماذج CNN', 'معالجة صور متقدمة', 'تدريب على بيانات متنوعة'],
    role: 'مطور AI والتطبيق',
    technologies: ['Flutter', 'TensorFlow Lite', 'Firebase', 'Python'],
    images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80']
  }
},
{
  id: '6',
  title: 'تطبيق تتبع الأطفال',
  description: 'نظام متقدم لمراقبة الأطفال',
  category: 'ai',
  categoryLabel: 'مشاريع AI الذكية',
  image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
  details: {
    title: 'تطبيق تتبع الأطفال',
    description: 'نظام متقدم للمراقبة',
    fullDescription: 'نظام شامل لمراقبة وحماية الأطفال مع تنبيهات فورية وتتبع الموقع.',
    challenges: ['الخصوصية', 'دقة الموقع', 'استهلاك البطارية'],
    solutions: ['تشفير قوي', 'GPS دقيق', 'تحسين الأداء'],
    role: 'مطور التطبيق الكامل',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps'],
    images: ['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80']
  }
},
{
  id: '7',
  title: 'دليل الصيدليات الذكي',
  description: 'تطبيق شامل للبحث عن الأدوية',
  category: 'ai',
  categoryLabel: 'مشاريع AI الذكية',
  image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80',
  details: {
    title: 'دليل الصيدليات الذكي',
    description: 'تطبيق شامل للأدوية',
    fullDescription: 'منصة متكاملة للبحث عن الأدوية، التفاعلات الدوائية، واستشارات صيدلانية فورية.',
    challenges: ['قاعدة بيانات ضخمة', 'التحديث المستمر', 'دقة المعلومات'],
    solutions: ['بنية بيانات محسنة', 'نظام تحديث آلي', 'مراجعة طبية'],
    role: 'مطور Full Stack',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch'],
    images: ['https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80']
  }
},
{
  id: '8',
  title: 'نظام ERP متكامل',
  description: 'نظام تخطيط موارد المؤسسات',
  category: 'ai',
  categoryLabel: 'مشاريع AI الذكية',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  details: {
    title: 'نظام ERP متكامل',
    description: 'نظام تخطيط موارد',
    fullDescription: 'نظام شامل لإدارة موارد الشركات مع وحدات المبيعات، المخزون، الموارد البشرية، والمحاسبة.',
    challenges: ['تعقيد النظام', 'التكامل', 'الأداء'],
    solutions: ['معمارية Microservices', 'APIs موحدة', 'تحسين قواعد البيانات'],
    role: 'مهندس معماري وقائد فريق',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80']
  }
},
{
  id: '9',
  title: 'تطبيق العناية بالعيون',
  description: 'حل ذكي لفحص العيون',
  category: 'ai',
  categoryLabel: 'مشاريع AI الذكية',
  image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80',
  details: {
    title: 'تطبيق العناية بالعيون',
    description: 'حل ذكي للفحص',
    fullDescription: 'تطبيق يستخدم AI لتشخيص مشاكل العيون الشائعة وتقديم توصيات طبية.',
    challenges: ['دقة التشخيص', 'جودة الصور', 'الموافقات الطبية'],
    solutions: ['نماذج Deep Learning', 'تحسين الصور', 'استشارة خبراء'],
    role: 'مطور AI والتطبيق',
    technologies: ['Flutter', 'Python', 'TensorFlow', 'Cloud Vision API'],
    images: ['https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80']
  }
},
{
  id: '10',
  title: 'المستشفى الرقمي',
  description: 'منصة متكاملة لإدارة المستشفيات',
  category: 'ai',
  categoryLabel: 'مشاريع AI الذكية',
  image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  details: {
    title: 'المستشفى الرقمي',
    description: 'منصة إدارة المستشفيات',
    fullDescription: 'نظام شامل لإدارة المستشفيات يشمل الحجوزات، السجلات الطبية، الصيدلية، والمختبرات.',
    challenges: ['أمن البيانات', 'التوفر العالي', 'التكامل مع الأجهزة'],
    solutions: ['معايير HIPAA', 'بنية عالية التوفر', 'بروتوكولات HL7'],
    role: 'مهندس حلول رئيسي',
    technologies: ['React', 'Java Spring', 'Oracle', 'Kubernetes', 'FHIR'],
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80']
  }
}];


const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'all' ?
  projectsData :
  projectsData.filter((p) => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project.details);
    setIsModalOpen(true);
  };

  const filters = [
  { id: 'all', label: 'جميع المشاريع' },
  { id: 'featured', label: 'المشاريع البارزة' },
  { id: 'sold', label: 'مشاريع تم بيعها' },
  { id: 'ai', label: 'مشاريع AI الذكية' }];


  return (
    <div
      dir="rtl"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C0A52 0%, #1a0631 50%, #2C0A52 100%)'
      }}>

      {/* Animated Gradient Lights Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          background: [
          'radial-gradient(circle at 20% 30%, rgba(252, 217, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(215, 156, 255, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 20%, rgba(252, 217, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(215, 156, 255, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 50% 50%, rgba(252, 217, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(215, 156, 255, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 30%, rgba(252, 217, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(215, 156, 255, 0.15) 0%, transparent 50%)']

        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }} />


      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            معرض الأعمال
          </h1>
          <p className="text-2xl text-white/90">
            استكشف مجموعة من مشاريعنا المتميزة
          </p>
        </motion.div>

        {/* Filter Bar with Glass Effect and Gold Glow */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>

          <div
            className="inline-flex gap-3 p-3 rounded-2xl"
            style={{
              background: 'rgba(44, 10, 82, 0.4)',
              backdropFilter: 'blur(30px)',
              border: '2px solid rgba(252, 217, 60, 0.4)',
              boxShadow: '0 0 30px rgba(252, 217, 60, 0.4), 0 8px 32px rgba(215, 156, 255, 0.2), inset 0 0 20px rgba(252, 217, 60, 0.1)'
            }}>

            {filters.map((filter) =>
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as FilterType)}
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-[#2c0a52] text-white bg-[#2c0a52] text-white bg-[#2c0a52] text-white bg-[#2c0a52] text-white bg-[#2c0a52] text-white"
              style={{
                background: activeFilter === filter.id ?
                'rgba(255, 255, 255, 0.2)' :
                'rgba(44, 10, 82, 0.3)',
                backdropFilter: 'blur(20px)',
                border: activeFilter === filter.id ?
                '2px solid rgba(255, 255, 255, 0.5)' :
                '1px solid rgba(215, 156, 255, 0.3)',
                color: '#ffffff'
              }}>
                {filter.label}
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout>
          {filteredProjects.map((project, index) =>
          <PortfolioCard
            key={project.id}
            title={project.title}
            description={project.description}
            category={project.categoryLabel}
            image={project.image}
            delay={index * 0.1}
            onClick={() => handleProjectClick(project)} />

          )}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 &&
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
            <p className="text-3xl text-white">
              لا توجد مشاريع في هذه الفئة
            </p>
          </motion.div>
        }
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject} />

    </div>);

};

export default PortfolioPage;