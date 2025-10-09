import { useState } from "react";
import {
  ExternalLink,
  Play,
  ArrowUpRight,
  Github,
  Sparkles,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom Dialog Components
interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-10 w-full max-w-4xl mx-4">{children}</div>
    </div>
  );
};

const DialogContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};

const DialogHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative p-6 border-b border-gray-200 dark:border-slate-700">
      {children}
    </div>
  );
};

const DialogTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>;
};

// Custom Button Component
interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
  asChild?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "default",
  className = "",
  asChild,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles =
    "flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";

  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Project Interface
interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  fullDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
  featured?: boolean;
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      category: "websites",
      image:
        "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Full-featured online store with payment integration",
      link: "#",
      fullDescription:
        "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard. The platform supports multiple payment gateways and provides a seamless shopping experience across all devices.",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Corporate Website",
      category: "websites",
      image:
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional business website with CMS",
      link: "#",
      fullDescription:
        "A modern corporate website with custom content management system. Built for optimal performance and SEO. Features include blog management, team profiles, service pages, and contact forms with lead capture.",
      liveUrl: "https://corporate-demo.com",
      githubUrl: "https://github.com/username/corporate-website",
      technologies: ["Next.js", "TypeScript", "Sanity CMS", "Vercel"],
      featured: false,
    },
    {
      title: "Restaurant Website",
      category: "websites",
      image:
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern restaurant site with online ordering",
      link: "#",
      fullDescription:
        "A beautiful restaurant website with online ordering system. Customers can browse the menu, place orders for delivery or pickup, and make reservations. Integrated with payment processing and order management.",
      liveUrl: "https://restaurant-demo.com",
      githubUrl: "https://github.com/username/restaurant-website",
      technologies: ["Vue.js", "Firebase", "Stripe", "CSS3"],
      featured: false,
    },
    {
      title: "Mobile Banking App",
      category: "apps",
      image:
        "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Secure banking application for iOS and Android",
      link: "#",
      fullDescription:
        "A secure mobile banking application with biometric authentication, transaction history, bill payments, and fund transfers. Built with security as the top priority using industry-standard encryption.",
      liveUrl: "https://apps.apple.com/banking-app",
      githubUrl: "https://github.com/username/banking-app",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      featured: true,
    },
    {
      title: "Fitness Tracker",
      category: "apps",
      image:
        "https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Health and fitness tracking mobile app",
      link: "#",
      fullDescription:
        "Comprehensive fitness tracking application that monitors workouts, nutrition, and progress. Includes social features, workout plans, and integration with wearable devices.",
      liveUrl: "https://play.google.com/fitness-tracker",
      githubUrl: "https://github.com/username/fitness-tracker",
      technologies: ["Flutter", "Dart", "Firebase", "REST API"],
      featured: false,
    },
    {
      title: "Social Media App",
      category: "apps",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Community-focused social networking platform",
      link: "#",
      fullDescription:
        "A social media platform focusing on community engagement. Features include real-time messaging, content sharing, groups, events, and advanced privacy controls.",
      liveUrl: "https://social-app-demo.com",
      githubUrl: "https://github.com/username/social-app",
      technologies: ["React Native", "GraphQL", "MongoDB", "WebSocket"],
      featured: false,
    },
    {
      title: "Brand Identity Design",
      category: "branding",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete brand package with logo and guidelines",
      link: "#",
      fullDescription:
        "Comprehensive brand identity package including logo design, color palette, typography system, and brand guidelines. Created to establish a strong visual identity across all marketing materials.",
      liveUrl: "#",
      githubUrl: "#",
      technologies: [
        "Adobe Illustrator",
        "Photoshop",
        "Figma",
        "Brand Guidelines",
      ],
      featured: false,
    },
    {
      title: "Marketing Materials",
      category: "branding",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Print and digital marketing collateral",
      link: "#",
      fullDescription:
        "A complete suite of marketing materials including brochures, business cards, social media graphics, and email templates. Designed to maintain brand consistency across all touchpoints.",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["Adobe Creative Suite", "Figma", "Canva", "Print Design"],
      featured: false,
    },
    {
      title: "UI/UX Design System",
      category: "branding",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive design system for web application",
      link: "#",
      fullDescription:
        "A complete design system with reusable components, design tokens, and documentation. Ensures consistency and accelerates development across multiple products.",
      liveUrl: "#",
      githubUrl: "#",
      technologies: [
        "Figma",
        "Storybook",
        "Design Tokens",
        "Component Library",
      ],
      featured: true,
    },
    {
      title: "Portfolio Website",
      category: "websites",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Personal portfolio for creative professional",
      link: "#",
      fullDescription:
        "A custom-built portfolio website showcasing creative work and professional achievements. Features smooth animations, responsive design, and optimized performance.",
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/username/portfolio",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      featured: false,
    },
    {
      title: "Real Estate Platform",
      category: "websites",
      image:
        "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Property listing and management system",
      link: "#",
      fullDescription:
        "A comprehensive real estate platform with property listings, advanced search filters, virtual tours, and agent management system. Integrated with MLS and mapping services.",
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/username/real-estate-platform",
      technologies: ["Next.js", "PostgreSQL", "Mapbox", "Cloudinary"],
      featured: false,
    },
    {
      title: "Delivery App",
      category: "apps",
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Food delivery mobile application",
      link: "#",
      fullDescription:
        "A food delivery application with real-time order tracking, multiple restaurant options, and secure payment processing. Features include order history, favorites, and push notifications.",
      liveUrl: "https://play.google.com/delivery-app",
      githubUrl: "https://github.com/username/delivery-app",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "websites", label: "Websites" },
    { id: "apps", label: "Apps" },
    { id: "branding", label: "Branding" },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore my recent work and see how I've helped clients achieve their
            digital goals
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === filterOption.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 via-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </DialogTitle>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </DialogHeader>

              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-6"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-80 object-contain bg-white dark:bg-slate-800 rounded-2xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                      </div>

                      <div className="flex gap-4">
                        {selectedProject.liveUrl &&
                          selectedProject.liveUrl !== "#" && (
                            <Button className="flex-1 gap-3 py-4 text-lg">
                              <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full justify-center"
                              >
                                <Play className="h-5 w-5" />
                                View Demo
                                <ArrowUpRight className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                        {selectedProject.githubUrl &&
                          selectedProject.githubUrl !== "#" && (
                            <Button
                              variant="outline"
                              className="flex-1 gap-3 py-4 text-lg"
                            >
                              <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full justify-center"
                              >
                                <Github className="h-5 w-5" />
                                Source Code
                              </a>
                            </Button>
                          )}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">
                          Project Overview
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.technologies?.map((tech: string) => (
                            <motion.div key={tech} whileHover={{ scale: 1.05 }}>
                              <Badge
                                variant="secondary"
                                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-0 text-sm"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {selectedProject.featured && (
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
                          <div className="flex items-center gap-3">
                            <Sparkles className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                            <span className="font-semibold text-yellow-700 dark:text-yellow-300">
                              Featured Project
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
