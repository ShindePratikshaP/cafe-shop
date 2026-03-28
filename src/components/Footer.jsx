import React from 'react'


import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Coffee
} from "lucide-react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-[#6d403b] text-white px-6 md:px-16 py-12">

      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-yellow-400">
            <Coffee /> DreamLight Cafe
          </h2>
          <p className="font-bold mt-3">
            Fresh coffee, delicious food & cozy vibes ☕
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2 font-bold">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-400">Menu</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">
            Contact
          </h3>

          <div className="space-y-3">

            <div className="flex items-center gap-2 font-bold">
              <Phone size={18} />
              <a href="tel:+919976543210" className="hover:text-yellow-400">
                +91 99765 43210
              </a>
            </div>

            <div className="flex items-center gap-2 font-bold">
              <Mail size={18} />
              <a href="mailto:dreamlightcafe@gmail.com" className="hover:text-yellow-400">
                dreamlightcafe@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-2 font-bold">
              <MapPin size={18} className="mt-1" />
              <a
                href="https://maps.app.goo.gl/gYtcECJ8ym5J9JDk7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
              Karve Nagar, Pune, Maharashtra, India
              </a>
            </div>


          </div>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-4 text-yellow-400">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <Facebook />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <Instagram />
            </a>

            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <Github />
            </a>

            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <Linkedin />
            </a>

          </div>
        </div>
      </div>

  
      <div className="border-t border-yellow-300 mt-10 pt-5 text-center text-sm font-bold">
        © {new Date().getFullYear()} DreamLight Cafe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;