import heroImage from "@/assets/about-1.jpg";
import networkImage from "@/assets/about2.jpg";
import image3 from "@/assets/about3.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Hero Section (Dark) */}
      <section className="bg-white text-white">
        <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-display font-bold leading-tight text-[#131d2c]">
              Your Gateway to Aviation E-Learning
            </h1>
            <p className="text-lg text-[#131d2c] leading-relaxed">
              Academy Aviation Online (AAO) is the digital learning division of the Academy Aviation Group,
              combining Canvas LMS with expert aviation instructors to deliver world-class training online.
            </p>
            <Button size="lg" className="rounded-full px-8 bg-[#d72027] hover:bg-red-600 text-white mt-4">
              Explore Courses
            </Button>
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

      {/* Global Network Section (Dark) */}
      <section className="bg-[#131d2c] text-white container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-display text-[#d72027] mb-4">
            Part of a Global Training Network
          </h2>
          <p className="text-white/80 leading-relaxed">
            Backed by Academy Aviation Group — including Academy 147 (Malta, Europe),
            Academy Aviation Maintenance Training (AAMT) in Florida, and ATC Dubai —
            AAO leverages decades of aviation training experience across multiple
            regulatory environments.
          </p>
          <p className="text-white/80 leading-relaxed">
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
      </section>

      {/* Courses & Expertise Section (White + Blue) */}
      <section className="bg-gradient-to-b from-[#f0f6ff] to-white text-[#131d2c] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-8 text-center text-[#131d2c]">
            Self-Study Courses Designed by Experts
          </h2>
          <p className="leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Our modular courses are created by Subject Matter Experts with years of operational experience.
            Each program blends theory with real-world aviation case studies, helping learners
            connect knowledge to practical applications.
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
                className="rounded-xl border border-[#d72027]/40 bg-white px-6 py-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-[#131d2c] mb-2">{course}</h3>
                <p className="text-sm text-[#131d2c]/80">
                  Expertly designed modules to enhance practical aviation knowledge.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience Section (Dark) */}
      <section className="bg-[#131d2c] text-white container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={image3}
            alt="Digital Aviation Learning"
            className="w-full object-cover h-80 md:h-full"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-display text-[#d72027]">
            Engaging & Flexible Learning
          </h2>
          <p className="leading-relaxed text-white/80">
            AAO’s courses go beyond static slides. Learners experience rich multimedia content,
            interactive modules, quizzes, and scenario-based case studies.
          </p>
          <p className="leading-relaxed text-white/80">
            The modular self-paced design ensures flexibility for working professionals
            and aviation students alike.
          </p>
        </div>
      </section>

      {/* Vision / CTA Section (White + Blue) */}
      <section className="bg-gradient-to-b from-[#f0f6ff] to-white text-[#131d2c] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold font-display text-[#131d2c]">
            A Growing Digital Aviation Hub
          </h2>
          <p className="leading-relaxed">
            Launched in 2025, Academy Aviation Online is committed to becoming
            the global hub for aviation self-study and modular training. Whether you’re new
            to aviation or a seasoned professional, AAO is your trusted e-learning partner.
          </p>
          <p className="leading-relaxed">
            Customized corporate programs can also be developed to meet specific operational
            and regulatory requirements.
          </p>
          <Button size="lg" className="rounded-full px-8 mt-4 bg-[#d72027] hover:bg-red-600 text-white">
            Explore Our Courses
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;