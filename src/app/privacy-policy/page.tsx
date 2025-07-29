'use client';
import Footer from "@/components/landing/Footer";
import Navigation from "@/components/nav/Navigation";

export default function Privacy() {
  return (
    <div className="Privacy min-h-screen w-full bg-gray-950 text-gray-100 px-4 py-10 md:py-16">
      <Navigation />
      <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-6">
          <span>Effective Date: <strong>21st July 2025</strong></span><br />
          <span>Last Updated: <strong>21st July 2025</strong></span>
        </p>

        <p className="mb-4">
          This Privacy Policy is formulated and published by <strong>CycleSync Innovation Private Limited</strong>, a company incorporated under the laws of India with its registered office at 7-4-271, Navajeevan Nagar, Ferozguda, Balanagar Mandal, Medchal Malkajgiri District, Telangana State – 500011, India (hereinafter referred to as “CycleSync”, “we”, “our”, or “us”). This Privacy Policy describes how we collect, use, process, disclose, retain, and safeguard the personal data of our users (hereinafter referred to as “you”, “your”, or “User”) who access, download, register for, or use the CycleSync mobile application, website, or related services (collectively, the “Services”).
        </p>

        <p className="mb-4">
          CycleSync is an AI-driven health platform committed to empowering women by providing holistic and personalized recommendations relating to menstrual cycle tracking, productivity enhancement, fitness management, nutritional guidance, and health condition management such as PCOS. Your privacy and data protection are of utmost importance to us, and we are fully committed to adhering to all applicable Indian data protection regulations, including but not limited to the <strong>Digital Personal Data Protection Act, 2023</strong>, the <strong>Information Technology Act, 2000</strong>, and the rules and standards framed thereunder.
        </p>

        <SectionTitle num="1." text="Applicability" />
        <p className="mb-4">
          This Privacy Policy applies uniformly to all users, whether registered or unregistered, who access or interact with any part of the Services operated or controlled by CycleSync. ...
          <br />
          <span className="text-xs text-gray-400">[Section abbreviated for compactness; keep full original for deployment]</span>
        </p>

        {/* --- The rest of your sections follows the same structure --- */}
        <SectionTitle num="2." text="Information We Collect" />
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><b>Personal Information:</b> Full name, contact number...</li>
          <li><b>Health and Wellness Data:</b> Menstrual cycle history, period flow patterns, ...</li>
          <li><b>Device and Technical Information:</b> IP address, device IDs, browser, app version, geolocation etc.</li>
          <li><b>Cookies and Similar Tracking Technologies:</b> Used for personalization, internal analytics and preferences.</li>
        </ul>

        <SectionTitle num="3." text="Purpose of Data Collection" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>User Profile Creation and Verification</li>
          <li>Service Delivery and Feature Enablement</li>
          <li>Health Insights and Personalization</li>
          <li>Transaction and Subscription Management</li>
          <li>Security and Fraud Detection</li>
          <li>Compliance with Legal Obligations</li>
          <li>Customer Support and Service Improvement</li>
          <li>Marketing and Outreach (with Consent)</li>
        </ul>

        <SectionTitle num="4." text="Lawful Basis for Processing" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Consent</li>
          <li>Performance of a Contract</li>
          <li>Legal Obligation</li>
          <li>Legitimate Interests</li>
          <li>Public Interest or Legal Claims</li>
        </ul>

        <SectionTitle num="5." text="Disclosure and Sharing of Data" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>With Service Providers</li>
          <li>With Regulatory Authorities</li>
          <li>With Payment Processors</li>
          <li>With Auditors and Legal Advisors</li>
          <li>In Corporate Transactions</li>
        </ul>
        <p className="mb-4">All third-party disclosures are governed by contractual arrangements ensuring compliance with Indian privacy laws.</p>

        <SectionTitle num="6." text="Data Security" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Encryption: SSL/TLS, encryption at rest.</li>
          <li>Access Control: Role-based, authentication protocols.</li>
          <li>Monitoring: Regular assessments, penetration testing.</li>
          <li>Incident Response: Breach response and user/regulator notification.</li>
        </ul>
        
        <SectionTitle num="7." text="User Rights" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Right to Access</li>
          <li>Right to Rectification</li>
          <li>Right to Erasure</li>
          <li>Right to Withdraw Consent</li>
          <li>Right to File a Grievance</li>
        </ul>
        <p className="mb-4">
          Requests may be made to our Grievance Officer with proper identification. Responses shall be provided in accordance with applicable timelines.
        </p>

        <SectionTitle num="8." text="Data Retention" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Active Use: As long as your account is active or Services are being used.</li>
          <li>Legal Retention: Certain data retained up to 5–8 years.</li>
          <li>Business Justification: For disputes, enforcing terms or analytics.</li>
          <li>Deletion and Anonymization: Data deleted/anonymized when no longer required.</li>
        </ul>

        <SectionTitle num="9." text="Children’s Privacy" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>CycleSync does not knowingly collect data from individuals under 18.</li>
          <li>Age Verification and prompt deletion of underage data.</li>
          <li>If services are extended to minors, parental consent and additional safeguards will apply.</li>
        </ul>

        <SectionTitle num="10." text="Third-Party Services" />
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>May integrate third-party services (payment, analytics etc.)</li>
          <li>Each governed by its own privacy policy</li>
          <li>Users encouraged to review external policies</li>
        </ul>
        
        <SectionTitle num="11." text="Changes to Policy" />
        <p className="mb-4">
          We reserve the right to amend this Privacy Policy periodically. Users will be notified of significant changes via in-app messages or website updates. Continued use constitutes acceptance of revised terms.
        </p>

        <SectionTitle num="12." text="Governing Law and Jurisdiction" />
        <p className="mb-4">
          This Privacy Policy shall be governed in accordance with Indian law. All disputes subject to courts in Telangana, India.
        </p>

        <SectionTitle num="13." text="Grievance Officer Contact" />
        <div className="mb-8 text-gray-100 border border-violet-700 bg-gray-900 rounded-lg p-4">
          <p><strong>Grievance Officer</strong></p>
          <p>Name: Kamatham Soujanya</p>
          <p>Email: <a href="mailto:chieftechnologyofficer@cyclesync.in" className="underline text-violet-300">chieftechnologyofficer@cyclesync.in</a></p>
          <p>Phone: <a href="tel:+918186038001" className="underline text-violet-300">+91 81860 38001</a></p>
          <p className="mt-2">Address:</p>
          <p>
            CycleSync Innovation Private Limited<br />
            7-4-271, Navajeevan Nagar, Ferozguda,<br />
            Balanagar Mandal,<br />
            Medchal Malkajgiri District,<br />
            Telangana State – 500011, India
          </p>
        </div>
        <p className="text-xs text-gray-500 mb-0 pb-0">© {new Date().getFullYear()} CycleSync Innovation Private Limited. All rights reserved.</p>
      </div>
      <Footer />
    </div>
  );
}

// Simple section subtitle
type SectionTitleProps = {
    num: string;
    text: string;
  };
  
  function SectionTitle({ num, text }: SectionTitleProps) {
    return (
      <h2 className="mt-8 mb-2 text-xl md:text-2xl font-semibold text-violet-200 flex items-start gap-2">
        <span className="font-bold text-violet-400 opacity-80 min-w-[0.5em]">{num}</span>
        <span>{text}</span>
      </h2>
    );
  }
  