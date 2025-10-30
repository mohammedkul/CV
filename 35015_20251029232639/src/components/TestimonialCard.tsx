import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  position,
  company,
  avatar,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="h-full">

      <div
        className="backdrop-blur-xl border rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:scale-105 group"
        style={{
          background: 'rgba(44, 10, 82, 0.4)',
          borderColor: 'rgba(215, 156, 255, 0.3)',
          boxShadow: '0 10px 40px rgba(215, 156, 255, 0.15), inset 0 0 30px rgba(252, 217, 60, 0.05)'
        }}>

        {/* Quote Icon */}
        <div className="mb-6">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(252, 217, 60, 0.2) 0%, rgba(215, 156, 255, 0.2) 100%)',
              boxShadow: '0 0 20px rgba(252, 217, 60, 0.3)'
            }}>

            <Quote
              className="text-[#FCD93C]"
              size={28}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(252, 217, 60, 0.8))'
              }} />

          </div>
        </div>

        {/* Quote Text */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-8 flex-grow"
          style={{
            color: '#D79CFF',
            textShadow: '0 0 10px rgba(215, 156, 255, 0.3)'
          }}>

          "{quote}"
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(215, 156, 255, 0.2)' }}>
          <Avatar className="w-16 h-16 border-2 border-purple-400 group-hover:border-yellow-400 transition-colors">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback
              style={{
                background: 'linear-gradient(135deg, #D79CFF 0%, #FCD93C 100%)'
              }}>

              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4
              className="text-xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #FCD93C 0%, #D79CFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>

              {name}
            </h4>
            <p
              className="text-base"
              style={{
                color: 'rgba(215, 156, 255, 0.8)'
              }}>

              {position} • {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>);

}