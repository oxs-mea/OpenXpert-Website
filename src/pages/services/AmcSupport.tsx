import { useState } from "react";
import { Wrench, Clock, Phone, Shield, TrendingUp, Users, CheckCircle, Zap, HeadphonesIcon, ArrowRight, Check, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AmcSupport = () => {
  const [selectedTier, setSelectedTier] = useState("standard");
  const [showSuccess, setShowSuccess] = useState(false);

  const features = [
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Get help when you need it most",
      detail: "4-hour response time"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      detail: "Always available"
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance",
      description: "Regular checkups to prevent issues",
      detail: "Monthly inspections"
    },
    {
      icon: Shield,
      title: "Priority Service",
      description: "Jump to the front of the queue",
      detail: "VIP treatment"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your own technical experts",
      detail: "Consistent support"
    },
    {
      icon: Zap,
      title: "Emergency Response",
      description: "Critical issue resolution",
      detail: "1-hour for emergencies"
    }
  ];

  const tiers = [
    {
      id: "basic",
      name: "Basic Care",
      price: "AED 1,500/month",
      responseTime: "8 hours",
      coverage: "Business hours (9am-6pm)",
      features: [
        "Email and phone support",
        "Quarterly maintenance",
        "Remote assistance",
        "Basic troubleshooting",
        "System health reports"
      ]
    },
    {
      id: "standard",
      name: "Standard Care",
      price: "AED 3,500/month",
      responseTime: "4 hours",
      coverage: "Extended hours (7am-10pm)",
      popular: true,
      features: [
        "Everything in Basic",
        "Monthly on-site visits",
        "Priority phone support",
        "Preventive maintenance",
        "Hardware diagnostics",
        "Software updates",
        "Performance optimization"
      ]
    },
    {
      id: "premium",
      name: "Premium Care",
      price: "AED 7,500/month",
      responseTime: "1 hour",
      coverage: "24/7 availability",
      features: [
        "Everything in Standard",
        "Dedicated account manager",
        "Weekly system checks",
        "Emergency on-site support",
        "Unlimited support tickets",
        "Custom SLA agreements",
        "Spare parts included"
      ]
    }
  ];

  const benefits = [
    {
      title: "Reduced Costs",
      value: "40%",
      description: "Lower than ad-hoc IT support"
    },
    {
      title: "System Uptime",
      value: "99.5%",
      description: "Keep your business running"
    },
    {
      title: "Issue Prevention",
      value: "80%",
      description: "Problems caught early"
    },
    {
      title: "Response Speed",
      value: "5x",
      description: "Faster than without AMC"
    }
  ];

  const testimonials = [
    {
      company: "TechCorp Middle East",
      role: "IT Manager",
      quote: "The AMC support has been invaluable. We've had zero critical downtime in 18 months.",
      rating: 5
    },
    {
      company: "Dubai Retail Group",
      role: "Operations Director",
      quote: "Response times are incredible. Issues are resolved before they impact our business.",
      rating: 5
    },
    {
      company: "Emirates Finance",
      role: "CTO",
      quote: "Best investment we made. The preventive maintenance alone saved us thousands.",
      rating: 5
    }
  ];

  const responseGuarantees = [
    { tier: "Basic", response: "8 hours", resolution: "48 hours", onsite: "5 business days" },
    { tier: "Standard", response: "4 hours", resolution: "24 hours", onsite: "2 business days" },
    { tier: "Premium", response: "1 hour", resolution: "8 hours", onsite: "4 hours" }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            AMC Support Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Comprehensive IT support that keeps you running.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Annual Maintenance Contracts designed to prevent problems before they happen.
          </p>
        </div>

        {/* Animated Support Visual */}
        {/* <div className="glass-strong rounded-3xl p-8 max-w-5xl mx-auto mb-20 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
          <div className="aspect-video glass-card rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <HeadphonesIcon className="w-24 h-24 text-primary/30 animate-glow-pulse" />
              <div className="absolute -top-4 -right-4">
                <div className="glass-card px-3 py-1 rounded-full text-xs text-primary font-bold animate-scale-in">
                  Available Now
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: "Avg Response", value: "2.5 hrs" },
              { label: "Tickets Resolved", value: "98%" },
              { label: "Client Satisfaction", value: "4.9/5" },
              { label: "Uptime Guarantee", value: "99.5%" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl text-center animate-scale-in" style={{ animationDelay: `${400 + i * 100}ms` }}>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Complete IT Care & Support
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Everything you need to keep your IT infrastructure healthy
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
              <div className="text-xs text-primary font-bold">{feature.detail}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Response Time Guarantees */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Our Response Time Guarantees
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Clear SLAs with guaranteed response times
        </p>

        <div className="glass-strong rounded-3xl p-8 max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="text-left py-4 px-4 text-foreground font-semibold">Tier</th>
                <th className="text-center py-4 px-4 text-foreground font-semibold">Response Time</th>
                <th className="text-center py-4 px-4 text-foreground font-semibold">Resolution Target</th>
                <th className="text-center py-4 px-4 text-foreground font-semibold">On-Site Visit</th>
              </tr>
            </thead>
            <tbody>
              {responseGuarantees.map((guarantee, index) => (
                <tr
                  key={index}
                  className={`border-b border-glass-border/50 hover:bg-accent/10 transition-colors ${
                    guarantee.tier === "Standard" ? "bg-primary/5" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-foreground font-medium">{guarantee.tier}</td>
                  <td className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-primary font-bold">{guarantee.response}</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4 text-muted-foreground">{guarantee.resolution}</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">{guarantee.onsite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Why Choose AMC Support?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="glass-card p-8 rounded-3xl text-center transition-all duration-500 hover:scale-105 hover:glow-effect"
            >
              <div className="text-5xl font-bold text-primary mb-2 animate-glow-pulse">
                {benefit.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      {/* <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Choose Your Support Plan
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Flexible contracts with no hidden fees
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`glass-card p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                tier.popular ? "ring-2 ring-primary glow-effect" : ""
              } ${selectedTier === tier.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.popular && (
                <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{tier.responseTime} response</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{tier.coverage}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full glass-card hover:glow-effect">
                Select Plan
              </Button>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:glow-effect"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.company}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your AMC contract today and enjoy peace of mind
          </p>

          {!showSuccess ? (
            <Button
              size="lg"
              className="glass-card hover:glow-effect px-8 py-6 text-lg group"
              onClick={() => setShowSuccess(true)}
            >
              <Wrench className="mr-2 w-5 h-5" />
              Get Your Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <div className="glass-card p-8 rounded-2xl animate-scale-in">
              <Check className="w-16 h-16 text-primary mx-auto mb-4 animate-glow-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Request Received!</h3>
              <p className="text-muted-foreground mb-6">
                Our support team will contact you within 24 hours with a customized quote.
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

export default AmcSupport;