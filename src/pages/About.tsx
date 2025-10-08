import {
  Code,
  PenTool,
  Smartphone,
  Database,
  Award,
  ArrowRight,
} from "lucide-react";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const skills = [
    { name: "React", level: 95, icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", level: 90, icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", level: 85, icon: <Database className="w-6 h-6" /> },
    { name: "Flutter", level: 88, icon: <Smartphone className="w-6 h-6" /> },
    { name: "Tailwind CSS", level: 95, icon: <PenTool className="w-6 h-6" /> },
    { name: "UI/UX Design", level: 90, icon: <PenTool className="w-6 h-6" /> },
    {
      name: "Adobe Photoshop",
      level: 92,
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      name: "Adobe Illustrator",
      level: 88,
      icon: <PenTool className="w-6 h-6" />,
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Professional Certification",
      year: "2023",
    },
    {
      title: "Mobile App Development",
      issuer: "Flutter Certified",
      year: "2023",
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Adobe Certified",
      year: "2022",
    },
    {
      title: "Digital Marketing",
      issuer: "Google Certified",
      year: "2023",
    },
  ];

  const experience = [
    {
      role: "Freelance Web Developer",
      period: "2021 - Present",
      description:
        "Creating custom websites and applications for clients worldwide",
    },
    {
      role: "UI/UX Designer",
      period: "2020 - Present",
      description: "Designing beautiful and functional digital experiences",
    },
    {
      role: "Digital Solutions Consultant",
      period: "2022 - Present",
      description: "Helping businesses establish their online presence",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Passionate developer and designer dedicated to creating exceptional
            digital experiences
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Hello, I'm Your Web Developer
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                With over 5 years of experience in web development and digital
                design, I specialize in creating beautiful, functional websites
                and applications that help businesses grow online.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I'm passionate about clean code, modern design, and user
                experience. Every project I take on is an opportunity to create
                something unique and impactful.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you need a simple portfolio, a complex e-commerce
                platform, or a mobile app, I have the skills and experience to
                bring your vision to life.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-secondary/10 px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-secondary/10 px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-secondary/10 px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate("order")}
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
              >
                Hire Me
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across multiple technologies and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-secondary">{skill.icon}</div>
                  <span className="font-semibold text-gray-800">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-secondary font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-secondary h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
            <p className="text-xl text-gray-600">
              Professional journey and expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-secondary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-primary">
                    {exp.role}
                  </h3>
                  <span className="text-secondary font-semibold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Professional credentials and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-secondary font-semibold">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Ready to start your next project? Get in touch and let's create
            something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("order")}
              className="bg-secondary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all inline-flex items-center justify-center gap-2"
            >
              Hire Me Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
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
