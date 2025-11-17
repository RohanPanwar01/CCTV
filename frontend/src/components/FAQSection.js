import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {Helmet} from "react-helmet-async";

const faqs = [
  {
    question: "What types of CCTV cameras do you offer?",
    answer:
      "We offer a wide range including dome, bullet, PTZ, and wireless CCTV cameras from trusted brands like Hikvision, CP Plus, and Dahua.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, our expert team handles complete CCTV installation — from system setup to placement and calibration.",
  },
  {
    question: "Can I view my CCTV footage remotely?",
    answer:
      "Absolutely! Most of our systems come with mobile app and cloud viewing support for 24/7 remote monitoring.",
  },
  {
    question: "Do your products come with a warranty?",
    answer:
      "Yes, all products include official brand warranty plus our extended service support for complete peace of mind.",
  },
  {
    question: "Can I get a customized CCTV solution for my property?",
    answer:
      "Definitely. We design personalized surveillance setups for homes, offices, and industrial spaces based on your specific security needs.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
        <title>FAQ – CCTV Installation & Security Camera Services in Indore | AV CCTV</title>
<meta name="description" content="Find answers to the most common questions about CCTV installation, remote monitoring, product warranty, camera types, and custom security solutions in Indore. AV CCTV provides expert installation and top-quality surveillance systems." />
<meta name="keywords" content="CCTV FAQ, CCTV Installation FAQ, security camera FAQ, CCTV remote viewing, CCTV warranty, CCTV installation Indore, security camera Indore, CP Plus camera, Hikvision camera, Dahua CCTV, CCTV service support" />
<meta name="robots" content="index, follow" />
<meta name="author" content="AV CCTV" />
<meta property="og:title" content="FAQ – CCTV Installation & Security Camera Services in Indore | AV CCTV" />
<meta property="og:description" content="Your common CCTV questions answered — installation, remote access, warranty, camera types & more. Contact AV CCTV for expert surveillance solutions in Indore." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://cctv-pgug.onrender.com/" />
<meta property="og:image" content="https://cctv-pgug.onrender.com/"/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://cctv-pgug.onrender.com/" />

    </Helmet>
    <section className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-gray-300 py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Here are some common questions our customers ask.  
          If you have more, feel free to <span className="text-blue-400">contact us</span> anytime.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-900/20 to-black/40 border border-blue-500/20 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            {/* FAQ Question Header */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-semibold text-white">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-blue-400" />
              </motion.div>
            </button>

            {/* FAQ Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 sm:px-6 pb-4 text-gray-400 text-base sm:text-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default FAQSection;
