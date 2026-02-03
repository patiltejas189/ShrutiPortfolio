import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technicalSkills = [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "📜" },
    { name: "PHP", icon: "🐘" },
    { name: "Kotlin", icon: "🤖" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "XML", icon: "📄" },
    { name: "C#", icon: "🎯" },
    { name: "C++", icon: "⚡" },
    { name: "C", icon: "🔧" },
    { name: "Flutter", icon: "🦋" },
    { name: "React JS", icon: "⚛️" },
    { name: "Node JS", icon: "🟢" },
    { name: "Bootstrap", icon: "🎪" },
    { name: "ASP.Net", icon: "🌐" },
    { name: "Data Structure in Java", icon: "☕" },
  ];

  const toolsPlatforms = [
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "Android Studio", icon: "📱" },
    { name: "Firebase", icon: "🔥" },
    { name: "Linux", icon: "🐧" },
    { name: "Windows", icon: "🪟" },
    { name: "Power BI", icon: "📊" },
    { name: "Docker", icon: "🐳" },
    { name: "Matplotlib", icon: "📈" },
    { name: "Numpy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Firebase SDK", icon: "🔧" },
  ];

  const databases = [
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗃️" },
    { name: "SQL Server", icon: "🗄️" },
    { name: "Firebase DB", icon: "🔥" },
    { name: "SQLite", icon: "💾" },
    { name: "MySQL", icon: "🐬" },
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

  const skillCardVariants = {
    hover: {
      y: -8,
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const SkillCard = ({ skill }: { skill: { name: string; icon: string; level?: string } }) => (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="group"
    >
      <motion.div
        variants={skillCardVariants}
        className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg 
          border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all 
          duration-300 h-full flex flex-col items-center justify-center text-center
          transform-gpu"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <div className="relative z-10 mb-4">
          <span className="text-5xl mb-2">{skill.icon}</span>
        </div>
        
        {/* Skill Name */}
        <div className="relative z-10">
          <h4 className="font-semibold text-lg text-slate-200 group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h4>
          {skill.level && (
            <p className="text-sm text-slate-400 mt-1 group-hover:text-cyan-400">
              {skill.level}
            </p>
          )}
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
          mix-blend-overlay" />
      </motion.div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-20 md:py-12 px-6 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
           <p className="text-xl text-slate-400 max-w-3xl mx-auto">
               A diverse toolkit developed through hands-on projects and continuous learning
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">💻</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Programming & Frameworks
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools & Platforms - Full width */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">🔧</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Tools & Platforms
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {toolsPlatforms.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Databases - Full width */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">🗃️</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Databases
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {databases.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>

          

        </motion.div>
      </div>
    </section>
  );
}