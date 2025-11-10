import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Presenting the highest level of academic conferences with world-leading medical experts and Nobel laureates."
    },
    {
      icon: Heart,
      title: "Professional Performance",
      description: "Delivering high-quality, personalized meeting experiences from small advisory boards to large international conferences."
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Attracting participants from over 70 countries worldwide with our premier medical conferences."
    },
    {
      icon: Award,
      title: "Scientific Integrity",
      description: "Ensuring the highest academic standards with guidance from renowned medical experts globally."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#6B21A8] to-[#4C1D95] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&q=80"
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
            <div className="flex justify-center mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6912344b695266802e684b74/749f925e0_Screenshot2025-11-11at015649.png"
                alt="Falcon Events Logo"
                className="h-32 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Falcon Events Limited
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional Medical Event Organizer - A Subsidiary of Falcon Group
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The professionalism of Falcon Group and Taixi Congress is to present the highest quality academic conferences and output the conference contents of the highest academic level. Our professional performance benefits from the guidance and support of renowned medical experts from around the world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether it is a small meeting with dozens of people or a large meeting with thousands of people, Taixi Congress can provide attendees with a high-quality and personalized meeting experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our establishment in 2004, we have successfully organized many medical conferences in China and across Asia including Hong Kong, Macau, Thailand, Vietnam, Philippines, and beyond. We work with world-leading medical experts in their fields and Nobel laureate guest speakers to ensure our medical conferences are at the highest scientific level.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
                alt="Medical Conference"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our medical event management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}