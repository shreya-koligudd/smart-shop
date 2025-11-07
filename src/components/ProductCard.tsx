import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product, useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50">
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden bg-muted aspect-square">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-4"
            />
            {product.rating.rate >= 4 && (
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
                Bestseller
              </div>
            )}
          </div>
        </Link>

        <CardContent className="flex-1 p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            {product.category}
          </div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors mb-2">
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
            <span className="text-xs text-muted-foreground">
              ({product.rating.count})
            </span>
          </div>
          <div className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            variant="gradient"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
