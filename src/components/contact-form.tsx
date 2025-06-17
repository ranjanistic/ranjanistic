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
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
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
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        reset(); // Reset form fields on success
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to send message.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader className="text-center">
        <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
        <CardTitle className="text-3xl font-headline">Get In Touch</CardTitle>
        <CardDescription className="font-serif">
          Have a question, a project idea, or just want to say hello? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name" className="font-semibold">Full Name</Label>
            <Input
              id="name"
              type="text"
              {...register("name")}
              className={`mt-1 ${errors.name || (state.issues && state.fields?.name === undefined) ? "border-destructive" : ""}`}
              aria-invalid={!!errors.name || (state.issues && state.fields?.name === undefined)}
              aria-describedby="name-error"
            />
            {errors.name && <p id="name-error" className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="font-semibold">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-1 ${errors.email || (state.issues && state.fields?.email === undefined) ? "border-destructive" : ""}`}
              aria-invalid={!!errors.email || (state.issues && state.fields?.email === undefined)}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="text-sm text-destructive mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="font-semibold">Message</Label>
            <Textarea
              id="message"
              {...register("message")}
              rows={5}
              className={`mt-1 ${errors.message || (state.issues && state.fields?.message === undefined) ? "border-destructive" : ""}`}
              aria-invalid={!!errors.message || (state.issues && state.fields?.message === undefined)}
              aria-describedby="message-error"
            />
            {errors.message && <p id="message-error" className="text-sm text-destructive mt-1">{errors.message.message}</p>}
          </div>
          
          {state.issues && !state.success && (
            <div className="text-sm text-destructive">
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
