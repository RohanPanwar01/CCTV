import React from "react";

const services = [
  {
    title: "Residential CCTV Installation",
    description:
      "Secure your home with our advanced CCTV systems, ensuring peace of mind 24/7.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Surveillance Solutions",
    description:
      "Protect your business with tailored surveillance systems for optimal security and efficiency.",
    image:
      "https://images.unsplash.com/photo-1597764691390-9490b93ae5b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Remote Monitoring Services",
    description:
      "Access live footage anytime, anywhere with our cutting-edge remote monitoring technology.",
    image:
      "https://images.unsplash.com/photo-1579506061107-3c940d3b7a36?auto=format&fit=crop&w=800&q=80",
  },
   {
    title: "Residential CCTV Installation",
    description:
      "Secure your home with our advanced CCTV systems, ensuring peace of mind 24/7.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
   {
    title: "Residential CCTV Installation",
    description:
      "Secure your home with our advanced CCTV systems, ensuring peace of mind 24/7.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
   {
    title: "Residential CCTV Installation",
    description:
      "Secure your home with our advanced CCTV systems, ensuring peace of mind 24/7.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#003049] text-white py-16 px-6 sm:px-10 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Protect Your Property with Precision.
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Secure your premises with expert CCTV installations from Alex CCTV
          Solutions, ensuring unmatched precision and safety in Bhopal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden border border-blue-500 group shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-serif font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-200 text-base mb-5">{service.description}</p>
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
