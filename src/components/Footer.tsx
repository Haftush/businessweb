import {
  Facebook,
  Youtube,
  Github,
  MessageCircle,
  Send,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/251929501350", // ✅ Correct WhatsApp link
      label: "WhatsApp",
      color: "#25D366",
    },
    {
      icon: Send,
      href: "https://t.me/haphi_luxury", // ✅ Correct Telegram link
      label: "Telegram",
      color: "#0088cc",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/haftu.584",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@luxurydesigndevelop",
      label: "YouTube",
      color: "#FF0000",
    },
    {
      icon: Github,
      href: "https://github.com/Haftush",
      label: "GitHub",
      color: "#9ca3af",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      href: "mailto:haftu.g.mu24@gmail.com",
      text: "haftu.g.mu24@gmail.com",
      color: "text-blue-400",
      hoverColor: "hover:text-white",
    },
    {
      icon: Phone,
      href: "tel:+251912169209",
      text: "+251-9-1216-9209 | +251-9-2950-1350",
      color: "text-green-400",
      hoverColor: "hover:text-white",
    },
    {
      icon: MapPin,
      href: "https://maps.google.com/?q=Addis+Ababa,Ethiopia",
      text: "Addis Ababa, Ethiopia",
      color: "text-red-400",
      hoverColor: "hover:text-white",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              WebStudio
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md mx-auto sm:mx-0">
              Professional web design and development services to bring your
              digital vision to life. Let’s create something amazing together.
            </p>

            <div className="space-y-4 mb-8 ml-8 sm:ml-0">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.icon === MapPin ? "_blank" : "_self"}
                    rel={contact.icon === MapPin ? "noopener noreferrer" : ""}
                    className="flex items-center gap-3 text-gray-400 transition-colors group cursor-pointer"
                  >
                    <Icon
                      className={`h-5 w-5 ${contact.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className={`${contact.hoverColor} transition-colors`}>
                      {contact.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="sm:col-span-2 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md text-center">
              <h4 className="text-xl font-semibold mb-4">Let’s Connect</h4>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Follow us on social media for updates and insights.
              </p>

              {/* Social Icons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}33, ${social.color}66)`,
                        boxShadow: `0 0 15px ${social.color}55`,
                      }}
                    ></div>
                    <social.icon
                      size={22}
                      className="relative text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
                    />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="w-full bg-white/5 rounded-2xl p-5 sm:p-6 backdrop-blur-md border border-white/10 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-base text-gray-200 mb-4 font-medium tracking-wide">
                  Stay updated with our latest news and insights
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  />
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-secondary to-accent text-white rounded-lg font-medium shadow-md hover:from-secondary/90 hover:to-accent/90 hover:shadow-lg transform hover:scale-[1.03] transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} WebStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
