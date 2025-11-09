import { motion } from "framer-motion";
import { Home, Building2, Factory, ShieldCheck, Camera, Lock } from "lucide-react";

const services = [
  {
    title: "Residential CCTV Installation",
    subtitle: "Home Security",
    image:
      "https://images.unsplash.com/photo-1617098900595-94e9f4c3f9f5?auto=format&fit=crop&w=800&q=80",
    icon: <Home className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Commercial CCTV Installation",
    subtitle: "Business Security",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Industrial Security Solutions",
    subtitle: "Industrial Protection",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    icon: <Factory className="w-6 h-6 text-blue-600" />,
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "24/7 Monitoring",
    desc: "Continuous surveillance to keep your property safe and secure day and night.",
  },
  {
    icon: <Camera className="w-10 h-10 text-blue-600" />,
    title: "HD Camera Setup",
    desc: "Crystal clear footage with advanced HD cameras for sharp and reliable monitoring.",
  },
  {
    icon: <Lock className="w-10 h-10 text-blue-600" />,
    title: "Secure Access",
    desc: "Encrypted and remote access to your CCTV feeds for complete control.",
  },
];

export default function CctvServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Top Section ===== */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our CCTV Installation Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-blue-600 font-medium">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== Bottom Section (Extra Features) ===== */}
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mt-20 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose Our Security Solutions?
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg text-center transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
