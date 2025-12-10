import { useState } from "react";
import { Server, Database, Users, BarChart3, Package, DollarSign, Factory, FileText, ArrowRight, Check, X, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ErpSystems = () => {
  const [employees, setEmployees] = useState(50);
  const [departments, setDepartments] = useState(5);
  const [showCalendar, setShowCalendar] = useState(false);

  const calculateROI = () => {
    const savings = employees * 150 * 12;
    const timesSaved = employees * 2.5;
    const productivity = 35;
    return { savings, timesSaved, productivity };
  };

  const roi = calculateROI();

  const modules = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reordering, multi-warehouse support",
      benefits: "Reduce stock-outs by 85%"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Payroll, attendance, leave management, performance tracking",
      benefits: "Save 20 hours/week on HR tasks"
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting",
      description: "General ledger, accounts payable/receivable, financial reporting",
      benefits: "Close books 10x faster"
    },
    {
      icon: BarChart3,
      title: "CRM & Sales",
      description: "Lead tracking, opportunity management, sales forecasting",
      benefits: "Increase conversions by 40%"
    },
    {
      icon: Package,
      title: "Purchase Management",
      description: "Vendor management, purchase orders, procurement workflows",
      benefits: "Reduce purchasing costs by 15%"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production planning, bill of materials, shop floor control",
      benefits: "Optimize production by 30%"
    },
    {
      icon: FileText,
      title: "Reporting & Analytics",
      description: "Real-time dashboards, custom reports, predictive analytics",
      benefits: "Make data-driven decisions"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect all your systems, APIs, automated data sync",
      benefits: "Eliminate manual data entry"
    }
  ];

  const features = [
    { name: "Cloud-Based Architecture", us: true, them: false },
    { name: "Real-Time Analytics", us: true, them: true },
    { name: "Mobile Access", us: true, them: false },
    { name: "Customizable Workflows", us: true, them: true },
    { name: "24/7 Support", us: true, them: false },
    { name: "Automated Backups", us: true, them: true },
    { name: "Multi-Currency Support", us: true, them: false },
    { name: "API Integration", us: true, them: false },
    { name: "Free Updates", us: true, them: false },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section with Animated Dashboard */}
      <section className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16 animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            ERP Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Powerful systems made wonderfully simple.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business with intelligent automation, real-time insights, and seamless integration.
          </p>
        </div>

        {/* Animated Dashboard Preview */}
        {/*<div className="glass-strong rounded-3xl p-8 max-w-5xl mx-auto mb-20 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Revenue", value: "$2.4M", trend: "+12%" },
              { label: "Orders", value: "1,847", trend: "+8%" },
              { label: "Inventory", value: "94%", trend: "+3%" },
              { label: "Efficiency", value: "87%", trend: "+15%" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl animate-scale-in" style={{ animationDelay: `${400 + i * 100}ms` }}>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-primary">{stat.trend}</div>
              </div>
            ))}
          </div>
          <div className="h-48 glass-card rounded-2xl flex items-center justify-center">
            <BarChart3 className="w-16 h-16 text-primary/30 animate-glow-pulse" />
          </div>
        </div>*/}
      </section>

      {/* Modules Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Comprehensive ERP Modules
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Everything you need to run your business, all in one place
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group glass-card p-6 rounded-3xl transition-all duration-500 hover:scale-105 hover:glow-effect cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <module.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
              <div className="text-xs text-primary font-medium">{module.benefits}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
     {/* <section className="container mx-auto px-6 py-20">
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Calculate Your ROI
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            See how much you could save with our ERP system
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <Label htmlFor="employees" className="text-foreground mb-2 block">
                Number of Employees
              </Label>
              <Input
                id="employees"
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="glass-card border-glass-border"
              />
            </div>
            <div>
              <Label htmlFor="departments" className="text-foreground mb-2 block">
                Number of Departments
              </Label>
              <Input
                id="departments"
                type="number"
                value={departments}
                onChange={(e) => setDepartments(Number(e.target.value))}
                className="glass-card border-glass-border"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">Estimated Yearly Savings</div>
              <div className="text-3xl font-bold text-primary animate-glow-pulse">
                ${roi.savings.toLocaleString()}
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">Time Saved (hours/month)</div>
              <div className="text-3xl font-bold text-primary animate-glow-pulse">
                {roi.timesSaved.toLocaleString()}
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-sm text-muted-foreground mb-2">Productivity Increase</div>
              <div className="text-3xl font-bold text-primary animate-glow-pulse">
                {roi.productivity}%
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="glass-card hover:glow-effect">
              Export to PDF
            </Button>
          </div>
        </div>
      </section>*/}

      {/* Features Comparison */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Why OpenXpert ERP?
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          See how we compare to other solutions
        </p>

        <div className="glass-strong rounded-3xl p-8 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">OpenXpert (OXS)</th>
                <th className="text-center py-4 px-4 text-muted-foreground font-semibold">Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-glass-border/50 hover:bg-accent/10 transition-colors"
                >
                  <td className="py-4 px-4 text-foreground">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.us ? (
                      <Check className="w-6 h-6 text-primary mx-auto animate-scale-in" />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground/30 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.them ? (
                      <Check className="w-6 h-6 text-muted-foreground/50 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground/30 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and see how our ERP system can revolutionize your operations.
          </p>

          {!showCalendar ? (
            <Button
              size="lg"
              className="glass-card hover:glow-effect px-8 py-6 text-lg group"
              onClick={() => setShowCalendar(true)}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule ERP Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <div className="glass-card p-8 rounded-2xl animate-scale-in">
              <Check className="w-16 h-16 text-primary mx-auto mb-4 animate-glow-pulse" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Request Received!</h3>
              <p className="text-muted-foreground mb-6">
                Our team will contact you within 24 hours to schedule your personalized demo.
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

export default ErpSystems;
