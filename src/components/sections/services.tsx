import Link from 'next/link';
import { Code2, Smartphone, Palette, Brain } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Build modern, responsive websites with cutting-edge technologies",
    icon: <Code2 className="w-6 h-6 text-white" />,
    gradient: "from-blue-400 to-blue-600",
    href: "/services/#web-development",
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    gradient: "from-purple-400 to-pink-500",
    href: "/services/#mobile-apps",
  },
  {
    title: "UI/UX Design",
    description: "Create stunning user experiences with beautiful interfaces",
    icon: <Palette className="w-6 h-6 text-white" />,
    gradient: "from-orange-400 to-red-500",
    href: "/services/#ui-ux",
  },
  {
    title: "AI Solutions",
    description: "Leverage artificial intelligence to automate and optimize your processes",
    icon: <Brain className="w-6 h-6 text-white" />,
    gradient: "from-green-400 to-emerald-600",
    href: "/services/#ai-solutions",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group p-8 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 border border-slate-50 flex flex-col items-start hover:-translate-y-1"
            >
              {/* Icon Box */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-linear-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}