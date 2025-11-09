import React from "react";
import { motion } from "framer-motion";
import { FileText, Settings, Wrench ,CheckCircle} from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Consultation & Planning",
    description: "We assess your security needs and design a custom solution.",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "System Configuration",
    description: "Our experts configure the optimal surveillance setup.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "Professional Installation",
    description:
      "Certified technicians install your CCTV system seamlessly.",
  },
   {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Testing & Handover",
    description:
      "Complete system testing and training for peace of mind.",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-24">
      <h2 className="text-4xl font-serif font-bold text-center text-[#003049] mb-12">
        Our Installation Process
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 sm:left-10 top-0 h-full w-[2px] bg-blue-500"></div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-start space-x-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 z-10 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative">
                {step.icon}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[50%] top-[100%] h-16 border-l-2 border-blue-400 transform -translate-x-1/2"></div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
