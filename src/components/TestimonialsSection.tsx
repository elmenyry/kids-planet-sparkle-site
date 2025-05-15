
import { useState } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Parker",
      role: "Parent of Alex, 4",
      quote: "Kids Planet has been incredible for our son's development. He's more confident, curious, and excited to learn every day!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Thomas",
      role: "Parent of Emma, 6",
      quote: "The teachers are passionate and caring. My daughter has learned so much while having fun. I couldn't ask for a better learning environment.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Reynolds",
      role: "Parent of Twins, 3",
      quote: "As a parent of twins, finding the right learning center was crucial. Kids Planet exceeded all our expectations with their personalized approach.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Parent of Sam, 5",
      quote: "The curriculum is outstanding. My son is developing academic skills while also growing socially and emotionally. We love Kids Planet!",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our community of satisfied parents and children.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-kids-soft-yellow/50 to-kids-soft-blue/50 rounded-3xl p-8 md:p-12">
            <div className="absolute -top-5 -left-5 text-kids-purple opacity-30">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.718-2.932.64-1.006 1.422-1.613 2.346-1.822a1.47 1.47 0 0 0 1.043-.957c.266-.596.09-1.144-.48-1.577-1.157-.86-2.408-.685-3.755.527-1.797 1.608-2.86 3.843-3.188 6.705-.105.92-.16 1.714-.172 2.38 0 1.308.376 2.483 1.127 3.527.75 1.042 1.738 1.564 2.966 1.564 1.033 0 1.902-.378 2.608-1.13.704-.753 1.066-1.649 1.066-2.583 0-.279-.033-.54-.1-.782zm10.101 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.7-1.327-.83-.57-.144-1.09-.144-1.563-.032-.57-1.739.034-3.258.814-4.554.315-.53.647-.935.995-1.216.347-.28.6-.511.756-.697.16-.18.395-.478.705-.892.312-.412.48-.835.497-1.265.016-.43-.155-.843-.51-1.242-.357-.4-.735-.58-1.133-.535-.56.07-1.17.415-1.834 1.034-.664.62-1.206 1.356-1.627 2.212-.42.856-.758 1.892-1.015 3.07-.558 2.61-.688 4.842-.395 6.694.15.828.456 1.566.914 2.213.75 1.042 1.738 1.564 2.965 1.564 1.032 0 1.9-.378 2.607-1.13.705-.753 1.06-1.649 1.06-2.583 0-.279-.03-.54-.085-.782z" />
              </svg>
            </div>
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <div className="flex mb-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">"{testimonials[activeIndex].quote}"</blockquote>
                <div>
                  <p className="font-bold">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-kids-purple' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="500+" label="Happy Students" />
            <StatCard number="25+" label="Qualified Teachers" />
            <StatCard number="12" label="Learning Programs" />
            <StatCard number="98%" label="Parent Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-extrabold text-kids-purple mb-2">{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default TestimonialsSection;
