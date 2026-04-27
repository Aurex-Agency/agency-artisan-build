import { Phone, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { QuoteForm } from "@/components/QuoteForm";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Wood Insurance Agency | Magee, MS | (601) 397-2982"
        description="Contact Wood Insurance Agency in Magee, MS. Located at 398 Simpson Hwy 149, Ste A. Call (601) 397-2982 or request a free quote online. Serving all of Mississippi."
        keywords="contact Wood Insurance Agency Magee MS, insurance agent phone number Magee Mississippi, free insurance quote Magee MS"
        path="/contact"
      />

      {/* HERO */}
      <section className="bg-primary text-white">
        <div className="container-wide py-20 lg:py-28 text-center">
          <h1 className="animate-hero-rise text-[36px] sm:text-[44px] lg:text-[52px] text-white text-balance">
            We Are Here When You Need Us.
          </h1>
          <p className="animate-hero-rise mt-5 text-[19px] lg:text-[20px] text-white/90 max-w-2xl mx-auto" style={{ animationDelay: "60ms" }}>
            Call, email, or stop by. We are always happy to help.
          </p>
        </div>
      </section>

      {/* DETAILS + FORM */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container-wide grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16">
          <div>
            <h2 className="text-[28px] sm:text-[32px] mb-8">Get in Touch</h2>

            <ContactBlock icon={<Phone className="w-6 h-6 text-dark" />} label="Call or Text">
              <a href="tel:6013972982" className="block text-[26px] sm:text-[30px] font-display font-bold text-primary hover:text-primary-dark transition-colors">
                (601) 397-2982
              </a>
            </ContactBlock>

            <ContactBlock icon={<MapPin className="w-6 h-6 text-dark" />} label="Visit Our Office">
              <p className="text-[18px] text-text">398 Simpson Hwy 149, Ste A<br />Magee, MS 39111</p>
            </ContactBlock>

            <ContactBlock icon={<Clock className="w-6 h-6 text-dark" />} label="Office Hours">
              <p className="text-[18px] text-text">Monday - Friday: 9:00 AM - 5:00 PM<br /><span className="text-muted-foreground">Saturday - Sunday: Closed</span></p>
            </ContactBlock>

            <div className="mt-10 rounded-xl overflow-hidden border border-border shadow-card">
              <iframe
                title="Wood Insurance Agency map"
                src="https://www.google.com/maps?q=398+Simpson+Hwy+149,+Magee,+MS+39111&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full block border-0"
              />
              <div className="bg-muted px-4 py-3 text-sm text-text">We are located on Highway 149 in Magee.</div>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-8 lg:p-10 border border-border">
            <h2 className="text-[26px] sm:text-[28px] mb-6">Request a Free Quote</h2>
            <QuoteForm variant="extended" submitLabel="Send My Request" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const ContactBlock = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-5 mb-8">
    <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1">{children}</div>
    </div>
  </div>
);

export default Contact;