"use client";

import { type FormEvent, useMemo, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import SelectField, { type SelectOption } from "@/components/ui/SelectField";
import type { Dictionary } from "@/i18n/types";

type SubmitState = "idle" | "sending" | "success" | "error";
const projectValues = [
  "website",
  "web-app",
  "mobile-app",
  "backend",
  "other",
] as const;
const budgetValues = [
  "under-1000",
  "1000-2500",
  "2500-5000",
  "5000-plus",
  "not-sure",
] as const;

export default function Contact({
  messages,
}: {
  messages: Dictionary["contact"];
}) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  const projectTypeOptions = useMemo<readonly SelectOption[]>(
    () =>
      projectValues.map((value, index) => ({
        value,
        label: messages.projectTypes[index],
      })),
    [messages.projectTypes],
  );
  const budgetOptions = useMemo<readonly SelectOption[]>(
    () =>
      budgetValues.map((value, index) => ({
        value,
        label: messages.budgets[index],
      })),
    [messages.budgets],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validation =
      !name || !email || !message
        ? {
            field: !name ? "name" : !email ? "email" : "message",
            message: messages.requiredFields,
          }
        : name.length < 2
          ? { field: "name", message: messages.nameTooShort }
          : !emailIsValid
            ? { field: "email", message: messages.invalidEmail }
            : message.length < 10
              ? { field: "message", message: messages.messageTooShort }
              : null;

    if (validation) {
      setStatus("error");
      setErrorMessage(validation.message);
      document.getElementById(validation.field)?.focus();
      return;
    }

    if (!projectType || !budget) {
      setStatus("error");
      setErrorMessage(messages.requiredSelections);
      document.getElementById(!projectType ? "projectType" : "budget")?.focus();
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      website: formData.get("website"),
      startedAt,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("contact-request-failed");
      form.reset();
      setProjectType("");
      setBudget("");
      setStatus("success");
      setStartedAt(Date.now());
    } catch {
      setStatus("error");
      setErrorMessage(messages.genericError);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="theme-paper border-t border-line"
    >
      <div className="site-container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          <div className="lg:pt-3">
            <SectionLabel>{messages.eyebrow}</SectionLabel>
            <h2 id="contact-heading" className="section-title mt-6">
              {messages.titleLine1}
              <br />
              {messages.titleLine2}
            </h2>
            <p className="section-copy mt-6">{messages.intro}</p>
            <div className="mt-8 border-t border-line pt-6 lg:mt-12">
              <p className="mb-3 text-xs uppercase tracking-[0.15em] text-muted">
                {messages.preferEmail}
              </p>
              <a
                href="mailto:hello@oakflarecr.com"
                className="arrow-link max-w-full border-b border-line pb-1 text-lg font-medium hover:border-copper"
              >
                <span className="break-all sm:break-normal">
                  hello@oakflarecr.com
                </span>
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div>
            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[400px] flex-col justify-center rounded border border-line bg-paper-surface p-6 md:p-8 lg:p-10"
              >
                <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#E87932]/35 bg-[#E87932]/10 text-xl text-copper">
                  ✓
                </span>
                <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted">
                  {messages.sentLabel}
                </p>
                <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {messages.successTitle}
                </h3>
                <p className="section-copy mt-6">{messages.successCopy}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="oakflare-button oakflare-button-outline mt-8 w-fit"
                >
                  {messages.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-busy={status === "sending"}
                aria-label={messages.formLabel}
                className="rounded border border-line bg-paper-surface p-5 md:p-8 lg:p-9"
              >
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="sr-only"
                />
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">
                      {messages.details}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {messages.detailsCopy}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={messages.nameLabel} htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        autoComplete="name"
                        placeholder={messages.namePlaceholder}
                        className={inputClasses}
                      />
                    </Field>
                    <Field label={messages.emailLabel} htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={messages.emailPlaceholder}
                        className={inputClasses}
                      />
                    </Field>
                  </div>
                  <Field label={messages.companyLabel} htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={messages.companyPlaceholder}
                      className={inputClasses}
                    />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      id="projectType"
                      name="projectType"
                      label={messages.projectTypeLabel}
                      placeholder={messages.projectTypePlaceholder}
                      options={projectTypeOptions}
                      value={projectType}
                      onChange={setProjectType}
                      required
                      invalid={status === "error" && !projectType}
                      describedBy={
                        status === "error" && !projectType
                          ? "contact-error"
                          : undefined
                      }
                    />
                    <SelectField
                      id="budget"
                      name="budget"
                      label={messages.budgetLabel}
                      placeholder={messages.budgetPlaceholder}
                      options={budgetOptions}
                      value={budget}
                      onChange={setBudget}
                      required
                      invalid={status === "error" && !budget}
                      describedBy={
                        status === "error" && !budget
                          ? "contact-error"
                          : undefined
                      }
                    />
                  </div>
                  <Field label={messages.messageLabel} htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      placeholder={messages.messagePlaceholder}
                      className={textareaClasses}
                    />
                  </Field>
                </div>
                {status === "error" && (
                  <p
                    id="contact-error"
                    role="alert"
                    className="mt-6 rounded border border-[#a13824]/30 bg-paper px-4 py-3 text-sm leading-6 text-[#8b3020]"
                  >
                    {errorMessage}
                  </p>
                )}
                <div className="mt-8 border-t border-line pt-7">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="oakflare-button oakflare-button-dark w-full sm:w-auto"
                  >
                    {status === "sending" ? messages.sending : messages.submit}
                    <Arrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClasses = "oakflare-field";
const textareaClasses = inputClasses + " min-h-[150px] resize-y leading-7";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="field-label">
        {label}
      </label>
      {children}
    </div>
  );
}
