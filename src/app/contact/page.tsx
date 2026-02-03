'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Send, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert('Message sent successfully!');
        form.reset(); 
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('Unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">

      {/* ===== Hero Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 mt-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-slate-900 dark:text-slate-200 transition-colors">
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600 dark:text-slate-400 transition-colors"
        >
          Get in touch with our team
        </motion.p>
      </section>

      {/* ===== Content Section ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-12 items-start">

        {/* ===== Contact Form ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg transition-colors"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Your Message</label>
              <textarea
                rows={5}
                name="message"
                placeholder="Write your message here..."
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white font-medium py-3 hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* ===== Contact Info ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-200 transition-colors">
            Contact Information
          </h2>

          <div className="space-y-4">
            <InfoItem icon={MessageCircle} title="WhatsApp" text="01143283891" />
            <InfoItem icon={Phone} title="Phone" text="(+20) 1550598053" />
            <InfoItem icon={Mail} title="Email" text="codelevo123@gmail.com" />
          </div>

          {/* Image */}
          <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/contact.jpg"
              alt="Team success"
              width={700}
              height={150}
              className="rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>
        </motion.div>

      </section>
    </div>
  );
}

/* ===== Reusable Info Item ===== */
function InfoItem({
  icon: Icon,
  title,
  text
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 transition-colors">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-medium text-slate-900 dark:text-slate-200 transition-colors">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">{text}</p>
      </div>
    </div>
  );
}
