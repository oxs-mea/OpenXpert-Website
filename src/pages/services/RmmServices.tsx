import { useState } from "react";
import { Monitor, Shield, Bell, TrendingUp, Clock, Wifi, HardDrive, Cpu, Activity, AlertTriangle, CheckCircle, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const RmmServices = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [simulationActive, setSimulationActive] = useState(false);

  const features = [
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of all your systems",
      benefit: "99.9% uptime"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Real-time notifications for any issues",
      benefit: "<5min response"
    },
    {
      icon: Shield,
      title: "Threat Protection",
      description: "Proactive security monitoring and patching",
      benefit: "Zero-day protection"
    },
    {
      icon: HardDrive,
      title: "Automated Backups",
      description: "Daily backups with instant recovery options",
      benefit: "15-min recovery"
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Keep systems running at peak efficiency",
      benefit: "30% faster"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered insights to prevent issues",
      benefit: "85% issue prevention"
    }
  ];

  const monitoringMetrics = [
    { icon: Activity, label: "CPU Usage", value: "42%", status: "healthy" },
    { icon: HardDrive, label: "Disk Space", value: "68%", status: "healthy" },
    { icon: Wifi, label: "Network", value: "125 Mbps", status: "healthy" },
    { icon: Clock, label: "Uptime", value: "99.98%", status: "excellent" }
  ];

  const tiers = [
    {
      name: "Essential",
      price: "AED 2,500/month",
      devices: "Up to 25 devices",
      features: [
        "24/7 system monitoring",
        "Automated alerts",
        "Monthly reports",
        "Email support",
        "Basic patching"
      ]
    },
    {
      name: "Professional",
      price: "AED 5,000/month",
      devices: "Up to 100 devices",
      popular: true,
      features: [
        "Everything in Essential",
        "Real-time dashboards",
        "Automated patching",
        "Priority phone support",
        "Backup management",
        "Performance optimization"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      devices: "Unlimited devices",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantees",
        "On-site support available"
      ]
    }
  ];

  const benefits = [
    {
      title: "Reduced Downtime",
      stat: "95%",
      description: "Issues detected and resolved before impact"
    },
    {
      title: "Cost Savings",
      stat: "60%",
      description: "Reduction in emergency IT costs"
    },
    {
      title: "Faster Resolution",
      stat: "10x",
      description: "Problems fixed before users notice"
    },
    {
      title: "Security Updates",
      stat: "100%",
      description: "All systems always patched and protected"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            RMM Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Never worry about IT infrastructure again.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            24/7 remote monitoring and management that keeps your business running smoothly.
          </p>
        </div>

        
        <div className="glass-strong rounded-3xl p-8 max-w-5xl mx-auto mb-20 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
          <div className="aspect-video glass-card rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <Monitor className="w-24 h-24 text-primary/30 animate-glow-pulse" />
              <div className="absolute -top-8 -left-8">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
              </div>
              <div className="absolute -top-8 -right-8">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: "0.5s" }} />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: "1s" }} />
              </div>
              <div className="absolute -bottom-8 -right-8">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: "1.5s" }} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {monitoringMetrics.map((metric, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl animate-scale-in" style={{ animationDelay: `${400 + i * 100}ms` }}>
                <metric.icon className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                <div className="text-xl font-bold text-foreground">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Comprehensive Monitoring & Management
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Protect your infrastructure with enterprise-grade monitoring
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
              <div className="text-xs text-primary font-bold">{feature.benefit}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Live Status Simulation */}
      {/* <section className="container mx-auto px-6 py-20">
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Live Dashboard Preview
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            See how our monitoring system keeps your infrastructure healthy
          </p>

          {!simulationActive ? (
            <div className="text-center">
              <Button
                size="lg"
                className="glass-card hover:glow-effect px-8 py-6 text-lg"
                onClick={() => setSimulationActive(true)}
              >
                <Activity className="mr-2 w-5 h-5" />
                Start Live Simulation
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { type: "success", message: "All systems operational", icon: CheckCircle },
                { type: "info", message: "Backup completed successfully", icon: HardDrive },
                { type: "warning", message: "High CPU usage detected - optimizing", icon: AlertTriangle },
                { type: "success", message: "Security patch applied", icon: Shield }
              ].map((alert, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-2xl flex items-center gap-4 animate-slide-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <alert.icon className={`w-6 h-6 ${
                    alert.type === "success" ? "text-green-500" :
                    alert.type === "warning" ? "text-yellow-500" :
                    "text-primary"
                  }`} />
                  <span className="text-foreground">{alert.message}</span>
                  <span className="ml-auto text-xs text-muted-foreground">Just now</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* Benefits Stats */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Measurable Business Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="glass-card p-8 rounded-3xl text-center transition-all duration-500 hover:scale-105 hover:glow-effect"
            >
              <div className="text-5xl font-bold text-primary mb-2 animate-glow-pulse">
                {benefit.stat}
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
          Choose Your Monitoring Plan
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Flexible plans that scale with your business
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`glass-card p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                tier.popular ? "ring-2 ring-primary glow-effect" : ""
              }`}
            >
              {tier.popular && (
                <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
              <div className="text-sm text-muted-foreground mb-6">{tier.devices}</div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
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
            Ready to Protect Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start monitoring your systems today with a free 30-day trial
          </p>

          {!showDemo ? (
            <Button
              size="lg"
              className="glass-card hover:glow-effect px-8 py-6 text-lg group"
              onClick={() => setShowDemo(true)}
            >
              <Monitor className="mr-2 w-5 h-5" />
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <div className="glass-card p-8 rounded-2xl animate-scale-in">
              <Check className="w-16 h-16 text-primary mx-auto mb-4 animate-glow-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Request Received!</h3>
              <p className="text-muted-foreground mb-6">
                Our RMM specialists will set up your trial within 24 hours.
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

export default RmmServices;