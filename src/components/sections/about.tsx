"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-200 tracking-tight transition-colors">
              About CodElevo
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl transition-colors">
              CodElevo is a leading digital solutions company dedicated to helping
              businesses thrive in the digital age. With our team of expert developers,
              designers, and strategists, we deliver innovative solutions that drive
              growth and success.
            </p>
          </div>

          {/* Mission & Vision List */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="text-blue-600 dark:text-blue-400 w-6 h-6 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 transition-colors">
                  Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors">
                  To empower businesses with innovative digital solutions that
                  transform ideas into reality.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="text-blue-600 dark:text-blue-400 w-6 h-6 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 transition-colors">
                  Our Vision
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors">
                  To be the most trusted digital partner for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Using the image from your public folder */}
            <Image
              src="/about.jpg" 
              alt="CodElevo Team working"
              width={800}
              height={600}
              className="object-cover w-full h-100 md:h-125"
              priority
            />
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 
        bg-blue-50 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70 transition-colors"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
