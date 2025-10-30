import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
  title: string;
  summary: string;
  category: string;
  delay?: number;
}

const ArticleCard = ({ title, summary, category, delay = 0 }: ArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}>

      <Card className="h-full bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
        <CardHeader>
          <div className="flex justify-between items-start gap-3 mb-2">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30">
              {category}
            </Badge>
          </div>
          <CardTitle className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-base leading-relaxed">
            {summary}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>);

};

export default ArticleCard;