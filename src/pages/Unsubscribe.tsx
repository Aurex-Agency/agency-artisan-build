import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already" | "invalid" | "submitting" | "done" | "error";

const FN_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/handle-email-unsubscribe`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${FN_URL}?token=${encodeURIComponent(token)}`, {
          headers: { apikey: ANON_KEY },
        });
        const json = await res.json();
        if (!res.ok) {
          setStatus("invalid");
          return;
        }
        if (json.valid === false && json.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (json.valid === true) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    setStatus("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success || data?.reason === "already_unsubscribed") {
        setStatus("done");
      } else {
        setErrorMsg(data?.error ?? "Unable to process request.");
        setStatus("error");
      }
    } catch (e: any) {
      setErrorMsg(e?.message ?? "Unable to process request.");
      setStatus("error");
    }
  };

  return (
    <Layout>
      <Seo title="Unsubscribe — Wood Insurance Agency" description="Manage your email preferences." />
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-wide max-w-xl mx-auto text-center">
          <h1 className="text-[32px] sm:text-[40px] font-bold text-ink">Unsubscribe</h1>

          {status === "loading" && (
            <p className="mt-4 text-muted-foreground">Checking your link...</p>
          )}

          {status === "valid" && (
            <>
              <p className="mt-4 text-text">
                Click the button below to confirm you no longer want to receive emails from Wood Insurance Agency.
              </p>
              <button onClick={confirm} className="btn-base btn-navy mt-6">
                Confirm Unsubscribe
              </button>
            </>
          )}

          {status === "submitting" && (
            <p className="mt-4 text-muted-foreground">Processing...</p>
          )}

          {status === "done" && (
            <p className="mt-4 text-text">
              You have been unsubscribed. We're sorry to see you go.
            </p>
          )}

          {status === "already" && (
            <p className="mt-4 text-text">This email is already unsubscribed.</p>
          )}

          {status === "invalid" && (
            <p className="mt-4 text-muted-foreground">
              This unsubscribe link is invalid or has expired.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-destructive">
              {errorMsg || "Something went wrong. Please try again."}
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;