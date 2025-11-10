import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Target, Users, CheckCircle } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "With over 15 years in event management, Sarah brings vision and excellence to every project."
    },
    {
      name: "James Cooper",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "James ensures seamless execution with his meticulous attention to detail and logistics expertise."
    },
    {
      name: "Emma Richardson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Emma transforms ideas into stunning visual experiences that captivate and inspire."
    },
    {
      name: "Michael Chen",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      bio: "Michael builds lasting partnerships through exceptional service and understanding client needs."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring your event exceeds expectations."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for creating memorable experiences drives everything we do."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients and partners to bring visions to life."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace creativity and technology to deliver cutting-edge event solutions."
    }
  ];

  const achievements = [
    "Over 500 successful events delivered",
    "98% client satisfaction rate",
    "Trusted by Fortune 500 companies",
    "Award-winning event design",
    "15+ years of industry experience",
    "International event capabilities"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F3D] to-[#0D2847] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
            alt="Team"
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
              About Falcon Events Limited
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creating extraordinary experiences through innovative event management and unwavering dedication to excellence
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
                At Falcon Events Limited, we believe that every event is an opportunity to create something extraordinary. Our mission is to transform your vision into reality through meticulous planning, creative excellence, and flawless execution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether it's a high-profile corporate conference, an intimate executive meeting, or a large-scale medical symposium, we bring the same level of dedication and expertise to every project we undertake.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded on the principles of innovation, integrity, and exceptional service, we've built our reputation by consistently delivering events that not only meet but exceed our clients' expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team meeting"
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
              The principles that guide everything we do
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
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to making your event unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1F3D] to-[#0D2847] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A track record of excellence and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}