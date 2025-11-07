import { motion } from "framer-motion";
import { Heart, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Smart Shop
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize online shopping by combining cutting-edge
            technology with exceptional customer service.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Founded in 2024, Smart Shop began with a simple idea: make online shopping
              smarter, faster, and more enjoyable for everyone. What started as a small team
              of passionate entrepreneurs has grown into a thriving e-commerce platform
              serving thousands of satisfied customers worldwide.
            </p>
            <p>
              We believe that shopping should be an experience, not just a transaction. That's
              why we've invested in creating a platform that's not only beautiful and easy to
              use, but also intelligent and secure. Every feature we build is designed with
              you in mind.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-muted-foreground">
              Your satisfaction is our top priority
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground">
              Built with feedback from our users
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-muted-foreground">
              Only the best makes it to our store
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Always Evolving</h3>
            <p className="text-muted-foreground">
              Continuously improving and innovating
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-12 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="opacity-90">Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for creating
            exceptional shopping experiences. If you're interested in joining our team, we'd
            love to hear from you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
