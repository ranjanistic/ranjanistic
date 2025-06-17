
"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form"; // Added Controller here
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { heroData } from "@/lib/data"; 

const designationOptions = [
  "Potential Employer",
  "Mentee",
  "Friend",
  "Just Curious",
  "Other",
] as const;

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  designation: z.enum(designationOptions, {
    errorMap: () => ({ message: "Please select your designation." }),
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be 500 characters or less." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button type="submit" disabled={isLoading} size="lg" className="w-full sm:w-auto font-sans">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
        </>
      ) : (
        <>
          Open Email Client <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    control, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      designation: undefined, 
      message: "",
    }
  });

  const onSubmit = (data: ContactFormData) => {
    const { name, email, message, designation } = data;
    const subject = encodeURIComponent(`Portfolio Contact - ${name} (${designation})`);
    const body = encodeURIComponent(
      `Hello Priyanshu,\n\nMy name is ${name} (${designation}).\nMy email is ${email}.\n\nMessage:\n${message}\n\nBest regards,\n${name}`
    );
    
    const mailtoLink = `mailto:${heroData.email}?subject=${subject}&body=${body}`;
    
    try {
        window.location.href = mailtoLink;
        toast({
            title: "Success!",
            description: "Your email client should open shortly with a pre-filled message.",
        });
    } catch (error) {
        console.error("Failed to open mailto link:", error);
        toast({
            variant: "destructive",
            title: "Error",
            description: "Could not open your email client. Please try copying the email address manually.",
        });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(); 
    }
  }, [isSubmitSuccessful, reset]);

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <Label htmlFor="designation" className="font-semibold font-sans">I am a...</Label>
            <Controller
              name="designation"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                  <SelectTrigger 
                    id="designation" 
                    className={`mt-1 font-sans ${errors.designation ? "border-destructive" : ""}`}
                    aria-invalid={!!errors.designation}
                    aria-describedby="designation-error"
                  >
                    <SelectValue placeholder="Select your designation" />
                  </SelectTrigger>
                  <SelectContent>
                    {designationOptions.map(option => (
                      <SelectItem key={option} value={option} className="font-sans">{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.designation && <p id="designation-error" className="text-sm text-destructive mt-1 font-sans">{errors.designation.message}</p>}
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
          
          <div className="pt-2">
            <SubmitButton isLoading={isSubmitting} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

