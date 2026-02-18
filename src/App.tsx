import React, { useState } from "react";
import { motion } from "motion/react";
import { Analytics } from "@vercel/analytics/react"
import {
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Sparkles,
  PenTool,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { CountdownTimer } from "./components/CountdownTimer";
import { ProductCard } from "./components/ProductCard";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
// @ts-ignore
import heroBackground from "./assets/hero-background.png";

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Set launch date to 11:11 AM IST on Feb 19, 2026
  const launchDate = new Date('2026-02-19T11:11:00+05:30');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const response = await fetch("https://script.google.com/macros/s/AKfycbycZUQxZbEuAqnkClGx2HFCqVvZpvd07G-hNLATgr9ECjvNbblL0B4DQXbgisoTOqsa/exec", {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email })
    });

    toast.success(
      "Thank you for joining our early community!",
      {
        description: "We'll notify you when we launch.",
      },
    );

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Analytics />
      <Toaster />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${heroBackground}')`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Brand */}
            <div className="mb-8">
              <h2 className="font-serif text-white text-4xl tracking-wider mb-2">
                CornerInch
              </h2>
              <div className="h-px w-24 bg-white/40 mx-auto" />
            </div>

            
            {/* Launching Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
              {/* <Sparkles className="w-8 h-8 text-white" /> */}
              <span className="text-sm text-white uppercase tracking-widest text-xl">
                Launching In
              </span>
            </div>
              
            {/* Countdown Timer */}
            <div className="mb-8">
              <CountdownTimer targetDate={launchDate} />
            </div>

            {/* Headline */}
            <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              A Curated Marketplace where Design meets Lifestyle.
            </h1>

            {/* Subtext */}
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover timeless furniture and home décor from
              exceptional designers.
            </p>

            {/* Countdown Timer */}
            {/* <div className="mb-12">
              <CountdownTimer targetDate={launchDate} />
            </div> */}

            {/* Email Signup */}
            <form
              onSubmit={handleEmailSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/95 backdrop-blur-sm border-white/40 placeholder:text-gray-500 min-h-40"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 border-0"
                >
                  {isSubmitting ? "Submitting..." : "Notify Me"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="font-raleway text-4xl md:text-5xl mb-8"
            style={{ color: "var(--gray-900)" }}
          >
            Thoughtfully Curated for You
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed mb-12"
            style={{ color: "var(--gray-600)" }}
          >
            We bring together design lovers and creators of
            unique, sustainable home pieces. Each item in our
            marketplace is carefully selected for its
            craftsmanship, timeless appeal, and the story it
            brings to your space.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <PenTool
                  className="w-8 h-8"
                  style={{ color: "var(--gray-700)" }}
                />
              </div>
              <h3
                className="font-serif text-xl mb-2"
                style={{ color: "var(--gray-900)" }}
              >
                Design Excellence
              </h3>
              <p style={{ color: "var(--gray-600)" }}>
                Every item is carefully selected by design professionals for its craftsmanship and style.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <ShieldCheck
                  className="w-8 h-8"
                  style={{ color: "var(--gray-700)" }}
                />
              </div>
              <h3
                className="font-serif text-xl mb-2"
                style={{ color: "var(--gray-900)" }}
              >
                Quality You Can Trust
              </h3>
              <p style={{ color: "var(--gray-600)" }}>
                Only the highest standards of materials and construction make the cut.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Award
                  className="w-8 h-8"
                  style={{ color: "var(--gray-700)" }}
                />
              </div>
              <h3
                className="font-serif text-xl mb-2"
                style={{ color: "var(--gray-900)" }}
              >
                Verified Premium Brands
              </h3>
              <p style={{ color: "var(--gray-600)" }}>
                Shop with confidence — every creator and brand is vetted for authenticity.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sneak Peek Section */}
      {/* <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--warm-cream)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2
              className="font-serif text-4xl md:text-5xl mb-4"
              style={{ color: "var(--warm-dark)" }}
            >
              Sneak Peek
            </h2>
            <p
              className="text-lg"
              style={{ color: "var(--warm-brown)" }}
            >
              A preview of the exceptional pieces coming soon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* Community/Newsletter Section */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--gray-100)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="font-serif text-4xl md:text-5xl mb-6"
            style={{ color: "var(--gray-900)" }}
          >
            Join Our Early Community
          </h2>
          <p
            className="text-lg md:text-xl mb-8"
            style={{ color: "var(--gray-600)" }}
          >
            Be the first to discover new arrivals, exclusive
            launches, and design inspiration.
          </p>

          {/* Email Signup Form */}
          <form
            onSubmit={handleEmailSubmit}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border-gray-300"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 border-0"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>

          {/* Social Media Icons */}
          {/* <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Instagram"
            >
              <Instagram
                className="w-5 h-5"
                style={{ color: "var(--gray-700)" }}
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Facebook"
            >
              <Facebook
                className="w-5 h-5"
                style={{ color: "var(--gray-700)" }}
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter
                className="w-5 h-5"
                style={{ color: "var(--gray-700)" }}
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Email"
            >
              <Mail
                className="w-5 h-5"
                style={{ color: "var(--gray-700)" }}
              />
            </a>
          </div> */}
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 border-t bg-white"
        style={{ borderColor: "var(--gray-200)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3
                className="font-serif text-2xl mb-2"
                style={{ color: "var(--gray-900)" }}
              >
                CornerInch
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--gray-600)" }}
              >
                Curated furniture & home décor marketplace
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href="mailto:hello@CornerInch.com"
                className="text-sm hover:underline"
                style={{ color: "var(--gray-600)" }}
              >
                hello@CornerInch.com
              </a>
              <p
                className="text-sm"
                style={{ color: "var(--gray-600)" }}
              >
                © 2025 CornerInch. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}