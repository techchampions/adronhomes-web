// import { Mail, MapPin, Phone } from "lucide-react";
// import React from "react";

// const PrivacyPage = () => {
//   return (
//     <div>
//       <section className="w-full space-y-12">
//         <div className="text-left pt-8 md:pt-20 p-5 md:ml-[20px]  md:px-[200px] md:mx-auto md:pb-2 bg-adron-gray">
//           <h1 className="text-4xl md:text-6xl font-bold mb-2 w-full leading-0">
//             Privacy and Policies
//           </h1>
//           <p className="text-adron-black font-bold text-left text-[14px] md:text-[15px] leading-relaxed">
//             At Adron Homes and Properties Limited, we are committed to
//             protecting your privacy and ensuring that your personal information
//             is handled securely and responsibly. This Privacy Policy explains
//             how we collect, use, store, and protect your information when you
//             use our website, mobile application, and related services.{" "}
//           </p>
//         </div>

//         <div className="flex flex-col bg-white rounded-[45px] md:rounded-[90px] py-10 md:py-14 w-[98%] md:w-[80%] mx-auto space-y-10 md:space-y-20 md:px-18 mb-10">
//           <div className="">
//             <h2 className="text-2xl md:text-4xl font-bold mb-2">
//               Information We Collect
//             </h2>
//             <ul className="text-sm list-disc ml-5">
//               <li>
//                 Personal Information: such as name, phone number, email address,
//                 postal address, and payment details provided during property
//                 inquiries, subscriptions, or purchases.
//               </li>
//               <li>
//                 Usage Information: such as IP addresses, browser type, device
//                 details, and pages you visit on our website.
//               </li>
//               <li>
//                 Communication Data: messages, feedback, or inquiries sent
//                 through our website or customer service channels.
//               </li>
//             </ul>
//           </div>
//           <div className="">
//             <h2 className="text-2xl md:text-4xl font-bold mb-2">
//               How We Use Your Information{" "}
//             </h2>
//             <ul className="text-sm list-disc ml-5">
//               <li>
//                 To process property transactions, inquiries, and subscriptions.
//               </li>
//               <li>To improve our website, products, and services.</li>
//               <li>
//                 To send updates, promotional offers, and newsletters (you may
//                 opt out at any time).
//               </li>
//               <li>To comply with legal and regulatory obligations.</li>
//             </ul>
//           </div>
//           <div className="">
//             <h2 className="text-2xl md:text-4xl font-bold mb-2">Cookies</h2>
//             <div className="text-sm">
//               Our website uses cookies to improve your browsing experience,
//               track user preferences, and analyze website traffic. You can
//               disable cookies in your browser settings, but some features may
//               not function properly.{" "}
//             </div>
//           </div>
//           <div className="">
//             <h2 className="text-2xl md:text-4xl font-bold mb-2">
//               Data Security
//             </h2>
//             <div className="text-sm">
//               We implement strict security measures to protect your personal
//               information against unauthorized access, disclosure, alteration,
//               or destruction.{" "}
//             </div>
//           </div>
//           <div className="">
//             <h2 className="text-2xl md:text-4xl font-bold mb-2">Your Rights</h2>
//             <ul className="text-sm list-disc ml-5">
//               <li>Access, update, or delete your personal data.</li>
//               <li>opt out of marketing communications.</li>
//               <li>Request details of the data we hold about you.</li>
//             </ul>
//           </div>
//           <div className="">
//             <h2 className="text-2xl md:text-4xl font-bold mb-2">Contact Us</h2>
//             <div className="text-sm">
//               If you have any questions or concerns regarding this Privacy
//               Policy, please contact us at:
//             </div>
//             <div className="flex items-center gap-2 text-sm">
//               <MapPin size={10} /> Adron Court, 75 Adeyemo Akapo, Omole Phase 1,
//               Lagos.
//             </div>
//             <div className="flex items-center gap-2 text-sm">
//               <Phone size={10} /> 0805 101 1951
//             </div>
//             <div className="flex items-center gap-2 text-sm">
//               <Mail size={10} /> clientservice@adronhomesproperties.com
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PrivacyPage;

import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const PrivacyPage = () => {
  return (
    <div>
      <section className="w-full space-y-12">
        <div className="text-left pt-8 md:pt-20 p-5 md:ml-[20px]  md:px-[200px] md:mx-auto md:pb-2 bg-adron-gray">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 w-full leading-0">
            Privacy and Policies
          </h1>
          <p className="text-adron-black font-bold text-left text-[14px] md:text-[15px] leading-relaxed">
            At Adron Homes and Properties Limited, we are committed to
            protecting your privacy and ensuring that your personal information
            is handled securely and responsibly. This Privacy Policy explains
            how we collect, use, store, and protect your information when you
            use our website, mobile application, and related services.
          </p>
        </div>

        <div className="flex flex-col bg-white rounded-[45px] md:rounded-[90px] py-10 md:py-14 w-[98%] md:w-[80%] mx-auto space-y-10 md:space-y-20 md:px-18 mb-10">
          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Information We Collect
            </h2>
            <ul className="text-sm list-disc ml-5">
              <li>
                Personal Information: such as name, phone number, email address,
                postal address, and payment details provided during property
                inquiries, subscriptions, or purchases.
              </li>
              <li>
                Usage Information: such as IP addresses, browser type, device
                details, and pages you visit on our website.
              </li>
              <li>
                Communication Data: messages, feedback, or inquiries sent
                through our website or customer service channels.
              </li>
            </ul>
          </div>

          {/* How We Use Info */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              How We Use Your Information
            </h2>
            <ul className="text-sm list-disc ml-5">
              <li>
                To process property transactions, inquiries, and subscriptions.
              </li>
              <li>To improve our website, products, and services.</li>
              <li>
                To send updates, promotional offers, and newsletters (you may
                opt out at any time).
              </li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Cookies</h2>
            <p className="text-sm">
              Our website uses cookies to improve your browsing experience,
              track user preferences, and analyze website traffic. You can
              disable cookies in your browser settings, but some features may
              not function properly.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Data Security
            </h2>
            <p className="text-sm">
              We implement strict security measures to protect your personal
              information against unauthorized access, disclosure, alteration,
              or destruction.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Your Rights</h2>
            <ul className="text-sm list-disc ml-5">
              <li>Access, update, or delete your personal data.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request details of the data we hold about you.</li>
            </ul>
          </div>

          {/* ✅ NEW: Terms and Conditions */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Terms and Conditions
            </h2>
            <p className="text-sm mb-3">
              By accessing and using the Adron Homes website, you agree to
              comply with the following Terms and Conditions. These govern your
              use of our website, services, and any transactions with Adron
              Homes.
            </p>

            <h3 className="font-semibold mt-4">Use of Website</h3>
            <ul className="text-sm list-disc ml-5 mb-3">
              <li>You must be at least 18 years old to make transactions.</li>
              <li>
                You agree not to misuse, hack, or engage in fraudulent
                activities on our platform.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">Property Listings</h3>
            <p className="text-sm mb-3">
              All property information provided on our website is for general
              informational purposes only. Adron Homes reserves the right to
              update, modify, or remove listings without prior notice.
            </p>

            <h3 className="font-semibold mt-4">Payments</h3>
            <ul className="text-sm list-disc ml-5 mb-3">
              <li>All payments must be made through approved channels only.</li>
              <li>
                Adron Homes is not responsible for losses due to payments made
                outside official platforms.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">Limitation of Liability</h3>
            <p className="text-sm mb-3">
              Adron Homes will not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              services.
            </p>

            <h3 className="font-semibold mt-4">Cookie Policy</h3>
            <p className="text-sm mb-3">
              Adron Homes uses cookies and similar technologies to improve
              website functionality, personalize content, and analyze user
              behavior. By continuing to use our website, you consent to our use
              of cookies.
            </p>

            <h3 className="font-semibold mt-4">Disclaimer</h3>
            <p className="text-sm">
              The information on the Adron Homes website is provided as is
              without warranties of any kind. While we strive for accuracy,
              Adron Homes does not guarantee that property descriptions, prices,
              or other content are error-free. Users should verify information
              before making decisions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm">
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at:
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={10} /> Adron Court, 75 Adeyemo Akapo, Omole Phase 1,
              Lagos.
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={10} /> 0805 101 1951
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={10} /> clientservice@adronhomesproperties.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
