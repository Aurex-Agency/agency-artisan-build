import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Award, HeartHandshake, MapPin, ShieldCheck } from "lucide-react";
import cindy from "@/assets/cindy-hero.jpg";

const VALUES = [
  { icon: HeartHandshake, title: "Personal Service", body: "Every client gets one-on-one time with Cindy, in person or by phone." },
  { icon: ShieldCheck, title: "Independent & Trusted", body: "We work for you, not a single carrier. We shop 20+ companies." },
  { icon: Award, title: "Local Expertise", body: "Decades of experience in Mississippi healthcare networks and Medicare." },
  { icon: MapPin, title: "Multi-State Service", body: "Licensed in MS, AL, TN, and LA, serving clients wherever life takes them." },
];

const About = () => {
  return (
    <Layout>
      <Seo title="About Cindy Wood | Wood Insurance Agency" description="Meet Cindy Wood, your local independent Medicare and insurance expert serving MS, AL, TN, and LA." />

      <section className="bg-primary text-white">
        <div className="container-wide py-16 lg:py-20 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">About Us</span>
          <h1 className="mt-4 text-white text-[40px] sm:text-[52px] font-bold leading-[1.05]">
            Your Local Insurance Family
          </h1>
          <p className="mt-5 text-white/85 text-[18px] leading-relaxed">
            Wood Insurance Agency is built on a simple idea: insurance should be personal. We sit down with our neighbors, explain the options, and help them make confident decisions.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-float aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] bg-muted">
            <img src={cindy} alt="Cindy Wood, founder of Wood Insurance Agency" className="w-full h-full object-cover object-[center_15%]" />
          </div>
          <div>
            <span className="inline-block text-secondary text-[12px] font-semibold uppercase tracking-wider mb-2">Meet Cindy</span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight">
              A Trusted Advisor For Medicare, Health, Life, and Retirement
            </h2>
            <p className="mt-5 text-[16px] text-text leading-relaxed">
              Cindy Wood started Wood Insurance Agency to bring honest, unbiased guidance back into the insurance industry. As an independent agent licensed in Mississippi, Alabama, Tennessee, and Louisiana, Cindy works with more than 20 top-rated carriers to find the right plan for each client.
            </p>
            <p className="mt-4 text-[16px] text-text leading-relaxed">
              From explaining the alphabet soup of Medicare to building retirement income strategies, Cindy is the kind of advisor you can call when you have a question. Her clients are not policy numbers, they are friends and neighbors.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-base btn-navy">Schedule a Visit</Link>
              <a href="tel:6014397230" className="btn-base btn-outline-navy">Call (601) 439-7230</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface">
        <div className="container-wide text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-ink">What We Stand For</h2>
          <p className="mt-3 text-muted-foreground text-[17px]">Four values that guide every conversation.</p>
        </div>
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 shadow-card border border-border/60 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <h3 className="text-[17px] font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-primary-dark text-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-white text-[28px] sm:text-[34px] font-bold">Let's Talk</h2>
          <p className="mt-3 text-white/80 text-[16px]">Free, no-obligation consultation. We come to you, in person or by phone.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-base btn-gold">Schedule Now</Link>
            <a href="tel:6014397230" className="btn-base btn-outline-white">Call (601) 439-7230</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
