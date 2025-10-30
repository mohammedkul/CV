import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'عني' },
  { path: '/resume', label: 'السيرة الذاتية' },
  { path: '/portfolio', label: 'الأعمال' },
  { path: '/#testimonials', label: 'آراء العملاء' },
  { path: '/articles', label: 'المقالات' },
  { path: '/contact', label: 'تواصل معي' }];


  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ?
      'bg-purple-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' :
      'bg-transparent'}`
      }>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand with Avatar */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition-transform">
            <Avatar className="w-12 h-12 border-2 border-purple-400">
              <AvatarImage src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/24362/8c28528b-dd66-4080-b033-4f38da18152d.png" alt="محمد الصلاحي" />
              <AvatarFallback>م.ص</AvatarFallback>
            </Avatar>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              محمد الصلاحي
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-lg font-medium transition-all duration-300 ${
              isActive(link.path) ?
              'text-purple-300' :
              'text-gray-300 hover:text-purple-400'}`
              }>

                {link.label}
                {isActive(link.path) &&
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              }
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-purple-800/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-lg font-medium py-2 px-4 rounded-lg transition-all ${
            isActive(link.path) ?
            'bg-purple-800/50 text-purple-300' :
            'text-gray-300 hover:bg-purple-900/30 hover:text-purple-400'}`
            }>

                {link.label}
              </Link>
          )}
          </div>
        }
      </nav>
    </header>);

};

export default Header;