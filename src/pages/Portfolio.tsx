import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'websites',
      image: 'https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-featured online store with payment integration',
      link: '#'
    },
    {
      title: 'Corporate Website',
      category: 'websites',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional business website with CMS',
      link: '#'
    },
    {
      title: 'Restaurant Website',
      category: 'websites',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern restaurant site with online ordering',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'apps',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Secure banking application for iOS and Android',
      link: '#'
    },
    {
      title: 'Fitness Tracker',
      category: 'apps',
      image: 'https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Health and fitness tracking mobile app',
      link: '#'
    },
    {
      title: 'Social Media App',
      category: 'apps',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Community-focused social networking platform',
      link: '#'
    },
    {
      title: 'Brand Identity Design',
      category: 'branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand package with logo and guidelines',
      link: '#'
    },
    {
      title: 'Marketing Materials',
      category: 'branding',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Print and digital marketing collateral',
      link: '#'
    },
    {
      title: 'UI/UX Design System',
      category: 'branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive design system for web application',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      category: 'websites',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Personal portfolio for creative professional',
      link: '#'
    },
    {
      title: 'Real Estate Platform',
      category: 'websites',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Property listing and management system',
      link: '#'
    },
    {
      title: 'Delivery App',
      category: 'apps',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Food delivery mobile application',
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'apps', label: 'Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore my recent work and see how I've helped clients achieve their digital goals
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === filterOption.id
                    ? 'bg-secondary text-primary shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.link}
                      className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
