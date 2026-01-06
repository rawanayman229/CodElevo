import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/logo.png",
  },
  {
    title: "Banking App",
    category: "Mobile Application",
    image: "/logo.png",
  },
  {
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    image: "/logo.png",
  },
  {
    title: "AI Chatbot",
    category: "AI Solution",
    image: "/logo.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-[#fcfaff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4b] mb-4">
            Our Portfolio
          </h2>
          <p className="text-slate-500 text-lg">
            Explore our successful projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-75 md:h-100 overflow-hidden rounded-3xl cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-blue-400 font-medium text-sm mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-white text-sm font-semibold opacity-90 group-hover:gap-3 transition-all duration-300 gap-2">
                  View Project <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}