import React, { useState } from "react";
import { send } from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      // Send email with EmailJS
      await send(
        "service_9vv1obi",       // your EmailJS service ID
        "template_uat5sfe",      // your EmailJS template ID
        formData,
        "LftFU_JTYrqX4Xa8p"      // your EmailJS public key
      );

      setShowMessage(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowMessage(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-screen flex justify-center items-center bg-black min-h-screen px-5 pt-20 pb-16"
    >
      <form
        onSubmit={handleSubmit}
        className="hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl rounded-3xl p-10 w-full max-w-xl space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-yellow-400 animate-pulse">
          💌 Contact Me
        </h1>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-5 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        />

        <textarea
          name="message"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full h-28 resize-none px-5 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-white font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          🚀 Send Message
        </button>

        {showMessage && (
          <p className="text-center text-green-400 mt-4 font-medium animate-pulse">
            ✅ Message sent successfully!
          </p>
        )}

        {errorMessage && (
          <p className="text-center text-red-400 mt-4 font-medium animate-pulse">
            ❌ {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
