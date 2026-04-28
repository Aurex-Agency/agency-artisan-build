import { Phone, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { CTASection } from "@/components/CTASection";
import healthHero from "@/assets/health-hero.jpg";
import healthFamily from "@/assets/medicare-couple.jpg";
import healthDoctor from "@/assets/health-laptop.jpg";
import healthLaptop from "@/assets/health-laptop.jpg";

const ROWS = [
  {
    title: "ACA Marketplace Plans",
    body: "The Affordable Care Act Marketplace offers health insurance plans with income-based subsidies that can significantly lower your monthly premium. Many Mississippi residents qualify for subsidies that bring their premiums down to a very affordable level. We help you apply, compare plans, and enroll during the Open Enrollment Period (November 1 to January 15) or during a Special Enrollment Period if you qualify.",
    image: healthFamily,
    alt: "Couple reviewing paperwork looking relieved",
    reverse: false,
  },
  {
    title: "Individual and Family Health Plans",
    body: "If you are self-employed, between jobs, retiring before 65, or just need better coverage than what your employer offers, we can help you find an individual or family health plan that covers your preferred doctors and fits your monthly budget. We work with multiple carriers to compare your options side by side.",
    image: healthDoctor,
    alt: "Family at a doctor's office looking comfortable",
    reverse: true,
  },
  {
    title: "Short-Term Coverage",
    body: "If you need temporary coverage while waiting for Medicare eligibility, a new job's benefits to kick in, or another qualifying event, short-term health plans can bridge the gap. These plans are not a permanent solution, but they can protect you from catastrophic medical bills during a transition period.",
    image: healthLaptop,
    alt: "Person reviewing documents on a laptop at a desk",
    reverse: false,
  },
];

const COMPARE = [
  { row: "Number of Carriers", woods: "Dozens of top-rated carriers", captive: "One company only" },
  { row: "Cost to You", woods: "Always free", captive: "Free, but limited choice" },
  { row: "Personalized Advice", woods: "Sit-down review every time", captive: "Scripted product pitch" },
  { row: "Annual Plan Reviews", woods: "Yes, every single year", captive: "Rarely or never" },
];

const HealthInsurance = () => {
  return (
    <Layout>
      <Seo
        title="Health Insurance in Magee, MS | ACA Plans & Individual Coverage"
        description="Find affordable health insurance in Magee, Mississippi. Wood Insurance Agency shops multiple carriers to find the right ACA, individual, or family health plan for you. Call (601) 397-2982."
        keywords="health insurance Magee MS, ACA plans Mississippi, affordable health insurance Simpson County, individual health insurance Mississippi"
        path="/health-insurance"
      />

      {/* HERO */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-[55fr_45fr] min-h-[520px]">
          <div className="container-wide lg:max-w-none lg:pl-[max(2rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-16 py-16 lg:py-24 flex flex-col justify-center">
            <span className="eyebrow">Health Insurance</span>
            <h1 className="animate-hero-rise mt-3 text-[34px] sm:text-[44px] lg:text-[52px] text-balance">
              Health Coverage That Fits Your Life and Budget.
            </h1>
            <p className="animate-hero-rise mt-6 text-[19px] text-text max-w-xl" style={{ animationDelay: "60ms" }}>
              Finding the right health insurance in Mississippi does not have to be a headache. We compare options from multiple carriers to find coverage you can actually afford, with doctors you actually want to see.
            </p>
            <div className="animate-hero-rise mt-8 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "120ms" }}>
              <a href="tel:6013972982" className="btn-base btn-gold"><Phone className="w-5 h-5" /> Call (601) 397-2982</a>
              <Link to="/contact" className="btn-base btn-outline-navy">Request a Free Quote</Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <img src={healthHero} alt="Healthy active couple in their fifties walking outdoors" className="absolute inset-0 w-full h-full object-cover" width={1280} height={1280} />
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Coverage Options</span>
            <h2 className="mt-3 text-[32px] sm:text-[40px]">Plans Built Around Your Life.</h2>
          </div>
          <div className="space-y-20">
            {ROWS.map((row) => (
              <article key={row.title} className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2`}>
                <div className={row.reverse ? "lg:order-2" : ""}>
                  <img src={row.image} alt={row.alt} loading="lazy" width={1280} height={960} className="w-full h-[300px] lg:h-[420px] object-cover rounded-xl shadow-elevated" />
                </div>
                <div className={row.reverse ? "lg:order-1" : ""}>
                  <h3 className="text-[26px] sm:text-[32px]">{row.title}</h3>
                  <p className="mt-5 text-[18px] text-text">{row.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDEPENDENT ADVANTAGE / COMPARE */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="eyebrow">The Independent Advantage</span>
            <h2 className="mt-3 text-[30px] sm:text-[38px]">We Shop. You Save.</h2>
            <p className="mt-6 text-[18px] text-text">
              Unlike a captive agent who can only offer plans from one company, Wood Insurance Agency is an independent agency with access to multiple carriers. That means we can compare dozens of plans side by side and find the one that gives you the best coverage at the lowest price. And because agents are paid by the insurance companies, not by you, our help is completely free.
            </p>
            <p className="mt-5 text-[17px] italic text-muted-foreground">
              "Our services are completely free to you."
            </p>
          </div>
          <div>
            {/* Desktop: 3-column comparison table */}
            <div className="hidden md:block bg-background rounded-xl shadow-card border border-border overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-primary text-white text-sm font-semibold">
                <div className="p-4">Compare</div>
                <div className="p-4 text-center bg-primary-dark">Wood Insurance</div>
                <div className="p-4 text-center text-white/80">Captive Agent</div>
              </div>
              {COMPARE.map((c, i) => (
                <div key={c.row} className={`grid grid-cols-[1.4fr_1fr_1fr] items-center text-[15px] ${i % 2 ? "bg-muted" : "bg-background"}`}>
                  <div className="p-4 font-semibold text-dark">{c.row}</div>
                  <div className="p-4 text-center">
                    <div className="inline-flex items-center gap-2 text-secondary font-medium">
                      <Check className="w-5 h-5" strokeWidth={3} /> {c.woods}
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="inline-flex items-center gap-2 text-muted-foreground">
                      <X className="w-5 h-5" /> {c.captive}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: stacked comparison cards */}
            <div className="md:hidden flex flex-col gap-4">
              {COMPARE.map((c) => (
                <div key={c.row} className="bg-background rounded-xl shadow-card border border-border overflow-hidden">
                  <div className="bg-primary text-white px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.14em]">
                    {c.row}
                  </div>
                  <div className="p-5 border-b border-border flex items-start gap-3">
                    <div className="mt-0.5 w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-secondary" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-secondary">Wood Insurance</div>
                      <div className="mt-1 text-[15px] text-dark font-medium leading-snug">{c.woods}</div>
                    </div>
                  </div>
                  <div className="p-5 flex items-start gap-3 bg-muted/40">
                    <div className="mt-0.5 w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Captive Agent</div>
                      <div className="mt-1 text-[15px] text-text leading-snug">{c.captive}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Free Quote"
        headline="Let's Find the Right Health Plan for You."
        body="Call us or request a quote. We will compare your options and walk you through everything, at no cost to you."
        secondaryLabel="Request a Quote"
      />
    </Layout>
  );
};

export default HealthInsurance;