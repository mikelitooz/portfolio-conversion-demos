"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type UseLeadCaptureSubmitOptions = {
  source: string;
  successRedirect?: string;
};

const DEFAULT_WEBHOOK_URL = "https://dev.24manager.ng/webhook/speed-to-lead";

export function useLeadCaptureSubmit({
  source,
  successRedirect = "/thank-you"
}: UseLeadCaptureSubmitOptions) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service") ?? formData.get("problemType"),
      urgency: formData.get("urgency") || "normal",
      postcode: formData.get("postcode"),
      message: formData.get("message") ?? formData.get("details"),
      source,
      page_url: typeof window !== "undefined" ? window.location.href : ""
    };

    try {
      setIsSubmitting(true);
      const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      let result: { success?: boolean } = {};
      try {
        result = (await response.json()) as { success?: boolean };
      } catch {
        result = { success: response.ok };
      }

      const wasSuccessful = result.success ?? response.ok;
      if (!response.ok || !wasSuccessful) {
        setErrorMessage("Please provide your name and phone number.");
        return;
      }

      form.reset();
      router.push(successRedirect);
    } catch (error) {
      console.error("Error submitting lead:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    errorMessage,
    handleLeadSubmit
  };
}
