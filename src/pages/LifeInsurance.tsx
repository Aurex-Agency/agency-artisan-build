import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { CTASection } from "@/components/CTASection";
import lifeHero from "@/assets/life-hero.jpg";
import lifeHands from "@/assets/life-hands.jpg";

const CARDS = [
  {
    title: "Term Life Insurance",
    body: "Term life insurance provides coverage for a specific period of time, typically 10, 20, or 30 years. It is the most affordable type of life insurance and is ideal for protecting your family while you are paying off a mortgage, raising children, or building your retirement savings. If you pass away during the term, your beneficiaries receive a tax-free death benefit. If the term ends and you are still living, the policy simply expires.",
    ideal: "Families with young children. Homeowners with a mortgage. Anyone who needs maximum coverage at the lowest cost.",
  },
  {
    title: "Whole Life Insurance",
    body: "Whole life insurance provides permanent coverage that lasts your entire life, as long as you pay the premiums. Unlike term life, whole life builds cash value over time that you can borrow against if needed. Your premiums will never increase, and your death benefit is guaranteed. Whole life is a good fit for people who want lifelong protection and a savings component built into their policy.",
    ideal: "People who want permanent coverage. Those looking to build cash value over time. Estate planning needs.",
  },
  {
    title: "Final Expense Insurance",
    body: "Final expense insurance is a smaller whole life policy designed specifically to cover funeral costs, medical bills, and other end-of-life expenses. Policies typically range from $5,000 to $25,000 in coverage. Approval is usually straightforward, even for people with health issues, and premiums are fixed for life. This type of policy ensures your loved ones are not left with a financial burden during an already difficult time.",
    ideal: "Adults 50 and older. Anyone who wants to protect their family from funeral costs. People who may not qualify for larger policies.",
  },
];

const LifeInsurance = () => {
  return (
    <Layout>
      <Seo
        title="Life Insurance in Magee, MS | Term & Whole Life Policies"
        description="Protect your family's financial future with life insurance from Wood Insurance Agency in Magee, MS. Our team helps you find affordable term, whole life, and final expense coverage. Call (601) 397-2982."
        keywords="life insurance Magee MS, term life insurance Mississippi, final expense insurance Mississippi, whole life insurance Simpson County"
        path="/life-insurance"
      />

      {/* HERO */}
      <section className="bg-primary-dark text-white">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          <div className="container-wide lg:max-w-none lg:pl-[max(2rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-16 py-16 lg:py-24 flex flex-col justify-center">
            <span className="eyebrow eyebrow-gold">Life Insurance</span>
            <h1 className="animate-hero-rise mt-3 text-[34px] sm:text-[44px] lg:text-[52px] text-white text-balance">
              Secure Your Family's Financial Future.
            </h1>
            <p className="animate-hero-rise mt-6 text-[19px] text-white/90 max-w-xl" style={{ animationDelay: "60ms" }}>
              Life insurance is not about death. It is about making sure the people who depend on you are taken care of. We help you find the right policy at a price that fits your budget, without the pressure.
            </p>
            <div className="animate-hero-rise mt-8 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "120ms" }}>
              <a href="tel:6013972982" className="btn-base btn-gold"><Phone className="w-5 h-5" /> Call (601) 397-2982</a>
              <Link to="/contact" className="btn-base btn-outline-white">Get a Free Quote</Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <img src={lifeHero} alt="Grandfather and grandchild together in golden hour light" className="absolute inset-0 w-full h-full object-cover" width={1280} height={1280} />
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Policy Types</span>
            <h2 className="mt-3 text-[32px] sm:text-[40px]">Coverage for Every Stage of Life.</h2>
          </div>
          <div className="space-y-6">
            {CARDS.map((c) => (
              <article key={c.title} className="bg-background border border-border border-l-[6px] border-l-accent rounded-xl p-7 lg:p-10 shadow-card">
                <h3 className="text-[24px] sm:text-[28px]">{c.title}</h3>
                <p className="mt-4 text-[18px] text-text">{c.body}</p>
                <p className="mt-5 text-[16px] text-dark">
                  <span className="font-semibold text-secondary uppercase tracking-wider text-[13px] block mb-1">Ideal For</span>
                  {c.ideal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MS */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">Mississippi Reality</span>
            <h2 className="mt-3 text-[30px] sm:text-[38px]">The Average Funeral in Mississippi Costs Over $9,000.</h2>
            <p className="mt-6 text-[18px] text-text">
              Without life insurance, that cost falls entirely on your family at the worst possible moment. A simple final expense policy can cover those costs completely. And a term or whole life policy can do much more: pay off your mortgage, replace your income, fund your grandchildren's education, and give your family the time they need to grieve without financial pressure. The best time to get life insurance is before you need it. Rates are lower when you are younger and healthier.
            </p>
          </div>
          <div>
            <img src={lifeHands} alt="Older man's hands gently holding a young child's hands" loading="lazy" width={1280} height={960} className="w-full h-[360px] lg:h-[460px] object-cover rounded-xl shadow-elevated" />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="No Pressure. Ever."
        headline="Get a Confidential Life Insurance Quote."
        body="There is no obligation and no pressure. Just an honest conversation about what makes sense for your family."
        secondaryLabel="Request a Quote"
      />
    </Layout>
  );
};

export default LifeInsurance;