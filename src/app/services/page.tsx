"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Palette, CheckCircle2, BrainCircuit 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern, responsive websites with cutting-edge technologies",
    icon: Code2,
    iconBg: "bg-blue-500",
    image: "/web.jpg",
    features: ["Responsive Design", "Progressive Web Apps", "E-Commerce Solutions", "Content Management Systems", "API Integration", "Performance Optimization"],
    reversed: false
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    icon: Smartphone ,
    iconBg: "bg-red-500",
    image: "/mobile.jpg",
    features: ["iOS Development", "Android Development", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications", "Offline Functionality"],
    reversed: true
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Create stunning user experiences with beautiful interfaces",
    icon: Palette,
    iconBg: "bg-orange-500",
    image: "/ui.png",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Design Systems", "Brand Identity"],
    reversed: false
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Leverage artificial intelligence to automate and optimize your processes",
    icon: BrainCircuit,
    iconBg: "bg-green-500",
    image: "/ai.png",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Chatbots & Virtual Assistants", "Predictive Analytics", "Process Automation"],
    reversed: true
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-20 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-lg"
        >
          Comprehensive digital solutions for your business
        </motion.p>
      </div>

      {/* Services Sections */}
      <div className="space-y-32 max-w-7xl mx-auto px-6">
        {servicesData.map((service) => (
          <section 
            key={service.id} 
            id={service.id} 
            className="scroll-mt-32"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Content Column */}
              <motion.div 
                initial={{ opacity: 0, x: service.reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`${service.reversed ? 'lg:order-2' : ''} space-y-6`}
              >
                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="text-white w-7 h-7" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-slate-500 mb-8">{service.description}</p>
                </div>

                <ul className="grid grid-cols-1 gap-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center space-x-3 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`${service.reversed ? 'lg:order-1' : ''}`}
              >
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-40 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-full mx-auto bg-linear-to-r from-[#5b66f6] to-[#a855f7] rounded-[2rem] p-12 md:p-20 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 mb-10 text-lg">Let&apos;s transform your vision into reality</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </main>
  );
}