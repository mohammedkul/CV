import { motion } from 'framer-motion';
import ArticleCard from '@/components/ArticleCard';
import ParticlesBackground from '@/components/ParticlesBackground';

const ArticlesPage = () => {
  const articles = [
  {
    title: 'معماريات الخدمات الموزعة',
    summary: 'استكشاف أنماط التصميم المعماري للأنظمة الموزعة وكيفية بناء خدمات قابلة للتوسع والصيانة باستخدام مبادئ Microservices وEvent-Driven Architecture.',
    category: 'هندسة البرمجيات'
  },
  {
    title: 'تحسين أداء تطبيقات الويب',
    summary: 'تقنيات متقدمة لتحسين أداء تطبيقات الويب الحديثة، بما في ذلك Code Splitting وLazy Loading وتقنيات التخزين المؤقت وتحسين حجم الحزم.',
    category: 'تطوير الويب'
  },
  {
    title: 'الحوسبة السحابية: AWS مقابل Azure',
    summary: 'مقارنة شاملة بين منصات الحوسبة السحابية الرائدة، تحليل الخدمات والتكاليف والأداء ومتى يكون كل منها الخيار الأمثل لمشروعك.',
    category: 'الحوسبة السحابية'
  },
  {
    title: 'أمان واجهات برمجة التطبيقات',
    summary: 'أفضل الممارسات لتأمين REST و GraphQL APIs، شرح مفاهيم OAuth 2.0 و JWT والتشفير وكيفية حماية البيانات الحساسة في التطبيقات الحديثة.',
    category: 'أمن المعلومات'
  },
  {
    title: 'تصميم قواعد البيانات القابلة للتوسع',
    summary: 'استراتيجيات تصميم قواعد البيانات لتحمل الأحمال العالية، بما في ذلك Sharding وReplication وتقنيات NoSQL ومتى تستخدم SQL مقابل NoSQL.',
    category: 'قواعد البيانات'
  },
  {
    title: 'Container Orchestration مع Kubernetes',
    summary: 'دليل شامل لإدارة التطبيقات المعبأة في حاويات باستخدام Kubernetes، من المفاهيم الأساسية إلى الإعدادات المتقدمة والأتمتة.',
    category: 'DevOps'
  },
  {
    title: 'الذكاء الاصطناعي في هندسة البرمجيات',
    summary: 'كيف يغير الذكاء الاصطناعي وتعلم الآلة مجال تطوير البرمجيات، من أدوات Code Generation إلى اختبار الأكواد تلقائياً وتحليل الأخطاء.',
    category: 'الذكاء الاصطناعي'
  },
  {
    title: 'بناء أنظمة Real-Time',
    summary: 'تقنيات بناء التطبيقات التفاعلية في الوقت الفعلي باستخدام WebSockets وServer-Sent Events وتقنيات Polling، مع أمثلة عملية ومقارنات.',
    category: 'تطوير الويب'
  }];


  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              المقالات والدراسات التقنية
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              استكشف مقالات متخصصة في هندسة البرمجيات، الحوسبة السحابية، وتصميم الأنظمة
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, index) =>
            <ArticleCard
              key={index}
              title={article.title}
              summary={article.summary}
              category={article.category}
              delay={index * 0.1} />

            )}
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-0" />
      <div className="fixed top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-0" />
    </div>);

};

export default ArticlesPage;