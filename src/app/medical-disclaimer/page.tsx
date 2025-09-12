'use client';
import Footer from "@/components/landing/Footer";
import Navigation from "@/components/nav/Navigation";

export default function MedicalDisclaimer() {
  return (
    <div className="MedicalDisclaimer min-h-screen w-full bg-gray-950 text-gray-100 px-4 py-10 md:py-16">
      <Navigation />
      <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-violet-300 mb-2">Medical Disclaimer Policy</h1>
        <p className="text-gray-400 text-sm mb-6">
          <span>Effective Date: <strong>21st July 2025</strong></span><br />
          <span>Last Updated: <strong>21st July 2025</strong></span>
        </p>

        <p className="mb-4">
          This Medical Disclaimer Policy ("Policy") is published by <strong>CycleSync Innovation Private Limited</strong> ("CycleSync", "we", "our", or "us"), in relation to the access and use of the CycleSync mobile application, website, and related services (collectively, the "Services").
        </p>

        <p className="mb-4">
          CycleSync is an AI-driven health advisory platform that provides personalized recommendations and insights on menstrual health, productivity, nutrition, fitness, and related lifestyle factors. While we strive to offer evidence-based, technologically driven recommendations, CycleSync is not, and does not claim to be, a substitute for professional medical advice, diagnosis, or treatment.
        </p>

        <SectionTitle num="1." text="Informational Purpose Only" />
        <p className="mb-4">
          The Services are designed exclusively for educational, informational, and self-management purposes. All content, suggestions, or insights generated through CycleSync are general in nature and not tailored as a medical prescription.
        </p>

        <SectionTitle num="2." text="No Doctor-Patient Relationship" />
        <p className="mb-4">
          Use of the Services does not establish a doctor–patient, therapist–patient, or any other fiduciary medical relationship between the User and CycleSync, its employees, partners, or affiliates.
        </p>

        <SectionTitle num="3." text="Not a Substitute for Professional Medical Advice" />
        <p className="mb-4">
          Users are expressly advised that CycleSync cannot and does not replace consultation with a qualified medical practitioner, gynecologist, dietician, or healthcare professional. You should never disregard or delay seeking medical advice because of reliance on our Services.
        </p>

        <SectionTitle num="4." text="User Responsibility" />
        <p className="mb-4">
          It is the sole responsibility of the User to consult with a licensed medical practitioner before taking any decision, including but not limited to, commencing or modifying any medication, treatment, exercise regimen, dietary plan, or lifestyle change suggested or inferred through the Services.
        </p>

        <SectionTitle num="5." text="Limitation of Liability" />
        <p className="mb-4">
          CycleSync, its directors, officers, employees, licensors, or affiliates shall not be liable for any injury, loss, damage, or adverse outcome (whether physical, psychological, or financial) arising directly or indirectly from reliance on the Services. The User assumes full responsibility for all risks associated with use.
        </p>

        <SectionTitle num="6." text="Emergency Situations" />
        <p className="mb-4">
          In case of a medical emergency, severe health condition, or unexpected complication, Users must immediately contact emergency services, a qualified physician, or visit the nearest hospital. CycleSync is not equipped to handle urgent medical needs.
        </p>

        <SectionTitle num="7." text="Accuracy and Limitations of AI Technology" />
        <p className="mb-4">
          While CycleSync uses AI-driven models and scientific references, its predictions and recommendations are inherently limited and subject to technological constraints, evolving medical research, and individual variability. Users acknowledge that such advice may not always be accurate, complete, or universally applicable.
        </p>

        <SectionTitle num="8." text="Use for Women's Health Conditions (e.g., PCOS)" />
        <p className="mb-4">
          CycleSync may provide insights into health conditions such as Polycystic Ovary Syndrome (PCOS) and related lifestyle factors. However, such guidance is advisory in nature only and cannot be construed as a clinical diagnosis, prescription, or therapeutic solution.
        </p>

        <SectionTitle num="9." text="Age and Suitability Restrictions" />
        <p className="mb-4">
          The Services are primarily intended for adult women above the age of 18 years. CycleSync makes no representation that the Services are appropriate for children, adolescents, or users with chronic medical conditions unless explicitly cleared by a licensed healthcare provider.
        </p>

        <SectionTitle num="10." text="Third-Party Content" />
        <p className="mb-4">
          The Services may provide links to or incorporate third-party articles, studies, or tools. CycleSync does not warrant the accuracy, validity, or reliability of such external resources and disclaims liability for reliance placed thereon.
        </p>

        <SectionTitle num="11." text="No Guarantee of Outcomes" />
        <p className="mb-4">
          CycleSync does not guarantee any specific health, fitness, productivity, or lifestyle outcomes. Results vary based on individual physiology, environment, and adherence to professional medical advice.
        </p>

        <SectionTitle num="12." text="User Consent" />
        <p className="mb-4">
          By using the Services, the User acknowledges and agrees that CycleSync is an informational support platform only, and any reliance placed on its Services is at the User's sole discretion and risk.
        </p>

        <SectionTitle num="13." text="Indemnity" />
        <p className="mb-4">
          The User agrees to indemnify, defend, and hold harmless CycleSync, its officers, employees, consultants, and affiliates from any claims, damages, or liabilities arising out of the User's reliance on the Services in contravention of this Policy.
        </p>

        <SectionTitle num="14." text="Changes to this Policy" />
        <p className="mb-4">
          CycleSync reserves the right, at its sole discretion, to modify, amend, or update this Policy from time to time. Users are encouraged to review the Policy periodically. Continued use of the Services after modifications shall be deemed conclusive acceptance.
        </p>

        <SectionTitle num="15." text="Governing Law and Jurisdiction" />
        <p className="mb-4">
          This Policy shall be governed by the laws of the Republic of India. All disputes shall be subject to the exclusive jurisdiction of competent courts in Telangana, India.
        </p>

        <SectionTitle num="16." text="Grievance Officer" />
        <p className="mb-4">
          In strict compliance with the provisions of the Information Technology Act, 2000, the rules framed thereunder, and the Digital Personal Data Protection Act, 2023, CycleSync has duly appointed a designated Grievance Officer to address and resolve User concerns, complaints, or queries pertaining to the collection, storage, use, or disclosure of personal data, or any aspect of this Policy.
        </p>
        
        <div className="mb-8 text-gray-100 border border-violet-700 bg-gray-900 rounded-lg p-4">
          <p className="mb-2"><strong>The details of the Grievance Officer are as follows:</strong></p>
          <p><strong>Grievance Officer Name:</strong> Kamatham Soujanya</p>
          <p><strong>Email:</strong> <a href="mailto:chieftechnologyofficer@cyclesync.in" className="underline text-violet-300">chieftechnologyofficer@cyclesync.in</a></p>
          <p><strong>Phone:</strong> <a href="tel:+918186038001" className="underline text-violet-300">+91 81860 38001</a></p>
          <p className="mt-2"><strong>Address:</strong></p>
          <p>
            CycleSync Innovation Private Limited,<br />
            7-4-271, Navajeevan Nagar, Ferozguda,<br />
            Balanagar Mandal,<br />
            Medchal Malkajgiri District,<br />
            Telangana State – 500011, India.
          </p>
        </div>

        <p className="mb-4">
          The Grievance Officer shall acknowledge User grievances within the statutory period prescribed under applicable law and shall endeavor to redress such grievances in a fair, efficient, and timely manner in accordance with the provisions of Indian data protection and information technology laws. Users are advised to provide complete details of their concern along with supporting documents, where applicable, in order to facilitate an effective resolution.
        </p>

        <SectionTitle num="17." text="Entire Terms of This Policy" />
        <p className="mb-4">
          This Policy, read together with the Terms and Conditions, the Privacy Policy, the Medical Disclaimer Policy, and any other supplemental policies, guidelines, or addenda expressly incorporated herein by reference, constitutes the entire and final agreement between the User and CycleSync with respect to the subject matter herein.
        </p>

        <p className="mb-4">
          It expressly supersedes and extinguishes all prior understandings, negotiations, representations, warranties, promises, or agreements, whether written, oral, or implied, relating to the use of the Services.
        </p>

        <p className="mb-4">
          No oral advice, informal communication, or unrecorded representation made by CycleSync, its employees, affiliates, or agents shall be deemed to amend, vary, or supplement this Policy unless the same is formally reduced to writing and duly incorporated herein.
        </p>

        <p className="mb-4">
          The User acknowledges that their access and continued use of the Services is subject exclusively to this Policy, as periodically updated, and that no rights, obligations, or liabilities shall arise from any prior versions or parallel communications, save as expressly preserved herein.
        </p>

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
