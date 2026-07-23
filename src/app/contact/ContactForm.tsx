"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { submitContactForm } from "@/lib/api";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    try {
      await submitContactForm({
        name: String(form.get("name") ?? ""),
        organisation: String(form.get("organisation") ?? ""),
        enquiryType: String(form.get("enquiryType") ?? ""),
        email: String(form.get("email") ?? ""),
        message: String(form.get("message") ?? ""),
      });
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-panel p-8 rounded-sm">
        <div className="eyebrow mb-3">Request received</div>
        <p className="text-paper">
          Thanks — our technical design team will be in touch shortly to scope your site.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Name" name="name" placeholder="Your name" required />
      <Input label="Organisation" name="organisation" placeholder="Company or municipality" />
      <Input label="Email" name="email" type="email" placeholder="you@company.com" required />
      <Input
        label="Enquiry type"
        name="enquiryType"
        as="select"
        options={[
          "New installation",
          "Upgrade existing system",
          "Monitoring & response contract",
          "Maintenance",
          "Other",
        ]}
      />
      <Input label="Message" name="message" as="textarea" placeholder="Tell us about the site" />
      <div className="flex items-center gap-4">
        <Button type="submit" variant="solid" className="w-fit">
          {status === "loading" ? "Sending…" : "Send request"}
        </Button>
        {status === "error" && <span className="text-orange text-sm">{errorMsg}</span>}
      </div>
    </form>
  );
}
