"use client";

import { useActionState } from "react";
import { submitContactMessage, type FormState } from "@/lib/actions";

const initialState: FormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactMessage, initialState);

  if (state.status === "success") {
    return (
      <div className="p-6 bg-primary/10 border-2 border-primary rounded-xl text-secondary font-medium">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-bold text-secondary">Your name</span>
          <input
            name="name"
            required
            className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            placeholder="Full name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-secondary">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-bold text-secondary">Subject</span>
        <input
          name="subject"
          className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
          placeholder="Charter enquiry, partnership, press…"
        />
      </label>
      <label className="block">
        <span className="text-sm font-bold text-secondary">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary resize-y"
          placeholder="Tell us about your trip…"
        />
      </label>

      {state.status === "error" && (
        <p className="text-sm font-medium text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="px-9 py-4 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
