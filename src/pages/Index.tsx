import { Link } from "react-router-dom";
import { Phone, Star, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { QuoteForm } from "@/components/QuoteForm";
import cindyHero from "@/assets/cindy-hero.jpg";
import medicareImg from "@/assets/medicare-couple.jpg";
import healthImg from "@/assets/health-family.jpg";
import lifeImg from "@/assets/life-hands.jpg";
import officeImg from "@/assets/office-waiting.jpg";

const ROWS = [
  {
    label: "Medicare Solutions",
    headline: "Turning 65 Soon? We Make Medicare Simple.",
    body: "Medicare has a lot of moving parts. Parts A and B. Advantage plans. Supplements. Drug coverage. It can feel like a full-time job just to figure out what you need. Our agents will sit down with you, review your doctors and medications, and compare plans from top carriers like Humana, Aetna, and UnitedHealthcare, completely free of charge.",
    cta: "Learn More About Medicare",
    href: "/medicare",
    image: medicareImg,
    alt: "Older couple reviewing Medicare paperwork at their kitchen table",
    reverse: false,
  },
  {
    label: "Health Insurance",
    headline: "Health Coverage That Fits Your Budget.",
    body: "Whether you are self-employed, retiring early, or just need better coverage for your family, we shop multiple carriers to find a plan that covers your preferred doctors and fits your monthly budget. We also help you navigate ACA Marketplace plans and check if you qualify for subsidies.",
    cta: "View Health Plans",
    href: "/health-insurance",
    image: healthImg,
    alt: "Healthy active family walking outdoors together",
    reverse: true,
  },
  {
    label: "Life Insurance",
    headline: "Protect the People Who Depend on You.",
    body: "Life insurance is not about death. It is about making sure the people you love are taken care of when you are gone. We help you find affordable term, whole life, and final expense policies that fit your stage of life, without the hard sell.",
    cta: "Protect Your Family",
    href: "/life-insurance",
    image: lifeImg,
    alt: "Older man holding a young child's hands",
    reverse: false,
  },
];

const REVIEWS = [
  {
    quote: "The Wood Insurance team made the whole Medicare process so easy. I had no idea what I was doing when I turned 65, and they walked me through everything step by step. I ended up saving over $80 a month on my plan.",
    name: "Linda T.",
    place: "Magee, MS",
    tall: false,
  },
  {
    quote: "I have been using Wood Insurance Agency for my health insurance for years. Every time I call, a real person answers. They found me a plan that kept my same doctors and cut my premium by almost $200 a month. I tell everyone I know about them.",
    name: "James R.",
    place: "Mendenhall, MS",
    tall: true,
  },
  {
    quote: "When my husband passed, the team at Wood Insurance helped me figure out my life insurance and Medicare options all at once. They were patient, kind, and never once made me feel rushed. They are a blessing to this community.",
    name: "Patricia W.",
    place: "Simpson County, MS",
    tall: false,
  },
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
      <section className="bg-muted relative overflow-hidden">
        <div className="grid lg:grid-cols-[58fr_42fr] min-h-[calc(100vh-78px)]">
          <div className="container-wide lg:max-w-none lg:pl-[max(2rem,calc((100vw-1280px)/2+1.5rem))] lg:pr-16 py-16 lg:py-24 flex flex-col justify-center">
            <h1 className="animate-hero-rise text-[36px] sm:text-[44px] lg:text-[52px] xl:text-[58px] leading-[1.08] text-balance">
              Protecting What Matters Most in Mississippi.
            </h1>
            <p className="animate-hero-rise text-[19px] lg:text-[20px] text-text mt-6 max-w-xl" style={{ animationDelay: "60ms" }}>
              Local, independent guidance for your Medicare, Health, and Life Insurance decisions. No jargon. No pressure. Just honest advice from your neighbor in Magee.
            </p>
            <div className="animate-hero-rise mt-8 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "120ms" }}>
              <a href="tel:6013972982" className="btn-base btn-gold">
                <Phone className="w-5 h-5" /> Call Our Team Today
              </a>
              <a href="#coverage" className="btn-base btn-outline-navy">Explore Coverage</a>
            </div>
            <div className="animate-hero-rise mt-7 flex items-center gap-3" style={{ animationDelay: "180ms" }}>
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-[15px] text-muted-foreground">Rated 5.0 by Simpson County Families</span>
            </div>
          </div>
          <div className="relative lg:min-h-[600px] min-h-[380px] bg-primary/5">
            <img
              src={cindyHero}
              alt="Wood Insurance Agency team member welcoming a client at the Magee office"
              className="absolute inset-0 w-full h-full object-cover object-top"
              width={1024}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3 text-[34px] sm:text-[40px] lg:text-[44px]">Three Kinds of Coverage. One Trusted Neighbor.</h2>
          </div>
          <div className="space-y-20 lg:space-y-28">
            {ROWS.map((row, i) => (
              <article
                key={i}
                className={`grid gap-10 lg:gap-16 items-center ${
                  row.reverse ? "lg:grid-cols-[55fr_45fr]" : "lg:grid-cols-[45fr_55fr]"
                }`}
              >
                <div className={`relative ${row.reverse ? "lg:order-2" : ""}`}>
                  <div className="absolute -inset-3 lg:-inset-4 bg-accent/15 rounded-2xl -z-10" aria-hidden />
                  <img
                    src={row.image}
                    alt={row.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover rounded-xl shadow-elevated"
                  />
                </div>
                <div className={row.reverse ? "lg:order-1" : ""}>
                  <span className="eyebrow">{row.label}</span>
                  <h3 className="mt-3 text-[28px] sm:text-[32px] lg:text-[36px]">{row.headline}</h3>
                  <p className="mt-5 text-[18px] text-text">{row.body}</p>
                  <Link to={row.href} className="btn-base btn-outline-navy mt-7 group">
                    {row.cta}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL DIFFERENCE */}
      <section className="bg-primary text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-10 -left-6 lg:left-10 font-display text-accent/20 select-none pointer-events-none leading-none"
          style={{ fontSize: "min(28rem, 60vw)" }}
        >
          “
        </div>
        <div className="container-wide py-20 lg:py-28 grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-center relative">
          <div>
            <span className="eyebrow eyebrow-gold">Why Wood Insurance Agency</span>
            <h2 className="mt-3 text-[34px] sm:text-[40px] lg:text-[44px] text-white">
              Big City Options. Small Town Handshakes.
            </h2>
            <p className="mt-6 text-[18px] lg:text-[19px] text-white/90 leading-[1.8] max-w-2xl">
              Unlike 1-800 numbers and out-of-state call centers, Wood Insurance Agency sits right here on Highway 149 in Magee. We answer our own phones. We know Simpson General Hospital and the local healthcare networks. We sit down with you face to face and review your policies every year to make sure you are still getting the best deal. Because we are independent, we are not locked into one company. We shop dozens of top-rated carriers and bring you the best options.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { v: "100%", l: "Free to You" },
                { v: "Multiple", l: "Carriers Compared" },
                { v: "Local", l: "Face-to-Face Service" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-accent text-[32px] sm:text-[40px] leading-tight">{s.v}</div>
                  <div className="text-white/80 text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-base btn-gold mt-10">About Our Agency</Link>
          </div>
          <div className="relative">
            <img
              src={officeImg}
              alt="Wood Insurance Agency office waiting area in Magee, MS"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-[360px] lg:h-[520px] object-cover rounded-xl shadow-elevated lg:translate-x-8"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container-wide">
          <span className="eyebrow">Client Reviews</span>
          <h2 className="mt-3 text-[34px] sm:text-[40px] lg:text-[44px] max-w-2xl">
            Don't Just Take Our Word For It.
          </h2>
          <p className="mt-4 text-[18px] text-muted-foreground max-w-xl">
            Hear from real families in Magee, Mendenhall, and across Simpson County.
          </p>
          <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:items-start">
            {REVIEWS.map((r, i) => (
              <figure
                key={i}
                className={`bg-background rounded-xl p-7 lg:p-8 shadow-card border border-border flex flex-col ${
                  r.tall ? "lg:-mt-4 lg:pb-12" : ""
                }`}
              >
                <div className="flex gap-1" aria-label="5 of 5">
                  {[0,1,2,3,4].map((s) => <Star key={s} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <blockquote className="mt-5 text-[17px] text-text flex-1">"{r.quote}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-dark">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.place}</div>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Google Review
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark group">
              Read more reviews on Google
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* QUICK QUOTE */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-[45fr_55fr]">
          <div className="bg-primary text-white p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-[30px] sm:text-[36px] text-white">Let's Look at Your Options.</h2>
            <p className="mt-5 text-[18px] text-white/90">
              Drop your details below or call us directly. We will run the numbers and find the coverage that actually makes sense for you. No obligation, ever.
            </p>
            <a href="tel:6013972982" className="mt-7 inline-flex items-center gap-3 font-display text-accent text-[26px] sm:text-[30px] font-bold hover:text-accent-dark transition-colors">
              <Phone className="w-7 h-7" /> (601) 397-2982
            </a>
            <p className="mt-6 text-white/75">Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="bg-background p-8 lg:p-16">
            <h3 className="text-[26px] sm:text-[28px] mb-6">Request a Free Quote</h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
