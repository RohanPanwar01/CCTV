import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Phone",
      info: (
        <div className="flex flex-col">
          <span>+91 62662 44907</span>
          <span>+91 91650 20711</span>
        </div>
      ),
      link: "tel:+916266244907",
    },
    {
      icon: <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Email",
      info: "av_cctv_indore@gmail.com",
      link: "mailto:av_cctv_indore@gmail.com",
    },
    {
      icon: <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Address",
      info: "Indore, Madhya Pradesh, India",
      link: "https://www.google.com/maps/place/Indore,+Madhya+Pradesh",
    },
    {
      icon: <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Working Hours",
      info: "Mon - Sat: 9:00 AM - 8:00 PM",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-gray-300 py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-x-hidden">
      {/* ===== Header Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Have a question, need a quote, or want to book a CCTV installation?
          Our team is ready to help you 24/7.
        </p>
      </motion.div>

      {/* ===== Contact Info Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
        {contactInfo.map((item, i) => {
          const CardContent = (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 rounded-2xl p-6 flex flex-col justify-center text-center hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-3">
                {item.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </h3>
                {typeof item.info === "string" ? (
                  <p className="text-gray-400 text-sm sm:text-base">{item.info}</p>
                ) : (
                  <div className="text-gray-400 text-sm sm:text-base">
                    {item.info}
                  </div>
                )}
              </div>
            </motion.div>
          );

          // ✅ Make clickable for phone, email, and address
          return item.link ? (
            <a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block w-full h-full hover:no-underline"
            >
              {CardContent}
            </a>
          ) : (
            CardContent
          );
        })}
      </div>

      {/* ===== Contact Form + Map ===== */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto w-full"> */}
        {/* ---- Contact Form ---- */}
        {/* <motion.form
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900/20 to-black/40 p-6 sm:p-8 rounded-2xl border border-blue-500/20 shadow-lg w-full"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center sm:text-left">
            Send Us a Message
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1 text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-400 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form> */}

        {/* ---- Embedded Google Map ---- */}
        {/* <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-blue-500/20 shadow-lg w-full"
        >
          <iframe
            title="Alex CCTV Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9032282231893!2d77.40207057493097!3d23.165827612065584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a78a123c29%3A0xd67693a5ff45025b!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1708949123990!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[350px] sm:h-[400px] md:h-[450px] border-0"
          ></iframe>
        </motion.div>
      </div> */}
    </section>
  );
};

export default ContactPage;
