import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    description: "",
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceTypes = [
    "Personal Portfolio",
    "Business Website",
    "E-commerce",
    "Mobile App",
    "Branding & Design",
    "Programming & Tech",
    "Other",
  ];

  const budgets = [
    "Basic - $100",
    "Professional - $250",
    "Premium - $500+",
    "Custom Budget",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello! I'd like to order a website.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AWhatsApp: ${formData.whatsapp}%0AService Type: ${formData.serviceType}%0ABudget: ${formData.budget}%0A%0ADescription:%0A${formData.description}`;

    const whatsappNumber =
      "+251" + formData.whatsapp.replace(/\D/g, "").replace(/^251/, "");

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-secondary/20 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-secondary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Order Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order request. I'll review your requirements and
            get back to you shortly via WhatsApp.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Submit Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Order Your Website
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Fill out the form below and I'll get started on bringing your vision
            to life
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="whatsapp"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                WhatsApp Number *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                placeholder="+1234567890"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select budget</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Describe your project requirements, features you need, design preferences, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
            >
              Send Order via WhatsApp
              <Send className="w-5 h-5" />
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              After submitting, you'll be redirected to WhatsApp to complete
              your order
            </p>
          </form>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Submit Form
              </h3>
              <p className="text-gray-600">
                Fill out the order form with your project details
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Review & Quote
              </h3>
              <p className="text-gray-600">
                I'll review your requirements and send a detailed quote
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Start Building
              </h3>
              <p className="text-gray-600">
                Once approved, I'll start working on your project
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
