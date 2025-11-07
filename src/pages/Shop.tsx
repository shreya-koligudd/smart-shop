import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Product } from "@/contexts/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Fetch all products
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });

    // Fetch categories
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under50":
          filtered = filtered.filter((product) => product.price < 50);
          break;
        case "50to100":
          filtered = filtered.filter(
            (product) => product.price >= 50 && product.price <= 100
          );
          break;
        case "over100":
          filtered = filtered.filter((product) => product.price > 100);
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange, products]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete collection of premium items
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-card rounded-lg p-6 shadow-sm border"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under50">Under $50</SelectItem>
                <SelectItem value="50to100">$50 - $100</SelectItem>
                <SelectItem value="over100">Over $100</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedCategory !== "all" || priceRange !== "all") && (
            <div className="mt-4">
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-muted-foreground"
        >
          Showing {filteredProducts.length} products
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <LoadingSkeleton key={i} />)
            : filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
        </div>

        {/* No Results */}
        {!loading && filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground mb-4">
              No products found matching your criteria
            </p>
            <Button
              variant="gradient"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
