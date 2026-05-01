import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import {
  Check, Heart, Shield, ShieldCheck, Pill, Calendar, Stethoscope, Hospital,
  Users, Award, Clock, Phone, HelpCircle, FileText, AlertTriangle, DollarSign,
  TrendingUp, Globe, Wallet,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const COVERED_PARTS = [
  { label: "Part A", desc: "Hospital" },
  { label: "Part B", desc: "Medical" },
  { label: "Part C", desc: "Advantage" },
  { label: "Part D", desc: "Prescription" },
];

const QUICK_FACTS = [
  { label: "Eligibility Age", value: "65+" },
  { label: "Coverage Parts", value: "4" },
  { label: "$0 Premium Plans", value: "Available" },
  { label: "Local Office", value: "Brandon, MS" },
];

const PARTS = [
  {
    icon: Hospital,
    label: "Part A",
    title: "Hospital Insurance",
    body: "Covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health services.",
    bullets: ["Inpatient hospital stays", "Skilled nursing care", "Hospice and home health"],
  },
  {
    icon: Stethoscope,
    label: "Part B",
    title: "Medical Insurance",
    body: "Covers doctor visits, outpatient care, preventive services, lab work, and durable medical equipment.",
    bullets: ["Doctor and specialist visits", "Outpatient procedures", "Preventive screenings"],
  },
  {
    icon: Heart,
    label: "Part C",
    title: "Medicare Advantage",
    body: "An all-in-one alternative to Original Medicare offered by private carriers, often bundling Part D, dental, and vision.",
    bullets: ["Bundles Parts A, B, often D", "Often $0 premium plans", "Extra benefits like dental and vision"],
  },
  {
    icon: Pill,
    label: "Part D",
    title: "Prescription Drug Coverage",
    body: "Stand-alone or bundled prescription coverage that protects you from high medication costs.",
    bullets: ["Hundreds of formularies", "Mail-order pharmacy options", "Catastrophic cost protection"],
  },
];

const PRIMARY_ELIGIBILITY = [
  { icon: Calendar, title: "Age 65 or Older", body: "Most people qualify the month they turn 65, regardless of income or health status." },
  { icon: Globe, title: "U.S. Citizen or Legal Resident", body: "Citizens or legal permanent residents of at least 5 continuous years are eligible." },
  { icon: Award, title: "Work History", body: "You or your spouse paid Medicare taxes for at least 10 years (40 quarters) for premium-free Part A." },
];

const SPECIAL_ELIGIBILITY = [
  { icon: ShieldCheck, title: "Under 65 with Disability", body: "If you receive Social Security Disability Insurance for 24 months, you qualify automatically." },
  { icon: Heart, title: "End-Stage Renal Disease", body: "People with permanent kidney failure requiring dialysis or a transplant qualify immediately." },
  { icon: AlertTriangle, title: "ALS Diagnosis", body: "Coverage begins the same month your Social Security disability benefits start." },
];

const ENROLLMENT = [
  { n: "1", title: "Initial Enrollment Period (IEP)", body: "Your 7-month window: 3 months before, the month of, and 3 months after your 65th birthday." },
  { n: "2", title: "General Enrollment Period (GEP)", body: "January 1 through March 31 each year if you missed your IEP. Coverage begins the month after enrollment." },
  { n: "3", title: "Special Enrollment Period (SEP)", body: "Triggered by qualifying events such as losing employer coverage or moving out of your plan area." },
];

const ENROLLMENT_NOTES = [
  "Late enrollment penalties may apply if you miss your initial window.",
  "If you are still working with creditable employer coverage, you may want to delay Part B.",
  "Medicare enrollment is not always automatic. Many people need to actively sign up.",
  "Choose between Original Medicare and Advantage based on your doctors and budget.",
];

const MA_TYPES = [
  { title: "HMO Plans", bullets: ["Use network providers", "Lower out-of-pocket costs", "Referrals required for specialists"] },
  { title: "PPO Plans", bullets: ["See any provider", "Higher cost out-of-network", "No referrals needed"] },
  { title: "PFFS Plans", bullets: ["Private Fee-for-Service", "Provider must accept the plan", "No network restrictions"] },
  { title: "SNP Plans", bullets: ["Special Needs Plans", "For specific conditions", "Coordinated, specialized care"] },
];

const MA_PROS = [
  "Lower monthly premiums, often $0",
  "Out-of-pocket maximum protection",
  "Extra benefits beyond Original Medicare",
  "Coordinated care management",
  "Often includes prescription drug coverage",
];

const MA_CONS = [
  "Network restrictions on HMO plans",
  "Referrals may be required for specialists",
  "Plan benefits can change annually",
  "Higher copays for some services",
  "Coverage limited to plan service area",
];

const MEDIGAP = [
  {
    title: "Plan G",
    badge: "Most Popular",
    bullets: ["Covers Part A deductible", "Covers Part B coinsurance", "Foreign travel emergency", "You pay Part B deductible"],
  },
  {
    title: "Plan F",
    badge: "Most Comprehensive",
    bullets: ["Covers all deductibles", "Covers all coinsurance", "Foreign travel emergency", "Limited to those eligible before 2020"],
  },
  {
    title: "Plan N",
    badge: "Cost-Effective",
    bullets: ["Lower monthly premium", "Small office and ER copays", "Foreign travel emergency", "Great value option"],
  },
];

const MEDIGAP_NOTES = [
  "Best time to buy is during your 6-month open enrollment window.",
  "You cannot have both Medicare Advantage and Medigap.",
  "Medigap policies do not include prescription drug coverage.",
  "Plans are federally standardized. Same benefits, different prices.",
];

const PARTD_PHASES = [
  { title: "Deductible", range: "Up to plan limit", body: "You pay 100% of drug costs until you hit the plan's deductible." },
  { title: "Initial Coverage", range: "$0 to $5,030", body: "You pay copays or coinsurance based on your plan's formulary tiers." },
  { title: "Coverage Gap", range: "$5,030 to $8,000", body: "You pay 25% of the cost for covered brand and generic drugs." },
  { title: "Catastrophic", range: "Above $8,000", body: "You pay small copays or 5% coinsurance for the rest of the year." },
];

const COSTS = [
  { title: "Part A Premium", value: "$0", lines: ["If you worked 40+ quarters", "30-39 quarters: $311/mo"] },
  { title: "Part B Premium", value: "$202.90", lines: ["Standard monthly premium", "Higher incomes pay more (IRMAA)"] },
  { title: "Part D Premium", value: "Varies", lines: ["By plan and formulary", "Plus IRMAA if applicable"] },
  { title: "Medigap Premium", value: "$100+", lines: ["Monthly premium", "Varies by plan and age"] },
];

const DEDUCTIBLES = [
  {
    title: "Part A (Hospital)",
    rows: ["Deductible: $1,736 per benefit period", "Days 1-60: $0 coinsurance", "Days 61-90: $434/day", "Lifetime Reserve (91+): $868/day"],
  },
  {
    title: "Part B (Medical)",
    rows: ["Deductible: $283 per year", "Coinsurance: 20% of approved amount", "Preventive services: $0 with assignment"],
  },
  {
    title: "Part D (Drugs)",
    rows: ["Deductible: Varies by plan", "Copays vary by tier", "Coverage gap: 25%", "Catastrophic: 5% or small copay"],
  },
];

const SERVICE_BENEFITS = [
  "Annual plan and formulary reviews",
  "Multiple top-rated carriers compared",
  "No fees, ever",
  "Advantage, Medigap, and Part D guidance",
  "IRMAA appeals and planning",
  "Drug list and pharmacy network checks",
];

const WHY = [
  { icon: Award, title: "Licensed Professional", body: "Cindy is a licensed independent agent with two decades of experience helping seniors navigate Medicare." },
  { icon: Clock, title: "Quick Response Time", body: "When you call, you get a real person. Most inquiries get a same-day answer." },
  { icon: Users, title: "Personal Service", body: "We are a local, family-owned agency. You are a name and a story, never a policy number." },
  { icon: ShieldCheck, title: "Multiple Carrier Options", body: "Because we are independent, we shop top-rated carriers to find the best fit for your health and budget." },
];

const FAQS = [
  {
    q: "When should I enroll in Medicare?",
    a: "Most people enroll during their Initial Enrollment Period, the 7-month window around their 65th birthday. If you have creditable employer coverage you may delay, but timing matters because late enrollment penalties can be permanent.",
  },
  {
    q: "What is the difference between Original Medicare and Medicare Advantage?",
    a: "Original Medicare (Parts A and B) is run by the federal government and lets you see any doctor that accepts Medicare. Medicare Advantage (Part C) is a private all-in-one plan that often includes drug coverage and extras like dental and vision, but usually uses a network.",
  },
  {
    q: "Can I keep my doctor?",
    a: "If your doctor accepts Original Medicare, yes. With a Medicare Advantage plan, we check the network before you enroll so there are no surprises after your card arrives.",
  },
  {
    q: "What is IRMAA and will it affect me?",
    a: "The Income-Related Monthly Adjustment Amount is an extra premium for higher-income beneficiaries on Part B and Part D. We help you understand it, plan around it, and appeal it after a life-changing event.",
  },
  {
    q: "Do I need a Part D plan if I take no medications?",
    a: "Often yes. If you go without creditable drug coverage, you can owe a permanent late-enrollment penalty when you finally need it. A low-premium plan is usually the smarter long-term move.",
  },
  {
    q: "How much does your service cost?",
    a: "Our Medicare services are completely free to you. We are paid by the carriers when you choose a plan, so our guidance never costs you out of pocket.",
  },
];

const NEXT_STEPS = [
  { n: "1", title: "We Review Your Information", body: "Our team reviews your doctors, prescriptions, and budget before we ever pick up the phone." },
  { n: "2", title: "We Contact You", body: "Within 24 hours, we call or email with clear next steps and any questions we still need to answer." },
  { n: "3", title: "We Find Your Best Option", body: "We compare top-rated carriers across Advantage, Medigap, and Part D to land on the right plan for you." },
];

const Medicare = () => {
  return (
    <Layout>
      <Seo
        title="Medicare Plans | Wood Insurance Agency"
        description="Medicare Advantage, Medigap, and Part D plans explained. Eligibility, enrollment timeline, 2026 costs, and side-by-side plan comparisons. Local Medicare expert serving MS, AL, TN, and LA."
      />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Medicare Coverage Solutions</span>
            <h1 className="mt-4 text-white text-[40px] sm:text-[56px] font-bold leading-[1.05]">
              Your Medicare Made Simple
            </h1>
            <p className="mt-3 text-accent text-[22px] sm:text-[26px] font-semibold">
              Plain English. Top carriers. Local expertise.
            </p>
            <p className="mt-5 text-white/85 text-[17px] leading-relaxed max-w-xl">
              Navigate Medicare with confidence. From Original Medicare to Advantage and Medigap, we help seniors across Mississippi, Alabama, Tennessee, and Louisiana protect their health and their wallet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-gold">Get Medicare Quote</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-white">
                <Phone className="w-4 h-4" aria-hidden /> Call (601) 397-2982
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-float p-7 lg:p-8 lg:justify-self-end w-full max-w-md">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[22px] font-bold text-ink">Medicare Coverage</h3>
              <span className="inline-flex items-center gap-1.5 bg-secondary/15 text-secondary text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                <Calendar className="w-3 h-3" aria-hidden /> 65+ Eligible
              </span>
            </div>
            <p className="text-muted-foreground text-[14px] mt-1">All four parts. One trusted local advisor.</p>
            <ul className="mt-5 space-y-3">
              {COVERED_PARTS.map((c) => (
                <li key={c.label} className="flex items-center justify-between gap-3 bg-surface rounded-xl px-4 py-3">
                  <div>
                    <p className="text-[15px] font-bold text-ink">{c.label}</p>
                    <p className="text-[12px] text-muted-foreground">{c.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-secondary font-semibold text-[13px]">
                    <Check className="w-4 h-4" aria-hidden /> Covered
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-base btn-navy w-full mt-6">Get My Quote</Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-primary-dark text-white">
        <div className="container-wide py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_FACTS.map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-accent text-[28px] sm:text-[32px] font-bold leading-none">{f.value}</div>
              <div className="mt-2 text-white/80 text-[13px] uppercase tracking-wider">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4 Parts */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Medicare 101</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">The Four Parts of Medicare</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Medicare is divided into four parts, each one covering something different. Here is what each one does in plain English.
          </p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTS.map((p) => (
            <div key={p.label} className="bg-white rounded-2xl p-7 shadow-card border border-border/60 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" aria-hidden />
              </div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-accent-dark">{p.label}</span>
              <h3 className="mt-1 text-[18px] font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{p.body}</p>
              <ul className="mt-4 space-y-2">
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

      {/* Eligibility */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Eligibility</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Medicare Eligibility Requirements</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Most people qualify for Medicare in one of two ways. Here is how to know which path applies to you.
          </p>
        </div>
        <div className="container-wide grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-[20px] font-bold text-ink mb-5">Primary Eligibility</h3>
            <div className="space-y-4">
              {PRIMARY_ELIGIBILITY.map((e) => (
                <div key={e.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <e.icon className="w-5 h-5 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-ink">{e.title}</h4>
                    <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{e.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-ink mb-5">Special Circumstances</h3>
            <div className="space-y-4">
              {SPECIAL_ELIGIBILITY.map((e) => (
                <div key={e.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <e.icon className="w-5 h-5 text-accent-dark" aria-hidden />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-ink">{e.title}</h4>
                    <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{e.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Timeline */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">Enrollment Timeline</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">When Can You Enroll?</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Three windows for getting on Medicare. Miss the wrong one and you could pay penalties for life.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {ENROLLMENT.map((s) => (
            <div key={s.n} className="relative bg-white rounded-2xl p-7 shadow-card border border-border/60">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">{s.n}</div>
              <h3 className="text-[18px] font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="container-wide mt-10 max-w-4xl mx-auto bg-surface rounded-2xl border border-border/60 p-7">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-accent-dark" aria-hidden />
            <h3 className="text-[18px] font-bold text-ink">Important Considerations</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {ENROLLMENT_NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-ink">
                <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Medicare Advantage Deep Dive */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Part C</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Medicare Advantage Plans</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Offered by private carriers approved by Medicare, these plans bundle Parts A and B and often include Part D, dental, vision, and hearing.
          </p>
        </div>
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {MA_TYPES.map((t) => (
            <div key={t.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60">
              <h3 className="text-[16px] font-bold text-ink">{t.title}</h3>
              <ul className="mt-3 space-y-2">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-ink">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container-wide grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 shadow-card border-l-4 border-secondary border-y border-r border-border/60">
            <h3 className="text-[18px] font-bold text-ink mb-4">Advantages</h3>
            <ul className="space-y-2">
              {MA_PROS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[14px] text-ink">
                  <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-card border-l-4 border-accent border-y border-r border-border/60">
            <h3 className="text-[18px] font-bold text-ink mb-4">Considerations</h3>
            <ul className="space-y-2">
              {MA_CONS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[14px] text-ink">
                  <AlertTriangle className="w-4 h-4 text-accent-dark mt-1 shrink-0" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Medigap Deep Dive */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Medigap</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Medicare Supplement Plans</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Medigap fills the gaps in Original Medicare so a hospital stay does not turn into a financial setback. Plans are federally standardized, so the benefits are identical from carrier to carrier. Only the price changes.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {MEDIGAP.map((m) => (
            <div key={m.title} className="bg-white rounded-2xl p-7 shadow-card border-t-4 border-primary border-x border-b border-border/60">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[22px] font-bold text-ink">{m.title}</h3>
                <span className="inline-block bg-accent/20 text-accent-dark text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">{m.badge}</span>
              </div>
              <ul className="mt-5 space-y-2">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[14px] text-ink">
                    <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container-wide mt-10 max-w-4xl mx-auto bg-surface rounded-2xl border border-border/60 p-7">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" aria-hidden />
            <h3 className="text-[18px] font-bold text-ink">Important Notes</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {MEDIGAP_NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-ink">
                <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Part D */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Part D</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Prescription Drug Plans</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Part D protects you from high medication costs through private insurance plans approved by Medicare. We match your drug list to the right formulary.
          </p>
        </div>
        <div className="container-wide grid gap-3 sm:grid-cols-4 mb-10 max-w-4xl mx-auto">
          {[
            { tier: "Generic", note: "Lowest Cost" },
            { tier: "Preferred Brand", note: "Medium Cost" },
            { tier: "Non-Preferred", note: "Higher Cost" },
            { tier: "Specialty", note: "Highest Cost" },
          ].map((t) => (
            <div key={t.tier} className="bg-white rounded-xl px-4 py-3 text-center shadow-card">
              <p className="text-[13px] font-bold text-ink">{t.tier}</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{t.note}</p>
            </div>
          ))}
        </div>
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTD_PHASES.map((p, i) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">{i + 1}</div>
              <h3 className="text-[16px] font-bold text-ink">{p.title}</h3>
              <p className="text-[12px] font-semibold text-accent-dark uppercase tracking-wider mt-1">{p.range}</p>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="container-wide mt-10 max-w-4xl mx-auto bg-white rounded-2xl border-l-4 border-accent border-y border-r border-border/60 p-7">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-accent-dark" aria-hidden />
            <h3 className="text-[18px] font-bold text-ink">Avoid the Late-Enrollment Penalty</h3>
          </div>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            If you skip Part D when first eligible without other creditable drug coverage, the late-enrollment penalty is added to your premium for life. Three ways to stay safe:
          </p>
          <ul className="grid sm:grid-cols-3 gap-3">
            {[
              "Enroll in Part D when first eligible",
              "Maintain creditable drug coverage",
              "Enroll within 2 months of losing coverage",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-[14px] text-ink">
                <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2026 Costs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">2026 Costs</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Understanding Medicare Costs</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            What you pay depends on income, work history, and the type of coverage you choose. Here is a quick snapshot for 2026.
          </p>
        </div>
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COSTS.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60 text-center">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Wallet className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <h3 className="text-[15px] font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-[28px] font-bold text-primary leading-none">{c.value}</p>
              <div className="mt-3 space-y-1">
                {c.lines.map((l) => (
                  <p key={l} className="text-[12px] text-muted-foreground">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="container-wide mt-10 grid gap-6 lg:grid-cols-3">
          {DEDUCTIBLES.map((d) => (
            <div key={d.title} className="bg-surface rounded-2xl p-6 border border-border/60">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-secondary" aria-hidden />
                <h3 className="text-[16px] font-bold text-ink">{d.title}</h3>
              </div>
              <ul className="space-y-2">
                {d.rows.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[13px] text-ink">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="container-wide mt-6 text-center text-[12px] text-muted-foreground">
          Figures based on 2026 CMS guidance. Your actual costs may vary by plan, location, and income.
        </p>
      </section>

      {/* Why Wood */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Why Wood Insurance</span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight">
              Independent, Local, and On Your Side
            </h2>
            <p className="mt-4 text-muted-foreground text-[17px] leading-relaxed">
              Cindy Wood has spent two decades helping seniors in Brandon and across the South choose Medicare coverage they can actually use. Because we are independent, we are not tied to a single carrier and we never charge a fee. We are in this for the long haul.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {SERVICE_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[14px] text-ink">
                  <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Schedule My Review</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-navy">Call (601) 397-2982</a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center mb-3">
                  <w.icon className="w-5 h-5 text-secondary" aria-hidden />
                </div>
                <h3 className="text-[16px] font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">FAQs</span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground text-[17px] flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-secondary" aria-hidden />
              Real answers to the questions we hear most often.
            </p>
          </div>
          <Accordion type="single" collapsible className="bg-surface rounded-2xl shadow-card border border-border/60 px-6">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-[16px] font-semibold text-ink hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">What's Next</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">What Happens After You Reach Out</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">No pressure, no surprises. Here is exactly what to expect.</p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {NEXT_STEPS.map((s) => (
            <div key={s.n} className="bg-white rounded-2xl p-7 border border-border/60 shadow-card text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent text-ink flex items-center justify-center font-bold text-[18px]">{s.n}</div>
              <h3 className="mt-4 text-[18px] font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-primary-dark text-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Ready to Compare Medicare Plans?</h2>
          <p className="mt-3 text-white/80 text-[16px]">A free, no-obligation review with a local licensed Medicare expert.</p>
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