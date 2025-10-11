import {
  Code,
  Palette,
  ShoppingCart,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Zap,
  Target,
  Clock,
  Shield,
  Users,
  TrendingUp,
  PenTool,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      features: ["React/Next.js", "TypeScript", "Responsive Design"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      features: ["Flutter", "iOS & Android", "Native Performance"],
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Digital Design",
      description: "Beautiful branding and UI/UX design",
      features: ["Figma", "User Research", "Prototyping"],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce",
      description: "Complete online store solutions",
      features: ["Shopify", "Payment Integration", "Inventory Management"],
    },
  ];

  const stats = [
    {
      icon: <Zap className="w-6 h-6" />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "30+",
      label: "Happy Clients",
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "98%",
      label: "Success Rate",
    },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support" },
  ];

  const reasons = [
    {
      text: "Fast delivery and reliable service",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      text: "Modern, responsive designs",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      text: "SEO optimized websites",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      text: "Ongoing support and maintenance",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      text: "Affordable pricing packages",
      icon: <Target className="w-5 h-5" />,
    },
    {
      text: "Professional quality guaranteed",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  const portfolioPreview = [
    {
      name: "E-commerce Platform",
      category: "Website",
      image:
        "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Mobile Banking App",
      category: "App",
      image:
        "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Firebase", "Stripe"],
    },
    {
      name: "Brand Identity",
      category: "Design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Figma", "Adobe Suite", "Prototyping"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "Outstanding work! My website looks professional and has helped grow my business significantly.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content:
        "Fast, reliable, and high-quality. Exactly what I needed for my startup.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      role: "Freelancer",
      content: "Great communication and beautiful design. Highly recommended!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Mouse Trailer */}
      <div className="fixed w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full pointer-events-none z-50 mix-blend-multiply opacity-20" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-primary/90">
        {/* Animated Background Particles */}

        <div
          className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">
              Trusted by 30+ Companies
            </span>
          </div>

          <div className="px-6 sm:px-10 md:px-20 py-12 text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-snug tracking-tight">
              Transform Your{" "}
              <span className="relative inline-block bg-gradient-to-r from-blue-400 via-yellow-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                {" "}
                Digital Presence
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4 px-2 sm:px-6">
              Empowering brands through{" "}
              <span className="text-white font-medium">innovation</span>,
              <span className="text-yellow-300 font-medium"> design</span>, and
              <span className="text-blue-300 font-medium"> technology</span> —
              crafting digital experiences that inspire growth and connection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate("order")}
              className="group bg-secondary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-secondary/25"
            >
              <span>Order Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("portfolio")}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/30 hover:border-white/50 flex items-center gap-3"
            >
              <span>View Our Work</span>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-secondary">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative py-24 px-4 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive{" "}
              <span className="text-primary">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end services to transform your ideas into powerful digital
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-primary/20"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="relative py-24 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Perfect <span className="text-primary">Partnership</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {reason.text}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Delivering excellence through dedicated service and
                    innovative solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="relative py-24 px-4 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest and most innovative digital creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioPreview.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-3">
                    {project.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("portfolio")}
              className="group bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-lg shadow-primary/25"
            >
              Explore Full Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="relative py-24 px-4 bg-gradient-to-br from-slate-900 to-primary text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-secondary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've
              helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="relative py-24 px-6 bg-gradient-to-br from-slate-900 to-primary text-white overflow-hidden"
      >
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform{" "}
            <span className="text-secondary">Your Business?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Let's create something extraordinary together. Your vision, our
            expertise - the perfect combination for success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate("order")}
              className="group bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <span>Order Your Projectt</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
