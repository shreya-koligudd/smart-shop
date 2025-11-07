import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Start shopping to add items to your cart
          </p>
          <Link to="/shop">
            <Button variant="gradient" size="lg">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-semibold line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground capitalize">
                              {item.category}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="rounded-r-none"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-4 py-2 font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="rounded-l-none"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              ${item.price.toFixed(2)} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Clear Cart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-accent">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-semibold">
                      ${(getCartTotal() * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-bold text-primary">
                      ${(getCartTotal() * 1.1).toFixed(2)}
                    </span>
                  </div>

                  <Button variant="gradient" size="lg" className="w-full mb-3">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Link to="/shop">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                <div className="text-sm text-muted-foreground text-center pt-4 border-t">
                  Secure checkout with encrypted payment
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
