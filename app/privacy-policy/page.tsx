import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy | [BUSINESS_NAME]",
  description: "Privacy Policy for [BUSINESS_NAME], including how we collect, use, and protect your information, and our SMS messaging practices.",
};

const lastUpdated = "May 19, 2025";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-slate-400 mt-3 text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-10 text-sm leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Introduction</h2>
              <p>
                [BUSINESS_NAME] (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operated by [OWNER_FULL_NAME] as a sole proprietor in St. Petersburg, Florida, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at [BUSINESS_WEBSITE] (the &ldquo;Site&rdquo;) or interact with us through other channels, including SMS messaging.
              </p>
              <p className="mt-3">
                Please read this policy carefully. By using the Site or providing your information to us, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the Site or provide your information.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <h3 className="text-base font-semibold text-slate-800 mt-5 mb-2">a. Information You Provide Directly</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (including mobile numbers you voluntarily provide)</li>
                <li>Mailing or property address</li>
                <li>Messages, inquiries, or other content you submit through our contact form</li>
                <li>SMS opt-in consent, including the date, time, and method of consent</li>
              </ul>
              <h3 className="text-base font-semibold text-slate-800 mt-5 mb-2">b. Information Collected Automatically</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address and general location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on the Site</li>
                <li>Referring URL</li>
                <li>Device type and operating system</li>
              </ul>
              <h3 className="text-base font-semibold text-slate-800 mt-5 mb-2">c. Information from Third Parties</h3>
              <p>
                We may receive information about you from publicly available sources (such as public property records or commercial listing platforms) in the ordinary course of our commercial real estate business.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Respond to your inquiries and communicate with you about commercial real estate opportunities</li>
                <li>Send SMS messages if you have opted in to receive them (see Section 4 below)</li>
                <li>Provide, operate, and improve our services and website</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Prevent fraud and protect the security of our Site and business</li>
                <li>Maintain records of consent for SMS communications</li>
              </ul>
              <p className="mt-3">
                We do not use your information for automated decision-making or profiling in ways that produce legal or similarly significant effects.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Share Your Information</h2>
              <p>
                We do not sell, rent, trade, or otherwise transfer your personal information to outside parties for their marketing purposes. We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong>Service Providers:</strong> We may share information with trusted third-party vendors who assist us in operating our website or conducting our business (e.g., email providers, SMS messaging platforms). These providers are contractually required to keep your information confidential and use it only to provide services to us.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal process (e.g., a subpoena or court order).
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose information to protect the rights, property, or safety of [BUSINESS_NAME], our clients, or the public.
                </li>
              </ul>
            </div>

            <Separator />

            {/* SMS SECTION — Critical for Twilio A2P compliance */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. SMS Messaging — Important Notice</h2>

              <div className="space-y-4">
                <p>
                  [BUSINESS_NAME] operates an SMS messaging program to communicate commercial real estate opportunities to individuals who have expressly opted in to receive such messages.
                </p>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Opt-In and Consent</h3>
                  <p>
                    We only send SMS messages to individuals who have provided their phone number and explicitly consented to receive SMS communications from [BUSINESS_NAME]. Consent may be provided through our website contact form or through another documented opt-in method. We maintain records of all SMS opt-in consents, including the date, time, and mechanism of consent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">No Sharing of SMS Data</h3>
                  <p className="font-medium text-slate-900">
                    Phone numbers collected for SMS opt-in purposes and the related opt-in consent data are NOT shared with third parties or affiliates for marketing purposes. This data is used solely to facilitate SMS communications on behalf of [BUSINESS_NAME] and to maintain compliance records.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Message Content and Frequency</h3>
                  <p>
                    SMS messages from [BUSINESS_NAME] may include information about commercial real estate opportunities, property listings, market updates, and follow-up communications related to inquiries you have made. Message frequency varies based on the nature of your inquiry and the commercial real estate opportunities available.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Message and Data Rates</h3>
                  <p>
                    Message and data rates may apply. Standard carrier messaging rates apply to all SMS messages sent and received. We are not responsible for any charges assessed by your mobile carrier.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">How to Opt Out</h3>
                  <p>
                    You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any SMS message you receive from us. After opting out, you will receive one final confirmation message and will not receive further SMS communications unless you re-enroll. You may also opt out by contacting us directly at [BUSINESS_EMAIL] or [BUSINESS_PHONE].
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Help</h3>
                  <p>
                    For help with our SMS program, reply <strong>HELP</strong> to any SMS message or contact us at [BUSINESS_EMAIL].
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Carrier Disclaimer</h3>
                  <p>
                    Mobile carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cookies and Tracking Technologies</h2>
              <p>
                Our Site may use cookies and similar tracking technologies to enhance your browsing experience and analyze Site usage. You may configure your browser to refuse cookies; however, some features of the Site may not function properly if you do so.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, including maintaining records of SMS consent as required by applicable regulations, or as required by law. When information is no longer needed, we will securely delete or anonymize it.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information, subject to legal retention requirements</li>
                <li>Opt out of SMS communications at any time by replying STOP</li>
                <li>Opt out of other marketing communications</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the information in Section 10 below.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our Site and services are intended for adults. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected information from a minor, please contact us immediately.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact Us — Privacy Questions</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 bg-stone-50 rounded-lg p-5 border border-stone-200">
                <p className="font-semibold text-slate-900">[BUSINESS_NAME]</p>
                <p className="mt-1">[OWNER_FULL_NAME]</p>
                <p>[BUSINESS_ADDRESS]</p>
                <p>St. Petersburg, FL [ZIP_CODE]</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:[BUSINESS_EMAIL]" className="underline hover:text-slate-600">
                    [BUSINESS_EMAIL]
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:[BUSINESS_PHONE]" className="underline hover:text-slate-600">
                    [BUSINESS_PHONE]
                  </a>
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this page periodically to stay informed about how we protect your information. Your continued use of the Site after changes become effective constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-slate-400">
                Questions? Contact us at{" "}
                <Link href="/contact" className="underline hover:text-slate-600">
                  our contact page
                </Link>{" "}
                or email{" "}
                <a href="mailto:[BUSINESS_EMAIL]" className="underline hover:text-slate-600">
                  [BUSINESS_EMAIL]
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
