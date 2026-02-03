import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const features = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'From Android apps to web platforms, I build end-to-end solutions with modern tech stacks.',
    },
    {
      icon: Zap,
      title: 'AI Integration Specialist',
      description: 'Leveraging AI APIs like Vertex AI and machine learning to create intelligent features.',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Focused on understanding user needs and designing solutions that create real impact.',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-12 px-6 bg-slate-950">

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              An ambitious MCA student passionate about turning ideas into impactful digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg text-slate-300 leading-relaxed space-y-4">
              <span className="block">
                I'm a driven MCA student at St. Wilfred College with a strong foundation in software development,
                problem-solving, and innovative thinking. My journey began with a curiosity about how technology
                shapes user experiences, which led me to explore full-stack development, mobile applications, and
                AI integration.
              </span>
              
              <span className="block">
                Beyond technical skills, I believe in collaboration, adaptability, and the power of diverse perspectives
                in creating products that matter. I'm enthusiastic about internship opportunities where I can contribute
                meaningfully while growing as a developer.
              </span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, rotateX: 10, rotateY: 10 }}
                  className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-lg border border-slate-700/30 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <Icon className="text-cyan-400" size={24} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
