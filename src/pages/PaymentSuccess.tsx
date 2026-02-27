import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

const PaymentSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
        <CheckCircle className="h-10 w-10 text-success" />
      </div>
      <h1 className="mb-3 font-display text-3xl font-bold text-foreground">Payment Successful!</h1>
      <p className="mb-2 text-lg text-muted-foreground max-w-md">
        Thank you for your purchase. You will receive a confirmation email shortly.
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        Your enrollment will be processed and you'll receive access to your course materials.
      </p>
      <div className="flex gap-4">
        <Link to="/courses">
          <Button className="rounded-full">
            <Plane className="mr-2 h-4 w-4" /> Browse More Courses
          </Button>
        </Link>
        <Link to="/">
          <Button variant="outline" className="rounded-full">
            Back to Home <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
