import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'PHP', 'Kotlin', 'HTML/CSS', 'XML', 'C#', 'C++', 'C', 'Flutter'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React JS', 'Node JS', 'Bootstrap', 'Matplotlib', 'Numpy', 'Pandas', 'Firebase SDK', 'ASP.Net'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Visual Studio Code', 'Android Studio', 'Firebase Console', 'Linux', 'Windows', 'Power BI'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'SQL', 'SQL Server', 'Firebase Realtime DB', 'SQLite'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="relative py-20 md:py-32 px-6 bg-slate-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on projects and continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
                whileHover={{ rotateX: 5, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-8 transition-all duration-300 h-full" style={{ transform: 'translateZ(0)' }}>
                  <h3 className="text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: idx * 0.05 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 hover:border-cyan-400 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 transition-all cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
