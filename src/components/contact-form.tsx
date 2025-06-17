
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Mail, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be 500 characters or less." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto font-sans">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { // Ensure default values are set to prevent uncontrolled to controlled warning
      name: state.fields?.name || "",
      email: state.fields?.email || "",
      message: state.fields?.message || "",
    }
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        reset({ name: "", email: "", message: "" }); // Reset form fields on success
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to send message.",
          variant: "destructive",
        });
         // If error, repopulate with previous data, or clear if not available
        reset({
          name: state.fields?.name || "",
          email: state.fields?.email || "",
          message: state.fields?.message || ""
        });
      }
    }
  }, [state, toast, reset]);

  // Handle zod validation errors by populating RHF errors for display
   useEffect(() => {
    if (state.issues && !state.success && state.fields) {
      const fieldErrors = state.issues.reduce((acc, issue) => {
        const path = (issue as any).path?.[0] ; // Zod issues have a path property
        if (path && !acc[path]) { // Only set the first error for a field
          acc[path] = { message: issue as any, type: 'manual' };
        }
        return acc;
      }, {} as any);

      Object.keys(fieldErrors).forEach(key => {
        (register(key as keyof ContactFormData) as any).ref({ name: key }); // Dummy ref
         (reset as any)(undefined, { errors: { ...errors, [key]: fieldErrors[key] } });
      });
    }
  }, [state, errors, reset, register]);


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl bg-card text-card-foreground border border-border">
      <CardHeader className="text-center">
        <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
        <CardTitle className="text-3xl font-headline">Get In Touch</CardTitle>
        <CardDescription className="font-sans text-muted-foreground">
          Have a question, a project idea, or just want to say hello? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name" className="font-semibold font-sans">Full Name</Label>
            <Input
              id="name"
              type="text"
              {...register("name")}
              className={`mt-1 font-sans ${errors.name ? "border-destructive" : ""}`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && <p id="name-error" className="text-sm text-destructive mt-1 font-sans">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="font-semibold font-sans">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-1 font-sans ${errors.email ? "border-destructive" : ""}`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="text-sm text-destructive mt-1 font-sans">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="font-semibold font-sans">Message</Label>
            <Textarea
              id="message"
              {...register("message")}
              rows={5}
              className={`mt-1 font-sans ${errors.message ? "border-destructive" : ""}`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && <p id="message-error" className="text-sm text-destructive mt-1 font-sans">{errors.message.message}</p>}
          </div>
          
          {state.issues && !state.success && !errors.name && !errors.email && !errors.message && (
            <div className="text-sm text-destructive font-sans">
              {state.issues.map((issue, i) => <p key={i}>{issue}</p>)}
            </div>
          )}

          <div className="pt-2">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
