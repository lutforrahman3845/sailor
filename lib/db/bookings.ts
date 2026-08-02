import type { BookingRow } from "./schema";

/** In-memory table; rows are appended by createBooking() and lost on restart. */
export const bookings: BookingRow[] = [];
