import { Link } from "react-router-dom";
import { Phone, Star, ArrowRight, ShieldCheck, FileText, Pill, Award, MapPin, Users, Quote, Calendar, Clock, Stethoscope, HeartHandshake } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { QuoteForm } from "@/components/QuoteForm";
import { Marquee } from "@/components/brand/Marquee";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { TopoBackground } from "@/components/brand/TopoBackground";
import { StatTile } from "@/components/brand/StatTile";
import { Polaroid } from "@/components/brand/Polaroid";
import portrait from "@/assets/photos/office-hero.jpg";
import storefront from "@/assets/photos/office-reception.jpg";

const CARRIERS = ["Humana", "Aetna", "UnitedHealthcare", "Cigna", "Mutual of Omaha", "Anthem", "Wellcare", "Blue Cross"];

const MEDICARE_OPTIONS = [
  {
    icon: ShieldCheck,
    label: "Part C",
    title: "Medicare Advantage",
    body: "Combines your hospital, medical, and often prescription drug coverage into one plan, frequently with extra benefits like dental and vision.",
    cta: "Explore Advantage Plans",
    href: "/medicare#advantage",
  },
  {
    icon: FileText,
    label: "Medigap",
    title: "Medicare Supplement",
    body: "Helps pay some of the healthcare costs that Original Medicare does not cover, like copayments, coinsurance, and deductibles.",
    cta: "Explore Supplements",
    href: "/medicare#supplement",
  },
  {
    icon: Pill,
    label: "Part D",
    title: "Prescription Drug Coverage",
    body: "Helps cover the cost of your prescription medications. We will review your current prescriptions to find the most cost-effective plan.",
    cta: "Review Drug Plans",
    href: "/medicare#partd",
  },
];

const REVIEWS = [
  { quote: "We had a delightful experience at Wood Insurance Agency. Not only was Cindy nice and friendly, she was able to explain details we could understand about our policies.", name: "Linda Downing", place: "Google Review", rotate: -2.5 },
  { quote: "Mrs. Cindy is so helpful. She goes out of her way to help you and genuinely cares for people. This insurance is such a blessing. Medicine is free or near nothing. So excited.", name: "Sharon Caves", place: "Google Review", rotate: 1.5 },
  { quote: "Excellent service! Cindy always goes the extra mile for her customers. Very knowledgeable. Brings a personal quality to her service. Highly recommend.", name: "Sherry Hylender", place: "Google Review", rotate: -1.5 },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Wood Insurance Agency | Medicare, Health & Life Insurance in Magee, MS"
        description="Wood Insurance Agency is your local independent insurance agency in Magee, MS. Our team helps with Medicare, health insurance, and life insurance. Serving Simpson County and all of Mississippi. Call (601) 397-2982."
        keywords="Medicare agent Magee MS, health insurance Magee Mississippi, life insurance Simpson County MS, independent insurance agent Magee"
        path="/"
      />

      {/* HERO */}
      <section className="relative bg-cream overflow-hidden">
        <TopoBackground className="text-primary" opacity={0.05} />
        <div className="container-wide grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center pt-10 pb-14 lg:pt-20 lg:pb-24 relative">
          <div>
            <span className="eyebrow">Local Medicare Expert · Magee, MS</span>
            <h1 className="display animate-hero-rise mt-4 sm:mt-5 text-[36px] sm:text-[54px] lg:text-[66px] xl:text-[74px] leading-[1] sm:leading-[0.98] tracking-[-0.035em] text-primary text-balance">
              Speak with a local <em className="italic text-secondary-deep">Medicare expert</em> in Magee, MS.
            </h1>
            <p className="animate-hero-rise mt-5 sm:mt-7 text-[17px] sm:text-[19px] lg:text-[20px] text-ink/80 max-w-xl leading-[1.55] sm:leading-[1.6]" style={{ animationDelay: "60ms" }}>
              Turning 65? Confused by the alphabet soup of Medicare? Get a FREE, no-obligation Medicare Plan Review from your local independent agent. We shop over 20 top-rated carriers so you do not have to.
            </p>

            <div className="animate-hero-rise mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: "120ms" }}>
              <Link to="/contact" className="btn-base btn-gold">
                Get Your Free Medicare Review
              </Link>
              <Link to="/medicare" className="btn-base btn-outline-navy">Learn About Medicare 101</Link>
            </div>

            {/* Trust row: rating + badges */}
            <div className="animate-hero-rise mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5" style={{ animationDelay: "180ms" }}>
              <div className="flex items-center gap-2">
                <div className="flex" aria-label="5 of 5 stars">{[0,1,2,3,4].map((i) => <Star key={i} className="w-[18px] h-[18px] fill-accent text-accent" />)}</div>
                <span className="text-[14px] font-semibold text-ink">5.0 from local families</span>
              </div>
              <span aria-hidden className="hidden sm:inline-block w-px h-5 bg-ink/15" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                <span className="inline-flex items-center gap-1.5"><Award className="w-4 h-4 text-secondary" /> Licensed in MS</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-secondary" /> Magee, MS</span>
                <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-secondary" /> Independent Agents</span>
              </div>
            </div>
          </div>

          {/* Photo + floating proof tiles */}
          <div className="relative">
            <div className="relative w-full max-w-[520px] mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-ink/5">
                <img
                  src={portrait}
                  alt="The Wood Insurance Agency team welcoming clients at the front desk of the Magee, MS office"
                  className="w-full aspect-[5/4] object-cover"
                />
                {/* Subtle bottom gradient for legibility */}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent" />
                {/* On-image caption */}
                <div className="absolute left-5 bottom-4 right-5 text-white">
                  <p className="font-display text-[18px] sm:text-[20px] leading-tight">Stop in. We'll put on the coffee.</p>
                  <p className="text-[13px] text-white/85 mt-0.5">Wood Insurance Agency · Highway 149, Magee</p>
                </div>
              </div>

              {/* Floating credibility tile - top left */}
              <div className="hidden sm:flex absolute -top-4 -left-4 lg:-left-6 bg-white rounded-xl shadow-elevated px-4 py-3 items-center gap-3 ring-1 ring-ink/5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-[18px] text-primary">A+</div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink/65">Local reputation</div>
                </div>
              </div>

              {/* Floating credibility tile - bottom right */}
              <div className="absolute -bottom-5 right-2 sm:-right-4 lg:-right-6 bg-white rounded-xl shadow-elevated px-4 py-3 flex items-center gap-3 ring-1 ring-ink/5">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent-dark" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-[18px] text-primary">20+ carriers</div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-ink/65">Shopped for you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARRIER MARQUEE */}
      <section className="bg-cream-deep border-y border-cream-deep py-7">
        <div className="container-wide flex items-center gap-8">
          <span className="hidden md:inline-block eyebrow shrink-0">We shop</span>
          <Marquee items={CARRIERS} className="flex-1" />
        </div>
      </section>

      {/* MEDICARE OPTIONS */}
      <section id="medicare-options" className="relative bg-background py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Your Medicare Options"
            title="The Alphabet Soup of Medicare, Explained."
            underlinedWord="Explained"
            intro="Three plan types, broken down in plain English by your local independent agent."
          />
          <div className="mt-12 lg:mt-16 grid md:grid-cols-3 gap-7">
            {MEDICARE_OPTIONS.map(({ icon: Icon, label, title, body, cta, href }) => (
              <article key={title} className="group relative bg-cream rounded-2xl overflow-hidden flex flex-col shadow-card hover:shadow-elevated transition-shadow border border-cream-deep">
                <div className="p-8 lg:p-9 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">{label}</span>
                  <h3 className="display text-[26px] sm:text-[30px] leading-[1.1] text-primary mt-2">{title}</h3>
                  <p className="mt-4 text-[17px] text-ink/80 flex-1 leading-[1.6]">{body}</p>
                  <Link to={href} className="mt-7 inline-flex items-center justify-center gap-2 btn-base btn-outline-navy !min-h-[46px] !text-[14px] !px-5">
                    {cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TURNING 65 URGENCY */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <TopoBackground className="text-white" opacity={0.07} />
        <div className="container-wide py-16 lg:py-24 relative grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow eyebrow-gold">Turning 65?</span>
            <h2 className="display mt-4 text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.05] text-white tracking-[-0.02em]">
              Turning 65 Soon?
              <br />
              <em className="italic text-accent">Do Not Miss Your Window.</em>
            </h2>
            <p className="mt-6 text-[17px] sm:text-[19px] text-white/85 leading-[1.65] max-w-2xl">
              You have a 7-month Initial Enrollment Period to sign up for Medicare without penalties (3 months before your birthday month, the month of, and 3 months after). Let us handle the paperwork and compare plans from top carriers like Humana, Aetna, and UnitedHealthcare for you. Our help is 100% free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-base btn-gold">
                <Calendar className="w-5 h-5" /> Schedule Your Turning 65 Consultation
              </Link>
              <a href="tel:6013972982" className="btn-base btn-outline-white">
                <Phone className="w-5 h-5" /> (601) 397-2982
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              { v: "3 mo", l: "Before birthday" },
              { v: "1 mo", l: "Of birthday" },
              { v: "3 mo", l: "After birthday" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="display text-[34px] leading-none text-accent">{s.v}</div>
                  <div className="text-[12px] uppercase tracking-[0.18em] text-white/75 mt-1">{s.l}</div>
                </div>
                <Clock className="w-7 h-7 text-white/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH & LIFE — secondary */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Beyond Medicare</span>
            <h2 className="display mt-3 text-[28px] sm:text-[36px] text-primary leading-tight">
              Other Ways We Protect Your Family
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-cream border border-cream-deep rounded-2xl p-7 lg:p-8 flex flex-col">
              <div className="flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-secondary" />
                <h3 className="display text-[22px] text-primary">Health Insurance</h3>
              </div>
              <p className="mt-4 text-[16px] text-ink/80 leading-[1.6] flex-1">
                Need coverage before you turn 65? We shop the ACA Marketplace and private carriers to find affordable individual and family health plans.
              </p>
              <Link to="/health-insurance" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary text-[15px] hover:text-primary-dark">
                Explore health plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-cream border border-cream-deep rounded-2xl p-7 lg:p-8 flex flex-col">
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-6 h-6 text-secondary" />
                <h3 className="display text-[22px] text-primary">Life Insurance</h3>
              </div>
              <p className="mt-4 text-[16px] text-ink/80 leading-[1.6] flex-1">
                Protect the people who depend on you. We offer term, whole life, and final expense policies tailored to your budget, without the hard sell.
              </p>
              <Link to="/life-insurance" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary text-[15px] hover:text-primary-dark">
                Explore life policies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="relative bg-canopy text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 leaf-pattern opacity-20" />
        <TopoBackground className="text-white" opacity={0.08} />
        <div className="container-wide py-14 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center relative">
          <div>
            <span className="eyebrow eyebrow-gold">Why Wood Insurance</span>
            <h2 className="display mt-4 sm:mt-5 text-[32px] sm:text-[44px] lg:text-[58px] leading-[1.05] sm:leading-[1] text-white tracking-[-0.02em]">
              Big city options.
              <br />
              <em className="italic text-accent">Small town</em> handshakes.
            </h2>
            <p className="mt-5 sm:mt-7 text-[16px] sm:text-[18px] lg:text-[19px] text-white/85 leading-[1.6] sm:leading-[1.7] max-w-2xl">
              Unlike out-of-state call centers, we sit right here on Highway 149. We answer our own phones. We know Simpson General and the local networks. We sit down face to face and review your policies every year, because that's what neighbors do.
            </p>

            {/* Mobile: clean inline stats. Desktop: full StatTile grid */}
            <div className="mt-8 sm:hidden divide-y divide-white/15 border-y border-white/15">
              {[
                { v: "100%", l: "Free to you" },
                { v: "20+", l: "Carriers shopped" },
                { v: "1:1", l: "Face-to-face" },
              ].map((s) => (
                <div key={s.l} className="flex items-baseline justify-between py-3.5">
                  <span className="display text-[34px] leading-none text-accent">{s.v}</span>
                  <span className="text-[13px] uppercase tracking-[0.16em] text-white/80">{s.l}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 hidden sm:grid grid-cols-3 gap-4 max-w-xl">
              <StatTile value="100%" label="Free to you" tone="cream" />
              <StatTile value="20+" label="Carriers shopped" tone="cream" />
              <StatTile value="1:1" label="Face-to-face" tone="cream" />
            </div>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to="/about" className="btn-base btn-gold">About our agency</Link>
              <span className="font-script text-accent text-[24px] sm:text-[28px] leading-none">from your neighbors in Magee</span>
            </div>
          </div>
          <div className="relative mt-2 lg:mt-0">
            <Polaroid src={storefront} alt="Wood Insurance Agency office on Highway 149 in Magee, MS at golden hour" caption="Come on by." rotate={-3} className="max-w-[300px] sm:max-w-[440px] mx-auto" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-cream py-14 lg:py-28 paper-grain">
        <div className="container-wide relative">
          <SectionHeading eyebrow="Kind words" title="Don't just take our word for it." underlinedWord="word" intro="Real families across Simpson County and the state of Mississippi." />

          {/* Mobile: big stacked review cards */}
          <div className="mt-10 flex flex-col gap-6 md:hidden">
            {REVIEWS.map((r, i) => (
              <article key={i} className="bg-white rounded-2xl shadow-card border border-cream-deep p-6">
                <div className="flex gap-1 mb-4" aria-label="5 of 5 stars">
                  {[0,1,2,3,4].map((s) => <Star key={s} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <blockquote className="font-display italic text-[20px] leading-[1.45] text-ink/90">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-5 border-t border-cream-deep">
                  <div className="font-display text-[18px] text-primary">{r.name}</div>
                  <div className="text-[12px] uppercase tracking-[0.18em] text-ink/60 mt-1">{r.place}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop: clean three-up testimonial cards */}
          <div className="mt-14 hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                className="relative bg-white rounded-2xl shadow-card border border-cream-deep p-7 lg:p-8 flex flex-col"
              >
                <Quote aria-hidden className="absolute -top-3 left-7 w-8 h-8 text-accent fill-accent bg-cream rounded-full p-1.5 shadow-sm" />
                <div className="flex gap-1 mb-5" aria-label="5 of 5 stars">
                  {[0,1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <blockquote className="font-display italic text-[18px] lg:text-[19px] leading-[1.55] text-ink/90 flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-cream-deep">
                  <div className="font-display text-[18px] text-primary">{r.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink/55 mt-1">{r.place}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Let's talk</span>
            <h2 className="display mt-3 text-[32px] sm:text-[44px] lg:text-[52px] text-primary leading-[1.05]">
              Speak to a Licensed Insurance Agent Today!
            </h2>
            <p className="mt-5 text-[18px] sm:text-[19px] text-ink/80">
              Get your free, no-obligation Medicare consultation.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            <a href="tel:6013972982" className="group bg-white rounded-2xl p-6 lg:p-7 shadow-card border border-cream-deep hover:shadow-elevated hover:-translate-y-0.5 transition-all flex items-center gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                <Phone className="w-7 h-7 text-accent-dark" />
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/60">Call Us</div>
                <div className="font-display text-[20px] text-primary mt-1">(601) 397-2982</div>
              </div>
            </a>
            <Link to="/contact" className="group bg-white rounded-2xl p-6 lg:p-7 shadow-card border border-cream-deep hover:shadow-elevated hover:-translate-y-0.5 transition-all flex items-center gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/60">Book a Time</div>
                <div className="font-display text-[20px] text-primary mt-1">Schedule an Appointment</div>
              </div>
            </Link>
            <a href="https://www.google.com/maps?q=398+Simpson+Hwy+149,+Magee,+MS+39111" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-6 lg:p-7 shadow-card border border-cream-deep hover:shadow-elevated hover:-translate-y-0.5 transition-all flex items-center gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                <MapPin className="w-7 h-7 text-secondary" />
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/60">Stop By</div>
                <div className="font-display text-[20px] text-primary mt-1">Visit Us on Hwy 149</div>
              </div>
            </a>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-cream-deep p-6 sm:p-8 lg:p-10">
            <h3 className="display text-[26px] sm:text-[30px] text-primary mb-6 leading-tight text-center">
              Request a free quote
            </h3>
            <QuoteForm variant="extended" submitLabel="Request My Free Medicare Review" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
