import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Check, Heart, Shield, Pill, Calendar } from "lucide-react";

const COVERAGE = [
  "Medicare Advantage (Part C)",
  "Medicare Supplement (Medigap)",
  "Prescription Drug Plans (Part D)",
  "Annual Plan Reviews",
];

const ELIGIBILITY = [
  { title: "Age 65 or Older", body: "Most Americans become eligible the month they turn 65." },
  { title: "Under 65 with Disability", body: "After 24 months of receiving Social Security disability benefits." },
  { title: "End-Stage Renal Disease", body: "ESRD patients qualify regardless of age." },
  { title: "ALS Diagnosis", body: "Coverage begins the same month disability benefits start." },
];

const PLANS = [
  {
    icon: Heart,
    title: "Medicare Advantage (Part C)",
    body: "All-in-one alternative to Original Medicare, often including drug coverage, dental, and vision.",
    bullets: ["$0 premium plans available", "Includes Parts A, B, and usually D", "Extra benefits like dental and vision", "Network-based care"],
  },
  {
    icon: Shield,
    title: "Medicare Supplement (Medigap)",
    body: "Pairs with Original Medicare to fill coverage gaps. See any doctor that accepts Medicare.",
    bullets: ["Predictable out-of-pocket costs", "No network restrictions", "Travel-friendly coverage", "Standardized plan letters"],
  },
  {
    icon: Pill,
    title: "Prescription Drug Plans (Part D)",
    body: "Stand-alone prescription coverage that works with Original Medicare or Medigap.",
    bullets: ["Hundreds of formulary options", "Annual review for savings", "Mail-order pharmacy options", "Low-income subsidy help"],
  },
];

const Medicare = () => {
  return (
    <Layout>
      <Seo title="Medicare Plans | Wood Insurance Agency" description="Medicare Advantage, Medigap, and Part D plans explained. Speak with a local Medicare expert serving MS, AL, TN, and LA." />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Medicare</span>
            <h1 className="mt-4 text-white text-[40px] sm:text-[52px] font-bold leading-[1.05]">
              Your Medicare Made Simple
            </h1>
            <p className="mt-5 text-white/85 text-[17px] leading-relaxed max-w-xl">
              Navigate Medicare with confidence. From Original Medicare to Advantage plans, we help you find the coverage that protects your health and your wallet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-white">Call (601) 397-2982</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-float p-7 lg:p-8 lg:justify-self-end w-full max-w-md">
            <h3 className="text-[22px] font-bold text-ink">Medicare Coverage</h3>
            <p className="text-muted-foreground text-[14px] mt-1">Everything we help you with.</p>
            <ul className="mt-5 space-y-3">
              {COVERAGE.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-secondary" aria-hidden />
                  </span>
                  <span className="text-ink text-[15px]">{c}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-base btn-navy w-full mt-6">Get My Quote</Link>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Medicare Eligibility Requirements</h2>
          <p className="mt-4 text-muted-foreground text-[17px]">
            Most people qualify for Medicare in one of four ways. Here is how to know if you are eligible.
          </p>
        </div>
        <div className="container-wide mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ELIGIBILITY.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <h3 className="text-[17px] font-bold text-ink">{e.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Medicare Plan Types</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">A clear breakdown of your options.</p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div id={p.title.toLowerCase().includes("advantage") ? "advantage" : p.title.toLowerCase().includes("supplement") ? "supplement" : "partd"} key={p.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-[20px] font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{p.body}</p>
              <ul className="mt-4 space-y-2 flex-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[14px] text-ink">
                    <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary-dark text-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Ready to Compare Medicare Plans?</h2>
          <p className="mt-3 text-white/80 text-[16px]">A free, no-obligation review with a local licensed agent.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Schedule My Review</Link>
            <a href="tel:6013972982" className="btn-base btn-outline-white">Call (601) 397-2982</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Medicare;
