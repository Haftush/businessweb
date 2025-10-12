import React from "react";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Wrench,
  ArrowRight,
  PenTool,
} from "lucide-react";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: <Code />,
      title: "Personal Portfolio",
      description:
        "Showcase your work and skills with a stunning portfolio website that makes a lasting impression.",
      features: [
        "Responsive Design",
        "Custom Layout",
        "Contact Forms",
        "Social Integration",
      ],
      price: "From $100",
    },
    {
      icon: <ShoppingCart />,
      title: "Business Websites",
      description:
        "Professional business websites that establish credibility and drive growth for your company.",
      features: [
        "Multi-page Design",
        "SEO Optimization",
        "Analytics Setup",
        "Lead Generation",
      ],
      price: "From $250",
    },
    {
      icon: <ShoppingCart />,
      title: "E-commerce",
      description:
        "Complete online store solutions with payment integration and inventory management.",
      features: [
        "Product Catalog",
        "Payment Gateway",
        "Shopping Cart",
        "Order Management",
      ],
      price: "From $500",
    },
    {
      icon: <PenTool />,
      title: "Branding & Digital Design",
      description:
        "Create a unique visual identity with custom logos, graphics, and brand guidelines.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Marketing Materials",
        "UI/UX Design",
      ],
      price: "Custom Quote",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps built with Flutter for iOS and Android devices.",
      features: [
        "Cross-platform",
        "Native Performance",
        "Push Notifications",
        "API Integration",
      ],
      price: "From $800",
    },
    {
      icon: <Wrench />,
      title: "Programming & Tech Solutions",
      description:
        "Custom software development, API integration, and technical consulting services.",
      features: [
        "API Development",
        "Database Design",
        "System Integration",
        "Technical Support",
      ],
      price: "Custom Quote",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Professional Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your unique business
            needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="p-8">
                  {/* Icon + Title Flex Section */}
                  <div className="flex items-center gap-3 mb-6 sm:flex-col sm:items-start sm:gap-0">
                    <div className="text-secondary">
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className:
                          "w-10 h-10 sm:w-16 sm:h-16 text-secondary flex-shrink-0 transition-all",
                      })}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                    {service.price}
                  </div>

                  <button
                    onClick={() => onNavigate("order")}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Order Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Choose the service that fits your needs and let's create something
            amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("order")}
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all inline-flex items-center justify-center gap-2"
            >
              Order a Service
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("pricing")}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
