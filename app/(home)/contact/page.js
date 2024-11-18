import React from 'react';

const ContactUs = () => {
  return (
    <main className="py-16 bg-white mt-28">

      {/* Contact Info Section */}
      <section className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12">We’d love to hear from you! Please feel free to reach out with any questions.</p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Contact Card 1: Address */}
          <div className="bg-white shadow-lg rounded-xl w-full sm:w-96 p-6 hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Address</h3>
            <p className="text-gray-600">123 SkySuite St, Suite 400<br />Some City, Some State, 12345</p>
          </div>

          {/* Contact Card 2: Phone */}
          <div className="bg-white shadow-lg rounded-xl w-full sm:w-96 p-6 hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>

          {/* Contact Card 3: Email */}
          <div className="bg-white shadow-lg rounded-xl w-full sm:w-96 p-6 hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600">contact@skysuite.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Send Us a Message</h3>

          <form action="#" method="POST">
            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" 
                placeholder="John Doe" 
                required 
              />
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" 
                placeholder="you@example.com" 
                required 
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600" 
                placeholder="Write your message here..." 
                required 
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}

export default ContactUs;
