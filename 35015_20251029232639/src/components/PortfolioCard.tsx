import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  delay?: number;
  onClick?: () => void;
}

const PortfolioCard = ({
  title,
  description,
  category,
  image,
  delay = 0,
  onClick
}: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onClick={onClick}
      className="relative group overflow-hidden rounded-2xl cursor-pointer row-span-1 h-[250px]"
      style={{
        background: 'rgba(44, 10, 82, 0.3)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(215, 156, 255, 0.3)',
        boxShadow: '0 4px 16px rgba(215, 156, 255, 0.1)'
      }}>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'brightness(0.7)'
        }} />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(44, 10, 82, 0.5) 0%, rgba(44, 10, 82, 0.9) 100%)'
        }} />

      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#ffffff'
          }}>
          {category}
        </div>
      </div>

      {/* Content - Always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-lg font-bold mb-1 text-white">
          {title}
        </h3>
      </div>

      {/* Hover Overlay with Details */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'rgba(44, 10, 82, 0.95)',
          backdropFilter: 'blur(30px)'
        }}>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center space-y-3">

          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
            {description}
          </p>
          <Button
            size="sm"
            className="text-sm px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-110 border-2"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(20px)',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: '#ffffff'
            }}>
            عرض التفاصيل
            <ExternalLink className="mr-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>);

};

export default PortfolioCard;