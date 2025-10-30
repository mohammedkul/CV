import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import MovingEnergyLines from '@/components/MovingEnergyLines';
import RocketLaunch from '@/components/RocketLaunch';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [showRocket, setShowRocket] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setShowRocket(true);

    toast({
      title: '🚀 رسالتك في الطريق!',
      description: 'شكراً لتواصلك معنا. سنرد عليك قريباً.'
    });

    reset();

    setTimeout(() => {
      setShowRocket(false);
    }, 2500);
  };

  const socialIcons = [
  { Icon: Github, href: '#', delay: 0 },
  { Icon: Linkedin, href: '#', delay: 0.1 },
  { Icon: Twitter, href: '#', delay: 0.2 }];


  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl">
      {/* Purple Night Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950" />
      
      {/* Moving Energy Lines */}
      <MovingEnergyLines />

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {[...Array(50)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4">

              تواصل معنا
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-purple-200 text-lg">

              نحن هنا للإجابة على استفساراتك
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white mb-2 font-medium">الاسم</label>
                  <input
                    {...register('name', { required: 'الاسم مطلوب' })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] transition-all"
                    placeholder="أدخل اسمك" />

                  {errors.name &&
                  <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
                  }
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white mb-2 font-medium">البريد الإلكتروني</label>
                  <input
                    {...register('email', {
                      required: 'البريد الإلكتروني مطلوب',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'بريد إلكتروني غير صالح'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] transition-all"
                    placeholder="email@example.com" />

                  {errors.email &&
                  <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                  }
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white mb-2 font-medium">الرسالة</label>
                  <textarea
                    {...register('message', { required: 'الرسالة مطلوبة' })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..." />

                  {errors.message &&
                  <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
                  }
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 text-white font-bold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group">

                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    إرسال
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6">

              {/* Contact Info Card */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:mohammedalslahyabd@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-purple-200 hover:text-white transition-colors group">

                    <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/50 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-300">البريد الإلكتروني</p>
                      <p className="font-medium">mohammedalslahyabd@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:00967716279087"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-purple-200 hover:text-white transition-colors group">

                    <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/50 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-300">الهاتف</p>
                      <p className="font-medium">00967716279087</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">تابعنا</h3>
                
                <div className="flex gap-4 justify-center">
                  {socialIcons.map(({ Icon, href, delay }, index) =>
                  <motion.a
                    key={index}
                    href={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + delay }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/50 transition-shadow"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                    }}>

                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Rocket Launch Animation */}
      {showRocket && <RocketLaunch />}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>);

}