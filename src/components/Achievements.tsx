import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, BookOpen, Shield } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'Speed & Logic Coding Championship',
      description: 'Secured first position in fastest and blind coding competition',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'MHTCET Excellence',
      description: 'Scored 94.64% in MHTCET entrance examination',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const certifications = [
    {
      title: 'Smart IT Professionals (SIP)',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Digital Marketing',
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Claude AI Basics',
      icon: BookOpen,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'CyberSecurity & AI',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
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
    <section id="achievements" className="relative py-20 md:py-32 px-6 bg-slate-950">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Certifications</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Recognition of excellence and continuous professional development.
            </p>
          </motion.div>

          <div className="space-y-12">
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text"
              >
                🏆 Key Achievements
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -6 }}
                      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300"
                    >
                      <div className={`inline-block p-4 bg-gradient-to-br ${achievement.color} rounded-lg mb-4 text-white group-hover:shadow-lg group-hover:shadow-current/50 transition-all`}>
                        <Icon size={28} />
                      </div>

                      <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                      <p className="text-slate-400">{achievement.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text"
              >
                📚 Certifications
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: achievements.length * 0.1 + idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="group flex items-center gap-4 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-lg border border-slate-700/30 hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-300"
                    >
                      <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg flex-shrink-0 group-hover:shadow-lg group-hover:shadow-current/50 transition-all`}>
                        <Icon size={20} className="text-white" />
                      </div>

                      <span className="font-semibold text-slate-200">{cert.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
