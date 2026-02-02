import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIdx, setExpandedIdx] = useState(0);

  const experiences = [
    {
      company: 'Birla White, Aditya Birla Group',
      role: 'Full-Stack Developer',
      location: 'Mumbai',
      duration: 'January 2025 - Present',
      logo: '/Aditya_Birla_Group.png',
      highlights: [
        'Developed an OCR-based live camera scanner system to automatically extract and digitize data from documents',
        'Built a Flutter mobile application designed to streamline internal stakeholder operations and workflows',
        'Created multiple automated reports and processes on the Sparsh platform, improving operational efficiency',
        'Managed and maintained company databases using SQL with focus on data accuracy and integrity',
        'Integrated AI-powered features into the companys Sparsh Flutter application and developed analytics dashboards',
      ],
    },
    {
      company: 'Birla White, Aditya Birla Group',
      role: 'IT Intern',
      location: 'Mumbai',
      duration: 'July 2025 - December 2025',
      logo: '/Aditya_Birla_Group.png',
      highlights: [
        'Developed an OCR-based live camera scanner system to automatically extract and digitize data from documents',
        'Built a Flutter mobile application designed to streamline internal stakeholder operations and workflows',
        'Created multiple automated reports and processes on the Sparsh platform, improving operational efficiency',
        'Managed and maintained company databases using SQL with focus on data accuracy and integrity',
        'Integrated AI-powered features into the companys Sparsh Flutter application and developed analytics dashboards',
      ],
    },
    {
      company: 'Ken & Co.',
      role: 'IT Intern',
      location: 'Bangalore',
      duration: 'August 2023 - September 2023',
      logo: '/KenNCo.png',
      highlights: [
        'Assisted in preparation and documentation of meeting minutes for IT audit project process walkthrough calls',
        'Conducted platform analysis of various startup clients to understand their operational structures',
        'Gathered and organized critical IT audit documentation from multiple startup platforms',
        'Gained deep understanding of startup technology infrastructure and compliance requirements',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="relative py-20 md:py-32 px-6 bg-slate-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real-world experience building solutions that matter.
            </p>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
                  className="w-full text-left"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 md:p-8 transition-all duration-300 cursor-pointer group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-2">
                          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2">
                            <img src={exp.logo} alt={`${exp.company} logo`} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                            <span className="text-slate-400 text-sm md:text-base">at {exp.company}</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm md:text-base">
                          {exp.location} • {exp.duration}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 mt-2"
                      >
                        <ChevronDown size={24} className="text-cyan-400" />
                      </motion.div>
                    </div>
                  </div>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    expandedIdx === idx
                      ? { opacity: 1, height: 'auto' }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-slate-800/30 border-l-2 border-cyan-500/50 p-6 md:p-8 space-y-3 mt-1 rounded-b-xl">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3"
                      >
                        <span className="text-cyan-400 font-bold mt-1 flex-shrink-0">•</span>
                        <p className="text-slate-300 leading-relaxed">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
