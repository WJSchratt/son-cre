import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "SMS Terms | [BUSINESS_NAME]",
  description:
    "SMS messaging terms and conditions for [BUSINESS_NAME]. Learn about our SMS program, message frequency, opt-out instructions, and carrier information.",
};

const lastUpdated = "May 19, 2025";

export default function SmsTermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold">SMS Terms &amp; Conditions</h1>
          <p className="text-slate-400 mt-3 text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm leading-relaxed text-slate-700 space-y-10">

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
              <p className="font-semibold text-slate-900 mb-2">Summary</p>
              <p>
                [BUSINESS_NAME] sends SMS messages about commercial real estate to individuals who have opted in. Reply <strong>STOP</strong> to stop. Reply <strong>HELP</strong> for help. Msg &amp; data rates may apply.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who Is Sending These Messages?</h2>
              <p>
                SMS messages are sent by <strong>[BUSINESS_NAME]</strong>, a commercial real estate advisory business operated by [OWNER_FULL_NAME] as a sole proprietor in St. Petersburg, Florida.
              </p>
              <div className="mt-4 bg-stone-50 rounded-lg p-4 border border-stone-200">
                <p className="font-semibold text-slate-900">[BUSINESS_NAME]</p>
                <p>[OWNER_FULL_NAME]</p>
                <p>[BUSINESS_ADDRESS]</p>
                <p>St. Petersburg, FL [ZIP_CODE]</p>
                <p className="mt-1">
                  <a href="mailto:[BUSINESS_EMAIL]" className="underline hover:text-slate-600">[BUSINESS_EMAIL]</a> &nbsp;|&nbsp;{" "}
                  <a href="tel:[BUSINESS_PHONE]" className="underline hover:text-slate-600">[BUSINESS_PHONE]</a>
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Program Description</h2>
              <p>
                [BUSINESS_NAME] uses SMS to communicate with current and prospective clients about commercial real estate matters, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Commercial property listings and investment opportunities in the St. Petersburg and Pinellas County market</li>
                <li>Responses to inquiries you have submitted through our website or other channels</li>
                <li>Market updates and relevant commercial real estate information</li>
                <li>Scheduling and follow-up communications</li>
              </ul>
              <p className="mt-3">
                SMS is one of several channels we may use to communicate. You are under no obligation to receive SMS messages; all communications are also available by email or phone.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How to Opt In</h2>
              <p>
                You may opt in to receive SMS messages from [BUSINESS_NAME] by:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>
                  Providing your mobile phone number and checking the SMS consent checkbox on our website contact form at{" "}
                  <Link href="/contact" className="underline hover:text-slate-600">[BUSINESS_WEBSITE]/contact</Link>
                </li>
                <li>Any other documented opt-in method we may make available</li>
              </ul>
              <p className="mt-3">
                <strong>Consent is not required</strong> as a condition of purchasing any property, engaging our services, or receiving information from us through other channels.
              </p>
              <p className="mt-3">
                We maintain a record of your opt-in, including the date, time, and method.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Message Frequency</h2>
              <p>
                Message frequency varies. We will not send excessive or harassing messages. In general, you can expect:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Initial response to your inquiry or opt-in confirmation</li>
                <li>Follow-up messages related to properties or topics you have expressed interest in</li>
                <li>Periodic updates when relevant commercial real estate opportunities arise</li>
              </ul>
              <p className="mt-3">
                We will never send automated bulk messages designed to spam or overwhelm recipients.
              </p>
            </div>

            <Separator />

            <div className="bg-stone-50 border-l-4 border-slate-900 pl-5 py-4 rounded-r-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Message &amp; Data Rates</h2>
              <p className="font-semibold text-slate-900">
                Msg &amp; data rates may apply.
              </p>
              <p className="mt-2">
                Standard carrier message and data rates apply to all SMS messages sent and received. [BUSINESS_NAME] does not charge any fees for SMS communications. Your mobile carrier may charge standard messaging rates. We are not responsible for charges assessed by your mobile carrier.
              </p>
            </div>

            <Separator />

            <div className="bg-stone-50 border-l-4 border-slate-900 pl-5 py-4 rounded-r-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. How to Stop (STOP Keyword)</h2>
              <p>
                You may opt out of receiving SMS messages from [BUSINESS_NAME] at any time by:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong>Replying STOP</strong> to any SMS message you receive from us. You will receive one final confirmation message and will receive no further SMS messages unless you re-enroll.
                </li>
                <li>
                  Emailing us at{" "}
                  <a href="mailto:[BUSINESS_EMAIL]" className="underline hover:text-slate-600">[BUSINESS_EMAIL]</a>{" "}
                  with a request to be removed from SMS communications.
                </li>
                <li>
                  Calling us at{" "}
                  <a href="tel:[BUSINESS_PHONE]" className="underline hover:text-slate-600">[BUSINESS_PHONE]</a>{" "}
                  and requesting removal.
                </li>
              </ul>
              <p className="mt-3">
                Opting out of SMS does not affect your ability to contact us or receive information through other channels (email, phone, etc.).
              </p>
            </div>

            <Separator />

            <div className="bg-stone-50 border-l-4 border-slate-900 pl-5 py-4 rounded-r-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. HELP Keyword</h2>
              <p>
                For help with our SMS program, reply <strong>HELP</strong> to any SMS message you receive from us. You will receive a response with contact information and instructions for opting out.
              </p>
              <p className="mt-2">
                You may also email{" "}
                <a href="mailto:[BUSINESS_EMAIL]" className="underline hover:text-slate-600">[BUSINESS_EMAIL]</a>{" "}
                or call{" "}
                <a href="tel:[BUSINESS_PHONE]" className="underline hover:text-slate-600">[BUSINESS_PHONE]</a>.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Supported Carriers</h2>
              <p>
                Our SMS program is available on all major U.S. carriers, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>AT&amp;T</li>
                <li>Verizon</li>
                <li>T-Mobile / Metro by T-Mobile</li>
                <li>Sprint (now T-Mobile)</li>
                <li>Boost Mobile</li>
                <li>U.S. Cellular</li>
                <li>Cricket Wireless</li>
                <li>Consumer Cellular</li>
                <li>Other carriers as supported</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Carrier Disclaimer</h2>
              <p>
                <strong>Mobile carriers are not liable for delayed or undelivered messages.</strong> Message delivery is subject to your carrier&apos;s network availability and conditions. [BUSINESS_NAME] is not responsible for messages that are delayed or not delivered due to carrier conditions, network outages, or other factors outside our control.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Privacy — No Third-Party Sharing</h2>
              <p>
                Phone numbers and opt-in consent data collected for our SMS program are <strong>NOT shared with third parties or affiliates for marketing purposes</strong>. Your phone number is used solely to facilitate SMS communications from [BUSINESS_NAME] and to maintain compliance records.
              </p>
              <p className="mt-3">
                For full details on how we handle your personal information, please review our{" "}
                <Link href="/privacy-policy" className="underline hover:text-slate-600">Privacy Policy</Link>.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Changes to These SMS Terms</h2>
              <p>
                We may update these SMS Terms from time to time. We will notify active SMS recipients of material changes and will update the &ldquo;Last Updated&rdquo; date above. Your continued participation in the SMS program after changes are effective constitutes acceptance.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact</h2>
              <p>Questions about our SMS program? Contact us:</p>
              <div className="mt-4 bg-stone-50 rounded-lg p-5 border border-stone-200">
                <p className="font-semibold text-slate-900">[BUSINESS_NAME]</p>
                <p>[OWNER_FULL_NAME]</p>
                <p>[BUSINESS_ADDRESS], St. Petersburg, FL [ZIP_CODE]</p>
                <p className="mt-2">
                  <a href="mailto:[BUSINESS_EMAIL]" className="underline hover:text-slate-600">[BUSINESS_EMAIL]</a>
                  {" · "}
                  <a href="tel:[BUSINESS_PHONE]" className="underline hover:text-slate-600">[BUSINESS_PHONE]</a>
                </p>
              </div>
              <p className="mt-4">
                Or visit our{" "}
                <Link href="/contact" className="underline hover:text-slate-600">Contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
