import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import {
  Check, Stethoscope, Users, HeartPulse, Clock, PiggyBank, Pill, ShieldCheck,
  Calendar, Search, Scale, Rocket, HelpCircle, Award, Phone, FileText, Baby, Briefcase,
  Ribbon, Activity,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const INCLUDED = [
  "Individual and family plans",
  "Medicare supplement coverage",
  "Prescription drug coverage",
  "Preventive care benefits",
  "Mental health services",
  "Emergency and hospital coverage",
  "Cancer, heart attack, and stroke plans",
];

const QUICK_FACTS = [
  { label: "Avg. Annual Savings", value: "$300+" },
  { label: "Carriers Compared", value: "20+" },
  { label: "Claims Support", value: "24/7" },
  { label: "Local Office", value: "Magee, MS" },
];

const COVERAGE = [
  {
    icon: Stethoscope,
    title: "Individual Health Plans",
    body: "Comprehensive medical coverage built around your doctors, your medications, and your budget.",
    bullets: ["Preventive and primary care", "Prescription drug coverage", "Specialist and urgent care"],
  },
  {
    icon: Users,
    title: "Family Coverage",
    body: "One plan that protects everyone under your roof, from newborns to teens to grandparents.",
    bullets: ["Pediatric and well-child care", "Maternity and newborn benefits", "Family deductible options"],
  },
  {
    icon: FileText,
    title: "ACA Marketplace Plans",
    body: "Affordable Care Act plans with potential subsidies. We handle the marketplace, you keep the peace of mind.",
    bullets: ["Subsidy and tax-credit screening", "All metal tiers compared", "Open and special enrollment help"],
  },
  {
    icon: Clock,
    title: "Short-Term Health Insurance",
    body: "Bridge coverage between jobs, after graduation, or while you wait for new benefits to start.",
    bullets: ["Quick approval, often same day", "Flexible 1 to 12 month terms", "Lower monthly premiums"],
  },
  {
    icon: PiggyBank,
    title: "Health Savings Accounts (HSA)",
    body: "Pair a high-deductible plan with a tax-advantaged account that grows with you year after year.",
    bullets: ["Triple tax advantages", "Funds roll over forever", "Yours to keep if you change jobs"],
  },
  {
    icon: ShieldCheck,
    title: "Medicare Supplements",
    body: "Fill the gaps in Original Medicare so a hospital stay does not turn into a financial setback.",
    bullets: ["Plan G, N, and high-deductible options", "No network restrictions", "Predictable monthly costs"],
  },
];

const STEPS = [
  { icon: Search, title: "Listen", body: "We start with your story. Your doctors, prescriptions, family situation, and what coverage actually needs to do for you." },
  { icon: Scale, title: "Compare", body: "We shop 20+ top-rated carriers and lay every option side by side, in plain English. No jargon, no pressure." },
  { icon: Rocket, title: "Enroll", body: "We handle the paperwork from start to finish, then stay with you all year for claims, renewals, and life changes." },
];

const PLAN_TYPES = [
  {
    title: "HMO Plans",
    bestFor: "Lower premiums and a coordinated care team.",
    bullets: ["Choose a primary care doctor", "Lower out-of-pocket costs", "Referrals required for specialists"],
  },
  {
    title: "PPO Plans",
    bestFor: "Maximum flexibility to pick your own doctors.",
    bullets: ["Larger network of providers", "No referrals needed", "Out-of-network coverage available"],
  },
  {
    title: "HDHP + HSA",
    bestFor: "Healthy savers who want tax advantages.",
    bullets: ["Lower monthly premiums", "Tax-free HSA contributions", "Funds invest and grow over time"],
  },
];

const WHY = [
  { icon: Award, title: "Licensed Professional", body: "Cindy is a licensed independent agent with two decades of experience guiding families through health coverage decisions." },
  { icon: Clock, title: "Quick Response Time", body: "When you call, you get a real person. Most inquiries get a same-day answer." },
  { icon: Users, title: "Personal Service", body: "We are a local, family-owned agency. You are a name and a story, never a policy number." },
  { icon: ShieldCheck, title: "Multiple Carrier Options", body: "Because we are independent, we shop top-rated carriers to find the best fit for your health and budget." },
];

const SERVICE_BENEFITS = [
  "Individual and family health plans",
  "Short-term health insurance",
  "Health savings account options",
  "Preventive care benefits",
  "Mental health and substance abuse coverage",
  "Family coverage options",
  "Critical illness coverage (cancer, heart attack, stroke)",
];

const LIFE_EVENTS = [
  { icon: HeartPulse, label: "Marriage or divorce" },
  { icon: Baby, label: "Having or adopting a baby" },
  { icon: Briefcase, label: "Losing job-based coverage" },
  { icon: Calendar, label: "Moving to a new ZIP code" },
];

const FAQS = [
  {
    q: "When can I enroll in a health plan?",
    a: "ACA Open Enrollment runs each fall, but if you have a Qualifying Life Event such as marriage, a new baby, job loss, or a move, you can enroll year-round during a Special Enrollment Period.",
  },
  {
    q: "Do I qualify for a subsidy or tax credit?",
    a: "Many families do, even at higher income levels than they expect. We run a quick eligibility check at no cost so you know exactly what you qualify for before you choose a plan.",
  },
  {
    q: "What is the difference between an HMO and a PPO?",
    a: "HMO plans usually cost less but require you to stay in network and get referrals. PPO plans cost a little more but let you see specialists directly and use out-of-network providers when needed.",
  },
  {
    q: "Can I keep my doctor?",
    a: "Often yes. Before you enroll, we check each plan against your current doctors and prescriptions so there are no surprises after your card arrives.",
  },
  {
    q: "What is an HSA and who is it for?",
    a: "A Health Savings Account is a tax-advantaged account paired with a high-deductible plan. Contributions are tax-deductible, growth is tax-free, and qualified medical withdrawals are tax-free too. It is a great fit for healthy savers who want long-term value.",
  },
  {
    q: "How much does your service cost?",
    a: "Our health insurance services are completely free to you. We are paid by the carriers when you choose a plan, so our guidance never costs you out of pocket.",
  },
  {
    q: "Do I need a critical illness plan if I already have health insurance?",
    a: "Major-medical plans pay doctors and hospitals, but they do not cover everyday bills. A cancer, heart attack, or stroke diagnosis often brings deductibles, time off work, travel for treatment, and household expenses that pile up fast. A critical illness plan pays a lump-sum cash benefit directly to you so you can focus on recovery instead of finances.",
  },
  {
    q: "How are cancer, heart attack, and stroke benefits paid?",
    a: "Once a covered diagnosis is verified by your physician, the carrier pays a lump-sum cash benefit directly to you, the policyholder. There is no network, no itemized claims, and no rules on how the money is spent. Use it for treatment, bills, travel, or anything your family needs.",
  },
];

const NEXT_STEPS = [
  { n: "1", title: "We Review Your Information", body: "Our team reviews your needs and prepares personalized plan options before we ever pick up the phone." },
  { n: "2", title: "We Contact You", body: "Within 24 hours, we call or email with clear next steps and any questions we still need to answer." },
  { n: "3", title: "We Find Your Best Option", body: "We compare multiple top-rated carriers to land on the right coverage at the right price for you." },
];

const HealthInsurance = () => {
  return (
    <Layout>
      <Seo
        title="Health Insurance | Wood Insurance Agency"
        description="ACA marketplace, individual, family, short-term, HSA, and Medicare supplement plans. Independent local guidance for MS, AL, TN, and LA."
      />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Health Insurance</span>
            <h1 className="mt-4 text-white text-[40px] sm:text-[56px] font-bold leading-[1.05]">
              Your Health, Protected With Confidence
            </h1>
            <p className="mt-3 text-accent text-[22px] sm:text-[26px] font-semibold">
              Plain-English guidance. Top-rated carriers.
            </p>
            <p className="mt-5 text-white/85 text-[17px] leading-relaxed max-w-xl">
              Health insurance does not have to be confusing. We help families and individuals across Mississippi, Alabama, Tennessee, and Louisiana find the right coverage at the right price, then stay in your corner all year long.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
              <a href="tel:6014397230" className="btn-base btn-outline-white">
                <Phone className="w-4 h-4" aria-hidden /> Call (601) 439-7230
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-float p-7 lg:p-8 lg:justify-self-end w-full max-w-md">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[22px] font-bold text-ink">What's Included</h3>
              <span className="inline-flex items-center gap-1.5 bg-secondary/15 text-secondary text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Open Enrollment
              </span>
            </div>
            <p className="text-muted-foreground text-[14px] mt-1">Comprehensive coverage with a local advocate.</p>
            <ul className="mt-5 space-y-3">
              {INCLUDED.map((c) => (
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

      {/* Coverage Options */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Coverage Options</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Health Insurance Coverage Options</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Navigate the complex world of health insurance with expert guidance and personalized solutions tailored to where you are in life.
          </p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COVERAGE.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-accent-dark" aria-hidden />
              </div>
              <h3 className="text-[18px] font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
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

      {/* How We Help You Choose */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Our Process</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">How We Help You Choose</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">A simple three-step process designed around you, not a sales script.</p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative bg-white rounded-2xl p-7 shadow-card border border-border/60">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">{i + 1}</div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <h3 className="text-[20px] font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan Types Explained */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">Plans Explained</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Health Insurance Does Not Have To Be Confusing</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            A plain-English look at the most common plan types we help clients choose between.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {PLAN_TYPES.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl p-7 shadow-card border-t-4 border-accent border-x border-b border-border/60">
              <h3 className="text-[20px] font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-[14px] text-secondary font-semibold">Best for: <span className="text-muted-foreground font-normal">{a.bestFor}</span></p>
              <ul className="mt-4 space-y-2">
                {a.bullets.map((b) => (
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Why Wood Insurance</span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight">
              Independent, Local, and On Your Side
            </h2>
            <p className="mt-4 text-muted-foreground text-[17px] leading-relaxed">
              Cindy Wood has spent two decades helping families in Magee and across the South find health coverage that actually fits. Because we are independent, we are not tied to any single carrier and we are never in a hurry to sell you something. We are in this for the long haul.
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
              <Link to="/contact" className="btn-base btn-navy">Schedule Consultation</Link>
              <a href="tel:6014397230" className="btn-base btn-outline-navy">Call (601) 439-7230</a>
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

      {/* Open & Special Enrollment */}
      <section className="py-16 lg:py-20 bg-accent">
        <div className="container-wide grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-ink/10 text-ink text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Enrollment</span>
            <h2 className="mt-4 text-ink text-[32px] sm:text-[40px] font-bold leading-tight">
              Open Enrollment Is Not Your Only Window
            </h2>
            <p className="mt-4 text-ink/85 text-[17px] leading-relaxed">
              ACA Open Enrollment runs each fall, but life rarely waits for a calendar. A Qualifying Life Event opens a 60-day Special Enrollment Period so you can get covered when you need it most.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Check My Eligibility</Link>
              <a href="tel:6014397230" className="btn-base btn-outline-dark">Call (601) 439-7230</a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {LIFE_EVENTS.map((e) => (
              <div key={e.label} className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-card">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <e.icon className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <p className="text-[15px] font-semibold text-ink">{e.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">FAQs</span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground text-[17px] flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-secondary" aria-hidden />
              Real answers to the questions we hear most often.
            </p>
          </div>
          <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-card border border-border/60 px-6">
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">What's Next</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">What Happens After You Reach Out</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">No pressure, no surprises. Here is exactly what to expect.</p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {NEXT_STEPS.map((s) => (
            <div key={s.n} className="bg-surface rounded-2xl p-7 border border-border/60 text-center">
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
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Get a Health Quote in Minutes</h2>
          <p className="mt-3 text-white/80 text-[16px]">No pressure, no obligation. Just expert guidance from a local independent agent.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
            <a href="tel:6014397230" className="btn-base btn-outline-white">Call (601) 439-7230</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthInsurance;