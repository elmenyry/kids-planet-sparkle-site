
import { Button } from "@/components/ui/button";
import { Star, Book, Smile, Pencil, Backpack } from "lucide-react";

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-kids-soft-purple/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Age-appropriate programs designed to nurture curiosity, build confidence, and develop essential skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            title="Little Explorers"
            ages="Ages 2-3"
            icon={<Smile className="w-8 h-8" />}
            color="text-red-500"
            bgColor="bg-red-100"
            description="Sensory exploration and foundational skills development through guided play."
          />
          <ProgramCard 
            title="Curious Comets"
            ages="Ages 3-4"
            icon={<Star className="w-8 h-8" />}
            color="text-kids-purple"
            bgColor="bg-kids-soft-purple"
            description="Language development, motor skills and social interaction through creative activities."
          />
          <ProgramCard 
            title="Bright Stars"
            ages="Ages 4-6"
            icon={<Book className="w-8 h-8" />}
            color="text-blue-500"
            bgColor="bg-kids-soft-blue"
            description="Pre-reading, early math concepts and cooperative play to prepare for kindergarten."
          />
          <ProgramCard 
            title="Super Novas"
            ages="Ages 7-10"
            icon={<Pencil className="w-8 h-8" />}
            color="text-green-500"
            bgColor="bg-green-100"
            description="Critical thinking, problem-solving and creative expression through project-based learning."
          />
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Special Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActivityCard 
              title="Art & Craft Studio"
              icon={<Backpack className="w-6 h-6 text-kids-purple" />}
              description="Unleash creativity through painting, sculpture, and mixed media projects."
            />
            <ActivityCard 
              title="Science Discovery Lab"
              icon={<Backpack className="w-6 h-6 text-kids-orange" />}
              description="Hands-on experiments and exploration of natural phenomena."
            />
            <ActivityCard 
              title="Music & Movement"
              icon={<Backpack className="w-6 h-6 text-blue-500" />}
              description="Rhythm, dance, and musical instrument introduction for artistic expression."
            />
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button className="bg-kids-purple hover:bg-purple-600 rounded-full text-lg px-10 py-6">
            View Full Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ 
  title, 
  ages, 
  icon, 
  color, 
  bgColor,
  description 
}: { 
  title: string; 
  ages: string; 
  icon: React.ReactNode; 
  color: string;
  bgColor: string;
  description: string 
}) => {
  return (
    <div className="kids-card h-full flex flex-col">
      <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-6 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm font-semibold text-kids-purple mb-3">{ages}</p>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Button variant="link" className="text-kids-purple mt-4 p-0 justify-start">
        Learn More →
      </Button>
    </div>
  );
};

const ActivityCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start">
      <div className="w-12 h-12 rounded-full bg-kids-soft-yellow flex items-center justify-center mr-4 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProgramsSection;
