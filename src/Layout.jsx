import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Mail, MapPin, ChevronDown } from "lucide-react";
import falconLogo from "@/assets/falcon-logo.png";

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conferencesOpen, setConferencesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global SEO for all pages (same title/description)
  useEffect(() => {
    const title = "Falcon Events";
    const description =
      "Falcon Events is a professional medical and corporate conference organizer based in Hong Kong, delivering world-class academic events, production, and faculty management.";

    document.title = title;

    const upsertMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}='${key}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    upsertMeta("name", "description", description);
    upsertMeta("name", "application-name", title);
    upsertMeta("property", "og:site_name", title);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Services", path: createPageUrl("Services") },
    { 
      name: "Conferences", 
      path: createPageUrl("Conferences"),
      dropdown: [
        { name: "Medical Conferences", path: createPageUrl("MedicalConferences") },
        { name: "Corporate Events", path: createPageUrl("CorporateEvents") }
      ]
    },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3": "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src={falconLogo}
                alt="Falcon Events Logo"
                className={`h-12 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setConferencesOpen(true)}
                    onMouseLeave={() => setConferencesOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors flex items-center ${
                        (location.pathname.startsWith(createPageUrl("Conferences")) ||
                         location.pathname.startsWith(createPageUrl("MedicalConferences")) ||
                         location.pathname.startsWith(createPageUrl("CorporateEvents")))
                          ? (isScrolled ? "text-purple-600" : "text-white")
                          : isScrolled
                          ? "text-gray-700 hover:text-purple-600"
                          : "text-white hover:text-purple-300"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${conferencesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {conferencesOpen && (
                      <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? (isScrolled ? "text-purple-600" : "text-white")
                        : isScrolled
                        ? "text-gray-700 hover:text-purple-600"
                        : "text-white hover:text-purple-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
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
          <div className="lg:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-3">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div key={item.name}>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-purple-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <img 
                src={falconLogo}
                alt="Falcon Events Logo"
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional Medical Event Organizer creating exceptional conferences through expert management and planning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl("About")} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Services")} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("MedicalConferences")} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    Medical Conferences
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("CorporateEvents")} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Contact")} className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>Conference Planning</li>
                <li>Faculty Management</li>
                <li>A/V & Production</li>
                <li>Exhibition Management</li>
                <li>CME Accreditation</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Hong Kong</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">rrahamim@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Falcon Events Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
