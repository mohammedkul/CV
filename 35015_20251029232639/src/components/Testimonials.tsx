import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
'@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';

const testimonials = [
{
  id: 1,
  quote: 'محمد مطور موهوب للغاية. لقد قام بتطوير تطبيق الهاتف المحمول الخاص بنا بشكل احترافي وبجودة عالية. كان التواصل معه سلساً والنتيجة تجاوزت توقعاتنا.',
  name: 'سارة أحمد',
  position: 'مديرة التسويق',
  company: 'شركة النجاح الرقمي',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
},
{
  id: 2,
  quote: 'عملت مع محمد على مشروع ويب معقد وكانت خبرته في React وTypeScript واضحة جداً. أنصح به بشدة لأي مشروع يتطلب تطوير واجهات مستخدم متقدمة.',
  name: 'خالد محمود',
  position: 'مدير تقني',
  company: 'تكنولوجيا المستقبل',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
},
{
  id: 3,
  quote: 'تطبيق الموبايل الذي طوره محمد لشركتنا أدى إلى زيادة كبيرة في تفاعل عملائنا. التصميم رائع والأداء ممتاز. شكراً لك على العمل الاحترافي!',
  name: 'فاطمة حسن',
  position: 'الرئيس التنفيذي',
  company: 'متجر الإلكتروني',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
},
{
  id: 4,
  quote: 'محمد مطور متميز يفهم احتياجات العميل بسرعة ويقدم حلولاً إبداعية. موقعنا الإلكتروني الجديد أصبح أسرع وأكثر سهولة في الاستخدام بفضل عمله.',
  name: 'عمر السعيد',
  position: 'مدير المنتجات',
  company: 'حلول البرمجيات',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
},
{
  id: 5,
  quote: 'العمل مع محمد كان تجربة رائعة. التزامه بالمواعيد النهائية واهتمامه بالتفاصيل جعل مشروعنا ناجحاً. بالتأكيد سأعمل معه في المستقبل.',
  name: 'ليلى كريم',
  position: 'مصممة UX/UI',
  company: 'استوديو الإبداع',
  avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop'
},
{
  id: 6,
  quote: 'محمد لديه مهارات تقنية ممتازة ورؤية واضحة لتطوير التطبيقات. ساعدنا في بناء منصة قوية وقابلة للتوسع. أنصح به بشدة لأي مشروع كبير.',
  name: 'أحمد علي',
  position: 'مؤسس',
  company: 'شركة الابتكار التقني',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
}];


export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-4"
      dir="rtl">

      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(252, 217, 60, 0.15) 0%, transparent 70%)'
        }} />


      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #FCD93C 0%, #D79CFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(252, 217, 60, 0.3)'
            }}>

            آراء العملاء
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{
              color: '#D79CFF',
              textShadow: '0 0 10px rgba(215, 156, 255, 0.4)'
            }}>

            ما يقوله عملائي عن تجربتهم معي
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            className="w-full">

            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) =>
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  delay={index * 0.1} />

                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious
              className="hidden md:flex"
              style={{
                background: 'rgba(44, 10, 82, 0.8)',
                borderColor: 'rgba(252, 217, 60, 0.5)',
                color: '#FCD93C'
              }} />

            <CarouselNext
              className="hidden md:flex"
              style={{
                background: 'rgba(44, 10, 82, 0.8)',
                borderColor: 'rgba(252, 217, 60, 0.5)',
                color: '#FCD93C'
              }} />

          </Carousel>
        </div>

        {/* Mobile view: Grid for smaller screens */}
        <div className="md:hidden grid grid-cols-1 gap-6 mt-8">
          {testimonials.slice(0, 3).map((testimonial, index) =>
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            name={testimonial.name}
            position={testimonial.position}
            company={testimonial.company}
            avatar={testimonial.avatar}
            delay={index * 0.1} />

          )}
        </div>
      </div>
    </section>);

}