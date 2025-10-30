import { Link } from 'react-router-dom';
import { Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: '📧', label: 'البريد الإلكتروني', href: 'mailto:mohammed@example.com' },
  { icon: '📱', label: 'واتساب', href: 'tel:+966123456789' },
  { icon: '🔗', label: 'لينكد إن', href: '#' },
  { icon: '📷', label: 'إنستغرام', href: '#' }];


  const quickLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عني' },
  { path: '/portfolio', label: 'الأعمال' },
  { path: '/contact', label: 'تواصل' }];


  return (
    <footer className="relative bg-gradient-to-b from-purple-950 to-black border-t border-purple-800/30">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              محمد الصلاحي
            </h3>
            <p className="text-gray-400 leading-relaxed">
              مصمم ومطور إبداعي متخصص في تصميم الهوية البصرية والإعلانات الرقمية
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">روابط سريعة</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-400 hover:text-purple-400 transition-colors">

                  {link.label}
                </Link>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">تواصل معي</h4>
            <div className="space-y-3">
              <a
                href="mailto:mohammed@example.com"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors">

                <Mail size={18} />
                <span>mohammed@example.com</span>
              </a>
              <a
                href="tel:+966123456789"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors">

                <Phone size={18} />
                <span dir="ltr">+966 123 456 789</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {socialLinks.map((social) =>
          <a
            key={social.label}
            href={social.href}
            className="w-12 h-12 rounded-full bg-purple-900/30 hover:bg-purple-800/50 flex items-center justify-center text-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            title={social.label}>

              {social.icon}
            </a>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800/30 pt-6 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} محمد الصلاحي. جميع الحقوق محفوظة</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              صُنع بـ <Heart size={16} className="text-purple-400 fill-purple-400" />
            </span>
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;