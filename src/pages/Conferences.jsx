import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Users, 
  Award, 
  Video,
  Globe,
  CheckCircle,
  Briefcase,
  TrendingUp,
  Target
} from "lucide-react";
import { createPageUrl } from "@/utils";

export default function Conferences() {
  const [selectedType, setSelectedType] = useState("medical");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'corporate' || type === 'medical') {
      setSelectedType(type);
    }
  }, []);

  const medicalServices = [
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

  const corporateServices = [
    {
      icon: Briefcase,
      title: "Annual General Meetings",
      description: "Professional AGMs with comprehensive shareholder management, voting systems, and live streaming capabilities."
    },
    {
      icon: TrendingUp,
      title: "Product Launches",
      description: "High-impact launch events that create buzz and showcase your products with innovative presentations and experiences."
    },
    {
      icon: Users,
      title: "Leadership Summits",
      description: "Executive-level conferences featuring keynote speakers, workshops, and networking opportunities for senior leadership."
    },
    {
      icon: Target,
      title: "Sales Conferences",
      description: "Motivational sales events with team-building activities, recognition programs, and strategic planning sessions."
    }
  ];

  const pastEvents = [
    {
      title: "CODHy Asia Pacific",
      attendees: "3,000+ Participants",
      location: "Shanghai, China",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      description: "World Congress on Controversies to Consensus in Diabetes, Obesity and Hypertension."
    },
    {
      title: "CMDA Conference",
      attendees: "3,000+ Participants",
      location: "China",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      description: "Chinese Medical Doctor Association - Chinese Endocrinologist Association Annual Conference."
    },
    {
      title: "ICE Beijing 2016",
      attendees: "8,000+ Participants",
      location: "Beijing, China",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      description: "17th International Congress of Endocrinology & 15th Annual Meeting of Chinese Society of Endocrinology."
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Conference"
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
              {selectedType === "medical" ? "Medical Conferences" : "Corporate Events"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {selectedType === "medical" 
                ? "Expert event management for medical conferences worldwide"
                : "Creating impactful business events that drive results"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Medical Conferences Section */}
      {selectedType === "medical" && (
        <>
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Specialized Medical Conference Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Falcon Events Limited is established as the unique destination for medical event management. With unmatched expertise in the clinical community across Asia and globally, we deliver exceptional conferences, symposiums, and training events that advance medical education.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {medicalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-purple-600" />
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

              {/* Past Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  A Glimpse Into Our Past Events
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
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
                        <Users className="w-4 h-4 mr-2 text-purple-600" />
                        {event.attendees}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Globe className="w-4 h-4 mr-2 text-purple-600" />
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

          {/* Capabilities Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our Medical Conference Capabilities
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We bring specialized expertise and infrastructure to support every aspect of medical conferences, from intimate workshops to large-scale international symposiums.
                  </p>
                  <div className="space-y-3">
                    {capabilities.map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
                    alt="Conference"
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Corporate Events Section */}
      {selectedType === "corporate" && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Corporate Event Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Creating impactful business events that drive results and leave lasting impressions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {corporateServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 bg-white p-12 rounded-2xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Falcon Events for Corporate Events
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Strategic Partnership</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We become an extension of your team, understanding your business objectives and brand values to deliver events that align with your corporate goals.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Seamless Execution</h4>
                  <p className="text-gray-600 leading-relaxed">
                    From initial concept to post-event analysis, our experienced team manages every detail with precision and professionalism.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Innovative Solutions</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We leverage cutting-edge technology and creative approaches to deliver memorable experiences that engage and inspire.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    With international event capabilities and local expertise, we can execute corporate events anywhere in the world.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Next {selectedType === "medical" ? "Medical Conference" : "Corporate Event"}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us handle the complexities while you focus on achieving your event objectives.
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