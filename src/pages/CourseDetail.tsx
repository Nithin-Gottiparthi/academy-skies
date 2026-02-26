import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, BookOpen, Users, CheckCircle, ArrowLeft, Plane, Award, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { convertPrice } from "@/data/currencies";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useCart } from "@/contexts/CartContext";
import { useCourseBySlug } from "@/hooks/useCourses";
import { useState } from "react";

const moduleColors = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-primary/15 to-secondary/10",
  "from-secondary/15 to-primary/10",
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
];

const moduleIcons = ["✈️", "⚙️", "🌤️", "🧭", "📋", "🛫"];

const CourseDetail = () => {
  const { slug } = useParams();
  const { currency } = useCurrency();
  const { addItem, isInCart } = useCart();
  const [activeSection, setActiveSection] = useState("overview");
  const { data: course, isLoading } = useCourseBySlug(slug);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mb-4" />
        <p className="text-muted-foreground">Loading course...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <Plane className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
        <h1 className="mb-4 font-display text-2xl font-bold">Course Not Found</h1>
        <Link to="/courses"><Button className="rounded-full">Back to Courses</Button></Link>
      </div>
    );
  }

  const cartItem = {
    id: course.id,
    title: course.title,
    slug: course.slug,
    priceUSD: course.price_usd,
    instructor: course.instructor,
    duration: course.duration,
  };

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "objectives", label: "Objectives" },
    { id: "modules", label: "Modules" },
    { id: "audience", label: "Who Should Attend" },
    { id: "assessment", label: "Assessment" },
    { id: "faq", label: "FAQ" },
    { id: "reviews", label: "Reviews" },
  ];

  const modules = (course.modules || []) as { title: string; description: string; imageKeyword: string }[];
  const faqs = (course.faqs || []) as { question: string; answer: string }[];
  const reviews = (course.reviews || []) as { name: string; role: string; rating: number; comment: string }[];

  return (
    <>
      {/* Hero */}
      <div className="gradient-hero pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/courses" className="mb-6 inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <Badge className="mb-3 border-0 bg-primary/20 text-primary rounded-full">{course.category}</Badge>
              <h1 className="mb-4 font-display text-3xl font-bold text-white md:text-5xl">
                {course.title}
              </h1>
              <p className="mb-6 text-white/70 text-lg">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" /> {course.rating} ({course.review_count.toLocaleString()} reviews)
                </span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.enrollment_count.toLocaleString()} students</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.lessons} lessons</span>
              </div>
              <p className="mt-3 text-sm text-white/50">Instructor: {course.instructor}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-card p-6 text-card-foreground shadow-float"
            >
              <p className="mb-1 text-sm text-muted-foreground">Price</p>
              <p className="mb-4 text-3xl font-bold font-display">{convertPrice(course.price_usd, currency)}</p>
              <Button
                className="mb-3 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                size="lg"
                onClick={() => addItem(cartItem)}
                disabled={isInCart(course.id)}
              >
                {isInCart(course.id) ? "Already in Cart" : "Enroll Now"}
              </Button>
              {isInCart(course.id) && (
                <Link to="/cart"><Button variant="outline" className="w-full rounded-full">Go to Cart</Button></Link>
              )}
              <ul className="mt-6 space-y-3">
                {course.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating section nav */}
      <div className="sticky top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActiveSection(s.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Overview */}
        <section id="overview" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Plane className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Course Overview</h2>
          </div>
          <div className="rounded-2xl bg-muted p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">{course.overview}</p>
          </div>
        </section>

        {/* Learning Objectives */}
        <section id="objectives" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Learning Objectives</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {course.learning_objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-card"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground">{obj}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Course Modules</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all"
              >
                <div className={`h-32 bg-gradient-to-br ${moduleColors[i % moduleColors.length]} flex items-center justify-center`}>
                  <span className="text-4xl">{moduleIcons[i % moduleIcons.length]}</span>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-display font-bold text-foreground">{mod.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{mod.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who Should Attend */}
        <section id="audience" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Who Should Attend?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {course.who_should_attend.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-muted p-5">
                <Plane className="h-5 w-5 text-primary shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Assessment & Certification */}
        <section id="assessment" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Final Assessment & Certification</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-6 shadow-card border border-border">
              <h3 className="mb-3 font-display font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" /> Assessment
              </h3>
              <p className="text-muted-foreground">{course.assessment}</p>
            </div>
            <div className="rounded-2xl gradient-red p-6 text-primary-foreground">
              <h3 className="mb-3 font-display font-bold flex items-center gap-2">
                <Award className="h-5 w-5" /> Certification
              </h3>
              <p className="text-primary-foreground/90">{course.certification}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="px-6 text-left font-display font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Student Reviews</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-card border border-border"
              >
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground italic">"{review.comment}"</p>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseDetail;
