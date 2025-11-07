import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Product, useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <LoadingSkeleton />
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-1/4 animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
              <div className="h-12 bg-muted rounded w-3/4 animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
              <div className="h-32 bg-muted rounded animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:1000px_100%]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/shop">
            <Button variant="gradient">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/shop">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-24 bg-muted rounded-lg p-12 aspect-square">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(product.rating.rate)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              <div className="text-4xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  -
                </Button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-l-none"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-8 border-t">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">
                    On orders over $50
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Secure Payment</div>
                  <div className="text-sm text-muted-foreground">
                    100% secure transactions
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RotateCcw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Easy Returns</div>
                  <div className="text-sm text-muted-foreground">
                    30-day return policy
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
