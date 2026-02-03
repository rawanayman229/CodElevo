"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Globe, Menu, Sun } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      document.documentElement.classList.add("dark");
      setTimeout(() => setDarkMode(true), 0);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 md:px-6 py-4 shadow-md transition-colors"
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
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-slate-600 dark:text-slate-300 font-medium text-sm">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Us</Link>
        </div>

        {/* Utility Icons & Mobile Menu */}
        <div className="flex items-center space-x-3 md:space-x-5">
          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors hidden sm:block"
          >
            {darkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>

          {/* Language Button */}
          <button className="flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors">
            <Globe size={20} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase">ar</span>
          </button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
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

                <nav className="flex flex-col space-y-2 p-10 text-slate-700 dark:text-slate-200">
                  <Link href="/" className="text-lg font-medium py-2 border-b border-slate-50 dark:border-slate-700">Home</Link>
                  <Link href="/about" className="text-lg font-medium py-2 border-b border-slate-50 dark:border-slate-700">About Us</Link>
                  <Link href="/services" className="text-lg font-medium py-2 border-b border-slate-50 dark:border-slate-700">Services</Link>
                  <Link href="/contact" className="text-lg font-medium py-2 border-b border-slate-50 dark:border-slate-700">Contact Us</Link>

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