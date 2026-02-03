"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32  dark:bg-slate-950 transition-colors">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-125 h-125 bg-purple-50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-125 h-125 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight 
            bg-linear-to-r from-[#5b66f6] to-[#a855f7] 
            bg-clip-text text-transparent leading-tight mb-8">
          Elevating Ideas Into Digital Reality
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 
          max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
          CodElevo delivers digital solutions tailored to elevate your business
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
          {/* Primary Button */}
          <Link 
            href="/contact" 
            className="flex items-center gap-2 px-8 py-3.5 
                       bg-linear-to-r from-[#5b66f6] to-[#a855f7] 
                       hover:from-[#a855f7] hover:to-[#5b66f6] 
                       text-white rounded-lg font-medium 
                       transition-all shadow-lg 
                       shadow-indigo-200 dark:shadow-indigo-900/30">
            Get Started <ArrowRight size={18} />
          </Link>

          {/* Secondary Button */}
          <Link 
            href="/about" 
            className="px-8 py-3.5 
                       bg-white dark:bg-slate-900 
                       text-indigo-600 dark:text-indigo-400 
                       border border-blue-200 dark:border-slate-700 
                       rounded-lg font-medium 
                       hover:bg-blue-50 dark:hover:bg-slate-800 
                       transition-all">
            Learn More
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
