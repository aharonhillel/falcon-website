import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "Medical Conferences", path: createPageUrl("MedicalConferences") },
    { name: "Corporate Events", path: createPageUrl("CorporateEvents") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                Falcon Events Limited
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-yellow-500"
                      : isScrolled
                      ? "text-gray-700 hover:text-yellow-500"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? "text-gray-900" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-3">
            <div className="px-6 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-yellow-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0A1F3D] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-xl font-bold">Falcon Events</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating unforgettable experiences through exceptional event management and planning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl("About")} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Services")} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("MedicalConferences")} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Medical Conferences
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("CorporateEvents")} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    Corporate Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Venue Sourcing</li>
                <li>Event Management</li>
                <li>A/V & Production</li>
                <li>Delegate Management</li>
                <li>Branding & Design</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">London, United Kingdom</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">+44 (0) 20 1234 5678</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">hello@falconevents.co.uk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Falcon Events Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}