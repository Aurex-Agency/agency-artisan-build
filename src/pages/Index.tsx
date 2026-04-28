import { Link } from "react-router-dom";
import { Phone, Star, ArrowRight, HeartPulse, ShieldCheck, Leaf } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandTree } from "@/components/brand/BrandTree";
import { LeafBadge } from "@/components/brand/LeafBadge";
import { Marquee } from "@/components/brand/Marquee";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { TopoBackground } from "@/components/brand/TopoBackground";
import { StatTile } from "@/components/brand/StatTile";
import { Polaroid } from "@/components/brand/Polaroid";
import medicarePhoto from "@/assets/photos/medicare-couple-porch.jpg";
import healthPhoto from "@/assets/photos/health-family-kitchen.jpg";
import lifePhoto from "@/assets/photos/life-grandparent-garden.jpg";
import portrait from "@/assets/photos/office-hero.jpg";
import storefront from "@/assets/photos/office-reception.jpg";
import handshake from "@/assets/photos/office-desk.jpg";

const CARRIERS = ["Humana", "Aetna", "UnitedHealthcare", "Cigna", "Mutual of Omaha", "Anthem", "Wellcare", "Blue Cross"];

const COVERAGE = [
  { icon: HeartPulse, label: "Medicare", title: "Turning 65 soon?", body: "We sit down with you, review your doctors and medications, and compare top-rated carriers — completely free.", href: "/medicare", photo: medicarePhoto, alt: "Older couple reviewing Medicare paperwork on a Mississippi front porch" },
  { icon: ShieldCheck, label: "Health", title: "Coverage that fits.", body: "ACA, individual, family, short-term — we shop multiple carriers to find a plan you can actually afford.", href: "/health-insurance", photo: healthPhoto, alt: "Multigenerational Southern family making biscuits together in a sunny kitchen" },
  { icon: Leaf, label: "Life", title: "Look after your people.", body: "Term, whole life, and final expense policies built around your family — without the hard sell.", href: "/life-insurance", photo: lifePhoto, alt: "Grandparent and grandchild planting a tomato seedling together in a garden" },
];

const REVIEWS = [
  { quote: "The Wood Insurance team made the whole Medicare process so easy. They walked me through everything step by step. I ended up saving over $80 a month.", name: "Linda T.", place: "Magee, MS", rotate: -2.5 },
  { quote: "Every time I call, a real person answers. They found me a plan that kept my doctors and cut my premium by almost $200 a month. I tell everyone.", name: "James R.", place: "Mendenhall, MS", rotate: 1.5 },
  { quote: "When my husband passed, the team helped me figure out my life insurance and Medicare options all at once. Patient. Kind. A blessing to this community.", name: "Patricia W.", place: "Simpson County, MS", rotate: -1.5 },
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
        <TopoBackground className="text-primary" opacity={0.06} />
        <div className="container-wide grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center pt-10 pb-14 lg:pt-20 lg:pb-28 relative">
          <div>
            <span className="eyebrow">Independent · Local · Free to You</span>
            <h1 className="display animate-hero-rise mt-4 sm:mt-5 text-[38px] sm:text-[60px] lg:text-[78px] xl:text-[88px] leading-[1] sm:leading-[0.96] tracking-[-0.035em] text-primary text-balance">
              Roots run <em className="italic text-secondary-deep">deep</em>
              <br />
              in Simpson County.
            </h1>
            <p className="animate-hero-rise mt-5 sm:mt-7 text-[17px] sm:text-[19px] lg:text-[21px] text-ink/80 max-w-xl leading-[1.55] sm:leading-[1.6]" style={{ animationDelay: "60ms" }}>
              Honest, sit-down guidance for your <span className="font-display italic">Medicare</span>, <span className="font-display italic">Health</span>, and <span className="font-display italic">Life</span> insurance from your neighbors in Magee.
            </p>
            <div className="animate-hero-rise mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: "120ms" }}>
              <a href="tel:6013972982" className="btn-base btn-gold">
                <Phone className="w-5 h-5" /> (601) 397-2982
              </a>
              <a href="#coverage" className="btn-base btn-outline-navy">Explore coverage</a>
            </div>
            <div className="animate-hero-rise mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4" style={{ animationDelay: "180ms" }}>
              <div className="flex -space-x-2">
                {["LT", "JR", "PW"].map((i) => (
                  <span key={i} className="w-9 h-9 rounded-full bg-primary text-white text-[12px] font-semibold flex items-center justify-center border-2 border-cream">{i}</span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex" aria-label="5 of 5 stars">{[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <span className="text-[13px] sm:text-[14px] text-ink/70">Rated 5.0 by Simpson County families</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-[360px] sm:max-w-[460px] mx-auto">
              <BrandTree variant="full" glow className="absolute inset-0 w-full h-full opacity-70 sm:opacity-100" />
              <div className="absolute bottom-2 left-0 right-0 sm:left-auto sm:right-0 sm:w-[88%] mx-auto sm:mx-0 w-[92%] flex justify-center">
                <img
                  src={portrait}
                  alt="The Wood Insurance Agency team at the front desk in the Magee, MS office"
                  className="w-full aspect-[4/3] object-cover rounded-sm shadow-polaroid border-[6px] border-white"
                  style={{ transform: "rotate(2deg)" }}
                />
              </div>
              <div className="absolute -top-2 left-0 sm:-top-4 sm:-left-2">
                <LeafBadge rotate={-12}>Free to You</LeafBadge>
              </div>
              <div className="hidden sm:block absolute top-1/3 -right-2">
                <LeafBadge rotate={8} variant="green">Local since day one</LeafBadge>
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

      {/* COVERAGE */}
      <section id="coverage" className="relative bg-background py-20 lg:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we do"
            title="Three branches. One trusted neighbor."
            underlinedWord="One"
            intro="Each branch of coverage handled by people who actually know your name."
          />
          <div className="mt-12 lg:mt-16 grid lg:grid-cols-3 gap-7">
            {COVERAGE.map(({ icon: Icon, label, title, body, href, photo, alt }, i) => (
              <article key={label} className={`group relative bg-cream rounded-2xl overflow-hidden flex flex-col shadow-card hover:shadow-elevated transition-shadow ${i % 2 ? "" : "lg:translate-y-3"}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={photo} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream text-primary text-[12px] font-semibold uppercase tracking-[0.18em] shadow-sm">
                    <Icon className="w-4 h-4 text-secondary" /> {label}
                  </div>
                </div>
                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <h3 className="display text-[26px] sm:text-[30px] leading-[1.05] text-primary">{title}</h3>
                  <p className="mt-4 text-[17px] text-ink/80 flex-1">{body}</p>
                  <Link to={href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary group/link">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="relative bg-canopy text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 leaf-pattern opacity-20" />
        <TopoBackground className="text-white" opacity={0.08} />
        <div className="container-wide py-20 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center relative">
          <div>
            <span className="eyebrow eyebrow-gold">Why Wood Insurance</span>
            <h2 className="display mt-5 text-[36px] sm:text-[48px] lg:text-[58px] leading-[1] text-white tracking-[-0.025em]">
              Big city options.
              <br />
              <em className="italic text-accent">Small town</em> handshakes.
            </h2>
            <p className="mt-7 text-[18px] lg:text-[19px] text-white/85 leading-[1.7] max-w-2xl">
              Unlike out-of-state call centers, we sit right here on Highway 149. We answer our own phones. We know Simpson General and the local networks. We sit down face to face and review your policies every year — because that's what neighbors do.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <StatTile value="100%" label="Free to you" tone="cream" />
              <StatTile value="20+" label="Carriers shopped" tone="cream" />
              <StatTile value="1:1" label="Face-to-face" tone="cream" />
            </div>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to="/about" className="btn-base btn-gold">About our agency</Link>
              <span className="font-script text-accent text-[28px] leading-none">— from your neighbors in Magee</span>
            </div>
          </div>
          <div className="relative">
            <Polaroid src={storefront} alt="Wood Insurance Agency office on Highway 149 in Magee, MS at golden hour" caption="Come on by." rotate={-3} className="max-w-[440px] mx-auto" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-cream py-20 lg:py-28 paper-grain">
        <div className="container-wide relative">
          <SectionHeading eyebrow="Kind words" title="Don't just take our word for it." underlinedWord="word" intro="Real families across Simpson County and the state of Mississippi." />
          <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-6">
            {REVIEWS.map((r, i) => (
              <Polaroid key={i} rotate={r.rotate} className="max-w-[320px] mx-auto" caption={<><span className="block">{r.name}</span><span className="block text-[14px] text-ink/60 font-sans tracking-wide uppercase mt-1">{r.place}</span></>}>
                <div className="absolute inset-0 flex flex-col p-5 bg-cream-deep">
                  <div className="flex gap-1 mb-3" aria-label="5 of 5">
                    {[0,1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>
                  <blockquote className="text-[15px] leading-[1.55] text-ink/85 font-display italic">"{r.quote}"</blockquote>
                </div>
              </Polaroid>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-[5fr_6fr]">
          <div className="relative bg-canopy text-white p-6 sm:p-10 lg:p-16 flex flex-col justify-center overflow-hidden">
            <div aria-hidden className="absolute inset-0 leaf-pattern opacity-20" />
            <div className="relative">
              <span className="eyebrow eyebrow-gold">Let's talk</span>
              <h2 className="display mt-4 text-[34px] sm:text-[42px] text-white leading-[1.05]">
                We'll run the numbers.
                <br />
                <em className="italic text-accent">You decide.</em>
              </h2>
              <p className="mt-6 text-[18px] text-white/90 max-w-md">Drop your details, or just call. No obligation, ever.</p>
              <a href="tel:6013972982" className="mt-7 inline-flex items-center gap-3 font-display text-accent text-[28px] sm:text-[32px] font-bold hover:text-accent-dark transition-colors">
                <Phone className="w-7 h-7" /> (601) 397-2982
              </a>
              <p className="mt-5 text-white/70">Mon – Fri · 9:00 AM – 5:00 PM</p>
              <img src={handshake} alt="" loading="lazy" className="mt-10 w-full max-w-md aspect-[3/2] object-cover rounded-sm shadow-polaroid border-[6px] border-white sm:[transform:rotate(-2deg)]" />
            </div>
          </div>
          <div className="bg-cream p-6 sm:p-8 lg:p-16">
            <h3 className="display text-[28px] sm:text-[32px] text-primary mb-7 leading-tight">Request a free quote</h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
