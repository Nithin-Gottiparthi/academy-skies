import { Link } from "react-router-dom";
import { Trash2, ShoppingCart as CartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { convertPrice } from "@/data/currencies";

const Cart = () => {
  const { items, removeItem, clearCart } = useCart();
  const { currency } = useCurrency();

  const total = items.reduce((sum, item) => sum + item.priceUSD, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center">
        <CartIcon className="mb-4 h-16 w-16 text-muted-foreground/40" />
        <h1 className="mb-2 font-display text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mb-6 text-muted-foreground">Browse our courses and add them to your cart.</p>
        <Link to="/courses"><Button>Browse Courses</Button></Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-8 font-display text-3xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-border bg-card p-4 shadow-card">
              <div className="flex-1">
                <Link to={`/courses/${item.slug}`} className="font-display font-bold text-foreground hover:text-secondary">
                  {item.title}
                </Link>
                <p className="text-sm text-muted-foreground">{item.instructor} · {item.duration}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">{convertPrice(item.priceUSD, currency)}</span>
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-card h-fit">
          <h2 className="mb-4 font-display text-xl font-bold">Order Summary</h2>
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>{items.length} course(s)</span>
            <span>{convertPrice(total, currency)}</span>
          </div>
          <div className="my-4 border-t border-border" />
          <div className="mb-6 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{convertPrice(total, currency)}</span>
          </div>
          <Button className="mb-3 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" size="lg">
            Proceed to Checkout
          </Button>
          <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
