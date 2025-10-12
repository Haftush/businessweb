import { useState } from "react";
import { Send, CheckCircle, SendHorizonal, X, Mail } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Strongly typed form data interface
interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  serviceType: string;
  description: string;
  budget: string;
}

// ✅ Union type for supported messaging platforms
type Platform = "whatsapp" | "telegram" | "email";

export default function Order() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    description: "",
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [message, setMessage] = useState("");

  const serviceTypes: string[] = [
    "Personal Portfolio",
    "Business Website",
    "E-commerce",
    "Mobile App",
    "Branding & Design",
    "Programming & Tech",
    "Other",
  ];

  const budgets: string[] = [
    "Basic - $100",
    "Professional - $250",
    "Premium - $500+",
    "Custom Budget",
  ];

  // ✅ Handles all input types safely
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const msg = encodeURIComponent(
      `Hello! I'd like to order a project.\n\n` +
        `👤 Name: ${formData.name}\n` +
        `📧 Email: ${formData.email}\n` +
        `📱 Phone Number: ${formData.whatsapp}\n` +
        `💼 Service Type: ${formData.serviceType}\n` +
        `💰 Budget: ${formData.budget}\n\n` +
        `📝 Description:\n${formData.description}`
    );

    setMessage(msg);
    setShowOptions(true);
  };

  // ✅ Platform send handler
  const handleSend = (platform: Platform): void => {
    const whatsappNumber = "251929501350";
    const telegramUsername = "haphi_luxury";
    const emailReceiver = "haftu.g.mu24@gmail.com"; // 👈 your email

    if (platform === "whatsapp") {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } else if (platform === "telegram") {
      window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
    } else if (platform === "email") {
      window.open(
        `mailto:${emailReceiver}?subject=New Project Order&body=${message}`,
        "_blank"
      );
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      serviceType: "",
      description: "",
      budget: "",
    });
    setShowOptions(false);
    setSubmitted(true);
  };

  // ✅ Confirmation Screen
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Order Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order request. I’ll contact you soon via your
            selected platform.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Submit Another Order
          </button>
        </motion.div>
      </div>
    );
  }

  // ✅ Main Form UI
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Order Your Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Fill out the form below and I’ll help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="your@example.com"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                placeholder="+2519..."
              />
            </div>

            {/* Service Type & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select budget</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Describe your project requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
            >
              Send Order
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Platform Choice Modal */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-white/90 to-gray-100/90 
                   dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl 
                   border border-white/30 shadow-2xl rounded-3xl 
                   w-full max-w-sm sm:max-w-md p-6 sm:p-10 text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowOptions(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-all duration-200"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Title */}
              <motion.h2
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-lg sm:text-2xl font-extrabold text-gray-800 dark:text-white mb-2 sm:mb-3"
              >
                Send Your Order Via
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed"
              >
                Choose your preferred communication platform below.
              </motion.p>

              {/* Platform Buttons */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend("whatsapp")}
                  className="flex flex-col items-center justify-center gap-1 sm:gap-2 bg-gradient-to-br 
                       from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 
                       text-white font-semibold py-3 sm:py-4 rounded-2xl shadow-md 
                       hover:shadow-lg transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5 sm:w-7 sm:h-7" />
                  <span className="text-xs sm:text-sm">WhatsApp</span>
                </motion.button>

                {/* Telegram */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend("telegram")}
                  className="flex flex-col items-center justify-center gap-1 sm:gap-2 bg-gradient-to-br 
                       from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                       text-white font-semibold py-3 sm:py-4 rounded-2xl shadow-md 
                       hover:shadow-lg transition-all duration-300"
                >
                  <FaTelegramPlane className="w-5 h-5 sm:w-7 sm:h-7" />
                  <span className="text-xs sm:text-sm">Telegram</span>
                </motion.button>

                {/* Email */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend("email")}
                  className="flex flex-col items-center justify-center gap-1 sm:gap-2 bg-gradient-to-br 
                       from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-600 
                       text-white font-semibold py-3 sm:py-4 rounded-2xl shadow-md 
                       hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5 sm:w-7 sm:h-7" />
                  <span className="text-xs sm:text-sm">Email</span>
                </motion.button>
              </motion.div>

              {/* Footer Text */}
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400"
              >
                Your information will remain private and secure.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
