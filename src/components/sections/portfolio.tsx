"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Doctors Platform",
    category: "Web Development",
    images: ["/pro1.jpg", "/pro1-2.jpg", "/pro1-3.jpg", "/pro1-4.jpg"],
  },
  {
    title: "E-commerce App",
    category: "Mobile Application",
    images: ["/pro2.png", "/pro2-1.png"]
  },
  {
    title: "Hand-Made Website",
    category: "UI/UX Design",
    images: ["/pro3.jpg", "/pro3-1.jpg", "/pro3-2.jpg"],
  },
  {
    title: "Clothing Brand Website",
    category: "Web Development",
    images: ["/pro4.jpg", "/pro4-1.jpg", "/pro4-2.jpg", "/pro4-3.jpg", "/pro4-4.jpg"],
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-[#fcfaff] dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4b] dark:text-slate-200 mb-4 transition-colors">
            Our Portfolio
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg transition-colors">
            Explore our successful projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ===============================
  Project Card + Carousel
================================ */
function ProjectCard({
  project,
}: {
  project: {
    title: string;
    category: string;
    images: string[];
  };
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl bg-black dark:bg-slate-900 transition-colors">

      {/* Carousel */}
      <div
        className="relative overflow-hidden h-80 md:h-105"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {project.images.map((img, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <Image
                src={img}
                alt={project.title}
                fill
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20
          bg-white/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700/70
          text-black dark:text-white p-2 rounded-full shadow-md
          opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20
          bg-white/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700/70
          text-black dark:text-white p-2 rounded-full shadow-md
          opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t
        from-black/90 dark:from-black/80 via-black/40 dark:via-black/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <p className="text-blue-300 dark:text-blue-400 text-sm font-medium mb-2 transition-colors">
          {project.category}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-slate-100 transition-colors">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
