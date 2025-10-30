import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Layers, Users, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious } from
"@/components/ui/carousel";

export interface ProjectDetails {
  title: string;
  description: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  role: string;
  technologies: string[];
  images: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-950/95 via-purple-900/95 to-indigo-950/95 backdrop-blur-xl border-2 border-purple-500/30 text-white"
        dir="rtl">

        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-white mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Image Gallery */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) =>
                <CarouselItem key={index}>
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <img
                      src={image}
                      alt={`${project.title} - صورة ${index + 1}`}
                      className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-6 h-6 text-purple-400" />
              وصف المشروع
            </h3>
            <p className="text-purple-100 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Role */}
          <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              دوري في المشروع
            </h3>
            <p className="text-purple-100">{project.role}</p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              التحديات
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) =>
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-purple-100 text-lg flex items-start gap-3">

                  <span className="text-yellow-400 mt-1">•</span>
                  {challenge}
                </motion.li>
              )}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Code className="w-6 h-6 text-green-400" />
              الحلول التقنية
            </h3>
            <ul className="space-y-2">
              {project.solutions.map((solution, index) =>
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-purple-100 text-lg flex items-start gap-3">

                  <span className="text-green-400 mt-1">✓</span>
                  {solution}
                </motion.li>
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">التقنيات المستخدمة</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) =>
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-purple-600/40 border border-purple-400/50 rounded-full text-sm text-white">

                  {tech}
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>);

};

export default ProjectModal;