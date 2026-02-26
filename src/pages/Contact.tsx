import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSubmitContact } from "@/hooks/useContactSubmissions";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course_interest: "",
    message: "",
  });
  const submitMutation = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    submitMutation.mutate(
      {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        course_interest: form.course_interest.trim() || undefined,
        message: form.message.trim() || undefined,
      },
      {
        onSuccess: () => {
          setForm({ name: "", email: "", phone: "", course_interest: "", message: "" });
        },
      }
    );
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <h1 className="text-4xl font-bold font-display text-primary mb-2">
          Make an Enquiry
        </h1>
        <p className="text-lg text-foreground leading-relaxed">
          Please do not hesitate to contact us directly or fill the enquiry form below to leave us a message.
        </p>
      </section>

      {/* Enquiry Form */}
      <section className="container mx-auto px-2 pb-6 max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-secondary p-6 rounded-2xl shadow-lg border border-primary/20"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-secondary-foreground">Your Name *</Label>
            <Input
              id="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-secondary border-border text-secondary-foreground placeholder:text-secondary-foreground/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-secondary-foreground">Your Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-secondary border-border text-secondary-foreground placeholder:text-secondary-foreground/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-secondary-foreground">Your Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-secondary border-border text-secondary-foreground placeholder:text-secondary-foreground/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course" className="text-secondary-foreground">Course Interested</Label>
            <Input
              id="course"
              placeholder="Course Interested"
              value={form.course_interest}
              onChange={(e) => setForm({ ...form, course_interest: e.target.value })}
              className="bg-secondary border-border text-secondary-foreground placeholder:text-secondary-foreground/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-secondary-foreground">Message</Label>
            <Textarea
              id="message"
              placeholder="Request any other Course or leave a message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="bg-secondary border-border text-secondary-foreground placeholder:text-secondary-foreground/60"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-full font-semibold"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </form>
      </section>

      {/* Global Offices */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold font-display text-primary mb-8 text-center">
          Our Global Offices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-secondary border border-primary/20 shadow-lg overflow-hidden">
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-primary">USA</h3>
              <p className="text-secondary-foreground/80">
                Ste 201, 551 S. Apollo Blvd, Melbourne, FL 32901, USA
              </p>
              <p className="text-secondary-foreground/80">+1 (702) 292-3240</p>
              <p className="text-secondary-foreground/80">info@academyaviationonline.com</p>
            </div>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps?q=551%20S.%20Apollo%20Blvd,%20Melbourne,%20FL%2032901&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="USA Office"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-primary/20 shadow-lg overflow-hidden">
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-primary">Europe</h3>
              <p className="text-secondary-foreground/80">
                Prepress House, 25 Victor Denaro Street, Msida, MSD 1604 Malta (EU)
              </p>
              <p className="text-secondary-foreground/80">+356 2180 8221</p>
              <p className="text-secondary-foreground/80">info@academyaviationonline.com</p>
            </div>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1078.5321056563232!2d14.48770758416482!3d35.89937423383858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e5a89f323a83b%3A0x9cd2505f799d8d23!2sAcademy%20147%20Limited!5e0!3m2!1sen!2sin!4v1771931453558!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Europe Office"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
