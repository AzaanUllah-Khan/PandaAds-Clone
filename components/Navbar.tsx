import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Search, Menu, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: Page | undefined, href: string) => {
    e.preventDefault();
    if (page) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
        // If it's a hash link on the current page, scroll to it
        // If it's on another page, navigate there first
        if (currentPage !== 'home' && href.startsWith('#') && !page) {
             onNavigate('home');
             setTimeout(() => {
                 const element = document.querySelector(href);
                 element?.scrollIntoView({ behavior: 'smooth' });
             }, 100);
        } else {
             const element = document.querySelector(href);
             element?.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
      { label: 'Home', href: '#', page: 'home' as Page },
      { label: 'Solutions', href: '#', page: 'solutions' as Page },
      { label: 'Resources', href: '#resources', page: 'resources' as Page },
      { label: 'Tools', href: '#tools', page: 'tools' as Page }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <img src="/assets/logo.png" className='w-36' alt="" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.page, item.href)}
                className={`font-semibold transition-colors text-sm ${currentPage === item.page ? 'text-panda-pink' : 'text-gray-700 hover:text-panda-pink'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="primary">Contact us</Button>
            <button className="text-gray-600 hover:text-panda-pink">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button className="text-gray-600">
              <Search size={20} />
            </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 flex flex-col gap-4">
           {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.page, item.href)}
                className="text-gray-700 font-semibold hover:text-panda-pink py-2 border-b border-gray-50"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" className="w-full">Contact us</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;