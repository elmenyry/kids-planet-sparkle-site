
import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kids-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 mr-2" />
              <span className="font-nunito font-extrabold text-xl">Kids Planet</span>
            </div>
            <p className="mb-6 opacity-80">
              A nurturing learning center where children explore, discover, and grow through play-based education.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <span className="sr-only">{social}</span>
                  {/* Simple placeholder for social icons */}
                  <div className="w-5 h-5 rounded-full bg-white/80"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {["Little Explorers (2-3)", "Curious Comets (3-4)", "Bright Stars (4-6)", "Super Novas (7-10)"].map((program) => (
                <li key={program}>
                  <a href="#programs" className="hover:underline opacity-80 hover:opacity-100">{program}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">About</h3>
            <ul className="space-y-3">
              {["Our Story", "Our Team", "Facilities", "FAQ", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#about" className="hover:underline opacity-80 hover:opacity-100">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3 opacity-80">
              <li>123 Learning Lane</li>
              <li>Imagination City, IC 12345</li>
              <li>hello@kidsplanet.edu</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kids Planet Learning Center. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm opacity-80">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
