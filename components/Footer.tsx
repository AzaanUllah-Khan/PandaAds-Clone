import React from 'react';
import Button from './Button';
import { Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          
          <div className="flex items-center gap-2 mb-8 md:mb-0">
             <div className="w-8 h-8 bg-panda-pink rounded-lg flex items-center justify-center">
                 <span className="font-bold text-white text-xs">fp</span>
             </div>
             <span className="font-bold text-xl">foodpanda</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white mb-2">Our company</h4>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About foodpanda</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy policy</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white mb-2">panda ads</h4>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Retail media solutions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Media kit generator</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Case studies</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Industry insights</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Newsroom</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pau-Pau marketer personality quiz</a>
            </div>

             {/* Column 3 */}
             <div className="flex flex-col gap-4">
               <h4 className="font-bold text-white mb-2">Get in touch!</h4>
               <Button variant="primary" className="self-start">Contact us</Button>
            </div>

             {/* Column 4 */}
             <div className="flex flex-col gap-4">
               <h4 className="font-bold text-white mb-2">Follow us on</h4>
               <a href="#" className="text-white hover:text-panda-pink transition-colors">
                  <Linkedin size={24} />
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">Copyright © 2025 foodpanda</p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-panda-pink rounded-md flex items-center justify-center hover:bg-opacity-90 transition-all text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;