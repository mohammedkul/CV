import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  logo: string;
  delay?: number;
}

const CertificationCard = ({ name, issuer, logo, delay = 0 }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all cursor-pointer">

      <div className="flex flex-col items-center text-center space-y-4">
        {/* Logo/Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-white p-1 shadow-lg">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt={issuer}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                // Fallback to icon if image fails
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<Award class="w-10 h-10 text-purple-600" />';
              }} />

          </div>
        </div>

        {/* Certificate Name */}
        <h3 className="text-xl font-bold text-white">{name}</h3>

        {/* Issuer */}
        <p className="text-purple-300">{issuer}</p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/40 border border-purple-400/50 rounded-full">
          <Award className="w-4 h-4 text-white" />
          <span className="text-sm text-white font-medium">معتمد</span>
        </div>
      </div>
    </motion.div>);

};

export default CertificationCard;