const About = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 font-display text-4xl font-bold text-foreground">About Academy Aviation Online</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Academy Aviation Online is a global leader in aviation education, delivering high-quality pilot training
        and aviation courses to students in over 135 countries. Our courses are designed by experienced
        airline captains, flight instructors, and aviation safety experts.
      </p>
      <p className="mb-6 text-muted-foreground">
        We partner with flight schools, airlines, and regulatory bodies worldwide to ensure our content
        meets the highest industry standards. Our platform integrates seamlessly with Canvas LMS for
        a streamlined learning experience.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Expert Instructors", desc: "Learn from airline captains and industry professionals with decades of experience." },
          { title: "Global Access", desc: "Study from anywhere with multi-currency support and localized content." },
          { title: "Industry Recognized", desc: "Earn certifications aligned with FAA, EASA, and ICAO standards." },
        ].map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
            <h3 className="mb-2 font-display font-bold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
