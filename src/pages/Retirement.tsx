import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Check, PiggyBank, TrendingUp, Landmark, Calculator, FileText, ClipboardList, BookOpen } from "lucide-react";

const INCLUDED = [
  "Annuity Planning",
  "401(k) Rollovers",
  "Social Security Optimization",
  "IRA Management",
];

const SERVICES = [
  {
    icon: TrendingUp,
    title: "401(k) Planning",
    body: "Review and optimize your workplace retirement account for retirement readiness.",
    bullets: ["Contribution strategy", "Investment allocation review", "Employer match maximization"],
  },
  {
    icon: Landmark,
    title: "IRA Management",
    body: "Traditional and Roth IRAs that fit your tax situation and retirement goals.",
    bullets: ["Traditional IRAs", "Roth IRAs", "SEP IRAs for self-employed"],
  },
  {
    icon: PiggyBank,
    title: "Annuities",
    body: "Protect your principal and create a guaranteed retirement income stream.",
    bullets: ["Fixed annuities", "Indexed annuities", "Lifetime income riders"],
  },
  {
    icon: Calculator,
    title: "Social Security Optimization",
    body: "Strategic claiming decisions that can mean tens of thousands in extra lifetime benefits.",
    bullets: ["Best age to claim", "Spousal benefit strategies", "Tax-efficient withdrawal order"],
  },
];

const RESOURCES = [
  { icon: ClipboardList, title: "Retirement Readiness Quiz", body: "A 5-minute quiz to see where you stand." },
  { icon: FileText, title: "Annuity Comparison Tool", body: "Side-by-side comparison of top annuity products." },
  { icon: BookOpen, title: "Retirement Planning Guide", body: "Free downloadable guide to retirement essentials." },
];

const Retirement = () => {
  return (
    <Layout>
      <Seo title="Retirement Planning & Annuities | Wood Insurance Agency" description="Annuities, 401(k) rollovers, IRA management, and Social Security optimization. Serving MS, AL, TN, and LA." />

      {/* Hero — gold */}
      <section className="bg-accent text-ink">
        <div className="container-wide py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-ink/10 text-ink text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Retirement</span>
            <h1 className="mt-4 text-ink text-[40px] sm:text-[56px] font-bold leading-[1.05]">
              Retirement Planning
            </h1>
            <p className="mt-3 text-ink/85 text-[22px] sm:text-[26px] font-semibold">
              Secure Your Golden Years.
            </p>
            <p className="mt-5 text-ink/80 text-[17px] leading-relaxed max-w-xl">
              Build wealth and guarantee retirement income with comprehensive planning. We help you protect your nest egg and convert savings into lifetime income.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Get Free Quote</Link>
              <a href="tel:6013972982" className="btn-base btn-outline-navy">Call (601) 397-2982</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-float p-7 lg:p-8 lg:justify-self-end w-full max-w-md">
            <h3 className="text-[22px] font-bold text-ink">What's Included</h3>
            <p className="text-muted-foreground text-[14px] mt-1">A complete retirement strategy.</p>
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

      {/* Services grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Retirement Services</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">From rollovers to lifetime income, we cover every step.</p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60 flex flex-col">
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

      {/* Free Resources */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">Free Resources</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">Tools and guides to help you plan with confidence.</p>
        </div>
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-7 shadow-card border border-border/60 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-ink">{r.title}</h3>
                <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{r.body}</p>
                <Link to="/contact" className="mt-3 inline-block text-[14px] font-semibold text-primary hover:text-accent-dark">
                  Request Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary-dark text-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Plan Your Retirement With Confidence</h2>
          <p className="mt-3 text-white/80 text-[16px]">No-obligation strategy session with a licensed advisor.</p>
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
