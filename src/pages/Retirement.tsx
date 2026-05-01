import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import {
  Check, PiggyBank, TrendingUp, Landmark, Calculator, FileText, ClipboardList,
  BookOpen, ShieldCheck, Scale, Users, Clock, Award, HelpCircle, Search, PenTool, Rocket,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const INCLUDED = [
  "401(k) optimization strategies",
  "IRA management and rollovers",
  "Annuity planning and selection",
  "Social Security optimization",
  "Tax-efficient investing",
  "Estate planning coordination",
];

const QUICK_FACTS = [
  { label: "Years Helping Families", value: "20+" },
  { label: "Carriers Compared", value: "Multiple" },
  { label: "Local Office", value: "Magee, MS" },
  { label: "Service Area", value: "MS · AL · TN · LA" },
];

const SERVICES = [
  {
    icon: TrendingUp,
    title: "401(k) Planning",
    body: "Make the most of your workplace retirement account before and after you leave your employer.",
    bullets: ["Contribution strategy", "Investment allocation review", "Employer match maximization"],
  },
  {
    icon: Landmark,
    title: "IRA Management",
    body: "Traditional, Roth, and SEP IRAs structured around your tax picture and retirement timeline.",
    bullets: ["Traditional IRAs", "Roth IRAs", "SEP IRAs for self-employed"],
  },
  {
    icon: PiggyBank,
    title: "Annuities",
    body: "Protect your principal and turn savings into a guaranteed income stream you cannot outlive.",
    bullets: ["Fixed annuities", "Fixed indexed annuities", "Lifetime income riders"],
  },
  {
    icon: Calculator,
    title: "Social Security Optimization",
    body: "Smart claiming decisions can mean tens of thousands in extra lifetime benefits for you and your spouse.",
    bullets: ["Best age to claim", "Spousal and survivor benefits", "Tax-efficient withdrawal order"],
  },
  {
    icon: Scale,
    title: "Tax-Efficient Investing",
    body: "Coordinate accounts and withdrawals so more of your savings stays in your pocket every year.",
    bullets: ["Roth conversion planning", "Asset location strategy", "RMD planning"],
  },
  {
    icon: ShieldCheck,
    title: "Estate Planning Coordination",
    body: "Pass what you have built to the people you love with clarity, not confusion.",
    bullets: ["Beneficiary reviews", "Legacy planning", "Coordination with your attorney"],
  },
];

const STEPS = [
  { icon: Search, title: "Discover", body: "We start with a friendly conversation about your goals, income needs, and where your money lives today." },
  { icon: PenTool, title: "Design", body: "We build a custom strategy across savings, lifetime income, taxes, and legacy, in plain English." },
  { icon: Rocket, title: "Deliver", body: "We help you implement, then meet annually to keep your plan in step with life and the markets." },
];

const ANNUITIES = [
  {
    title: "Fixed Annuities",
    bestFor: "Savers who want safety and a guaranteed rate.",
    bullets: ["Principal protection", "Predictable, locked-in interest", "Tax-deferred growth"],
  },
  {
    title: "Fixed Indexed Annuities",
    bestFor: "Growth potential with no market losses.",
    bullets: ["Linked to an index, never invested in it", "Zero is your floor", "Optional income riders"],
  },
  {
    title: "Immediate & Income Annuities",
    bestFor: "Retirees who need a paycheck for life.",
    bullets: ["Income that starts right away", "Single or joint life options", "Inflation adjustments available"],
  },
];

const WHY = [
  { icon: Award, title: "Licensed Professional", body: "Cindy is a licensed independent agent with two decades of experience guiding families through retirement decisions." },
  { icon: Clock, title: "Quick Response Time", body: "When you call, you get a real person. Most inquiries get a same-day answer." },
  { icon: Users, title: "Personal Service", body: "We are a local, family-owned agency. You are a name and a story, never a policy number." },
  { icon: ShieldCheck, title: "Multiple Carrier Options", body: "Because we are independent, we shop top-rated carriers to find the best fit for your goals and budget." },
];

const RESOURCES = [
  { icon: ClipboardList, title: "Retirement Readiness Quiz", body: "See if you are on track in just two minutes. Get a personalized score and action plan." },
  { icon: Calculator, title: "Retirement Income Calculator", body: "Project your monthly income in retirement based on your savings and timeline." },
  { icon: FileText, title: "Annuity Comparison Tool", body: "Compare the most common annuity types side by side to find the right fit." },
  { icon: BookOpen, title: "Retirement Planning Checklist", body: "A complete checklist for every stage of life so nothing slips through the cracks." },
  { icon: PiggyBank, title: "Annuity Selection Guide", body: "Learn how each annuity type works and how to choose the right one for your goals." },
  { icon: TrendingUp, title: "Social Security Optimization Guide", body: "Maximize your benefits with claiming strategies, spousal tactics, and tax planning." },
];

const FAQS = [
  {
    q: "When should I start retirement planning?",
    a: "The honest answer is yesterday, but the best answer is today. Whether you are 35 or 65, there is always a smart next step we can take together.",
  },
  {
    q: "What is the difference between a 401(k) and an IRA?",
    a: "A 401(k) is offered through your employer with higher contribution limits and often a match. An IRA is opened on your own and gives you more investment flexibility. Most people benefit from using both.",
  },
  {
    q: "Are annuities a good idea?",
    a: "For the right person, absolutely. Annuities are not for everyone, but if you want a paycheck you cannot outlive or growth without market risk, they can be a powerful tool. We will tell you straight if it is not the right fit.",
  },
  {
    q: "When should I claim Social Security?",
    a: "It depends on your health, marital status, other income, and tax picture. Claiming early can cost you tens of thousands over a lifetime. We help you run the numbers before you decide.",
  },
  {
    q: "Do I need to roll over my old 401(k)?",
    a: "Not always, but rolling it into an IRA often gives you better investment choices and easier coordination with the rest of your plan. We walk you through the pros and cons of each option.",
  },
  {
    q: "How much does your service cost?",
    a: "Our retirement and insurance services are free to you. We are paid by the carriers when you choose a product, so our guidance never costs you out of pocket.",
  },
];

const NEXT_STEPS = [
  { n: "1", title: "We Review Your Information", body: "Our team reviews your goals and prepares personalized options before we ever pick up the phone." },
  { n: "2", title: "We Contact You", body: "Within 24 hours, we call or email with clear next steps and any questions we still need to answer." },
  { n: "3", title: "We Find Your Best Option", body: "We compare multiple top-rated carriers to land on the right strategy for your retirement." },
];

const Retirement = () => {
  return (
    <Layout>
      <Seo
        title="Retirement Planning & Annuities | Wood Insurance Agency"
        description="Comprehensive retirement planning across 401(k) rollovers, IRAs, annuities, Social Security, and estate planning. Independent local guidance for MS, AL, TN, and LA."
      />

      {/* Hero */}
      <section className="bg-accent text-ink">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-ink/10 text-ink text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Retirement Planning</span>
            <h1 className="mt-4 text-ink text-[40px] sm:text-[56px] font-bold leading-[1.05]">
              Secure Your Golden Years
            </h1>
            <p className="mt-3 text-ink/85 text-[22px] sm:text-[26px] font-semibold">
              Lifetime income. Tax-smart strategy. Local guidance.
            </p>
            <p className="mt-5 text-ink/80 text-[17px] leading-relaxed max-w-xl">
              Build a retirement plan you can actually rely on. We help families across Mississippi, Alabama, Tennessee, and Louisiana protect their nest egg, optimize Social Security, and turn savings into income that lasts.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Start Planning</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-navy">Free Consultation</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-float p-7 lg:p-8 lg:justify-self-end w-full max-w-md">
            <h3 className="text-[22px] font-bold text-ink">What's Included</h3>
            <p className="text-muted-foreground text-[14px] mt-1">A complete, coordinated retirement strategy.</p>
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
            <Link to="/contact" className="btn-base btn-navy w-full mt-6">Get My Plan</Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-primary text-white">
        <div className="container-wide py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_FACTS.map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-accent text-[28px] sm:text-[32px] font-bold leading-none">{f.value}</div>
              <div className="mt-2 text-white/80 text-[13px] uppercase tracking-wider">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Our Services</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Retirement Planning Services</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            From rollovers to lifetime income, we coordinate every piece of your retirement so it works as one plan, not six disconnected accounts.
          </p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
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

      {/* How We Build Your Plan */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Our Process</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">How We Build Your Plan</h2>
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

      {/* Annuity Types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent-dark text-[12px] font-semibold uppercase tracking-wider mb-2">Annuities Explained</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Not All Annuities Are Created Equal</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Here is a plain-English look at the most common types we help clients choose between.
          </p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {ANNUITIES.map((a) => (
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
              Cindy Wood has spent two decades helping families in Magee and across the South step into retirement with confidence. Because we are independent, we are not tied to any single carrier, and we are not in a hurry to sell you something. We are in this for the long haul.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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

      {/* Free Resources */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary text-[12px] font-semibold uppercase tracking-wider mb-2">Free Resources</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Free Retirement Planning Resources</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">
            Expert tools and guides to help you plan with confidence. All resources are completely free, just send us a quick note to get started.
          </p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-ink">{r.title}</h3>
                <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{r.body}</p>
                <Link to="/contact" className="mt-3 inline-block text-[14px] font-semibold text-primary hover:text-accent-dark">
                  Get Started →
                </Link>
              </div>
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
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Plan Your Retirement With Confidence</h2>
          <p className="mt-3 text-white/80 text-[16px]">Book a no-obligation strategy session with a licensed local advisor today.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Book My Session</Link>
            <a href="tel:6013972982" className="btn-base btn-outline-white">Call (601) 397-2982</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retirement;
