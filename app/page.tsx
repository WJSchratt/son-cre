import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, TrendingUp, Users, BarChart3, MapPin, Phone } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Acquisitions",
    description:
      "Strategic identification and evaluation of commercial properties aligned with your investment objectives. From initial analysis through closing, guided at every step.",
  },
  {
    icon: TrendingUp,
    title: "Dispositions",
    description:
      "Maximizing sale outcomes through targeted marketing, qualified buyer networks, and expert negotiation for commercial asset disposition.",
  },
  {
    icon: Users,
    title: "Owner Representation",
    description:
      "Dedicated advocacy for property owners navigating leasing, management decisions, and long-term asset strategy in the Tampa Bay market.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description:
      "Data-driven insights on commercial market trends, comparable sales, and investment opportunities across St. Petersburg and greater Pinellas County.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge
              variant="secondary"
              className="mb-5 bg-slate-700 text-slate-200 border-0 text-xs tracking-widest uppercase"
            >
              St. Petersburg, Florida
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              [OWNER_FULL_NAME]
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
              Commercial Real Estate Advisor
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Helping investors, business owners, and property owners navigate the commercial
              real estate market in St. Petersburg and throughout Pinellas County. Whether
              you&apos;re acquiring your next asset, positioning a property for sale, or seeking
              expert market insights — I provide the guidance to make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
              >
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
              What I Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Advisory Services</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Comprehensive commercial real estate services tailored to the St. Petersburg and
              Tampa Bay market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border border-stone-200 shadow-none hover:shadow-md transition-shadow bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market focus */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
                Market Focus
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Deeply Rooted in the St. Pete Market
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Commercial real estate is hyper-local. Deep knowledge of Pinellas County
                submarkets — from Downtown St. Pete and the Grand Central District to Clearwater
                and beyond — means actionable insights, not generic advice.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Focused on retail, office, industrial, and multifamily asset classes. Whether
                you&apos;re a seasoned investor or a business owner looking to acquire your first
                commercial property, the expertise is here to guide you.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin className="h-4 w-4" />
                <span>St. Petersburg, FL · Pinellas County · Tampa Bay Area</span>
              </div>
            </div>
            <div className="bg-stone-100 rounded-2xl p-10 text-center">
              <p className="text-4xl font-bold text-slate-900 mb-1">Pinellas County</p>
              <p className="text-slate-500 text-sm mb-8">St. Petersburg, Florida</p>
              <div className="grid grid-cols-2 gap-4 text-left">
                {[
                  { label: "Asset Types", value: "Retail · Office\nIndustrial · Multifamily" },
                  { label: "Service Area", value: "St. Pete · Clearwater\nTampa Bay" },
                  { label: "Client Focus", value: "Investors · Business\nOwners · Landlords" },
                  { label: "Approach", value: "Data-Driven\nResults-Oriented" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-slate-900 whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Talk Commercial Real Estate?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Reach out for a no-obligation conversation about your goals, a specific property,
            or the current state of the St. Pete market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
            >
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <a href="tel:[BUSINESS_PHONE]">
                <Phone className="mr-2 h-4 w-4" /> [BUSINESS_PHONE]
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
