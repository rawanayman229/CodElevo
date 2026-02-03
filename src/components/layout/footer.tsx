"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="
      bg-white dark:bg-slate-900
      text-slate-600 dark:text-slate-300
      border-t border-slate-100 dark:border-slate-800
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
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
            <p className="justify-content-center text-left">
              Elevating ideas into digital reality.  
              We build scalable and modern web solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Contact
            </h4>

            <div className="flex items-center gap-3 text-sm mb-3">
              <Mail size={16} />
              <span>codelevo123@gmail.com</span>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/share/1BaYHu8gn3/" className="hover:text-indigo-600 dark:hover:text-indigo-400" target="_blank">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/codelevo?igsh=MWRzZG5lYzFzcDMydg==" className="hover:text-indigo-600 dark:hover:text-indigo-400" target="_blank">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/codelevo/" className="hover:text-indigo-600 dark:hover:text-indigo-400" target="_blank"> 
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="
          mt-12 pt-6
          border-t border-slate-100 dark:border-slate-800
          text-center text-xs
        ">
          © {new Date().getFullYear()} CodElevo. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
