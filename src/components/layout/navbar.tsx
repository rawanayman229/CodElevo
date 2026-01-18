"use client";
import React from "react";
import Link from "next/link";
import { 
  Moon, 
  Globe, 
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
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
          
<Link href="/services" className="hover:text-indigo-600 transition-colors">Services</Link>

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
                  
                  <Link href="/services" className="text-lg font-medium py-2 border-b border-slate-50">Services</Link>


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