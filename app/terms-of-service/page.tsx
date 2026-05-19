import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Terms of Service | Son Hai Vo Real Estate",
  description: "Terms of Service for Son Hai Vo Real Estate, including SMS program terms, site use, and the business relationship.",
};

const lastUpdated = "May 19, 2025";

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-slate-400 mt-3 text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm leading-relaxed text-slate-700 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Agreement to Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website located at https://sonhaivo.smithandassociates.com (the &ldquo;Site&rdquo;) operated by Son Hai Vo Real Estate, a sole proprietorship owned and operated by Son Hai Vo in St. Petersburg, Florida (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="mt-3">
                By accessing or using the Site, submitting a contact form, or engaging with our SMS program, you agree to be bound by these Terms. If you do not agree, please do not use the Site or our services.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Use of the Site</h2>
              <p>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. Prohibited uses include:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li>Using the Site to transmit spam, unsolicited communications, or harmful content</li>
                <li>Attempting to gain unauthorized access to any part of the Site or its infrastructure</li>
                <li>Using automated tools to scrape, crawl, or extract data from the Site without permission</li>
                <li>Misrepresenting your identity or affiliation when submitting contact forms</li>
                <li>Violating any applicable local, state, federal, or international law or regulation</li>
              </ul>
              <p className="mt-3">
                We reserve the right to terminate or restrict your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Intellectual Property</h2>
              <p>
                All content on this Site â€” including text, graphics, logos, and page design â€” is the property of Son Hai Vo Real Estate or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any Site content without our express written permission.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. No Real Estate or Legal Advice</h2>
              <p>
                Content on this Site is provided for general informational purposes only. Nothing on this Site constitutes legal, financial, tax, or investment advice. Market data, property information, and commentary are subject to change and may not reflect current conditions.
              </p>
              <p className="mt-3">
                Engaging Son Hai Vo Real Estate as your commercial real estate advisor is governed by a separate written agreement. The existence of this Site does not create a client, agency, or fiduciary relationship between you and Son Hai Vo Real Estate.
              </p>
            </div>

            <Separator />

            {/* SMS Program Terms */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. SMS Program Terms</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Program Description</h3>
                  <p>
                    Son Hai Vo Real Estate operates an SMS messaging program through which we may send commercial real estate information, property opportunities, market updates, and follow-up communications to individuals who have opted in to receive SMS messages from us.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Sender Identification</h3>
                  <p>
                    SMS messages are sent by Son Hai Vo Real Estate, operated by Son Hai Vo, St. Petersburg, Florida. The sending number is associated with our registered messaging campaign.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Opt-In</h3>
                  <p>
                    By providing your mobile phone number and checking the SMS consent checkbox on our contact form, you expressly consent to receive SMS messages from Son Hai Vo Real Estate. Consent to receive SMS messages is not required as a condition of purchasing any property, engaging our services, or receiving information.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Message Content</h3>
                  <p>
                    Messages may include: commercial property listings, investment opportunities in the St. Petersburg and Pinellas County market, responses to your inquiries, market updates, and relevant commercial real estate information.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Message Frequency</h3>
                  <p>
                    Message frequency varies. We will not send excessive or unsolicited messages. You may receive messages related to specific properties or inquiries you have indicated interest in, as well as periodic market updates.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Rates</h3>
                  <p>
                    <strong>Msg &amp; data rates may apply.</strong> Standard carrier message and data rates apply to all SMS messages. We are not responsible for any charges assessed by your mobile carrier.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">How to Stop (Opt Out)</h3>
                  <p>
                    To stop receiving SMS messages from Son Hai Vo Real Estate, reply <strong>STOP</strong> to any message we send. You will receive one final confirmation message acknowledging your opt-out. After that, you will not receive further SMS messages unless you re-enroll.
                  </p>
                  <p className="mt-2">
                    You may also opt out by contacting us at svo@smithandassociates.com or (352) 222-4850.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">HELP</h3>
                  <p>
                    For assistance with our SMS program, reply <strong>HELP</strong> to any SMS message you receive from us, or contact us directly at svo@smithandassociates.com.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Supported Carriers</h3>
                  <p>
                    Supported carriers include, but may not be limited to: AT&amp;T, Verizon, T-Mobile, Sprint, Boost, MetroPCS, U.S. Cellular, and other major carriers. Carrier support may vary.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Carrier Disclaimer</h3>
                  <p>
                    Mobile carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">No Third-Party Sharing</h3>
                  <p>
                    Phone numbers and opt-in consent data collected for SMS purposes are not shared with third parties or affiliates for marketing purposes. See our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-slate-600">Privacy Policy</Link> for full details.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Business Relationship</h2>
              <p>
                Son Hai Vo Real Estate is a sole proprietorship providing commercial real estate advisory services. Nothing in these Terms creates a partnership, joint venture, employment, franchise, or agency relationship between you and Son Hai Vo Real Estate.
              </p>
              <p className="mt-3">
                Any formal representation agreement, buyer&apos;s representation agreement, or listing agreement must be executed in writing and signed by both parties to be binding.
              </p>
              <p className="mt-3">
                Son Hai Vo Real Estate operates in compliance with Florida real estate licensing requirements. License information: [FL_LICENSE_NUMBER].
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Disclaimer of Warranties</h2>
              <p>
                THE SITE AND ITS CONTENT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. MARKET DATA AND PROPERTY INFORMATION ARE PROVIDED FOR INFORMATIONAL PURPOSES ONLY AND MAY NOT BE ACCURATE, COMPLETE, OR CURRENT.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, Son Hai Vo Real Estate AND Son Hai Vo SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE, OUR SERVICES, OR OUR SMS PROGRAM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites. These links are provided for convenience only. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Pinellas County, Florida.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Site with an updated &ldquo;Last Updated&rdquo; date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Contact</h2>
              <p>For questions about these Terms, please contact us:</p>
              <div className="mt-4 bg-stone-50 rounded-lg p-5 border border-stone-200">
                <p className="font-semibold text-slate-900">Son Hai Vo Real Estate</p>
                <p className="mt-1">Son Hai Vo</p>
                <p>100 2nd Ave S, Ste 100</p>
                <p>St. Petersburg, FL 33701</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:svo@smithandassociates.com" className="underline hover:text-slate-600">
                    svo@smithandassociates.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:(352) 222-4850" className="underline hover:text-slate-600">
                    (352) 222-4850
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

