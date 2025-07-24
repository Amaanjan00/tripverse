import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Privacypolicy() {
  return (
    <div>
      <Header/>
      <div>
        <div className="p-10 md:px-20 lg:px-40 text-[14px] text-gray-500 flex flex-col gap-5 md:items-start">

          <h1 className="text-yellow-500 text-3xl font-bold mb-6 text-start mt-20">Privacy Policy</h1>

          <p className="mb-4">Effective Date: July 24, 2025</p>

          <p className="mb-4">
            This Privacy Policy describes how Tripverse Travel and Tourism L.L.C
            ("Tripverse", "we", "our", or "us") collects, uses, shares, and protects
            the personal information of users who visit our website at
            <a
              href="https://thetripverse.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://thetripverse.com
            </a>
            .
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
            <p>Company Name: Tripverse Travel and Tourism L.L.C</p>
            <p>Address: England Z06, Shop - 17, Dubai International City, Dubai, UAE</p>
            <p>Contact Number: +971 521601190</p>
            <p>Email: inquiry.tripverse@gmail.com</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Age (if applicable)</li>
              <li>Other voluntarily provided information through forms</li>
            </ul>
            <p className="mt-2">We do not collect any payment or credit card information through our website.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. How We Collect Data</h2>
            <ul className="list-disc pl-6">
              <li>When users fill out contact or inquiry forms</li>
              <li>Via newsletter or email subscriptions</li>
              <li>Clicking WhatsApp or email inquiry buttons</li>
              <li>Through cookies and third-party tracking tools</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking</h2>
            <p>
              We use cookies and analytics tools (e.g., Google Analytics, Meta Pixel)
              to enhance your browsing experience, understand site usage, and improve
              our services. You can disable cookies through your browser settings.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Use of Personal Information</h2>
            <p>Your data may be used to:</p>
            <ul className="list-disc pl-6">
              <li>Respond to your inquiries and service requests</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Improve website usability and customer experience</li>
              <li>Analyze usage trends for internal planning</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Sharing of Information</h2>
            <p>
              We may share your information with third-party service providers solely
              to support business operations such as marketing platforms, communication
              tools, and analytics services. We do not sell your personal data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. International Users</h2>
            <p>
              As we operate globally, your information may be processed in countries
              outside your own. We ensure data protection measures are in place to
              comply with relevant regulations.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational safeguards to
              protect your information. While we strive to use commercially acceptable
              means to protect your personal data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">9. Data Retention</h2>
            <p>
              We retain your data only as long as necessary to fulfill the purposes for
              which it was collected or as required by applicable law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">10. Your Rights</h2>
            <p>You may have rights under applicable data protection laws to:</p>
            <ul className="list-disc pl-6">
              <li>Request access to the data we hold about you</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at
              <a
                href="mailto:inquiry.tripverse@gmail.com"
                className="text-blue-600 underline ml-1"
              >
                inquiry.tripverse@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">11. Children’s Privacy</h2>
            <p>
              We do not knowingly collect information from children under the age of 13.
              If you believe we have unintentionally collected such data, please contact us.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">12. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update or modify this policy at any time.
              Changes will be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, you may contact us:
            </p>
            <p>Tripverse Travel and Tourism L.L.C</p>
            <p>England Z06, Shop - 17, Dubai International City, Dubai, UAE</p>
            <p>Email: inquiry.tripverse@gmail.com</p>
            <p>Phone: +971 521601190</p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Privacypolicy
