import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Shruti Jain';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
          style={{ transform: 'translateZ(0)' }}
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.img
              src="/Shruti.jpeg"
              alt="Shruti Jain"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </motion.h1>

            <motion.div
              className="h-16 md:h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p
                className="text-xl md:text-3xl font-light text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
               Full-Stack Developer
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Building AI-Powered Applications &amp; Scalable Solutions
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Transforming complex problems into elegant, user-centric digital solutions. Specializing in
            mobile development, AI integration, and full-stack architecture with a focus on real-world
            impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              View My Work
              <ExternalLink size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-500 rounded-lg font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05, y: -2, rotateX: -5, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="mx-auto text-cyan-400" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
