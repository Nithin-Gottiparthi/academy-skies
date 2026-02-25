import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    otherCourse: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", course: "", otherCourse: "" });
  };

  return (
    <div className="bg-white min-h-screen text-white">

      {/* Hero / Intro */}
      <section className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <h1 className="text-4xl font-bold font-display text-[#d72027] mb-2">
          Make an Enquiry
        </h1>
        <p className="text-lg text-[#131d2c] leading-relaxed">
          Please do not hesitate to contact us directly or fill the enquiry form below to leave us a message.
        </p>
      </section>

      {/* Enquiry Form */}
      <section className="container mx-auto px-2 pb-6 max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-[#131d2c] p-6 rounded-2xl shadow-lg border border-[#d72027]"
        >
          <Input
            placeholder="Your Name*"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-[#131d2c] text-white placeholder-white/60 border"
          />
          <Input
            type="email"
            placeholder="Your Email*"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-[#131d2c] text-white placeholder-white/60 border"
          />
          <Input
            type="tel"
            placeholder="Your Phone*"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className="bg-[#131d2c] text-white placeholder-white/60 border"
          />
          <Input
            placeholder="Course Interested*"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            required
            className="bg-[#131d2c] text-white placeholder-white/60 border"
          />
          <Textarea
            placeholder="Request any other Course"
            value={form.otherCourse}
            onChange={(e) => setForm({ ...form, otherCourse: e.target.value })}
            rows={3}
            className="bg-[#131d2c] text-white placeholder-white/60 border"
          />
          <Button
            type="submit"
            className="w-full bg-[#d72027] hover:bg-red-600 text-white rounded-full"
          >
            Submit Enquiry
          </Button>
        </form>
      </section>

      {/* Global Offices as Cards */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold font-display text-[#d72027] mb-8 text-center">
          Our Global Offices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* USA Office */}
          <div className="rounded-2xl bg-[#131d2c] border border-[#d72027] shadow-lg overflow-hidden">
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-[#d72027]">USA</h3>
              <p className="text-white/80">
                Ste 201, 551 S. Apollo Blvd, Melbourne, FL 32901, USA
              </p>
              <p className="text-white/80">+1 (702) 292-3240</p>
              <p className="text-white/80">info@academyaviationonline.com</p>
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

          {/* Europe Office */}
          <div className="rounded-2xl bg-[#131d2c] border border-[#d72027] shadow-lg overflow-hidden">
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-[#d72027]">Europe</h3>
              <p className="text-white/80">
                Prepress House, 25 Victor Denaro Street, Msida, MSD 1604 Malta (EU)
              </p>
              <p className="text-white/80">+356 2180 8221</p>
              <p className="text-white/80">info@academyaviationonline.com</p>
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