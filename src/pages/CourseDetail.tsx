import { useParams, Link } from "react-router-dom";
import { Star, Clock, BookOpen, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import { convertPrice } from "@/data/currencies";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useCart } from "@/contexts/CartContext";

const CourseDetail = () => {
  const { slug } = useParams();
  const { currency } = useCurrency();
  const { addItem, isInCart } = useCart();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 font-display text-2xl font-bold">Course Not Found</h1>
        <Link to="/courses"><Button>Back to Courses</Button></Link>
      </div>
    );
  }

  return (
    <>
      <div className="gradient-hero">
        <div className="container mx-auto px-4 py-12">
          <Link to="/courses" className="mb-6 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Badge className="mb-3 border-0 bg-accent/20 text-accent">{course.category}</Badge>
              <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                {course.title}
              </h1>
              <p className="mb-6 text-primary-foreground/80">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" /> {course.rating} ({course.reviewCount.toLocaleString()} reviews)
                </span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.enrollmentCount.toLocaleString()} students</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.lessons} lessons</span>
              </div>
              <p className="mt-3 text-sm text-primary-foreground/60">Instructor: {course.instructor}</p>
            </div>

            <div className="rounded-lg border border-primary-foreground/10 bg-card p-6 text-card-foreground shadow-lg">
              <p className="mb-1 text-sm text-muted-foreground">Price</p>
              <p className="mb-4 text-3xl font-bold">{convertPrice(course.priceUSD, currency)}</p>
              <Button
                className="mb-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                size="lg"
                onClick={() => addItem(course)}
                disabled={isInCart(course.id)}
              >
                {isInCart(course.id) ? "Already in Cart" : "Add to Cart"}
              </Button>
              {isInCart(course.id) && (
                <Link to="/cart"><Button variant="outline" className="w-full">Go to Cart</Button></Link>
              )}
              <ul className="mt-6 space-y-3">
                {course.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
