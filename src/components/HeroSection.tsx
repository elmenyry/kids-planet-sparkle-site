
import { Button } from "@/components/ui/button";
import { Star, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20 overflow-hidden relative bg-gradient-to-b from-kids-soft-purple/50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full bg-kids-soft-yellow animate-float opacity-70"></div>
      <div className="absolute top-40 right-16 w-8 h-8 rounded-full bg-kids-soft-blue animate-bounce-slow opacity-60"></div>
      <Star className="absolute top-1/3 left-1/4 text-kids-purple w-6 h-6 animate-pulse opacity-60" />
      <Star className="absolute bottom-1/4 right-1/3 text-kids-orange w-8 h-8 animate-float opacity-40" />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Where <span className="text-gradient">Learning</span> Meets <span className="text-kids-orange">Fun</span>!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg mx-auto md:mx-0">
            At Kids Planet, we nurture curiosity, creativity, and growth in a safe, playful environment designed for children ages 2-10.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-kids-purple hover:bg-purple-600 rounded-full text-lg px-8 py-6">
              Schedule a Tour
            </Button>
            <Button variant="outline" className="border-kids-purple text-kids-purple hover:bg-kids-soft-purple rounded-full text-lg px-8 py-6">
              Our Programs
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center md:justify-start">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-kids-soft-${i === 1 ? 'purple' : i === 2 ? 'blue' : i === 3 ? 'yellow' : 'orange'} overflow-hidden`}></div>
              ))}
            </div>
            <p className="ml-4 text-gray-600">Joined by 500+ happy families</p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kids-soft-yellow to-kids-soft-blue rotate-[10deg] transform -translate-y-5 translate-x-5 opacity-70"></div>
            <div className="absolute inset-0 rounded-[40px] bg-white p-4 shadow-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-kids-soft-purple to-kids-soft-blue rounded-[30px] flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Children playing and learning at Kids Planet"
                  className="w-full h-full object-cover rounded-[30px] opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4">
                    <Rocket className="w-12 h-12 text-kids-purple animate-bounce-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
