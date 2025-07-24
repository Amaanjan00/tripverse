import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Termsandconditions() {
  const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: `By accessing or using our Website, submitting an inquiry, or engaging with our services in any way, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, please discontinue use of the Website and our services. These Terms apply to all visitors, users, and others who access the Website or communicate with us through any channel, including WhatsApp, email, and phone.`,
  },
  {
    id: "definitions",
    title: "Definitions",
    body: `"Website" refers to https://thetripverse.com/ and any subpages or content therein. "Services" means travel-related information, consultation, itinerary planning, booking assistance, and any other travel and tourism services offered by Tripverse. "User", "you", "your" refers to the individual or entity accessing the Website or engaging with Tripverse. "Third-Party Supplier" refers to airlines, hotels, transport providers, visa agencies, tour operators, insurance companies, and any other external vendors.`,
  },
  {
    id: "scope",
    title: "Scope of Services",
    body: `Tripverse provides travel and tourism-related services, including but not limited to: trip consultation and itinerary planning; assistance with bookings for accommodation, transport, and tours (through third-party suppliers); coordination of services such as visas, transfers, and local excursions; and communication via Website forms, email, phone, and messaging platforms. Note: We do not collect or process payments through the Website. Any payment arrangements are conducted offline or through designated third-party platforms as communicated to you separately.`,
  },
  {
    id: "eligibility",
    title: "User Eligibility & Representation",
    body: `By using our Website and services, you represent and warrant that: (a) You are at least 18 years old or have legal parental/guardian consent; (b) You have the legal capacity to enter into binding agreements; (c) All information you provide is accurate, complete, and current; and (d) You will use the Website and Services in compliance with all applicable laws and regulations.`,
  },
  {
    id: "submission",
    title: "Information Submission & Communication Channels",
    body: `You may provide personal details (e.g., name, email, phone number, age) through inquiry/contact forms on the Website, email communications, WhatsApp, or other messaging platforms linked from the Website. You consent to receive communications from us electronically and agree that all notices, disclosures, and other communications that we provide satisfy any legal requirement that such communications be in writing.`,
  },
  {
    id: "payments",
    title: "No Payment Collection on Website",
    body: `Tripverse does not process or accept payments through the Website. If payment is required for any service, we will communicate the method (e.g., bank transfer, in-person payment, authorized third-party payment gateway). Any financial transactions conducted outside the Website are governed by separate terms or agreements provided at the time of transaction.`,
  },
  {
    id: "pricing",
    title: "Pricing, Quotes & Availability",
    body: `All prices or quotes provided by Tripverse are based on availability at the time of inquiry and may change without notice until confirmed by the relevant third-party supplier. Currency fluctuations, supplier price changes, tax adjustments, and surcharges may affect the final price. A quote does not constitute a confirmed booking. Bookings are confirmed only upon written confirmation from Tripverse and/or the relevant supplier and receipt of any required deposits/payments as communicated.`,
  },
  {
    id: "bookings",
    title: "Bookings, Changes & Cancellations",
    body: `Bookings Through Third Parties: Tripverse may facilitate bookings through third-party suppliers. We act as an intermediary and cannot be held responsible for errors, omissions, or service failures by those suppliers. Changes by the User: Any change requests (dates, number of travelers, hotel category, etc.) must be made in writing and are subject to availability and additional costs. Certain bookings may be non-changeable or non-refundable based on supplier policies. Cancellations by the User: Cancellation requests must be submitted in writing to inquiry.tripverse@gmail.com. Refunds, if any, are subject to supplier-specific cancellation terms and processing timelines. Tripverse may apply an administrative fee for handling cancellations. Changes or Cancellations by Tripverse: We reserve the right to modify or cancel bookings in the event of unforeseen circumstances, force majeure, or supplier issues. We will attempt to offer alternatives of comparable value where possible. If not feasible, refunds (if any) will comply with supplier policies.`,
  },
  {
    id: "visas",
    title: "Visas, Travel Documents & Compliance",
    body: `You are solely responsible for obtaining all required travel documents (passports, visas, permits, health certificates, vaccinations) and ensuring their validity. We may assist with visa processing through third-party agents, but we do not guarantee visa approval, processing times, or the accuracy of information provided by third parties. Failure to possess proper documentation may result in denied boarding or entry; Tripverse will not be liable for any resulting loss or additional expenses.`,
  },
  {
    id: "health",
    title: "Health, Safety & Insurance",
    body: `Travel involves inherent risks. You are responsible for ensuring you are medically fit to travel and for obtaining any recommended vaccinations or medical advice. We strongly recommend purchasing comprehensive travel insurance (covering trip cancellations, medical expenses, personal liability, lost luggage, etc.). Tripverse is not responsible for any injuries, illnesses, damages, or losses incurred during travel.`,
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    body: `Tripverse shall not be liable for any delays, damages, or losses due to circumstances beyond our control, including but not limited to natural disasters, pandemics, government actions, strikes, war, civil unrest, or other force majeure events. In such cases, supplier policies will determine refunds or rescheduling options.`,
  },
  {
    id: "third-party-links",
    title: "Third-Party Links & Services",
    body: `The Website may contain links to third-party websites and services. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of third-party sites. You access them at your own risk.`,
  },
  {
    id: "ip",
    title: "Intellectual Property Rights",
    body: `All content on the Website, including text, graphics, logos, images, and software, is owned or licensed by Tripverse and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, modify, or create derivative works from any content without prior written consent from Tripverse.`,
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use & Prohibited Activities",
    body: `You agree not to: use the Website for unlawful or fraudulent purposes; impersonate any person or entity or misrepresent your affiliation; interfere with or disrupt the Website’s functionality or servers; introduce viruses, malware, or harmful code; or harvest/collect information of other users without consent.`,
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    body: `Your privacy is important to us. Our collection and use of personal data are governed by our Privacy Policy, which is incorporated by reference into these Terms. By using our Website and services, you acknowledge and consent to our data practices as described in the Privacy Policy.`,
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: `The Website and Services are provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied. Tripverse does not guarantee the accuracy, completeness, or reliability of any information on the Website, including pricing and availability. We do not warrant that the Website will be uninterrupted, secure, or error-free, or that any defects will be corrected.`,
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law: Tripverse shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Website or services, even if advised of the possibility of such damages. Our total liability to you for any claim arising out of or in connection with these Terms or the Services shall not exceed the amount you paid us for the specific service giving rise to the claim, if any.`,
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: `You agree to indemnify, defend, and hold harmless Tripverse, its directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or related to: your use of the Website or Services; your breach of these Terms; or your violation of any law or third-party rights.`,
  },
  {
    id: "law",
    title: "Governing Law & Jurisdiction",
    body: `These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.`,
  },
  {
    id: "dispute",
    title: "Dispute Resolution",
    body: `Before initiating formal legal proceedings, the parties agree to attempt to resolve any dispute amicably through good-faith negotiations. If unresolved within 30 days, either party may propose mediation or arbitration in Dubai under applicable rules. Participation in mediation/arbitration does not waive either party’s right to seek injunctive relief in court.`,
  },
  {
    id: "severability",
    title: "Severability",
    body: `If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable.`,
  },
  {
    id: "waiver",
    title: "No Waiver",
    body: `Failure by Tripverse to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.`,
  },
  {
    id: "assignment",
    title: "Assignment",
    body: `You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations to any affiliate or in connection with a merger, acquisition, or sale of assets.`,
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: `We reserve the right to modify or update these Terms at any time. Changes will be posted on this page with the updated effective date. Continued use of the Website and Services after such changes constitutes acceptance of the revised Terms.`,
  },
  {
    id: "contact",
    title: "Contact Information",
    body: `Tripverse Travel and Tourism L.L.C, England Z06, Shop - 17, Dubai International City, Dubai, UAE. Email: inquiry.tripverse@gmail.com. Phone: +971 521601190. By using our Website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.`,
  },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <Header/>
    <div className="p-10 md:px-20 lg:px-40 text-[14px] text-gray-500 flex flex-col gap-5 md:items-start">
      <header className="mb-10 mt-20">
        <h1 className="text-3xl font-bold mb-3 text-yellow-500">Terms & Conditions</h1>
        <p className="text-sm text-gray-600 mb-2">Effective Date: July 24, 2025</p>
        <p className="text-sm text-gray-600">
          Company: Tripverse Travel and Tourism L.L.C | Website: <a className="text-blue-600 underline" href="https://thetripverse.com" target="_blank" rel="noreferrer">thetripverse.com</a>
        </p>
        <p className="text-sm text-gray-600">Contact: inquiry.tripverse@gmail.com | +971 521601190</p>
        <p className="text-sm text-gray-600">Address: England Z06, Shop - 17, Dubai International City, Dubai, UAE</p>
      </header>

      {/* Table of Contents */}
      <nav className="bg-gray-100 rounded-lg p-4 mb-8 border w-full border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
        <ul className="list-decimal list-inside space-y-1 text-sm md:text-base">
          {sections.map((s) => (
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
        <section key={s.id} id={s.id} className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
          <p className="leading-relaxed whitespace-pre-line text-justify">{s.body}</p>
        </section>
      ))}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Termsandconditions
