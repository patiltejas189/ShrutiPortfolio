import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  const companies = [
    {
      id: 'birla',
      name: 'Birla White, Aditya Birla Group',
      shortName: 'Aditya Birla Group',
      role: 'Full-Stack Developer',
      duration: 'July 2025 - Present',
      logo: '/Aditya_Birla_Group.png', // Keep your original filename
      color: '#0047AB',
      type: 'Corporate',
      modalColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      experiences: [
        {
          title: 'Full-Stack Developer',
          period: 'Jan 2025 - Present',
          type: 'Full-time',
          level: 'Professional',
          highlights: [
            'Developed an OCR-based live camera scanner system to automatically extract and digitize data from documents',
            'Built a Flutter mobile application designed to streamline internal stakeholder operations and workflows',
            'Created multiple automated reports and processes on the Sparsh platform, improving operational efficiency',
            'Managed and maintained company databases using SQL with focus on data accuracy and integrity',
            'Integrated AI-powered features into the company\'s Sparsh Flutter application and developed analytics dashboards'
          ]
        },
        {
          title: 'IT Intern',
          period: 'Jul 2025 - Dec 2025',
          type: 'Internship',
          level: 'Intermediate',
          highlights: [
            'Assisted in developing internal tools and automation scripts',
            'Participated in database optimization and maintenance',
            'Contributed to technical documentation and process improvements',
            'Gained hands-on experience with enterprise software development workflows'
          ]
        }
      ],
      path: [
        { step: 'IT Intern', date: 'Jul 2025', level: 'Intermediate' },
        { step: 'Full-Stack Developer', date: 'Jan 2025-Present', level: 'Professional' }
      ]
    },
    {
      id: 'kenco',
      name: 'Ken & Co.',
      shortName: 'Ken & Co.',
      role: 'IT Intern',
      duration: 'Aug 2023 - Sep 2023',
      logo: '/KenNCo.png', // Keep your original filename
      color: '#FF6B35',
      type: 'Startup',
      modalColor: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/30',
      experiences: [
        {
          title: 'IT Intern',
          period: 'Aug 2023 - Sep 2023',
          type: 'Internship',
          level: 'Entry',
          highlights: [
            'Assisted in preparation and documentation of meeting minutes for IT audit project process walkthrough calls',
            'Conducted platform analysis of various startup clients to understand their operational structures',
            'Gathered and organized critical IT audit documentation from multiple startup platforms',
            'Gained deep understanding of startup technology infrastructure and compliance requirements'
          ]
        }
      ],
      path: [
        { step: 'IT Intern', date: 'Aug 2023', level: 'Entry' }
      ]
    }
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

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center space-y-12"
        >
          {/* Header */}
          <motion.div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Professional Experience
              </span>
            </h2>
            <p className="text-xl text-slate-300/80 max-w-2xl mx-auto">
              Click on a company to explore my professional journey
            </p>
          </motion.div>

          {/* Company Cards - Big Logo with Company Name Below */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {companies.map((company) => (
              <motion.button
                key={company.id}
                variants={logoVariants}
                whileHover="hover"
                onClick={() => setActiveCompany(company.id)}
                className="group relative focus:outline-none"
              >
                {/* Card Container */}
                <div className={`relative w-80 h-96 rounded-3xl p-6 flex flex-col items-center justify-center gap-8
                  bg-gradient-to-br from-slate-900 to-slate-800 border-2 ${company.borderColor}
                  shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden`}>
                  
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ${company.id === 'birla' 
                      ? 'bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10' 
                      : 'bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10'}`} />

                  {/* Logo Container - Big and Centered */}
                  <div className="relative w-full h-48 flex items-center justify-center mb-4">
                    <div className={`absolute inset-0 rounded-2xl
                      ${company.id === 'birla' ? 'bg-blue-500/5' : 'bg-orange-500/5'}`} />
                    
                    {/* Logo Image */}
                    <div className="relative w-40 h-40 flex items-center justify-center p-4">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Fallback Text */}
                        <div className={`absolute inset-0 flex items-center justify-center text-6xl font-bold opacity-10
                          ${company.id === 'birla' ? 'text-blue-400' : 'text-orange-400'}`}>
                          {company.shortName.charAt(0)}
                        </div>
                        
                        {/* Actual Logo */}
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-full h-full object-contain relative z-10"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Info Below Logo */}
                  <div className="text-center space-y-3 relative z-10">
                    {/* Company Name - Big and Bold */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {company.shortName}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-lg text-slate-300 font-medium">
                      {company.role}
                    </p>
                    
                    {/* Duration Badge */}
                    <div className={`px-6 py-2 rounded-full text-base font-medium
                      ${company.id === 'birla' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-300 border border-orange-500/30'}`}>
                      {company.duration}
                    </div>
                    
                    {/* Company Type */}
                    <p className="text-sm text-slate-400">
                      {company.type}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-32 h-1 rounded-full
                      ${company.id === 'birla' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-orange-500 to-amber-500'}`} />
                    <p className="text-xs text-slate-400 mt-2">Click to explore →</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
               {/* Career Timeline */}
          <motion.div className="pt-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Career Timeline
              </h3>
              <div className="relative h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-orange-500 rounded-full mb-12" />
              <div className="flex justify-between px-2">
                <div className="text-center flex-1">
                  <div className="relative">
                    <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 shadow-lg shadow-orange-500/30" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 w-px h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
                  </div>
                  <p className="text-orange-300 font-medium text-lg">Ken & Co.</p>
                  <p className="text-slate-300">IT Intern</p>
                  <p className="text-sm text-slate-400 mt-1">Aug 2023</p>
                </div>
                <div className="text-center flex-1">
                  <div className="relative">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2 shadow-lg shadow-cyan-500/30" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  </div>
                  <p className="text-cyan-300 font-medium text-lg">Aditya Birla</p>
                  <p className="text-slate-300">IT Intern</p>
                  <p className="text-sm text-slate-400 mt-1">Jul 2025</p>
                </div>
                <div className="text-center flex-1">
                  <div className="relative">
                    <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 shadow-lg shadow-green-500/30" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-12 w-px h-12 bg-gradient-to-b from-green-500/50 to-transparent" />
                  </div>
                  <p className="text-green-300 font-medium text-lg">Aditya Birla</p>
                  <p className="text-slate-300">Full-Stack Dev</p>
                  <p className="text-sm text-slate-400 mt-1">Jan 2025</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCompany(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl 
                bg-gradient-to-br from-slate-900 to-slate-950 border 
                ${companies.find(c => c.id === activeCompany)?.borderColor}`}
            >
              <button
                onClick={() => setActiveCompany(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/50 
                  hover:bg-slate-700/50 flex items-center justify-center text-slate-300 
                  hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {companies
                .filter(company => company.id === activeCompany)
                .map((company) => (
                  <div key={company.id} className="p-6 md:p-8">
                    {/* Modal Header with Big Logo */}
                    <div className="flex flex-col items-center gap-6 mb-10">
                      {/* Big Logo */}
                      <div className="w-48 h-48 flex items-center justify-center p-4">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      {/* Company Details */}
                      <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">{company.name}</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-4">
                          <p className="text-xl text-slate-300">{company.role}</p>
                          <span className="hidden md:block text-slate-500">•</span>
                          <p className="text-slate-400">{company.duration}</p>
                        </div>
                        <div className={`mt-4 px-6 py-2 rounded-full text-base font-medium inline-block
                          ${company.id === 'birla' 
                            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-300 border border-orange-500/30'}`}>
                          {company.type} Experience
                        </div>
                      </div>
                    </div>

                    {/* Career Path */}
                    <div className="mb-10">
                      <h4 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
                        <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Career Journey at {company.shortName}
                      </h4>
                      
                      <div className="relative">
                        {/* Timeline line */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ml-4
                          ${company.id === 'birla' ? 'bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500' : 'bg-gradient-to-b from-orange-500 to-amber-500'}`} />
                        
                        {/* Timeline items */}
                        <div className="space-y-8 pl-12">
                          {company.experiences.map((exp, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="relative"
                            >
                              {/* Timeline dot */}
                              <div className={`absolute -left-10 top-4 w-8 h-8 rounded-full flex items-center justify-center shadow-lg
                                ${exp.level === 'Professional' ? 'bg-green-500/20 border-2 border-green-500' :
                                  exp.level === 'Intermediate' ? 'bg-cyan-500/20 border-2 border-cyan-500' :
                                  'bg-orange-500/20 border-2 border-orange-500'}`}>
                                <div className={`w-3 h-3 rounded-full
                                  ${exp.level === 'Professional' ? 'bg-green-500' :
                                    exp.level === 'Intermediate' ? 'bg-cyan-500' :
                                    'bg-orange-500'}`} />
                              </div>

                              {/* Experience Card */}
                              <div className={`p-6 rounded-2xl backdrop-blur-sm border shadow-lg
                                ${exp.level === 'Professional' ? 'bg-green-500/5 border-green-500/20' :
                                  exp.level === 'Intermediate' ? 'bg-cyan-500/5 border-cyan-500/20' :
                                  'bg-orange-500/5 border-orange-500/20'}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                  <div>
                                    <h5 className="text-2xl font-bold text-white">{exp.title}</h5>
                                    <div className="flex flex-wrap items-center gap-3 mt-3">
                                      <span className={`px-4 py-1.5 rounded-full text-sm font-medium
                                        ${exp.level === 'Professional' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                                          exp.level === 'Intermediate' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                                          'bg-orange-500/20 text-orange-300 border border-orange-500/30'}`}>
                                        {exp.type}
                                      </span>
                                      <span className="text-slate-300 text-lg">{exp.period}</span>
                                    </div>
                                  </div>
                                  <div className={`px-5 py-2 rounded-lg text-sm font-medium
                                    ${exp.level === 'Professional' ? 'bg-green-500/10 text-green-300 border border-green-500/20' :
                                      exp.level === 'Intermediate' ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' :
                                      'bg-orange-500/10 text-orange-300 border border-orange-500/20'}`}>
                                    {exp.level} Level
                                  </div>
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-4 pt-4 border-t border-slate-700/50">
                                  {exp.highlights.map((highlight, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                      className="flex gap-4 text-slate-300 group"
                                    >
                                      <span className={`mt-2 flex-shrink-0 text-lg
                                        ${exp.level === 'Professional' ? 'text-green-500 group-hover:text-green-400' :
                                          exp.level === 'Intermediate' ? 'text-cyan-500 group-hover:text-cyan-400' :
                                          'text-orange-500 group-hover:text-orange-400'}`}>
                                        →
                                      </span>
                                      <span className="leading-relaxed text-lg group-hover:text-slate-200 transition-colors">
                                        {highlight}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Career Summary */}
                    <div className={`p-8 rounded-3xl backdrop-blur-sm border ${company.borderColor} shadow-xl`}>
                      <h4 className="text-2xl font-bold text-white mb-6 text-center">
                        Career Progression Summary
                      </h4>
                      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                        {company.path.map((step, index) => (
                          <div key={index} className={`p-6 rounded-2xl text-center flex-1 flex flex-col items-center justify-center
                            ${step.level === 'Professional' ? 'bg-green-500/10 border border-green-500/20' :
                              step.level === 'Intermediate' ? 'bg-cyan-500/10 border border-cyan-500/20' :
                              'bg-orange-500/10 border border-orange-500/20'}`}>
                            <div className={`w-5 h-5 rounded-full mb-4
                              ${step.level === 'Professional' ? 'bg-green-500' :
                                step.level === 'Intermediate' ? 'bg-cyan-500' :
                                'bg-orange-500'}`} />
                            <p className="font-bold text-white text-xl mb-2">{step.step}</p>
                            <p className="text-slate-300 text-lg mb-3">{step.date}</p>
                            <p className={`text-sm px-4 py-2 rounded-full font-medium
                              ${step.level === 'Professional' ? 'bg-green-500/20 text-green-300' :
                                step.level === 'Intermediate' ? 'bg-cyan-500/20 text-cyan-300' :
                                'bg-orange-500/20 text-orange-300'}`}>
                              {step.level} Stage
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}