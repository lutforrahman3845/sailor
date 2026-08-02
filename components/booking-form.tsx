"use client";

import { useActionState } from "react";
import { submitBookingRequest, type FormState } from "@/lib/actions";

const initialState: FormState = { status: "idle", message: "" };

export default function BookingForm({
  yachtSlug,
  maxGuests,
}: {
  yachtSlug: string;
  maxGuests: number;
}) {
  const [state, formAction, pending] = useActionState(submitBookingRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="p-6 bg-primary/10 border-2 border-primary rounded-xl text-secondary font-medium">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="yacht_slug" value={yachtSlug} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-bold text-secondary">Your name</span>
          <input
            name="customer_name"
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
        <label className="block">
          <span className="text-sm font-bold text-secondary">Check in</span>
          <input
            name="check_in"
            type="date"
            required
            className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-secondary">Check out</span>
          <input
            name="check_out"
            type="date"
            required
            className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-bold text-secondary">Guests (max {maxGuests})</span>
          <input
            name="guests"
            type="number"
            min={1}
            max={maxGuests}
            defaultValue={2}
            required
            className="mt-1 w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary"
          />
        </label>
      </div>

      {state.status === "error" && (
        <p className="text-sm font-medium text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
      >
        {pending ? "Sending…" : "Request Booking"}
      </button>
    </form>
  );
}
