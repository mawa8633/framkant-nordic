"use client";

import { useState } from "react";

type FormVariant = "compact" | "full";

export function ContactForm({ variant = "full" }: { variant?: FormVariant }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const data = (await response.json()) as { message?: string };

      if (response.ok) {
        event.currentTarget.reset();
        setStatus("success");
        setMessage(data.message ?? "Thank you. Your request has been received.");
        return;
      }

      setStatus("error");
      setMessage(data.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Unable to submit right now. Please try again in a moment.");
    }
  }

  if (variant === "compact") {
    return (
      <form className="contact-form compact-form" onSubmit={handleSubmit}>
        <input name="formType" type="hidden" value="compact" />
        <input name="message" type="hidden" value="Homepage growth analysis request" />
        <div className="field">
          <label htmlFor="hero-first-name">Name</label>
          <input id="hero-first-name" name="firstName" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="hero-phone">Phone</label>
          <input id="hero-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="field">
          <label htmlFor="hero-company">Company</label>
          <input id="hero-company" name="company" autoComplete="organization" required />
        </div>
        <button className="button primary" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Sending..." : "Request Analysis"}
        </button>
        {message ? <p className={`form-status ${status}`}>{message}</p> : null}
      </form>
    );
  }

  return (
    <form className="contact-form full-form" onSubmit={handleSubmit}>
      <div className="form-grid two">
        <div className="field">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="field">
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" name="lastName" autoComplete="family-name" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="company">Company Name</label>
        <input id="company" name="company" autoComplete="organization" required />
      </div>
      <div className="form-grid two">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="website">Website (optional)</label>
        <input id="website" name="website" type="url" placeholder="https://" />
      </div>
      <div className="field">
        <label htmlFor="industry">Industry</label>
        <select id="industry" name="industry" defaultValue="">
          <option value="" disabled>
            Select industry
          </option>
          <option>Beauty</option>
          <option>Cleaning</option>
          <option>Future Industries</option>
        </select>
      </div>
      <div className="form-grid two">
        <div className="field">
          <label htmlFor="employees">Number of Employees</label>
          <select id="employees" name="employees" defaultValue="">
            <option value="" disabled>
              Select range
            </option>
            <option>1-5</option>
            <option>6-20</option>
            <option>21-50</option>
            <option>51+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="current-website">Current Website</label>
          <select id="current-website" name="currentWebsite" defaultValue="">
            <option value="" disabled>
              Select answer
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="challenge">Biggest Challenge</label>
        <select id="challenge" name="challenge" defaultValue="">
          <option value="" disabled>
            Select challenge
          </option>
          <option>Low visibility</option>
          <option>Weak website conversion</option>
          <option>Manual follow-up</option>
          <option>No CRM structure</option>
          <option>Unclear reporting</option>
        </select>
      </div>
      <fieldset className="checkbox-group">
        <legend>Services of Interest</legend>
        {["Web Design", "Local SEO", "CRM", "Automation", "Ads", "Reviews", "Analytics"].map((item) => (
          <label key={item}>
            <input name="services" type="checkbox" value={item} />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>
      <div className="form-grid two">
        <div className="field">
          <label htmlFor="contact-method">Preferred Contact Method</label>
          <select id="contact-method" name="contactMethod" defaultValue="">
            <option value="" disabled>
              Select method
            </option>
            <option>Email</option>
            <option>Phone</option>
            <option>Video call</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="meeting-time">Preferred Meeting Time</label>
          <input id="meeting-time" name="meetingTime" placeholder="Example: weekday mornings" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What should improve?</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="button primary" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Sending..." : "Request Growth Analysis"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
