
import { Star, Heart, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Kids Planet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A safe, nurturing environment where children explore, discover, and grow through play-based learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Child-Centered Approach"
            icon={<Heart className="w-10 h-10 text-kids-purple" />}
            description="Our curriculum adapts to each child's unique needs and interests, encouraging a lifelong love of learning."
          />
          <FeatureCard 
            title="Certified Educators"
            icon={<Award className="w-10 h-10 text-kids-orange" />}
            description="Our team of passionate educators are trained in early childhood development and committed to your child's growth."
          />
          <FeatureCard 
            title="Holistic Development"
            icon={<Star className="w-10 h-10 text-blue-500" />}
            description="We nurture cognitive, social, emotional, and physical development through structured play and exploration."
          />
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-kids-soft-purple to-kids-soft-blue rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
              <p className="mb-4">
                Founded in 2015 by a group of parents and educators, Kids Planet was born from a simple belief: children learn best when they're having fun.
              </p>
              <p>
                Today, we've grown into a leading learning center with a commitment to providing a supportive environment where every child can thrive. Our planet-themed spaces spark imagination and curiosity while our qualified teachers guide children through meaningful learning experiences.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-kids-purple" />
                </div>
                <div>
                  <p className="font-bold">Maria Johnson</p>
                  <p className="text-sm text-gray-600">Founder & Director</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-white rounded-xl overflow-hidden shadow-md transform transition-transform hover:scale-105">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Kids Planet learning environment ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => {
  return (
    <div className="kids-card flex flex-col items-center text-center p-8">
      <div className="w-16 h-16 rounded-full bg-kids-soft-yellow flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutSection;
