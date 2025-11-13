
import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Mic, 
  Users, 
  Palette, 
  Calendar, 
  ClipboardCheck,
  Utensils,
  Camera,
  Award,
  BarChart,
  Shield,
  Headphones
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: "Venue Sourcing & Selection",
      description: "We identify and secure the perfect venue that aligns with your event's vision, budget, and logistical requirements. From intimate boardrooms to grand conference halls, we have access to exceptional venues worldwide.",
      features: [
        "Site inspections and evaluations",
        "Negotiation of contracts and rates",
        "Floor plan design and layout",
        "Accessibility assessments"
      ]
    },
    {
      icon: Calendar,
      title: "Event Planning & Management",
      description: "Comprehensive planning services covering every aspect of your event from conception to completion. We handle all the details so you can focus on your objectives.",
      features: [
        "Timeline development and management",
        "Budget planning and tracking",
        "Vendor coordination",
        "Risk management and contingency planning"
      ]
    },
    {
      icon: Mic,
      title: "Audio/Visual & Production",
      description: "State-of-the-art technical solutions including sound systems, lighting design, projection, and streaming capabilities to deliver a flawless presentation experience.",
      features: [
        "Professional sound and lighting",
        "Live streaming and recording",
        "Stage design and setup",
        "Technical support and operations"
      ]
    },
    {
      icon: Users,
      title: "Delegate Management",
      description: "Seamless attendee experience from registration to departure, including accommodation, transportation, and communication throughout the event journey.",
      features: [
        "Online registration systems",
        "Accommodation booking and management",
        "Transportation coordination",
        "On-site registration and check-in"
      ]
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Creative visual identity and branded materials that make your event memorable and reinforce your message through cohesive design elements.",
      features: [
        "Event branding and logo design",
        "Signage and wayfinding",
        "Digital and print collateral",
        "Stage and set design"
      ]
    },
    {
      icon: Utensils,
      title: "Catering & Hospitality",
      description: "Curated dining experiences and hospitality services tailored to your guests' preferences and dietary requirements, delivered with impeccable service.",
      features: [
        "Menu planning and customization",
        "Dietary accommodations",
        "Bar services and beverages",
        "VIP and executive hospitality"
      ]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional documentation of your event through high-quality photography and videography, capturing key moments and creating lasting memories.",
      features: [
        "Event photography coverage",
        "Video production and editing",
        "Live social media content",
        "Post-event highlight reels"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "On-Site Coordination",
      description: "Experienced event managers present throughout your event to ensure seamless execution, troubleshoot issues, and maintain the schedule.",
      features: [
        "Day-of event management",
        "Vendor coordination and supervision",
        "Timeline management",
        "Problem solving and support"
      ]
    },
    {
      icon: BarChart,
      title: "Post-Event Analysis",
      description: "Comprehensive evaluation and reporting on your event's success, including attendee feedback, metrics analysis, and recommendations for future events.",
      features: [
        "Attendee surveys and feedback collection",
        "Performance metrics and ROI analysis",
        "Detailed event reports",
        "Strategic recommendations"
      ]
    },
    {
      icon: Shield,
      title: "Health & Safety",
      description: "Comprehensive health and safety management ensuring compliance with regulations and creating a secure environment for all attendees.",
      features: [
        "Risk assessments",
        "Safety protocols and procedures",
        "Medical support coordination",
        "Emergency response planning"
      ]
    },
    {
      icon: Award,
      title: "Sponsorship Management",
      description: "Strategic sponsorship acquisition and management to enhance your event while providing value to sponsors through customized packages.",
      features: [
        "Sponsorship package development",
        "Sponsor acquisition and relations",
        "Activation and fulfillment",
        "ROI reporting for sponsors"
      ]
    },
    {
      icon: Headphones,
      title: "Speaker & Entertainment",
      description: "Sourcing and managing speakers, performers, and entertainment that align with your event's theme and engage your audience.",
      features: [
        "Speaker booking and management",
        "Entertainment coordination",
        "Rehearsal scheduling",
        "Technical rider fulfillment"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F3D] to-[#0D2847] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
            alt="Services"
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
              Comprehensive Event Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we provide end-to-end solutions for exceptional events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering exceptional events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We listen to your vision, objectives, and requirements to understand your needs."
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed planning and strategy development with timelines, budgets, and logistics."
              },
              {
                step: "03",
                title: "Execution",
                description: "Flawless implementation with on-site management and real-time problem solving."
              },
              {
                step: "04",
                title: "Analysis",
                description: "Post-event evaluation and reporting to measure success and gather insights."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-yellow-500 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
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
              Let's Create Something Extraordinary
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to bring your event vision to life? Get in touch with our team to discuss your requirements.
            </p>
            <a
              href={createPageUrl("Contact")}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { createPageUrl } from "@/utils";
