import { Phone, ShieldCheck, HeartPulse, FileText, Pill, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { CTASection } from "@/components/CTASection";

const OPTIONS = [
  {
    icon: HeartPulse,
    title: "Original Medicare (Parts A & B)",
    body: "Original Medicare is the federal health insurance program for people 65 and older. Part A covers hospital stays, skilled nursing care, and some home health services. Part B covers doctor visits, outpatient care, and preventive services. Most people do not pay a premium for Part A, but Part B has a monthly premium. Original Medicare does not cover everything, which is why many people add a Supplement or Advantage plan.",
  },
  {
    icon: ShieldCheck,
    title: "Medicare Advantage (Part C)",
    body: "Medicare Advantage plans are offered by private insurance companies approved by Medicare. They bundle your Part A, Part B, and usually Part D (drug coverage) into one plan. Many Advantage plans also include extra benefits like dental, vision, and hearing coverage. In Mississippi, average premiums for 2026 are as low as $5.61 per month. Top-rated carriers include Humana, Aetna, and UnitedHealthcare.",
  },
  {
    icon: FileText,
    title: "Medicare Supplement (Medigap)",
    body: "A Medicare Supplement plan works alongside Original Medicare to help pay costs that Medicare does not fully cover, like deductibles, copayments, and coinsurance. These plans are standardized, meaning a Plan G from one company offers the same benefits as a Plan G from another. The difference is the premium, which is why shopping multiple carriers with an independent agency like Wood Insurance is so valuable.",
  },
  {
    icon: Pill,
    title: "Part D Prescription Drug Coverage",
    body: "Part D plans help cover the cost of prescription medications. If you have Original Medicare and a Medigap plan, you will need a separate Part D plan. If you have a Medicare Advantage plan, drug coverage is usually included. Our team will review your current medications and find a plan that covers them at the lowest possible cost.",
  },
];

const TIMELINE = [
  {
    title: "Initial Enrollment Period (IEP)",
    body: "The 7-month window around your 65th birthday (3 months before, the month of, and 3 months after). This is the best time to enroll without penalties.",
  },
  {
    title: "Annual Open Enrollment (AEP)",
    body: "October 15 to December 7 each year. Anyone with Medicare can switch plans during this window. New coverage begins January 1.",
  },
  {
    title: "Special Enrollment Periods (SEP)",
    body: "If you lose employer coverage or have another qualifying life event, you may be able to enroll outside of the standard windows.",
  },
];

const CHECKS = [
  "Compare plans from multiple top-rated carriers",
  "Review your doctors and medications before recommending a plan",
  "Handle all enrollment paperwork for you",
  "Available year-round for questions and plan changes",
  "No cost to you, ever",
];

const Medicare = () => {
  return (
    <Layout>
      <Seo
        title="Medicare Plans in Magee, MS | Wood Insurance Agency"
        description="Confused about Medicare? Wood Insurance Agency helps Magee and Simpson County residents compare Medicare Advantage, Medicare Supplement, and Part D plans at no cost. Call (601) 397-2982 today."
        keywords="Medicare agent Magee MS, Medicare Advantage Mississippi, Medicare Supplement Magee, turning 65 Medicare Mississippi"
        path="/medicare"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div aria-hidden className="absolute -right-20 -top-10 lg:right-10 lg:top-10 opacity-15">
          <svg width="520" height="560" viewBox="0 0 520 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M260 10L500 80V260C500 400 380 500 260 550C140 500 20 400 20 260V80L260 10Z" stroke="hsl(var(--accent))" strokeWidth="6" fill="hsl(var(--accent) / 0.25)" />
          </svg>
        </div>
        <div className="container-wide py-20 lg:py-28 relative">
          <span className="eyebrow eyebrow-gold">Medicare Solutions</span>
          <h1 className="animate-hero-rise mt-3 text-[36px] sm:text-[44px] lg:text-[56px] text-white max-w-3xl text-balance">
            Navigate Medicare with Confidence.
          </h1>
          <p className="animate-hero-rise mt-6 text-[19px] lg:text-[20px] text-white/90 max-w-2xl" style={{ animationDelay: "60ms" }}>
            Turning 65 or dealing with Open Enrollment is stressful. Get free, local help from an independent agent who shops multiple carriers to find the plan that is right for you.
          </p>
          <div className="animate-hero-rise mt-8 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "120ms" }}>
            <a href="tel:6013972982" className="btn-base btn-gold"><Phone className="w-5 h-5" /> Call (601) 397-2982</a>
            <Link to="/contact" className="btn-base btn-outline-white">Request a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <span className="eyebrow">Your Options</span>
            <h2 className="mt-3 text-[32px] sm:text-[40px]">What Are Your Medicare Options?</h2>
          </div>
          <div className="space-y-6">
            {OPTIONS.map(({ icon: Icon, title, body }) => (
              <article key={title} className="bg-background border border-border border-l-[6px] border-l-accent rounded-xl p-7 lg:p-10 shadow-card flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[24px] sm:text-[26px]">{title}</h3>
                  <p className="mt-3 text-[18px] text-text">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Enrollment Windows</span>
            <h2 className="mt-3 text-[30px] sm:text-[38px]">When Can You Enroll?</h2>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-3 lg:gap-6">
            <div aria-hidden className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-[2px] bg-accent/40" />
            {TIMELINE.map((t, i) => (
              <div key={t.title} className="bg-background rounded-xl p-7 shadow-card border border-border relative">
                <div className="w-14 h-14 rounded-full bg-accent text-dark font-display font-bold text-xl flex items-center justify-center -mt-14 mb-5 shadow-cta">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[20px] text-primary">{t.title}</h3>
                <p className="mt-3 text-text text-[17px]">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEPENDENT AGENT */}
      <section className="grid lg:grid-cols-2 bg-background">
        <div className="bg-primary text-white p-10 lg:p-20 flex flex-col justify-center">
          <span className="eyebrow eyebrow-gold">Independent Advantage</span>
          <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[38px] text-white">
            We Work for You. Not for an Insurance Company.
          </h2>
          <p className="mt-6 text-[18px] text-white/90">
            As an independent agency, Wood Insurance is not tied to any single insurance company. We have access to plans from dozens of top-rated carriers and our only job is to find the one that fits your health needs and your budget. And our services are completely free to you. Insurance companies pay agent commissions, so you never pay a dime for our help.
          </p>
        </div>
        <div className="p-10 lg:p-20 flex flex-col justify-center">
          <h3 className="text-[24px] mb-6">What you get with Wood Insurance</h3>
          <ul className="space-y-5">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-accent text-dark flex items-center justify-center mt-0.5">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <span className="text-[18px] text-text pt-0.5">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Free Consultation"
        headline="Ready to Find Your Medicare Plan?"
        body="Call our team today or request a consultation. There is no obligation, and the conversation is completely free."
      />
    </Layout>
  );
};

export default Medicare;