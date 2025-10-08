import { MessageCircle, Send, Mail, Facebook, Youtube, Github, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      value: '+1234567890',
      link: 'https://wa.me/1234567890',
      color: 'bg-green-500'
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: 'Telegram',
      value: '@yourusername',
      link: 'https://t.me/yourusername',
      color: 'bg-blue-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'your@email.com',
      link: 'mailto:your@email.com',
      color: 'bg-red-500'
    }
  ];

  const socialMedia = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: 'Facebook',
      link: 'https://facebook.com/yourpage',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: 'YouTube',
      link: 'https://youtube.com/@yourchannel',
      color: 'hover:text-red-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      link: 'https://github.com/yourusername',
      color: 'hover:text-gray-900'
    }
  ];

  const quickInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      title: 'Location',
      value: 'Available Worldwide'
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: 'Response Time',
      value: 'Within 24 hours'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Let's discuss your project and how I can help bring your vision to life
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Contact Methods</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to reach me</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`${method.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{method.title}</h3>
                <p className="text-gray-600 text-lg">{method.value}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-center gap-4">
                {info.icon}
                <div>
                  <h4 className="font-bold text-primary mb-1">{info.title}</h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Follow Me On Social Media</h2>
          <p className="text-xl text-gray-600 mb-12">
            Stay updated with my latest projects and tips
          </p>

          <div className="flex justify-center gap-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white p-6 rounded-full shadow-lg transition-all transform hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-200 mb-8">
              I'm available for freelance projects and consulting. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('order')}
                className="bg-secondary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all"
              >
                Order Now
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about working with me</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">What's your typical response time?</h3>
              <p className="text-gray-700">
                I respond to all inquiries within 24 hours, usually much faster. For urgent projects,
                feel free to reach me directly on WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Do you work with international clients?</h3>
              <p className="text-gray-700">
                Yes! I work with clients from all over the world. All communication can be done through
                WhatsApp, Telegram, or email.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">What information should I provide?</h3>
              <p className="text-gray-700">
                The more details, the better! Include your project goals, desired features, timeline,
                budget, and any design preferences. You can use the order form to provide all this information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Can we schedule a call?</h3>
              <p className="text-gray-700">
                Absolutely! After initial contact, we can schedule a WhatsApp or Telegram call to discuss
                your project in detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
