import heroImage from "@/assets/about-1.jpg";
import networkImage from "@/assets/about2.jpg";
import image3 from "@/assets/about3.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight text-foreground">
              Your Gateway to Aviation E-Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Academy Aviation Online (AAO) is the digital learning division of the Academy Aviation Group,
              combining Canvas LMS with expert aviation instructors to deliver world-class training online.
            </p>
            <Link to="/courses">
              <Button size="lg" className="rounded-full px-8 mt-4">
                Explore Courses
              </Button>
            </Link>
          </div>

          <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Aviation Digital Learning"
              className="w-full object-cover h-96 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display text-primary mb-4">
              Part of a Global Training Network
            </h2>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Backed by Academy Aviation Group — including Academy 147 (Malta, Europe),
              Academy Aviation Maintenance Training (AAMT) in Florida, and ATC Dubai —
              AAO leverages decades of aviation training experience across multiple
              regulatory environments.
            </p>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Every course reflects global standards while staying relevant to real-world
              operational challenges.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={networkImage}
              alt="Global Aviation Network"
              className="w-full object-cover h-80 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Courses & Expertise */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-8 text-center text-foreground">
            Self-Study Courses Designed by Experts
          </h2>
          <p className="leading-relaxed max-w-3xl mx-auto text-center mb-12 text-muted-foreground">
            Our modular courses are created by Subject Matter Experts with years of operational experience.
            Each program blends theory with real-world aviation case studies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Human Factors",
              "Safety Management Systems (SMS)",
              "Aviation Awareness (for MRO and FBO staff)",
              "Suspected Unapproved Parts (SUPs)",
            ].map((course) => (
              <div
                key={course}
                className="rounded-xl border border-primary/20 bg-card px-6 py-4 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <h3 className="font-semibold text-foreground mb-2">{course}</h3>
                <p className="text-sm text-muted-foreground">
                  Expertly designed modules to enhance practical aviation knowledge.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={image3}
              alt="Digital Aviation Learning"
              className="w-full object-cover h-80 md:h-full"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display text-primary">
              Engaging & Flexible Learning
            </h2>
            <p className="leading-relaxed text-secondary-foreground/80">
              AAO's courses go beyond static slides. Learners experience rich multimedia content,
              interactive modules, quizzes, and scenario-based case studies.
            </p>
            <p className="leading-relaxed text-secondary-foreground/80">
              The modular self-paced design ensures flexibility for working professionals
              and aviation students alike.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / CTA */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold font-display text-foreground">
            A Growing Digital Aviation Hub
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Launched in 2025, Academy Aviation Online is committed to becoming
            the global hub for aviation self-study and modular training.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Customized corporate programs can also be developed to meet specific operational
            and regulatory requirements.
          </p>
          <Link to="/courses">
            <Button size="lg" className="rounded-full px-8 mt-4">
              Explore Our Courses
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
