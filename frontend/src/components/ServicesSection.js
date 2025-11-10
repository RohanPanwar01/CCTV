import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Camera, Bell, Cpu, Wrench, CheckCircle } from "lucide-react";

const services = [
  {
    icon: <Camera className="w-10 h-10 text-blue-400" />,
    title: "CCTV Camera Installation",
    description:
      "Professional setup of HD and IP cameras for homes, offices, and commercial spaces, ensuring full coverage and reliability.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
    title: "Smart Security Systems",
    description:
      "Integrated systems including door sensors, alarms, and motion detectors that keep your property secure and connected.",
  },
  {
    icon: <Bell className="w-10 h-10 text-red-400" />,
    title: "Alarm & Alert Integration",
    description:
      "Real-time alerts on your mobile devices, letting you monitor and respond instantly to any security event.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-yellow-400" />,
    title: "AI-Based Surveillance",
    description:
      "Advanced analytics powered by AI to detect unusual activities and provide intelligent monitoring capabilities.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-cyan-400" />,
    title: "Maintenance & Support",
    description:
      "Regular maintenance, troubleshooting, and upgrades to ensure your system runs smoothly all year round.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-purple-400" />,
    title: "Testing & Quality Assurance",
    description:
      "Every installation is thoroughly tested to meet the highest performance and safety standards.",
  },
];

const ServicesPage = () => {
  return (
    <div id="services" className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-white min-h-screen py-24 px-6 sm:px-10">
      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Our Professional Services
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          From advanced surveillance systems to AI-driven monitoring solutions, we deliver comprehensive security services designed to protect what matters most.
        </p>
      </motion.div>

      {/* ===== SERVICE GRID ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-600/20 hover:border-blue-500/50 shadow-md hover:shadow-blue-500/20 transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ===== CALL TO ACTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">
          Ready to Upgrade Your Security?
        </h2>
        <p className="text-gray-400 mb-8">
          Contact us today for a free consultation and discover how AV CCTV Solutions can protect your space.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-500 transition"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
