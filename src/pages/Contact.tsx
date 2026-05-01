import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Wood Insurance Agency" description="Get in touch with Cindy Wood. Phone, email, or visit our Magee, MS office. Serving MS, AL, TN, and LA." />

      <section className="bg-primary text-white">
        <div className="container-wide py-14 lg:py-16 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-accent/15 text-accent text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Contact</span>
          <h1 className="mt-4 text-white text-[40px] sm:text-[48px] font-bold leading-[1.1]">Get in Touch</h1>
          <p className="mt-4 text-white/85 text-[17px] leading-relaxed">
            Questions about Medicare, retirement, health, or life insurance? We are here to help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-[28px] font-bold text-ink">Reach Out</h2>
            <p className="text-muted-foreground text-[16px]">Call, email, or stop by the office. We respond within one business day.</p>

            <ul className="space-y-4 mt-6">
              {[
                { icon: Phone, title: "Phone", body: "(601) 439-7230", href: "tel:6014397230" },
                { icon: Mail, title: "Email", body: "cindy@woodinsuranceagency.net", href: "mailto:cindy@woodinsuranceagency.net" },
                { icon: MapPin, title: "Office", body: "398 Simpson Hwy 149, Ste A\nMagee, MS 39111" },
                { icon: Clock, title: "Hours", body: "Mon-Fri 8AM-5PM" },
              ].map((c) => (
                <li key={c.title} className="flex items-start gap-3">
                  <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" aria-hidden />
                  </span>
                  <div>
                    <div className="font-semibold text-ink text-[15px]">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="text-text text-[15px] hover:text-primary whitespace-pre-line break-words">{c.body}</a>
                    ) : (
                      <div className="text-text text-[15px] whitespace-pre-line">{c.body}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl shadow-float border border-border/60 p-7 lg:p-9">
            <h2 className="text-[24px] font-bold text-ink">Request a Free Quote</h2>
            <p className="text-muted-foreground text-[14px] mt-1 mb-5">No obligation, just expert advice.</p>
            <QuoteForm defaultService="Medicare" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
