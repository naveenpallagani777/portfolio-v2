import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, log form data; in production, send to backend or email service
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: 'Email',
      value: 'naveenpallagani777@gmail.com',
      link: 'mailto:naveenpallagani777@gmail.com',
    },
    {
      icon: <FaPhone className="text-2xl text-green-600" />,
      title: 'Phone',
      value: '+91 6300879033',
      link: 'tel:+916300879033',
    },
    {
      icon: <FaWhatsapp className="text-2xl text-green-500" />,
      title: 'WhatsApp',
      value: '+91 6300879033',
      link: 'https://wa.me/916300879033',
    },
    {
      icon: <FaLinkedin className="text-2xl text-blue-700" />,
      title: 'LinkedIn',
      value: 'Naveen Pallagani',
      link: 'https://www.linkedin.com/in/naveen-pallagani-b23845259/',
    },
  ];

  return (
    <section className="bg-white text-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-8">
          Get in Touch
        </h1>
        <p className="text-lg text-center mb-12">
          I'm excited to connect! Reach out through any of these channels or send me a message below.
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
            >
              <div className="mr-4">{method.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{method.title}</h3>
                <p className="text-gray-600">{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;