import React from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

function AboutUs() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      id: "story",
      title: "Our Story",
      body: `Tripverse Travel and Tourism L.L.C was founded on October 31, 2024. We noticed that Dubai's tourism market is massive, yet there were very few specialists providing streamlined Dubai packages—especially for travelers from India. We set out to change that. Today, we craft effortless, transparent, and memorable Dubai experiences for travelers from India, the UAE, and around the world.\n\nAlongside our Dubai expertise, our team also makes Umrah journeys simple and stress-free for both groups and individual pilgrims. From planning to on-ground support, we ensure your spiritually significant trip remains organized and peaceful.`,
    },
    {
      id: "services",
      title: "What We Do",
      body: `We specialize in:\n• Dubai Holiday Packages (budget to luxury)\n• Umrah Packages for individuals, families, and groups\n• Chauffeur & Transport Services (airport, city, desert)\n• Visa Assistance and documentation support\n• Hotel Bookings across categories and locations\n• Customized Itineraries built around your pace and interests\n• Group Tours & Corporate Travel solutions\n• Flight & Bus Bookings to complete your journey\n\nNote: We do not collect payments on the website. All payments are handled through offline or authorized channels provided directly to you.`,
    },
    {
      id: "mission",
      title: "Our Mission",
      body: `To streamline travel planning and deliver exceptional Dubai and Umrah experiences through transparent pricing, personalized itineraries, and reliable on-ground support—ensuring every journey is smooth, memorable, and stress-free.`,
    },
    {
      id: "vision",
      title: "Our Vision",
      body: `To become the most trusted name for Dubai and Umrah travel among Indian, UAE-based, and global travelers—setting the standard for service quality, value, and effortless travel planning.`,
    },
    {
      id: "why-us",
      title: "Why Choose Tripverse?",
      body: `• Dubai & Umrah Specialists: We focus on what we do best—curating high-quality experiences.\n• Transparent Pricing: No hidden costs. Clear communication from inquiry to itinerary.\n• Tailored to You: Customize hotels, excursions, and pace to match your preferences.\n• On-Ground Support: Reach us via WhatsApp, phone, or email whenever you need.\n• End-to-End Convenience: Visas, transfers, hotels, flights—we handle logistics so you don't have to.`,
    },
    {
      id: "who-we-serve",
      title: "Who We Serve",
      body: `• Families seeking seamless Dubai vacations\n• Individuals and groups planning Umrah with guidance\n• Travelers from India, the UAE, and across the globe\n• Corporate or group travelers needing coordinated, reliable services`,
    },
    {
      id: "process",
      title: "How We Work",
      body: `1. Inquire: Contact us via WhatsApp or email with your plan or requirements.\n2. Customize: We craft an itinerary and package tailored to your needs and budget.\n3. Confirm: Finalize bookings and logistics through transparent communication.\n4. Travel Easy: Enjoy your journey with our continued on-ground and remote support.`,
    },
    {
      id: "contact",
      title: "Get in Touch",
      body: `Ready to plan your Dubai getaway or Umrah journey?\n\nWhatsApp/Call: +971 521601190\nEmail: inquiry.tripverse@gmail.com\nAddress: England Z06, Shop – 17, Dubai International City, Dubai, UAE\n\nLet’s design your perfect trip—stress-free, memorable, and exclusively yours.`,
    },
  ];

  return (
    <div>
      <Header/>
      <div>
        <div className="p-10 md:px-20 lg:px-40 text-[14px] text-gray-500 flex flex-col gap-5 md:items-start">
          <header className="mb-10 mt-20">
            <h1 className="text-3xl font-bold mb-3 text-yellow-500">About Tripverse Travel and Tourism L.L.C</h1>
            <p className="text-sm text-gray-600 mb-1">Founded: October 31, 2024</p>
            <p className="text-sm text-gray-600 mb-1">Email: <a href="mailto:inquiry.tripverse@gmail.com" className="text-blue-600 underline">inquiry.tripverse@gmail.com</a> | Phone: +971 521601190</p>
            <p className="text-sm text-gray-600">Address: England Z06, Shop – 17, Dubai International City, Dubai, UAE</p>
          </header>

          {/* Table of Contents */}
          <nav className="bg-gray-100 rounded-lg p-5 mb-12 border w-full border-gray-200">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ul className="list-decimal list-inside space-y-1 text-sm md:text-base">
              {sections.map((s, index) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-blue-600 hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-3">{s.title}</h2>
              <p className="leading-relaxed whitespace-pre-line text-justify">{s.body}</p>
            </section>
          ))}

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
            aria-label="Back to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
