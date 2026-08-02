import type { ContactMessageRow } from "./schema";

/** In-memory table; rows are appended by createContactMessage() and lost on restart. */
export const contactMessages: ContactMessageRow[] = [];
