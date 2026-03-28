import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className=" text-center mt-[100px]">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg text-gray-400">
          We'd love to hear from you ☕
        </p>
      </div>

    
      <div className=" py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10">

  
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow border border-transparent
           hover:border-yellow-900 transition duration-300">
            <Phone className="text-yellow-500" />
            <a href="tel:+919976543210" className="font-medium">
                +91 99765 43210
          </a>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow
          border border-transparent hover:border-yellow-900 transition duration-300">
            <Mail className="text-yellow-500" />
            <a href="mailto:dreamlightcafe@gmail.com" className="font-medium">
              dreamlightcafe@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow
          border border-transparent hover:border-yellow-900 transition duration-300">
            <MapPin className="text-yellow-500" />
            <a 
              href="https://maps.app.goo.gl/gYtcECJ8ym5J9JDk7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
             Pune, Maharashtra, India
            </a>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow
          border border-transparent hover:border-yellow-900 transition duration-300">
            <Clock className="text-yellow-500" />
            <span className="font-medium">
              9:00 AM - 11:00 PM
            </span>
          </div>

        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-800"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-800"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-800"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;