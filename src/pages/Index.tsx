import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "25,000+", label: "Students Worldwide" },
  { icon: Globe, value: "135+", label: "Countries Served" },
  { icon: Award, value: "98%", label: "Pass Rate" },
  { icon: BookOpen, value: "50+", label: "Expert Courses" },
];

const Index = () => {
  const featured = courses.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
              ✈ Global Aviation Training
            </span>
            <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              Elevate Your Aviation Career
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              World-class pilot training and aviation courses. Study online from anywhere, earn
              industry-recognized certifications, and take your career to new heights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-2 h-6 w-6 text-secondary" />
              <p className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground">
            Featured Courses
          </h2>
          <p className="text-muted-foreground">
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
            <Button variant="outline" size="lg">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground">
            Ready to Start Your Aviation Journey?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Join thousands of pilots and aviation professionals training with Academy Aviation Online.
          </p>
          <Link to="/courses">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
