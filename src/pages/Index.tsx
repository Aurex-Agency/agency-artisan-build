import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { HeroQuoteForm } from "@/components/HeroQuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { StatRow } from "@/components/StatRow";
import {
  Heart, PiggyBank, Stethoscope, Shield,
  Users, BadgeCheck, HandshakeIcon, MapPin,
  Phone, Mail, Calendar, Clock,
} from "lucide-react";

const SERVICES = [
  {
    tone: "navy" as const,
    icon: Heart,
    title: "Medicare",
    body: "Navigate Medicare with confidence. We shop top carriers to find the right coverage.",
    bullets: ["Medicare Advantage", "Medicare Supplement (Medigap)", "Prescription Drug Plans (Part D)"],
    to: "/medicare",
  },
  {
    tone: "gold" as const,
    icon: PiggyBank,
    title: "Retirement Planning",
    body: "Build wealth and secure your retirement income with comprehensive planning.",
    bullets: ["Annuities", "401(k) Rollovers", "IRA Management", "Social Security Optimization"],
    to: "/retirement",
  },
  {
    tone: "green" as const,
    icon: Stethoscope,
    title: "Health Insurance",
    body: "Expert guidance through the health insurance marketplace for you and your family.",
    bullets: ["ACA Marketplace Plans", "Individual & Family Plans", "Short-Term Coverage"],
    to: "/health-insurance",
  },
  {
    tone: "blue" as const,
    icon: Shield,
    title: "Life Insurance",
    body: "Secure your family's financial future with comprehensive life insurance solutions.",
    bullets: ["Term Life", "Whole Life", "Final Expense"],
    to: "/health-insurance#life",
  },
];

const WHY = [
  { icon: Users, title: "Independent Agents", body: "We shop 20+ top-rated carriers to find you the best rates." },
  { icon: BadgeCheck, title: "Free to You", body: "Our expert guidance costs you absolutely nothing." },
  { icon: HandshakeIcon, title: "Personal Service", body: "We sit down with you face-to-face to review your policies." },
  { icon: MapPin, title: "Local Expertise", body: "We know the local healthcare networks in Simpson County and beyond." },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Wood Insurance Agency | Medicare, Retirement, Health & Life"
        description="Expert independent guidance for Medicare, retirement planning, health, and life insurance. Serving MS, AL, TN, and LA."
      />

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
        <div className="container-wide relative py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-white text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] font-bold tracking-tight">
              Wood Insurance Agency
            </h1>
            <p className="mt-5 text-white/85 text-[17px] sm:text-[18px] leading-relaxed max-w-xl">
              Expert independent guidance for Medicare, retirement planning, health, and life insurance. Helping individuals and families across MS, AL, TN, and LA protect their health and financial future.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
              <Link to="/contact" className="btn-base btn-outline-white">Schedule Consultation</Link>
            </div>
            <div className="mt-10 pt-8 border-t border-white/15">
              <StatRow
                variant="dark"
                stats={[
                  { value: "500+", label: "Happy Clients" },
                  { value: "20+", label: "Carriers Shopped" },
                  { value: "100%", label: "Free Service" },
                ]}
              />
            </div>
          </div>
          <div className="lg:justify-self-end w-full">
            <HeroQuoteForm />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">
            Comprehensive Insurance & Retirement Solutions
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground leading-relaxed">
            Expert guidance for your most important decisions. From navigating Medicare to securing your retirement, we are your trusted local partners.
          </p>
        </div>

        {/* Services grid */}
        <div className="container-wide mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">
            Why Choose Wood Insurance Agency?
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground leading-relaxed">
            We are not just another 1-800 number. We are your neighbors, committed to providing exceptional, face-to-face service.
          </p>
        </div>
        <div className="container-wide mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <div key={w.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <w.icon className="w-7 h-7 text-primary" aria-hidden />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{w.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>

        <div className="container-wide mt-14 max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-border/60 p-8">
          <StatRow
            stats={[
              { value: "500+", label: "Happy Clients" },
              { value: "20+", label: "Carriers Shopped" },
              { value: "4", label: "States Served" },
            ]}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">What Our Clients Say</h2>
          <p className="mt-3 text-[17px] text-muted-foreground">Real reviews from real neighbors.</p>
        </div>
        <div className="container-wide">
          <TestimonialSlider />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-primary-dark text-white">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-white text-[32px] sm:text-[40px] font-bold">
            Ready to Protect What Matters Most?
          </h2>
          <p className="mt-4 text-white/80 text-[17px] leading-relaxed">
            Do not wait until it is too late. Get the coverage you need today with personalized service from your local experts.
          </p>
        </div>
        <div className="container-wide mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, title: "Call Us", body: "(601) 439-7230", href: "tel:6014397230" },
            { icon: Mail, title: "Email Us", body: "cindy@woodinsuranceagency.net", href: "mailto:cindy@woodinsuranceagency.net" },
            { icon: MapPin, title: "Visit Our Office", body: "398 Simpson Hwy 149, Magee, MS", href: "https://maps.google.com/?q=398+Simpson+Hwy+149+Magee+MS" },
            { icon: Clock, title: "Office Hours", body: "Mon-Fri 8AM-5PM" },
          ].map((c) => {
            const Inner = (
              <>
                <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-3">
                  <c.icon className="w-6 h-6 text-accent" aria-hidden />
                </div>
                <div className="text-[15px] font-semibold text-white">{c.title}</div>
                <div className="mt-1 text-[14px] text-white/75 break-words">{c.body}</div>
              </>
            );
            return c.href ? (
              <a key={c.title} href={c.href} className="block bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors border border-white/10">
                {Inner}
              </a>
            ) : (
              <div key={c.title} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                {Inner}
              </div>
            );
          })}
        </div>
        <div className="container-wide mt-10 text-center">
          <Link to="/contact" className="btn-base btn-gold">Get Your Free Quote</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
