import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              About
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                OpenXpert Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pioneering technology solutions with precision, innovation, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Mission, Vision, Promise */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="glass-card rounded-3xl p-8 animate-slide-in-up" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative, secure, and scalable technology solutions that drive growth and digital transformation.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 animate-slide-in-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of enterprise technology solutions, recognized for excellence, innovation, and client success.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 animate-slide-in-up" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deliver exceptional value through cutting-edge solutions, unwavering support, and partnerships built on trust and integrity.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="glass-card rounded-3xl p-12 mb-20 animate-slide-in-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between business needs and technology solutions, OpenXpert Solutions has grown into a trusted partner for enterprises seeking digital transformation.
              </p>
              <p>
                Our team of experts brings decades of combined experience in enterprise systems, web development, and IT infrastructure management. We pride ourselves on delivering solutions that are not just technically sound, but also aligned with our clients' strategic objectives.
              </p>
              <p>
                From ERP implementations to custom e-commerce platforms, from 24/7 monitoring to community-driven open-source projects, we approach every engagement with the same commitment to excellence and innovation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our Values</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Security", "Innovation", "Integrity", "Excellence", "Collaboration", "Agility"].map((value, index) => (
                <div
                  key={value}
                  className="glass-card px-8 py-4 rounded-full animate-slide-in-up"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
