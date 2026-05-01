import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuoteFormProps {
  defaultService?: string;
  submitLabel?: string;
  source?: string;
}

const SERVICES = [
  "Medicare",
  "Medicare Advantage",
  "Medicare Supplement",
  "Prescription Drug Coverage (Part D)",
  "Retirement Planning",
  "Health Insurance",
  "Life Insurance",
  "Final Expense Insurance",
  "Not Sure Yet",
];

export const QuoteForm = ({ defaultService = "Medicare", submitLabel = "Get My Free Quote", source = "Quote form" }: QuoteFormProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "new-lead-notification",
          idempotencyKey: `quote-${crypto.randomUUID()}`,
          templateData: {
            firstName: String(data.get("firstName") ?? ""),
            lastName: String(data.get("lastName") ?? ""),
            email: String(data.get("email") ?? ""),
            phone: String(data.get("phone") ?? ""),
            service: String(data.get("service") ?? ""),
            notes: String(data.get("notes") ?? ""),
            source,
            submittedAt: new Date().toLocaleString(),
          },
        },
      });
      if (error) throw error;
      form.reset();
      toast({
        title: "Thank you, we got it.",
        description: "Our team will be in touch within one business day.",
      });
    } catch (err) {
      console.error("Quote submit failed", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or call (601) 439-7230.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="firstName" required placeholder="First Name" className="field" autoComplete="given-name" />
        <input name="lastName" required placeholder="Last Name" className="field" autoComplete="family-name" />
      </div>
      <input name="email" type="email" required placeholder="Email Address" className="field" autoComplete="email" />
      <input name="phone" type="tel" required placeholder="Phone Number" className="field" autoComplete="tel" />
      <select name="service" required defaultValue={defaultService} className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2364748B%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-no-repeat bg-[length:1.1rem] bg-[position:right_1rem_center] pr-10">
        {SERVICES.map((s) => <option key={s}>{s}</option>)}
      </select>
      <textarea name="notes" rows={4} placeholder="Tell us a little about your situation (optional)" className="field" />
      <button type="submit" disabled={submitting} className="btn-base btn-navy w-full disabled:opacity-70">
        {submitting ? "Sending..." : submitLabel}
      </button>
      <p className="text-[12px] text-muted-foreground text-center pt-1">
        We will respond within one business day. We will never sell your information.
      </p>
    </form>
  );
};
