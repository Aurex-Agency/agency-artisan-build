import { Link } from "react-router-dom";
import { Phone, ShieldCheck, PiggyBank, TrendingUp, FileText, Landmark, Check, ArrowRight, ClipboardCheck, Scale, BookOpen } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { TopoBackground } from "@/components/brand/TopoBackground";
import retirementHero from "@/assets/retirement-hero.jpg";

const SERVICES = [
  {
    icon: PiggyBank,
    title: "Annuities",
    body: "Guaranteed income for retirement through fixed, variable, and immediate annuity products. Protect your principal from market downturns.",
  },
  {
    icon: TrendingUp,
    title: "401(k) & IRA Rollovers",
    body: "Maximize your employer-sponsored retirement savings and safely roll over your 401(k) or IRA into secure, tax-advantaged accounts.",
  },
  {
    icon: Landmark,
    title: "Social Security Optimization",
    body: "Strategies to maximize your Social Security benefits, including benefit timing, spousal benefits, and survivor benefits.",
  },
  {
    icon: FileText,
    title: "Estate Planning Coordination",
    body: "Ensure your assets are protected and smoothly transferred to your beneficiaries without unnecessary tax burdens.",
  },
];

const INCLUDED = [
  "401(k) optimization strategies",
  "IRA management and rollovers",
  "Annuity planning and selection",
  "Social Security optimization",
  "Tax-efficient investing",
  "Estate planning coordination",
];

const RESOURCES = [
  {
    icon: ClipboardCheck,
    title: "Retirement Readiness Quiz",
    body: "Discover if you are on track for retirement.",
  },
  {
    icon: Scale,
    title: "Annuity Comparison Tool",
    body: "Find the perfect annuity type for your needs.",
  },
  {
    icon: BookOpen,
    title: "Social Security Guide",
    body: "Maximize your benefits and learn when to claim.",
  },
];

const Retirement = () => {
  return (
    <Layout>
      <Seo
        title="Retirement Planning & Annuities | Wood Insurance Agency"
        description="Secure your golden years with expert retirement planning and annuity advising from Wood Insurance Agency. Serving MS, AL, TN, and LA."
        path="/retirement"
      />

      {/* HERO */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <TopoBackground className="text-white" opacity={0.07} />
        <div className="container-wide relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center pt-14 pb-16 lg:pt-24 lg:pb-28">
          <div>
            <span className="eyebrow eyebrow-gold">Retirement Planning</span>
            <h1 className="display animate-hero-rise mt-4 text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] text-white text-balance">
              Secure Your <em className="italic text-accent">Golden Years.</em>
            </h1>
            <p className="animate-hero-rise mt-6 text-[17px] sm:text-[19px] text-white/85 max-w-xl leading-[1.65]" style={{ animationDelay: "60ms" }}>
              Build a secure retirement with comprehensive planning services. We will help you maximize your savings, protect your assets, and create a guaranteed income strategy for your financial future.
            </p>
            <div className="animate-hero-rise mt-8 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "120ms" }}>
              <Link to="/contact" className="btn-base btn-gold">Start Planning</Link>
              <Link to="/contact" className="btn-base btn-outline-white">Free Consultation</Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-white/10 max-w-[560px] mx-auto">
              <img
                src={retirementHero}
                alt="Happy retired couple walking together on the beach at sunset"
                width={1280}
                height={1280}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="eyebrow">Our Retirement Services</span>
            <h2 className="display mt-3 text-[30px] sm:text-[40px] text-primary leading-[1.05]">
              Comprehensive planning, tailored to your future.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {SERVICES.map(({ icon: Icon, title, body }) => (
              <article key={title} className="relative bg-white rounded-2xl border border-cream-deep shadow-card p-7 flex flex-col overflow-hidden">
                <span aria-hidden className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-accent-dark" />
                </div>
                <h3 className="display text-[22px] text-primary leading-tight">{title}</h3>
                <p className="mt-3 text-[16px] text-ink/80 leading-[1.6] flex-1">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — split */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-2">
          <div className="relative bg-primary-dark text-white px-6 sm:px-10 lg:px-16 py-16 lg:py-24 overflow-hidden">
            <TopoBackground className="text-white" opacity={0.06} />
            <div className="relative max-w-xl">
              <span className="eyebrow eyebrow-gold">Why Choose Us</span>
              <h2 className="display mt-4 text-[28px] sm:text-[38px] lg:text-[44px] text-white leading-[1.05]">
                Expert financial guidance for your future.
              </h2>
              <p className="mt-6 text-[17px] sm:text-[18px] text-white/85 leading-[1.7]">
                Planning for retirement can be overwhelming. We take the confusion out of the process by explaining your options in plain English. Whether you want to protect your nest egg from market volatility or ensure you never outlive your income, we have the tools and expertise to help.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-base btn-gold">
                  <ShieldCheck className="w-5 h-5" /> Get Your Free Plan Review
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-background px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <span className="eyebrow">What's Included</span>
            <h3 className="display mt-3 text-[24px] sm:text-[30px] text-primary leading-tight">
              A complete retirement strategy.
            </h3>
            <ul className="mt-7 space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="shrink-0 mt-1 w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-dark" strokeWidth={3} />
                  </span>
                  <span className="text-[17px] text-ink/85 leading-[1.55]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-muted py-20 lg:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="eyebrow">Free Resources</span>
            <h2 className="display mt-3 text-[28px] sm:text-[38px] text-primary leading-[1.05]">
              Free Retirement Planning Resources
            </h2>
            <p className="mt-4 text-[18px] text-ink/80">
              Access our expert-created tools and guides to help you plan for a secure retirement.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 -mx-5 sm:mx-0 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0">
            <div className="flex sm:grid sm:grid-cols-3 gap-6 px-5 sm:px-0">
              {RESOURCES.map(({ icon: Icon, title, body }) => (
                <article key={title} className="shrink-0 w-[280px] sm:w-auto bg-white rounded-2xl border border-cream-deep shadow-card p-7 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="display text-[20px] text-primary leading-tight">{title}</h3>
                  <p className="mt-3 text-[15px] text-ink/75 leading-[1.6] flex-1">{body}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-primary text-[15px] hover:text-primary-dark"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent">
        <div className="container-wide py-16 lg:py-20 text-center max-w-3xl mx-auto">
          <h2 className="display text-[30px] sm:text-[42px] lg:text-[48px] text-dark leading-[1.05]">
            Ready to Plan Your Retirement?
          </h2>
          <p className="mt-5 text-[18px] sm:text-[19px] text-dark/80 leading-[1.6]">
            Our retirement planning specialists are here to help you create a comprehensive strategy for a secure financial future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-base btn-navy">Schedule Free Consultation</Link>
            <a href="tel:6013972982" className="btn-base btn-outline-dark">
              <Phone className="w-5 h-5" /> Call (601) 397-2982
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retirement;