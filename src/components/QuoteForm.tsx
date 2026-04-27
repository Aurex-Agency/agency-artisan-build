import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormProps {
  variant?: "default" | "extended";
  submitLabel?: string;
}

export const QuoteForm = ({ variant = "default", submitLabel = "Request My Free Quote" }: QuoteFormProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const options = variant === "extended"
    ? ["Medicare Advantage", "Medicare Supplement", "Health Insurance (ACA)", "Health Insurance (Individual/Family)", "Life Insurance", "Final Expense Insurance", "Not Sure Yet"]
    : ["Medicare", "Health Insurance", "Life Insurance", "Not Sure Yet"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Thank you, we got it.",
        description: "Cindy or her team will be in touch within one business day.",
      });
    }, 600);
  };

  const fieldClass =
    "w-full min-h-[52px] px-4 py-3 text-[16px] rounded-lg border border-border bg-background text-dark placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="qf-name" className="block text-sm font-semibold mb-2 text-dark">Full Name</label>
        <input id="qf-name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-phone" className="block text-sm font-semibold mb-2 text-dark">Phone Number</label>
          <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="(601) 555-1234" />
        </div>
        <div>
          <label htmlFor="qf-email" className="block text-sm font-semibold mb-2 text-dark">Email Address</label>
          <input id="qf-email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="qf-topic" className="block text-sm font-semibold mb-2 text-dark">What do you need help with?</label>
        <select id="qf-topic" name="topic" required className={fieldClass + " appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23374151%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-no-repeat bg-[length:1.25rem] bg-[position:right_1rem_center] pr-12"} defaultValue="">
          <option value="" disabled>Select an option</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="qf-notes" className="block text-sm font-semibold mb-2 text-dark">
          {variant === "extended" ? "Tell us a little about your situation" : "Anything else we should know?"}
        </label>
        <textarea id="qf-notes" name="notes" rows={variant === "extended" ? 4 : 3} className={fieldClass + " min-h-0"} placeholder="Optional" />
      </div>
      <button type="submit" disabled={submitting} className="btn-base btn-gold w-full !text-[17px] disabled:opacity-70">
        {submitting ? "Sending..." : submitLabel}
      </button>
      <p className="text-sm text-muted-foreground text-center">
        {variant === "extended"
          ? "We will respond within one business day. We will never sell your information."
          : "We will never sell your information. Your privacy is protected."}
      </p>
    </form>
  );
};