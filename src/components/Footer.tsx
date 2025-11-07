import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Smart Shop
            </h3>
            <p className="text-muted-foreground">
              Your premium destination for quality products and exceptional shopping experience.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Shipping & Returns
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                FAQ
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8 text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Smart Shop. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
