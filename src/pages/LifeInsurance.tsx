import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import {
  Check, Shield, ShieldCheck, HeartHandshake, Heart, Users, Home, GraduationCap,
  DollarSign, Coins, Clock, Award, Phone, HelpCircle, Sparkles, FileText, Baby, RotateCcw, PiggyBank,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const INCLUDED = [
  "Tax-free death benefit for your family",
  "Income replacement during working years",
  "Cash value accumulation options",
  "Convertible term policies",
  "Flexible premium structures",
  "Guaranteed insurability riders",
];

const QUICK_FACTS = [
  { label: "Coverage Starting At", value: "$15/mo" },
  { label: "Carriers Compared", value: "20+" },
  { label: "No Medical Exam", value: "Available" },
  { label: "Local Office", value: "Magee, MS" },
];

const COVERAGE = [
  {
    icon: Shield,
    title: "Term Life Insurance",
    body: "Affordable coverage for a set period. Perfect for income replacement during your working years.",
    bullets: ["Level premiums for 10-30 years", "Convertible to permanent later", "Highest coverage per dollar"],
  },
  {
    icon: ShieldCheck,
    title: "Whole Life Insurance",
    body: "Lifetime protection with cash value that grows tax-deferred year after year.",
    bullets: ["Guaranteed level premiums", "Builds cash value over time", "Potential annual dividends"],
  },
  {
    icon: Sparkles,
    title: "Universal Life Insurance",
    body: "Permanent coverage with the flexibility to adjust premiums and benefits as life changes.",
    bullets: ["Premium flexibility", "Adjustable death benefit", "Cash value growth options"],
  },
  {
    icon: HeartHandshake,
    title: "Final Expense Insurance",
    body: "Smaller policies designed to cover funeral, burial, and end-of-life costs without burdening loved ones.",
    bullets: ["Simplified underwriting", "Guaranteed acceptance options", "Fast approval process"],
  },
  {
    icon: FileText,
    title: "No-Medical-Exam Life",
    body: "Quick coverage with no needles and no waiting. A great fit for busy families and time-sensitive needs.",
    bullets: ["Health questions only", "Coverage in days, not weeks", "Up to $2 million available"],
  },
  {
    icon: Home,
    title: "Mortgage Protection",
    body: "Make sure your home stays in the family. Coverage sized to pay off your mortgage if the unexpected happens.",
    bullets: ["Term sized to your loan", "Decreasing or level options", "Living-benefit riders available"],
  },
];

const DIME = [
  { letter: "D", label: "Debt", body: "Credit cards, car loans, and other balances you would not want left behind." },
  { letter: "I", label: "Income", body: "Replace 7-10 years of income so your family can keep their lifestyle." },
  { letter: "M", label: "Mortgage", body: "Enough to pay off the home so the house stays with the people in it." },
  { letter: "E", label: "Education", body: "College or trade school for the kids, fully funded, no student loans." },
];

const COMPARE = [
  {
    title: "Term Life",
    bestFor: "Young families, mortgages, and income replacement.",
    bullets: [
      "Lowest cost for the highest coverage",
      "Coverage for a set period (10, 20, or 30 years)",
      "No cash value, pure protection",
      "Often convertible to permanent later",
    ],
    tone: "navy" as const,
  },
  {
    title: "Permanent Life",
    bestFor: "Lifelong protection, estate planning, and tax-advantaged growth.",
    bullets: [
      "Coverage that lasts your entire life",
      "Builds tax-deferred cash value",
      "Premiums that never increase",
      "Living benefits you can borrow against",
    ],
    tone: "gold" as const,
  },
];

const SERVICE_BENEFITS = [
  "Term and permanent life options",
  "No medical exam policies",
  "Convertible term policies",
  "Cash value accumulation",
  "Beneficiary change flexibility",
  "Accelerated death benefit riders",
];

const WHY = [
  { icon: Award, title: "Licensed Professional", body: "Cindy is a licensed independent agent with two decades of experience guiding families through life insurance decisions." },
  { icon: Clock, title: "Quick Response Time", body: "When you call, you get a real person. Most inquiries get a same-day answer." },
  { icon: Users, title: "Personal Service", body: "We are a local, family-owned agency. You are a name and a story, never a policy number." },
  { icon: ShieldCheck, title: "Multiple Carrier Options", body: "Because we are independent, we shop top-rated carriers to find the best fit for your family and budget." },
];

const RIDERS = [
  { icon: Heart, title: "Accelerated Death Benefit", body: "Access part of your benefit early if you are diagnosed with a qualifying terminal or chronic illness." },
  { icon: Shield, title: "Waiver of Premium", body: "Keeps your policy in force without payments if you become disabled and cannot work." },
  { icon: Baby, title: "Child or Spouse Term", body: "Add affordable term coverage for your spouse or children to a single policy." },
  { icon: RotateCcw, title: "Return of Premium", body: "Get every dollar of your premiums back at the end of the term if no claim is made." },
];

const FAQS = [
  {
    q: "How much life insurance do I need?",
    a: "A common rule of thumb is 10 to 12 times your annual income, but the DIME method (Debt, Income, Mortgage, Education) gives you a much more accurate number. We walk you through it free of charge in about ten minutes.",
  },
  {
    q: "Should I choose term or whole life?",
    a: "Term gives you the most coverage for the lowest cost during your working years. Whole life gives you lifelong protection plus cash value. Many families use a mix of both, and we will tell you straight what makes sense for you.",
  },
  {
    q: "Do I need a medical exam?",
    a: "Not always. Many of our top carriers now offer no-exam policies up to $2 million for healthy applicants. We start there and only escalate to a paramedical exam if it gets you a better rate.",
  },
  {
    q: "Can I have more than one policy?",
    a: "Yes, and many families do. A larger term policy for the working years stacked with a smaller permanent policy for lifelong protection is one of the most cost-effective strategies we recommend.",
  },
  {
    q: "What if my health changes later?",
    a: "That is exactly why we lock rates in early. Once your policy is issued, your health cannot raise your premium. Convertible term policies also let you switch to permanent coverage later without a new medical exam.",
  },
  {
    q: "How much does your service cost?",
    a: "Our life insurance services are completely free to you. We are paid by the carriers when you choose a policy, so our guidance never costs you out of pocket.",
  },
];

const NEXT_STEPS = [
  { n: "1", title: "We Review Your Information", body: "Our team reviews your needs and prepares personalized policy options before we ever pick up the phone." },
  { n: "2", title: "We Contact You", body: "Within 24 hours, we call or email with clear next steps and any questions we still need to answer." },
  { n: "3", title: "We Find Your Best Option", body: "We compare multiple top-rated carriers to land on the right policy at the right price for your family." },
];

const LifeInsurance = () => {
  return (
    <Layout>
      <Seo
        title="Life Insurance | Wood Insurance Agency"
        description="Term, whole, universal, final expense, and no-exam life insurance from 20+ top-rated carriers. Independent local guidance for MS, AL, TN, and LA."
      />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Life Insurance</span>
            <h1 className="mt-4 text-white text-[40px] sm:text-[56px] font-bold leading-[1.05]">
              Protect the People You Love
            </h1>
            <p className="mt-3 text-accent text-[22px] sm:text-[26px] font-semibold">
              Tax-free protection. Cash value that grows. Peace of mind that lasts.
            </p>
            <p className="mt-5 text-white/85 text-[17px] leading-relaxed max-w-xl">
              Life insurance is one of the most caring financial decisions you can make. We help families across Mississippi, Alabama, Tennessee, and Louisiana find the right coverage at the right price, then stay in your corner for the life of the policy.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-white">
                <Phone className="w-4 h-4" aria-hidden /> Call (601) 397-2982
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-float p-7 lg:p-8 lg:justify-self-end w-full max-w-md">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[22px] font-bold text-ink">What's Included</h3>
              <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent-dark text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                <Coins className="w-3 h-3" aria-hidden /> Starts at $15/mo
              </span>
            </div>
            <p className="text-muted-foreground text-[14px] mt-1">Real protection with a local advocate.</p>
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
            <Link to="/contact" className="btn-base btn-navy w-full mt-6">Calculate My Needs</Link>
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
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Life Insurance Built Around Your Family</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            From affordable term to lifelong cash value, we shop 20+ top-rated carriers to match the right policy to the people who depend on you.
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

      {/* DIME / How Much */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">How Much Coverage</span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight">
              How Much Life Insurance Do You Need?
            </h2>
            <p className="mt-4 text-muted-foreground text-[17px] leading-relaxed">
              We use the DIME method to size your policy in plain English: Debt, Income, Mortgage, and Education. It is a simple way to make sure your family is fully covered without paying for protection you do not need.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Get a Personalized Estimate</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-navy">Call (601) 397-2982</a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DIME.map((d) => {
              const Icon = d.letter === "D" ? DollarSign : d.letter === "I" ? Users : d.letter === "M" ? Home : GraduationCap;
              return (
                <div key={d.letter} className="bg-white rounded-2xl p-6 shadow-card border border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-[18px]">
                      {d.letter}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-ink">{d.label}</h3>
                      <Icon className="w-4 h-4 text-secondary" aria-hidden />
                    </div>
                  </div>
                  <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Term vs Permanent */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">Term vs Permanent</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Two Paths, One Decision</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Most life insurance comes down to a choice between term and permanent. Here is what each one is really for.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          {COMPARE.map((c) => {
            const isGold = c.tone === "gold";
            return (
              <div
                key={c.title}
                className={`rounded-2xl p-8 shadow-card border-t-4 border-x border-b border-border/60 bg-white ${
                  isGold ? "border-t-accent" : "border-t-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isGold ? "bg-accent/15" : "bg-primary/10"}`}>
                    {isGold ? <PiggyBank className="w-6 h-6 text-accent-dark" aria-hidden /> : <Shield className="w-6 h-6 text-primary" aria-hidden />}
                  </div>
                  <h3 className="text-[24px] font-bold text-ink">{c.title}</h3>
                </div>
                <p className="mt-3 text-[14px] font-semibold text-secondary">
                  Best for: <span className="text-muted-foreground font-normal">{c.bestFor}</span>
                </p>
                <ul className="mt-5 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[15px] text-ink">
                      <Check className="w-4 h-4 text-secondary mt-1 shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
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
              Cindy Wood has spent two decades helping families in Magee and across the South protect what they have built. Because we are independent, we are not tied to any single carrier and we are never in a hurry to sell you something. We are in this for the long haul.
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

      {/* Riders */}
      <section className="py-16 lg:py-20 bg-accent">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-ink/10 text-ink text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Riders & Add-Ons</span>
          <h2 className="mt-4 text-ink text-[32px] sm:text-[40px] font-bold leading-tight">Make Your Policy Work Even Harder</h2>
          <p className="mt-3 text-ink/80 text-[17px]">
            Riders are optional add-ons that customize a policy to your life. These are the ones we recommend most often.
          </p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RIDERS.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-6 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <r.icon className="w-5 h-5 text-primary" aria-hidden />
              </div>
              <h3 className="text-[16px] font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
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
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Get a Life Quote in Minutes</h2>
          <p className="mt-3 text-white/80 text-[16px]">No pressure, no obligation. Just expert guidance from a local independent agent.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Get Free Quote</Link>
            <a href="tel:6013972982" className="btn-base btn-outline-white">Call (601) 397-2982</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LifeInsurance;