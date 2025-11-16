import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Target, Award, Globe } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function CorporateEvents() {
  const eventTypes = [
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
    },
    {
      icon: Award,
      title: "Awards Ceremonies",
      description: "Elegant gala dinners and award ceremonies celebrating achievements with professional production and entertainment."
    },
    {
      icon: Globe,
      title: "Incentive Travel",
      description: "Luxury incentive programs and destination experiences designed to reward and motivate your top performers."
    }
  ];

  const successMetrics = [
    { metric: "100%", label: "Client Satisfaction" },
    { metric: "100+", label: "Corporate Events" },
    { metric: "100K+", label: "Attendees Managed" },
    { metric: "50+", label: "International Clients" }
  ];

  const whyChooseUs = [
    {
      title: "Strategic Partnership",
      description: "We become an extension of your team, understanding your business objectives and brand values to deliver events that align with your corporate goals."
    },
    {
      title: "Seamless Execution",
      description: "From initial concept to post-event analysis, our experienced team manages every detail with precision and professionalism."
    },
    {
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technology and creative approaches to deliver memorable experiences that engage and inspire."
    },
    {
      title: "Global Reach",
      description: "With international event capabilities and local expertise, we can execute corporate events anywhere in the world."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80"
            alt="Corporate Event"
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
              Corporate Event Planning
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creating impactful business events that drive results and leave lasting impressions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-purple-600 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corporate Event Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive planning and execution for all types of corporate events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Falcon Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The trusted partner for corporate event excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Plan Your Next Corporate Event
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Partner with us to create a corporate event that achieves your business objectives and exceeds expectations.
            </p>
            <a
              href={createPageUrl("Contact")}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Start Planning
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}