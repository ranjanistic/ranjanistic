"use server";

// This file is intentionally kept minimal for static site generation.
// Server Actions for form submissions are not used in this configuration.

// The ContactFormState type might be used if re-enabling server actions,
// but it's not actively used for the client-side mailto: functionality.
export type ContactFormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
    success: boolean;
};
