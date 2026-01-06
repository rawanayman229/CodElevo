"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Moon, 
  Globe, 
  ChevronDown, 
  Menu,
  Code2, 
  Smartphone, 
  Palette, 
  Cpu, 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const services = [
  { title: "Web Development", href: "/services/web-development", icon: Code2 },
  { title: "Mobile Applications", href: "/services/mobile-apps", icon: Smartphone },
  { title: "UI/UX Designs", href: "/services/ui-ux", icon: Palette },
  { title: "AI Solutions", href: "/services/ai-solutions", icon: Cpu },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4 shadow-md"
    >
  <div className="max-w-7xl mx-auto flex items-center justify-between">
  {/* Logo */}
  <Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="CodElevo Logo"
    width={160}
    height={40}
    priority
    className="h-10 w-auto object-contain"
  />
</Link>

        {/* DESKTOP NAVIGATION (Hidden on mobile/tablet) */}
        <div className="hidden lg:flex items-center space-x-8 text-slate-600 font-medium text-sm">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link>
          
          <div 
            className="relative h-full py-2"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
              Services <ChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} size={14} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-120"
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2">
                    {services.map((item) => (
                      <Link key={item.title} href={item.href} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-md group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <item.icon size={18} />
                        </div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">{item.title}</div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
        </div>

        {/* UTILITY ICONS & MOBILE MENU */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="p-2 text-slate-700 hover:text-indigo-600 hidden sm:block">
            <Moon size={20} strokeWidth={1.5} />
          </button>
          
          <button className="flex items-center space-x-1 text-slate-700 hover:text-indigo-600">
            <Globe size={20} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase">ar</span>
          </button>

          {/* BURGER SIDEBAR (Visible on Mobile & Tablet) */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
<SheetContent side="right" className="w-80 sm:w-96">
  <SheetHeader className="text-left mb-8">

    <SheetTitle>
      <div className="relative w-40 h-15">
        <Image 
          src="/logo.png" 
          alt="CodElevo Logo" 
          fill 
          className="object-contain object-left"
        />
      </div>
    </SheetTitle>
  </SheetHeader>

                <nav className="flex flex-col space-y-2 p-10">
                  <Link href="/" className="text-lg font-medium py-2 border-b border-slate-50">Home</Link>
                  <Link href="/about" className="text-lg font-medium py-2 border-b border-slate-50">About Us</Link>
                  
                  {/* Mobile Services Accordion */}
                  <div className="flex flex-col">
                    <button 
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between text-lg font-medium py-2 border-b border-slate-50"
                    >
                      Services <ChevronDown className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-50 rounded-lg mt-2"
                        >
                          {services.map((service) => (
                            <Link 
                              key={service.title} 
                              href={service.href}
                              className="flex items-center gap-3 p-4 hover:bg-indigo-50 text-slate-600"
                            >
                              <service.icon size={18} className="text-indigo-600" />
                              <span className="text-sm font-medium">{service.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/contact" className="text-lg font-medium py-2 border-b border-slate-50">Contact Us</Link>
                  
                  <div className="pt-10">
                  <button className="w-full bg-linear-to-r from-[#5b66f6] to-[#a855f7] hover:from-[#a855f7] hover:to-[#5b66f6] text-white py-3 rounded-xl font-bold">
                        Get Started
                  </button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}