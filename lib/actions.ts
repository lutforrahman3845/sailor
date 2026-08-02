"use server";

import { createBooking, createContactMessage, getYachtBySlug } from "./db/queries";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactMessage(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  await createContactMessage({ name, email, subject, message });
  return {
    status: "success",
    message: "Thanks for reaching out — we'll get back to you within one business day.",
  };
}

export async function submitBookingRequest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const yachtSlug = String(formData.get("yacht_slug") ?? "");
  const customer_name = String(formData.get("customer_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const check_in = String(formData.get("check_in") ?? "");
  const check_out = String(formData.get("check_out") ?? "");
  const guests = Number(formData.get("guests") ?? 0);

  const yacht = await getYachtBySlug(yachtSlug);
  if (!yacht) {
    return { status: "error", message: "Unknown yacht — please reload the page." };
  }
  if (!customer_name || !email || !check_in || !check_out) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (check_out <= check_in) {
    return { status: "error", message: "Check-out must be after check-in." };
  }
  if (!Number.isInteger(guests) || guests < 1 || guests > yacht.max_guests) {
    return {
      status: "error",
      message: `Guests must be between 1 and ${yacht.max_guests} for ${yacht.name}.`,
    };
  }

  await createBooking({
    yacht_id: yacht.id,
    customer_name,
    email,
    check_in,
    check_out,
    guests,
  });
  return {
    status: "success",
    message: `Booking request received for ${yacht.name} — we'll confirm availability by email shortly.`,
  };
}
