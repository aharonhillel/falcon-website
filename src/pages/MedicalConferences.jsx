import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Users, 
  Award, 
  Video,
  FileText,
  Globe,
  Shield,
  CheckCircle
} from "lucide-react";
import { createPageUrl } from "@/utils";

export default function MedicalConferences() {
  const specializedServices = [
    {
      icon: Stethoscope,
      title: "CME Accreditation Management",
      description: "We handle all aspects of continuing medical education accreditation, ensuring compliance with regulatory requirements and maximizing credit opportunities for attendees."
    },
    {
      icon: Users,
      title: "Healthcare Professional Coordination",
      description: "Specialized registration and communication tailored to medical professionals, including credential verification and specialty-specific networking opportunities."
    },
    {
      icon: Award,
      title: "Speaker & Abstract Management",
      description: "Comprehensive management of medical speakers, abstracts, and presentations with peer review coordination and presentation scheduling."
    },
    {
      icon: Video,
      title: "Hybrid & Virtual Solutions",
      description: "Advanced technology platforms for live streaming surgical procedures, virtual poster sessions, and interactive online participation for global audiences."
    }
  ];

  const pastEvents = [
    {
      title: "Global Cardiology Summit 2023",
      attendees: "1,200+ Cardiologists",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      description: "International gathering of cardiovascular experts featuring live surgical demonstrations."
    },
    {
      title: "Innovations in Oncology",
      attendees: "850+ Oncologists",
      location: "Edinburgh, Scotland",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      description: "Cutting-edge research presentations and breakthrough cancer treatment discussions."
    },
    {
      title: "Future of Neuroscience Forum",
      attendees: "600+ Neurologists",
      location: "Manchester, UK",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      description: "Advanced symposium on neurological research and clinical applications."
    }
  ];

  const testimonials = [
    {
      quote: "Falcon Events delivered an impeccable medical conference that exceeded our expectations. The attention to regulatory compliance and medical protocols was outstanding.",
      author: "Dr. Richard Smith",
      role: "President, British Medical Association",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80"
    },
    {
      quote: "The level of professionalism and understanding of medical conference requirements made our international symposium a resounding success. Highly recommended.",
      author: "Dr. Olivia Thompson",
      role: "Conference Chair, European Society of Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80"
    },
    {
      quote: "From abstract management to CME accreditation, every detail was handled with precision. The virtual component worked flawlessly for our global audience.",
      author: "Dr. Amir Khan",
      role: "Director, Global Health Institute",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80"
    }
  ];

  const capabilities = [
    "CME/CPD accreditation coordination",
    "Medical equipment and technology setup",
    "Pharmaceutical sponsor management",
    "HIPAA-compliant data handling",
    "Medical abstract and poster management",
    "Live surgical demonstration streaming",
    "Specialty-specific networking events",
    "International delegate coordination"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F3D] to-[#0D2847] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Medical Conference"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Organizers for Premier Medical Conferences
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specialized event management for healthcare professionals, medical associations, and pharmaceutical companies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Falcon Events Limited is established as the unique destination for medical event management. With unmatched expertise in the clinical community of the UK, we deliver exceptional conferences, symposiums, and training events that advance medical education and foster professional collaboration.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our specialized team understands the unique requirements of medical events, from regulatory compliance to technical requirements, ensuring every detail meets the highest standards of the medical community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized Services for Medical Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed specifically for healthcare professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Glimpse Into Our Past Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing excellence and precision in every medical conference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Users className="w-4 h-4 mr-2 text-yellow-500" />
                    {event.attendees}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Globe className="w-4 h-4 mr-2 text-yellow-500" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Medical Event Capabilities
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We bring specialized expertise and infrastructure to support every aspect of medical conferences, from intimate workshops to large-scale international symposiums.
              </p>
              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
                alt="Medical Conference"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Leading Medical Associations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What healthcare leaders say about our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1F3D] to-[#0D2847] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Next Medical Event?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us handle the complexities while you focus on advancing medical knowledge and professional development.
            </p>
            <a
              href={createPageUrl("Contact")}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Request a Proposal
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}