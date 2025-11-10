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

  const portfolio = [
    {
      title: "Tech Giant Product Launch",
      category: "Product Launch",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      description: "Spectacular launch event featuring live demonstrations, interactive exhibits, and global livestreaming."
    },
    {
      title: "Financial Services AGM",
      category: "Annual Meeting",
      attendees: "1,000+",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
      description: "Professional shareholder meeting with secure voting systems and comprehensive investor relations."
    },
    {
      title: "Global Leadership Summit",
      category: "Conference",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      description: "Executive summit bringing together C-suite leaders for strategic discussions and networking."
    },
    {
      title: "Sales Excellence Awards",
      category: "Awards Ceremony",
      attendees: "400+",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8c33f?w=800&q=80",
      description: "Elegant gala dinner celebrating top sales performers with entertainment and recognition."
    },
    {
      title: "Pharmaceutical Summit",
      category: "Conference",
      attendees: "600+",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      description: "Industry conference showcasing innovations with expert speakers and networking sessions."
    },
    {
      title: "Barcelona Incentive Trip",
      category: "Incentive Travel",
      attendees: "150+",
      image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80",
      description: "Exclusive Mediterranean experience with luxury accommodation, activities, and gala dinner."
    }
  ];

  const successMetrics = [
    { metric: "98%", label: "Client Satisfaction" },
    { metric: "500+", label: "Corporate Events" },
    { metric: "100K+", label: "Attendees Managed" },
    { metric: "50+", label: "Fortune 500 Clients" }
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F3D] to-[#0D2847] text-white overflow-hidden">
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
              Exceptional Corporate Event Planning
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
                <div className="text-5xl font-bold text-yellow-500 mb-2">{item.metric}</div>
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
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Corporate Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of our successful corporate conferences and meetings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.attendees}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-yellow-600 mb-2">{event.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
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
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
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