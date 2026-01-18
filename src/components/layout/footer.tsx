"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
Facebook, 
Instagram, 
Linkedin,  
Phone, 
Mail 
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
const currentYear = new Date().getFullYear();

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.5,
        staggerChildren: 0.1,
    },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

return (
    <footer className="bg-[#0a1120] text-slate-400 py-16 px-6 md:px-12 lg:px-24">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
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
            <p className="leading-relaxed">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1BaYHu8gn3/" target="_blank" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/codelevo?igsh=MWRzZG5lYzFzcDMydg==" target="_blank" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/codelevo/" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-bold text-lg">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/#web-development" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/#mobile-apps" className="hover:text-blue-400 transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services/#ui-ux" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/#ai-solutions" className="hover:text-blue-400 transition-colors">AI Solutions</Link></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-bold text-lg">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i  className="fa-brands fa-whatsapp text-blue-500 mt-1 shrink-0" />
                <span>01143283891</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>(+20) 1550598053</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>codelevo123@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-sm">
            © {currentYear} CodElevo. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;