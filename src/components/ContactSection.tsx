
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-kids-soft-purple/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enroll Your Child Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to give your child the gift of quality education? Contact us to schedule a tour or enroll in one of our programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input id="name" placeholder="Your name" className="rounded-xl border-gray-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="rounded-xl border-gray-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <Input id="phone" placeholder="Your phone number" className="rounded-xl border-gray-300" />
                </div>
                <div>
                  <label htmlFor="child-age" className="block text-sm font-medium mb-2">Child's Age</label>
                  <Input id="child-age" placeholder="Child's age" className="rounded-xl border-gray-300" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="program" className="block text-sm font-medium mb-2">Interested Program</label>
                <select id="program" className="w-full rounded-xl border-gray-300 p-3 focus:ring focus:ring-kids-purple/20 focus:border-kids-purple">
                  <option value="">Select a program</option>
                  <option value="little-explorers">Little Explorers (Ages 2-3)</option>
                  <option value="curious-comets">Curious Comets (Ages 3-4)</option>
                  <option value="bright-stars">Bright Stars (Ages 4-6)</option>
                  <option value="super-novas">Super Novas (Ages 7-10)</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" placeholder="Any questions or special requests?" className="rounded-xl border-gray-300" rows={4} />
              </div>
              <Button type="submit" className="bg-kids-purple hover:bg-purple-600 rounded-xl w-full py-6">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-kids-purple to-blue-500 rounded-3xl shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Visit Our Center</h3>
              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="w-5 h-5" />}
                  title="Address"
                  detail="123 Learning Lane, Imagination City, IC 12345"
                />
                <ContactItem 
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  detail="(555) 123-4567"
                />
                <ContactItem 
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  detail="hello@kidsplanet.edu"
                />
                <ContactItem 
                  icon={<Clock className="w-5 h-5" />}
                  title="Hours"
                  detail="Monday-Friday: 7:30 AM - 6:30 PM"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h4 className="text-xl font-bold mb-4">Enrollment Steps</h4>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-kids-soft-yellow rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">1</div>
                  <div>
                    <p className="font-medium">Submit an inquiry</p>
                    <p className="text-sm text-gray-600">Fill out our contact form to express interest</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-kids-soft-blue rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">2</div>
                  <div>
                    <p className="font-medium">Schedule a tour</p>
                    <p className="text-sm text-gray-600">Visit our center and meet our educators</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-kids-soft-purple rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">3</div>
                  <div>
                    <p className="font-medium">Complete registration</p>
                    <p className="text-sm text-gray-600">Submit enrollment forms and secure your spot</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) => {
  return (
    <div className="flex items-start">
      <div className="bg-white/20 rounded-full p-2 mr-4">
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <p className="font-medium">{detail}</p>
      </div>
    </div>
  );
};

export default ContactSection;
