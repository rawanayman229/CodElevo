'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  Award
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#f9f9ff]">

      {/* ===== Hero Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-slate-900"
        >
          About CodElevo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600"
        >
          Your trusted digital transformation partner
        </motion.p>
      </section>

      {/* ===== Our Story ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">
            Our Story
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CodElevo is a leading digital solutions company dedicated to helping
            businesses thrive in the digital age. With our team of expert
            developers, designers, and strategists, we deliver innovative
            solutions that drive growth and success.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Since our founding, we&apos;ve been at the forefront of digital
            innovation, helping businesses navigate the complexities of the
            digital landscape and achieve their goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/about-us.jpg" 
            alt="Team success"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* ===== Our Values ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-slate-900"
        >
          Our Values
        </motion.h2>
        <p className="mt-2 text-slate-600">
          The principles that guide everything we do
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To empower businesses with innovative digital solutions that transform ideas into reality.'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the most trusted digital partner for businesses worldwide.'
  },
  {
    icon: Users,
    title: 'Our Team',
    desc: 'A diverse team of experts passionate about digital innovation.'
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Committed to delivering the highest quality solutions.'
  }
];

