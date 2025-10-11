import { useState } from "react";
import {
  Send,
  CheckCircle,
  MessageCircle,
  SendHorizonal,
  X,
} from "lucide-react";
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
type Platform = "whatsapp" | "telegram";

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

  // ✅ Handles text, textarea, and select inputs safely
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Correctly typed form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const msg = encodeURIComponent(
      `Hello! I'd like to order a website.\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `WhatsApp: ${formData.whatsapp}\n` +
        `Service Type: ${formData.serviceType}\n` +
        `Budget: ${formData.budget}\n\n` +
        `Description:\n${formData.description}`
    );

    setMessage(msg);
    setShowOptions(true);
  };

  // ✅ Type-safe send handler
  const handleSend = (platform: Platform): void => {
    const whatsappNumber = "251929501350";
    const telegramUsername = "haphi_luxury"; // remove '@'

    if (platform === "whatsapp") {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } else {
      window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
    }

    // Reset the form
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

  // ✅ Confirmation screen
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
            Thank you for your order request. I’ll review your requirements and
            get back to you shortly via your selected platform.
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

  // ✅ Main Form Layout
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
                WhatsApp Number *
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

            {/* Submit Button */}
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

      {/* Step Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: 1,
                title: "Submit Form",
                text: "Fill out the order form with your project details",
              },
              {
                num: 2,
                title: "Review & Quote",
                text: "I’ll review your requirements and send a detailed quote",
              },
              {
                num: 3,
                title: "Start Building",
                text: "Once approved, I’ll start working on your project",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Choice Modal */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full relative"
            >
              <button
                onClick={() => setShowOptions(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Choose where to send your order
              </h2>
              <p className="text-gray-500 mb-6 text-sm">
                Select WhatsApp or Telegram to complete your order submission.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleSend("whatsapp")}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </button>
                <button
                  onClick={() => handleSend("telegram")}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                  <SendHorizonal className="w-5 h-5" /> Telegram
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
