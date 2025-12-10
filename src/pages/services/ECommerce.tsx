import { useState } from "react";
import { ShoppingCart, Zap, CreditCard, Package, TrendingUp, Smartphone, Search, Shield, ArrowRight, Check, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ECommerce = () => {
  const [selectedTheme, setSelectedTheme] = useState("modern");
  const [showSuccess, setShowSuccess] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with 95+ PageSpeed scores",
      stat: "<1s load time"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive layouts that convert on any device",
      stat: "60% mobile traffic"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Multiple payment gateways, secure checkout",
      stat: "20+ gateways"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built for search engines from the ground up",
      stat: "Top 3 rankings"
    },
    {
      icon: Package,
      title: "Inventory Sync",
      description: "Real-time stock management and alerts",
      stat: "99.9% accuracy"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "PCI-DSS compliant, SSL encrypted",
      stat: "Bank-level security"
    }
  ];

  const themes = [
    { id: "modern", name: "Modern", color: "from-blue-500 to-purple-500" },
    { id: "minimal", name: "Minimal", color: "from-gray-800 to-gray-600" },
    { id: "vibrant", name: "Vibrant", color: "from-pink-500 to-orange-500" }
  ];

  const packages = [
    {
      name: "Starter Store",
      price: "Starting at AED 15,000",
      features: [
        "Up to 100 products",
        "1 payment gateway",
        "Mobile responsive",
        "Basic SEO setup",
        "Contact form",
        "3 months support"
      ]
    },
    {
      name: "Business Store",
      price: "Starting at AED 30,000",
      popular: true,
      features: [
        "Unlimited products",
        "Multiple payment gateways",
        "Advanced SEO",
        "Analytics dashboard",
        "Cart recovery",
        "1 year support",
        "Custom features"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      features: [
        "Everything in Business",
        "Multi-vendor support",
        "Custom integrations",
        "Dedicated manager",
        "Priority support",
        "Advanced analytics",
        "Scalable infrastructure"
      ]
    }
  ];

  const conversionFeatures = [
    { label: "One-Page Checkout", increase: "35% higher conversion" },
    { label: "Smart Product Filters", increase: "40% more engagement" },
    { label: "Cart Abandonment Recovery", increase: "25% recovered sales" },
    { label: "Wishlist & Compare", increase: "50% return visitors" }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Custom E-Commerce Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Beautiful stores that convert visitors into customers.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and built to sell. From concept to launch, we create online stores that drive revenue.
          </p>
        </div>

        {/* Animated Store Preview */}
        {/*<div className="glass-strong rounded-3xl p-8 max-w-5xl mx-auto mb-20 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
          <div className="aspect-video glass-card rounded-2xl flex items-center justify-center relative overflow-hidden">
            <ShoppingCart className="w-24 h-24 text-primary/30 animate-glow-pulse" />
            <div className="absolute top-4 right-4">
              <div className="glass-card px-4 py-2 rounded-full text-sm text-primary font-medium animate-scale-in">
                Live Demo Available
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "Products", value: "10K+" },
              { label: "Orders/day", value: "500+" },
              { label: "Conversion", value: "3.8%" },
              { label: "Avg. Order", value: "AED 450" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl text-center animate-scale-in" style={{ animationDelay: `${400 + i * 100}ms` }}>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>*/}
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Everything You Need to Sell Online
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Powerful features that drive sales and delight customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group glass-card p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:glow-effect cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
              <div className="text-xs text-primary font-bold">{feature.stat}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Theme Playground */}
      {/* <section className="container mx-auto px-6 py-20">
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Live Theme Customizer
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            See your store come to life with real-time theme previews
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`glass-card p-6 rounded-2xl transition-all duration-300 ${
                  selectedTheme === theme.id ? "ring-2 ring-primary glow-effect" : ""
                }`}
              >
                <div className={`h-20 rounded-xl bg-gradient-to-r ${theme.color} mb-4`} />
                <div className="text-foreground font-medium">{theme.name}</div>
              </button>
            ))}
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center">
              <Play className="w-12 h-12 text-primary mx-auto mb-4 animate-glow-pulse" />
              <p className="text-muted-foreground">
                Selected Theme: <span className="text-primary font-semibold">{themes.find(t => t.id === selectedTheme)?.name}</span>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Conversion Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Conversion-Optimized Features
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Every feature is designed to increase sales
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {conversionFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl flex items-center justify-between hover:glow-effect transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-primary" />
                <span className="text-lg text-foreground font-medium">{feature.label}</span>
              </div>
              <div className="text-primary font-bold">{feature.increase}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}
      {/* <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Choose Your Package
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Transparent pricing with no hidden fees
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`glass-card p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                pkg.popular ? "ring-2 ring-primary glow-effect" : ""
              }`}
            >
              {pkg.popular && (
                <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full glass-card hover:glow-effect">
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Launch Your Store?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build an e-commerce experience that your customers will love
          </p>

          {!showSuccess ? (
            <Button
              size="lg"
              className="glass-card hover:glow-effect px-8 py-6 text-lg group"
              onClick={() => setShowSuccess(true)}
            >
              <ShoppingCart className="mr-2 w-5 h-5" />
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <div className="glass-card p-8 rounded-2xl animate-scale-in">
              <Check className="w-16 h-16 text-primary mx-auto mb-4 animate-glow-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Request Received!</h3>
              <p className="text-muted-foreground mb-6">
                Our e-commerce specialists will contact you within 24 hours.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="glass-card">
                  Contact Us Directly
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ECommerce;