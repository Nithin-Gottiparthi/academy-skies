import { Link } from "react-router-dom";
import { Star, Clock, BookOpen } from "lucide-react";
import { Course } from "@/data/courses";
import { convertPrice } from "@/data/currencies";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CourseCard = ({ course }: { course: Course }) => {
  const { currency } = useCurrency();
  const { addItem, isInCart } = useCart();

  const levelColor = {
    Beginner: "bg-success/10 text-success",
    Intermediate: "bg-secondary/20 text-secondary",
    Advanced: "bg-accent/20 text-accent-foreground",
  }[course.level];

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover">
      <Link to={`/courses/${course.slug}`}>
        <div className="relative h-44 overflow-hidden bg-primary/5">
          <div className="flex h-full w-full items-center justify-center gradient-hero">
            <span className="font-display text-lg font-bold text-primary-foreground/80 text-center px-4">
              {course.title}
            </span>
          </div>
          <Badge className={`absolute left-3 top-3 ${levelColor} border-0`}>
            {course.level}
          </Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {course.category}
        </p>
        <Link to={`/courses/${course.slug}`}>
          <h3 className="mb-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-secondary">
            {course.title}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {course.shortDescription}
        </p>

        <div className="mt-auto">
          <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              {course.rating} ({course.reviewCount.toLocaleString()})
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" /> {course.lessons} lessons
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-foreground">
              {convertPrice(course.priceUSD, currency)}
            </span>
            <Button
              size="sm"
              variant={isInCart(course.id) ? "outline" : "default"}
              onClick={() => addItem(course)}
              disabled={isInCart(course.id)}
            >
              {isInCart(course.id) ? "In Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
