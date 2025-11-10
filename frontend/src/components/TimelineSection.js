import React from "react";
import { motion } from "framer-motion";
import { FileText, Settings, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Consultation & Planning",
    description:
      "We assess your security needs and design a tailored solution for maximum coverage.",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "System Configuration",
    description:
      "Our experts configure your surveillance system with optimal camera placement and smart connectivity.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "Professional Installation",
    description:
      "Certified technicians ensure flawless installation with minimal disruption.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Testing & Handover",
    description:
      "Final testing and handover with complete training and peace of mind.",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#1e3a8a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl sm:text-6xl font-extrabold mb-16 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          Our Installation Process
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical glowing line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600 rounded-full"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-8 sm:gap-10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Glowing Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 blur-lg bg-blue-500/40 rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 bg-white/5 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm shadow-md hover:shadow-blue-500/20 transition">
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
