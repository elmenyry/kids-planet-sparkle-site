
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Star } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Star className="h-8 w-8 text-kids-purple mr-2 animate-spin-slow" />
          <span className="font-nunito font-extrabold text-2xl text-gradient">Kids Planet</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#programs">Programs</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <Button className="bg-kids-orange hover:bg-orange-600 rounded-full px-6">
            Enroll Now
          </Button>
        </div>
        
        <button 
          className="md:hidden text-kids-purple"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <Button className="bg-kids-orange hover:bg-orange-600 rounded-full w-full">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="font-medium text-gray-700 hover:text-kids-purple transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block py-2 text-center font-medium text-gray-700 hover:text-kids-purple transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
