import React, { useState } from "react";

function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="w-screen flex justify-center pb-10 bg-gray-100 min-h-screen pt-20">
      <form
        onSubmit={handleSubmit}
        className="hover:scale-102 transition-transform duration-400 flex flex-col justify-center space-y-5 w-[90vw] sm:w-[60vw] md:w-[35vw] bg-white rounded-xl shadow-lg p-10 md:p-10"
      >
        <h1 className="text-center font-bold text-3xl text-red-500 mb-4">Contact Me</h1>

        <input 
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="hover:scale-102 transition-transform duration-400 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="hover:scale-102 transition-transform duration-400 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <textarea
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
          className="hover:scale-102 transition-transform duration-400 h-24 border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
        ></textarea>

        <button
          type="submit"
          className="hover:scale-102 px-5 py-3 bg-red-500 text-white rounded-md hover:bg-green-600 transition duration-400"
        >
          Send Message
        </button>

        {showMessage && (
          <p className="text-center text-green-600 font-medium">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
