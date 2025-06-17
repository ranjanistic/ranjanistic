import { ContactForm } from '@/components/contact-form';
import { SectionContainer, SectionHeader } from '@/components/ui/section-container';
import { MapPin, Phone, Mailbox } from 'lucide-react';

export const metadata = {
  title: 'Contact | Priyanshu Ranjan',
  description: 'Get in touch with Priyanshu Ranjan for collaborations, inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <SectionContainer id="contact-section" animated>
      <SectionHeader title="Contact Me" subtitle="Let's Connect" />
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-serif">
        I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out using the form below or through my social channels.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
          <MapPin className="h-10 w-10 text-primary mb-3" />
          <h3 className="text-xl font-headline text-foreground mb-1">Location</h3>
          <p className="text-muted-foreground font-serif">New Delhi, India (Open to remote)</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
          <Mailbox className="h-10 w-10 text-primary mb-3" />
          <h3 className="text-xl font-headline text-foreground mb-1">Email</h3>
          <a href="mailto:hello@priyanshuranjan.dev" className="text-muted-foreground hover:text-primary font-serif break-all">hello@priyanshuranjan.dev</a>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
          <Phone className="h-10 w-10 text-primary mb-3" />
          <h3 className="text-xl font-headline text-foreground mb-1">Phone</h3>
          <p className="text-muted-foreground font-serif">(Available upon request)</p>
        </div>
      </div>

      <ContactForm />
    </SectionContainer>
  );
}
