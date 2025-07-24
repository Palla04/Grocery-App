import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k3q9m8y', 'template_6iwe656', form.current, 'Ul1X6sMB2nC8cuVT3')
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 bg-basic shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Name"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Email"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            required
            className="w-full mb-4 px-4 py-2 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Message"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dull transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 bg-basic shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4 text-gray-700">
            Have questions about your order, delivery, or products? Feel free to reach out to us anytime!
          </p>

          <ul className="space-y-4">
            <li><span className="font-medium">Phone:</span> +91 123 456 7890</li>
            <li><span className="font-medium">Email:</span> freshcart@gmail.com</li>
            <li><span className="font-medium">Address:</span> 123, Main Street, Kolkata, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
