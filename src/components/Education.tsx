import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'St. Wilfred College',
      location: 'Mira Road, Mumbai',
      period: '2025 - 2027',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'KPB Hinduja College',
      location: 'Mumbai',
      period: '2022 - 2025',
      details: 'CGPA: 7.92 | Percentage: 78.72%',
      icon: GraduationCap,
    },
    {
      degree: '12th Standard',
      institution: 'St. Angela Sophia School',
      location: 'Jaipur, Rajasthan',
      period: '2021-22',
      details: '86.9%',
      icon: Award,
    },
    {
      degree: '10th Standard',
      institution: 'St. Angela Sophia School',
      location: 'Jaipur, Rajasthan',
      period: '2019-20',
      details: '88.7%',
      icon: Award,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="relative py-20 md:py-12 px-6 bg-slate-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Building expertise through formal education and continuous learning.
            </p>
          </motion.div>

          <div className="space-y-4">
            {education.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity" />

                    <div className="relative z-10 flex gap-6 items-start">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                        <Icon className="text-cyan-400" size={28} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-lg text-cyan-400 font-semibold mb-3">{edu.institution}</p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-400">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        {edu.details && (
                          <p className="text-slate-300 mt-4 font-semibold">{edu.details}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
