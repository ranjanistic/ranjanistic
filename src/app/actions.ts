
"use server";

// This file is intentionally left almost empty to remove Server Action functionality
// for static site generation (next export).
// If you need to re-enable server-side contact form submissions,
// you can reimplement the submitContactForm function here.

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

// Example of how the function might look if re-enabled:
/*
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Here you would typically send an email or save to a database
  console.log("Form data submitted:", parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { 
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
*/
