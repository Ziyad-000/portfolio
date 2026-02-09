import { motion } from 'motion/react';
import { ExternalLink, Github, Smartphone, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sceneImage from '../assets/Scene.svg';
import weatherAppImage from '../assets/Weather Safety App.svg';
import codioImage from '../assets/Codio.svg';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  status: string;
  rating: number;
  downloads: string;
  github: string;
  liveUrl: string;
  color: string;
  imageFit?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Weather Safety App',
      description: 'A comprehensive Flutter application designed to keep users informed about weather conditions and ensure their safety through real-time alerts and interactive mapping.',
      image: weatherAppImage,
      technologies: ['Flutter', 'Dart', 'Provider', 'flutter_map', 'Geolocator'],
      features: ['Real-Time Updates', 'Safety Alerts', 'Interactive Maps', 'Smart Insights'],
      status: 'Live',
      rating: 5.0,
      downloads: '100+',
      github: 'https://github.com/SalmaYounissFCI/Weather-Safety-App.git',
      liveUrl: '#',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'StyleShop - E-Commerce App',
      description: 'A premium, comprehensive E-Commerce solution built with Flutter, featuring secure authentication, product browsing, cart management, and order tracking.',
      image: sceneImage,
      technologies: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      features: ['Secure Auth', 'Product Search', 'Order Tracking', 'Favorites'],
      status: 'Completed',
      rating: 4.9,
      downloads: '500+',
      github: '#',
      liveUrl: '#',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'Codio - Smart Deals',
      description: 'A comprehensive ecosystem connecting users with exclusive deals and student offers, featuring a cross-platform mobile app and a powerful web admin dashboard.',
      image: codioImage,
      technologies: ['Flutter', 'Supabase', 'Provider', 'MVVM', 'PostgreSQL'],
      features: ['Student Zone', 'Admin Dashboard', 'Smart Filtering', 'Company Directory'],
      status: 'Client Project (Unreleased)',
      rating: 0,
      downloads: 'N/A',
      github: '#',
      liveUrl: '#',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of mobile applications I've crafted with passion, precision, and cutting-edge technology
            </p>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="relative backdrop-blur-sm bg-card/80 rounded-2xl p-4 shadow-2xl border border-border/30 group-hover:shadow-3xl transition-all duration-500">
                      <div className="relative overflow-hidden rounded-xl">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-[300px] ${project.imageFit || 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Project stats overlay */}
                      <div className="absolute top-8 right-8 backdrop-blur-sm bg-card/90 rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-foreground">{project.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{project.downloads} downloads</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${project.color} text-white px-3 py-1`}
                      >
                        {project.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{project.rating}</span>
                        <span>•</span>
                        <span>{project.downloads}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-muted text-foreground rounded-full text-sm border border-border hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm text-muted-foreground uppercase tracking-wider">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full`}></div>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      className={`bg-gradient-to-r ${project.color} hover:shadow-lg text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-muted px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View all projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}