import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Check, Stethoscope, Shield, Users, Clock, HeartHandshake } from "lucide-react";

const HEALTH = [
  { icon: Stethoscope, title: "ACA Marketplace Plans", body: "Affordable Care Act plans with potential subsidies. We handle the paperwork." },
  { icon: Users, title: "Individual & Family Plans", body: "Comprehensive coverage for you and your family from top-rated carriers." },
  { icon: Clock, title: "Short-Term Coverage", body: "Bridge coverage when you are between jobs or waiting for benefits to start." },
];

const LIFE = [
  { icon: Shield, title: "Term Life Insurance", body: "Affordable coverage for a set period. Great for income replacement during your working years." },
  { icon: HeartHandshake, title: "Whole Life Insurance", body: "Lifetime coverage with cash value that grows over time." },
  { icon: Shield, title: "Final Expense Insurance", body: "Smaller policies designed to cover funeral and end-of-life costs." },
];

const HealthLife = () => {
  return (
    <Layout>
      <Seo title="Health & Life Insurance | Wood Insurance Agency" description="ACA marketplace, individual and family health plans, plus term, whole, and final expense life insurance. Serving MS, AL, TN, and LA." />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide py-16 lg:py-20 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Health & Life</span>
          <h1 className="mt-4 text-white text-[40px] sm:text-[52px] font-bold leading-[1.05]">
            Health & Life Insurance
          </h1>
          <p className="mt-5 text-white/85 text-[18px] leading-relaxed">
            Protect your family's future. From everyday healthcare to lifetime financial security, we have you covered.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
            <a href="tel:6013972982" className="btn-base btn-outline-white">Call (601) 397-2982</a>
          </div>
        </div>
      </section>

      {/* Health */}
      <section id="health" className="py-16 lg:py-20 bg-white">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Health Insurance</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Coverage for Every Stage of Life</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Expert guidance through the marketplace. We compare plans across multiple carriers to find the right fit.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {HEALTH.map((h) => (
            <div key={h.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-secondary" aria-hidden />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{h.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Life */}
      <section id="life" className="py-16 lg:py-20 bg-surface">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-card-blue text-[12px] font-semibold uppercase tracking-wider mb-2">Life Insurance</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Protect the People You Love</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Life insurance is one of the most caring financial decisions you can make. We help you find the right coverage at the right price.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {LIFE.map((l) => (
            <div key={l.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60">
              <div className="w-12 h-12 rounded-xl bg-card-blue/15 flex items-center justify-center mb-4">
                <l.icon className="w-6 h-6 text-card-blue" aria-hidden />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{l.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>

        <div className="container-wide mt-12 bg-white rounded-2xl shadow-card border border-border/60 p-8 max-w-3xl mx-auto">
          <h3 className="text-[20px] font-bold text-ink">Why work with an independent agent?</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {[
              "We shop 20+ top-rated carriers",
              "Our service is always free to you",
              "We handle the underwriting paperwork",
              "We are here for the life of your policy",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-[14px] text-ink">
                <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary-dark text-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Get a Quote in Minutes</h2>
          <p className="mt-3 text-white/80 text-[16px]">No pressure, no obligation. Just expert guidance from a local agent.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
            <a href="tel:6013972982" className="btn-base btn-outline-white">Call (601) 397-2982</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthLife;
