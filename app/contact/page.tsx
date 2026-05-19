"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [smsConsent, setSmsConsent] = useState(false);

  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-slate-300 mt-3 text-lg max-w-xl">
            Ready to discuss a property or explore the St. Petersburg commercial market?
            Reach out directly or submit the form below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-5">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <a
                        href="tel:(352) 222-4850"
                        className="text-slate-900 font-medium text-sm hover:text-slate-600 transition-colors"
                      >
                        (352) 222-4850
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:svo@smithandassociates.com"
                        className="text-slate-900 font-medium text-sm hover:text-slate-600 transition-colors"
                      >
                        svo@smithandassociates.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        Location
                      </p>
                      <p className="text-slate-900 font-medium text-sm">
                        St. Petersburg, FL
                        <br />
                        100 2nd Ave S, Ste 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border border-stone-200 shadow-none bg-stone-50">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Response Time
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    I typically respond within one business day. For time-sensitive matters,
                    please call directly.
                  </p>
                </CardContent>
              </Card>

              <div className="text-xs text-slate-500 leading-relaxed">
                <p>
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-slate-700">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-service" className="underline hover:text-slate-700">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="md:col-span-2">
              <Card className="border border-stone-200 shadow-none">
                <CardContent className="p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">Send a Message</h2>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="first-name" className="text-sm font-medium text-slate-700">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="first-name"
                          name="first-name"
                          placeholder="Jane"
                          required
                          className="bg-white border-stone-200 focus:border-slate-400"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="last-name" className="text-sm font-medium text-slate-700">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="last-name"
                          name="last-name"
                          placeholder="Smith"
                          required
                          className="bg-white border-stone-200 focus:border-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                        className="bg-white border-stone-200 focus:border-slate-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(727) 555-0100"
                        className="bg-white border-stone-200 focus:border-slate-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your property goals, a specific asset you have in mind, or any questions about the St. Petersburg commercial market."
                        rows={5}
                        required
                        className="bg-white border-stone-200 focus:border-slate-400 resize-none"
                      />
                    </div>

                    {/* SMS Consent Checkbox — exact text required for A2P compliance */}
                    <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="sms-consent"
                          checked={smsConsent}
                          onCheckedChange={(checked) => setSmsConsent(checked === true)}
                          className="mt-0.5 border-slate-400 data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900"
                        />
                        <Label
                          htmlFor="sms-consent"
                          className="text-xs text-slate-600 leading-relaxed cursor-pointer"
                        >
                          By submitting this form and providing my phone number, I consent to
                          receive SMS messages from Son Hai Vo Real Estate regarding commercial real
                          estate opportunities. Message and data rates may apply. Message
                          frequency varies. Reply STOP to unsubscribe at any time. Reply HELP
                          for help.
                        </Label>
                      </div>
                      <p className="text-xs text-slate-400 mt-3 ml-7">
                        For more information, see our{" "}
                        <Link href="/sms-terms" className="underline hover:text-slate-600">
                          SMS Terms
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="underline hover:text-slate-600">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-slate-900 text-white hover:bg-slate-800 font-semibold"
                    >
                      Send Message
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      Your information will never be sold or shared with third parties for
                      marketing purposes.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

