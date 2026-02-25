import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Award, BookOpen, Plane, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero.jpg";

const TypingText = ({ text, speed = 150 }: { text: string; speed?: number }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="text-primary block">{displayed}<span className="border-r-2 border-primary animate-blink ml-1"></span></span>;
};

const stats = [
  { icon: Users, value: "25,000+", label: "Students Worldwide" },
  { icon: Globe, value: "135+", label: "Countries Served" },
  { icon: Award, value: "98%", label: "Pass Rate" },
  { icon: BookOpen, value: "50+", label: "Expert Courses" },
];

const features = [
  { icon: Plane, title: "Expert Instructors", desc: "Learn from airline captains and industry professionals with decades of experience." },
  { icon: Shield, title: "Industry Certified", desc: "Earn certifications aligned with FAA, EASA, and ICAO international standards." },
  { icon: Globe, title: "Study Anywhere", desc: "Access courses from anywhere in the world with multi-currency support." },
  { icon: Headphones, title: "24/7 Support", desc: "Get help anytime with our dedicated student support team." },
];

const Index = () => {
  const featured = courses.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Decorative flight paths */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full border border-white/5 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border border-white/5" />
          <motion.div
            initial={{ x: 0, y: 0, rotate: 0, opacity: 0.5, scale: 0.8 }}
            animate={{
              x: [0, 300, 600, 900],           // horizontal movement
              y: [0, -50, 50, -20],            // vertical bobbing path
              rotate: [0, 15, -10, 0],          // slight rotation to simulate turning
              opacity: [0.5, 1, 0.8, 0.5],     // fade in and out
              scale: [0.8, 1, 0.9, 0.8]        // subtle scaling like perspective
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-0"
          >
            <Plane className="h-6 w-6 text-primary/70" />
          </motion.div>
        </div>

        <div className="container relative mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary"
            >
              <Plane className="h-4 w-4" />
              Global Aviation Training Platform
            </motion.span>
            <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Your Gateway <br />
              <TypingText text="To Aviation" /> Knowledge
            </h1>
            <p className="mb-8 text-lg text-white/70 md:text-xl max-w-2xl">
              Learn from industry experts, enhance your skills, and explore new career opportunities in aviation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                  Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  className="rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-8"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-float text-center"
              >
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-2xl font-bold text-foreground md:text-3xl font-display">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Our Programs</span>
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Featured Courses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start your journey with our most popular aviation training programs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/courses">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">The Academy Aviation Advantage</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full border border-white/5" />
        </div>
        <div className="container relative mx-auto px-4">
          <Plane className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Aviation Journey?
          </h2>
          <p className="mb-8 text-white/60 max-w-lg mx-auto">
            Join thousands of pilots and aviation professionals training with Academy Aviation Online.
          </p>
          <Link to="/courses">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
