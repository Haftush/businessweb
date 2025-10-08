import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const packages = [
    {
      name: 'Basic',
      price: '$100',
      description: 'Perfect for personal portfolios and landing pages',
      features: [
        'Single-page website',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Mobile optimized',
        '1 week delivery',
        '1 revision round'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$250',
      description: 'Ideal for small businesses and startups',
      features: [
        'Multi-page website (up to 5 pages)',
        'Advanced responsive design',
        'Contact & custom forms',
        'SEO optimization',
        'Analytics integration',
        'Social media integration',
        '2 weeks delivery',
        '3 revision rounds',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$500+',
      description: 'Complete solution for established businesses',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'E-commerce integration',
        'Advanced SEO & marketing',
        'Database integration',
        'API development',
        'Hosting setup',
        'Content management system',
        'Unlimited revisions',
        '90 days support',
        'Training included'
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: 'Additional page', price: '$50' },
    { name: 'Logo design', price: '$100' },
    { name: 'Content writing', price: '$75/page' },
    { name: 'Extra revision round', price: '$50' },
    { name: 'Extended support (30 days)', price: '$100' },
    { name: 'E-commerce setup', price: '$200+' }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing Plans</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-secondary' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-secondary text-primary text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate('order')}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-secondary text-primary hover:bg-secondary/90'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-600">Enhance your package with additional features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold text-gray-700">{addon.name}</span>
                <span className="text-secondary font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">What's included in the price?</h3>
              <p className="text-gray-700">
                Each package includes everything listed in the features. You'll get a fully functional,
                responsive website optimized for all devices with the specified number of revisions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">How long does it take?</h3>
              <p className="text-gray-700">
                Delivery times vary by package: Basic (1 week), Professional (2 weeks), Premium (3-4 weeks).
                Rush delivery is available for an additional fee.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-700">
                Yes! For Professional and Premium packages, I offer flexible payment plans. 50% upfront,
                50% upon completion. Custom arrangements available for larger projects.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">What if I need something custom?</h3>
              <p className="text-gray-700">
                I'm happy to create custom packages! Contact me with your requirements, and I'll provide
                a tailored quote that fits your specific needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Choose your package and let's bring your vision to life. Custom quotes available for unique projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('order')}
              className="bg-secondary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all inline-flex items-center justify-center gap-2"
            >
              Place Your Order
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
