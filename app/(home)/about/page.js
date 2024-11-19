import React from 'react';

const AboutUs = () => {
  return (
    <main className="py-16 mt-28">
      {/* About Section */}
      <section className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Welcome to SkySuite</h2>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          At SkySuite, we believe in creating more than just vacations. We create experiences that you will cherish for a lifetime. With our top-tier accommodations, unparalleled service, and personalized offerings, we ensure that every trip is memorable.
        </p>

        <div className="flex flex-wrap justify-center gap-16">
          {/* Our Mission */}
          <div className="bg-white shadow-xl rounded-xl w-full sm:w-96 p-8 hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To redefine the travel experience by offering luxury accommodations, personalized services, and unforgettable destinations. We strive to provide an exceptional experience for every guest, every time.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white shadow-xl rounded-xl w-full sm:w-96 p-8 hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading global brand in luxury travel, offering unparalleled service, comfort, and a commitment to sustainability, creating memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Founded by passionate travel enthusiasts, SkySuite was created with one goal in mind: to make travel accessible, affordable, and luxurious for everyone. Over the years, we&apos;ve grown into a global brand trusted by millions of travelers.
          </p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mt-4">
            Our journey has been driven by a team of dedicated professionals who share a deep love for creating exceptional travel experiences. We&apos;re proud to have built lasting relationships with guests from all walks of life and look forward to continuing to exceed their expectations.
          </p>
        </div>
      </section>   
    </main>
  );
};

export default AboutUs;
