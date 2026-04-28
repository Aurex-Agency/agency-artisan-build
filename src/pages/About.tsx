import { Phone, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import cindy from "@/assets/cindy-hero.jpg";
import office1 from "@/assets/photos/office-reception.jpg";
import office2 from "@/assets/storefront.jpg";

const STEPS = [
  { n: "01", title: "We Listen First.", body: "Before we ever recommend a plan, we take the time to understand your situation. Your doctors. Your medications. Your budget. Your goals. Every client is different, and your coverage should reflect that." },
  { n: "02", title: "We Shop for You.", body: "Our team has access to plans from dozens of top-rated carriers. We compare them side by side and bring you the best options, explained in plain English. No jargon, no confusion." },
  { n: "03", title: "We Stay With You.", body: "Our job does not end when you enroll. We are available year-round to answer questions, help with claims, and review your coverage every year to make sure you are still getting the best deal." },
];

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Wood Insurance Agency | Magee, MS"
        description="Wood Insurance Agency is a local independent insurance agency in Magee, Mississippi. Our team serves Simpson County families with Medicare, health, and life insurance guidance. Call (601) 397-2982."
        keywords="Wood Insurance Agency Magee MS, independent insurance agency Magee Mississippi, local insurance Simpson County"
        path="/about"
      />

      {/* HERO */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="relative min-h-[420px] lg:min-h-0">
            <img src={cindy} alt="Wood Insurance Agency founder Cindy Woods at the Magee, MS office" className="absolute inset-0 w-full h-full object-cover object-top" width={1024} height={1280} />
          </div>
          <div className="container-wide lg:max-w-none lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
            <span className="eyebrow">About Our Agency</span>
            <h1 className="animate-hero-rise mt-3 text-[32px] sm:text-[40px] lg:text-[48px] text-balance">
              Rooted in Simpson County. Dedicated to Your Protection.
            </h1>
            <div className="animate-hero-rise mt-6 space-y-4 text-[18px] lg:text-[19px] text-text leading-[1.8]" style={{ animationDelay: "60ms" }}>
              <p>Hi, I am Cindy Woods. I founded Wood Insurance Agency right here in Magee, Mississippi to help my neighbors find the right coverage without the confusion, and we have been growing as a local team ever since.</p>
              <p>Whether you are turning 65 and navigating Medicare for the first time, looking for a more affordable health plan, or wanting to protect your family with life insurance, our agency is here to guide you every step of the way.</p>
              <p>Because we are independent, we do not work for one specific insurance company. We work for you. Our team shops dozens of top-rated carriers to find the exact plan that fits your health needs and your budget. Best of all, our services are completely free to you. Insurance companies pay agent commissions, so you never pay a dime for our help.</p>
            </div>
            <a href="tel:6013972982" className="animate-hero-rise btn-base btn-gold mt-8 self-start" style={{ animationDelay: "120ms" }}>
              <Phone className="w-5 h-5" /> Call Us Today at (601) 397-2982
            </a>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">My Approach</span>
            <h2 className="mt-3 text-[30px] sm:text-[38px]">Three Promises I Make to Every Client.</h2>
          </div>
          <div className="space-y-12 lg:space-y-16">
            {STEPS.map((s) => (
              <article key={s.n} className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-12 items-start border-b border-border pb-12 last:border-b-0">
                <div className="font-display text-accent text-[72px] lg:text-[96px] leading-none">{s.n}</div>
                <div>
                  <h3 className="text-[26px] sm:text-[30px]">{s.title}</h3>
                  <p className="mt-4 text-[18px] text-text max-w-2xl">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Visit Us</span>
            <h2 className="mt-3 text-[28px] sm:text-[36px]">Come See Us on Highway 149.</h2>
            <p className="mt-4 text-[18px] text-text">
              We are located at 398 Simpson Hwy 149, Suite A in Magee. Walk-ins are welcome during business hours, or call ahead to schedule a time that works for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={office1} alt="Office waiting area with dark wood furniture and bookshelves" loading="lazy" width={1280} height={960} className="w-full h-[280px] lg:h-[400px] object-cover rounded-xl shadow-card" />
            <img src={office2} alt="Wood Insurance Agency storefront on Highway 149 in Magee, Mississippi" loading="lazy" width={1280} height={960} className="w-full h-[280px] lg:h-[400px] object-cover rounded-xl shadow-card" />
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 bg-muted rounded-xl p-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" aria-hidden />
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Address</div>
                <div className="mt-1 text-dark">398 Simpson Hwy 149, Ste A<br />Magee, MS 39111</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" aria-hidden />
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
                <a href="tel:6013972982" className="mt-1 block font-bold text-primary hover:text-primary-dark">(601) 397-2982</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" aria-hidden />
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="mt-1 text-dark">Mon - Fri: 9:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;