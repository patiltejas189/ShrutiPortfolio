import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Jain Tirth Yatra',
      subtitle: 'Spiritual Travel Companion App',
      description: 'An AI-powered Android application that revolutionizes how pilgrims plan and manage their sacred journeys.',
      fullDescription:
        'Jain Tirth Yatra is a comprehensive travel companion designed specifically for Jain pilgrims. It combines AI intelligence with practical travel features to solve real challenges faced by travelers on spiritual journeys.',
      problem:
        'Jain pilgrims often struggle with planning complex multi-destination journeys, finding suitable accommodations, coordinating transportation, and accessing reliable information about pilgrimage sites.',
      solution:
        'Built an intelligent Android application that leverages Vertex AI to generate personalized travel plans based on user preferences, duration, and interests. The app provides seamless booking for Dharmshalas, vehicle rentals, and real-time information about Jain Tirthankaras and rituals.',
      features: [
        'AI-powered travel plan generation using Google Vertex AI API',
        'Dharmshala (pilgrimage lodging) booking integration',
        'Vehicle rental services marketplace',
        'Donation tracking and management',
        'Comprehensive database of Jain pilgrimage sites',
        'Detailed content on Tirthankaras and sacred rituals',
        'User-friendly Android UI/UX',
        'Real-time notifications and updates',
      ],
      tech: ['Java', 'Android Studio', 'Vertex AI API', 'Firebase Realtime Database', 'REST APIs', 'Material Design'],
      impact:
        'Currently in active development. Designed to impact thousands of Jain pilgrims by streamlining their journey planning and enhancing their spiritual travel experience.',
      status: 'In Development',
      color: 'from-blue-500 to-cyan-500',
      icon: '🧘',
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
    <section id="projects" className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Projects that demonstrate full-stack capabilities and real-world problem-solving.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                layoutId={`project-${idx}`}
              >
                <motion.button
                  onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
                  className="w-full text-left group"
                  whileHover={{ y: -4 }}
                >
                  <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-8 md:p-10 transition-all duration-300 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-cyan-500 to-blue-500 transition-opacity" />

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-4xl">{project.icon}</span>
                            <div>
                              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                                {project.title}
                              </h3>
                              <p className="text-lg text-slate-400">{project.subtitle}</p>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/50 rounded-lg text-sm font-semibold text-green-300 w-fit"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {project.status}
                        </motion.div>
                      </div>

                      <p className="text-slate-300 text-lg leading-relaxed mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 5).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-3 py-1 text-sm text-slate-400">
                            +{project.tech.length - 5} more
                          </span>
                        )}
                      </div>

                      <p className="text-slate-400 text-sm">
                        Click to view full details
                      </p>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-2xl max-w-2xl w-full my-8 border border-slate-700 overflow-hidden"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{projects[selectedProject].icon}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    {projects[selectedProject].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed">
                {projects[selectedProject].fullDescription}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">The Challenge</h4>
                  <p className="text-slate-300 leading-relaxed">{projects[selectedProject].problem}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">Our Solution</h4>
                  <p className="text-slate-300 leading-relaxed">{projects[selectedProject].solution}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">Impact & Outcome</h4>
                  <p className="text-slate-300 leading-relaxed">{projects[selectedProject].impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
