import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Award, MapPin, Briefcase } from "lucide-react";

export const metadata = {
  title: "About | [BUSINESS_NAME]",
  description:
    "Learn about [OWNER_FULL_NAME], commercial real estate advisor serving St. Petersburg and Pinellas County, Florida.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">[OWNER_FULL_NAME]</h1>
          <p className="text-slate-300 mt-3 text-lg">Commercial Real Estate Advisor · St. Petersburg, FL</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Photo placeholder */}
            <div className="md:col-span-1">
              <div className="bg-stone-100 rounded-2xl aspect-[3/4] flex items-center justify-center border border-stone-200">
                <div className="text-center text-slate-400 px-6">
                  <div className="w-16 h-16 rounded-full bg-stone-200 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-400">[INITIALS]</span>
                  </div>
                  <p className="text-xs">[PLACEHOLDER: Professional headshot]</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span>St. Petersburg, Florida</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Briefcase className="h-4 w-4 text-slate-400" />
                  <span>[BROKERAGE_NAME]</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Award className="h-4 w-4 text-slate-400" />
                  <span>Licensed FL Real Estate Professional</span>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About [OWNER_FIRST_NAME]</h2>

              {/* PLACEHOLDER BIO SECTIONS */}
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  [PLACEHOLDER: Opening paragraph — background, how you got into commercial real
                  estate, years of experience. Example: "With X years of experience in the Tampa
                  Bay commercial real estate market, I specialize in helping investors and business
                  owners identify, evaluate, and close on commercial opportunities across Pinellas
                  County."]
                </p>
                <p>
                  [PLACEHOLDER: Second paragraph — specific expertise, asset classes, notable
                  accomplishments, transaction volume, or market niche. Example: "My focus is on
                  retail, office, and mixed-use properties in the St. Petersburg core markets,
                  including the Grand Central District, Edge District, and Downtown waterfront."]
                </p>
                <p>
                  [PLACEHOLDER: Third paragraph — approach/philosophy, what sets you apart,
                  client commitment. Example: "My approach is straightforward: I provide
                  honest, research-backed guidance so my clients can make confident decisions —
                  whether that means moving forward on a deal or walking away from one."]
                </p>
                <p>
                  [PLACEHOLDER: Personal/connection to St. Pete paragraph — optional but
                  humanizes the profile. Example: "A St. Pete resident since X, I&apos;m invested in
                  this community personally as well as professionally."]
                </p>
              </div>

              <Separator className="my-8" />

              {/* Credentials */}
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Credentials &amp; Affiliations
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm list-none">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">—</span>
                  <span>Florida Licensed Real Estate Professional · License #[FL_LICENSE_NUMBER]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">—</span>
                  <span>[PLACEHOLDER: Brokerage affiliation]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">—</span>
                  <span>[PLACEHOLDER: Professional associations, e.g., CCIM, LoopNet member, etc.]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">—</span>
                  <span>[PLACEHOLDER: Education or certifications]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Areas of Specialization</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Retail Properties",
              "Office Buildings",
              "Industrial / Flex",
              "Multifamily",
              "Acquisitions",
              "Dispositions",
              "Owner Representation",
              "Market Analysis",
            ].map((item) => (
              <Card key={item} className="border border-stone-200 shadow-none bg-white">
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Let&apos;s Connect</h2>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Whether you have a specific property in mind or want to talk through market
            conditions, I&apos;m happy to have a conversation.
          </p>
          <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-semibold">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
